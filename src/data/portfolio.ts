export const profile = {
  name: "Muhammad Sohail",
  shortName: "Sohail",
  role: "Full Stack Developer",
  image: "/profile.png",
  tagline:
    "I build scalable web apps with React, Next.js, Node.js,AWS Services, and NestJS AI assistants.",
  location: "North Karachi, Pakistan",
  email: "m.sohailaqeel@gmail.com",
  phone: "+92 343 5395698",
  github: "https://github.com/sohailkhan122",
  linkedin: "https://www.linkedin.com/in/muhammad-sohail-671533295/",
  resume: "/Muhammad_Sohail_Resume.pdf",
  summary:
    "Full Stack Developer experienced in building scalable web applications using React, Next.js, Node.js, and NestJS. Skilled in REST APIs, AWS services, real-time systems, and LLM integrations — focused on clean code and responsive, user-friendly products.",
};

export const experiences = [
  {
    company: "Computing Yard",
    role: "MERN Stack Developer",
    period: "Present",
    type: "Full-time",
    points: [
      "Building and shipping production web applications with the MERN stack.",
      "Developing secure authentication and role-based access with AWS Cognito.",
      "Delivering responsive dashboards for Admin, Dispatcher, Driver, People, and Customer roles.",
    ],
  },
  {
    company: "Inciter Tech",
    role: "Freelance Frontend Developer",
    period: "2024 — 2025",
    type: "Freelance",
    points: [
      "Developed a TMS platform for transportation and drayage operations (live at freightop.io).",
      "Built real-time driver tracking with Google Maps and Socket.io.",
      "Implemented role-based authentication, permissions, and multi-role dashboards.",
    ],
  },
  {
    company: "Freelance",
    role: "MERN Stack Training & Projects",
    period: "2023 — 2024",
    type: "Training",
    points: [
      "Completed professional MERN Stack training with hands-on MongoDB, Express, React, and Node.js.",
      "Built responsive Next.js and React apps with REST API integrations.",
      "Practiced reusable components, clean architecture, and maintainable frontend patterns.",
    ],
  },
];

export const education = [
  {
    school: "Emaan Institute of Management & Sciences",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    period: "Expected 2026",
  },
  {
    school: "Intermediate",
    degree: "Higher Secondary Education",
    period: "2020",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs", "Socket.io"],
  },
  {
    title: "Data & Cloud",
    items: ["MongoDB", "AWS", "Google Cloud", "Firebase", "JWT / Cognito"],
  },
  {
    title: "UI & Automation",
    items: ["Ant Design", "Material UI", "n8n", "LLM Integration"],
  },
];

export type Project = {
  id: string;
  title: string;
  category: "client" | "practice";
  liveUrl: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "freightoperator",
    title: "FreightOperator",
    category: "client",
    liveUrl: "https://freightop.io/",
    image: "/projects/freightoperator.png",
    summary:
      "End-to-end TMS for freight and drayage carriers — dispatch, drivers, containers, documents, and billing in one place.",
    description:
      "Client product for Inciter Tech. FreightOperator helps carriers run trucking operations from a single connected platform: load dispatch, driver and container management, document tracking, customer billing, and live operational visibility. The marketing site and product experience emphasize clarity for freight teams that need speed and reliability.",
    highlights: [
      "Live production domain: freightop.io",
      "Multi-role dashboards for operations teams",
      "Real-time tracking concepts with Maps + sockets",
      "Role-based auth and permissioned workflows",
    ],
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Socket.io",
      "AWS Cognito",
      "Google Maps",
    ],
  },
  {
    id: "computing-yard-assistant",
    title: "Computing Yard Assistant",
    category: "practice",
    liveUrl: "https://computing-yard-chatbot.vercel.app/",
    image: "/projects/computing-yard.png",
    summary:
      "Company knowledge chatbot that answers services, contact, and project questions for Computing Yard.",
    description:
      "A conversational assistant that surfaces Computing Yard’s service catalog — dedicated teams, QA, UI/UX revamp, web and mobile development, and chatbot builds — plus office contact details. Built as a practice product to explore chatbot UX, structured replies, and clean chat UI patterns.",
    highlights: [
      "Service-aware Q&A for web, mobile, QA, and chatbots",
      "Clean message bubbles with online status and reset chat",
      "Deployed on Vercel as a live demo",
    ],
    stack: ["Next.js", "Node.js", "Dialogflow / Lex concepts", "Vercel"],
  },
  {
    id: "daraz-ai-chatbot",
    title: "Daraz AI Chatbot",
    category: "practice",
    liveUrl: "https://daraz-ai-chatbot.vercel.app/",
    image: "/projects/daraz-ai.png",
    summary:
      "Product assistant that searches Daraz first, then falls back to related listings when needed.",
    description:
      "Practice project combining Gemini with Daraz product search. Users ask naturally for products; the assistant prioritizes exact matches and returns related listings when an exact hit is missing. Focused on LLM + e-commerce search UX, mobile-friendly chat layout, and clear result messaging.",
    highlights: [
      "Gemini + Daraz product search flow",
      "Exact-match-first with related fallback",
      "Dark, mobile-friendly chat experience",
    ],
    stack: ["Next.js", "Google Gemini", "REST APIs", "Tailwind CSS", "Vercel"],
  },
  {
    id: "voice-beyond-silence",
    title: "Voice Beyond Silence",
    category: "practice",
    liveUrl: "https://fyp-client-mu.vercel.app/",
    image: "/projects/voice-beyond-silence.png",
    summary:
      "AI-powered sign language recognition FYP that turns signs into speech for accessible communication.",
    description:
      "Final Year Project client experience for real-time sign language recognition. The product aims to bridge communication gaps for the deaf and hard-of-hearing community — detect signs, surface recognition feedback, and speak results via text-to-speech. Showcases accessibility-first UI and AI/CV integration on the web.",
    highlights: [
      "Real-time sign language recognition concept",
      "32+ signs with high accuracy messaging",
      "Accessible, friendly landing + product flow",
    ],
    stack: ["Next.js", "Computer Vision / AI", "Text-to-Speech", "Vercel"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
