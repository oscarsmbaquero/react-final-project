import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { defaultProfileImage } from '../../../assets/images/imagesLink';
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

    return (
        <div className='currenteUser'>
            <div className='currenteUser__item'>
                <img src={currentUser.image || defaultProfileImage} alt="" />
            </div>
            <div className="currenteUser__item">
                <p className='currenteUser__text'>{currentUser.name}</p>
            </div>
        </div>
    )
}

export default CurrentUser