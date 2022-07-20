import React, { useState, useEffect } from 'react'
import './Jobs.scss';
import Swal from 'sweetalert2';

import SearchInput from '../../core/SearchInput/SearchInput';

import { useGetAuth } from "../../context/context";
import JobDetail from './components/JobDetail/JobDetail';
import JobsList from './components/JobsList/JobsList';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [selectedJob, setSelectedJob] = useState('')

  const userLogged = useGetAuth();

  useEffect(() => {
    fetch('http://localhost:4000/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
  }, []);

  //funcion para inscribirse como  usuario logeado al id de una oferta. Oscar. En pruebas
  /*   const handleaddUser = (e, id_job) => {
      e.preventDefault();
  
      const userlogged = userLogged.id;
  
      fetch(`http://localhost:4000/jobs/add-user/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _id: id_job,
          userId: userlogged
        })
      }).then(res => {
        if (res.status === 200) {
          Swal.fire("te has Inscrito correctamente", res.message, "success");
          fetch('http://localhost:4000/jobs')
            .then(response => response.json())
            .then(data => setJobs(data))
  
        }
      })
    } */

  //funcion para eliminar subscripcion del usuario logeado previamente inscrito
  const handledeleteUser = (e, id_job) => {
    e.preventDefault();
    console.log('id_job');

    //const userlogged = userLogged.id;
  }

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
        <section className='jobsListContainer'>
          <div className="jobList">
            {filteredJobs.map((job) => (
              <JobsList key={job._id} job={job} setSelectedJob={setSelectedJob} />
            ))}
          </div>
          <div className="jobList">
            <JobDetail selectedJob={selectedJob} />
          </div>
        </section>
    </>
  )
}

export default Jobs