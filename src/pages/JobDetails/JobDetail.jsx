import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {

  const { id } = useParams();

  let [job, SetJob] = useState();

  useEffect(() => {
    
    fetch(`https://62852cc03060bbd347460bff.mockapi.io/jobs/${id}`)
      .then(response => response.json())
      .then(data => SetJob(data))      
     }, [id]); 
  console.log(job);

  return (
    <div>
          { !job ? <p>Cargando...</p> : <>
              <div class="details">
                <div class="details__text">      
                    <h1> puesto de trabajo: {job.name}</h1>
                    <h2> Empresa:{job.business}</h2>
                    <p>  Ciudad: {job.city}</p>    
                </div>                
              </div>
           </>}
  </div>
  )
}

export default JobDetail