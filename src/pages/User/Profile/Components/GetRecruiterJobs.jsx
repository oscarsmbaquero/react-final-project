import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
import { BASE_URL } from '../../../../assets/ApiRoutes';
import { useGetAuth } from '../../../../context';

const GetRecruiterJobs = () => {
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

    console.log(jobs);

    return (
        <>
            <p>Jobs</p>
        </>

    )
}

export default GetRecruiterJobs