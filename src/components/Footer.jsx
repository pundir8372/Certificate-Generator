import React, { useState } from 'react';
import './Footer.css';
import footerImage from '/GroupOfPeople.png';



const FooterSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData object
    const data = new FormData();
    data.append('data[Name]', formData.name);
    data.append('data[Email]', formData.email);
    data.append('data[Message]', formData.message);
    
    try {
      const response = await fetch('https://sheetdb.io/api/v1/p0fq34eb16wnp', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="footer-container">
        <div className="contact-content">
          <div className="contact-image">
            <img src={footerImage} alt="Woman with laptop" />
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name *" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Mail *" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
              <textarea 
                name="message" 
                placeholder="Your Message *" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © Kritarth Devli 2024. All Rights Reserved</p>
          <div className="footer-social">
            <span>Follow Us</span>
            <a href="https://www.linkedin.com/company/sahyog-dehradun/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/sahyogdehradun/" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
