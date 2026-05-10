import { motion } from "framer-motion";
import { skills } from "../data";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-bg-text">KNOWLEDGE</div>
      <h2 className="section-title">
        Power <span>Stack</span>
      </h2>
      
      <div className="skills-v2-container">
        <div className="skills-main-grid">
          {/* Frontend & Backend */}
          {[
            { title: "Frontend", data: skills.frontend },
            { title: "Backend", data: skills.backend }
          ].map((category, idx) => (
            <motion.div 
              key={idx}
              className="skill-group-v2 glass"
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className="progress-stack">
                {category.data.map(skill => (
                  <div className="skill-v2-item" key={skill.name}>
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="bar-v2">
                      <motion.div 
                        className="fill-v2"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Languages in a different layout */}
        <div className="misc-skills">
          <motion.div 
            className="tools-languages glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="misc-box">
              <h4>Languages</h4>
              <div className="glow-tags">
                {skills.languages.map(l => <span key={l} className="glow-tag">{l}</span>)}
              </div>
            </div>
            <div className="misc-box">
              <h4>Tools & Ecosystem</h4>
              <div className="glow-tags">
                {skills.tools.map(t => <span key={t} className="glow-tag">{t}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
