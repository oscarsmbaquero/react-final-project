import React, { useEffect, useState } from 'react'
import './Messages.scss'
import ChatInput from './ChatInput'
import { BASE_URL } from '../../../assets/ApiRoutes';

const Messages = ({ selectedChat }) => {
    const [messages, setMessages] = useState([]);
    
    

    // useEffect(() => {
    //     fetch(`${BASE_URL}/messages/getMessages`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             from: 'ddd'
    //         })
    //     })
    // }, []);

    const sendMsg = () => {

    }

    return (
        <div className='msgContainer'>
            {selectedChat ?
                <div className='msgContainer__items'>
                    <p className="msgContainer__name">{selectedChat.name}</p>
                    {messages.map((msg, index) =>
                        <p key={index}>{msg}</p>
                    )}
                    <ChatInput sendMsg={sendMsg} />
                </div> :
                <p className='msgContainer__title'>Welcome, please select a chat!</p>
            }
        </div>
    )
}

export default Messages