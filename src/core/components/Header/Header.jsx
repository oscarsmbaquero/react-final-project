import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineUserAdd, AiOutlineFileAdd, AiOutlineLogout } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserTie, FaUserCircle } from "react-icons/fa";
import "./Header.scss";
import Navbar from "react-bootstrap/Navbar";
import { logout, useDispatchAuth, useGetAuth } from "../../../context";
import logo4 from "../../../assets/images/4magni.png"
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
        <div>
          <Link className="header__a" to="/">
            <img src={logo4} alt="logo" className="header__logo"></img>
          </Link>
        </div>
        <div >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="header__ul">
              <div className="header__menu">
                {userLogged.id && <Link className="header__a" to="/chat">
                  <span className="span1">Chat</span>
                  <span className="span2">
                    <BsFillChatDotsFill />
                  </span>
                </Link>}
                {userLogged.id ?
                  <Link className="header__a" to="/jobs">
                    <span className="span1">Jobs</span>
                    <span className="span2">
                      <FaUserTie />
                    </span>
                  </Link>
                  : ''}
                {userLogged.id ?
                  <Link className="header__a" to="/users">
                    <span className="span1">Users</span>
                    <span className="span2">
                      <FaUserCircle />
                    </span>
                  </Link>
                  : ''}
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
                {!userLogged.id && <Link className="header__a" to="/users/register">
                  <span className="span1">Regístrate</span>
                  <span className="span2">
                    <AiOutlineMail />
                  </span>
                </Link>}
                {userLogged.id && userLogged.rol === 'Recruiter' ?
                  <Link className="header__a" to="/formCompanies">
                    <span className="span1">Añadir Oferta</span>
                    <span className="span2">
                      <AiOutlineFileAdd />
                    </span>
                  </Link> : ''}
                {!userLogged.id ? <Link className="header__a" to="/users/login">
                  <span className="span1">Login</span>
                  <span className="span2">
                    <AiOutlineUserAdd />
                  </span>
                </Link> : <>
                  <AiOutlineLogout onClick={handleLogout} className="header__a" />
                </>
                }
              </div>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};
export default Header;