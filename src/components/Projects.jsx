import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data";
import "./Projects.css";

const Projects = () => {
  const handleCardClick = (githubUrl) => {
    if (githubUrl !== "#") {
      window.open(githubUrl, "_blank");
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="section-bg-text">PORTFOLIO</div>
      <h2 className="section-title">
        Selected <span>Works</span>
      </h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className={`project-card-v2 ${project.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => handleCardClick(project.github)}
            style={{ cursor: project.github !== "#" ? "pointer" : "default" }}
          >
            <div className="project-image-box">
              <div className="tech-stack-overlay">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              <img src={project.image} alt={project.title} className="project-illustration" />
            </div>

            <div className="project-info-v2 glass">
              {project.featured && <div className="featured-label">FYP PROJECT</div>}
              <h3 className="project-name">{project.title}</h3>
              <p className="project-summary">{project.description}</p>
              
              <div className="project-actions" onClick={(e) => e.stopPropagation()}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn github">
                  <FaGithub /> Source
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="action-btn live btn-primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="github-section glass">
        <div className="github-content">
          <h3>GitHub Activity</h3>
          <div className="stats-grid">
            <a
              href="https://github.com/Om-raii"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-card"
            >
              <div className="github-profile-icon">
                <FaGithub />
              </div>
              <div>
                <h4>Om-raii</h4>
                <p>Open-source projects, repositories, and coding activity</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
