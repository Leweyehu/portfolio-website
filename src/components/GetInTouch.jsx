import React from "react";
import "./GetInTouch.css"; // We'll create this CSS file next

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="container">
        {/* Left Column: Contact Info */}
        <div className="info-column">
          <h2>Get In Touch</h2>
          <p className="description">
            I'm always open to discussing new projects,
            <br />
            creative ideas, or opportunities to be part of your
            <br />
            vision. Feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">agteshome143@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <span className="detail-value">+251936946564</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">Ethiopia (Remote)</span>
            </div>
          </div>

          <div className="social-connect">
            <h3>Connect with me</h3>
            {/* Add your social icons/links here */}
            <div className="social-icons">
              {/* Example placeholder for icons - replace with your own */}
              <span className="social-icon-placeholder">[LinkedIn]</span>
              <span className="social-icon-placeholder">[GitHub]</span>
              <span className="social-icon-placeholder">[Twitter]</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="form-column">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 Agegehu Teshome. All rights reserved.
          <br />
          Addis Ababa, Ethiopia
        </p>
      </footer>
    </section>
  );
};

export default GetInTouch;
