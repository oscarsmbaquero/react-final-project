import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { useGetAuth } from '../../../context'
import './CurrentUser.scss'

const CurrentUser = () => {
    const [currentUser, setCurrentUser] = useState("");

    const loggedUser = useGetAuth()

    useEffect(() => {
        fetch(`${BASE_URL}/users/${loggedUser.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [])

    console.log(currentUser);

    return (
        <div className='currenteUser'>
            <div>
                {/* <img src={currentUser.image} alt="" /> */}
            </div>
            <p>
                {currentUser.name}
            </p>
        </div>
    )
}

export default CurrentUser