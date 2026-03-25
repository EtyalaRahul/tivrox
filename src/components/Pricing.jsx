import React from 'react';
import './Pricing.css';
import { PenTool, Video, FileImage, Layers } from 'lucide-react';

const Pricing = () => {
  const brandingServices = [
    { title: "Logo Design", price: "Starting ₹2,000", desc: "A custom logo that captures your brand's personality and sticks in people's minds.", icon: <PenTool size={30} /> },
    { title: "Poster Design", price: "Starting ₹1,000", desc: "High-impact marketing visuals for promotions, announcements, and campaigns.", icon: <FileImage size={30} /> },
    { title: "Reel Editing", price: "Starting ₹1,500", desc: "Professionally edited short-form videos that capture attention in the first second.", icon: <Video size={30} /> },
    { title: "Brand Identity Package", price: "Starting ₹7,000", desc: "Logo + color palette + typography + brand guidelines. Everything to look consistent and premium.", icon: <Layers size={30} /> },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        
        {/* Branding & Creative Services */}
        <div className="pricing-block">
          <div className="section-header center animate-on-scroll">
            <h2 className="section-title">Branding & <span className="gradient-text">Creative Services</span></h2>
            <p className="section-subtitle">
              Your logo is what people remember. Your poster stops the scroll. Your reels bring the crowd. We do it all — so your brand speaks before you even say a word.
            </p>
          </div>
          <div className="grid-2 branding-grid">
            {brandingServices.map((svc, i) => (
              <div key={i} className="branding-card glass animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s`}}>
                <div className="card-top">
                   <div className="b-icon">{svc.icon}</div>
                   <div className="b-titles">
                      <h3>{svc.title}</h3>
                      <p className="b-price gradient-text">{svc.price}</p>
                   </div>
                </div>
                <p className="b-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Plans */}
        <div className="pricing-block mt-100">
          <div className="section-header center animate-on-scroll">
            <h2 className="section-title">Keep Your Website <span className="gradient-text">Running Perfectly</span></h2>
            <p className="section-subtitle">
              A website needs updates, security patches, and someone to fix things when they break. Our maintenance plans have you covered.
            </p>
          </div>
          <div className="grid-2 maintenance-grid">
            <div className="maintenance-card glass animate-on-scroll">
              <h3>Basic Maintenance</h3>
              <div className="m-price">₹1,499 <span>/ month</span></div>
              <ul>
                <li>✔ Regular updates and security patches</li>
                <li>✔ Minor content changes on request</li>
                <li>✔ Routine data backups</li>
                <li>✔ Technical support for issues</li>
              </ul>
            </div>
            <div className="maintenance-card glass premium-maintenance animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="popular-badge">Most Popular</div>
              <h3>Growth Maintenance</h3>
              <div className="m-price">₹3,999 <span>/ month</span></div>
              <ul>
                <li>✔ Everything in Basic, plus:</li>
                <li>✔ Performance monitoring and reports</li>
                <li>✔ Priority support — faster response</li>
                <li>✔ Strategic improvement suggestions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Collaboration */}
        <div className="pricing-block mt-100 collaboration-block glass animate-on-scroll">
          <div className="collab-content">
            <h2 style={{ fontSize: "2rem", marginBottom: "15px"}}>Brand <span className="gradient-text">Collaboration Program</span></h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "30px"}}>
              We believe in growing together. Feature our work in your content and unlock real collaboration benefits based on your audience size and engagement quality.
            </p>
            <div className="table-responsive">
              <table className="collab-table">
                <thead>
                  <tr>
                    <th>Followers</th>
                    <th>Collaboration Benefit</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>2K – 5K</td><td>Up to 5% benefit</td><td>Based on engagement quality</td></tr>
                  <tr><td>5K – 10K</td><td>Up to 8% benefit</td><td>Based on engagement quality</td></tr>
                  <tr><td>10K – 25K</td><td>Up to 12% benefit</td><td>Based on engagement quality</td></tr>
                  <tr><td>25K+</td><td className="gradient-text">Custom Partnership</td><td>Contact us directly</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
