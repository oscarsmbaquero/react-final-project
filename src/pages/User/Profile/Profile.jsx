import React, { useEffect, useReducer, useState } from 'react';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../../assets/ApiRoutes';

import './Profile.scss';

import { useGetAuth } from "../../../context/context";
import EditProfile from './Components/EditProfile';
import ShowContact from './Components/ShowContact';
import GetJobs from './Components/GetJobs';
import { tabsInitState, tabsReducer } from '../../../utils/reducers/profileReducer';
import NotificationsList from './Components/Notifications/NotificationsList';
import { defaultProfileImage } from '../../../assets/images/imagesLink';

const Profile = () => {

  const loggedUser = useGetAuth()
  const [userNotifications, setUserNotifications] = useState([]);
  const [user,SetUser]= useState();

  console.log(userNotifications)

  const pendingNotifications = userNotifications.filter(notification =>
    notification.view_status === "not seen" || notification.type === "accepted")

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

  console.log(user);
  const [tabs, dispatch] = useReducer(tabsReducer, tabsInitState);

  const infoTab = () => dispatch({ type: "INFORMATION", payload: tabsInitState });
  const contactsTab = () => dispatch({ type: "CONTACTS" });
  const jobsTab = () => dispatch({ type: "JOBS" });
  const notificationsTab = () => dispatch({ type: "NOTIFICATIONS" });

  const navigate = useNavigate();

  const [profile, SetProfile] = useState();
  const [edit, setEdit] = useState();
  const userLogged = useGetAuth();
  

  const deleteProfile = (e) => {

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Borrando";

    fetch(`${BASE_URL}/users/${userLogged.id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.status === 200) {
        console.log('Borrado');
        Swal.fire("Eliminado", res.message, "success");
        fetch(`${BASE_URL}/users/`)
          .then(response => response.json())
          .then(data => SetUser(data))
        navigate("/");

      }
    })
  };
 
  useEffect(() => {
    fetch(`${BASE_URL}/users/${userLogged.id}`)
      .then(response => response.json())
      .then(data => SetProfile(data))
  }, [userLogged.id]);

  return (
    <section className='detail'>
      {!profile ? <p>Cargando...</p> : <>
        <div className="profile">
          <div className='profile__perfil'>
            <img className="profile__photo" src={profile.image || defaultProfileImage} alt='foto' />
          </div>
          <div className="profile__text">
            <h1 className='profile__text--Name'> {profile.name} {profile.surname} </h1>
            <p className='profile__text--Descr'> {!profile.description && "no description, click here to add some "} </p>
          </div>
        </div>

        <div className="edits">
          <div className='edits__imptBtn'>

            <ul className='edits__navBar'>
              <li className='edits__li' onClick={infoTab}>Information</li>
              <li className='edits__li' onClick={contactsTab}>Contacts</li>
              <li className='edits__li' onClick={jobsTab}>Applied Jobs</li>
              <div className='edits__li'>
                <li onClick={notificationsTab}>Notifications</li>
                <p className='edits__text'>{pendingNotifications.length}</p>
              </div>
            </ul>

            {/* //##################### profile information */}
            {tabs.infomation &&
              <>
                <button className="edits__button Info" onClick={() => setEdit(userLogged.id)} >Edit Info</button>
                {edit === userLogged.id && <EditProfile editProfile={profile} userLogged={userLogged} />}
              </>}

            {/* //##################### Show contacts */}

            {tabs.contacts &&
              <>
                {/* <button className="edits__button Show" onClick={showContacts} >Mostar Contactos</button> */}
                <ShowContact />
              </>}

            {/* //##################### Jobs */}

            {tabs.jobsList &&
              <>
                <GetJobs />
              </>
            }
            {/* //##################### notifications */}
            {tabs.notifications && <NotificationsList userNotifications={userNotifications} />}

          </div>
          <button className='Delete' onClick={(e) => deleteProfile(e, userLogged.id)} >Eliminar Perfil</button>

        </div>
      </>}

    </section>
  )
}

export default Profile