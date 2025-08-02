import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <Mail className="hero-icon" />
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-description">
            Have questions about our theme system? Want to collaborate on a project? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>hello@themeswitch.com</p>
                </div>
              </div>
              <div className="contact-method">
                <Phone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 (8406) 808090</p>
                </div>
              </div>
              <div className="contact-method">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Bengaluru, IN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Send us a message</h2>
                
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="form-input form-textarea"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button type="submit" size="large" className="submit-btn">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;