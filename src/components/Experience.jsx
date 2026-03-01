import "./Experience.css";

const experiences = [
  {
    title: "Full Stack Developer | Education Management System",
    achievements: [
      "Architected a comprehensive education ecosystem from scratch using PHP, MySQL, and JavaScript.",
      "Engineered high-performance front-end interfaces utilizing modern CSS Grid and Flexbox for cross-device fluidity.",
      "Integrated complex modules for enrollment, automated certificate generation, and real-time email notifications.",
      "Secured system integrity through advanced role-based access control (RBAC) and encrypted authentication.",
      "Developed analytical dashboards providing real-time insights into revenue metrics and student progress.",
    ],
  },
  {
    title: "Laravel Developer | Clinic Management System",
    achievements: [
      "Built a multi-tenant healthcare platform using Laravel, optimizing medical record retrieval speeds.",
      "Deployed modular EMR features, including appointment scheduling and digital prescription management.",
      "Designed intuitive Blade-based dashboards ensuring seamless UX for healthcare administrators.",
    ],
  },
  {
    title: "CMS Specialist | WordPress & Joomla Development",
    achievements: [
      "Developed and customized enterprise-level websites using WordPress and Joomla, focusing on scalability and SEO.",
      "Engineered custom themes and plugins to extend CMS functionality beyond standard out-of-the-box features.",
      "Optimized site performance and security protocols, ensuring high-speed delivery and protection against vulnerabilities.",
    ],
  },
  {
    title: "Frontend Development | Responsive Web Applications",
    achievements: [
      "Developed high-traffic SPAs using React.js and ES6+, prioritizing modular component architecture.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2>Professional Experience</h2>
        <div className="header-bar"></div>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-card">
            <div className="card-header">
              <span className="badge">Project Milestone</span>
              <h4>{exp.title}</h4>
            </div>

            <ul className="achievements">
              {exp.achievements.map((achievement, index) => (
                <li key={index}>
                  <span className="bullet-icon">✓</span>
                  <p>{achievement}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
