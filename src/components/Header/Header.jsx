import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome, AiOutlineMail } from 'react-icons/ai'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FaUserTie, FaUserCircle } from 'react-icons/fa'

import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/' className={({ isActive }) => isActive ? "activated" : ""}><AiFillHome /> Home</NavLink>
      <NavLink to='/Chat' className={({ isActive }) => isActive ? "activated" : ""}><BsFillChatDotsFill /> Chat</NavLink>
      <NavLink to='/Jobs' className={({ isActive }) => isActive ? "activated" : ""}><FaUserTie /> Jobs</NavLink>
      <NavLink to='/Users' className={({ isActive }) => isActive ? "activated" : ""}><FaUserCircle />Users</NavLink>
      <NavLink to='/Form' className={({ isActive }) => isActive ? "activated" : ""}><AiOutlineMail />Contact</NavLink>
    </div>
  )
}

export default Header