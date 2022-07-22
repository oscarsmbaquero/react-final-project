import React from 'react'
import { SelectedChatContext } from '../Chat'

import './Contacts.scss'

const defaultProfileImage = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";

const Contacts = ({ contact, setSelectedChat }) => {

  const selectedChat = React.useContext(SelectedChatContext);

  console.log(contact);

  const handleSelected = () => {
    setSelectedChat(contact)
  }

  return (
    <div
      className={`contacts ${selectedChat?.id === contact.id ? 'contacts--selected' : ''}`}
      onClick={handleSelected}
    >
      <div className="contacts__img">
        <img src={contact.image || defaultProfileImage} alt="userImg" />
      </div>
      <div className='contacts__text'>
        <p>{contact.name}</p>
      </div>
    </div>
  )
}

export default Contacts