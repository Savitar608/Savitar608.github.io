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
        description: 'I was deeply involved in the Know Your Customer (KYC) module, where I focused on designing and implementing robust solutions to ensure seamless and secure customer onboarding. My responsibilities included optimizing database performance, implementing data encryption, and enforcing secure storage practices to safeguard customer information. I maintained a strong emphasis on data integrity and confidentiality, proactively identifying and mitigating potential vulnerabilities to ensure compliance with regulatory standards. I collaborated closely with product managers, data analysts, and QA teams to deliver high-quality, scalable solutions. Beyond my core work in the KYC domain, I also contributed to broader tech initiatives - such as cost optimization in AWS and exploring emerging technologies to enhance operational efficiency. I actively participated in evaluating new tools and frameworks and supported their integration into ongoing projects to drive innovation across the organization.'
      },
      {
        role: 'Software Development Engineer - 1',
        date: 'Jul 2022 - Apr 2024',
        description: 'Contributed to various backend development tasks, focusing on Node.js and AWS. Gained experience in building and maintaining scalable microservices.'
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
        description: 'I had the privilege of contributing to the development of their technology courses, including a cybersecurity course in collaboration with Purdue University.'
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
        description: 'I made significant contributions to process automation and intern management. In this role, I focused on creating Python scripts using Selenium to automate specific tasks, thereby improving efficiency and productivity within the organization. As part of the automation efforts, I collaborated closely with cross-functional teams to identify manual processes that could be streamlined through script automation. By leveraging my Python programming skills and expertise in Selenium, I developed robust and scalable scripts that effectively automated repetitive tasks, saving valuable time and resources. In addition to my technical responsibilities, I also had the opportunity to take on a managerial role. I successfully managed a team of two interns, providing guidance, assigning tasks, and overseeing their progress. Through effective communication and mentorship, I ensured that the interns had a supportive and enriching experience, while also maximizing their contributions to the project. Working at Trell provided me with valuable hands-on experience in program management, automation, and team leadership. It allowed me to apply my technical skills and collaborate with professionals from diverse backgrounds to achieve common goals.'
      }
    ]
  },
  {
    company: 'Carborundum Universal Limited',
    type: 'Internship',
    roles: [
        {
            role: 'Project Intern',
            date: 'May 2019 - Jul 2019',
            description: ''
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
