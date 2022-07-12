import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './UserList.scss';

import SearchInput from '../../core/SearchInput/SearchInput';

const UserList = () => {

    let   [users, setUsers] = useState([]);
    const [keyword, setKeyword] = useState("");//estado para almacenar y setear las entradas de teclado para el input

    useEffect(() => {
        fetch('http://localhost:4000/employers')
          .then(response => response.json())
          .then(data => setUsers(data))
        }, []);
        console.log(users,46);
       //console.log(users.data,45);
       //Capturamos eel valor del input del buscador  y lo seteamos a keyword pasandolo a minusculas
       const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
        };
      
      /*Con el valor introducido en el inpute del buscador filtramos los trabajos almacenaos en jobs(filtrado por puesto de trabajo o name)
        previo paso a minusculas*/
        //revisar FALLLLLLAAAAAAAA. ME VOY A CAGAR EN SU MADRE 
        
        // const filteredUsers = users.filter((users) =>
        // users.name.toLowerCase().includes(keyword) ||
        // users.email.toLowerCase().includes(keyword)
        // );

  return (
    <>
      <SearchInput placeholder="Filter by job or user " onChange={onInputChange} />
      <section className="userList">
      {users.map((post, key)=>(
        <div key={key} className="userList__div">
          <div className='userList__div1' >
            <h1 className='userList__h1' >Name {post.name}</h1>
            <h2 className='userList__h2' >Surname: {post.surname}</h2>
            <h3 className='userList__h3' >dni: {post.dni}</h3>
            <p className='userList__p2' >Mail: {post.email}</p>
            <p className='userList__p' >Job: {post.job}</p>
            </div>
            <Link to={`/User/${post._id}`}>
                <button className='userList__btn' >Show More</button>
            </Link>
        </div>
      ))}
        </section>
    </>
  )
}

export default UserList