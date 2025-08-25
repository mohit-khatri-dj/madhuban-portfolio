import React, { useState } from 'react';
import portfolioData from '../data';

function ContactSection() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1000);
  };

  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="section contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>{personalInfo.email}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="social-links">
              <a href={personalInfo.socialMedia.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href={personalInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={personalInfo.socialMedia.dev} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-dev"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn--primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading"></span> Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> &nbsp; Send Message
                </>
              )}
            </button>
            {submitStatus === 'success' && (
              <div className="status status--success mt-8">
                <i className="fas fa-check-circle"></i> Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection
