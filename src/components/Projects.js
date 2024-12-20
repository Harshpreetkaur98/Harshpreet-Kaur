import React, { useState, useRef } from 'react';
import Modal from './Modal';
import './Experience.css';
import DOMPurify from 'dompurify';
import { projects } from './ExperienceData';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalImage, setModalImage] = useState('');
  const carouselRef = useRef(null);

  const handleOpenModal = (title, content, imageUrl) => {
    setModalTitle(title);
    setModalContent(content);
    setModalImage(imageUrl);
    setShowModal(true);    
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent('');
    setModalTitle('');
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth'
    });
  };

  return (
    <div className="experience">
      <h2 className='experience-section' >Projects</h2>
      <div className='carousel-container'>
        <button className='nav-button left' onClick={scrollLeft}>
          {
           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
           <path fill="currentColor" fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
         </svg>
         
          }
          </button>
        <div className='experience-carousel' ref={carouselRef}>
        {projects.map((projects) => (
          <div 
          key={projects.id}
          className={`experience-block projects ${projects.title.toLowerCase().replace(' ', '-')}`}
          onClick={() => handleOpenModal(projects.title, projects.description, projects.imageUrl)}
          >
            <img src={projects.imageUrl} alt={projects.title} className="experience-image" />
          </div>
        ))}
        </div>
        <button className='nav-button right' onClick={scrollRight}>
          {
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          }
        </button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} title={modalTitle} imageUrl={modalImage}>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(modalContent) }} />
      </Modal>     
    </div>
  );
};

export default Projects;
