import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './UserList.scss';

import SearchInput from '../../core/SearchInput/SearchInput';

const JobsList = () => {
    
    let   [users, setUsers] = useState([]);
    const [keyword, setKeyword] = useState("");//estado para almacenar y setear las entradas de teclado para el input

    useEffect(() => {
        fetch('https://62852cc03060bbd347460bff.mockapi.io/users')
          .then(response => response.json())
          .then(data => setUsers(data))
        }, []);

       //Capturamos eel valor del input del buscador  y lo seteamos a keyword pasandolo a minusculas
       const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
        };

      /*Con el valor introducido en el inpute del buscador filtramos los trabajos almacenaos en jobs(filtrado por puesto de trabajo o name)
        previo paso a minusculas*/
      const filteredUsers = users.filter((users) =>
        users.job.toLowerCase().includes(keyword) ||
        users.name.toLowerCase().includes(keyword)  
        );

  return (
    <>
      <SearchInput placeholder="Filter by job or user " onChange={onInputChange}  />
      {filteredUsers.map((post, key)=>(
        <div key={ key} className="userList">
            <h1>Name {post.name}</h1>
            <h2>Surname: {post.surname}</h2>
            <h3>dni: {post.dni}</h3>
            <p>Direction: {post.direction}</p>
            <p>Job: {post.job}</p>
            <Link to={`/User/${post.id}`}>
                <button>Show More</button>
            </Link>
        </div>

      ))}
    </>
  )
}

export default JobsList