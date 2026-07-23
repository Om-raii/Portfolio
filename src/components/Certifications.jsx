import { motion } from "framer-motion";
import { certifications } from "../data";
import { FaCertificate } from "react-icons/fa";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>
      
      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="cert-card glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="cert-icon">
              <FaCertificate />
            </div>
            <div className="cert-content">
              <h3 className="cert-name">{cert.title}</h3>
              {cert.link && (
                <a href={cert.link} className="cert-link" target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
