import { motion } from "framer-motion";
import "./Hero.css";
import profilePic from "../assets/leweyehu.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>Hello, I'm</h1>
          <h1 className="name">Leweyehu Yirsaw</h1>
          <h2>Full Stack Web Developer</h2>

          <p>
            Specialized in Front-End and Back-End Development. Skilled in
            Python, Django, Java, C++, JavaScript, React, PHP, and Laravel.
          </p>

          {/* Optional Professional Buttons */}
          <div className="hero-buttons">
            <a href="#about" className="hero-btn outline">
              About Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-image"
        >
          <img src={profilePic} alt="Leweyehu Yirsaw" />
        </motion.div>
      </div>
    </section>
  );
}
