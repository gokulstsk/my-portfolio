export const mockImpactStats = [
  {
    value: "2+ Years",
    label: "Production Engineering",
    description: "Designing scalable enterprise applications & BPM workflows",
  },
  {
    value: "70%",
    label: "Config Reduction",
    description: "Architected JSON-driven Case Engine cutting onboarding time",
  },
  {
    value: "40%",
    label: "Cycle Time Accelerated",
    description: "Automated manual task handoffs with Camunda BPMN",
  },
  {
    value: "99.9%",
    label: "Production Uptime",
    description: "Robust CI/CD pipelines & zero-downtime Azure DevOps releases",
  },
];

export const mockArchitectureSnippets = [
  {
    id: "json-engine",
    title: "Declarative JSON Case Engine",
    subtitle: "Dynamic business process orchestration",
    metric: "70% Config Reduction",
    impact: "Replaced 1,200+ lines of brittle nested conditionals with a declarative state graph, slashing client onboarding time from 3 days to under 2 hours.",
    language: "json",
    fileName: "case-engine-schema.json",
    code: `{
  "workflowId": "case-onboarding-v2",
  "version": "2.4.0",
  "initialState": "KYC_VERIFICATION",
  "states": {
    "KYC_VERIFICATION": {
      "on": {
        "DOCUMENTS_VERIFIED": {
          "target": "RISK_ASSESSMENT",
          "guards": ["hasValidId", "isMfaEnrolled"],
          "actions": ["dispatchAuditLog", "notifyStakeholders"]
        },
        "VERIFICATION_FAILED": {
          "target": "MANUAL_COMPLIANCE_REVIEW",
          "actions": ["routeToUnderwriterQueue"]
        }
      }
    },
    "RISK_ASSESSMENT": {
      "autoEvaluate": {
        "condition": "riskScore < 30",
        "pass": "AUTO_APPROVAL",
        "fail": "SENIOR_OFFICER_REVIEW"
      }
    }
  }
}`,
    highlights: [
      "Declarative state-machine configuration",
      "Dynamic guard assertions & audit triggers",
      "Zero redeployment needed for business rule updates",
    ],
    tags: ["JSON Engine", "State Machines", "React.js", "Node.js"],
  },
  {
    id: "bullmq-worker",
    title: "Resilient Distributed Job Worker",
    subtitle: "Fault-tolerant Redis queue pipeline",
    metric: "0 Dropped Jobs in Prod",
    impact: "Engineered backpressure management and automated exponential retries, isolating poisoned payloads in DLQs while maintaining worker concurrency at 100 req/s.",
    language: "javascript",
    fileName: "case-worker.service.js",
    code: `import { Worker } from 'bullmq';
import { redisClient } from '../config/redis.js';
import { processCaseTransition } from './workflow.engine.js';

export const caseWorker = new Worker('case-processing-queue', async (job) => {
  const { caseId, idempotencyKey, step } = job.data;
  
  // 1. Atomic Idempotency Check via Redis SETNX
  const acquired = await redisClient.set(\`lock:\${idempotencyKey}\`, 'RUNNING', 'NX', 'EX', 180);
  if (!acquired) {
    return { status: 'SKIPPED_DUPLICATE', caseId };
  }

  // 2. Execute Business Logic with Error Boundary
  const result = await processCaseTransition(caseId, step);
  await redisClient.set(\`lock:\${idempotencyKey}\`, 'COMPLETED', 'EX', 86400);
  
  return { status: 'SUCCESS', result };
}, {
  connection: redisClient,
  concurrency: 12,
  settings: {
    backoff: { type: 'exponential', delay: 2000 },
    maxRetries: 5,
  }
});`,
    highlights: [
      "Atomic idempotency locking via Redis SETNX",
      "Automated exponential backoff retry policy",
      "Dead-letter queue isolation for bad payloads",
    ],
    tags: ["BullMQ", "Redis", "Idempotency", "Node.js"],
  },
  {
    id: "okta-iam",
    title: "Okta IAM & RBAC Security Layer",
    subtitle: "Zero-trust token verification middleware",
    metric: "SOC2 Compliance Ready",
    impact: "Centralized role-based access control with granular claims inspection, token caching, and structured immutable security auditing.",
    language: "javascript",
    fileName: "auth.middleware.js",
    code: `import OktaJwtVerifier from '@okta/jwt-verifier';
import { auditLogger } from '../utils/audit.js';

const oktaVerifier = new OktaJwtVerifier({
  issuer: process.env.OKTA_ISSUER_URL,
  clientId: process.env.OKTA_CLIENT_ID,
  cacheMaxAge: 60 * 60 * 1000 // 1 hour token cache
});

export const requirePermission = (requiredRole, resourceAction) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization || '';
      const match = authHeader.match(/Bearer (.+)/);
      if (!match) return res.status(401).json({ error: 'TOKEN_REQUIRED' });

      const jwt = await oktaVerifier.verifyAccessToken(match[1], 'api://default');
      const userRoles = jwt.claims.roles || [];

      if (!userRoles.includes(requiredRole) && !userRoles.includes('SYSTEM_ADMIN')) {
        await auditLogger.warn({ event: 'UNAUTHORIZED_ACCESS_ATTEMPT', uid: jwt.claims.uid, action: resourceAction });
        return res.status(403).json({ error: 'FORBIDDEN_INSUFFICIENT_PRIVILEGES' });
      }

      req.user = jwt.claims;
      next();
    } catch (err) {
      return res.status(401).json({ error: 'INVALID_OR_EXPIRED_TOKEN' });
    }
  };
};`,
    highlights: [
      "Cryptographic JWT claim validation",
      "Role inheritance & least-privilege enforcement",
      "Automatic tamper detection & audit trail",
    ],
    tags: ["Okta SSO", "JWT Auth", "RBAC", "Express.js"],
  },
  {
    id: "camunda-orchestration",
    title: "Camunda BPM Process Orchestration",
    subtitle: "Enterprise multi-party task delegation",
    metric: "40% Faster Cycle Times",
    impact: "Replaced manual spreadsheet routing with automated BPMN 2.0 service tasks, providing real-time process telemetry and SLA tracking.",
    language: "javascript",
    fileName: "camunda-worker.js",
    code: `import { Client, logger } from 'camunda-external-task-client-js';

const client = new Client({
  baseUrl: process.env.CAMUNDA_REST_ENGINE_URL,
  use: logger,
  asyncResponseTimeout: 10000
});

client.subscribe('underwriter-assignment', async ({ task, taskService }) => {
  const caseId = task.variables.get('caseId');
  const riskGrade = task.variables.get('riskGrade');
  
  // Dynamic load-balanced assignment based on risk tier
  const assignedAgent = await resolveBestAvailableAgent(riskGrade);
  
  await taskService.complete(task, {
    assignedAgent: assignedAgent.email,
    delegatedAt: new Date().toISOString(),
    slaHours: riskGrade === 'HIGH' ? 4 : 24
  });
});`,
    highlights: [
      "BPMN 2.0 external service task subscription",
      "Dynamic load-balanced agent assignment",
      "Real-time SLA deadline propagation",
    ],
    tags: ["Camunda BPM", "BPMN 2.0", "REST APIs", "Async Orchestration"],
  },
];

