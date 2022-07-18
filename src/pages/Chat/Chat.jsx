import React, { useEffect, useState } from 'react'
import './Chat.scss'
import Messages from './Components/Messages'
import Contacts from './Components/Contacts'

export const SelectedChatContext = React.createContext();

const Chat = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedChat, setSelectedChat] = useState(undefined);

    //call the user list
    useEffect(() => {

        fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(data => { setContacts(data) })
    }, []);

    console.log('me he renderizado');
    return (
        <div className='container'>
            <SelectedChatContext.Provider value={selectedChat}>
                <div className="chatContainer">
                    <div className='chatContainer__user'>
                        <div>
                            {contacts.map((contact) =>
                                <Contacts
                                    key={contact._id}
                                    contact={contact}
                                    id={contact.id}
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