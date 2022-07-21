import React, { useState, useEffect } from 'react'
import './Jobs.scss';

import { BASE_URL } from '../../assets/ApiRoutes';
import SearchInput from '../../core/SearchInput/SearchInput';

import JobDetail from './components/JobDetail/JobDetail';
import JobsList from './components/JobsList/JobsList';
import { useWindowSize } from '../../utils/windowSize';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [selectedJob, setSelectedJob] = useState('')
  //const [width] = useWindowSize();
  const [height, width] = useWindowSize();
  console.log(width, height);

  const getJobs = () => {
    fetch(`${BASE_URL}/jobs`)
      .then(response => response.json())
      .then(data => setJobs(data))
  }

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
    jobs.name.toLowerCase().includes(keyword) ||
    jobs.description.toLowerCase().includes(keyword)

  );

  return (
    <>
      <SearchInput placeholder="Filter by Companies of Jobs" onChange={onInputChange} />
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