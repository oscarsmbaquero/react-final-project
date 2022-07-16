import React, { useState } from 'react'
import { MdSend } from 'react-icons/md'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { useGetAuth } from '../../../context/context';
import { SelectedChatContext } from '../Chat';
import './ChatInput.scss'


//HABRÁ QUE TENER CUIDADO DE CUANTAS VECES SE ESTÁ RENDERIZANDO ESTE COMPONENTE
const ChatInput = ({ sendMsg }) => {
  const [inputMsg, setInputMsg] = useState("");

  const currentUser = useGetAuth()
  const selectedChat = React.useContext(SelectedChatContext)

  const handleMsg = (event) => {
    setInputMsg(event.target.value)
  }

  console.log(currentUser.id, selectedChat?._id);

  const handleSendMsg = (event) => {
    event.preventDefault();
    fetch(`${BASE_URL}/messages/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: currentUser.id,
        to: selectedChat._id,
        message: inputMsg
      })
    })
    .then((res) => res.json())
    .then(data => console.log(data))
 
    setInputMsg("")

  }
  return (
    <div className='inputContainer'>
      <form
        onSubmit={handleSendMsg}
        className="inputContainer__form"
      >
        <input
          type="text"
          placeholder="type your message here"
          onChange={handleMsg}
          value={inputMsg}
        />
        <button type="submit" onClick={handleSendMsg}><MdSend /></button>
      </form>
    </div>
  )
}

export default ChatInput