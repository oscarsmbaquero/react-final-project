import React from 'react'

const JobsList = ({ job, setSelectedJob }) => {

    const handleSelectedJob = () => {
        setSelectedJob(job)
    }

    return (
        <div onClick={handleSelectedJob}>
            <div className="jobList__div">
                <div className='jobList__div1'>
                    <h1 className='jobList__h1'>{job.name}</h1>
                    <p>{job.salary}€ Bruto anual</p>
                </div>
            </div>
        </div>
    )
}

export default JobsList