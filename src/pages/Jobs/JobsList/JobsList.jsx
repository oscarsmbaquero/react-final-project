import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './JobsList.scss';

import SearchInput from '../../../core/SearchInput/SearchInput';

const JobsList = () => {
    
    const [jobs, setJobs] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        fetch('http://localhost:4000/companies')
          .then(response => response.json())
          .then(data => setJobs(data))
      }, []);
      //console.log(jobs,47);
      
      //Capturamos eel valor del input del buscador  y lo seteamos a keyword pasandolo a minusculas
      const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
      };
      /*Con el valor introducido en el inpute del buscador filtramos los trabajos almacenaos en jobs,
      Filtramos por empresa o por puestos ofertados, previo paso a minusculas*/
      // const filteredJobs = jobs.filter((jobs) =>
      //   jobs.name_job.toLowerCase().includes(keyword) ||
      //   jobs.companie.toLowerCase().includes(keyword)

      //   );
      //     console.log(filteredJobs);
  return (
<>
    <SearchInput placeholder="Filter by Companies of Jobs" onChange={onInputChange} />
        <section className="jobList">
        {jobs.map((post, key)=>(
        <div key={key} className="jobList__div">
          <div className='jobList__div1'>
            <h1 className='jobList__h1'>Puesto trabajo: {post.name_job}</h1>
            <h2 className='jobList__h2'>Empresa: {post.companie}</h2>
            <h3 className='jobList__h3'>Cif: {post.cif}</h3>
            <p className='jobList__p'>Logo: {post.logo}</p>
            </div>
          <Link to={`/Jobs/${post._id}`}>
            <button className='jobList__btn'>Show More</button>
          </Link>
        </div>
      ))}
      </section>
      </>
  )
}

export default JobsList