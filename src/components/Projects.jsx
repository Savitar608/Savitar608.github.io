import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: 'Smart Bookmarks',
        description: 'Developed a cross-browser extension (Chrome/Firefox) that utilizes Large Language Models (LLMs) to automatically categorize and organize user bookmarks in real-time.',
        tags: ['Browser Extension', 'LLM', 'Productivity', 'JavaScript'],
        github: 'https://github.com/Savitar608/smart-bookmarks'
    },
    {
        title: 'NPM Supply Chain Defender',
        description: 'Engineered a multi-stage security framework designed to detect malicious npm packages through a hybrid analysis pipeline, balancing performance with detection accuracy.',
        tags: ['Python', 'Security', 'Supply Chain Security', 'Malware Analysis', 'npm'],
        github: 'https://github.com/orgs/ec521-null-pointers/repositories',
    },
    {
        title: 'Cyber Watch',
        description: 'A dedicated Discord bot designed to keep you and your community informed about the latest cybersecurity news and vulnerabilities.',
        tags: ['Python', 'Security', 'Discord Bot'],
        github: 'https://github.com/Savitar608/cyber-watch',
    },
];

const Projects = () => {
    if (projects.length === 0) {
        return null; // Don't render the section if there are no projects
    }

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((proj, index) => {
                    let renderlive = true;
                    if (!proj.live) {
                        renderlive = false;
                    }

                    return (
                        <div className="project-card" key={index}>
                            <div className="project-info">
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                                <div className="project-links">
                                    <a href={proj.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                    {renderlive && <a href={proj.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Projects;
