import React, { useEffect, useState } from 'react'
import './Messages.scss'
import ChatInput from './ChatInput'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { SelectedChatContext } from '../Chat';
import { useGetAuth } from '../../../context/context';
import { socket, socketConnect } from '../../../utils/socket';

socketConnect()

const Messages = () => {
    const [messages, setMessages] = useState([]);

    const selectedChat = React.useContext(SelectedChatContext)
    const loggedUser = useGetAuth()


    const [message, setMessage] = useState("");
    const [input, setInput] = useState("");

    socket.on('receive-message', message => {
        setMessage(message)
    })
    ////////////////////////
    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleSendMessage = (event) => {
        event.preventDefault()
        socket.emit('send-message', input)
        setInput("")
    }



    /*     useEffect(() => {
            if (selectedChat) {
                fetch(`${BASE_URL}/messages/getMessages`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${loggedUser.token}`
                    },
                    body: JSON.stringify({
                        from: loggedUser.id,
                        to: selectedChat?.id
                    })
                })
                    .then(res => res.json())
                    .then(data => setMessages(data))
            }
        }, [selectedChat]); */

    const sendMsg = (message) => {
        setMessages(message)
    }

    return (
        <div className='msgContainer'>
            <header className="App-header">
                <p>{message} hola</p>
                <form onSubmit={handleSendMessage}>
                    <input type="text" value={input} onChange={handleInput} />
                </form>
            </header>
            {selectedChat ?
                <div className='msgContainer__items'>
                    <p className="msgContainer__name">{selectedChat.name}</p>
                    <p>{messages ? messages : ""}</p>
                    {/*         {messages.map((msg, index) =>
                        <p className={`msgContainer__text ${msg.fromSelf && "msgContainer__text--textRight"}`} key={index}>
                            {msg.messageText}
                        </p>
                    )} */}
                    <ChatInput sendMsg={sendMsg} />
                </div>
                : <p className='msgContainer__title'>Welcome, please select a chat!</p>
            }
        </div>
    )
}

export default Messages