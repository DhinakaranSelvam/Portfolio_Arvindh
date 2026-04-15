import { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
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

  const experiences = [
    {
      title: 'Cash Operations Analyst',
      company: 'Deutsche India Private Limited',
      period: 'Aug 2023 – Oct 2024',
      icon: '🏦',
      responsibilities: [
        'Worked across Germany Static Data, USD Investigations, and ACH Investigations teams',
        'Drove risk control enhancements in collaboration with ERT and implemented preventive measures for process risks',
        'Reduced the manual error for the fiscal year by 15%',
        'Enhanced experience in regulatory compliance, risk analysis, and process audits',
      ],
    },
    {
      title: 'Operations Intern',
      company: 'Jain International Residential School',
      period: '2021 – 2022',
      icon: '🏫',
      responsibilities: [
        'Managed the admissions database using advanced MS Excel techniques',
        'Optimized data handling systems, contributing to streamlined admission operations',
        'Enhanced proficiency in MS Excel through managing large admission datasets',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-subtitle">My Work Journey</div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-header">
                <span className="experience-icon">{exp.icon}</span>
                <div className="experience-title-group">
                  <h3 className="experience-role">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>

              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="responsibility-item">
                    <span className="bullet-point"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
