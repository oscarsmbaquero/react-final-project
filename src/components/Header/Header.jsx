import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>  Home</Link>
      <Link to='/Chat'>  Chat</Link>
      <Link to='/Jobs'>  Jobs</Link>
      <Link to='/Users'>  Users</Link>
    </div>
  )
}

export default Header