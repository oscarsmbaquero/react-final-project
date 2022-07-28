import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.scss';
import { BASE_URL } from '../../../assets/ApiRoutes';

const UserDetails = () => {
  const { id } = useParams();

  let [user, SetUser] = useState();

  useEffect(() => {

    fetch(`${BASE_URL}/users/${id}`)
      .then(response => response.json())
      .then(data => SetUser(data))
  }, [id]);

  console.log(user);
  return (

    <div>
      {!user ? <p>Cargando...</p> : <>
        <div className="userdetails">
        <h1 className='userdetails__text'>{user.name}</h1>
        <h2 className='userdetails__text'> {user.surname}</h2>
          <div className="userdetails__info">
            <div className='userdetails__infoPersonal1'>
            <img className="userdetails__photo" src={user.image} alt={user.name} />
              <h4 className='userdetails__text'>{user.age} años</h4>
              </div>
              <div className='userdetails__infoPersonal'>
            <h4 className='userdetails__text'> {user.email}</h4>
            <h4 className='userdetails__text'> {user.studies}</h4>
              <h4 className='userdetails__text'> {user.description}</h4>
              </div>
          </div>
        </div>

      </>}
    </div>

  )
}

export default UserDetails