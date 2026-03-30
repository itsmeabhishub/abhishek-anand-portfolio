# Abhishek Anand — Portfolio (Vite + React + TypeScript)

A modern, dark-themed developer portfolio built with **Vite + React 18 + TypeScript**.

## Tech Stack

| Layer      | Choice                        |
|------------|-------------------------------|
| Build tool | **Vite 5** (replaces CRA)     |
| Framework  | React 18                      |
| Language   | TypeScript (strict mode)      |
| Styling    | Plain CSS (per-component)     |
| Fonts      | Syne · DM Sans · JetBrains Mono |

## CRA vs Vite — why Vite?

| | CRA | **Vite** |
|---|---|---|
| Dev server start | ~10s | **< 1s** |
| Hot reload | Slow | **Instant** |
| Build speed | Slow (Webpack) | **Fast (Rollup)** |
| Maintained | ❌ Deprecated | ✅ Active |

## Getting Started

```bash
# 1. Unzip and enter folder
unzip abhishek-portfolio-vite.zip
cd abhishek-portfolio-vite

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:3000  (opens automatically)
```

## Other commands

```bash
npm run build       # Production build → dist/
npm run preview     # Preview production build locally
npm run type-check  # TypeScript check only (no build)
```

## Deploy to Vercel (free, recommended)

```bash
npm run build
# Drag the dist/ folder to vercel.com
# OR install Vercel CLI:
npm i -g vercel
vercel --prod
```

## Customise your content

Everything lives in one typed file:

```
src/data/portfolioData.ts   ← edit name, email, skills, projects, experience
src/types/index.ts          ← TypeScript interfaces (only change if you add new fields)
```

## Project Structure

```
abhishek-portfolio-vite/
├── index.html                  ← Root HTML (Vite standard — at root, not public/)
├── vite.config.ts              ← Vite config
├── tsconfig.json               ← TypeScript config
├── tsconfig.node.json          ← TS config for vite.config.ts
├── package.json
└── src/
    ├── main.tsx                ← Entry point (Vite uses main.tsx not index.tsx)
    ├── App.tsx
    ├── vite-env.d.ts           ← Vite type reference
    ├── types/
    │   └── index.ts            ← All TypeScript interfaces
    ├── data/
    │   └── portfolioData.ts    ← ✏️  All your content here
    ├── styles/
    │   └── global.css
    └── components/
        ├── useScrollReveal.ts
        ├── Cursor.tsx / .css
        ├── Navbar.tsx / .css
        ├── Hero.tsx   / .css
        ├── About.tsx  / .css
        ├── Skills.tsx / .css
        ├── Experience.tsx / .css
        ├── Projects.tsx   / .css
        ├── Contact.tsx    / .css
        └── Footer.tsx     / .css
```
