export const PROJECTS = [
  {
    id: "forgesafeai",
    title: "ForgeSafeAI",
    subtitle: "Enterprise Industrial Safety Intelligence",
    techStack: ["JavaScript", "Digital Twins", "Multi-Agent AI", "Computer Vision", "Knowledge Graphs", "RAG", "Gemini AI"],
    features: [
      "Enterprise-grade platform combining Digital Twins and Multi-Agent AI.",
      "Computer Vision and RAG algorithms to predict industrial safety incidents.",
      "Knowledge Graphs and Gemini AI for advanced intelligence insights."
    ],
    github: "https://github.com/Nivritha03/ForgeSafeAI",
    liveDemo: "#",
    color: "#FFD700",
    category: "AI",
    status: "Production Ready",
    complexity: 98,
    featured: true,
    detailedContent: {
      challenges: [
        "Real-time processing of multiple high-resolution video streams with low latency.",
        "Orchestrating multi-agent systems to cross-verify safety incidents accurately.",
        "Synchronizing physical environments with digital twin models in real-time."
      ],
      solution: "Developed an enterprise-grade platform utilizing PyTorch for computer vision and LangGraph for multi-agent coordination. Integrated Gemini AI with RAG pipelines to dynamically query safety protocols, providing instantaneous and context-aware alerts across the industrial floor.",
      metrics: [
        { label: "Latency", value: "< 150ms" },
        { label: "Accuracy", value: "99.4%" },
        { label: "Throughput", value: "60 FPS" }
      ]
    }
  },
  {
    id: "signwave",
    title: "SignWave",
    subtitle: "AI-Powered Accessibility Platform",
    techStack: ["TypeScript", "NLP", "Speech Recognition", "3D Avatars", "Accessibility"],
    features: [
      "Converts audio, video, and online content into captions in real time.",
      "Generates 3D animated sign language directly from spoken input.",
      "Leverages NLP and accurate speech recognition models."
    ],
    github: "https://github.com/Nivritha03/SignWave",
    liveDemo: "#",
    color: "#F59E0B",
    category: "Accessibility",
    status: "Beta",
    complexity: 92,
    featured: false,
    detailedContent: {
      challenges: [
        "Translating spoken language nuance and grammar into accurate sign language syntax.",
        "Rendering 3D avatar animations in real-time on consumer devices.",
        "Handling diverse accents and background noise in speech recognition."
      ],
      solution: "Implemented a hybrid NLP pipeline that standardizes speech-to-text outputs and translates them into semantic sign language representations. Leveraged WebGL and Three.js to render highly optimized 3D avatars capable of real-time sign language synthesis.",
      metrics: [
        { label: "Translation Speed", value: "< 500ms" },
        { label: "Avatar Rig", value: "65 Bones" },
        { label: "Accuracy", value: "95%" }
      ]
    }
  },
  {
    id: "aetherops",
    title: "AetherOps",
    subtitle: "Autonomous Multi-Cloud AI Infrastructure",
    techStack: ["TypeScript", "AI Agents", "GPU Orchestration", "Cloud Computing"],
    features: [
      "AI-driven platform for multi-cloud GPU orchestration.",
      "Self-healing infrastructure deployments with intelligent scheduling.",
      "Scalable cloud architecture designed for high availability."
    ],
    github: "https://github.com/Nivritha03/AetherOps",
    liveDemo: "#",
    color: "#FFD700",
    category: "Cloud",
    status: "Production Ready",
    complexity: 96,
    featured: true,
    detailedContent: {
      challenges: [
        "Dynamically allocating GPU resources across AWS, GCP, and Azure to minimize costs.",
        "Ensuring zero-downtime failovers for distributed machine learning training workloads.",
        "Building intelligent scheduling agents capable of predicting workload spikes."
      ],
      solution: "Engineered an autonomous orchestration engine that uses AI agents to monitor cloud pricing and availability APIs in real-time. The system intelligently migrations workloads across clouds using containerized environments, ensuring optimal GPU utilization and reducing compute costs by up to 40%.",
      metrics: [
        { label: "Cost Reduction", value: "~40%" },
        { label: "Uptime", value: "99.99%" },
        { label: "Nodes Managed", value: "500+" }
      ]
    }
  },
  {
    id: "collab-sphere",
    title: "Collab-Sphere Digital Whiteboard",
    subtitle: "Java Full Stack Real-Time Application",
    techStack: ["TypeScript", "Java", "Spring Boot", "React", "WebSockets"],
    features: [
      "Interactive real-time digital whiteboard application.",
      "Combines a robust Java Spring Boot backend with a React frontend.",
      "Low-latency WebSocket synchronization for seamless team collaboration."
    ],
    github: "https://github.com/Nivritha03/Collab-Sphere_Digital-Whiteboard",
    liveDemo: "#",
    color: "#FFD700",
    category: "Full-Stack",
    status: "Production Ready",
    complexity: 88,
    featured: false,
    detailedContent: {
      challenges: [
        "Synchronizing canvas state across dozens of concurrent users with minimal latency.",
        "Handling network partitions and conflict resolution during simultaneous edits.",
        "Optimizing the Java backend to handle high-frequency WebSocket message broadcasting."
      ],
      solution: "Implemented a custom operational transformation (OT) algorithm on top of a Spring Boot WebSocket backend to guarantee eventual consistency. The React frontend utilizes an optimized HTML5 Canvas implementation, batching draw operations to maintain 60 FPS even with heavy real-time collaborative load.",
      metrics: [
        { label: "Concurrent Users", value: "100+" },
        { label: "Sync Latency", value: "< 50ms" },
        { label: "Message Rate", value: "5k/sec" }
      ]
    }
  },
  {
    id: "marketmind",
    title: "MarketMind",
    subtitle: "Generative AI for Sales & Marketing",
    techStack: ["TypeScript", "Generative AI", "Data Analytics"],
    features: [
      "Supports teams by generating campaigns, sales pitches, and lead insights.",
      "Enables data-driven decision-making via automated AI content.",
      "Predictive analytics for marketing campaign optimization."
    ],
    github: "https://github.com/Nivritha03/MarketMind-",
    liveDemo: "#",
    color: "#FFD700",
    category: "LLM",
    status: "Beta",
    complexity: 85,
    featured: false,
    detailedContent: {
      challenges: [
        "Generating hyper-personalized marketing copy that bypasses AI detectors.",
        "Integrating disparate CRM data streams into a unified RAG context.",
        "Ensuring low-latency response times for real-time sales team assistance."
      ],
      solution: "Built a robust RAG (Retrieval-Augmented Generation) pipeline that securely connects to enterprise CRMs (Salesforce, HubSpot). The LLM processes historical successful campaigns to generate highly targeted, brand-aligned messaging and predict the success probability of new strategies.",
      metrics: [
        { label: "Response Time", value: "< 2s" },
        { label: "Conversion Lift", value: "+22%" },
        { label: "Integrations", value: "15+" }
      ]
    }
  },
  {
    id: "rshield",
    title: "rShield-AI",
    subtitle: "AI Immune System for Reddit",
    techStack: ["TypeScript", "Machine Learning", "NLP"],
    features: [
      "Predicts escalations and detects behavioral threats in real time.",
      "Helps moderators stabilize online communities autonomously.",
      "Continuous learning and adaptation to new online threat vectors."
    ],
    github: "https://github.com/Nivritha03/rshield",
    liveDemo: "#",
    color: "#F59E0B",
    category: "AI",
    status: "Production Ready",
    complexity: 88,
    featured: false,
    detailedContent: {
      challenges: [
        "Analyzing thousands of incoming comments per minute without rate-limiting issues.",
        "Differentiating between toxic behavior and sarcasm/contextual humor.",
        "Adapting the detection model to evolving internet slang and new threat vectors."
      ],
      solution: "Deployed a highly scalable Node.js microservice architecture integrated with Reddit's API. A custom NLP model fine-tuned on community guidelines analyzes sentiment and context, autonomously flagging or quarantining escalating threads before they go viral, drastically reducing moderator workload.",
      metrics: [
        { label: "Analysis Speed", value: "10k/min" },
        { label: "False Positives", value: "< 2%" },
        { label: "Uptime", value: "99.9%" }
      ]
    }
  },
  {
    id: "prepmindai",
    title: "PrepMindAI",
    subtitle: "Multi-Agent AI Interview Prep",
    techStack: ["TypeScript", "Gemini API", "Multi-Agent Systems"],
    features: [
      "Multi-agent AI platform for resume analysis and mock interviews.",
      "Memory-based AI coaching with real-time feedback loops.",
      "Personalized learning plans based on performance analytics."
    ],
    github: "https://github.com/Nivritha03/PrepMindAI",
    liveDemo: "#",
    color: "#FFD700",
    category: "AI",
    status: "Beta",
    complexity: 90,
    featured: false,
    detailedContent: {
      challenges: [
        "Maintaining conversational state and context over long, multi-round interview sessions.",
        "Coordinating multiple specialized AI agents (e.g., technical interviewer, HR screener, feedback coach).",
        "Generating realistic, dynamic technical questions based on the candidate's resume."
      ],
      solution: "Engineered a stateful multi-agent system using LangChain and the Gemini API. The 'Orchestrator' agent parses the resume and directs the flow, while specialized agents conduct the interview and assess responses. A persistent memory layer ensures the AI remembers past interactions to build personalized improvement plans.",
      metrics: [
        { label: "Agents Configured", value: "5+" },
        { label: "Avg Session", value: "45 mins" },
        { label: "User Retention", value: "78%" }
      ]
    }
  },
  {
    id: "appgenie",
    title: "AppGenie",
    subtitle: "AI-Powered No-Code Platform",
    techStack: ["TypeScript", "Google Gemini API", "LLMs"],
    features: [
      "Transforms natural language prompts into fully functional web apps.",
      "Utilizes AI agents to generate backend workflows and UI elements.",
      "Enables rapid prototyping without writing manual boilerplate code."
    ],
    github: "https://github.com/Nivritha03/AppGenie",
    liveDemo: "#",
    color: "#F59E0B",
    category: "LLM",
    status: "In Development",
    complexity: 97,
    featured: true,
    detailedContent: {
      challenges: [
        "Ensuring generated code is syntactically correct, secure, and performant.",
        "Parsing ambiguous natural language into deterministic architectural decisions.",
        "Managing the complex state required to preview and edit generated applications in real-time."
      ],
      solution: "Developed an advanced compiler pipeline that leverages Google Gemini API to translate natural language into abstract syntax trees (AST). Specialized agents review and refine the code before a sandboxed environment securely bundles and previews the application in the browser, allowing for iterative, prompt-based refinement.",
      metrics: [
        { label: "Generation Time", value: "< 10s" },
        { label: "Supported Frameworks", value: "React, Next.js" },
        { label: "Code Accuracy", value: "92%" }
      ]
    }
  },
  {
    id: "structai",
    title: "StructAI",
    subtitle: "Bridge Failure Prediction System",
    techStack: ["TypeScript", "Satellite Imagery", "Azure AI Vision", "Azure Machine Learning"],
    features: [
      "AI-powered predictive maintenance using satellite imagery.",
      "Detects micro-deformations to estimate structural risk accurately.",
      "Utilizes Azure AI Vision for automated image analysis."
    ],
    github: "https://github.com/Nivritha03/StructAI",
    liveDemo: "#",
    color: "#F59E0B",
    category: "Computer Vision",
    status: "Production Ready",
    complexity: 94,
    featured: true,
    detailedContent: {
      challenges: [
        "Processing massive volumes of high-resolution SAR (Synthetic Aperture Radar) satellite imagery.",
        "Detecting sub-millimeter deformations in bridge structures affected by atmospheric noise.",
        "Deploying highly complex machine learning models within Azure's infrastructure."
      ],
      solution: "Created an automated pipeline that ingests continuous satellite data and applies proprietary denoising algorithms. Azure Machine Learning instances process the imagery to detect micro-deformations over time, utilizing computer vision to alert engineers months before critical structural failures occur.",
      metrics: [
        { label: "Precision", value: "Sub-mm" },
        { label: "Data Processed", value: "10+ TB" },
        { label: "Prediction Window", value: "6 Months" }
      ]
    }
  },
  {
    id: "synthesia",
    title: "Synthesia Music Player",
    subtitle: "MERN Stack Music Streaming",
    techStack: ["JavaScript", "MongoDB", "Express", "React", "Node.js", "MERN Stack"],
    features: [
      "Full-stack music streaming web application built on MERN architecture.",
      "Features secure authentication, custom audio player, and favorites system.",
      "Dynamic playlists powered by mood-based audio processing."
    ],
    github: "https://github.com/Nivritha03/Synthesia_Music_Player",
    liveDemo: "#",
    color: "#F59E0B",
    category: "Full-Stack",
    status: "Production Ready",
    complexity: 82,
    featured: false,
    detailedContent: {
      challenges: [
        "Streaming large audio files efficiently without buffering or memory leaks.",
        "Analyzing audio metadata to dynamically categorize tracks by mood and tempo.",
        "Building a custom, responsive audio player UI that hooks deeply into the browser's Web Audio API."
      ],
      solution: "Designed a chunked streaming service using Node.js and MongoDB GridFS to serve audio data efficiently. The frontend utilizes the Web Audio API for a custom visualization and playback experience, while a lightweight machine learning model categorizes user listening habits to generate personalized, mood-based playlists.",
      metrics: [
        { label: "Streaming Buffer", value: "< 1s" },
        { label: "Active Users", value: "500+" },
        { label: "Audio Analyzed", value: "50+ hrs" }
      ]
    }
  },
  {
    id: "job-automation",
    title: "Job Application Automation",
    subtitle: "Playwright-Powered Automation Framework",
    techStack: ["Python", "Playwright", "Automation Framework"],
    features: [
      "Modular automation framework for discovering and filtering job listings.",
      "Configurable rules engine for autonomous application submissions.",
      "Database tracking and application lifecycle management."
    ],
    github: "https://github.com/Nivritha03/job_application_automation",
    liveDemo: "#",
    color: "#FFD700",
    category: "Automation",
    status: "Beta",
    complexity: 87,
    featured: false,
    detailedContent: {
      challenges: [
        "Navigating highly dynamic, React/Angular-based job portal single-page applications.",
        "Bypassing complex captchas and anti-bot mechanisms ethically and reliably.",
        "Handling diverse, multi-step application forms with varying schemas."
      ],
      solution: "Engineered a robust Playwright-based automation suite in Python that utilizes intelligent DOM parsing and computer vision to identify form fields. The framework employs a rules engine and SQLite database to track application states, manage resumes, and handle multi-page submissions with high reliability and failure recovery.",
      metrics: [
        { label: "Success Rate", value: "85%" },
        { label: "Portals Supported", value: "12+" },
        { label: "Time Saved", value: "100+ hrs" }
      ]
    }
  },
  {
    id: "vibesync",
    title: "VibeSync",
    subtitle: "Social Audio & Music Synchronization",
    techStack: ["JavaScript", "React", "Node.js", "WebAudio API"],
    features: [
      "Real-time synchronized audio playback across multiple clients.",
      "Social listening rooms with interactive chat and queue management.",
      "High-precision WebAudio scheduling for zero latency drift."
    ],
    github: "https://github.com/Nivritha03/VibeSync",
    liveDemo: "#",
    color: "#F59E0B",
    category: "Full-Stack",
    status: "Production Ready",
    complexity: 91,
    featured: false,
    detailedContent: {
      challenges: [
        "Achieving perfect millisecond synchronization of audio playback across diverse client devices.",
        "Managing distributed state for public listening rooms with hundreds of participants.",
        "Compensating for variable network latency and packet loss in real-time."
      ],
      solution: "Leveraged the WebAudio API's precise scheduling context alongside a custom NTP (Network Time Protocol) implementation over WebSockets. The server continually calibrates client clocks, ensuring that audio nodes start playback simultaneously across the globe with less than a 5ms margin of error.",
      metrics: [
        { label: "Sync Drift", value: "< 5ms" },
        { label: "Max Room Size", value: "1,000" },
        { label: "Audio Quality", value: "320kbps" }
      ]
    }
  },
  {
    id: "trading-bot",
    title: "Trading Bot",
    subtitle: "Automated Algorithmic Trading System",
    techStack: ["Python", "Algorithmic Trading", "Financial Analytics", "REST API"],
    features: [
      "Autonomous trading bot analyzing real-time market data indicators.",
      "Executes strategy algorithms with automated risk management rules.",
      "Backtesting suite for evaluating historical strategy performance."
    ],
    github: "https://github.com/Nivritha03/Trading_Bot",
    liveDemo: "#",
    color: "#FFD700",
    category: "Automation",
    status: "Production Ready",
    complexity: 95,
    featured: false,
    detailedContent: {
      challenges: [
        "Processing real-time financial market websocket streams with zero lag.",
        "Implementing failsafe risk management to prevent catastrophic drawdown during flash crashes.",
        "Building a highly accurate, event-driven backtesting engine to simulate slippage and fees."
      ],
      solution: "Developed an asynchronous Python trading engine that interfaces directly with exchange APIs via WebSockets. The system utilizes Pandas and NumPy for rapid technical indicator calculation. A strict, decoupled risk management microservice enforces hard stop-losses and position sizing independently of the main trading logic.",
      metrics: [
        { label: "Execution Speed", value: "< 10ms" },
        { label: "Uptime", value: "99.99%" },
        { label: "Backtest Speed", value: "1M ticks/s" }
      ]
    }
  }
];
