import { motion } from "framer-motion";
import { experience } from "../data";
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-bg-text">JOURNEY</div>
      <h2 className="section-title">
        Work <span>Experience</span>
      </h2>
      
      <div className="timeline-v2">
        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-v2-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-v2-marker">
              <div className="marker-icon"><FaBriefcase /></div>
              <div className="marker-line"></div>
            </div>
            
            <div className="timeline-v2-content glass">
              <div className="timeline-v2-header">
                <div>
                  <h3 className="exp-role-v2">{exp.role}</h3>
                  <h4 className="exp-company-v2">{exp.company}</h4>
                </div>
                <span className="exp-date-v2">{exp.period}</span>
              </div>
              
              <ul className="exp-bullets-v2">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
