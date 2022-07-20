import React, { useState } from 'react'
import { MdSend } from 'react-icons/md'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { useGetAuth } from '../../../context/context';
import { socket, socketConnect } from '../../../utils/socket';
import { SelectedChatContext } from '../Chat';
import './ChatInput.scss'


const ChatInput = ({ setInput, handleSendMessage }) => {
  const [inputMsg, setInputMsg] = useState("");

  const loggedUser = useGetAuth()
  const selectedChat = React.useContext(SelectedChatContext)

  console.log("renderizado ya");
  const handleMsg = (event) => {
    setInputMsg(event.target.value)

  }

  const handleSetinput = () => {
    setInput(inputMsg)
    handleSendMessage()
  }


  const handleSendMsg = (event) => {
    event.preventDefault();
    console.log(inputMsg);
    // fetch(`${BASE_URL}/messages/sendMessage`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${loggedUser.token}`
    //   },
    //   body: JSON.stringify({
    //     from: loggedUser.id,
    //     to: selectedChat.id,
    //     message: inputMsg
    //   })
    // })
    //   .then((res) => res.json())
    //   .then(data => console.log(data))
    setInputMsg("")
  }

  return (
    <div className='inputContainer'>
      <form
        onSubmit={handleSetinput}
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