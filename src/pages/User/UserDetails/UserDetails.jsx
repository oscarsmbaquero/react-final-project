import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL } from '../../../assets/ApiRoutes';

const UserDetails = () => {
  const { id } = useParams();
  
  let [user, SetUser] = useState();

  useEffect(() => {

    fetch(`${BASE_URL}/${id}`)
      .then(response => response.json())
      .then(data => SetUser(data))
  }, [id]);

  console.log(user);
  return (

    <div>
      {!user ? <p>Cargando...</p> : <>
        <div className="details">
          <div className="details__text">
          <img className="userList__photo" src={user.image} alt={user.name}/>
            <h1> Usuario: {user.name}</h1>
            <h2> Apellido:{user.surname}</h2>
            <p>  Perfil: {user.email}</p>
          </div>
        </div>

      </>}
    </div>

  )
}

export default UserDetails