import { personalInfo, stats } from '../data/portfolioData';
import type { Stat } from '../types';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Abhishek<br />
            <span className="accent">Anand.</span>
          </h1>

          <p className="hero-tagline">
            <strong>Frontend Developer</strong> crafting enterprise-grade web &amp; mobile
            experiences. Specializing in <strong>React</strong>,{' '}
            <strong>React Native</strong> &amp; <strong>TypeScript</strong> — with a passion
            for real-time systems and scalable UI architecture.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              View My Work
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((s: Stat) => (
              <div key={s.label} className="stat">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
