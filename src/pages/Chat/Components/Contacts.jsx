import React from 'react'
import { defaultProfileImage } from '../../../assets/images/imagesLink';
import { SelectedChatContext } from '../Chat'

import './Contacts.scss'

const Contacts = ({ contact, setSelectedChat }) => {

  const selectedChat = React.useContext(SelectedChatContext);

  const handleSelected = () => {
    setSelectedChat(contact)
  }

  return (
    <div
      className={`contact ${selectedChat?.id === contact.id ? 'contact--selected' : ''}`}
      onClick={handleSelected}
    >
      <div className="contact__item">
        <img src={contact.image || defaultProfileImage} alt="userImg" />
      </div>
      <div className='contact__item'>
        <p className='contact__text'>{contact.name}</p>
      </div>

    </div>
  )
}

export default Contacts