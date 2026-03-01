import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  // Only darkMode is extracted because ThemeToggle handles the switching logic.
  const { darkMode } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <h2 className="logo">
        <span className="logo-text">LY</span>
      </h2>

      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#skills">Skills</a>
      </div>

      <div className="nav-right">
        {/* ThemeToggle component uses toggleTheme internally */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
