import React from 'react';
import '../Styles/project.css';
import eventStreamImage from '../images/pp.jpg'; // Adjust the path as necessary

const Projects = () => {
  const projectData = [
    {
      title: 'EventStream',
      description: 'A dynamic event streaming application that showcases real-time data updates.',
      link: 'https://eventstream.netlify.app/',
      image: eventStreamImage, 
    },
   
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;