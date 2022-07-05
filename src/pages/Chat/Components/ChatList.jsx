import './ChatList.scss'

const ChatList = ({ chat, index, setSelectedChat, selectedChat }) => {

  const handleSelected = () =>{
    setSelectedChat(index)
  }

  return (
    <div>
      <div className={`chat__user ${selectedChat === index ? 'selected' : ''}`} onClick={handleSelected}>
        <p>{chat.name}</p>
        <p>{chat.job}</p>
      </div>
    </div>
  )
}

export default ChatList