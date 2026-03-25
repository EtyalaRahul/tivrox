import React from 'react';
import './About.css';
import { Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container grid-2">
        <div className="about-content">
          <h2 className="section-title animate-on-scroll">Who <span className="gradient-text">We Are</span></h2>
          <h3 className="animate-on-scroll" style={{ marginBottom: "20px", color: "var(--primary-glow)", fontSize: "1.3rem"}}>A Student-Led Digital Agency</h3>
          <p className="about-desc animate-on-scroll">
            TIVROX was built by students who understand the real challenges small business owners face when trying to grow online. We have been there, we have learned the hard way, and we built a team that delivers.
          </p>
          <p className="about-desc animate-on-scroll" style={{ marginTop: "-20px" }}>
            Our mission is simple: give every business — no matter how small — a digital presence powerful enough to compete with the big players.
          </p>
          
          <div className="about-bullets animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="bullet-item">
              <Users size={24} color="var(--primary-glow)"/> <span>Student-Led Innovation</span>
            </div>
            <div className="bullet-item">
              <Target size={24} color="var(--primary-glow)"/> <span>Powerful Digital Presence</span>
            </div>
            <div className="bullet-item">
              <TrendingUp size={24} color="var(--primary-glow)"/> <span>Real Growth Strategy</span>
            </div>
          </div>
        </div>

        <div className="about-visual glass animate-on-scroll">
          <div className="abstract-sphere"></div>
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
