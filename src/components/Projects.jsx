import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Web Based Academic Quality management  System",
    description: "React.js | PHP | MySQL | Educational Assessment Analytics",
    features: [
      "Supports institutional academic quality assurance and evaluation processes",
      "Enables curriculum quality monitoring and academic performance tracking",
      "Provides data-driven assessment reporting for teaching and learning outcomes.",
    ],
  },
  {
    title: "Portfolio Website",
    description: "Professional Developer Portfolio",
    features: [
      "Responsive modern UI",
      "Dark/light theme support",
      "Framer motion animations",
    ],
  },

  {
    title: "WordPress website",
    description: "Custom Personal Blog and Portfolio Website with WordPress",
    features: [
      "Responsive design optimized for mobile, tablet, and desktop devices",

"Blog management system for publishing and organizing articles",
"Integrated contact form and social media connectivity"
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{p.title}</h3>

            <p className="project-desc">{p.description}</p>

            <ul className="project-features">
              {p.features.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
