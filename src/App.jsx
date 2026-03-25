import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); 
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <ThemeSelector />
      
      {/* Ambient background animations */}
      <div className="ambient-bg">
        <div className="ambient-orb"></div>
        <div className="ambient-orb"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Projects />
        <Pricing />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;
