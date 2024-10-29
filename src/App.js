import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import './App.css'; 
import Experience from './components/Experience';
import MainPage from './components/MainPage';
import Certification from './components/Certification';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/About-Me" element={<AboutMe />} />
          <Route path="/Contact-Me" element={<ContactMe />} />
        </Routes>
      <div id="experience-section">
      <Routes>
          <Route path="/" element={<>
            <Experience />
            <Projects />
            <Education />
            <Certification />
            <Footer />
          </>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
