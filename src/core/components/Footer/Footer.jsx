import React from "react";
import "./Footer.scss";
import logo4 from "../../../assets/images/4magni.png";
import { Link } from "react-router-dom";
import github from "../../../assets/images/github(2).png";
import facebook from "../../../assets/images/facebook(1).png";
import instagram from "../../../assets/images/instagram(4).png"
import linkedin from "../../../assets/images/linkedin(2).png"
import mensaje from "../../../assets/images/mensaje.png"
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__ul">
          <a className="footer__li" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img className="footer__social" src={instagram} alt="github"></img>
            </a>
            <a className="footer__li" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img className="footer__social" src={facebook} alt="github"></img>
            </a>
            <a className="footer__li" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <img className="footer__social" src={linkedin} alt="github"></img>
            </a>
            <a className="footer__li" href="https://github.com/" target="_blank" rel="noreferrer">
            <img className="footer__social" src={github} alt="github"></img>
            </a>
        </ul>
        <div className="footer__brand">
          <h2>The</h2>
          <img className="footer__logo" src={logo4} alt="..."></img>
          <h2>amazing</h2>
        </div>
        <div className="footer__link">
        <img className="footer__contact" src={mensaje} alt="github"></img>
        <Link className="footer__a" to="/formContact">Contáctanos
          </Link>
          <img className="footer__contact" src={mensaje} alt="github"></img>
          </div>
      </nav>
    </footer>
  );
};

export default Footer;
