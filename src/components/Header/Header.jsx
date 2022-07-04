import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/' className={({isActive}) =>isActive ? "activated":""}>Home</NavLink>
      <NavLink to='/Chat'className={({isActive}) =>isActive ? "activated":""}>Chat</NavLink>
      <NavLink to='/Jobs' className={({isActive}) =>isActive ? "activated":""}>Jobs</NavLink>
      <NavLink to='/Users' className={({isActive}) =>isActive ? "activated":""}>Users</NavLink>
    </div>
  )
}

export default Header