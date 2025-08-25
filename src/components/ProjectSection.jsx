import portfolioData from '../data';
// Import your project images
import project1Image from '../assets/projects/project1.jpg';
import project2Image from '../assets/projects/project2.jpg';
import project3Image from '../assets/projects/project3.jpg';
import '../styles/components/ProjectSection.css';


function ProjectSection() {
  const { projects } = portfolioData;

  // Map of project IDs to their corresponding images
  const projectImages = {
    1: project1Image,
    2: project2Image,
    3: project3Image,
  };

  return (
    <section id="projects" className="section projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.filter(project => project.featured).map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={projectImages[project.id]} 
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
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
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection
