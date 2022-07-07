import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from 'react-router-dom'
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserTie, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [ menu , setMenu ] = useState( false )

  const toggleMenu = () => {
      setMenu( !menu )
  }
  return (
    // <header className='header'>
    //   <NavLink to='/' className={({ isActive }) => isActive ? "activated" : ""}><AiFillHome /> Home</NavLink>
    //   <NavLink to='/Chat' className={({ isActive }) => isActive ? "activated" : ""}><BsFillChatDotsFill /> Chat</NavLink>
    //   <NavLink to='/Jobs' className={({ isActive }) => isActive ? "activated" : ""}><FaUserTie /> Jobs</NavLink>
    //   <NavLink to='/Users' className={({ isActive }) => isActive ? "activated" : ""}><FaUserCircle />Users</NavLink>
    //     <NavLink to='/Form' className={({ isActive }) => isActive ? "activated" : ""}><AiOutlineMail />Contact</NavLink>
    // </header>
    <header className="header">
              <button 
            onClick={ toggleMenu }
         className="header__button">
        <svg className='header__svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>
      <nav className={ `header__nav ${ menu ? 'isActive' : '' }` }>
        <ul className="header__ul">
          <li className="header__li">
            
            <Link className="header__link" to="/">
              
              <AiFillHome />
            </Link>
          </li>
          <li>
            
            <Link className="header__link" to="/Chat">
              
              <BsFillChatDotsFill />
            </Link>
          </li>
          <li>
            
            <Link className="header__link" to="/Jobs">
              
              <FaUserTie />
            </Link>
          </li>
          <li>
            
            <Link className="header__link" to="/Users">
              
              <FaUserCircle />
            </Link>
          </li>
          <li>
            
            <Link className="header__link" to="/Form">
              
              <AiOutlineMail />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
