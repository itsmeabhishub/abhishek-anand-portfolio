import { experience } from '../data/portfolioData';
import type { DeviceType, Contribution } from '../types';
import './Experience.css';

const Experience: React.FC = () => {
  const {
    company,
    role,
    period,
    location,
    summary,
    deviceTypes,
    contributions,
    techStack,
  } = experience;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-label reveal">// experience</span>
        <h2 className="section-title reveal">
          Where I've <span>worked</span>.
        </h2>

        <div className="exp-layout">
          {/* ── Sticky Sidebar ── */}
          <div className="exp-sidebar reveal">
            <div className="exp-company">{company}</div>
            <div className="exp-period">{period}</div>
            <div className="exp-role-badge">{role}</div>
            <p className="exp-location">{location}</p>
            <p className="exp-summary">{summary}</p>
          </div>

          {/* ── Main Content ── */}
          <div className="exp-main">

            {/* Device Types */}
            <div className="exp-block reveal">
              <div className="exp-block-title">// Device Types Handled</div>
              <div className="device-cards">
                {deviceTypes.map((d: DeviceType) => (
                  <div key={d.name} className="device-card">
                    <div className="device-icon">{d.icon}</div>
                    <div className="device-name">{d.name}</div>
                    <div className="device-desc">{d.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Contributions */}
            <div className="exp-block reveal reveal-delay-1">
              <div className="exp-block-title">// Key Contributions</div>
              {contributions.map((c: Contribution) => (
                <div key={c.title} className="exp-item">
                  <div className="exp-item-dot" />
                  <div className="exp-item-text">
                    <strong>{c.title}</strong> — {c.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="exp-block reveal reveal-delay-2">
              <div className="exp-block-title">// Technologies Used</div>
              <div className="tech-pills">
                {techStack.map((t: string) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
