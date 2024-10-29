import React from 'react';
import './AboutMe.css';
import profileImage from './Images-Netflix/main-background-image.jpg';
import Footer from './Footer';

const AboutMe = () => {
  return (
    <div className="about-container">
      <h1>Hey there! </h1>
      <div className="content-wrapper">
        <div className="about-content">
          <p>I'm a student at University of Greenwich with a passion for all things related to tech.</p>
          <p>My coding journey started at the age of 14, and I've been hooked ever since. Whether it's tinkering with new programming languages, diving into the latest tech trends, or building cool projects, I can't get enough of it. </p>
          <p>With a solid technical background and a love for problem-solving, I'm working my way towards my dream job: becoming a software engineer at one of the FAANG companies. Until then, you'll find me buried in code, exploring new technologies, and enjoying every moment of my tech-filled adventure.</p>
          <p>Let's connect and talk tech!</p>
        </div>
      <div>
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
