import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../../../assets/ApiRoutes';
import { defaultProfileImage } from '../../../../../assets/images/imagesLink';
import { useGetAuth } from '../../../../../context';
import Notification from './Components/Notification';
import './Notifications.scss';

const NotificationsList = () => {

  const [userNotifications, setUserNotifications] = useState([]);

  const loggedUser = useGetAuth();

  useEffect(() => {
    fetch(`${BASE_URL}/notifications/getNotifications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loggedUser.token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUserNotifications(data)
      })
  }, [loggedUser.token]);

  return (
    <div className='notificationsList'>
      {userNotifications.map(notification =>
        <Notification key={notification._id}
          notification={notification} />
      )}
    </div>
  )
}

export default NotificationsList