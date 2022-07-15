import React, { useState } from 'react'
import { MdSend } from 'react-icons/md'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { useGetAuth } from '../../../context/context';
import './ChatInput.scss'

const ChatInput = ({ sendMsg }) => {
  const [inputMsg, setInputMsg] = useState("");

  const currentUser = useGetAuth()
  const selectedChatIid = React.useContext()

  const handleMsg = (event) => {
    setInputMsg(event.target.value)
  }

  const handleSendMsg = async (event) => {
    event.preventDefault();
    fetch(`${BASE_URL}/messages/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(formsState)
      body: {
        from: currentUser,
        // to: selectedChatIid
      }
    }).then(() => {
      console.log(`the user .....`)
    })
    
    // sendMsg(inputMsg)
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