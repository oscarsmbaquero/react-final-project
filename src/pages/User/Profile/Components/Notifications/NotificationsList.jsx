import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../../../assets/ApiRoutes';
import { defaultProfileImage } from '../../../../../assets/images/imagesLink';
import { useGetAuth } from '../../../../../context';
import Notification from './Components/Notification';
import './Notifications.scss';

const NotificationsList = ({userNotifications}) => {

  // const [userNotifications, setUserNotifications] = useState([]);

  const loggedUser = useGetAuth();

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