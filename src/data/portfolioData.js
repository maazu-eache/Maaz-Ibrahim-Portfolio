export const personalData = {
  name: "Maaz Ibrahim",
  role: "Full Stack & React Native Developer",
  shortHeroPitch: "Building scalable web and mobile applications with MERN Stack and React Native — from intuitive interfaces and REST APIs to authentication, payments, and production-ready solutions.",
  status: "Available for Hire & Projects",
  company: {
    name: "SAFPRO Technology Solutions",
    url: "https://www.safprotech.com",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: "Developing scalable, high-performance web and mobile applications with MERN stack and React Native, delivering production-ready client platforms."
  },
  bio: "Full Stack Developer with 2+ years of experience building scalable web and mobile applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and React Native. Experienced in developing responsive interfaces, RESTful APIs, authentication, role-based access control, payment integrations, and production-ready applications for web, iOS, and Android.",
  aboutParagraphs: [
    "I specialize in building modern web and mobile applications from frontend to backend. My experience includes developing responsive React applications, cross-platform React Native apps, Node.js APIs, MongoDB databases, authentication systems, payment workflows, and role-based platforms.",
    "I focus on writing clean, maintainable code, creating intuitive user experiences, solving complex technical issues, and delivering reliable applications that are ready for real-world use."
  ],
  email: "maazibrahimoo0@gmail.com",
  phone: "+91 8428676150",
  location: "India / Remote",
  resumeUrl: "/Resume.pdf",
  stats: [
    { label: "Years Experience", value: "2+", icon: "Briefcase" },
    { label: "Featured Projects", value: "5", icon: "Layers" },
    { label: "Platforms", value: "Web, iOS & Android", icon: "Smartphone" },
    { label: "Published Apps", value: "Google Play", icon: "Play" }
  ]
};

export const educationData = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Islamiah College (Autonomous)",
    location: "Vaniyambadi",
    period: "2020 – 2023",
    description: "Core foundation in algorithms, data structures, software engineering, database management, and computer programming."
  }
];

