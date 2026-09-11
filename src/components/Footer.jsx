import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <h2 className="footer-title">LET'S WORK TOGETHER</h2>
            <p className="footer-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            {/* <div className="footer-email">
              <Mail size={20} />
              <a href="mailto:gokulstsk@gmail.com">Mail</a>
            </div> */}
          </div>
          
          <div className="footer-links">
            <h3 className="footer-links-title">CONNECT</h3>
            <div className="social-links">
              <Button variant="ghost" size="sm" className="social-link" onClick={() => window.open("https://www.linkedin.com/in/gokulstsk/") }>
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </Button>
              <Button variant="ghost" size="sm" className="social-link" onClick={() => window.open("https://github.com/gokulstsk") }>
                <Github size={20} />
                <span>GitHub</span>
              </Button>
              <Button variant="ghost" size="sm" className="social-link" onClick ={() => window.open("mailto:gokulstsk@gmail.com")}>
                <Mail size={20} />
                <span>Mail</span>
              </Button>
              {/* <Button variant="ghost" size="sm" className="social-link">
                <Twitter size={20} />
                <span>Twitter</span>
              </Button> */}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            A portfolio designed & built by Gokul S
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;