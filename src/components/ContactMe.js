import React, { useState } from 'react';
import './ContactMe.css';
import Footer from './Footer';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:5000/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if(response.ok){
        alert('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else{
          alert('Message failed to send');
      }
    } catch(error){
      alert('Error: ' + error.toString());
    }
  };

  return (
    <div className='contact-page' >
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
