import type {
  PersonalInfo,
  Stat,
  AboutCard,
  SkillCategory,
  Experience,
  Project,
} from '../types';

// ============================================================
// Personal Info
// ============================================================
export const personalInfo: PersonalInfo = {
  name: 'Abhishek Anand',
  title: 'Frontend Developer',
  tagline: 'React · React Native · TypeScript · Enterprise UI',
  email: 'abhishek.anand8544@gmail.com',
  phone: '+91 6205211415',
  location: 'Kolkata, WB, India',
  linkedin: 'https://www.linkedin.com/in/abhishek-anand-b59236172',
  github: 'https://github.com/itsmeabhishub',
  available: true,
};

// ============================================================
// Hero Stats
// ============================================================
export const stats: Stat[] = [
  { num: '3+', label: 'Years Experience' },
  { num: '5+', label: 'Enterprise Apps' },
  { num: '10+', label: 'Tech Stack' },
  { num: '∞',  label: 'Lines of Code' },
];

// ============================================================
// About Section
// ============================================================
export const aboutCards: AboutCard[] = [
  {
    icon: '🚀',
    title: 'Enterprise Scale',
    desc: 'Built mission-critical IoT dashboards at Qualcomm AWARE serving real-time device data across admin and user applications.',
  },
  {
    icon: '📱',
    title: 'Cross-Platform',
    desc: 'React Native apps with consistent UX on Android & iOS, built alongside web apps from a shared design system.',
  },
  {
    icon: '🎨',
    title: 'Design-Driven',
    desc: 'Figma-first workflow: wireframes → high-fidelity → pixel-perfect implementation with accessibility in mind.',
  },
];

export const aboutTags: string[] = [
  'Kolkata, India',
  "B.E. ECE '22",
  'Open to Remote',
  'Agile / Scrum',
  'UI/UX Enthusiast',
];

// ============================================================
// Skills
// ============================================================
export const skillCategories: SkillCategory[] = [
  {
    label: 'Frameworks & Languages',
    skills: [
      { name: 'React.js',       level: 95, label: 'Expert' },
      { name: 'React Native',   level: 92, label: 'Expert' },
      { name: 'TypeScript',     level: 88, label: 'Advanced' },
      { name: 'Next.js',        level: 80, label: 'Advanced' },
      { name: 'JavaScript ES6+',level: 93, label: 'Expert' },
    ],
  },
  {
    label: 'UI & Design Tools',
    skills: [
      { name: 'Figma',         level: 85, label: 'Advanced' },
      { name: 'Ant Design',    level: 90, label: 'Expert' },
      { name: 'Material UI',   level: 82, label: 'Advanced' },
      { name: 'CSS3 / HTML5',  level: 92, label: 'Expert' },
      { name: 'Bootstrap',     level: 80, label: 'Advanced' },
    ],
  },
  {
    label: 'State, APIs & Tools',
    skills: [
      { name: 'Redux Toolkit', level: 88, label: 'Advanced' },
      { name: 'REST APIs',     level: 90, label: 'Expert' },
      { name: 'WebSockets',    level: 80, label: 'Advanced' },
      { name: 'Git / GitHub',  level: 88, label: 'Advanced' },
      { name: 'Node.js / MySQL',level: 72, label: 'Proficient' },
    ],
  },
];

