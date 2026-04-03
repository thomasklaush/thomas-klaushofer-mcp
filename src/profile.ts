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
      description: "Founded and lead all technical and business development of a patented IoT fitness sensor platform. Built end-to-end: custom hardware sensors (PCB design, 3D printing, reflow soldering), nRF52840 C++ firmware with patented sensor fusion algorithm (99% accuracy, validated with Paris Lodron University Salzburg), Flutter mobile app (v177+, App Store & Google Play), TypeScript backend, and FIT CLOUD B2B platform. German patent holder (DE 112021007607.8). Partnered with Hammer Sport AG (50 sensors sold); piloting with FITINN gym chain; prototyping with Gym80. FFG grant recipient for In Situ Energy Harvesting research. Also developed EG Energiemanager app for WebTec (renewable energy communities). Startup Salzburg FACTORY alumnus, Investors Lounge winner, Startup World Cup 2025 participant. Exhibited at FIBO 2024/25/26 and ISPO Munich 2022.",
      tags: ["Patent Holder", "Firmware", "Flutter", "AWS", "IoT", "Product Strategy", "FFG Funded"],
    },
    {
      period: "2018–present",
      company: "Sport Performance Systems e.U.",
      role: "Owner & Freelance Software Engineer",
      description: "Independent consultancy specialising in complex, cross-disciplinary systems. Long-term client GMS-Salzburg: building and deploying healthcare IT (VagusApp, Vagus Quest), hotel management (Felix, Check-In App), and hospitality software across dozens of DACH locations including Lanserhof Sylt, Eltern-Kind-Kliniken, Eurotherme, and many more. Full lifecycle from development through on-site installation, training, and ongoing support. Built custom MCP servers and AI automation tooling for the team. Presented VagusApp and Yuna (AI clinic robot) at Reha-Kolloquium 2026 Leipzig. AI tooling champion internally — driving adoption of Claude, Cursor, MCP servers, and n8n automation.",
      tags: ["Flutter", "HL7", "AWS", "Firebird DB", "MCP Servers", "AI Tooling", "Customer Success"],
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
      name: "Check-In App — Digital Hotel & Clinic Check-In",
      type: "Freelance (GMS-Salzburg)",
      description: "Digital guest check-in system deployed at dozens of hotels and clinics across DACH: Lanserhof Sylt, Hotel Sallerhof, ÖBB Bildungshaus Wien, Mörwald Betriebe, and many more. Features passport/ID scanning, Austrian Meldewesen integration, group check-in, companion handling, and multilingual UI. Full lifecycle including installation, training, and ongoing support.",
      tags: ["Flutter", "Firebird DB", "Passport Scanning", "Meldewesen", "Multi-language"],
    },
    {
      name: "Vagus Quest — Rehabilitation Clinics",
      type: "Freelance (GMS-Salzburg)",
      description: "Digital questionnaire and document management system for rehabilitation clinics across Germany. Deployed at Klinik am See, Sonnenhof, Zauberwald, ETI, and Eltern-Kind-Kliniken (Nordsee, Ostsee, Sylt, and more). Deep HL7 ADT/SIU integration with hospital information systems, Vagus Connector (Delphi, Samba shares), alarm chains, RAG-based FAQ chatbot. Presented at Reha-Kolloquium 2026 Leipzig alongside Yuna AI clinic robot.",
      tags: ["Flutter", "HL7 ADT/SIU", "Firebird", "AWS Amplify", "Delphi", "RAG", "Mixpanel"],
    },
    {
      name: "Felix — Hotel Management System",
      type: "Freelance (GMS-Salzburg)",
      description: "Comprehensive hotel and hospitality management system with Firebird database backend. Guest management, check-in/check-out logic, parent-child clinic structures, appointment scheduling via HL7, Loxone smart-home integration (room status/reset), Salto door access control (UDP), and Seekda channel manager interfaces.",
      tags: ["AWS Amplify", "Firebird DB", "HL7", "Ruby on Rails", "Loxone", "Salto UDP"],
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
      title: "AI & Analytics",
      items: ["Claude API", "MCP Servers", "AWS Bedrock", "Google Gemini", "RAG", "n8n", "Mixpanel", "Sentry"],
      context: "Built MCP servers (Redmine MCP in Python, this profile MCP in TypeScript). RAG-based FAQ automation. ML-based PV nowcasting. LLM gateway architecture. Active Claude Code and Cursor user since 2024.",
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
    targetRole: "Forward Deployed Engineer, Applied AI",
    fitSummary: "Thomas brings a rare combination for the German-speaking FDE role: technical founder who has built and shipped end-to-end products (hardware to cloud), deep customer-facing deployment experience across DACH, and hands-on MCP/Claude ecosystem experience — including building this very MCP server.",
    requirementMapping: [
      {
        requirement: "Native or C1 German speaker with fluent English",
        fit: "German native speaker, English C2, plus Russian B2. One of the strongest filters — most FDE candidates worldwide don't qualify. Thomas does.",
      },
      {
        requirement: "4+ years in a technical, customer-facing role (FDE, Software Engineer with consulting experience, or former technical founder)",
        fit: "5+ years as technical founder (Kubikos) AND freelance engineer deploying software at dozens of DACH customer sites. 'Former technical founder' describes Thomas perfectly. Before that: 3.5 years leading engineering teams at BEKO, 10 years at Siconnex with global technical sales.",
      },
      {
        requirement: "Strong programming skills, proficiency in Python, ideally TypeScript/Java",
        fit: "Ships production code daily in TypeScript, Dart/Flutter, Python, C/C++, Java, Ruby. 3 apps on App Store & Google Play. Full IoT stack from firmware to cloud.",
      },
      {
        requirement: "Production experience with LLMs, prompt engineering, agent development",
        fit: "Active Claude user since Oct 2024. Built MCP servers (Redmine MCP in Python, this profile MCP in TypeScript). Designed LLM gateway architecture with deterministic routing. RAG-based FAQ automation for clinic support. AI tooling champion at GMS — driving adoption of Claude, Cursor, MCP servers, n8n automation, GitHub Copilot Spaces.",
      },
      {
        requirement: "Build production applications with Claude models, deliver MCP servers, sub-agents, agent skills",
        fit: "Literally building and shipping MCP servers right now. Drove creation of company MCP monorepo at GMS. Integrated Redmine MCP, built AI-powered workflows. This MCP server itself demonstrates the skill.",
      },
      {
        requirement: "Navigate ambiguity in complex organizations, high cooperation mindset",
        fit: "As founder, simultaneously manages own products (Kubikos, EG Energiemanager) and deploys software for GMS across complex healthcare and hospitality organisations. From Lanserhof luxury resorts to rehabilitation clinics — each with unique IT landscapes and integration requirements.",
      },
      {
        requirement: "Potential 25% travel to customer sites",
        fit: "Already travels regularly for on-site installations across DACH (Nordsee to Sylt to Salzburg). 25% travel is ideal.",
      },
    ],
    uniqueStrengths: [
      "Patent holder — demonstrates deep technical innovation, not just software development",
      "Hardware + software — can reason about the full stack from PCB to cloud, which is rare among software engineers",
      "MLBT master (Legal & Business Aspects in Technology) — relevant for enterprise AI deployments with compliance requirements",
      "Validated by university research — 99% sensor accuracy with Paris Lodron University shows scientific rigour",
      "Startup ecosystem immersion — FACTORY alumnus, Investors Lounge winner, Startup World Cup participant, FitTech Club member",
      "Teaching experience — WIFI Salzburg trainer since 2013, can translate complex technical concepts for diverse audiences",
    ],
  },
};
