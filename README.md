<div align="center">

# 🚀 Abhishek Anand — Developer Portfolio

### Frontend Developer · React · React Native · TypeScript · Enterprise UI

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br />

**[🌐 Live Demo](https://abhishek-anand-portfolio.vercel.app)** &nbsp;·&nbsp;
**[📧 Contact Me](mailto:abhishekanand864@gmail.com)** &nbsp;·&nbsp;
**[💼 LinkedIn](https://www.linkedin.com/in/abhishek-anand-b59236172)**

<br />

> A modern, dark-themed developer portfolio with animated UI, scroll reveal effects,
> real-time skill bars, and a fully typed React + TypeScript codebase.

</div>

---

## ✨ Features

- 🎨 &nbsp;**Dark editorial design** — emerald green accents, Syne + JetBrains Mono fonts
- 🖱️ &nbsp;**Custom animated cursor** with smooth lag ring effect
- 📜 &nbsp;**Scroll reveal animations** on every section using IntersectionObserver
- 📊 &nbsp;**Animated skill bars** triggered on scroll into view
- 📱 &nbsp;**Fully responsive** — mobile hamburger nav, fluid layouts
- ⚡ &nbsp;**Vite 5** — dev server starts in under 1 second
- 🔒 &nbsp;**TypeScript strict mode** — fully typed components, props, and data
- 🗂️ &nbsp;**One data file** — update all content from `src/data/portfolioData.ts`

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| ⚡ Build Tool | Vite 5 |
| ⚛️ Framework | React 18 |
| 🔷 Language | TypeScript 5 (strict) |
| 🎨 Styling | Plain CSS (per-component) |
| 🔤 Fonts | Syne · DM Sans · JetBrains Mono |
| 🚀 Deployment | Vercel |

---

## 📁 Project Structure

```
abhishek-portfolio-vite/
│
├── index.html                 ← Root HTML (Vite — lives at root, not public/)
├── vite.config.ts             ← Vite configuration
├── tsconfig.json              ← TypeScript config
├── tsconfig.node.json         ← TS config for vite.config.ts
├── package.json
│
└── src/
    ├── main.tsx               ← App entry point
    ├── App.tsx                ← Root component
    ├── vite-env.d.ts          ← Vite type declarations
    │
    ├── types/
    │   └── index.ts           ← All shared TypeScript interfaces
    │
    ├── data/
    │   └── portfolioData.ts   ← ✏️ Edit ALL your content here
    │
    ├── styles/
    │   └── global.css         ← CSS variables + base styles
    │
    └── components/
        ├── useScrollReveal.ts ← IntersectionObserver scroll hook
        ├── Cursor.tsx         ← Animated custom cursor
        ├── Navbar.tsx         ← Fixed nav + mobile menu
        ├── Hero.tsx           ← Landing hero section
        ├── About.tsx          ← About me + cards
        ├── Skills.tsx         ← Animated skill bars
        ├── Experience.tsx     ← Work experience timeline
        ├── Projects.tsx       ← Project cards grid
        ├── Contact.tsx        ← Contact links + CTA
        └── Footer.tsx         ← Footer
```

---

## 🚀 Getting Started

### 1 · Clone the repo

```bash
git clone https://github.com/itsmeabhishub/abhishek-anand-portfolio.git
cd abhishek-anand-portfolio
```

### 2 · Install dependencies

```bash
npm install
```

### 3 · Start the dev server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — starts in under 1 second ⚡

---

## 📜 Available Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build → dist/
npm run preview      # Preview the production build locally
npm run type-check   # Run TypeScript checks without building
```

---

## ✏️ Customising Your Content

All personal content lives in **one single typed file**:

```
src/data/portfolioData.ts
```

Open it and update:

```ts
export const personalInfo = {
  name: "Your Name",
  email: "your@email.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  // ...
};
```

That's it — the entire site updates automatically. No need to touch any component files.

---

## 🌍 Deploy to Vercel

**Option A — Drag and Drop**
```bash
npm run build     # creates dist/ folder
# Drag dist/ to vercel.com/new
```

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel --prod
```

**Option C — Connect GitHub repo**
1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo → auto-deploys on every push ✅

---

## ⚡ Vite vs CRA

| | Create React App | **Vite (used here)** |
|---|---|---|
| Dev server start | ~10 seconds | **< 1 second** |
| Hot Module Reload | Slow | **Instant** |
| Build speed | Slow (Webpack) | **Fast (Rollup)** |
| Actively maintained | ❌ Deprecated | ✅ Yes |
| Config file | Hidden | **Transparent** (`vite.config.ts`) |

---

## 📬 Contact

<div align="center">

| Platform | Link |
|---|---|
| 📧 Email | [abhishekanand864@gmail.com](mailto:abhishekanand8544@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/abhishek-anand-b59236172](https://www.linkedin.com/in/abhishek-anand-b59236172) |
| 🐙 GitHub | [github.com/itsmeabhishub](https://github.com/itsmeabhishub) |

</div>

---

<div align="center">

Made with ❤️ by **Abhishek Anand**

⭐ Star this repo if you found it useful!

</div>
