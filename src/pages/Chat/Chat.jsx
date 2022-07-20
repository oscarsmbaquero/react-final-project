import React, { useEffect, useState } from 'react'
import './Chat.scss'
import Messages from './Components/Messages'
import Contacts from './Components/Contacts'
import { useDispatchAuth, useGetAuth } from '../../context/context';
import { BASE_URL } from '../../assets/ApiRoutes';
import { socket, socketConnect } from '../../utils/socket';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../context';

export const SelectedChatContext = React.createContext();

const Chat = () => {

    const navigate = useNavigate();
    const dispatch = useDispatchAuth();

    const [contacts, setContacts] = useState(undefined);
    const [selectedChat, setSelectedChat] = useState(undefined);

    // const socket = io(BASE_URL);

    /*     socket.on('connect', () => {
        console.log(`conected with id: ${socket.id}`);
    })
    */
    const loggedUser = useGetAuth()

    /*     useEffect(() => {
    
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
                .catch(error => {
                    logout(dispatch)
                    navigate('/users/login')
                    return console.log(error)
                })
        }, [loggedUser.token]); */

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
                return console.log(error ,'vaya, ha habido un error')
            }
        }

            fetchData()
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