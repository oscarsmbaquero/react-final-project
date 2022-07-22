import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../../../core/SearchInput/SearchInput';
import './UserList.scss';
import { useGetAuth } from "../../../context/context";
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../assets/ApiRoutes';


const UserList = () => {

  let [users, setUsers] = useState([]);
  let [userContact, setuserContact] = useState([]);
  const [keyword, setKeyword] = useState("");//estado para almacenar y setear las entradas de teclado para el input
  const userLogged = useGetAuth();

  
  const addContact = (e,id) =>{
    
    fetch(`${BASE_URL}/users/addContact`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userLogged.token}`
      },
      body: JSON.stringify({
          
          contactId: id
      })
     })
      .then(res => res.json())
      .then(data => setuserContact(data))
       Swal.fire("Agregado corectamente", "success");

  }

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);
  //console.log(users, 45);
  //console.log(users.data,45);
  //Capturamos eel valor del input del buscador  y lo seteamos a keyword pasandolo a minusculas
  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
 
  /*Con el valor introducido en el inpute del buscador filtramos los trabajos almacenaos en jobs(filtrado por puesto de trabajo o name)
    previo paso a minusculas*/
  const filteredUsers = users.filter((users) =>
  // users.job.toLowerCase().includes(keyword) ||
  users.name.toLowerCase().includes(keyword)
  
  );

  return (
    <>
      <SearchInput placeholder="Filter by job or user " onChange={onInputChange} />
      <section className="userList">
        {filteredUsers.map((post, key) => (
          <div key={key} className="userList__div">
          <img className="userList__photo" src={post.image} alt={post.name}/>
            <div className='userList__div1' >
           
              <h1 className='userList__h1' >Name: {post.name}</h1>
              <h2 className='userList__h2' >Surname: {post.surname}</h2>
              <h3 className='userList__h3' >Email: {post.email}</h3>
              {/* <p className='userList__p' >Direction: {post.direction}</p>
              <p className='userList__p' >Job: {post.job}</p> */}
            </div>
            {userLogged.id !== post._id ?
              <button className='userList__btn'  onClick = {(e) => addContact (e,post._id)}>Añadir Contacto</button>
              :''
            }
            <Link to={`/users/${post._id}`}>
              <button className='userList__btn' >Show More</button>
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default UserList