export const mockExpertise = [
  {
    icon: "Code2",
    title: "Full Stack Web Development",
    tagline: "Scalable UIs & High-Throughput APIs",
    description:
      "I design and develop secure, scalable, and high-performance web applications using modern full-stack technologies. I have hands-on experience building case management systems, implementing business workflows, and delivering production-ready applications with a strong focus on maintainability and security.",
    techStack: ["React.js", "JavaScript (ES6+)", "Node.js", "Express.js", "REST APIs", "Git", "MySQL"],
  },
  {
    icon: "Workflow",
    title: "Workflow Automation & BPM",
    tagline: "Process Orchestration & State Graphs",
    description:
      "I specialize in workflow-driven application development using BPM tools. I have implemented end-to-end business process automation, task orchestration, approvals, and case lifecycle management for enterprise applications.",
    techStack: ["JSON Workflow Engine", "Camunda BPM", "BPMN 2.0", "Workflow Automation", "Process Orchestration"],
  },
  {
    icon: "Glasses",
    title: "Emerging Tech & Systems",
    tagline: "Immersive Tech & Distributed Queues",
    description:
      "I explore emerging technologies and have practical experience building AR-based and immersive applications, along with secure real-time systems, asynchronous queues, and visualization platforms.",
    techStack: ["BullMQ & Redis", "Babylon.js", "Unity / C#", "The Sandbox Studio", "AR/VR Development"],
  },
];

