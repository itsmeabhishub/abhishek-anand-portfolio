import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import './Projects.css';

// ── Arrow icon ───────────────────────────────────────────────
const ArrowIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ── Project card ─────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { num, featured, title, desc, stack, liveUrl, highlights } = project;

  return (
    <div className={`project-card${featured ? ' featured' : ''} reveal`}>
      <div className="project-left">
        <div className="proj-num">
          {num}{featured ? ' — Featured' : ''}
        </div>
        <h3 className="proj-title">{title}</h3>
        <p className="proj-desc">{desc}</p>

        <div className="proj-stack">
          {stack.map((t: string) => (
            <span key={t} className="proj-tech">{t}</span>
          ))}
        </div>

        {liveUrl !== null && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link"
          >
            View Live Site <ArrowIcon />
          </a>
        )}
      </div>

      <ul className="proj-highlights">
        {highlights.map((h: string) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

// ── Projects section ─────────────────────────────────────────
const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-label reveal">// projects</span>
        <h2 className="section-title reveal">
          Things I've <span>built</span>.
        </h2>

        <div className="projects-grid">
          {projects.map((project: Project) => (
            <ProjectCard key={project.num} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
