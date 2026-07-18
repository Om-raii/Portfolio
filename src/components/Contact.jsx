import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo } from "../data";
import "./Contact.css";

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    setMessage("");
    setMessageType("success");

    try {
      const formData = new FormData(form.current);
      const payload = new URLSearchParams();
      payload.append("name", formData.get("user_name")?.toString() ?? "");
      payload.append("email", formData.get("user_email")?.toString() ?? "");
      payload.append("message", formData.get("message")?.toString() ?? "");
      payload.append("_subject", `New portfolio message from ${formData.get("user_name")}`);
      payload.append("_captcha", "false");
      payload.append("_template", "table");

      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.email)}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.current.reset();
      setMessage("Message sent successfully! I will get back to you soon.");
    } catch (error) {
      console.error("Contact form error:", error);
      setMessageType("error");
      setMessage(`Sorry, something went wrong. Please email me directly at ${personalInfo.email}.`);
    } finally {
      setIsSending(false);
      window.setTimeout(() => setMessage(""), 5000);
    }
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
            {message && <p className={messageType === "error" ? "error-msg" : "success-msg"}>{message}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
