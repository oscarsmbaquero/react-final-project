import React from 'react'

const handleMsg = () => {

}

const handleSendMsg = () => {

}

const ChatInput = () => {
  return (
    <div>
      <form onSubmit={(event) => handleSendMsg(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => handleMsg(e.target.value)}
        />
        <button type="submit">
        </button>
      </form>
    </div>
  )
}

export default ChatInput