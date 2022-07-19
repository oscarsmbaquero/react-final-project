import React from 'react';

const JobDetail = ({ selectedJob }) => {

  return (
    <div>
      <div class="details">
        <div class="details__text">
          <h1> puesto de trabajo: {selectedJob.name}</h1>
          <h2> Description:{selectedJob.description}</h2>
          <h3> Salary: {selectedJob.salary}</h3>
          <p>  Requirements: {selectedJob.requiremets}</p>
        </div>
      </div>
    </div>
  )
}

export default JobDetail