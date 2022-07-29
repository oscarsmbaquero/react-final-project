import React, { useEffect, useState, useRef } from 'react'
import './Chat.scss'
import Messages from './Components/Messages'
import Contacts from './Components/Contacts'
import { useGetAuth } from '../../context/context';
import { BASE_URL } from '../../assets/ApiRoutes';
import { io } from "socket.io-client"
import CurrentUser from './Components/CurrentUser';
import { useParams } from 'react-router-dom';
import { useWindowSize } from '../../utils/windowSize';

export const SelectedChatContext = React.createContext();

const Chat = () => {
    const [contacts, setContacts] = useState(undefined);
    const [selectedChat, setSelectedChat] = useState(undefined);
    const [height, width] = useWindowSize();
    const [showChat, setShowChat] = useState("hidden");

    useEffect(() => {
        if (width < 810) {
            if (showChat === "hidden") {
                setShowChat("chat")
            }
        } else if (width > 810) {
            if (showChat === "chat" || showChat === "contacts") {
                setShowChat("hidden")
            }
        }
    }, [width])

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

    const handleShow = () => {
        showChat === "chat" ? setShowChat("contacts") : setShowChat("chat")
    }

    return (
        <section className='chatContainer'>
            <SelectedChatContext.Provider value={selectedChat}>
                <div className="chat">
                    {showChat === "contacts" || showChat === "hidden" ? <div className='chat__list'>
                        <div>
                            {contacts && contacts.map(contact =>
                                <div key={contact.id}>
                                    <Contacts
                                        contact={contact}
                                        setSelectedChat={setSelectedChat}
                                        setShowChat={setShowChat}
                                        width={width}
                                    />
                                    <div className='chat__line'></div>
                                </div>
                            )}
                        </div>
                        <CurrentUser />
                    </div> : ""}
                    {showChat === "chat" || showChat === "hidden" ? <Messages socket={socket} /> : ""}
                </div>
            </SelectedChatContext.Provider>
            <button className='chat__button' onClick={handleShow}>Contacts</button>
        </section>
    )
}

export default Chat