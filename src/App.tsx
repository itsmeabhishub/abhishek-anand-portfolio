import { useEffect } from 'react';
import './styles/global.css';

import Cursor              from './components/Cursor';
import Navbar              from './components/Navbar';
import Hero                from './components/Hero';
import About               from './components/About';
import Skills              from './components/Skills';
import Experience          from './components/Experience';
import Projects            from './components/Projects';
import Contact             from './components/Contact';
import Footer              from './components/Footer';
import { useScrollReveal } from './components/useScrollReveal';

const App: React.FC = () => {
  useScrollReveal();

  useEffect((): void => {
    document.querySelectorAll<HTMLElement>('a, button').forEach((el) => {
      el.style.cursor = 'none';
    });
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
