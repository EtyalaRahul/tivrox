import React from 'react';
import './Projects.css';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const dummyProjects = [
    {
      title: "NexGen E-Commerce",
      category: "Full Stack",
      desc: "A high-performance marketplace platform serving 10M+ users with sub-second latency.",
      imageColor: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)",
      delay: "0.1s"
    },
    {
      title: "OmniResponse AI",
      category: "Generative AI",
      desc: "Custom LLM-powered customer support agent reducing ticket resolution times by 80%.",
      imageColor: "linear-gradient(135deg, #1fa2ff 0%, #12d8fa 50%, #a6ffcb 100%)",
      delay: "0.2s"
    },
    {
      title: "SecureFinance App",
      category: "App Development",
      desc: "Bank-grade encrypted mobile application offering real-time financial tracking to 1M+ downloads.",
      imageColor: "linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)",
      delay: "0.3s"
    },
    {
      title: "Aura Brand Identity",
      category: "Branding",
      desc: "Complete visual redesign, typography system, and marketing assets for a leading web3 startup.",
      imageColor: "linear-gradient(135deg, #F3904F 0%, #3B4371 100%)",
      delay: "0.4s"
    },
    {
      title: "CloudSync API",
      category: "Cloud Architecture",
      desc: "Horizontally scalable microservices handling 50TB of daily payload routing across edge networks.",
      imageColor: "linear-gradient(135deg, #5C258D 0%, #4389A2 100%)",
      delay: "0.5s"
    },
    {
      title: "Vitality Med Portal",
      category: "Full Stack",
      desc: "HIPAA-compliant patient management system featuring integrated tele-health consultation tools.",
      imageColor: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      delay: "0.6s"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header center animate-on-scroll">
          <h2 className="section-title">Our <span className="gradient-text">Recent Projects</span></h2>
          <p className="section-subtitle">
            Take a look at how we transform complex challenges into elegant digital solutions for our clients.
          </p>
        </div>

        <div className="projects-marquee-container">
          <div className="projects-marquee">
            <div className="projects-track">
              {dummyProjects.map((proj, i) => (
                <div className="project-card glass animate-on-scroll" key={`main-${i}`} style={{ transitionDelay: proj.delay }}>
                  <div className="project-image" style={{ background: proj.imageColor }}>
                    <div className="img-overlay">
                      <span className="view-btn"><ExternalLink size={20} /> View Setup</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="project-category">{proj.category}</span>
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicated track for seamless infinite scrolling */}
            <div className="projects-track" aria-hidden="true">
              {dummyProjects.map((proj, i) => (
                <div className="project-card glass animate-on-scroll" key={`clone-${i}`} style={{ transitionDelay: proj.delay }}>
                  <div className="project-image" style={{ background: proj.imageColor }}>
                    <div className="img-overlay">
                      <span className="view-btn"><ExternalLink size={20} /> View Setup</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="project-category">{proj.category}</span>
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
