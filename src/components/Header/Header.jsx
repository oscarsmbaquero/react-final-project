import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from 'react-router-dom'
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserTie, FaUserCircle } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  return (
    // <header className='header'>
    //   <NavLink to='/' className={({ isActive }) => isActive ? "activated" : ""}><AiFillHome /> Home</NavLink>
    //   <NavLink to='/Chat' className={({ isActive }) => isActive ? "activated" : ""}><BsFillChatDotsFill /> Chat</NavLink>
    //   <NavLink to='/Jobs' className={({ isActive }) => isActive ? "activated" : ""}><FaUserTie /> Jobs</NavLink>
    //   <NavLink to='/Users' className={({ isActive }) => isActive ? "activated" : ""}><FaUserCircle />Users</NavLink>
    //     <NavLink to='/Form' className={({ isActive }) => isActive ? "activated" : ""}><AiOutlineMail />Contact</NavLink>
    // </header>
    <header className="header">
    <div className="header__div--ola" ><svg viewBox="0 0 500 150" preserveAspectRatio="none"  className="header__svg--ola"><path d="M0.00,49.98 C150.00,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"  className="header__div--path">
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <Link className="header__a" to="/">
              <span className="span1"> Home</span>
              <span className="span2">
                <AiFillHome />
                </span>
            </Link>
          </li>
          <li className="header__li">
            <Link className="header__a" to="/Chat">
              <span className="span1">Chat</span>
              <span className="span2">
                <BsFillChatDotsFill />
                </span>
            </Link>
          </li>
          <li className="header__li">
            <Link className="header__a" to="/Jobs">
              <span className="span1">Jobs</span>
              <span className="span2">
                <FaUserTie />
                </span>
            </Link>
          </li>
          <li className="header__li">
            <Link className="header__a" to="/Users">
              <span className="span1">Users</span>
              <span className="span2">
                <FaUserCircle />
                </span>
            </Link>
          </li>
          <li className="header__li">
            <Link className="header__a" to="/Form">
              <span className="span1">Contactanos</span>
              <span className="span2">
                <AiOutlineMail />
                </span>
            </Link>
          </li>
        </ul>
      </nav>
      </path></svg></div>
    </header>
  );
};

export default Header;
