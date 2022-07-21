import React, { useEffect, useState } from 'react';

import './Profile.scss';

import { useGetAuth } from "../../../context/context";
import Edit from './EditProfile';

const Profile = () => {
    
    const [profile, SetProfile] =useState();
    const [edit, setEdit]= useState(0);
    const userLogged = useGetAuth();

    
    //console.log(userLogged.id);

    useEffect(() => {

        fetch(`http://localhost:4000/users/${userLogged.id}`)
          .then(response => response.json())
          .then(data => SetProfile(data))
      }, [userLogged.id]);

     //console.log(profile);


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
        <div className="edit">
            <div>
                <button className='profile__button' onClick = {() => setEdit (userLogged.id)} >Añadir Info</button>
                {edit === userLogged.id ? <Edit editProfile = {profile} userLogged = {userLogged} />: ''}
            </div>    
        </div>
      </>}
    </div>
  )
}

export default Profile