// ============================================================
// Experience
// ============================================================
export const experience: Experience = {
  company: 'Cognizant',
  role: 'Front-End Developer',
  period: 'Dec 2022 — Present',
  location: 'Kolkata, WB, India',
  project: 'Qualcomm AWARE — IoT Device Management Platform',
  summary:
    'Working on an enterprise-level IoT platform designed to manage and monitor intelligent device types through web-based dashboards with real-time data and complex conditional UI.',
  deviceTypes: [
    {
      icon: '📦',
      name: 'Trackers',
      desc: 'Real-time parcel/asset location tracking with sensor data visualization on interactive maps.',
    },
    {
      icon: '📐',
      name: 'Thin Trackers',
      desc: 'Tilt sensing — displaying package orientation data and transit angle history.',
    },
    {
      icon: '🏷️',
      name: 'Labels',
      desc: 'Event detection: box open, light exposure, drops — with real-time alert reporting.',
    },
  ],
  contributions: [
    {
      title: 'Conditional UI Rendering',
      desc: 'Built logic to display device-specific sensors, data fields, and controls based on device configuration and state.',
    },
    {
      title: 'WebSocket Integration',
      desc: 'Implemented real-time device data streams, live alerts, and error states on dashboards without page reload.',
    },
    {
      title: 'Device Lifecycle Management',
      desc: 'Handled pre-generated devices, custom device creation flows, and user-defined sensor configurations.',
    },
    {
      title: 'Dual Dashboard Architecture',
      desc: 'Developed Admin dashboard (device config & management) and User dashboard (tracking & visualization) with role-based access.',
    },
    {
      title: 'Reusable Component Library',
      desc: 'Maintained a shared repository of UI components consumed across Admin, User App, and other applications.',
    },
    {
      title: 'Performance Optimization',
      desc: 'Applied lazy loading, memoization, and code splitting — reducing initial load time significantly.',
    },
  ],
  bullets: [
    'Developed scalable reusable UI components using React.js, TypeScript, Ant Design, and Next.js.',
    'Built core UI modules and complete page layouts independently, reducing cross-team dependencies.',
    'Integrated REST APIs with Redux Toolkit for seamless state management and data flow.',
    'Collaborated with designers via Figma to deliver pixel-perfect UI aligned with design systems.',
    'Maintained clean, version-controlled code using Git and GitHub, supporting CI/CD workflows.',
    'Resolved high-priority UI defects, improving application stability and responsiveness.',
  ],
  techStack: ['React.js', 'TypeScript', 'Ant Design', 'WebSockets', 'REST APIs', 'Redux Toolkit', 'Git & GitHub', 'Next.js'],
};

// ============================================================
// Projects
// ============================================================
export const projects: Project[] = [
  {
    num: '01',
    featured: true,
    title: 'Construction Company Website',
    desc: 'A modern, responsive marketing website for an MVA construction company built with React, TypeScript, and Ant Design. Features a clean layout, optimized performance, and a fully reusable component architecture deployed on Vercel.',
    stack: ['React.js', 'TypeScript', 'Ant Design', 'Vercel'],
    liveUrl: 'https://mva-construction-umber.vercel.app',
    highlights: [
      'Fully responsive across mobile, tablet & desktop',
      'Reusable component library for consistency',
      'Performance-optimized with clean, semantic markup',
      'Modern UI with thoughtful typography and spacing',
      'Deployed on Vercel with CI/CD integration',
    ],
  },
  {
    num: '02',
    featured: false,
    title: 'Healthcare Management Portal',
    desc: 'An API-driven portal handling doctor availability, insurance workflows, and appointment management. Built with a focus on accessibility, performance, and real-world clinical usability.',
    stack: ['React.js', 'REST APIs', 'Redux Toolkit', 'Material UI'],
    liveUrl: null,
    highlights: [
      'Doctor availability & scheduling logic',
      'Insurance workflow integration',
      'Accessible, WCAG-conscious design',
    ],
  },
  {
    num: '03',
    featured: false,
    title: 'E-Commerce Admin Dashboard',
    desc: 'Full-stack admin panel with product, category, user and order management. JWT authentication, role-based access control, and reactive forms with server-side validation.',
    stack: ['Angular', 'Node.js', 'MySQL', 'Angular Material', 'JWT'],
    liveUrl: null,
    highlights: [
      'JWT authentication & role-based access',
      'RESTful CRUD with server-side validation',
      'Reactive forms with Angular Material UI',
    ],
  },
];

export const focusAreas: string[] = [
  'Building scalable enterprise UI systems',
  'Handling complex conditional UI logic',
  'Real-time data visualization',
  'Writing clean, maintainable, reusable code',
];
