// ============================================================
// Shared TypeScript types for the portfolio
// ============================================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  available: boolean;
}

export interface Stat {
  num: string;
  label: string;
}

export interface AboutCard {
  icon: string;
  title: string;
  desc: string;
}

export interface Skill {
  name: string;
  level: number;   // 0–100
  label: string;   // e.g. "Expert" | "Advanced" | "Proficient"
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export interface DeviceType {
  icon: string;
  name: string;
  desc: string;
}

export interface Contribution {
  title: string;
  desc: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  summary: string;
  deviceTypes: DeviceType[];
  contributions: Contribution[];
  bullets: string[];
  techStack: string[];
}

export interface Project {
  num: string;
  featured: boolean;
  title: string;
  desc: string;
  stack: string[];
  liveUrl: string | null;
  highlights: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}
