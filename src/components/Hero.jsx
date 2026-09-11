import React, { useState } from "react";
import { ArrowRight, Copy, Check, Terminal, Folder, GitBranch } from "lucide-react";
import { mockImpactStats } from "../data/mock";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("gokulstsk@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const metricCards = [];
  for (let i = 0; i < mockImpactStats.length; i++) {
    const stat = mockImpactStats[i];
    metricCards.push(
      <div key={i} className="macos-metric-widget">
        <div className="macos-metric-value">{stat.value}</div>
        <div className="macos-metric-label">{stat.label}</div>
        <div className="macos-metric-desc">{stat.description}</div>
      </div>,
    );
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-aura-1"></div>
      <div className="hero-aura-2"></div>

      <div className="hero-content-wrapper">
        {/* macOS Studio Window Frame */}
        <div className="macos-window-frame">
          {/* macOS Title Bar */}
          <div className="macos-titlebar">
            <div className="macos-traffic-lights">
              <span className="macos-dot macos-dot-close" title="Close"></span>
              <span className="macos-dot macos-dot-minimize" title="Minimize"></span>
              <span className="macos-dot macos-dot-zoom" title="Zoom"></span>
            </div>

            <div className="macos-titlebar-title">
              <Folder size={13} className="macos-title-icon" />
              <span>gokul-s — zsh — 80×24</span>
            </div>

            <div className="macos-titlebar-meta">
              <GitBranch size={13} />
              <span>git:(main)</span>
            </div>
          </div>

          {/* macOS Window Content (Split Grid) */}
          <div className="macos-window-body">
            {/* Left: Bio & Quick Actions */}
            <div className="macos-intro-column">
              <div className="macos-status-pill">
                <div className="status-dot-pulse"></div>
                <span>Available for Software Engineer / Full Stack Roles</span>
              </div>

              <h1 className="macos-hero-title">
                <span className="macos-title-gradient">GOKUL</span> <span className="macos-title-accent">S</span>
              </h1>

              <div className="macos-role-badge-row">
                <span className="macos-role-pill">Full Stack Engineer</span>
                <span className="macos-role-sub">· Systems & BPM</span>
              </div>

              <p className="macos-hero-description">I design and engineer secure, scalable, and high-performance web applications. Specializing in end-to-end full-stack systems, declarative JSON case engines, fault-tolerant asynchronous queues, and enterprise process automation.</p>

              <div className="macos-cta-toolbar">
                <button className="macos-btn-primary" onClick={() => scrollToSection("architecture")}>
                  <Terminal size={17} />
                  <span>Explore Architecture</span>
                  <ArrowRight size={15} />
                </button>

                <button className="macos-btn-glass" onClick={() => scrollToSection("projects")}>
                  <span>View Projects</span>
                </button>

                <button className="macos-btn-icon" onClick={copyEmail} title="Copy Email Address">
                  {copied ? (
                    <>
                      <Check size={16} color="#d9fb06" />
                      <span className="macos-copy-label">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span className="macos-copy-label">Copy Mail</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Interactive Terminal Inspector Pane */}
            <div className="macos-terminal-column">
              <div className="macos-terminal-view">
                <div className="terminal-line">
                  <span className="term-prompt">➜</span> <span className="term-path">~/portfolio</span> <span className="term-branch">git:(main)</span> <span className="term-command">whoami</span>
                </div>
                <div className="term-output term-highlight">Gokul S — Full Stack & Workflow Systems Engineer</div>

                <div className="terminal-line" style={{ marginTop: "14px" }}>
                  <span className="term-prompt">➜</span> <span className="term-path">~/portfolio</span> <span className="term-branch">git:(main)</span> <span className="term-command">cat system_profile.json</span>
                </div>
                <div className="term-code-block">
                  <span className="term-bracket">&#123;</span>
                  <br />
                  &nbsp;&nbsp;<span className="term-key">"role"</span>: <span className="term-string">"Software Developer 2"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="term-key">"stack"</span>: <span className="term-bracket">[</span>
                  <span className="term-string">"React 19"</span>, <span className="term-string">"Node.js"</span>, <span className="term-string">"Mysql"</span>, <span className="term-string">"BullMQ"</span>,<span className="term-bracket">]</span>,
                  <br />
                  &nbsp;&nbsp;<span className="term-key">"workflow"</span>: <span className="term-string">"Camunda BPM & JSON Case Engine"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="term-key">"uptime"</span>: <span className="term-number">99.9</span>,
                  <br />
                  &nbsp;&nbsp;<span className="term-key">"status"</span>: <span className="term-green">"● Open to Opportunities"</span>
                  <br />
                  <span className="term-bracket">&#125;</span>
                </div>

                <div className="terminal-line" style={{ marginTop: "14px" }}>
                  <span className="term-prompt">➜</span> <span className="term-path">~/portfolio</span> <span className="term-branch">git:(main)</span> <span className="term-cursor">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* macOS Style Metrics Widgets */}
        <div className="macos-metrics-bar">{metricCards}</div>
      </div>
    </section>
  );
};

export default Hero;
