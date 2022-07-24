import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineMail, AiOutlineUserAdd, AiOutlineFileAdd, AiOutlineLogout } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserTie, FaUserCircle } from "react-icons/fa";
import "./Header.scss";
import Navbar from "react-bootstrap/Navbar";
import { logout, useDispatchAuth, useGetAuth } from "../../../context";

const Header = () => {

  const userLogged = useGetAuth();
  const dispatch = useDispatchAuth()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout(dispatch)
    navigate('/users/login')
  }

  return (
    <>
     
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
              {userLogged.id && <Link className="header__a" to="/chat">
                <span className="span1">Chat</span>
                <span className="span2">
                  <BsFillChatDotsFill />
                </span>
              </Link>}
              {userLogged.id && userLogged.rol === 'User'?
              <Link className="header__a" to="/jobs">
                <span className="span1">Jobs</span>
                <span className="span2">
                  <FaUserTie />
                </span>
              </Link>
              :''}
              {userLogged.id ?
              <Link className="header__a" to="/users">
                <span className="span1">Users</span>
                <span className="span2">
                  <FaUserCircle />
                </span>
              </Link>
              :''}
              {userLogged.id && <Link className="header__a" to="/profile">
                <span className="span1">My Profile</span>
                <span className="span2">
                  <FaUserCircle />
                </span>
              </Link>}
              <Link className="header__a" to="/formContact">
                <span className="span1">Contáctanos</span>
                <span className="span2">
                  <AiOutlineMail />
                </span>
              </Link>
              {!userLogged && <Link className="header__a" to="/users/register">
                <span className="span1">Regístrate</span>
                <span className="span2">
                  <AiOutlineMail />
                </span>
              </Link>}
              {userLogged.id && userLogged.rol === 'Recruiter'?
              <Link className="header__a" to="/formCompanies">
                <span className="span1">Añadir Oferta</span>
                <span className="span2">
                  <AiOutlineFileAdd />
                </span>
              </Link>:''}
              {userLogged.id && userLogged.rol === 'User' ?
              <Link className="header__a" to="/formEmployers">
                <span className="span1">Añadir USuario</span>
                <span className="span2">
                  <AiOutlineUserAdd />
                </span>
              </Link>:''}
              {!userLogged.id ? <Link className="header__a" to="/users/login">
                <span className="span1">Login</span>
                <span className="span2">
                  <AiOutlineUserAdd />
                </span>
              </Link> :<>
              {/* <span className="span1">{userLogged.email}</span> */}
              <AiOutlineLogout onClick={handleLogout} className="header__a" />
              </> 
              }

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
      
      
    </>
  );
};
export default Header;