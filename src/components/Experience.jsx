import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Head Digital Works',
    type: 'Full-time',
    roles: [
      {
        role: 'Software Development Engineer - 2',
        date: 'Apr 2024 - Jul 2025',
        description: 'Designed and implemented robust solutions for the Know Your Customer (KYC) module, focusing on secure customer onboarding. Optimized database performance, implemented data encryption, and ensured data integrity. Collaborated with cross-functional teams to deliver scalable solutions and contributed to tech initiatives like AWS cost optimization.'
      },
      {
        role: 'Software Development Engineer - 1',
        date: 'Jul 2022 - Apr 2024',
        description: 'Contributed to backend development with a focus on Node.js and AWS, gaining experience in building and maintaining scalable microservices.'
      }
    ]
  },
  {
    company: 'upGrad',
    type: 'Internship',
    roles: [
      {
        role: 'Content Strategist (Tech)',
        date: 'Jan 2022 - Jun 2022',
        description: 'Contributed to the development of technology courses, including a cybersecurity course in collaboration with Purdue University.'
      }
    ]
  },
  {
    company: 'Trell',
    type: 'Internship',
    roles: [
      {
        role: 'Associate Program Manager',
        date: 'Jul 2021 - Dec 2021',
        description: 'Contributed to process automation by creating Python scripts with Selenium to improve efficiency. Developed scalable scripts to automate repetitive tasks and managed a team of two interns, providing guidance and overseeing their progress.'
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience-grid">
        {experiences.map((job, index) => (
          <div className="experience-card" key={index}>
            <h3>{job.company}</h3>
            <p className="job-type">{job.type}</p>
            {job.roles.map((role, roleIndex) => (
              <div className="role" key={roleIndex}>
                <h4>{role.role}</h4>
                <p className="date">{role.date}</p>
                <p className="description">{role.description}</p>
                {roleIndex < job.roles.length - 1 && <hr className="role-divider" />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
