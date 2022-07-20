import React, { useEffect, useState } from 'react'
import './Chat.scss'
import Messages from './Components/Messages'
import Contacts from './Components/Contacts'
import { useGetAuth } from '../../context/context';
import { BASE_URL } from '../../assets/ApiRoutes';
import { socket, socketConnect } from '../../utils/socket';


export const SelectedChatContext = React.createContext();


const Chat = () => {

    const [contacts, setContacts] = useState(undefined);
    const [selectedChat, setSelectedChat] = useState(undefined);

    // const socket = io(BASE_URL);

    /*     socket.on('connect', () => {
        console.log(`conected with id: ${socket.id}`);
    })
    */
    const loggedUser = useGetAuth()




    useEffect(() => {

        console.log("está entrando en la app")
        fetch(`${BASE_URL}/users/contacts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${loggedUser.token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                    return setContacts(data.data.contacts)
                })
                .catch(error => alert(error))
    }, [loggedUser.token]);

    console.log('has rendered');

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
                        <Messages />
                    </div>
                </div>
            </SelectedChatContext.Provider>
        </div>
    )
}

export default Chat