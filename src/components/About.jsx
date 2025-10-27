import React from 'react';
import './About.css';
// You can add your own image to the assets folder and import it here
import profilePic from '../assets/profile.jpg'; 

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Master’s student in Computer Science with a specialization in Cybersecurity at Boston University, with prior experience as a backend developer focused on Node.js and AWS. Skilled in designing RESTful APIs, optimizing system performance, and building secure, scalable solutions.
          </p>
          <p>
            I am passionate about problem-solving, programming, and securing modern systems. I am currently seeking Summer 2026 internship opportunities in backend development or cybersecurity.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul>
            <li>Node.js</li>
            <li>AWS</li>
            <li>React</li>
            <li>Python</li>
            <li>RESTful APIs</li>
            <li>System Performance Optimization</li>
          </ul>
        </div>
        <div className="about-image">
          <img src={profilePic} alt="Adithya" />
          <div className="tryhackme-badge-container">
            <iframe 
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=466514" 
              className="tryhackme-badge-iframe"
              title="TryHackMe Profile Badge"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
