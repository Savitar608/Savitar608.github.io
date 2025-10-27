import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Cybersecurity Intern',
    company: 'Secure Solutions Inc.',
    date: 'Summer 2024',
    description: 'Assisted the security team with vulnerability assessments and penetration testing exercises. Monitored network traffic and analyzed security alerts.'
  },
  {
    role: 'Software Developer Intern',
    company: 'Tech Innovations LLC',
    date: 'Summer 2023',
    description: 'Developed and maintained features for a web application using React and Node.js. Collaborated with a team of developers in an Agile environment.'
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="date">{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
