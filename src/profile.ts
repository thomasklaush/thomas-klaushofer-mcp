export const profile = {
  name: "DI Thomas Klaushofer, MLBT BSc",
  shortName: "Thomas Klaushofer",
  born: "1987-05-06",
  location: "Faistenau / Salzburg, Austria",
  officeAddress: "Urstein Süd 15, 5412 Puch bei Hallein (Techno-Z)",
  nationality: "Austrian",
  languages: [
    { language: "German", level: "Native" },
    { language: "English", level: "C2" },
    { language: "Russian", level: "B2" },
    { language: "Spanish", level: "A1" },
  ],
  contact: {
    email: "Thomas.klaushofer@smaspos.com",
    phone: "+43 678 1217902",
    github: "https://github.com/thomasklaush",
    linkedin: "https://www.linkedin.com/in/thomas-klaushofer/",
    portfolio: "https://thomasklaush.github.io",
    kubikos: "https://kubikos.net",
    twitter: "https://x.com/ThomasKlaush",
  },

  summary: `AI engineer, technical founder and trainer based in Salzburg, Austria. Builds AI that does real work — a personal AI assistant that triages mail, chats, calendars and tickets with Claude (drafts only, nothing sent without him), AI agents with human approval gates and least-privilege tools, and production MCP servers that connect Claude to existing systems — and offers talks, workshops and courses on AI at work, AI agents and AI-assisted development (technical trainer since 2013). Founder & CEO of Kubikos GmbH — a patented IoT fitness sensor platform with 99% accuracy (validated with Paris Lodron University Salzburg). German patent holder (DE 112021007607.8). Partnered with Hammer Sport AG; exhibited at FIBO and ISPO Munich. Simultaneously runs Sport Performance Systems e.U. as a freelance consultancy for healthcare IT, hotel management, and energy management software — since mid-2026 with a focus on AI agents, MCP servers, AI documentation pipelines and security. Background in mechatronics and robotics (MSc with distinction, JKU Linz), with a second master's in Legal & Business Aspects in Technology. Professional experience since 2007 (full-time since 2013) spanning semiconductor equipment, industrial automation, embedded systems, mobile apps, cloud architectures, and AI integration. Certified IPMA Project Manager, Strategic & Technical Product Manager.`,

  education: [
    {
      period: "2013–2017",
      degree: "Master of Legal and Business Aspects in Technology (MLBT)",
      institution: "Johannes Kepler University Linz",
      details: "Intersection of technology, law, and business management",
    },
    {
      period: "2011–2013",
      degree: "MSc Mechatronics — Specialisation Robotics",
      institution: "Johannes Kepler University Linz",
      details: "Graduated with distinction (mit Auszeichnung)",
      thesis: "Kraftbasierte Robotersteuerung mithilfe eines Force Feedback Eingabegerätes — Combining a 6-axis industrial robot with a haptic input device using force sensors and control loops for human-in-the-loop teleoperation",
    },
    {
      period: "2011–2012",
      degree: "Master of Mathematical Modeling in Applied Mechanics",
      institution: "Saint Petersburg State Polytechnical University, Russia",
      details: "2 semesters abroad. Received JKU Study Abroad Excellence Award for outstanding performance.",
    },
    {
      period: "2007–2010",
      degree: "BSc Mechatronics — Specialisation Automation",
      institution: "Johannes Kepler University Linz",
      thesis: "Fahrzeugsimulation am Motorprüfstand — Modeling drivetrain physics for vibration suppression controller development",
    },
    {
      period: "2001–2006",
      degree: "HTL (Higher Technical College) — Electrical Engineering",
      institution: "HTBLA Salzburg",
    },
  ],

  certifications: [
    { year: 2018, name: "Certified Project Manager — IPMA Level D" },
    { year: 2016, name: "Certified Strategic Product Manager — Open Product Management Workflow" },
    { year: 2016, name: "Certified Technical Product Manager — Open Product Management Workflow" },
  ],

  awards: [
    { name: "JKU Study Abroad Excellence Award", year: 2012, details: "For outstanding performance at Saint Petersburg State Polytechnical University" },
    { name: "Startup Salzburg Investors Lounge Winner", year: 2022, details: "Won the Investors Lounge pitch competition" },
    { name: "Born Global Champions Award (WKO)", year: 2025, details: "Applied to Austria's export prize for innovative startups" },
  ],

  experience: [
    {
      period: "Feb 2021–present",
      company: "Kubikos GmbH",
      role: "Founder & CEO",
      description: "Responsible for everything: product, hardware, software, founder-led sales and delivery, analytics, and collecting, structuring and preparing data for AI. Founded and lead all technical and business development of a patented IoT fitness sensor platform. Built end-to-end: custom hardware sensors (PCB design, 3D printing, reflow soldering), nRF52840 C++ firmware with patented sensor fusion algorithm (99% accuracy, validated with Paris Lodron University Salzburg), Flutter mobile app (v177+, App Store & Google Play), TypeScript backend, and FIT CLOUD B2B platform. German patent holder (DE 112021007607.8). AI-powered content pipeline: exercise creator workflow generating descriptions, images (Gemini), and videos (Veo3) automatically; an AWS Bedrock training-plan engine (create/refine/adapt) that replaced the earlier n8n + Mistral backends; exercise research tool extracting technique, pros/cons, and muscle data to auto-populate the exercise database. Operates a production remote MCP server (OAuth-secured, incl. native MCP clients per RFC 8252) with an admin tool suite that lets an AI agent curate the exercise and equipment catalogue (soft-deletes with retention, re-parenting, bulk re-tagging, backfill worklists), plus training-plan tools — all fully integrated into the platform. The Kubikos MCP server has been listed in Anthropic's Claude Connectors Directory as a community connector since Oct 2026 (https://claude.ai/directory/kubikos). AI-generated private user exercise drafts via Bedrock. Development runs on versioned Claude Code skills (bug triage, Sentry triage, release notes, deploys) with integration tests as a blocking release gate. Partnered with Hammer Sport AG (50 sensors sold); piloting with FITINN gym chain; prototyping with Gym80. FFG grant recipient for In Situ Energy Harvesting research. Startup Salzburg FACTORY alumnus, Investors Lounge winner, Startup World Cup 2025 participant. Exhibited at FIBO 2024/25/26 and ISPO Munich 2022.",
      tags: ["Patent Holder", "Firmware", "Flutter", "AWS", "MCP Server", "Claude Connectors Directory", "AWS Bedrock", "IoT", "Gemini", "Veo3", "FFG Funded"],
    },
    {
      period: "2025–present",
      company: "WebTec",
      role: "Co-owner (shareholder) & Software / AI Development",
      description: "Shareholder of WebTec. Built the EG Energiemanager app for renewable energy communities and, since 2026, its wider energy platform: AI ticket triage, spot-price battery scheduling, PV/load forecasting — developed with Claude Code role-based subagents across multiple repositories.",
      tags: ["Flutter", "AI Ticket Triage", "MCP", "AWS CDK", "Claude Code Subagents", "Energy"],
    },
    {
      period: "Oct 2021–present",
      company: "Sport Performance Systems e.U.",
      role: "Owner · Customer Success Manager (freelance) for GMS-Salzburg",
      description: "Independent consultancy since Oct 2021. Client GMS-Salzburg (healthcare and hospitality software); title: Customer Success Manager. Quality assurance of the Vagus patient app (rehabilitation clinics across DACH, HL7 ADT/SIU interfaces, RAG FAQ chatbot); wrote its first automated app tests. On-site rollouts and training, and pre-sales for GMS, supported by a self-built lead research and lead management tool. Team lead on Unity, a platform unifying hotel management, clinic management and patient applications, designed its LLM routing architecture (gateway Lambda, AWS Bedrock, multi-provider evaluation). Since AI became this capable, the focus is AI: agents for hotel software with permission-filtered tools and human approval for every write action (recently live, first customer in production), MCP servers over existing backends that act with the user's own token, automatically maintained user manuals (a manual orphaned for years is now kept current with little effort), analytics, collecting and preparing data for AI, and a security and architecture audit of the multi-tenant platform. The app work continues alongside.",
      tags: ["AI Agents", "Human-in-the-loop", "MCP Servers", "LLM Routing", "Pre-Sales", "Quality Assurance", "Team Lead", "Security Audit", "HL7", "AWS Bedrock", "RAG", "Ruby on Rails", "AI Tooling", "Analytics", "Customer Success"],
    },
    {
      period: "Jul 2017–Jan 2021",
      company: "BEKO Engineering & Informatik",
      role: "Head of Competence Center AET",
      description: "Led the competence center for electrical engineering, automation and measurement systems / hardware development: disciplinary and technical leadership, budget and project responsibility; licensed managing director (gewerberechtlicher Geschäftsführer) for electrical engineering and mechatronics. In projects with industrial partners worked out the specification and the division of work with the team. As a \"flying captain\" also took on projects, e.g. PLC programming of special-purpose machines. Core strength: control algorithms and their implementation. Standardisation and quality assurance of projects.",
      tags: ["Leadership", "Project Responsibility", "Automation", "PLC", "Control Algorithms", "Budget Management", "Electrical Engineering"],
    },
    {
      period: "2017 (Mar–May)",
      company: "Kormaran",
      role: "Head of Electrical & Automation Engineering",
      description: "Multifunctional sports boat that flies on hydrofoils. Responsible for the complete electrical and automation development of the boat; designed the flight control on the hydrofoils. Built test rigs and commissioned the full vehicle architecture. Led a team of six: three electrical engineers and three automation interns.",
      tags: ["Control Systems", "Hydrofoil Flight Control", "Automation", "Test Rigs", "Team Lead"],
    },
    {
      period: "2013–2017 (summers from 2007)",
      company: "Siconnex Customized Solutions",
      role: "Project Developer (Pre-Sales) → Product Manager",
      description: "Semiconductor wet-processing equipment. Project Development (Nov 2013 – Mar 2016): technical lead for customer projects in Asia, Russia and parts of Europe — specified processes and equipment, including chemical process engineering, and assessed feasibility on Siconnex tools (what is possible, what is not, what has to be developed); structured and prepared the projects, aligned them with the customers and handed them to sales for closing (pre-sales). Explored new processes with customers and research institutes; analysed wet-processing equipment in existing plants for cost savings. Product Manager (Apr 2016 – Jan 2017), BATCHSPRAY line: verified, adapted and negotiated customer specifications, analysed market needs through customer visits and trade fairs, supported sales on key customers and critical projects; interface between management, R&D, production and sales; presentations at semiconductor trade shows and symposia. Before: CAD engineering (Jul–Oct 2013) and summer positions in service and CAD alongside studies (2007–2013).",
      tags: ["Semiconductor", "Pre-Sales", "Technical Specification", "Chemical Process Engineering", "Product Management", "Customer Projects"],
    },
    {
      period: "2013–present",
      company: "WIFI Salzburg",
      role: "Technical Trainer",
      description: "Part-time instructor for electrical drives and physics. Now also offering talks, workshops and courses on AI (see get_speaking_topics).",
      tags: ["Teaching", "Electrical Drives", "Physics", "AI Training"],
    },
  ],

  projects: [
    {
      name: "Didymus — Personal AI Assistant",
      type: "Personal project",
      description: "Thomas's own AI assistant, running locally on his Mac. Merges mail (IMAP, Microsoft Graph), WhatsApp, Slack, calendars, tickets and notes into one calm dashboard. Every 15 minutes Claude Code runs headless to triage by company, project, priority and deadline, link related threads across sources into cases, and write an overview. Replies are prepared as drafts only — nothing is ever sent without Thomas (the mail draft token has no send permission). Feature wishes from chats are collected, deduplicated, checked against the code and passed through a review stage (problem, affected, version, urgency, done-when); missing details become 1–3 follow-up questions before a ticket is created and its status synced back. Receipts are matched to company and month folder for bookkeeping, copied only on Thomas's click, plus monthly status and payment matching. A sales pipeline view links each lead to the latest real contact found across all channels. Voice messages are transcribed locally with whisper.cpp. Security by design: messages are treated as untrusted input, so AI steps that read them get minimal rights (search/read tools only, write only to a scratch folder); outputs are parsed and validated before they are applied; tokens are separated by purpose (read, calendar write, drafts, files); secrets are masked in inputs and outputs; the dashboard binds to localhost with host checks against DNS rebinding. Exposes its own local MCP server so Claude can query and act on the hub.",
      tags: ["Claude Code headless", "MCP Server", "Personal AI Assistant", "Human-in-the-loop", "Least Privilege", "Python", "SQLite", "whisper.cpp", "Microsoft Graph", "Swift"],
    },
    {
      name: "Kubikos — Fitness Sensorics Platform",
      type: "Founder",
      description: "Patented end-to-end IoT product: K-FORCE PRO sensors (0.1 kg precision, 3-tonne rated, patented magnetic distance sensor) digitise analogue gym equipment. KUBIKO Chip with patented sensor fusion algorithm achieves 99% accuracy (validated with Paris Lodron University Salzburg). Flutter app (v177+), TypeScript backend, FIT CLOUD B2B platform for manufacturers and gyms. AI layer: AWS Bedrock training-plan engine (migrated off the earlier n8n/Mistral stack), AI-generated user exercise drafts, a Gemini + Veo3 exercise-content pipeline, and a production remote MCP server (OAuth) with an admin tool suite that lets an AI agent curate exercises/equipment and generate training plans; the server has been listed in Anthropic's Claude Connectors Directory as a community connector since Oct 2026 (https://claude.ai/directory/kubikos). Developed with versioned Claude Code skills and integration tests as a blocking release gate. Partnered with Hammer Sport AG. Piloting with FITINN. FFG-funded energy harvesting R&D. Exhibited at FIBO 2024/25/26 and ISPO Munich 2022.",
      tags: ["Flutter", "nRF52840", "C++ Firmware", "AWS", "BLE", "Kalman Filter", "TypeScript", "MCP Server", "AWS Bedrock", "Patent"],
      url: "https://kubikos.net",
    },
    {
      name: "EG Energiemanager — WebTec",
      type: "WebTec product (Thomas is co-owner)",
      description: "Mobile app for Austrian Erneuerbare-Energie-Gemeinschaften (EEG), built for WebTec. Real-time display of available community energy, consumption optimisation, and hardware configuration. Features ML-based PV generation nowcasting using Open-Meteo weather data and EEG billing API integration. Available on App Store and Google Play. Around it, since 2026: a support ticket platform with AI triage (local embeddings for duplicate detection and assignee suggestions, Claude classification on pseudonymised text — suggestions only, with budget alerts) and an MCP endpoint for tickets; a spot-price manager scheduling batteries against day-ahead prices (AWS CDK, Python Lambdas); physics-based PV and load forecasting with backtests; and a simulation lab for the control chain. The multi-repo platform is developed with Claude Code: a central plan, role-based subagents per repo in separate worktrees, a read-only contract guardian, guard hooks and repo-specific skills.",
      tags: ["Flutter", "Modbus TCP", "PV Systems", "EEG API", "ML Nowcasting", "AI Ticket Triage", "MCP", "AWS CDK", "Claude Code Subagents"],
    },
    {
      name: "Vagus — Patient App & Clinic Interfaces",
      type: "Freelance (GMS-Salzburg)",
      description: "Patient-facing mobile app for rehabilitation clinics across Germany. Customer success and interface engineering: HL7 ADT/SIU integration with hospital information systems, Vagus Connector (Delphi/Samba), questionnaire system (Vagus Quest), alarm chains, RAG-based FAQ chatbot, and on-site deployment at dozens of DACH facilities. Full lifecycle from development through installation, training, and ongoing support.",
      tags: ["HL7 ADT/SIU", "Firebird", "AWS Amplify", "Delphi", "RAG", "Mixpanel"],
    },
    {
      name: "Unity — Unified Healthcare & Hospitality Platform",
      type: "Freelance (GMS-Salzburg)",
      description: "Next-generation platform unifying multiple applications: Felix (hotel management), Topas (medical/clinic management), and Vagus (patient app) into a single architecture. Team lead. Responsible for LLM routing architecture (Gateway Lambda, AWS Bedrock, multi-provider evaluation), MCP server development, and AI-powered automation workflows.",
      tags: ["LLM Routing", "AWS Bedrock", "TypeScript", "MCP Servers", "n8n", "Ruby on Rails"],
    },
    {
      name: "AI Agents, MCP & AI Handbook — Hotel & Clinic Software",
      type: "Freelance (GMS-Salzburg)",
      description: "AI agents for guest and booking workflows in hotel software: a triage agent hands over to specialists, tools come from OpenAPI and MCP and are filtered by the user's permissions, every write action waits for human approval, with a visible, correctable agent memory and cost limits via an LLM gateway. MCP servers on top of existing backends that act with the calling user's token, with hardened auth and per-tool rights. An AI documentation pipeline (docs-as-code) for the user manual: writer and reviewer prompts against quality criteria, every change as a pull request for human approval, automatic detection of outdated pages and screenshots from releases and E2E runs. Security and architecture audit of a multi-tenant platform, with adversarial review of findings and tracked re-checks through to verified fixes. Plus HL7 interface engineering and CI/CD (GitHub Actions, Jenkins, Docker, Kubernetes).",
      tags: ["AI Agents", "Human Approval", "MCP Servers", "OpenAI Agents SDK", "LiteLLM", "Docs-as-Code", "Security Audit", "HL7", "Playwright"],
    },
  ],

  skills: {
    mobile: {
      title: "Mobile Development",
      items: ["Flutter", "Dart", "iOS", "Android", "BLE", "Fastlane CI/CD", "TestFlight"],
      context: "3 published apps on App Store & Google Play. Complex BLE, USB serial, and real-time data requirements.",
    },
    embedded: {
      title: "Embedded / Firmware",
      items: ["nRF52840", "nRF5340", "ESP32", "C/C++", "BLE", "Modbus TCP", "USB-C Serial", "Extended Kalman Filter"],
      context: "PCB design (Eagle, EasyEDA), 3D printing, reflow soldering. Patented sensor fusion algorithm.",
    },
    cloud: {
      title: "Cloud & Backend",
      items: ["AWS Amplify", "Lambda", "Cognito", "Bedrock", "TypeScript", "Ruby on Rails", "GCP", "Firebase"],
      context: "AWS-centric architectures with serverless functions, auth flows, and real-time data pipelines.",
    },
    healthcare: {
      title: "Healthcare IT",
      items: ["HL7 v2 (ADT, SIU)", "Firebird DB", "Delphi", "Samba", "SQL"],
      context: "Deep integration with hospital information systems. Patient management, clinic workflows, alarm chains.",
    },
    energy: {
      title: "Energy & IoT",
      items: ["Loxone", "Modbus TCP", "PV Systems", "EEG/Billing API", "Salto (UDP)"],
      context: "Smart home automation, PV system integration, energy community management with real-time monitoring.",
    },
    ai: {
      title: "AI & Generative AI",
      items: ["Claude Code (skills, hooks, subagents, headless)", "Claude API", "AI Agents", "Human-in-the-loop approval", "MCP Servers", "Remote MCP (OAuth)", "Claude Connectors Directory (community connector)", "AWS Bedrock", "Embeddings", "Google Gemini", "Veo3", "RAG", "n8n", "LLM Gateway Routing"],
      context: "Builds a personal AI assistant (Didymus) with headless Claude triage, drafts-only output and least-privilege AI steps. Builds AI agents with human approval gates, permission-filtered tools and cost limits. Builds and ships MCP servers across the stack: a published npm server (this profile), a Redmine MCP in Python, MCP servers over existing hotel and ticketing backends that pass the caller's permissions through, and production remote MCP servers (OAuth) inside the Kubikos platform that expose exercise-curation, equipment, and training-plan tools directly to Claude — the Kubikos MCP server is listed in Anthropic's Claude Connectors Directory (community connector). AI ticket triage with local embeddings and Claude on pseudonymised text. Claude Code multi-repo workflows with role-based subagents, guard hooks and skills; AI docs-as-code pipeline with human review. LLM gateway architecture with deterministic routing (AWS Bedrock, Claude, Gemini multi-provider). AI-powered exercise creation pipeline: auto-generated descriptions, images (Gemini), and videos (Veo3). AWS Bedrock training-plan engine (create/refine/adapt) that replaced the earlier n8n + Mistral backends. Exercise research tool for automated knowledge extraction. RAG-based FAQ automation for clinic support. ML-based PV energy nowcasting. Active Claude Code and Cursor user since 2024. AI tooling champion at GMS — driving adoption across the engineering team.",
    },
    industrial: {
      title: "Industrial Automation",
      items: ["Simatic S7 TIA Portal", "B&R Automation Studio 4", "Beckhoff TwinCAT 2 & 3"],
      context: "Semiconductor equipment (Siconnex, full-time 2013–2017) and industrial automation (BEKO 2017–2021, incl. PLC programming of special-purpose machines). Control algorithm design and commissioning, incl. hydrofoil flight control (Kormaran).",
    },
    languages: {
      title: "Programming Languages",
      items: ["TypeScript", "JavaScript", "Python", "Dart", "C", "C++", "Java", "Assembler", "LaTeX"],
    },
    security: {
      title: "Security & DevOps",
      items: ["Security & architecture audit", "Auth hardening", "Secrets hygiene", "GitHub Actions", "Forgejo Actions", "Jenkins", "Docker", "Kubernetes / Helm", "AWS CDK"],
      context: "Security and architecture audit of a multi-tenant platform with tracked fixes; least-privilege design for AI agents; CI/CD and container deployments.",
    },
    tools: {
      title: "CAD & Simulation",
      items: ["ProE", "Solid Edge", "Matlab", "Maple", "Mathematica", "SciLab", "P-Spice", "LT-Spice", "Eagle", "EasyEDA"],
    },
  },

  achievements: {
    patent: {
      number: "DE 112021007607.8",
      title: "Trainingsgerät (Training Device)",
      holder: "Thomas Klaushofer",
      status: "Active — renewed March 2026",
      description: "Patented distance sensor with magnetic technology and sensor fusion algorithm for fitness equipment digitisation.",
    },
    ffgGrants: [
      { name: "Patent.Scheck — In Situ Energy Harvesting", project: "60667567", status: "Completed Nov 2025", description: "Local energy generation for sensor power supply in extremely confined spaces." },
      { name: "Basisprogramm Kleinprojekt — In Situ Energy KP", project: "61531311", status: "Active since Oct 2025" },
      { name: "Innovationsförderung Land Salzburg", status: "Project report 2024" },
    ],
    euProject: "EDIH 'Crowd in Motion AI' — Letter of Commitment",
    claudeConnectorsDirectory: "Kubikos MCP server listed in Anthropic's Claude Connectors Directory (community connector), since Oct 2026 — https://claude.ai/directory/kubikos",
    universityValidation: "99% sensor accuracy validated with Paris Lodron University Salzburg",
    startupPrograms: [
      "Startup Salzburg SHAPE",
      "Startup Salzburg FACTORY #6 (alumnus)",
      "Startup Salzburg Investors Lounge (winner)",
      "Startup World Cup 2025 (participant)",
    ],
    tradeShows: [
      "ISPO Munich 2022 (exhibitor)",
      "FIBO 2024 Cologne (launched with Hammer Sport AG)",
      "FIBO 2025 (Hammer Sport AG booth)",
      "FIBO 2026 (gym80 booth)",
      "Reha-Kolloquium 2026 Leipzig (GMS booth, presented VagusApp + Yuna AI robot)",
    ],
    partnerships: [
      "Hammer Sport AG — first major partner, integrated sensors into premium home fitness line (50 sensors sold)",
      "FITINN — pilot deployment and active business development",
      "Gym80 — prototyping partnership (received STEP files Dec 2025)",
      "BH Fitness — presentation and evaluation",
      "xdevelop — PCB/electronics development partner (PV foil, custom PCB design)",
      "WebTec (co-owned) — EG Energiemanager app and energy platform (EEG billing API integration)",
    ],
    competitions: [
      "Born Global Champions Award (WKO) — applied 2025, invited 2026",
      "#glaubandich CHALLENGE 2026 — Smart Fashion, Sports & Lifestyle category",
    ],
    events: [
      "FitTech Summit Deep Dive 'Health Rules!' (June 2022)",
      "HOMECOMING STARTUPS 2025 (FHStartup Center Salzburg)",
      "SALZ 2026 / Salt'n'Venture (Salzburg startup conference)",
      "FitTech Club member — Masterminds sessions (Hardware, Sensors & Wearables)",
      "ERFA-Runde — 33rd ERFA Software round (Innovation Salzburg, Sep 2025)",
    ],
  },

  speaking: {
    positioning: "Talks, workshops and courses on AI — every topic comes from systems Thomas builds and runs himself. Shows what works, what breaks, and where humans stay in control. Focus on using AI productively without giving up security and data protection.",
    languages: ["German", "English"],
    topics: [
      {
        id: "personal-ai-assistant",
        title: "Building a personal AI assistant",
        summary: "Mail, chats, calendar and tickets in one place, triaged by Claude running headless. Drafts only — nothing goes out without a human. Feature wishes pass a review stage with follow-up questions before becoming tickets; receipts are matched for bookkeeping.",
        basedOn: ["Didymus (own daily assistant)"],
        keywords: ["assistant", "inbox", "personal", "didymus", "digital twin", "mail", "triage", "drafts", "alltag"],
      },
      {
        id: "safe-ai-agents",
        title: "Safe AI agents: approvals & least privilege",
        summary: "Treat every message as untrusted input. AI steps that read foreign content get minimal rights, outputs are validated before use, tokens are split by purpose, every write action waits for human approval. Patterns, failure modes, and how to audit them.",
        basedOn: ["Didymus", "AI agents for hotel software", "Platform security audit"],
        keywords: ["agent", "security", "safe", "approval", "least privilege", "prompt injection", "sicherheit", "freigabe"],
      },
      {
        id: "mcp-for-existing-systems",
        title: "MCP servers for existing systems",
        summary: "Connecting Claude to existing REST backends, ticketing, time tracking and product catalogues via the Model Context Protocol: OAuth for remote servers, passing the calling user's permissions through, per-tool rights, and what not to expose.",
        basedOn: ["Kubikos remote MCP (OAuth)", "MCP over a hotel backend", "Ticket MCP", "Redmine MCP", "this profile server"],
        keywords: ["mcp", "model context protocol", "integration", "oauth", "backend", "api"],
      },
      {
        id: "claude-code-in-teams",
        title: "AI-assisted development with Claude Code in teams",
        summary: "From prompting to a workflow: CLAUDE.md per repo, skills, guard hooks, role-based subagents across multiple repositories, pull requests as the human review point — plus docs-as-code with an AI pipeline that keeps a user manual current under human approval.",
        basedOn: ["Multi-repo energy platform", "AI handbook pipeline", "Kubikos development"],
        keywords: ["claude code", "development", "coding", "team", "subagent", "skills", "hooks", "entwicklung"],
      },
      {
        id: "ai-in-smes-data-protection",
        title: "AI in SMEs & data protection",
        summary: "Where AI pays off in small and mid-sized companies, and how to keep personal data safe: pseudonymise before classification, transcribe locally, mask secrets, keep AI suggestions as suggestions. A pragmatic engineering view, informed by a master's in legal & business aspects of technology (not legal advice).",
        basedOn: ["AI ticket triage", "Healthcare and energy projects"],
        keywords: ["sme", "kmu", "mittelstand", "gdpr", "dsgvo", "privacy", "data protection", "datenschutz"],
      },
      {
        id: "ai-in-everyday-work",
        title: "AI in everyday work",
        summary: "A hands-on start for non-developers: what today's assistants can reliably do, how to brief them, how to check their output, and which tasks to hand over first — with examples from mail, planning, documentation and bookkeeping.",
        basedOn: ["Own daily routine with an AI assistant"],
        keywords: ["everyday", "work", "beginner", "non-developer", "productivity", "arbeitsalltag"],
      },
    ],
    formats: ["Talk or keynote", "Hands-on workshop", "Multi-part course or in-house training", "On-site or remote, any length"],
    audiences: [
      "Executives and SMEs deciding where AI fits",
      "Development teams adopting AI agents and Claude Code",
      "Knowledge workers starting with AI at work",
    ],
    teachingBackground: [
      "Technical trainer at WIFI Salzburg since 2013 (electrical drives, physics)",
      "AI tooling champion — drives adoption of Claude, MCP servers and automation in engineering teams",
      "International presentations at semiconductor trade shows and symposia (Siconnex)",
      "Has presented Kubikos — an AI-enhanced training app with a high-precision sensor — on several occasions",
    ],
    pastAppearances: [
      { date: "2026-07", event: "Munich Startup Festival", type: "Pitch (English)" },
      { date: "2026-06", event: "FH Salzburg, Campus Kuchl — Forum HOLZ 'From Innovation to Startup'", type: "Talk" },
      { date: "2026-06", event: "FHStartup Center Salzburg — visiting students from Bowling Green State University (USA)", type: "Presentation" },
      { date: "2025-11", event: "HOMECOMING STARTUPS, FHStartup Center Salzburg", type: "Pitch" },
      { date: "2025-10", event: "Privatuniversität Schloss Seeburg — course 'Entrepreneurship in Sport'", type: "Guest input" },
      { date: "2025-09", event: "Startup Salzburg FACTORY Selection Day", type: "Pitch (EG Energiemanager)" },
      { date: "2025", event: "Startup World Cup Austria", type: "Pre-event pitch" },
      { date: "2025-02", event: "Techno-Z Salzburg", type: "Investor pitch (by invitation)" },
      { date: "2024-10", event: "Privatuniversität Schloss Seeburg", type: "Startup presentation" },
      { date: "2024–2026", event: "FIBO Cologne — Hammer Sport AG booth (2024, 2025), gym80 booth (2026)", type: "Live demos at trade show booth" },
    ],
    booking: "Enquiries by email (see get_contact). Dates, durations and fees on request.",
  },

  whyAnthropic: {
    targetRoles: [
      {
        role: "Forward Deployed Engineer, Applied AI",
        fitSummary: "Thomas brings a rare combination: technical founder who has built and shipped end-to-end products (hardware to cloud), deep customer-facing deployment experience across DACH, and hands-on MCP/Claude ecosystem experience — including production remote MCP servers that Claude drives directly, an AWS Bedrock plan engine, and a Gemini/Veo3 content pipeline.",
        requirementMapping: [
          {
            requirement: "3-4+ years in a technical, customer-facing role or former technical founder",
            fit: "5+ years as technical founder (Kubikos) AND freelance engineer deploying software at dozens of DACH customer sites. 'Former technical founder' describes Thomas perfectly. Before that: 3.5 years leading engineering teams at BEKO, and pre-sales project development and product management at Siconnex (full-time 2013–2017).",
          },
          {
            requirement: "Production experience with LLMs, prompt engineering, agent development",
            fit: "Built production AI pipelines: exercise creator (Gemini + Veo3), AWS Bedrock training-plan engine, exercise research tool, RAG-based FAQ chatbot. Designed LLM gateway architecture with deterministic routing (AWS Bedrock, multi-provider). Built and published MCP servers plus production remote MCP servers Claude consumes. AI tooling champion at GMS.",
          },
          {
            requirement: "Strong programming skills, Python + ideally TypeScript/Java",
            fit: "Ships production code daily in TypeScript, Dart/Flutter, Python, C/C++, Java, Ruby. 3 published apps on App Store & Google Play. Full IoT stack from firmware to cloud.",
          },
          {
            requirement: "Build production applications with Claude, deliver MCP servers, sub-agents, agent skills",
            fit: "Published MCP server on npm (thomas-klaushofer-mcp). Built Redmine MCP in Python. Runs production remote MCP servers (OAuth) in the Kubikos platform that Claude uses to curate exercises/equipment and generate training plans. Drove company MCP monorepo at GMS. This MCP server itself demonstrates the skill.",
          },
          {
            requirement: "Navigate ambiguity, high cooperation mindset",
            fit: "Simultaneously manages own startup products and deploys software for GMS across complex healthcare and hospitality organisations — each with unique IT landscapes and integration requirements.",
          },
          {
            requirement: "25% travel to customer sites",
            fit: "Already travels regularly for on-site installations across DACH. 25% travel is ideal.",
          },
          {
            requirement: "Preferred: healthcare, enterprise verticals",
            fit: "Deep healthcare IT experience: HL7 ADT/SIU integration, rehabilitation clinic deployments, hospital information systems. Also hotel/hospitality enterprise systems.",
          },
        ],
      },
      {
        role: "Solutions Architect, Applied AI (Beneficial Deployments)",
        fitSummary: "Thomas's healthcare deployment background (rehabilitation clinics, patient apps) and teaching experience (WIFI Salzburg since 2013) map directly to this mission-driven, education/healthcare-focused SA role. His MCP server and Claude Code expertise enable the 'Claude Code enablement' responsibility.",
        requirementMapping: [
          {
            requirement: "3+ years in a technical role, ideally customer-facing",
            fit: "5+ years customer-facing: founding Kubikos (founder-led sales) and freelance deployments across dozens of DACH healthcare and hospitality facilities.",
          },
          {
            requirement: "Experience working in or building trust with education, healthcare, scientific research, nonprofit, or mission-driven organizations",
            fit: "Deep healthcare: Vagus patient app deployed at rehabilitation clinics across Germany, HL7 hospital system integration, on-site training. Teaching: WIFI Salzburg trainer since 2013. Scientific: 99% sensor accuracy validated with Paris Lodron University.",
          },
          {
            requirement: "Familiarity with LLM implementation patterns, prompt engineering, evaluation frameworks, agent frameworks",
            fit: "Production LLM pipelines (AWS Bedrock plan engine, Gemini, Veo3). MCP servers published on npm plus production remote MCP servers Claude consumes. LLM gateway architecture with deterministic routing. RAG systems. n8n automation.",
          },
          {
            requirement: "Teaching and mentoring ability",
            fit: "Professional trainer at WIFI Salzburg since 2013 (electrical drives, physics). AI tooling champion at GMS — trained engineering team on Claude, Cursor, MCP servers.",
          },
        ],
      },
      {
        role: "Solutions Architect, Applied AI (Startups)",
        fitSummary: "Thomas IS a technical founder with founder-led sales experience — the exact profile this role describes. He built Kubikos from zero to Hammer Sport AG partnership, pitched at Startup World Cup, and lives in the startup ecosystem (FACTORY alumnus, FitTech Club, Investors Lounge winner).",
        requirementMapping: [
          {
            requirement: "3+ years in technical customer-facing role or technical founder with founder-led sales",
            fit: "5+ years as technical founder of Kubikos: pitched to investors, sold 50 sensors to Hammer Sport AG, presented at FIBO/ISPO, won Investors Lounge, participated in Startup World Cup 2025.",
          },
          {
            requirement: "Startup or high-growth company experience; understanding of early-stage velocity",
            fit: "Founded and runs Kubikos GmbH since 2021. Startup Salzburg SHAPE and FACTORY alumnus. FitTech Club member. Lives the startup life daily.",
          },
          {
            requirement: "Software engineering or technical founder background (strong builder credibility)",
            fit: "Built entire IoT product end-to-end: hardware sensors, C++ firmware, Flutter app (v177+), TypeScript backend, AI content pipeline. Patent holder. FFG grant recipient.",
          },
          {
            requirement: "Hands-on production experience with LLM applications",
            fit: "Production AI pipelines: exercise creator (Gemini + Veo3), AWS Bedrock training-plan engine, exercise research tool. LLM gateway architecture. Published npm MCP server plus production remote MCP servers (OAuth) driving the Kubikos platform. RAG systems.",
          },
          {
            requirement: "Python proficiency and familiarity with LLM frameworks",
            fit: "Python, TypeScript, Dart, C/C++, Java. Built MCP server in Python (Redmine) and TypeScript (this server). AWS Bedrock, Claude API, Gemini API.",
          },
        ],
      },
    ],
    uniqueStrengths: [
      "Patent holder — demonstrates deep technical innovation, not just software development",
      "Hardware + software — can reason about the full stack from PCB to cloud, rare among software engineers",
      "AI content pipeline builder — production use of AWS Bedrock, Gemini, and Veo3 for automated content and training-plan generation",
      "Published MCP server on npm plus production remote MCP servers (OAuth) running live in the Kubikos product; the Kubikos MCP server is listed in Anthropic's Claude Connectors Directory (community connector) — demonstrates the exact skill Anthropic's FDE role requires, at real scale",
      "MLBT master (Legal & Business Aspects in Technology) — relevant for enterprise AI deployments with compliance",
      "Healthcare IT expertise — HL7, rehabilitation clinics, patient apps (directly relevant to Beneficial Deployments)",
      "Teaching experience — WIFI Salzburg trainer since 2013, can translate complex AI concepts for diverse audiences",
      "Startup ecosystem native — FACTORY alumnus, Investors Lounge winner, Startup World Cup, FitTech Club",
      "German native speaker, English C2, Russian B2 — rare language combination for DACH market coverage",
    ],
  },
};
