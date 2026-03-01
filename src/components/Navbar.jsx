import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
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
      <nav>
        {/* <div className="logo">My Portfolio</div> */}

        <div className="nav-right">
          <ThemeToggle />
        </div>
      </nav>

      {/* <button onClick={toggleTheme} className="theme-btn">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button> */}
    </nav>
  );
}
