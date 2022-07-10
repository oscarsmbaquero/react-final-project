import React, { useState } from 'react'
import './Messages.scss'
import ChatInput from './ChatInput'

const Messages = ({ selectedChat }) => {
    const [messages, setMessages] = useState([]);

    return (
        <div className='msgContainer'>
            {selectedChat ?
                <div className='msgContainer__items'>
                    <p>{selectedChat.name}</p>
                    {messages.map((msg, index) =>
                        <p key={index}>{msg}</p>
                    )}
                    <ChatInput setMessages={setMessages} />
                </div> :
                <p>Welcome, please select a chat!</p>
            }
        </div>
    )
}

export default Messages