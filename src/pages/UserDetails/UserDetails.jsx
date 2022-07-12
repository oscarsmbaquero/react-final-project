import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
  let [user, SetUser] = useState();

  useEffect(() => {
    
    fetch(`http://localhost:4000/employers/${id}`)
      .then(response => response.json())
      .then(data => SetUser(data))      
     }, [id]); 
     console.log(user)


  return (
    
        <div>
           { !user  ? <p>Cargando...</p> : <>
           <div class="details">
                <div class="details__text">      
                    <h1> Usuario: {user.name}</h1>
                    <h2> Apellido:{user.surname}</h2>
                    <p>  Perfil: {user.job}</p>    
                </div>                
              </div>

           </>}
        </div>
     
  )
}

export default UserDetails