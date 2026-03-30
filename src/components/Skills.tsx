import { useEffect, useRef } from 'react';
import { skillCategories } from '../data/portfolioData';
import type { Skill, SkillCategory } from '../types';
import './Skills.css';

// ── SkillBar ────────────────────────────────────────────────
interface SkillBarProps extends Skill {}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, label }) => {
  const barRef      = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Walk up to the .skill-category wrapper to observe it
    if (barRef.current) {
      categoryRef.current = barRef.current.closest<HTMLDivElement>('.skill-category');
    }
    if (!categoryRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && barRef.current) {
          setTimeout(() => {
            if (barRef.current) barRef.current.style.width = `${level}%`;
          }, 200);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(categoryRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-item">
      <div className="skill-name-row">
        <span className="skill-dot" />
        <span>{name}</span>
      </div>
      <div className="skill-bar-wrap">
        <div ref={barRef} className="skill-bar-fill" style={{ width: 0 }} />
      </div>
      <span className="skill-level">{label}</span>
    </div>
  );
};

// ── Skills section ──────────────────────────────────────────
const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label reveal">// tech stack</span>
        <h2 className="section-title reveal">
          What I <span>build</span> with.
        </h2>

        <div className="skills-grid">
          {skillCategories.map((cat: SkillCategory, i: number) => (
            <div key={cat.label} className={`skill-category reveal reveal-delay-${i + 1}`}>
              <div className="skill-cat-label">{cat.label}</div>
              {cat.skills.map((skill: Skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
