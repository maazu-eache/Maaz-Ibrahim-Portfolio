export const personalData = {
  name: "Maaz Ibrahim",
  role: "Full Stack Developer",
  status: "Available for Hire & Projects",
  company: {
    name: "SAFPRO Technology Solutions",
    url: "https://www.safprotech.com",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: "Developing scalable, high-performance web and mobile applications with React, React Native, Node.js, and MongoDB, delivering client-facing digital platforms."
  },
  bio: "React developer with 3+ years of experience building scalable, responsive web applications with clean, efficient code and a strong focus on user experience.",
  email: "maaz.ibrahim.dev@gmail.com",
  location: "India / Remote",
  resumeUrl: "/Maaz_Resume.pdf",
  stats: [
    { label: "Years Experience", value: "3+", icon: "Briefcase" },
    { label: "Production Projects", value: "4+", icon: "Layers" },
    { label: "Core Technologies", value: "15+", icon: "Code" },
    { label: "Spoken Languages", value: "4", icon: "Globe" }
  ]
};

export const skillsData = [
  {
    category: "Full-Stack Development",
    icon: "Layers",
    color: "#2563eb",
    description: "End-to-end web & mobile architecture with modern JavaScript ecosystems.",
    skills: [
      { name: "React", level: 95, highlight: true },
      { name: "React Native", level: 90, highlight: true },
      { name: "Node.js", level: 92, highlight: true },
      { name: "Express.js", level: 90, highlight: false },
      { name: "Component-Based Architecture", level: 96, highlight: false },
      { name: "REST APIs", level: 94, highlight: false }
    ]
  },
  {
    category: "UI & Styling",
    icon: "Palette",
    color: "#0891b2",
    description: "Crafting pixel-perfect, responsive, and accessible user interfaces.",
    skills: [
      { name: "HTML5", level: 98, highlight: false },
      { name: "CSS3 / Modern CSS", level: 95, highlight: true },
      { name: "Bootstrap", level: 92, highlight: false },
      { name: "Responsive Design", level: 96, highlight: true }
    ]
  },
  {
    category: "State, Logic & Data Handling",
    icon: "Cpu",
    color: "#7c3aed",
    description: "Predictable application data flow and client-server synchronization.",
    skills: [
      { name: "State Management", level: 94, highlight: true },
      { name: "API Integration", level: 95, highlight: true },
      { name: "Form Handling", level: 92, highlight: false },
      { name: "Client-Side Validation", level: 92, highlight: false }
    ]
  },
  {
    category: "Backend & Database",
    icon: "Database",
    color: "#059669",
    description: "Performant server-side logic, data persistence, and indexing.",
    skills: [
      { name: "Server-Side Logic", level: 92, highlight: true },
      { name: "MongoDB", level: 90, highlight: true },
      { name: "Schema Design", level: 88, highlight: false },
      { name: "CRUD Operations", level: 95, highlight: false }
    ]
  },
  {
    category: "Authentication & Authorization",
    icon: "ShieldCheck",
    color: "#d97706",
    description: "Enterprise security standards, session control, and granular permission tiers.",
    skills: [
      { name: "JWT-based Authentication", level: 94, highlight: true },
      { name: "Role-Based Access Control (RBAC)", level: 92, highlight: true }
    ]
  },
  {
    category: "Payment Flow Integration",
    icon: "CreditCard",
    color: "#e11d48",
    description: "Fintech workflows with multi-currency gateways and automated status hooks.",
    skills: [
      { name: "PayPal & Stripe Integration", level: 92, highlight: true },
      { name: "Payment Status Handling", level: 90, highlight: true }
    ]
  },
  {
    category: "Other Skills",
    icon: "Sparkles",
    color: "#4f46e5",
    description: "Engineering rigor, problem solving, and production-grade maintenance.",
    skills: [
      { name: "Problem Solving", level: 95, highlight: true },
      { name: "Debugging", level: 94, highlight: true },
      { name: "Performance Optimization", level: 92, highlight: true },
      { name: "Clean Code Practices", level: 96, highlight: false }
    ]
  }
];

