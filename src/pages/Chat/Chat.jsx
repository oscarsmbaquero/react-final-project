import React, { useEffect, useState, useRef } from 'react'
import './Chat.scss'
import Messages from './Components/Messages'
import Contacts from './Components/Contacts'
import { useGetAuth } from '../../context/context';
import { BASE_URL } from '../../assets/ApiRoutes';
import { io } from "socket.io-client"
import CurrentUser from './Components/CurrentUser';
import { useParams } from 'react-router-dom';

export const SelectedChatContext = React.createContext();

const Chat = () => {
    const [contacts, setContacts] = useState(undefined);
    const [selectedChat, setSelectedChat] = useState(undefined);

    const { id: id_params } = useParams();
    const socket = useRef();

    useEffect(() => {
        if (id_params && contacts) {
            const contactsParams = contacts.find((contact) => {
                return id_params === contact.id
            })
            setSelectedChat(contactsParams)
        };
    }, [contacts])

    const loggedUser = useGetAuth();

    useEffect(() => {
        socket.current = io(BASE_URL);
        // console.log(socket.id);
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
                // return console.log(error, 'vaya, ha habido un error')
            }
        }

        fetchData()
    }, [loggedUser.token]);

    return (
        <section className='chatContainer'>
            <SelectedChatContext.Provider value={selectedChat}>
                <div className="chat">
                    <div className='chat__list'>
                        <div>
                            {contacts && contacts.map(contact =>
                                <div key={contact.id}>
                                    <Contacts
                                        contact={contact}
                                        setSelectedChat={setSelectedChat}
                                    />
                                    <div className='chat__line'></div>
                                </div>
                            )}
                        </div>
                        <CurrentUser />
                    </div>
                    <Messages socket={socket} />
                </div>
            </SelectedChatContext.Provider>
            <button className='chat__button'>Chatea</button>
        </section>
    )
}

export default Chat