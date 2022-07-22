import React from 'react'
import { useGetAuth } from '../../../context'
import './CurrentUser.scss'

const CurrentUser = () => {

    const loggedUser = useGetAuth()

    return (
        <div className='currenteUser'>
            CurrentUser
        </div>
    )
}

export default CurrentUser