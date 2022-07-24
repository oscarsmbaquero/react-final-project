import React, { useState, useEffect } from 'react';
import SearchInput from '../../../core/SearchInput/SearchInput';
import './UserList.scss';
import { useGetAuth } from "../../../context/context";
import { BASE_URL } from '../../../assets/ApiRoutes';
import User from './User';



const UserList = () => {

  let [users, setUsers] = useState([]);
  let [userContact, setuserContact] = useState([]);

  const [keyword, setKeyword] = useState("");
  const userLogged = useGetAuth();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await fetch(`${BASE_URL}/users/contacts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userLogged.token}`
          }
        });

        const jsonData = await data.json();
        setuserContact(jsonData.data.contacts);


      } catch (error) {
        // logout(dispatch)
        // navigate('/users/login')
        return console.log(error, 'vaya, ha habido un error')
      }
    }

    fetchData()
  }, [userLogged.token]);

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
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
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(keyword));

  return (
    <>
      <SearchInput placeholder="Filter by job or user " onChange={onInputChange} />
      <section className="userList">
        {filteredUsers.map((post) => (
          userLogged.id !== post._id &&
          <User key={post._id} post={post} contacts={userContact} />
        ))}
      </section>
    </>
  )
}

export default UserList