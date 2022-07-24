import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../../assets/ApiRoutes';

import './Profile.scss';

import { useGetAuth } from "../../../context/context";
import Edit from './EditProfile';
import ShowContact from './ShowContact';

const Profile = () => {

  let navigate = useNavigate();

    const [profile, SetProfile] =useState();
    const [edit, setEdit]= useState();
    const [user,SetUser] =useState();
    const userLogged = useGetAuth();
    const [contacts, setContacts] = useState(undefined);

    //console.log(user);
   const deleteProfile = (e, user) =>{
      e.preventDefault();

      const thisClicked = e.currentTarget;
      thisClicked.innerText ="Borrando"  ;
      //console.log('entro',user);

      fetch(`${BASE_URL}/users/${userLogged.id}`,{
         method: 'DELETE',
          }).then(res=>{
            if(res.status === 200){
              console.log('Borrado');
            Swal.fire("Eliminado", res.message,"success");
            fetch(`${BASE_URL}/users/`)
            .then(response => response.json())
            .then(data => SetUser(data))
            navigate("/");

          }
          })
   }
   console.log(user);
   const showContacts = async (e, user) => {
    e.preventDefault();
    // const thisClicked = e.currentTarget;
    // thisClicked.innerText ="Mostrando"  ;
    const data = await fetch(`${BASE_URL}/users/contacts`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userLogged.token}`
        }
       });
       const jsonData = await data.json();
       setContacts(jsonData.data.contacts);
       
       }







    useEffect(() => {

        fetch(`${BASE_URL}/users/${userLogged.id}`)
          .then(response => response.json())
          .then(data => SetProfile(data))
      }, [userLogged.id]);

     


  return (
    <div>
      {!profile ? <p>Cargando...</p> : <>
        <div className="profile">
            <div>
                <img className="profile__photo" src={profile.image} alt={profile.name}/>
            </div>
            <div className="profile__text">
                <h1> {profile.name}   {profile.surname}</h1>
            </div>
        </div>
        <div className="edits">
            <div>
                <button className='edits__button' onClick = {() => setEdit (userLogged.id)} >Añadir Info</button>
                {edit === userLogged.id ? <Edit editProfile ={profile} userLogged ={userLogged} />: ''}

                <button className='edits__buttonDelete' onClick = {(e) => deleteProfile (e,userLogged.id)} >Eliminar Perfil</button>
                <button className='edits__buttonShow' onClick = {(e) => showContacts (e,userLogged.id)} >Mostar Contactos</button>
                {userLogged.rol === 'User'?
                <button className='edits__buttonActive' onClick = {(e) => showContacts (e,userLogged.id)} >Candidaturas Activas</button>
                :
                <button className='edits__buttonActive' onClick = {(e) => showContacts (e,userLogged.id)} >Candidaturas Abiertas</button> 
                 }
                 <ShowContact contacts={contacts}/>
            </div>
        </div>
      </>}
    </div>
  )
}

export default Profile