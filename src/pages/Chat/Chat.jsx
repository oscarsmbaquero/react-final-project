import React, { useEffect, useState, useRef } from 'react'
import './Chat.scss'
import Messages from './Components/Messages'
import Contacts from './Components/Contacts'
import { useDispatchAuth, useGetAuth } from '../../context/context';
import { BASE_URL } from '../../assets/ApiRoutes';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../context';
import { io } from "socket.io-client"

export const SelectedChatContext = React.createContext();

const Chat = () => {

    // const [receiveMsj, setReceiveMsj] = useState("");

    const socket = useRef();

    const navigate = useNavigate();
    const dispatch = useDispatchAuth();

    const [contacts, setContacts] = useState(undefined);
    const [selectedChat, setSelectedChat] = useState(undefined);

    const loggedUser = useGetAuth()

    useEffect(() => {
        socket.current = io(BASE_URL);
        socket.current.emit("add-user", loggedUser.id)
    })

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await fetch(`${BASE_URL}/users/contacts`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${loggedUser.token}`
                    }
                });

                const jsonData = await data.json();
                setContacts(jsonData.data.contacts);

            } catch (error) {
                // logout(dispatch)
                // navigate('/users/login')
                return console.log(error, 'vaya, ha habido un error')
            }
        }

        fetchData()
    }, [loggedUser.token]);

    return (
        <div className='container'>
            <SelectedChatContext.Provider value={selectedChat}>
                <div className="chatContainer">

                    <div className='chatContainer__user'>
                        <div>
                            {contacts && contacts.map((contact) =>
                                <Contacts
                                    key={contact.id}
                                    contact={contact}
                                    setSelectedChat={setSelectedChat}
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <Messages socket={socket} />
                    </div>
                </div>
            </SelectedChatContext.Provider>
        </div>
    )
}

export default Chat