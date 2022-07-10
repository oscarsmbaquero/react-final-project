import React, { useEffect, useState } from 'react'
// import { dispatchTest, useDispatchAuth, useGetAuth } from '../../context'
import './Chat.scss'
import Messages from './Components/Messages'
import Contacts from './Components/Contacts'

const Chat = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedChat, setSelectedChat] = useState(undefined);

    //call the user list
    useEffect(() => {

        fetch('https://62852cc03060bbd347460bff.mockapi.io/users')
            .then(response => response.json())
            .then(data => { setContacts(data) })
            .finally(() => {

            })
    }, []);

    // const getContext = useGetAuth()
    // const dispatch = useDispatchAuth()

    // const handleReducer = () => {
    //     dispatchTest(dispatch, "value2")
    // }

    return (
        <div className='container'>
            <div className="chatContainer">
                {/* <p onClick={handleReducer} >{getContext}</p> */}
                <div className='chatContainer__user'>
                    <div>
                        {/* <img src='/images/Spinner-3.gif' alt="" /> */}
                        {contacts.map((chat) =>
                            <Contacts
                                key={chat.id}
                                chat={chat}
                                id={chat.id}
                                setSelectedChat={setSelectedChat}
                                selectedChat={selectedChat} />
                        )}
                    </div>
                </div>
                <div>
                    <Messages selectedChat={selectedChat} />
                </div>
            </div>
        </div>
    )
}

export default Chat