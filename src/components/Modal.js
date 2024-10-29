import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, title, children, imageUrl }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">&times;</button>
        <div className="modal-content">
          {imageUrl && <img src={imageUrl} alt={title} className="modal-image" />}
          <div className="modal-text">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
