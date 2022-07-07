import React from 'react'
import './ChatContainer.scss'

const ChatContainer = ({ selectedChat }) => {

    return (
        <div className='msgContainer'>
            {selectedChat && <p>{selectedChat.name}</p>}
        </div>
    )
}

export default ChatContainer