export const coreExpertiseData = [
  {
    category: "Frontend",
    icon: "Layout",
    color: "#2563eb",
    skills: ["React.js", "React Native", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    category: "Backend",
    icon: "Server",
    color: "#4f46e5",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Database",
    icon: "Database",
    color: "#059669",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "Mobile",
    icon: "Smartphone",
    color: "#0891b2",
    skills: ["React Native", "iOS", "Android"]
  },
  {
    category: "Authentication",
    icon: "ShieldCheck",
    color: "#d97706",
    skills: ["JWT", "Role-Based Access Control (RBAC)"]
  },
  {
    category: "Payments",
    icon: "CreditCard",
    color: "#e11d48",
    skills: ["Stripe", "PayPal", "Razorpay"]
  },
  {
    category: "Tools",
    icon: "Wrench",
    color: "#7c3aed",
    skills: ["Git", "GitHub", "Postman", "Firebase"]
  }
];

export const projectsData = [
  {
    id: "telework-bridge",
    title: "TeleworkBridge",
    subtitle: "Freelance Marketplace",
    category: "Web & Full Stack",
    tagline: "Freelance platform connecting clients and freelancers with role-based workflows, payment integration, and REST APIs.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "PayPal", "Bootstrap"],
    highlights: [
      "Built a responsive platform for freelancers and clients with clean component-driven architecture.",
      "Created reusable React components and role-based user navigation flows.",
      "Developed backend REST APIs using Node.js & Express with MongoDB for scalable data storage.",
      "Integrated secure multi-gateway payment flows (Stripe & PayPal) with transaction status feedback."
    ],
    architecture: {
      frontend: "React.js with modular component hierarchy, custom responsive styling, and role-based view routing.",
      backend: "Node.js & Express RESTful services managing user profiles, contracts, and milestone agreements.",
      database: "MongoDB collections structuring users, job listings, contracts, and payment transactions.",
      security: "JWT authentication with strict permission boundaries separating client and freelancer capabilities."
    },
    metrics: [
      { label: "Type", value: "Marketplace" },
      { label: "Architecture", value: "MERN Stack" },
      { label: "Payments", value: "Stripe & PayPal" }
    ]
  },
  {
    id: "xlim-connect",
    title: "Xlim-Connect",
    subtitle: "Order & Inventory Management",
    category: "Enterprise",
    tagline: "Management platform for orders, users, and inventory with role-based access and backend API integration.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "Bootstrap"],
    highlights: [
      "Built a responsive application for order, user, and inventory management.",
      "Created reusable React components with clean, predictable state handling.",
      "Developed backend APIs using Node.js and MongoDB for batch order and stock tracking.",
      "Implemented role-based access (RBAC) to strictly control features and sensitive views."
    ],
    architecture: {
      frontend: "Reactive React dashboards with data grids, instant stock updates, and interactive filters.",
      backend: "High-throughput Node.js API endpoints handling inventory mutations and order workflows.",
      database: "MongoDB schema design optimized for rapid catalog indexing and warehouse tracking.",
      security: "Granular Role-Based Access Control (RBAC) governing admin, warehouse, and operational tiers."
    },
    metrics: [
      { label: "Type", value: "Enterprise ERP" },
      { label: "Focus", value: "Order & Stock" },
      { label: "Security", value: "Granular RBAC" }
    ]
  },
  {
    id: "mommas-kitchen",
    title: "Momma's Kitchen",
    subtitle: "Food Ordering Platform",
    category: "Web & Mobile",
    tagline: "Web and mobile food platform developed with React.js and React Native, including ongoing optimization, bug fixing, and backend integration.",
    techStack: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Developed cross-platform food ordering interfaces across web (React) and mobile (React Native).",
      "Resolved UI and functional issues across web and mobile through effective debugging and problem-solving.",
      "Refactored existing React components to improve stability, rendering performance, and state flow.",
      "Supported backend fixes and data handling using Node.js and MongoDB."
    ],
    architecture: {
      frontend: "Shared component and business logic across React web app and React Native mobile application.",
      backend: "Node.js & Express order management pipeline connecting customers, kitchens, and deliveries.",
      database: "MongoDB dynamic menu collections, customer preference documents, and real-time order receipts.",
      performance: "Rigorous component refactoring eliminating redundant re-renders and improving mobile fluidity."
    },
    metrics: [
      { label: "Platforms", value: "Web & Mobile" },
      { label: "Stack", value: "React + React Native" },
      { label: "Focus", value: "Optimization & APIs" }
    ]
  },
  {
    id: "dkgold",
    title: "DKGold",
    subtitle: "Jewelry Management & Chit Platform",
    category: "Fintech & Mobile",
    tagline: "Web and mobile platform featuring merchant management, chit plans, subscriptions, payments, and role-based access.",
    techStack: ["React.js", "React Native", "Node.js", "MongoDB", "Bootstrap", "Payment Gateways"],
    highlights: [
      "Developed an end-to-end merchant and user management platform for web and mobile.",
      "Enabled jewelry merchants to configure, monitor, and manage monthly chit investment schemes.",
      "Built seamless user flows for browsing, selecting, and subscribing to monthly chit plans.",
      "Implemented role-based access and views ensuring privacy for merchants and clarity for customers."
    ],
    architecture: {
      frontend: "Multi-step subscription wizard, investment calculator, and mobile-friendly merchant dashboards.",
      backend: "Node.js financial calculation engine computing installment cycles, maturity bonuses, and payout triggers.",
      database: "MongoDB schemas structuring merchant ledgers, customer enrollments, and recurring payments.",
      security: "Distinct role-based security preserving merchant confidentiality while enabling customer self-service."
    },
    metrics: [
      { label: "Type", value: "Jewelry Fintech" },
      { label: "Platforms", value: "Web + React Native" },
      { label: "Core Feature", value: "Chit Plan Subscriptions" }
    ]
  },
  {
    id: "scoreverse",
    title: "ScoreVerse",
    subtitle: "Sports & Turf Management Platform",
    category: "Mobile (Published)",
    badge: "Published on Google Play",
    tagline: "React Native sports platform for turf booking, live scoring, tournaments, teams, fixtures, and player statistics, published on Google Play.",
    techStack: ["React Native", "iOS & Android", "Node.js", "Express.js", "MongoDB", "MySQL", "Google Play"],
    highlights: [
      "Engineered a comprehensive sports platform with turf booking, real-time match scoring, and tournament management.",
      "Built native mobile user flows for creating teams, scheduling fixtures, and viewing live player statistics.",
      "Implemented reliable backend integrations for booking slots, match status tracking, and player stats calculation.",
      "Successfully deployed and published the production application on the Google Play Store."
    ],
    architecture: {
      frontend: "High-performance React Native mobile architecture with smooth screen transitions, tournament trees, and live scoreboards.",
      backend: "Node.js & Express RESTful services orchestrating real-time score updates, slot bookings, and team rosters.",
      database: "Optimized database layer handling tournament fixtures, player career metrics, and turf scheduling.",
      deployment: "Production release on Google Play Store adhering to Android guidelines, app signing, and release pipelines."
    },
    metrics: [
      { label: "Store", value: "Google Play" },
      { label: "Platform", value: "React Native (iOS & Android)" },
      { label: "Key Features", value: "Turf Booking & Live Scoring" }
    ]
  }
];

export const languagesData = [
  { name: "English", level: "Professional Working Proficiency", flag: "🇬🇧", score: 95 },
  { name: "Urdu", level: "Native / Bilingual Proficiency", flag: "🇵🇰", score: 100 },
  { name: "Tamil", level: "Professional Working Proficiency", flag: "🇮🇳", score: 90 },
  { name: "Hindi", level: "Professional Working Proficiency", flag: "🇮🇳", score: 90 }
];
