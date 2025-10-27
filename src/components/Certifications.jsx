import React from 'react';
import './Certifications.css';

const certifications = [
  { title: 'Advent of Cyber 2024', issuer: 'TryHackMe', date: 'Dec 2024' },
  { title: 'CompTIA Pentest+ Learning Path', issuer: 'TryHackMe', date: 'May 2022' },
  { title: 'Introduction to Cyber Security Learning Path', issuer: 'TryHackMe', date: 'May 2022' },
  { title: 'Jr Penetration Tester Learning Path', issuer: 'TryHackMe', date: 'Apr 2022' },
  { title: 'Web Fundamentals Learning Path', issuer: 'TryHackMe', date: 'Feb 2022' },
  { title: 'Complete Beginner Learning Path', issuer: 'TryHackMe', date: 'Jan 2022' },
  { title: 'The Complete Cyber Security Course: Hackers Exposed!', issuer: 'Udemy', date: 'Jan 2022' },
  { title: 'Pre Security Learning Path', issuer: 'TryHackMe', date: 'Dec 2021' },
  { title: 'Usable Security', issuer: 'Coursera', date: 'Jul 2021' },
  { title: 'Capstone: Retrieving, Processing, and Visualizing Data with Python', issuer: 'Coursera', date: 'Jun 2021' },
  { title: 'Python for Everybody Specialization', issuer: 'Coursera', date: 'Jun 2021' },
  { title: 'Using Databases with Python', issuer: 'Coursera', date: 'May 2020' },
  { title: 'Using Python to Access Web Data', issuer: 'Coursera', date: 'May 2020' },
  { title: 'Programming for Everybody (Getting Started with Python)', issuer: 'Coursera', date: 'Apr 2020' },
  { title: 'Python Data Structures', issuer: 'Coursera', date: 'Apr 2020' },
  { title: 'Cybersecurity and Cyber Forensics', issuer: 'Quick Heal', date: 'Feb 2018' },
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Licenses & Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">Issued {cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
