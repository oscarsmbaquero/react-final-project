import React from 'react'
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../../../../assets/ApiRoutes';
import { defaultProfileImage } from '../../../../../../assets/images/imagesLink';
import { useGetAuth } from '../../../../../../context';

const Notification = ({ notification }) => {

  console.log(notification)

  const loggedUser = useGetAuth();

  const handleButton = (event) => {
    let notificationStatus;
    event.target.innerText === "Accept" ? notificationStatus = "Accept"
      : notificationStatus = "Reject"
    fetch(`${BASE_URL}/jobs/add-user/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loggedUser.token}`
      },
      body: JSON.stringify({
        type: notificationStatus,
        // to:
        // jobId:
        //notificationId: notification._id
      })
    }).then(res => {
      if (res.status === 200) {
        Swal.fire("Se ha actualizado correctamente");
      } else {
        // navigate('/users/login')
      }
    }).catch((error) => {
      console.error(error);
    })
  };

  // const notificationStatus = (notification) => notification.view_status === "Accept" ? <p>Accepted</p> : <p>refected</p>

  return (
    <div className='notificationsList__card'>
      <div className='notificationsList__item'>
        <img className='notificationsList__img' src={notification.from.image || defaultProfileImage} alt={notification.from.name} />
      </div>
      <div className='notificationsList__item'>
        <p className="notificationsList__text">{notification.from.name}</p>
      </div>
      <div className='notificationsList__item'>
        <p className="notificationsList__text">has applied to THIS job</p>
      </div>

      {/* {notification.view_status === "not seen" ? */}
      <>
        <button className='notificationsList__btn' onClick={handleButton}>Reject</button>
        <button className='notificationsList__btn' onClick={handleButton}>Accept</button>
      </>
      {/* : notificationStatus() */}
      {/* } */}
    </div>
  )
}

export default Notification