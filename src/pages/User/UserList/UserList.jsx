import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../../../core/SearchInput/SearchInput';
import './UserList.scss';


const JobsList = () => {

  let [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");//estado para almacenar y setear las entradas de teclado para el input

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);
  console.log(users, 44);
  //console.log(users.data,45);
  //Capturamos eel valor del input del buscador  y lo seteamos a keyword pasandolo a minusculas
  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  /*Con el valor introducido en el inpute del buscador filtramos los trabajos almacenaos en jobs(filtrado por puesto de trabajo o name)
    previo paso a minusculas*/
  // const filteredUsers = users.filter((users) =>
  // users.job.toLowerCase().includes(keyword) ||
  // users.name.toLowerCase().includes(keyword)
  // );

  return (
    <>
      <SearchInput placeholder="Filter by job or user " onChange={onInputChange} />
      <section className="userList">
        {users.map((post, key) => (
          <div key={key} className="userList__div">
            <div className='userList__div1' >
              <h1 className='userList__h1' >Name {post.name}</h1>
              <h2 className='userList__h2' >Surname: {post.surname}</h2>
              <h3 className='userList__h3' >dni: {post.dni}</h3>
              <p className='userList__p' >Direction: {post.direction}</p>
              <p className='userList__p' >Job: {post.job}</p>
            </div>
            <Link to={`/User/${post.id}`}>
              <button className='userList__btn' >Show More</button>
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default JobsList