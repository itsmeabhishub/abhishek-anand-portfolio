import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#about',      label: 'about' },
  { href: '#skills',     label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#projects',   label: 'projects' },
  { href: '#contact',    label: 'contact' },
];

const Navbar: React.FC = () => {
  const [scrolled,  setScrolled]  = useState<boolean>(false);
  const [menuOpen,  setMenuOpen]  = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        AA<span>.</span>
      </a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={closeMenu}>{label}</a>
          </li>
        ))}
        <li className="nav-cta-mobile">
          <a href={`mailto:${personalInfo.email}`} className="nav-cta" onClick={closeMenu}>
            hire_me()
          </a>
        </li>
      </ul>

      <a href={`mailto:${personalInfo.email}`} className="nav-cta nav-cta-desktop">
        hire_me()
      </a>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
};

export default Navbar;
