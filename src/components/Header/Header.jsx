import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from 'react-router-dom'
import {
  AiFillHome,
  AiOutlineMail,
  AiOutlineUserAdd,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserTie, FaUserCircle } from "react-icons/fa";
import "./Header.scss";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
  return (

    <Navbar className="header" expand="md">
      <div className="header__container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="header__ul">
          <Link className="header__a" to="/">
              <span className="span1"> Home</span>
              <span className="span2">
                <AiFillHome />
              </span>
            </Link>
            <Link className="header__a" to="/Chat">
              <span className="span1">Chat</span>
              <span className="span2">
                <BsFillChatDotsFill />
              </span>
            </Link>
            <Link className="header__a" to="/Jobs">
              <span className="span1">Jobs</span>
              <span className="span2">
                <FaUserTie />
              </span>
            </Link>
            <Link className="header__a" to="/Users">
              <span className="span1">Users</span>
              <span className="span2">
                <FaUserCircle />
              </span>
            </Link>
            <Link className="header__a" to="/FormContact">
              <span className="span1">Contáctanos</span>
              <span className="span2">
                <AiOutlineMail />
              </span>
            </Link>
            <Link className="header__a" to="/FormCompanies">
              <span className="span1">Añadir Oferta</span>
              <span className="span2">
                <AiOutlineFileAdd />
              </span>
            </Link>
            <Link className="header__a" to="/FormEmployers">
              <span className="span1">Añadir USuario</span>
              <span className="span2">
                <AiOutlineUserAdd />
              </span>
            </Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default Header;