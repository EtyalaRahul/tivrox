import React from 'react';
import './Footer.css';
import { MessageCircle, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top grid-2">
          <div className="footer-brand animate-on-scroll">
            <h2>TIV<span className="gradient-text">ROX</span></h2>
            <p className="footer-desc">
              Building the next generation of scalable, intelligent software solutions. Innovating the digital landscape one pixel at a time.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-wrapper animate-on-scroll">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Services</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>hello@tivrox.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Drive,<br/>Silicon Valley, CA</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Tivrox Inc. All rights reserved.</p>
            <p style={{ marginTop: '8px', fontSize: '0.85rem' }}><b>
              Designed and developed by rahuletyala
              </b>
              </p>
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
