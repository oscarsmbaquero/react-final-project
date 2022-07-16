import React, { useEffect, useState } from 'react'
import './Messages.scss'
import ChatInput from './ChatInput'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { SelectedChatContext } from '../Chat';
import { useGetAuth } from '../../../context/context';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    const selectedChat = React.useContext(SelectedChatContext)
    const currentUser = useGetAuth()

    // console.log(selectedChat?._id, currentUser.id);

    useEffect(() => {
        if (selectedChat) {
            fetch(`${BASE_URL}/messages/getMessages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: currentUser.id,
                    to: selectedChat?._id
                })
            })
                .then(res => res.json())
                .then(data => setMessages(data))
        }
    }, [selectedChat]);

    const sendMsg = () => {

    }

    return (
        <div className='msgContainer'>
            {selectedChat ?
                <div className='msgContainer__items'>
                    <p className="msgContainer__name">{selectedChat.name}</p>
                    {messages.map((msg, index) =>
                        <p className={`msgContainer__text ${msg.fromSelf && "msgContainer__text--textRight"}`} key={index}>
                            {msg.messageText}
                        </p>
                    )}
                    <ChatInput sendMsg={sendMsg} />
                </div>
                : <p className='msgContainer__title'>Welcome, please select a chat!</p>
            }
        </div>
    )
}

export default Messages