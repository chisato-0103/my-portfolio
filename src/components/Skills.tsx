interface Skill {
  name: string;
  level: number;
  color: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "C", level: 90, color: "#00599C" },
    { name: "C++", level: 85, color: "#f34b7d" },
    { name: "Python", level: 80, color: "#3776ab" },
    { name: "Java", level: 75, color: "#ED8B00" },
    { name: "JavaScript", level: 85, color: "#F7DF1E" },
    { name: "HTML/CSS", level: 90, color: "#e34c26" },
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
