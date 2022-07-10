import React from 'react'
import './ChatContainer.scss'
import ChatInput from './ChatInput'

const ChatContainer = ({ selectedChat }) => {

    return (
        <div className='msgContainer'>
            {selectedChat &&
                <p>{selectedChat.name}</p>}
            <ChatInput />
        </div>
    )
}

export default ChatContainer