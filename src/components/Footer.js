import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/Harshpreetkaur98" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/harshpreet-kaur-codes/" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:harshpreet.149kaur@gmail.com" className="footer-link">
          <FaEnvelope size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
