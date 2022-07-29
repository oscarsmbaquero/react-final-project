import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import { BASE_URL } from '../../../../assets/ApiRoutes';
import { useGetAuth } from '../../../../context';
import './GetJobs.scss';

const GetJobs = () => {
    const [jobs, setJobs] = useState([]);

    const userLogged = useGetAuth();

    useEffect(() => {
        let petition;
        if (userLogged.rol === "User") {
            petition = "users/userJobs"
        } else {
            petition = "jobs/jobsByRecruiter"
        }
        const getJobs = async () => {
            try {
                const data = await fetch(`${BASE_URL}/${petition}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${userLogged.token}`,
                    }
                });
                const jsonData = await data.json();
                setJobs(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        getJobs()
    }, []);

    return (
        <>
            {jobs.length !== 0 ? <div>
                {jobs.map(job => (
                    <div className="job__div" key={job._id}>
                        <div className='job__div1'>
                            <h1 className='job__h1'>{job.name}</h1>
                            <h2 className='job__text'>{job.description}</h2>
                            <p className='job__text'>{job.requirements}</p>
                            <h4 className='job__text'>{job.salary}&nbsp;€</h4>
                        </div>
                    </div>
                ))}
                <p> {jobs.name}</p>
            </div> : <p>You have not created any job position yet. Click <Link to={'/formCompanies'}>HERE</Link> to create one</p>}
        </>

    )
}

export default GetJobs