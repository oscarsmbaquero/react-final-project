import React, { useEffect, useState } from 'react'
import './Chat.scss'
import ChatInput from './Components/ChatInput'
import ChatList from './Components/ChatList'

const Chat = () => {
    const [chatList, setChatList] = useState([]);
    const [selectedChat, setSelectedChat] = useState(undefined);

    //call the user list
    useEffect(() => {

        fetch('https://62852cc03060bbd347460bff.mockapi.io/users')
            .then(response => response.json())
            .then(data => { setChatList(data) })
            .finally(() => {

            })
    }, []);


    return (
        <div className="chatContainer">
            <div className='chatContainer__user'>
                <div>
                    {/* <img src='/images/Spinner-3.gif' alt="" /> */}
                    {chatList.map((chat, index) =>
                        <ChatList
                            key={chat.id}
                            chat={chat}
                            index={index}
                            setSelectedChat={setSelectedChat}
                            selectedChat={selectedChat} />
                    )}
                </div>
            </div>
            <ChatInput />
        </div>
    )
}

export default Chat