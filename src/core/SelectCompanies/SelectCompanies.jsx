import React, { useEffect, useState } from 'react';
//import Select from 'react-select';
import './SelectCompanies.scss';
import { BASE_URL } from '../../assets/ApiRoutes';

const SelectCompanies = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      fetch(`${BASE_URL}/users`)
      .then(response => response.json())
      .then(data => setJobs(data))
    
      
    }, [])
    

  return (
    <div>
         <select name="jobs"  className='select'>
            <option>Selecciona un usuario</option>
            {jobs.map((job) => (
            <option key={job._id} value={job.id}>{job.name} {job.surname}</option>
          ))}



         </select>

    </div>
  )
}

export default SelectCompanies