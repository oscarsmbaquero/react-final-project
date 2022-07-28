import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';
import { BASE_URL } from '../../../../../../assets/ApiRoutes';
import { defaultProfileImage } from '../../../../../../assets/images/imagesLink';
import { useGetAuth } from '../../../../../../context';
import emailjs from '@emailjs/browser';

const Notification = ({ notification }) => {

  const navitage = useNavigate()

  const [btnState, setBtnState] = useState("not seen");
  const loggedUser = useGetAuth();

  const sendMail = (e) => {
    e.preventDefault();


    try {
      console.log(e.target.email, 'email');

      emailjs.sendForm('service_esqoixc', 'template_3jjni99', e.target, 'dso8n6rVU1ADlfbV4')
        .then(response => console.log(response))
      Swal.fire({
        title: 'Éxito!',
        text: 'Enviado solicitud correctamente',
        icon: 'éxito',
        confirmButtonText: 'Ok'
      })
      // navigate("/");

    } catch (error) {
      //navigate("/FormContact");
    }

  }

  const handleButton = (event) => {
    console.log('entro');
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
        setBtnState(event.target.innerText);

      } else {
        console.log("ha habido un error");
      }
    }).catch((error) => {
      console.log(error);
      console.error(error);
    })
  };

  const handleGoToChat = () => {

    console.log(notification.from._id);
    navitage(`/chat/${notification.from._id}`)

/*     fetch(`${BASE_URL}/users/addContact`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loggedUser.token}`
      },
      body: JSON.stringify({

        contactId: notification.from._id
      })
    })
      .then(res => {
        if (res.status === 200) {
          Swal.fire("Contacto agregado correctamente", "success");
        }
      }).catch((error) => console.error(error)) */
  }

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
      <div >
        <p className="notificationsList__text">has applied to {notification.jobId.name} job</p>
      </div>

      {notification.view_status === "not seen" && btnState === "not seen" ?
        <>

          {/* <button className='notificationsList__btn' onClick={() => sendMail(notification.from.email)}>Accept</button> */}
          <form onSubmit={sendMail}>
            <input className="sectionForm__input" id="email" name="email" type="hidden" value={notification.from.email} />
            {/* <input type="submit" value="Send" /> */}
            <button className='notificationsList__btn' onClick={handleButton}>Reject</button>
            <button className='notificationsList__btn' onClick={handleButton}>Accept</button>
          </form>
        </>
        : notificationStatus()
      }
      {notification.view_status === "Accept" || btnState === "Accept" ?
        <div>
          {/* <Link to={`/chat/${notification.from._id}`}> */}
          <button onClick={handleGoToChat} className='notificationsList__btn'>Go to chat</button>
          {/* </Link>   */}
        </div> : ""}
    </div>
  )
}

export default Notification