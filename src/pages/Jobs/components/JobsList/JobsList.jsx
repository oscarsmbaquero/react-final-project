import React from 'react'

const Jobs = ({ job, setSelectedJob }) => {

    const handleSelectedJob = () => {
        setSelectedJob(job)
    }

    return (
        <div onClick={handleSelectedJob}>
            <div className="jobList__div">
                <div className='jobList__div1'>
                    <h1 className='jobList__h1'>Puesto trabajo: {job.name}</h1>
                    <h3 className='jobList__h3'>Descripción: {job.description}</h3>
                    <button>Suscribir</button>
                </div>
            </div>
        </div>
    )
}

export default Jobs