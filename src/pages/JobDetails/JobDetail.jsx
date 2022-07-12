import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {

  const { id } = useParams();
  console.log(id,117);

  let [job, SetJob] = useState();

  useEffect(() => {
    
    fetch(`http://localhost:4000/companies/${id}`)
      .then(response => response.json())
      .then(data => SetJob(data))      
     }, [id]); 
  console.log(job);

  return (
    <div>
          { !job ? <p>Cargando...</p> : <>
              <div class="details">
                <div class="details__text">      
                    <h1> puesto de trabajo: {job.name_job}</h1>
                    <h2> Empresa:{job.companie}</h2>
                    <p>  Ciudad: {job.city}</p>    
                </div>                
              </div>
           </>}
  </div>
  )
}

export default JobDetail