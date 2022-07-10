import './Contacts.scss'

const Contacts = ({ chat, setSelectedChat, selectedChat }) => {

  const handleSelected = () => {
    setSelectedChat(chat)
  }

  return (
    <div>
      <div
        className={`contacts ${selectedChat?.id === chat.id ? 'selected' : ''}`}
        onClick={handleSelected}
      >
        <div
          className={'contacts__user'}
        >
          <div className="contacts__img">
            <img src="https://tiendamusicalcardona.com/wp-content/uploads/2021/02/avatar-user-teacher-312a499a08079a12-512x512-1.png" alt="userImg" /></div>
          <div className='contacts__name'>
            <p>{chat.name}</p>
            <p>{chat.job}</p>
          </div>
        </div>
        <div className='contacts__line'></div>
      </div>
    </div>
  )
}

export default Contacts