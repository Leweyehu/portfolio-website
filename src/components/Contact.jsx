import axios from "axios";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"; // You'll need to install react-icons
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", formData);
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <p className="contact-desc">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="info-cards">
            <div className="info-card">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <div className="text-box">
                <span>Email</span>
                <p>leweyehuyirsaw@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>
              <div className="text-box">
                <span>Phone</span>
                <p>+251988322475</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="text-box">
                <span>Location</span>
                <p>Ethiopia</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <p>Connect with me</p>
            <div className="social-icons">
              <a href="https://github.com/Leweyehu">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/leweyehu-yirsaw-9040b8b6/">
                <FaLinkedin />
              </a>
              <a href="mailto:yourgmail@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="contact-form" onSubmit={sendMessage}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
