import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { projects } from "../data";
import "./Projects.css";

const Projects = () => {
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
          >
            <div className="project-image-box">
              <div className="tech-stack-overlay">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              {/* Using a placeholder gradient for image since actual images aren't provided */}
              <div className="project-placeholder-img" style={{
                background: project.featured 
                  ? 'linear-gradient(45deg, #0f172a, #38bdf8)' 
                  : 'linear-gradient(45deg, #0f172a, #1e293b)'
              }}>
                <FaCode className="placeholder-icon" />
              </div>
            </div>

            <div className="project-info-v2 glass">
              {project.featured && <div className="featured-label">FYP PROJECT</div>}
              <h3 className="project-name">{project.title}</h3>
              <p className="project-summary">{project.description}</p>
              
              <div className="project-actions">
                <a href={project.github} className="action-btn github">
                  <FaGithub /> Source
                </a>
                <a href={project.live} className="action-btn live btn-primary">
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
            <img 
              src="https://github-readme-stats.vercel.app/api?username=om-rai-b15163282&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8&icon_color=38bdf8" 
              alt="GitHub Stats" 
            />
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=om-rai-b15163282&theme=transparent&hide_border=true&stroke=38bdf8&ring=c084fc&fire=c084fc&currStreakLabel=38bdf8" 
              alt="GitHub Streak" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
