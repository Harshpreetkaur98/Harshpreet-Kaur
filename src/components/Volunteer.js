import React, { useState } from 'react';
import Modal from './Modal';
import './Experience.css';

const Volunteer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <div className="experience">
      <h2 className='experience-section' >Volunteer</h2>
      <div className="experience-blocks" onClick={() => handleOpenModal('Details about Experience 1')}>
        <div className="experience-block first">
        </div>
        <div className="experience-block second" onClick={() => handleOpenModal('Details about Experience 2')}>
          Experience 2
        </div>
        <div className="experience-block second" onClick={() => handleOpenModal('Details about Experience 2')}>
          Experience 3
        </div>

      </div>
      <Modal show={showModal} onClose={handleCloseModal} title="Experience Details">
        {modalContent}
      </Modal>
    </div>
  );
};

export default Volunteer;
