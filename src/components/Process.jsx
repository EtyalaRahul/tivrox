import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Understanding",
      desc: "We learn your business, audience, and goals. This is where we ask all the right questions so you never have to say “that’s not what I meant” later."
    },
    {
      num: "02",
      title: "Design & Development",
      desc: "We create a design mockup for your approval first, then build. You know exactly what you’re getting before we go live."
    },
    {
      num: "03",
      title: "Review & Feedback",
      desc: "You review the full project. We incorporate your feedback within the agreed revision rounds before finalizing."
    }
  ];

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header center animate-on-scroll">
          <h2 className="section-title">How We <span className="gradient-text">Work</span></h2>
          <p className="section-subtitle">
            No guessing games. No chasing updates. A clear, structured process that delivers exactly what was agreed — on time, every time.
          </p>
        </div>

        <div className="process-grid grid-3">
          {steps.map((step, i) => (
            <div key={i} className="process-card glass animate-on-scroll" style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className="step-num gradient-text">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
