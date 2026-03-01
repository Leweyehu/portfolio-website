import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://localhost/portfolio-backend/send_message.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-desc">
            I'm always open to discussing new projects or opportunities.
          </p>

          <div className="info-cards">
            <div className="info-card">
              <FaEnvelope />
              <p>leweyehuyirsaw@gmail.com</p>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <p>+251988322475</p>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <p>Ethiopia</p>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/Leweyehu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/leweyehu-yirsaw-9040b8b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={sendMessage}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success-msg">Message sent successfully!</p>
          )}

          {status === "error" && (
            <p className="error-msg">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
