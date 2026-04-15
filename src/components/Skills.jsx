import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: 'Technical Skills',
      icon: '💻',
      skills: [
        { name: 'MS Excel (Advanced)', level: 95 },
        { name: 'MS PowerPoint', level: 90 },
        { name: 'DBMS', level: 80 },
      ],
    },
    {
      category: 'Professional Skills',
      icon: '🎯',
      skills: [
        { name: 'Risk Management', level: 90 },
        { name: 'Internal Controls', level: 85 },
        { name: 'Regulatory Compliance', level: 85 },
        { name: 'Audit Readiness', level: 80 },
      ],
    },
    {
      category: 'Soft Skills',
      icon: '🤝',
      skills: [
        { name: 'Communication', level: 95 },
        { name: 'Leadership', level: 90 },
        { name: 'Problem Solving', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Skills</h2>
          <div className="section-subtitle">My Expertise</div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`skill-category ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${catIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
