import React, { useEffect, useState } from 'react'
// import { dispatchTest, useDispatchAuth, useGetAuth } from '../../context'
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

    // const getContext = useGetAuth()
    // const dispatch = useDispatchAuth()

    // const handleReducer = () => {
    //     dispatchTest(dispatch, "value2")
    // }

    return (
        <div className="chatContainer">
            {/* <p onClick={handleReducer} >{getContext}</p> */}
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