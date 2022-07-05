import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './UserList.scss';

const JobsList = () => {
    
    let   [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://62852cc03060bbd347460bff.mockapi.io/users')
          .then(response => response.json())
          .then(data => setUsers(data))
      }, []);

      //console.log(jobs);

  return (
    <>
      {users.map((post, key)=>(
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