import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";
import { personalInfo } from "../data";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero" id="home">
      <div className="section-bg-text">DEVELOPER</div>
      
      <motion.div 
        className="hero-content"
        style={{ y: y1, opacity }}
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Available for Projects</span>
          <h1 className="hero-title">
            Creative <br />
            <span className="gradient-text">Full Stack</span> <br />
            Developer
          </h1>
          
          <div className="hero-typing">
            <Typewriter
              words={["MERN Stack Specialist", "Computer Science Student", "Software Engineer", "UI/UX Enthusiast"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <p className="hero-description">
            Hi, I'm <span className="highlight">{personalInfo.name}</span>. {personalInfo.heroIntro}
          </p>
          
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              View Work <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              <FaDownload /> Resume
            </a>
          </div>

          <div className="hero-socials">
            {[
              { icon: <FaLinkedin />, link: personalInfo.linkedin },
              { icon: <FaGithub />, link: "#" },
              { icon: <FaEnvelope />, link: `mailto:${personalInfo.email}` }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.link}
                className="social-btn"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-image-wrap"
        initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="image-card">
          <img 
            src="/assets/profile.png" 
            alt={personalInfo.name} 
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
            }}
          />
          <div className="card-overlay"></div>
          <div className="card-glow"></div>
        </div>
        <div className="floating-badge fb-1">MERN</div>
        <div className="floating-badge fb-2">JAVA</div>
        <div className="floating-badge fb-3">AI</div>
      </motion.div>
    </section>
  );
};

export default Hero;
