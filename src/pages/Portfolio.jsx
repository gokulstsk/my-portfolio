import React from 'react';
import Header from '../components/Header';
import ScrollProgress from '../components/ScrollProgress';
import Hero from '../components/Hero';
import Architecture from '../components/Architecture';
import Expertise from '../components/Expertise';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <ScrollProgress />
      <Header />
      <Hero />
      <Architecture />
      <Expertise />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;