export const projectsData = [
  {
    id: "telework-bridge",
    title: "Telework Bridge",
    subtitle: "Freelancer & Client Platform",
    duration: "Ongoing 1.2-years Project",
    category: "Full Stack",
    tagline: "Scalable marketplace bridging freelancers and clients with role-based flows and secure payment processing.",
    techStack: ["React", "Bootstrap", "Node.js", "MongoDB", "PayPal & Stripe"],
    highlights: [
      "Built a simple and responsive platform for freelancers and clients.",
      "Created reusable React components and role-based user flows.",
      "Developed backend APIs using Node.js with MongoDB for data storage.",
      "Integrated payment flows with clear status and user feedback."
    ],
    architecture: {
      frontend: "React with modular reusable component hierarchy, responsive Bootstrap styling, and client-side form validations.",
      backend: "Node.js & Express RESTful services managing user profiles, contracts, and job milestones.",
      database: "MongoDB collections structuring users, job listings, contracts, and payment transactions.",
      security: "Role-based access control separating client and freelancer capabilities with JWT session tokens."
    },
    metrics: [
      { label: "Project Timeline", value: "1.2+ Years" },
      { label: "Core Architecture", value: "REST API + React" },
      { label: "Payments", value: "PayPal & Stripe" }
    ]
  },
  {
    id: "xlim-connect",
    title: "XLIM-CONNECT",
    subtitle: "Enterprise Order, User & Inventory Management",
    duration: "Ongoing 1-year Project",
    category: "Enterprise",
    tagline: "Operational management platform for high-volume orders, user permission governance, and inventory tracking.",
    techStack: ["React", "Bootstrap", "Node.js", "MongoDB", "RBAC"],
    highlights: [
      "Built a responsive application for order, user, and inventory management.",
      "Created reusable React components with simple and clean state handling.",
      "Developed backend APIs using Node.js and MongoDB.",
      "Implemented role-based access to control features and views."
    ],
    architecture: {
      frontend: "Fast reactive React dashboards with responsive data tables, clean state management, and real-time updates.",
      backend: "Scalable Node.js API endpoints handling inventory mutations and batch order processing.",
      database: "Structured MongoDB schemas with indexing for fast lookups across inventory catalogs.",
      security: "Granular Role-Based Access Control (RBAC) governing views for administrators, managers, and staff."
    },
    metrics: [
      { label: "Project Duration", value: "1 Year" },
      { label: "Domain", value: "Supply & Inventory" },
      { label: "Security", value: "Granular RBAC" }
    ]
  },
  {
    id: "mommas-kitchen",
    title: "MOMMAS KITCHEN",
    subtitle: "Food Ordering & Service Platform",
    duration: "Ongoing 10-months Project",
    category: "Mobile & Web",
    tagline: "Cross-platform web and mobile application for seamless food ordering with focus on stability and high performance.",
    techStack: ["React", "React Native", "Node.js", "MongoDB"],
    highlights: [
      "Resolved UI and functional issues across web and mobile through effective problem-solving.",
      "Fixed bugs and improved component logic and state handling.",
      "Refactored existing React components to improve stability and performance.",
      "Supported backend fixes and data handling using Node.js and MongoDB."
    ],
    architecture: {
      frontend: "Shared core component logic across React web app and React Native mobile application.",
      backend: "Node.js order processing backend connecting customer requests with status tracking.",
      database: "MongoDB collections structuring dynamic menus, customer accounts, and order history.",
      performance: "Component refactoring eliminating redundant re-renders and improving app stability."
    },
    metrics: [
      { label: "Project Duration", value: "10 Months" },
      { label: "Platforms", value: "Web & Mobile" },
      { label: "Focus", value: "Refactoring & Performance" }
    ]
  },
  {
    id: "jewel-app-aurum",
    title: "JEWEL APP (AURUM)",
    subtitle: "Chit Plans & Merchant Management",
    duration: "Ongoing 4-months Project",
    category: "Fintech",
    tagline: "Merchant and customer platform for creating, managing, and subscribing to monthly jewelry chit schemes.",
    techStack: ["React", "Bootstrap", "React Native", "Node.js", "MongoDB"],
    highlights: [
      "Developed a merchant and user management application for web and mobile.",
      "Enabled merchants to create and manage chit plans.",
      "Built user flows for browsing, selecting, and subscribing to monthly chit plans.",
      "Implemented role-based access and views for merchants and users."
    ],
    architecture: {
      frontend: "Responsive customer subscription flow, plan browsing wizard, and merchant administrative console.",
      backend: "Node.js financial logic processing monthly chit plan installments and maturity terms.",
      database: "MongoDB database structuring merchants, subscribers, and transaction records.",
      security: "Distinct role-based access ensuring merchant operational privacy while facilitating user self-service."
    },
    metrics: [
      { label: "Project Duration", value: "4 Months" },
      { label: "Domain", value: "Jewelry / Chit Plans" },
      { label: "Platforms", value: "Web + React Native" }
    ]
  }
];

export const languagesData = [
  { name: "English", level: "Professional Working Proficiency", flag: "🇬🇧", score: 95 },
  { name: "Urdu", level: "Native / Bilingual Proficiency", flag: "🇵🇰", score: 100 },
  { name: "Tamil", level: "Professional Working Proficiency", flag: "🇮🇳", score: 90 },
  { name: "Hindi", level: "Professional Working Proficiency", flag: "🇮🇳", score: 90 }
];
