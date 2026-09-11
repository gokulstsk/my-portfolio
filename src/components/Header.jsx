import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'architecture', 'expertise', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Overview', id: 'hero' },
    { label: 'Architecture', id: 'architecture' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  // Pre-build desktop and mobile navigation items
  const desktopNavItems = [];
  const mobileNavItems = [];

  for (let i = 0; i < navItems.length; i++) {
    const item = navItems[i];
    const isActive = activeSection === item.id;

    desktopNavItems.push(
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className={`nav-item ${isActive ? 'active' : ''}`}
      >
        {item.label}
      </button>
    );

    mobileNavItems.push(
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className="mobile-nav-item"
      >
        <span>{item.label}</span>
        <ArrowUpRight size={16} />
      </button>
    );
  }

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <button
            className="logo-link"
            onClick={() => scrollToSection('hero')}
            aria-label="Back to top"
          >
            <div className="logo-badge">GS</div>
            <span className="logo-name">Gokul S</span>
          </button>

          <nav className="desktop-nav">
            {desktopNavItems}
          </nav>

          <div className="header-actions">
            <a
              href="https://github.com/gokulstsk"
              target="_blank"
              rel="noopener noreferrer"
              className="header-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {mobileNavItems}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;