import React, { useState } from "react";
import { Mail, Linkedin, Github, ArrowUp, Copy, Check, Send, Sparkles, MessageSquare, Terminal } from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("gokulstsk@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="footer-wrapper">
      <div className="section-container">
        {/* Liquid Glass macOS Window Island */}
        <div className="macos-liquid-island">
          {/* macOS Window Titlebar */}
          <div className="macos-island-titlebar">
            <div className="macos-traffic-lights">
              <span className="macos-dot macos-dot-close" title="Close"></span>
              <span className="macos-dot macos-dot-minimize" title="Minimize"></span>
              <span className="macos-dot macos-dot-zoom" title="Zoom"></span>
            </div>

            <div className="macos-island-title">
              <Terminal size={13} className="macos-title-icon" />
              <span>connect.app — Reach Out & Network</span>
            </div>

            <div className="macos-island-status">
              <span className="macos-pulse-mini"></span>
              <span>Network: Active</span>
            </div>
          </div>

          {/* Island Body (Split Grid) */}
          <div className="macos-island-body">
            {/* Left: Message & Contact Triggers */}
            <div className="macos-island-intro">
              <div className="macos-status-pill">
                <div className="status-dot-pulse"></div>
                <span>Available for Full-Time Roles & Collaborations</span>
              </div>

              <h2 className="macos-island-heading">
                Let’s build scalable systems <span className="macos-heading-accent">together.</span>
              </h2>

              <p className="macos-island-desc">I am actively open to discussing full-time software engineering roles, high-throughput web platforms, and workflow automation opportunities. Feel free to reach out directly.</p>

              {/* Quick Contact Action Pills */}
              <div className="macos-contact-actions">
                <a href="mailto:gokulstsk@gmail.com" className="macos-btn-primary">
                  <Send size={16} />
                  <span>Send Message</span>
                </a>

                <button className="macos-btn-glass" onClick={copyEmail} title="Copy Email to Clipboard">
                  {copied ? (
                    <>
                      <Check size={16} color="#d9fb06" />
                      <span style={{ color: "var(--accent-primary)" }}> copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="macos-response-chip">
                <Sparkles size={13} color="var(--accent-cyan)" />
                <span>Typical response time: within 24 hours</span>
              </div>
            </div>

            {/* Right: macOS Liquid Glass Dock Tiles */}
            <div className="macos-island-dock">
              <a href="https://www.linkedin.com/in/gokulstsk/" target="_blank" rel="noopener noreferrer" className="macos-dock-tile">
                <div className="macos-dock-tile-icon macos-icon-linkedin">
                  <Linkedin size={22} />
                </div>
                <div className="macos-dock-tile-info">
                  <div className="macos-dock-tile-title">LinkedIn</div>
                  <div className="macos-dock-tile-sub">Professional Network · in/gokulstsk</div>
                </div>
                <span className="macos-dock-tile-arrow">↗</span>
              </a>

              <a href="https://github.com/gokulstsk" target="_blank" rel="noopener noreferrer" className="macos-dock-tile">
                <div className="macos-dock-tile-icon macos-icon-github">
                  <Github size={22} />
                </div>
                <div className="macos-dock-tile-info">
                  <div className="macos-dock-tile-title">GitHub</div>
                  <div className="macos-dock-tile-sub">Code Repositories · @gokulstsk</div>
                </div>
                <span className="macos-dock-tile-arrow">↗</span>
              </a>

              <a href="mailto:gokulstsk@gmail.com" className="macos-dock-tile">
                <div className="macos-dock-tile-icon macos-icon-mail">
                  <Mail size={22} />
                </div>
                <div className="macos-dock-tile-info">
                  <div className="macos-dock-tile-title">Direct Mail</div>
                  <div className="macos-dock-tile-sub">Inbox · gokulstsk@gmail.com</div>
                </div>
                <span className="macos-dock-tile-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: macOS Glass Capsule */}
        <div className="macos-footer-bar">
          <div className="macos-footer-brand">
            <span className="macos-brand-dot"></span>
            <span>© {new Date().getFullYear()} Gokul S · Engineered with React 19 & Webpack 5</span>
          </div>

          <button className="macos-back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
