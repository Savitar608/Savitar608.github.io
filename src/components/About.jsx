import React from 'react';
import './About.css';
// You can add your own image to the assets folder and import it here
// import profilePic from '../assets/profile.jpg'; 

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a passionate and driven Computer Science student at Boston University, specializing in Cybersecurity. 
            I thrive on solving complex problems and have a deep interest in ethical hacking, network security, and cryptography.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Wireshark</li>
            <li>Metasploit</li>
          </ul>
        </div>
        <div className="about-image">
          {/* <img src={profilePic} alt="Your Name" /> */}
          <div style={{ width: '300px', height: '300px', backgroundColor: '#ccc', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
            <p style={{color: 'black'}}>Your Image Here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
