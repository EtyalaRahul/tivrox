import React from 'react';
import './Features.css';
import { Layers, CheckCircle2, Server, Globe2, Briefcase, Zap } from 'lucide-react';

const Features = () => {
  const standardFeatures = [
    "Order & inquiry management systems",
    "Compelling brand identity that sticks",
    "Customer trust infrastructure"
  ];
  
  const advancedFeatures = [
    "Full e-commerce with secure checkout",
    "Payment gateway integration (Razorpay, Stripe, etc.)",
    "Custom feature development for your specific workflow",
    "Third-party API integrations",
    "Scalable cloud-ready architecture"
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header center animate-on-scroll">
          <h2 className="section-title">What We <span className="gradient-text">Build For You</span></h2>
          <p className="section-subtitle">
            From basic business setups to enterprise-grade cloud systems.
          </p>
        </div>

        <div className="features-grid grid-2">
          {/* Standard Builds Box */}
          <div className="feature-card glass animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="icon-wrapper">
              <Briefcase size={28} color="var(--primary-glow)"/>
            </div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "10px"}}>Essential Growth</h3>
            <p style={{ marginBottom: "20px" }}>Perfect for getting started online and establishing trust.</p>
            <ul style={{ listStyle: "none", display: "grid", gap: "10px" }}>
              {standardFeatures.map((feat, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                   <CheckCircle2 size={18} color="var(--primary-glow)" />
                   <span style={{ color: "var(--text-muted)" }}>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="card-hover-effect"></div>
          </div>

          {/* Advanced Builds Box */}
          <div className="feature-card glass animate-on-scroll" style={{ transitionDelay: '0.2s', border: "1px solid var(--primary-glow)" }}>
             <div className="icon-wrapper" style={{ background: "rgba(99, 102, 241, 0.2)"}}>
              <Server size={28} color="var(--primary-glow)"/>
            </div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "5px"}}>Advanced & Custom Systems</h3>
            <div className="price-tag" style={{ color: "var(--primary-glow)", fontWeight: "bold", marginBottom: "15px", display: "flex", alignItems: "center", gap: "5px"}}>
              <Zap size={18} /> Starting ₹25,000+
            </div>
            <p style={{ marginBottom: "20px" }}>Enterprise-grade builds for businesses scaling fast.</p>
            <ul style={{ listStyle: "none", display: "grid", gap: "10px" }}>
              {advancedFeatures.map((feat, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "start" }}>
                   <CheckCircle2 size={18} color="var(--primary-glow)" style={{ marginTop: "3px", flexShrink: 0 }} />
                   <span style={{ color: "var(--text-muted)" }}>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="card-hover-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
