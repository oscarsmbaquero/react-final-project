import React, { useState, useEffect} from 'react'

const JobsList = () => {
    
    let   [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://62852cc03060bbd347460bff.mockapi.io/jobs')
          .then(response => response.json())
          .then(data => setJobs(data))
      }, []);

      //console.log(jobs);

  return (
    <>
      {jobs.map((post, key)=>(
        <div key={ key} className="">
         <h1>Puesto trabajo: {post.name}</h1>
         <h2>Empresa: {post.business}</h2>
         <h3>Cif: {post.cif}</h3>
         <p>Logo: {post.logo}</p>
         

        </div>

      ))}
    </>
  )
}

export default JobsList