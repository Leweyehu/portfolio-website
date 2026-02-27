import "./Experience.css";
const experiences = [
  {
    title: "Full Stack Developer | Education Management System",
    achievements: [
      "Designed and developed a comprehensive continuing education management system from scratch using PHP, MySQL, JavaScript, and CSS",
      "Built responsive front-end interfaces with modern CSS (Flexbox/Grid) and vanilla JavaScript for enhanced user experience across all devices",
      "Implemented core features including student enrollment, course registration, payment tracking, certificate generation, and automated email notifications",
      "Developed secure user authentication and role-based access control for administrators, instructors, and students",
      "Created dynamic reporting dashboards displaying real-time analytics on student progress, course completion rates, and revenue metrics",
    ],
  },
  {
    title: "Laravel Developer | Clinic Management System",
    achievements: [
      "Developed a complete clinic management platform using PHP (Laravel) and MySQL, serving multiple healthcare facilities",
      "Developed modular features including patient registration, appointment scheduling, electronic medical records (EMR), prescription management, and billing system",
      "Designed responsive dashboard interfaces using Blade templates, Bootstrap, and custom CSS for seamless use on desktop and tablet devices",
    ],
  },
  {
    title: "Frontend Development | Responsive Web Applications",
    achievements: [
      "Developed multiple responsive websites and single-page applications using React.js, HTML5, CSS3, and modern JavaScript (ES6+)",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-card">
            {exp.year && <h3>{exp.year}</h3>}
            <h4>{exp.title}</h4>

            {(exp.company || exp.location) && (
              <p className="company">
                {exp.company}
                {exp.location && (
                  <span className="location"> — {exp.location}</span>
                )}
              </p>
            )}

            <ul className="achievements">
              {exp.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
