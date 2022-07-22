import React, { useEffect, useState } from 'react'
import './Messages.scss'
import ChatInput from './ChatInput'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { SelectedChatContext } from '../Chat';
import { useGetAuth } from '../../../context/context';

const Messages = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    const [arrivalMsg, setArrivalMsg] = useState(null);

    const selectedChat = React.useContext(SelectedChatContext);
    const loggedUser = useGetAuth();

    useEffect(() => {
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
    }, [selectedChat]);

    const handleSendMessage = (msg) => {
        fetch(`${BASE_URL}/messages/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${loggedUser.token}`
            },
            body: JSON.stringify({
                to: selectedChat.id,
                from: loggedUser.id,
                message: msg
            })
        })
            .then((res) => res.json())
            .then(data => console.log(data));

        socket.current.emit('send-msg', {
            from: loggedUser.id,
            to: selectedChat.id,
            message: msg
        })
        const msgs = [...messages];
        msgs.push({ fromSelf: true, messageText: msg })
        setMessages(msgs)
    };

    if (socket.current) {
        console.log("hemos entrado acá o que?");
        socket.current.on("msg-recieve", (msg) => {
            setArrivalMsg({ fromSelf: false, messageText: msg });
        });
    }

    useEffect(() => {
        arrivalMsg && setMessages((prevMessage) => [...prevMessage, arrivalMsg])
    }, [arrivalMsg])

    return (
        <div>
            {selectedChat ?
                <div>
                    <h2>{selectedChat.name}</h2>
                    {messages.map((msg, index) =>
                        <p className={`msgContainer__text ${msg.fromSelf && "msgContainer__text--textRight"}`} key={index}>
                            {msg.messageText}
                        </p>
                    )}
                    <ChatInput handleSendMessage={handleSendMessage} />
                </div>
                : <p>Welcome, please select a chat!</p>
            }
        </div>
    )
}

export default Messages