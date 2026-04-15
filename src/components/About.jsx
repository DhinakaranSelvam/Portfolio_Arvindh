import { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
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

  const highlights = [
    { icon: '💼', text: '1+ years in Banking Operations' },
    { icon: '🎯', text: 'Risk Management & Internal Controls' },
    { icon: '📊', text: '15% Manual Error Reduction' },
    { icon: '🎓', text: 'Pursuing US CPA & CMA' },
    { icon: '🌍', text: 'Based in Bengaluru, India' },
    { icon: '🏆', text: 'National Award Winner' },
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <div className="section-subtitle">Professional Summary</div>
        </div>

        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <p className="about-description">
              Detail-oriented <strong>Cash Operations Analyst</strong> with experience in the banking sector 
              and specialized training in <strong>risk management</strong> and <strong>internal controls</strong>. 
              Proven track record in streamlining processes, ensuring compliance, and mitigating operational risks.
            </p>
            <p className="about-description">
              Currently pursuing the <strong>U.S. CPA</strong> to deepen expertise in accounting and assurance. 
              Seeking a dynamic role within the <strong>audit and assurance domain</strong>.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="highlight-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="highlight-icon">{item.icon}</span>
                <span className="highlight-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
