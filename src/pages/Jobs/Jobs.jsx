import React, { useState, useEffect } from 'react'
import './Jobs.scss';

import SearchInput from '../../core/SearchInput/SearchInput';

//import { useGetAuth } from "../../context/context";
import JobDetail from './components/JobDetail/JobDetail';
import JobsList from './components/JobsList/JobsList';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [selectedJob, setSelectedJob] = useState('')


  useEffect(() => {
    fetch('http://localhost:4000/jobs')
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
    jobs.description.toLowerCase().includes(keyword)

  );
  
  return (
    <>
      <SearchInput placeholder="Filter by Companies of Jobs" onChange={onInputChange} />
      <div className='jobsListContainer'>
        <section className="jobList">
          {filteredJobs.map((job) => (
            <JobsList key={job._id} job={job} setSelectedJob={setSelectedJob} />
          ))}
        </section>
        <section>
          <JobDetail selectedJob={selectedJob} />
        </section>
      </div>
    </>
  )
}

export default Jobs