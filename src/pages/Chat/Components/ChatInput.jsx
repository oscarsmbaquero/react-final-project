import React, { useState } from 'react'
import { MdSend } from 'react-icons/md'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { useGetAuth } from '../../../context/context';
import { SelectedChatContext } from '../Chat';
import './ChatInput.scss'


const ChatInput = ({ handleSendMessage }) => {
  const [inputMsg, setInputMsg] = useState("");
  const [msg, setMsg] = useState("");

  const loggedUser = useGetAuth()
  const selectedChat = React.useContext(SelectedChatContext)


  const handleSendInput = (event) => {
    event.preventDefault();
    setMsg('')
    handleSendMessage(msg);
  }

/*   const handleSendMsg = (event) => {
    fetch(`${BASE_URL}/messages/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loggedUser.token}`
      },
      body: JSON.stringify({
        from: loggedUser.id,
        to: selectedChat.id,
        message: inputMsg
      })
    })
      .then((res) => res.json())
      .then(data => console.log(data))
    setInputMsg("")
  } */

  return (
      <form
        onSubmit={handleSendInput}
        className="inputContainer"
      >
        <input
        type="text"
        className='inputContainer__input'
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button className='inputContainer__button' type="submit" onClick={handleSendInput}><MdSend /></button>
      </form>
  )
}

export default ChatInput