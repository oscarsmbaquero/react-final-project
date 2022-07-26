import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Swal from 'sweetalert2';
import { BASE_URL } from '../../../../../../assets/ApiRoutes';
import { defaultProfileImage } from '../../../../../../assets/images/imagesLink';
import { useGetAuth } from '../../../../../../context';

const Notification = ({ notification }) => {

  const [btnState, setBtnState] = useState("not seen");

  const loggedUser = useGetAuth();

  const handleButton = (event) => {
    console.log(event.target.innerText);
    fetch(`${BASE_URL}/notifications/updateNotifications`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loggedUser.token}`
      },
      body: JSON.stringify({
        type: event.target.innerText,
        to: notification.from._id,
        jobId: notification.jobId,
        notificationId: notification._id
      })
    }).then(res => {
      if (res.status === 200) {
        Swal.fire("Se ha actualizado correctamente");
        setBtnState(event.target.innerText)
      } else {
        console.log("ha habido un error");
      }
    }).catch((error) => {
      console.log(error);
      console.error(error);
    })
  };

  const notificationStatus = () => notification.view_status === "Accept" || btnState === "Accept"
    ? <p className='notificationsList__text'>Accepted</p>
    : <p className='notificationsList__text'>Rejected</p>;

  return (
    <div className='notificationsList__card'>
      <div className='notificationsList__item'>
        <img className='notificationsList__img' src={notification.from.image || defaultProfileImage} alt={notification.from.name} />
      </div>
      <Link to={`/users/${notification.from._id}`} className='notificationsList__item'>
        <p className="notificationsList__text">{notification.from.name}</p>
      </Link>
      <div className='notificationsList__item'>
        <p className="notificationsList__text">has applied to {notification.jobId.name} job</p>
      </div>

      {notification.view_status === "not seen" && btnState === "not seen" ?
        <>
          <button className='notificationsList__btn' onClick={handleButton}>Reject</button>
          <button className='notificationsList__btn' onClick={handleButton}>Accept</button>
        </>
        : notificationStatus()
      }
      {notification.view_status === "Accept" || btnState === "Accept" ?
        <div>
          <button className='notificationsList__btn'>Go to chat</button>
        </div> : ""}
    </div>
  )
}

export default Notification