export const mockExperience = [
  {
    type: "work",
    title: "Software Developer 2 (Full Stack Development)",
    company: "P3Fusion Inc · Full-time",
    date: "July 2024 - Aug 2026",
    badge: "Promotion",
    techStack: ["React.js", "JSON Workflow Engine", "Camunda BPM", "Node.js", "Express.js", "Okta", "MySQL", "Azure DevOps"],
    subItems: [
      {
        title: "Software Engineer 2",
        date: "Apr 2026 - Aug 2026",
        highlight: "Architected JSON Case Engine & Core Service Optimization",
        description: [
          "Architected and developed a scalable JSON-driven Case Engine, reducing workflow configuration effort by 70%, accelerating onboarding of new business processes, and improving execution performance by 35%.",
          "Designed reusable workflow modules and optimized React.js, Node.js, and Express.js services, reducing code duplication by 50% and improving API throughput by 25%.",
          "Implemented optimized state management, workflow orchestration, and legacy engine migration, contributing to 99.9% application availability and zero-downtime Azure DevOps CI/CD deployments.",
        ],
        techStack: ["JSON Case Engine", "React.js", "Node.js", "Express.js", "Azure DevOps"],
      },
      {
        title: "Software Engineer 1",
        date: "Jul 2024 - Mar 2026",
        highlight: "Automated Case Approvals & Integrated Enterprise IAM",
        description: [
          "Engineered a workflow-driven case management platform using React.js & Camunda BPM, automating 100% of manual approval tasks, reducing case processing time by 40%.",
          "Designed secure RESTful APIs with Node.js/Express.js, improving response times by 30% via query optimization and middleware refactoring. Integrated Okta SSO, RBAC, and MFA, enhancing authentication security and reducing unauthorized access incidents by 25%. Implemented audit logging and case history tracking, increasing compliance and traceability for enterprise operations.",
          "Contributed to Azure DevOps CI/CD pipelines, enabling bi-weekly deployments with zero critical downtime.",
        ],
        techStack: ["React.js", "Camunda BPM", "Node.js", "Okta SSO", "MySQL"],
      },
    ],
  },
  {
    type: "work",
    title: "Project Intern",
    company: "Aviram Studio · Internship",
    date: "Feb 2024 - Jun 2024",
    description: [
      "Built 'Banshee', a real-time multiplayer shooting game with player matchmaking, inventory management, weapon systems, and low-latency gameplay synchronization.",
      "Built a 2D multiplayer fruit-cutting game with secure authentication, real-time interactions, and session handling.",
    ],
    techStack: ["Unity", "C#", "The Sandbox Studio", "Game Logic", "Multiplayer", "Authentication"],
  },
  {
    type: "education",
    title: "B.E. Computer Science and Engineering",
    company: "Bannari Amman Institute of Technology · Sathyamangalam, Erode",
    date: "Sept 2020 - Apr 2024",
    badge: "Guest Lecturer",
    description: [
      "Developed expertise in software engineering principles through academic coursework and hands-on full-stack development projects.",
      "Mentored junior students as a Guest Lecturer by conducting technical sessions and night classes on programming, web development, and problem-solving.",
      "Applied Agile practices and SDLC concepts while working on collaborative projects, strengthening skills in planning, development, testing, and deployment.",
    ],
    techStack: ["SDLC", "Agile Methodology", "Data Structures", "System Design"],
  },
];

export const mockProjects = [
  {
    id: "es6-docs",
    category: "fullstack",
    title: "ES6 Web Docs & Interactive Live Emulator",
    highlight: "Live in-browser code evaluation sandbox",
    description:
      "An MDN-grade, interactive documentation platform and live code emulator for modern ECMAScript (ES6 through ES2024+). Features dark/light themes, keyboard shortcut navigation, topic search, and zero-latency in-browser evaluation with realistic sample datasets.",
    techStack: ["React 19", "JavaScript (ES6+)", "Vite", "Web Workers", "Tailwind CSS"],
    githubUrl: "https://github.com/gokulstsk/JS-ES6-Docs",
    liveUrl: "https://js-es6-docs.vercel.app",
    stats: "Live Production · Zero-Latency Sandbox",
  },
  {
    id: "resilient-job-system",
    category: "backend",
    title: "Resilient Job Processing System",
    highlight: "Distributed queue with atomic idempotency locks",
    description:
      "A backend application built with Node.js, Express.js, BullMQ, and MySQL for reliable asynchronous job processing using a queue-based architecture. Ensures fault tolerance through exponential retries, Redis SETNX idempotency to prevent duplicates, and dead-letter queue isolation for unrecoverable errors.",
    techStack: ["Node.js", "Express.js", "BullMQ", "Redis", "MySQL"],
    githubUrl: "https://github.com/gokulstsk/Resilient-Job-Processing-System",
    liveUrl: "https://github.com/gokulstsk/Resilient-Job-Processing-System",
    stats: "Dead-Letter Queues · Exponential Backoff",
  },
  {
    id: "github-analytics-saas",
    category: "fullstack",
    title: "Github Analytics SaaS Dashboard",
    highlight: "OAuth-authenticated repository analytics",
    description:
      "A full-stack SaaS analytics platform using React and Node.js with secure GitHub OAuth token-based authentication and protected REST APIs. Integrates the GitHub API to fetch and process repository velocity insights (commits, contributors, languages, PRs), with interactive Recharts visualizations.",
    techStack: ["React", "Node.js", "GitHub OAuth", "REST APIs", "Recharts"],
    githubUrl: "https://github.com/gokulstsk/GitHub-Analytics-SaaS-Dashboard",
    liveUrl: "https://github.com/gokulstsk/GitHub-Analytics-SaaS-Dashboard",
    stats: "OAuth 2.0 · Recharts Viz · Token Protection",
  },
  {
    id: "afr-recovery",
    category: "security",
    title: "AFR (All File Recovery) Forensics Tool",
    highlight: "Low-level signature carving & partition validation",
    description:
      "Digital forensics software utility engineered in Python to carve and recover deleted file signatures from HDDs, SSDs, and USB storage devices. Includes partition integrity validation and secure access control to prevent unauthorized tampering.",
    image: "https://images.unsplash.com/photo-1761497194591-9c8fb8a1fffb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxmb3JlbnNpY3MlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3MDEzNTA4N3ww&ixlib=rb-4.1.0&q=85",
    techStack: ["Python", "Digital Forensics", "File Systems", "Data Security"],
    githubUrl: "https://github.com/gokulstsk/All-File-Recover",
    liveUrl: "https://github.com/gokulstsk/All-File-Recover",
    stats: "Forensic Integrity · Multi-Drive Support",
  },
];
