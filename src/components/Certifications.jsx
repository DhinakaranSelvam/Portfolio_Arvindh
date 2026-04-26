import { useEffect, useRef, useState } from 'react';
import './Certifications.css';

const Certifications = () => {
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

  const certifications = [
    { name: 'Business Mastery Certification', status: 'Completed', icon: '🎯', provider: 'IITM Pravartak' },
    { name: 'ICMAI', status: 'Pursuing', icon: '📊' },
    { name: 'US CPA', status: 'Pursuing', icon: '📜' },
    { name: 'Audit and Due Diligence', status: 'Completed', icon: '🔍', provider: 'NASBA' },
    { name: 'Business Ethics', status: 'Completed', icon: '⚖️', provider: 'NASBA' },
    { name: 'Capital Markets', status: 'Completed', icon: '📈', provider: 'NASBA' },
    { name: 'E Filing', status: 'Completed', icon: '📝', provider: 'Nergy 360 and ICMAI' },
    { name: 'SAP', status: 'Completed', icon: '💻', provider: 'Nergy 360' },
    { name: 'MS Office Intermediate Program', status: 'Completed', icon: '💼', provider: 'Microsoft (Word, Excel, PowerPoint)' },
    { name: 'Cambridge University Press Soft Skills', status: 'Completed', icon: '🗣️', provider: 'Cambridge University Press' },
    { name: 'Diploma in Computer Animation', status: 'Completed', icon: '🎨', provider: 'CSC' },
    { name: 'Diploma in Aero Modelling', status: 'Completed', icon: '✈️', provider: 'TAAL, Hosur' },
  ];

  return (
    <section id="certifications" className="certifications-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Certifications</h2>
          <div className="section-subtitle">Professional Development</div>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`certification-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="certification-icon">{cert.icon}</div>
              <h3 className="certification-name">{cert.name}</h3>
              {cert.provider && (
                <p className="certification-provider">{cert.provider}</p>
              )}
              <span className={`certification-status ${cert.status === 'Pursuing' ? 'pursuing' : 'completed'}`}>
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
