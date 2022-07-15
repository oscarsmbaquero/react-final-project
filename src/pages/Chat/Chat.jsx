import React, { useEffect, useState } from 'react'
// import { dispatchTest, useDispatchAuth, useGetAuth } from '../../context'
import './Chat.scss'
import Messages from './Components/Messages'
import Contacts from './Components/Contacts'

const SelectedChatContext = React.createContext()

const Chat = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedChat, setSelectedChat] = useState(undefined);



    //call the user list
    useEffect(() => {

        fetch('http://localhost:4000/employers')
            .then(response => response.json())
            .then(data => { setContacts(data) })
    }, []);

    // const getContext = useGetAuth()
    // const dispatch = useDispatchAuth()

    // const handleReducer = () => {
    //     dispatchTest(dispatch, "value2")
    // }


    return (
        <div className='container'>
            <SelectedChatContext.Provider value={selectedChat}>
                <div className="chatContainer">
                    {/* <p onClick={handleReducer} >{getContext}</p> */}
                    <div className='chatContainer__user'>
                        <div>
                            {/* <img src='/images/Spinner-3.gif' alt="" /> */}
                            {contacts.map((chat) =>
                                <Contacts
                                    key={chat._id}
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
            </SelectedChatContext.Provider>
        </div>
    )
}

export default Chat