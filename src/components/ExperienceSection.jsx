import React from 'react'
import portfolioData from '../data'; // Assuming data.js exports the portfolio data

function ExperienceSection() {
  
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.position}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <div className="experience-duration">{exp.duration}</div>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection
