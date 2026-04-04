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
    linkedin: "https://www.linkedin.com/in/thomas-klaushofer-39386793/",
    portfolio: "https://thomasklaush.github.io",
    kubikos: "https://kubikos.net",
    twitter: "https://x.com/ThomasKlaush",
  },

  summary: `Technical founder, mechatronics engineer, and full-stack developer based in Salzburg, Austria. Founder & CEO of Kubikos GmbH — a patented IoT fitness sensor platform with 99% accuracy (validated with Paris Lodron University Salzburg). German patent holder (DE 112021007607.8). Partnered with Hammer Sport AG; exhibited at FIBO and ISPO Munich. Simultaneously runs Sport Performance Systems e.U. as a freelance consultancy, deploying healthcare IT, hotel management, and energy management software across dozens of DACH locations. Background in mechatronics and robotics (MSc with distinction, JKU Linz), with a second master's in Legal & Business Aspects in Technology. 15+ years of professional experience spanning semiconductor equipment, industrial automation, embedded systems, mobile apps, cloud architectures, and AI integration. Certified IPMA Project Manager, Strategic & Technical Product Manager.`,

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
      period: "2021–present",
      company: "Kubikos GmbH",
      role: "Founder & CEO",
      description: "Founded and lead all technical and business development of a patented IoT fitness sensor platform. Built end-to-end: custom hardware sensors (PCB design, 3D printing, reflow soldering), nRF52840 C++ firmware with patented sensor fusion algorithm (99% accuracy, validated with Paris Lodron University Salzburg), Flutter mobile app (v177+, App Store & Google Play), TypeScript backend, and FIT CLOUD B2B platform. German patent holder (DE 112021007607.8). AI-powered content pipeline: exercise creator workflow generating descriptions, images (Gemini), and videos (Veo3) automatically; training plan generator (Claude Opus); exercise research tool extracting technique, pros/cons, and muscle data to auto-populate exercise database — all fully integrated into the platform. Partnered with Hammer Sport AG (50 sensors sold); piloting with FITINN gym chain; prototyping with Gym80. FFG grant recipient for In Situ Energy Harvesting research. Also developed EG Energiemanager app for WebTec (renewable energy communities). Startup Salzburg FACTORY alumnus, Investors Lounge winner, Startup World Cup 2025 participant. Exhibited at FIBO 2024/25/26 and ISPO Munich 2022.",
      tags: ["Patent Holder", "Firmware", "Flutter", "AWS", "IoT", "Claude Opus", "Gemini", "Veo3", "FFG Funded"],
    },
    {
      period: "2018–present",
      company: "Sport Performance Systems e.U.",
      role: "Owner & Freelance Software Engineer",
      description: "Independent consultancy. Long-term client GMS-Salzburg: customer success and engineering for Vagus (patient-facing app for rehabilitation clinics, HL7 ADT/SIU interfaces, RAG-based FAQ chatbot, deployed across dozens of DACH facilities). Partial team lead on Unity — a next-generation platform unifying hotel management (Felix), medical clinic management (Topas), and patient applications (Vagus) into a single architecture. Responsible for LLM routing architecture (Gateway Lambda, AWS Bedrock, multi-provider evaluation), MCP server development, and AI-powered automation workflows. Built custom MCP servers (Redmine MCP in Python). AI tooling champion internally — driving adoption of Claude, Cursor, MCP servers, n8n automation, and GitHub Copilot Spaces.",
      tags: ["LLM Routing", "MCP Servers", "HL7", "AWS Bedrock", "RAG", "Ruby on Rails", "AI Tooling", "Customer Success"],
    },
    {
      period: "2017–2021",
      company: "BEKO Engineering & Informatik",
      role: "Head of Competence Center AET",
      description: "Led three departments: Electrical Engineering, Automation, and Measurement Systems / Hardware Development. Full disciplinary and technical leadership, budget responsibility, and served as licensed managing director (gewerberechtlicher Geschäftsführer) for electrical engineering and mechatronics. Standardisation and quality assurance of projects.",
      tags: ["Leadership", "Automation", "Budget Management", "Electrical Engineering"],
    },
    {
      period: "2017 (Mar–May)",
      company: "Kormaran",
      role: "Head of Electrical & Control Engineering",
      description: "Developed control and regulation systems for an innovative watercraft. Built test rigs, commissioned the full vehicle architecture, and led a team of three engineers.",
      tags: ["Control Systems", "Vehicle Architecture", "Team Lead"],
    },
    {
      period: "2007–2017",
      company: "Siconnex Customized Solutions",
      role: "CAD Designer → Project Developer → Product Manager",
      description: "A decade in semiconductor equipment manufacturing. Progressed from CAD designer and service technician (2007–2013) to project developer with global technical sales responsibility (2013–2016), then product manager (2016–2017). Evaluated new processes, defined equipment specifications, accompanied customer projects worldwide. Requirements management, interface between management/engineering/production/sales. International presentations at semiconductor trade shows and symposia.",
      tags: ["Semiconductor", "Product Management", "Global Sales", "CAD", "Technical Sales"],
    },
    {
      period: "2013–present",
      company: "WIFI Salzburg",
      role: "Technical Trainer",
      description: "Part-time instructor for electrical drives and physics.",
      tags: ["Teaching", "Electrical Drives", "Physics"],
    },
  ],

  projects: [
    {
      name: "Kubikos — Fitness Sensorics Platform",
      type: "Founder",
      description: "Patented end-to-end IoT product: K-FORCE PRO sensors (0.1 kg precision, 3-tonne rated, patented magnetic distance sensor) digitise analogue gym equipment. KUBIKO Chip with patented sensor fusion algorithm achieves 99% accuracy (validated with Paris Lodron University Salzburg). Flutter app (v177+), TypeScript backend, FIT CLOUD B2B platform for manufacturers and gyms. Partnered with Hammer Sport AG. Piloting with FITINN. FFG-funded energy harvesting R&D. Exhibited at FIBO 2024/25 and ISPO Munich 2022.",
      tags: ["Flutter", "nRF52840", "C++ Firmware", "AWS", "BLE", "Kalman Filter", "TypeScript", "Patent"],
      url: "https://kubikos.net",
    },
    {
      name: "EG Energiemanager — WebTec",
      type: "Kubikos product",
      description: "Mobile app for Austrian Erneuerbare-Energie-Gemeinschaften (EEG), built for WebTec. Real-time display of available community energy, consumption optimisation, and hardware configuration. Features ML-based PV generation nowcasting using Open-Meteo weather data and EEG billing API integration. Available on App Store and Google Play. Startup Salzburg FACTORY+ 2025 (Energiemaker track).",
      tags: ["Flutter", "Modbus TCP", "PV Systems", "EEG API", "ML Nowcasting"],
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
      description: "Next-generation platform unifying multiple applications: Felix (hotel management), Topas (medical/clinic management), and Vagus (patient app) into a single architecture. Partial team lead. Responsible for LLM routing architecture (Gateway Lambda, AWS Bedrock, multi-provider evaluation), MCP server development, and AI-powered automation workflows.",
      tags: ["LLM Routing", "AWS Bedrock", "TypeScript", "MCP Servers", "n8n", "Ruby on Rails"],
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
      items: ["Claude API", "Claude Opus", "MCP Servers", "AWS Bedrock", "Google Gemini", "Veo3", "RAG", "n8n", "LLM Gateway Routing"],
      context: "Built and published MCP servers (Redmine MCP in Python, this profile MCP in TypeScript on npm). LLM gateway architecture with deterministic routing (AWS Bedrock, Claude, Gemini multi-provider). AI-powered exercise creation pipeline: auto-generated descriptions, images (Gemini), and videos (Veo3). Training plan generator (Claude Opus). Exercise research tool for automated knowledge extraction. RAG-based FAQ automation for clinic support. ML-based PV energy nowcasting. Active Claude Code and Cursor user since 2024. AI tooling champion at GMS — driving adoption across the engineering team.",
    },
    industrial: {
      title: "Industrial Automation",
      items: ["Simatic S7 TIA Portal", "B&R Automation Studio 4", "Beckhoff TwinCAT 2 & 3"],
      context: "10 years in semiconductor equipment and industrial automation. Control system design and commissioning.",
    },
    languages: {
      title: "Programming Languages",
      items: ["TypeScript", "JavaScript", "Python", "Dart", "C", "C++", "Java", "Assembler", "LaTeX"],
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
    universityValidation: "99% sensor accuracy validated with Paris Lodron University Salzburg",
    startupPrograms: [
      "Startup Salzburg SHAPE",
      "Startup Salzburg FACTORY #6 (alumnus)",
      "Startup Salzburg FACTORY+ 2025 (Energiemaker/WebTec track)",
      "Startup Salzburg Investors Lounge (winner)",
      "Startup World Cup 2025 (participant)",
    ],
    tradeShows: [
      "ISPO Munich 2022 (exhibitor)",
      "FIBO 2024 Cologne (launched with Hammer Sport AG)",
      "FIBO 2025 (Hammer Sport AG booth)",
      "FIBO 2026 (Austrian joint booth, coordinating via Innovation Salzburg)",
      "Reha-Kolloquium 2026 Leipzig (GMS booth, presented VagusApp + Yuna AI robot)",
    ],
    partnerships: [
      "Hammer Sport AG — first major partner, integrated sensors into premium home fitness line (50 sensors sold)",
      "FITINN — pilot deployment and active business development",
      "Gym80 — prototyping partnership (received STEP files Dec 2025)",
      "BH Fitness — presentation and evaluation",
      "xdevelop — PCB/electronics development partner (PV foil, custom PCB design)",
      "WebTec — technical partner for EG Energiemanager (E2S API, SMA-EEG integration)",
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

  whyAnthropic: {
    targetRoles: [
      {
        role: "Forward Deployed Engineer, Applied AI",
        fitSummary: "Thomas brings a rare combination: technical founder who has built and shipped end-to-end products (hardware to cloud), deep customer-facing deployment experience across DACH, and hands-on MCP/Claude ecosystem experience — including building this very MCP server and production AI pipelines with Claude Opus, Gemini, and Veo3.",
        requirementMapping: [
          {
            requirement: "3-4+ years in a technical, customer-facing role or former technical founder",
            fit: "5+ years as technical founder (Kubikos) AND freelance engineer deploying software at dozens of DACH customer sites. 'Former technical founder' describes Thomas perfectly. Before that: 3.5 years leading engineering teams at BEKO, 10 years at Siconnex with global technical sales.",
          },
          {
            requirement: "Production experience with LLMs, prompt engineering, agent development",
            fit: "Built production AI pipelines: exercise creator (Gemini + Veo3), training plan generator (Claude Opus), exercise research tool, RAG-based FAQ chatbot. Designed LLM gateway architecture with deterministic routing (AWS Bedrock, multi-provider). Built and published MCP servers. AI tooling champion at GMS.",
          },
          {
            requirement: "Strong programming skills, Python + ideally TypeScript/Java",
            fit: "Ships production code daily in TypeScript, Dart/Flutter, Python, C/C++, Java, Ruby. 3 published apps on App Store & Google Play. Full IoT stack from firmware to cloud.",
          },
          {
            requirement: "Build production applications with Claude, deliver MCP servers, sub-agents, agent skills",
            fit: "Published MCP server on npm (thomas-klaushofer-mcp). Built Redmine MCP in Python. Drove company MCP monorepo at GMS. Training plan generator built on Claude Opus. This MCP server itself demonstrates the skill.",
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
            fit: "Production LLM pipelines (Claude Opus, Gemini, Veo3). MCP servers published on npm. LLM gateway architecture with deterministic routing. RAG systems. n8n automation.",
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
            fit: "Founded and runs Kubikos GmbH since 2021. Startup Salzburg SHAPE, FACTORY, FACTORY+ alumnus. FitTech Club member. Lives the startup life daily.",
          },
          {
            requirement: "Software engineering or technical founder background (strong builder credibility)",
            fit: "Built entire IoT product end-to-end: hardware sensors, C++ firmware, Flutter app (v177+), TypeScript backend, AI content pipeline. Patent holder. FFG grant recipient.",
          },
          {
            requirement: "Hands-on production experience with LLM applications",
            fit: "Production AI pipelines: exercise creator (Gemini + Veo3), training plan generator (Claude Opus), exercise research tool. LLM gateway architecture. Published MCP server. RAG systems.",
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
      "AI content pipeline builder — production use of Claude Opus, Gemini, and Veo3 for automated content creation",
      "Published MCP server on npm — demonstrates the exact skill Anthropic's FDE role requires",
      "MLBT master (Legal & Business Aspects in Technology) — relevant for enterprise AI deployments with compliance",
      "Healthcare IT expertise — HL7, rehabilitation clinics, patient apps (directly relevant to Beneficial Deployments)",
      "Teaching experience — WIFI Salzburg trainer since 2013, can translate complex AI concepts for diverse audiences",
      "Startup ecosystem native — FACTORY alumnus, Investors Lounge winner, Startup World Cup, FitTech Club",
      "German native speaker, English C2, Russian B2 — rare language combination for DACH market coverage",
    ],
  },
};
