import React, { useState } from 'react'
import { MdSend } from 'react-icons/md'
import './ChatInput.scss'

const ChatInput = ({ setMessages }) => {
  const [inputMsg, setInputMsg] = useState("");

  const handleMsg = (event) => {
    setInputMsg(event.target.value)
  }

  const handleSendMsg = (event) => {
    event.preventDefault();
    setMessages((prevState) => [...prevState, inputMsg])
    setInputMsg("")


  }
  return (
    <div className='inputContainer'>
      <form
        onSubmit={(event) => handleSendMsg(event)}
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