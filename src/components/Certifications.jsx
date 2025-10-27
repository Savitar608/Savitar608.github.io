import React from 'react';
import { FaLink } from 'react-icons/fa';
import './Certifications.css';
import quickHealCert from '../assets/quick-heal-cert.jpeg';

const certifications = [
    { title: 'Advent of Cyber 2024', issuer: 'TryHackMe', date: 'Dec 2024', link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-1DAR3U98ZA.pdf' },
    { title: 'CompTIA Pentest+ Learning Path', issuer: 'TryHackMe', date: 'May 2022', link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ZRRYMID7CX.pdf' },
    { title: 'Introduction to Cyber Security Learning Path', issuer: 'TryHackMe', date: 'May 2022', link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-GSIBEICFLI.pdf' },
    { title: 'Jr Penetration Tester Learning Path', issuer: 'TryHackMe', date: 'Apr 2022', link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-2XJNI7JTHC.pdf' },
    { title: 'Web Fundamentals Learning Path', issuer: 'TryHackMe', date: 'Feb 2022', link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-QBPRTQ8HXJ.pdf' },
    { title: 'Complete Beginner Learning Path', issuer: 'TryHackMe', date: 'Jan 2022', link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-GNW6I5VYTR.pdf' },
    { title: 'The Complete Cyber Security Course: Hackers Exposed!', issuer: 'Udemy', date: 'Jan 2022', link: 'https://www.udemy.com/certificate/UC-12b99705-69e2-46cf-8335-19a210a4b22a/' },
    { title: 'Pre Security Learning Path', issuer: 'TryHackMe', date: 'Dec 2021', link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-NGR9C3XDW3.pdf' },
    { title: 'Usable Security', issuer: 'Coursera', date: 'Jul 2021', link: 'https://www.coursera.org/account/accomplishments/certificate/8GRPUN52J767' },
    { title: 'Capstone: Retrieving, Processing, and Visualizing Data with Python', issuer: 'Coursera', date: 'Jun 2021', link: 'https://www.coursera.org/account/accomplishments/certificate/Z2ARBJBC9RDD' },
    { title: 'Python for Everybody Specialization', issuer: 'Coursera', date: 'Jun 2021', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/KJ7HGC3F8ULQ' },
    { title: 'Using Databases with Python', issuer: 'Coursera', date: 'May 2020', link: 'https://www.coursera.org/account/accomplishments/certificate/EYKC3WUN6SKL' },
    { title: 'Using Python to Access Web Data', issuer: 'Coursera', date: 'May 2020', link: 'https://www.coursera.org/account/accomplishments/certificate/H759BNAVXU8X' },
    { title: 'Programming for Everybody (Getting Started with Python)', issuer: 'Coursera', date: 'Apr 2020', link: 'https://www.coursera.org/account/accomplishments/certificate/QGRE76YLKECC' },
    { title: 'Python Data Structures', issuer: 'Coursera', date: 'Apr 2020', link: 'https://www.coursera.org/account/accomplishments/certificate/Q3XJMZRZJKEX' },
    { title: 'Cybersecurity and Cyber Forensics', issuer: 'Quick Heal', date: 'Feb 2018', link: quickHealCert },
];

const Certifications = () => {
  const midIndex = Math.ceil(certifications.length / 2);
  const leftColumn = certifications.slice(0, midIndex);
  const rightColumn = certifications.slice(midIndex);

  const renderColumn = (column, startIndex = 0) => (
    <div className="certifications-column">
      {column.map((cert, index) => (
        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-item" key={startIndex + index}>
          <div className="cert-info">
            <span className="cert-title">{cert.title}</span>
            <span className="cert-details">{cert.issuer} &bull; {cert.date}</span>
          </div>
          <span className="cert-link-icon"><FaLink /></span>
        </a>
      ))}
    </div>
  );

  return (
    <section id="certifications">
      <h2>Licenses & Certifications</h2>
      <div className="certifications-list">
        {renderColumn(leftColumn)}
        {renderColumn(rightColumn, midIndex)}
      </div>
    </section>
  );
};

export default Certifications;
