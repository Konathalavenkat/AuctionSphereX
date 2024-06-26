import React from 'react';
import './foot.css';
import { FaFacebook, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
      <a href="https://github.com/Konathalavenkat" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:venkatsiva2208@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail />
        </a>
        <a href="https://www.instagram.com/venkat._.siva/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="footer-center">
        <p>&copy; 2024 AuctionSphereX. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <Link to="/contact">
          <FaEnvelope />
        </Link>
        <p>Get in touch</p>
      </div>
    </footer>
  );
}

export default Footer;
