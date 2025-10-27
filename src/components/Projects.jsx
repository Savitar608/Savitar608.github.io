import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Project Cybersafe',
    description: 'A comprehensive tool for network traffic analysis and intrusion detection. Built with Python and Scapy.',
    tags: ['Python', 'Scapy', 'Network Security'],
    github: '#',
    live: '#'
  },
  {
    title: 'Portfolio Website V1',
    description: 'My first personal portfolio website built with plain HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-links">
                <a href={proj.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
