import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: 'Bluetooth Cyber Watch',
        description: 'A dedicated Discord bot designed to keep you and your community informed about the latest cybersecurity news and vulnerabilities specifically related to Bluetooth technology.',
        tags: ['Python', 'Security', 'Discord Bot'],
        github: 'https://github.com/Savitar608/bluetooth-cyber-watch'
    }
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
