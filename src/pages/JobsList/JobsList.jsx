import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './JobsList.scss';

import SearchInput from '../../core/SearchInput';

const JobsList = () => {
    
    const [jobs, setJobs] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        fetch('https://62852cc03060bbd347460bff.mockapi.io/jobs')
          .then(response => response.json())
          .then(data => setJobs(data))
      }, []);

      
      //Capturamos eel valor del input del buscador  y lo seteamos a keyword pasandolo a minusculas
      const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
      };

      /*Con el valor introducido en el inpute del buscador filtramos los trabajos almacenaos en jobs,
      Filtramos por empresa o por puestos ofertados, previo paso a minusculas*/
      const filteredJobs = jobs.filter((jobs) =>
        jobs.name.toLowerCase().includes(keyword) ||
        jobs.business.toLowerCase().includes(keyword)

        );
    
    
      //console.log(filteredJobs,'filter')

  return (
    <>
      <SearchInput placeholder="Filter by Companies of Jobs" onChange={onInputChange}  />
      {filteredJobs.map((post, key)=>(
        <div key={ key} className="jobList">
          <h1>Puesto trabajo: {post.name}</h1>
          <h2>Empresa: {post.business}</h2>
          <h3>Cif: {post.cif}</h3>
          <p>Logo: {post.logo}</p>
          <Link to={`/Jobs/${post.id}`}>
            <button>Show More</button>
          </Link>
        </div>

      ))}
    </>
  )
}

export default JobsList