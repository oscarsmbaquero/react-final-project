import React, { useEffect, useState } from 'react';
import { useInRouterContext, useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
  let [user, SetUser] = useState();

  useEffect(() => {
    
    fetch(`https://62852cc03060bbd347460bff.mockapi.io/users/${id}`)
      .then(response => response.json())
      .then(data => SetUser(data))      
     }, [id]); 
     console.log(user)


  return (
    
        <div>
           { !user  ? <p>Cargando...</p> : <>
           <div class="details">
                <div class="details__text">      
                    <h1> puesto de trabajo: {user.name}</h1>
                    <h2> Empresa:{user.surname}</h2>
                    <p>  Ciudad: {user.job}</p>    
                </div>                
              </div>

           </>}
        </div>
     
  )
}

export default UserDetails