import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../../../assets/ApiRoutes';
// import { defaultProfileImage } from '../../../../../assets/images/imagesLink';
import { useGetAuth } from '../../../../../context';
import Notification from './Components/Notification';
import './Notifications.scss';

const NotificationsList = ({ userNotifications }) => {

  const [userContact, setUserContact] = useState([]);

  const userLogged = useGetAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${BASE_URL}/users/contacts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userLogged.token}`
          }
        });

        const jsonData = await data.json();
        setUserContact(jsonData.data.contacts);

      } catch (error) {
        // logout(dispatch)
        // navigate('/users/login')
        return console.log(error, 'vaya, ha habido un error')
      }
      
    }
    fetchData()
  }, [])

  // const [userNotifications, setUserNotifications] = useState([]);

  const loggedUser = useGetAuth();

  return (
    <div className='notificationsList'>
      {userNotifications.map(notification =>
        <Notification key={notification._id}
          notification={notification} contacts={userContact}/>
      )}
    </div>
  )
}

export default NotificationsList