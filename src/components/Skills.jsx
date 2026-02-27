import { motion } from "framer-motion";
import "./Skills.css";

const skillsData = [
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", level: 90 },
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "C++", level: 90 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 82 },
      { name: "Bootstrap CSS", level: 90 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning Basics", level: 85 },
      { name: "AI Development", level: 70 },
      { name: "Data Processing", level: 85 },
      { name: "Deep Learning", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>{category.title}</h3>

            {category.skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
