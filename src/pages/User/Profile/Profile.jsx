import React, { useEffect, useReducer, useState } from 'react';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../../assets/ApiRoutes';

import './Profile.scss';

import { useGetAuth } from "../../../context/context";
import EditProfile from './Components/EditProfile';
import ShowCandidatures from './Components/ShowCandidatures';
import ShowContact from './Components/ShowContact';
import GetRecruiterJobs from './Components/GetRecruiterJobs';
import Notifications from './Components/Notifications';

const tabsInitState = {
  infomation: false,
  contacts: false,
  jobsList: false,
  notifications: false
};

const tabsReducer = (currentState, action) => {

  switch (action.type) {
    case "INFORMATION":
      return {
        ...action.payload,
        infomation: true
      };
    case "CONTACTS":
      return {
        ...action.payload,
        contacts: true
      };
    case "JOBS":

      return {
        ...action.payload,
        jobsList: true
      };
    case "NOTIFICATIONS":

      return {
        ...action.payload,
        notifications: true
      };
    default:
      break;
  }

};

const Profile = () => {

  if (true) {

  }

  const [tabs, dispatch] = useReducer(tabsReducer, tabsInitState);

  const infoTab = () => dispatch({ type: "INFORMATION", payload: tabsInitState });
  const contactsTab = () => dispatch({ type: "CONTACTS" });
  const jobsTab = () => dispatch({ type: "JOBS" });
  const notificationsTab = () => dispatch({ type: "NOTIFICATIONS" });

  const navigate = useNavigate();

  const [profile, SetProfile] = useState();
  const [edit, setEdit] = useState();
  const [user, SetUser] = useState();
  const userLogged = useGetAuth();
  const [contacts, setContacts] = useState(undefined);
  const [candidatures, SetCandidatures] = useState(undefined);
  const [recruiterJobs, SetRecruiterJobs] = useState(undefined);

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

  const showContacts = async (e) => {
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Mostrando";
    const data = await fetch(`${BASE_URL}/users/contacts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userLogged.token}`
      }
    });
    const jsonData = await data.json();
    setContacts(jsonData.data.contacts);

  }

  const showCandidatures = async (e, user) => {
    // const data = await fetch(`${BASE_URL}/users/contacts`,{
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${userLogged.token}`
    //     }
    //    });
    //    const jsonData = await data.json();
    //    setContacts(jsonData.data.contacts);

  }

  const getRecruiterJobs = async () => {
    const data = await fetch(`${BASE_URL}/users/recruiterJobs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userLogged.token}`
      }
    });
    const jsonData = await data.json();
    SetRecruiterJobs(jsonData.data.recruiterJobs);

  };

  useEffect(() => {

    fetch(`${BASE_URL}/users/${userLogged.id}`)
      .then(response => response.json())
      .then(data => SetProfile(data))
  }, [userLogged.id]);

  const jobsList = userLogged.rol === 'User' ?
    <>
      <button className='edits__buttonActive' onClick={showCandidatures} >Candidaturas Activas</button>
      <ShowCandidatures contacts={contacts} />
    </>
    :
    <>
      <button className='edits__buttonActive' onClick={getRecruiterJobs} >Candidaturas Abiertas</button>
      <GetRecruiterJobs recruiterJobs={recruiterJobs} />
    </>;

  return (
    <section className='detail'>
      {!profile ? <p>Cargando...</p> : <>
        <div className="profile">
          <div className='profile__perfil'>
            <img className="profile__photo" src={profile.image} alt='foto' />
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
              <li className='edits__li'  onClick={contactsTab}>Contacts</li>
              <li className='edits__li'  onClick={jobsTab}>Applied Jobs</li>
              <li className='edits__li'  onClick={notificationsTab}>Notifications</li>
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
                <button className="edits__button Show" onClick={showContacts} >Mostar Contactos</button>
                <ShowContact contacts={contacts} />
              </>}

            {/* //##################### Jobs */}

            {tabs.jobsList && jobsList}
            {/* //##################### notifications */}
            {tabs.notifications && <Notifications />}

          </div>
          {/* <button className='Delete' onClick={(e) => deleteProfile(e, userLogged.id)} >Eliminar Perfil</button> */}

        </div>
      </>}

    </section>
  )
}

export default Profile