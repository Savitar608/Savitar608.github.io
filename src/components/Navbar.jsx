import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
          <a href="https://github.com/Savitar608" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/adithya608/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
