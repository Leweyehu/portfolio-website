import { Github, Linkedin, Mail } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} Leweyehu Yirsaw. All rights reserved.
        </p>
        <p>Desie, Ethiopia</p>

        <div className="footer-socials">
          <a
            href="https://github.com/Leweyehu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/leweyehu-yirsaw-9040b8b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Github size={20} />
          </a>

          <a href="leweyehuyirsaw55@gmail.com" className="social-icon">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
