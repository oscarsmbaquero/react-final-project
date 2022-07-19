import React from 'react';

const JobDetail = ({ selectedJob }) => {

  return (
    <div>
      {selectedJob ? <div className="details">
        <div className="details__text">
          <h1> puesto de trabajo: {selectedJob.name}</h1>
          <h2> Description:{selectedJob.description}</h2>
          <h3> Salary: {selectedJob.salary}</h3>
          <p>  Requirements: {selectedJob.requiremets}</p>
        </div>
      </div> : <p>ningún trabajo selecionado</p>}
    </div>
  )
}

export default JobDetail