import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [status, setStatus] = useState('');

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setStatus('Error: Please complete the CAPTCHA.');
      return;
    }

    emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current, 
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then((result) => {
          console.log(result.text);
          setStatus('Success: Thank you for your message!');
          e.target.reset();
          setCaptchaValue(null);
      }, (error) => {
          console.log(error.text);
          setStatus('Error: Email sending failed. Please try again later.');
      });
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        I'm currently looking for new opportunities, and my inbox is always open.
        Whether you have a question or just want to say hi, I'll get back to you!
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="form-group recaptcha-container">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
            theme="dark"
          />
        </div>
        <button type="submit" className="submit-button">Say Hello</button>
      </form>
      {status && <p className={`status-message ${status.startsWith('Error') ? 'error' : 'success'}`}>{status}</p>}
    </section>
  );
};

export default Contact;
