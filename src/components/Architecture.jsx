import React, { useState } from 'react';
import { Workflow, Cpu, ShieldCheck, Layers, Copy, Check, Terminal } from 'lucide-react';
import { mockArchitectureSnippets } from '../data/mock';

const iconMap = {
  'json-engine': Workflow,
  'bullmq-worker': Cpu,
  'okta-iam': ShieldCheck,
  'camunda-orchestration': Layers,
};

const Architecture = () => {
  const [activeTabId, setActiveTabId] = useState(mockArchitectureSnippets[0].id);
  const [copied, setCopied] = useState(false);

  let activeSnippet = mockArchitectureSnippets[0];
  for (let i = 0; i < mockArchitectureSnippets.length; i++) {
    if (mockArchitectureSnippets[i].id === activeTabId) {
      activeSnippet = mockArchitectureSnippets[i];
      break;
    }
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pre-build tab elements
  const tabButtons = [];
  for (let i = 0; i < mockArchitectureSnippets.length; i++) {
    const item = mockArchitectureSnippets[i];
    const IconComponent = iconMap[item.id] || Workflow;
    const isActive = item.id === activeTabId;

    tabButtons.push(
      <button
        key={item.id}
        onClick={() => setActiveTabId(item.id)}
        className={`arch-tab-btn ${isActive ? 'active' : ''}`}
      >
        <div className="arch-tab-icon-wrap">
          <IconComponent size={22} />
        </div>
        <div>
          <h3 className="arch-tab-title">{item.title}</h3>
          <p className="arch-tab-subtitle">{item.subtitle}</p>
          <span className="arch-tab-metric-pill">{item.metric}</span>
        </div>
      </button>
    );
  }

  // Pre-build highlight elements
  const highlightItems = [];
  if (activeSnippet.highlights) {
    for (let i = 0; i < activeSnippet.highlights.length; i++) {
      highlightItems.push(
        <li key={i}>{activeSnippet.highlights[i]}</li>
      );
    }
  }

  // Pre-build tag elements
  const tagPills = [];
  if (activeSnippet.tags) {
    for (let i = 0; i < activeSnippet.tags.length; i++) {
      tagPills.push(
        <span key={i} className="arch-tag">
          {activeSnippet.tags[i]}
        </span>
      );
    }
  }

  return (
    <section id="architecture" className="section-wrapper architecture-section">
      <div className="section-container">
        <div>
          <div className="section-header-pill">
            <Terminal size={14} />
            <span>Architecture & Systems</span>
          </div>
          <h2 className="section-title">Production Engineering Highlights</h2>
          <p className="section-subtitle">
            A deep dive into declarative state machines, asynchronous job workers,
            enterprise identity orchestration, and process automation engineered for production.
          </p>
        </div>

        <div className="architecture-layout">
          {/* Left Column: Tab Selector */}
          <div className="architecture-tabs-column">
            {tabButtons}
          </div>

          {/* Right Column: Code & Architecture Showcase Window */}
          <div className="code-preview-window">
            <div className="code-window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="window-filename">{activeSnippet.fileName}</span>
              <button
                className="window-copy-btn"
                onClick={handleCopyCode}
                title="Copy code snippet"
              >
                {copied ? (
                  <>
                    <Check size={14} color="#d9fb06" />
                    <span style={{ color: '#d9fb06' }}>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="code-content-box">
              <pre>
                <code>{activeSnippet.code}</code>
              </pre>
            </div>

            <div className="code-window-footer">
              <ul className="arch-highlights-list">
                {highlightItems}
              </ul>

              <div className="arch-tags-row">
                {tagPills}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
