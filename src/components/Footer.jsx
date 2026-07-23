import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          OM<span className="gradient-text">PARKASH</span>
        </div>
        <p className="footer-desc">Building modern digital experiences with passion and precision.</p>
        <div className="footer-socials">
          <a href={personalInfo.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href={`mailto:${personalInfo.email}`}><FaEnvelope /></a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Om Parkash. All rights reserved.</p>
          <p>Designed & Built by Om Parkash</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
