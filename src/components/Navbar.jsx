import { useContext, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <h2 className="logo">
        <span className="logo-text">LY</span>
      </h2>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experience
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#certifications" onClick={() => setMenuOpen(false)}>
          Certifications
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contacts
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
      </div>

      <div className="nav-right">
        <ThemeToggle />
      </div>
    </nav>
  );
}
