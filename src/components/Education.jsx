import { useEffect, useRef, useState } from 'react';
import './Education.css';

const Education = () => {
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

  const education = [
    {
      degree: 'Certified Public Accounting (CPA)',
      institution: 'Pursuing',
      icon: '📜',
      status: 'In Progress',
    },
    {
      degree: 'Cost and Management Accounting (CMA)',
      institution: 'Cleared Foundation',
      icon: '📊',
      status: '72 Percentile',
    },
    {
      degree: 'Bachelor of Commerce (B. Com)',
      institution: 'Jain Deemed to be University, Bengaluru',
      icon: '🎓',
      status: '86% (2020 – 23)',
    },
    {
      degree: 'Higher Secondary Education (CBSE)',
      institution: 'Completed',
      icon: '📚',
      status: '88.7% (2018 – 2020)',
    },
  ];

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Education</h2>
          <div className="section-subtitle">Academic Background</div>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`education-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="education-icon">{edu.icon}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <span className="education-status">{edu.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
