import portfolioData from "../data";

function SkillSection() {
  
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, icon: 'fa-laptop-code' },
    { title: 'Backend', skills: skills.backend, icon: 'fa-server' },
    { title: 'Databases', skills: skills.databases, icon: 'fa-database' },
    { title: 'Tools & Others', skills: [...skills.tools, ...skills.other], icon: 'fa-tools' }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <i className={`fas ${category.icon}`}></i> {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection
