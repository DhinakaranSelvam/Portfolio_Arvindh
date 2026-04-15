import { useEffect, useRef, useState } from 'react';
import './Achievements.css';

const Achievements = () => {
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

  const achievements = [
    {
      icon: '🏆',
      title: 'National 1st',
      description: 'NASA Astronomy Olympiad (2015)',
      color: '#FFD700',
    },
    {
      icon: '🥈',
      title: 'National 2nd',
      description: 'Maars Spelling Bee',
      color: '#C0C0C0',
    },
    {
      icon: '👑',
      title: 'Chairperson',
      description: 'Student Council (2019 – 2020)',
      color: '#FF6B6B',
    },
    {
      icon: '🏅',
      title: 'Winner',
      description: 'Business Quiz by Christ University',
      color: '#4ECDC4',
    },
    {
      icon: '🏐',
      title: 'Captain',
      description: 'Inter-house Volleyball Team (Runner-up)',
      color: '#95E1D3',
    },
  ];

  return (
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Achievements</h2>
          <div className="section-subtitle">Awards & Recognition</div>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`achievement-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className="achievement-icon-wrapper"
                style={{ backgroundColor: `${achievement.color}20` }}
              >
                <span className="achievement-icon">{achievement.icon}</span>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
