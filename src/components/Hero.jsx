import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-content-wrapper">
        <div className="hero-label fade-in-up" style={{ animationDelay: '0.2s' }}>
          FULL STACK DEVELOPER
        </div>
        <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.4s' }}>
          GOKUL S
        </h1>
        <p className="hero-description fade-in-up" style={{ animationDelay: '0.6s' }}>
          I design and develop secure, scalable, and high-performance web applications. 
          Specializing in full-stack development, workflow automation, and emerging technologies.
        </p>
        <div className="hero-cta-group fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            className="btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button 
            variant="outline"
            className="btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        <button 
          className="scroll-indicator"
          onClick={() => scrollToSection('expertise')}
          aria-label="Scroll to content"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;