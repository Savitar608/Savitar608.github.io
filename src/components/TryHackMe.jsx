import React from 'react';
import './TryHackMe.css';

const TryHackMe = () => {
  return (
    <section id="tryhackme">
      <h2>TryHackMe Profile</h2>
      <div className="tryhackme-container">
        <iframe 
          src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=466514" 
          className="tryhackme-iframe"
          title="TryHackMe Profile"
        ></iframe>
      </div>
    </section>
  );
};

export default TryHackMe;
