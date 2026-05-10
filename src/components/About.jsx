import { motion } from "framer-motion";
import { personalInfo } from "../data";
import { FaUserGraduate, FaCode, FaRocket } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-bg-text">PASSION</div>
      <div className="about-grid-v2">
        <motion.div 
          className="about-image-side"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-img-box glass">
             <img src="/assets/profile.png" alt={personalInfo.name} className="about-profile-img" />
             {/* Decorative element */}
             <div className="about-deco"></div>
             <div className="about-stats-mini">
                <div className="mini-stat">
                   <span>3.1</span>
                   <p>CGPA</p>
                </div>
                <div className="mini-stat">
                   <span>5+</span>
                   <p>Projects</p>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-text-side"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Transforming <span>Ideas</span> into Reality
          </h2>
          <div className="about-bio">
            <p className="lead">
              I am a <strong>Full Stack Developer</strong> and Computer Science student with a drive for excellence.
            </p>
            <p>
              My expertise lies in building <strong>scalable MERN stack applications</strong>. I bridge the gap between complex backend logic and intuitive frontend experiences.
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <FaCode className="f-icon" />
                <div>
                  <h4>Clean Code</h4>
                  <p>Writing maintainable, efficient, and well-documented code.</p>
                </div>
              </div>
              <div className="feature-item">
                <FaUserGraduate className="f-icon" />
                <div>
                  <h4>Quick Learner</h4>
                  <p>Constantly evolving with the latest industry trends.</p>
                </div>
              </div>
              <div className="feature-item">
                <FaRocket className="f-icon" />
                <div>
                  <h4>Problem Solver</h4>
                  <p>Turning technical challenges into digital solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
