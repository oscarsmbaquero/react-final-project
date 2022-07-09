import './ChatList.scss'

const ChatList = ({ chat, setSelectedChat, selectedChat }) => {

  const handleSelected = () =>{
    setSelectedChat(chat)
  }

  return (
    <div>
      <div className={`chat__user ${selectedChat?.id === chat.id ? 'selected' : ''}`} onClick={handleSelected}>
        <p>{chat.name}</p>
        <p>{chat.job}</p>
      </div>
    </div>
  )
}

export default ChatList