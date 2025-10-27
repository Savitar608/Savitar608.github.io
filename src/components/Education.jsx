import React from 'react';
import './Education.css';

const educationHistory = [
  {
    institution: 'Boston University',
    degree: 'Master of Science - MS, Computer Science with Specialization in Cybersecurity',
    date: 'Sep 2025 - May 2027',
    description: ''
  },
  {
    institution: 'Birla Institute of Technology and Science, Pilani - Goa Campus',
    degree: "Master's degree, Mathematics",
    date: '2017 - 2022',
    description: ''
  }
];

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-grid">
        {educationHistory.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="date">{edu.date}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
