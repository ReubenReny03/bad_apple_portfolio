import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 3;

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerView >= projects.length 
        ? 0 
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, projects.length - projectsPerView) 
        : prevIndex - 1
    );
  };

  const canSlideLeft = currentIndex > 0;
  const canSlideRight = currentIndex + projectsPerView < projects.length;

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        <button 
          className={`nav-button prev ${!canSlideLeft ? 'disabled' : ''}`}
          onClick={prevSlide}
          disabled={!canSlideLeft}
        >
          <FaChevronLeft />
        </button>

        <div className="project-grid-container">
          <div 
            className="project-grid"
            style={{
              transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)`,
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className={`nav-button next ${!canSlideRight ? 'disabled' : ''}`}
          onClick={nextSlide}
          disabled={!canSlideRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;