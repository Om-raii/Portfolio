import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo } from "../data";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setMessage("Message sent successfully! I will get back to you soon.");
      console.log("Form submitted to Om Parkash:", form.current.user_name.value);
      form.current.reset();
      setTimeout(() => setMessage(""), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Let's talk about your project</h3>
          <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>{personalInfo.email}</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <p>{personalInfo.phone}</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" name="user_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"} <FaPaperPlane />
            </button>
            {message && <p className="success-msg">{message}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
