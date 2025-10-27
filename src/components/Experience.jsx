import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Full-Time Company Name',
    type: 'Full-time',
    roles: [
      {
        role: 'Your Promoted Role',
        date: 'Month Year - Present',
        description: 'Describe your responsibilities and achievements in your current role.'
      },
      {
        role: 'Your Initial Role',
        date: 'Month Year - Month Year',
        description: 'Describe your responsibilities and achievements in your initial role.'
      }
    ]
  },
  {
    company: 'Internship Company 1',
    type: 'Internship',
    roles: [
      {
        role: 'Internship Role 1',
        date: 'Month Year - Month Year',
        description: 'Describe your responsibilities and what you learned during this internship.'
      }
    ]
  },
  {
    company: 'Internship Company 2',
    type: 'Internship',
    roles: [
      {
        role: 'Internship Role 2',
        date: 'Month Year - Month Year',
        description: 'Describe your responsibilities and what you learned during this internship.'
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
                <p>{role.description}</p>
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
