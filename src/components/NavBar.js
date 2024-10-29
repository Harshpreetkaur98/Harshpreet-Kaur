import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import logo from './Images-Netflix/HARSHPREET-logo.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/Portfolio">
            <img className="harshpreet-logo" src={logo} alt="Netflix Logo" />
          </a>
        </div>
        <nav className="nav-links">
        <ul>
            <li><a href="https://drive.google.com/file/d/1E6lqvC7DZW4ujyFdtX3rY7mVxvJ5G6h9/view?usp=drive_linkme">Check out my Resume</a></li>
          </ul>
        </nav>
        <div className="profile">
          <a>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" class="user-logo-image" alt="Profile Icon" />
          </a>
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/About-Me">About Me</Link>
            <Link to="/Contact-Me">Get In Touch</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
