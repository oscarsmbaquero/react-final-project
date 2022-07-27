import React, { useEffect, useState } from 'react';


import { BASE_URL } from '../../../../assets/ApiRoutes';
import { useGetAuth } from '../../../../context';
import './GetJobs.scss';

const GetJobs = () => {
    const [jobs, setJobs] = useState([]);

    const userLogged = useGetAuth()

    useEffect(() => {
        let petition;
        console.log(userLogged.rol);
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
            <h2>Applied Jobs</h2>
            {jobs.map(job =>(
                <>
                    <div className="job__div">
                        <div className='job__div1'>
                            <h1 className='job__h1'>{job.name}</h1>
                            <h2>{job.description}</h2>
                            <p>{job.requirements}</p>
                            <h4>{job.salary}&nbsp;€</h4>
                        </div>
                    </div>
                </>
            ))}
            <p> {jobs.name}</p>
        </>

    )
}

export default GetJobs