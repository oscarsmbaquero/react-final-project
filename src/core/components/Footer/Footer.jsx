import React from "react";
import "./Footer.scss";
import logo4 from "../../../assets/images/4magni.png";
import { Link } from "react-router-dom";
import { AiOutlineMail} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__ul">
          <li className="footer__li">Instagram</li>
          <li className="footer__li">Facebook</li>
          <li className="footer__li">Twitter</li>
          <li className="footer__li">Linkedin</li>
        </ul>
        <div className="footer__brand">
          <h2>The</h2>
          <img className="footer__logo" src={logo4} alt="..."></img>
          <h2>amazing</h2>
          </div>
        <Link className="footer__a" to="/formContact">Contáctanos
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
