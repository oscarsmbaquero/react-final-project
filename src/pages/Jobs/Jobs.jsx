import React, { useState, useEffect } from 'react'
import './Jobs.scss';

import { BASE_URL } from '../../assets/ApiRoutes';
import SearchInput from '../../core/SearchInput/SearchInput';

import JobDetail from './components/JobDetail/JobDetail';
import JobsList from './components/JobsList/JobsList';
// import { useWindowSize } from '../../utils/windowSize';
import SelectCompanies from '../../core/SelectCompanies/SelectCompanies';
import { useGetAuth } from '../../context';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [selectedJob, setSelectedJob] = useState('');

  const getJobs = () => {
    fetch(`${BASE_URL}/jobs`)
      .then(response => response.json())
      .then(data => setJobs(data))
  };

  useEffect(() => {
    fetch(`${BASE_URL}/jobs`)
      .then(response => response.json())
      .then(data => setJobs(data))
  }, []);

  //Capturamos eel valor del input del buscador  y lo seteamos a keyword pasandolo a minusculas
  const onInputChange = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };
  /*Con el valor introducido en el inpute del buscador filtramos los trabajos almacenaos en jobs,
  Filtramos por empresa o por puestos ofertados, previo paso a minusculas*/
  const filteredJobs = jobs.filter((jobs) =>
    jobs.name.toLowerCase().includes(keyword)||
    jobs.recruiter_id.name.toLowerCase().includes(keyword)
  );

  return (
    <>
      <section className='searchContainer'>
        <SearchInput placeholder="Filtrar por trabajo o empresa" onChange={onInputChange} />
      </section>

      <section className='jobsListContainer'>
        <div className="jobList">
          {filteredJobs.map((job) => (
            <JobsList key={job._id} job={job} setSelectedJob={setSelectedJob} />
          ))}
        </div>
        <div className="jobDetail">
          <JobDetail selectedJob={selectedJob} getJobs={getJobs} />
        </div>
      </section>
    </>
  )
}

export default Jobs