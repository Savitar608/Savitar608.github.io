import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botCheck: ''
  });
  const [status, setStatus] = useState('');

  const num1 = 7;
  const num2 = 5;
  const correctAnswer = num1 + num2;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.botCheck, 10) !== correctAnswer) {
      setStatus('Error: Incorrect answer to the security question.');
      return;
    }

    // In a real application, you would handle the form submission here,
    // e.g., send the data to a backend server or an email service.
    console.log('Form data submitted:', formData);
    setStatus('Success: Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: '',
      botCheck: ''
    });
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        I'm currently looking for new opportunities, and my inbox is always open.
        Whether you have a question or just want to say hi, I'll get back to you!
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group bot-check">
          <label htmlFor="botCheck">Security Question: What is {num1} + {num2}?</label>
          <input
            type="text"
            name="botCheck"
            id="botCheck"
            placeholder="Your Answer"
            value={formData.botCheck}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Say Hello</button>
      </form>
      {status && <p className={`status-message ${status.startsWith('Error') ? 'error' : 'success'}`}>{status}</p>}
    </section>
  );
};

export default Contact;
