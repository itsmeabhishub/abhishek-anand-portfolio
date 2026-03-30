import { aboutCards, aboutTags } from '../data/portfolioData';
import type { AboutCard } from '../types';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">

          {/* ── Left: Text ── */}
          <div className="about-text reveal">
            <span className="section-label">// about me</span>
            <h2 className="section-title">
              Building the <span>web</span> of tomorrow.
            </h2>
            <p>
              I'm a <strong>Software Developer at Cognizant</strong> with 3+ years of experience
              building scalable, enterprise-grade web and mobile applications. My work sits at the
              intersection of design and engineering — turning complex requirements into clean,
              intuitive interfaces.
            </p>
            <p>
              I've led frontend development on the <strong>Qualcomm AWARE</strong> IoT Device
              Management Platform, handling real-time WebSocket data, conditional UI for diverse
              device types, and multi-role dashboards for admin and end users.
            </p>
            <p>
              My approach: clean architecture, reusable components, and an obsession with{' '}
              <strong>performance and user experience</strong>. I care deeply about the details —
              typography, spacing, interaction states — the things that make software feel crafted.
            </p>
            <div className="about-tags">
              {aboutTags.map((tag: string) => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* ── Right: Cards ── */}
          <div className="about-right">
            {aboutCards.map((card: AboutCard, i: number) => (
              <div key={card.title} className={`about-card reveal reveal-delay-${i + 1}`}>
                <div className="about-card-icon">{card.icon}</div>
                <div className="about-card-title">{card.title}</div>
                <div className="about-card-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
