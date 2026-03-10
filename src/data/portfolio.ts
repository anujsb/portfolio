export type Personal = {
    name: string;
    title: string;
    tagline: string;
    about: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
    resume: string;
  };
  
  export type Project = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    live: string;
    github: string;
    image: string;
    featured: boolean;
    year: string;
  };
  
  export type SkillGroup = {
    category: string;
    items: string[];
  };
  
  export type ExperienceProject = {
    name: string;
    description: string;
    tech: string[];
    github: string;
  };
  
  export type Experience = {
    company: string;
    role: string;
    period: string;
    location: string;
    projects: ExperienceProject[];
  };
  
  export const personal: Personal = {
    name: "Anuj S. Bhuyar",
    title: "Full Stack Developer",
    tagline: "Building web apps & AI tools that actually solve problems.",
    about:
      "Hey, I'm Anuj. I build web apps and AI tools that actually solve problems, not just sit on a server. I love tinkering with new tech, figuring out clever ways to make things work, and turning ideas into products people enjoy using. When I'm not coding, I'm probably learning something new or thinking about my next project.",
    email: "anujsbhuyar@gmail.com",
    github: "https://github.com/anujsb",
    linkedin: "https://linkedin.com/in/anujbhuyar",
    twitter: "https://x.com/anujsbhuyar",
    resume: "#", // replace with actual PDF link
  };
  
  export const projects: Project[] = [
    {
      id: "stockamplify",
      title: "StockAmplify",
      subtitle: "AI-Powered Stock Research Platform",
      description:
        "An AI-powered stock research and portfolio management platform that helps investors track holdings, get insights, and make data-driven decisions. Built as a full-stack SaaS with scalable frontend and backend architecture.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Yahoo Finance API", "LLM Integration"],
      live: "https://stockamplify.com",
      github: "https://github.com/anujsb/stockapp4",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      featured: true,
      year: "2024",
    },
    {
      id: "ai-form-builder",
      title: "AI Form Builder",
      subtitle: "AI-Powered Dynamic Form Generation SaaS",
      description:
        "A SaaS platform that enables users to automatically generate intelligent forms, collect structured responses, and extract meaningful insights through AI-driven summarization and response categorization.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Clerk", "LLM Integration", "Tailwind CSS"],
      live: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      featured: true,
      year: "2024",
    },
    {
      id: "ai-receptionist",
      title: "AI Receptionist",
      subtitle: "Voice-Powered AI Receptionist",
      description:
        "A voice-powered AI receptionist built with LiveKit that handles real-time conversations, routes queries, and provides seamless customer interactions with low latency audio streaming.",
      tech: ["Next.js", "TypeScript", "LiveKit", "LLM Integration", "Vercel"],
      live: "https://ai-receptionist-livekit.vercel.app/",
      github: "https://github.com/anujsb/ai-receptionist-livekit",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
      featured: false,
      year: "2024",
    },
    {
      id: "customer-care-bot",
      title: "Customer Care Bot",
      subtitle: "Dual-Interface AI Support Studio",
      description:
        "A dual-interface AI customer support platform serving both customers and support agents from a single AI backend — a customer-facing chatbot and a dedicated agent workspace, both powered by the same underlying model.",
      tech: ["Next.js", "React", "TypeScript", "LLM Integration", "Vercel"],
      live: "https://cms-agent3.vercel.app",
      github: "https://github.com/anujsb/cms-agent3",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      featured: false,
      year: "2024",
    },
  ];
  
  export const skills: SkillGroup[] = [
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs", "FastAPI (Python)"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Database Design"] },
    { category: "AI & Integrations", items: ["LLM Integration", "AI Agents", "LiveKit", "Twilio", "Chatbot Dev", "Workflow Automation"] },
    { category: "Learning", items: ["Solana", "Rust"] },
  ];
  
  export const experience: Experience[] = [
    {
      company: "Atos",
      role: "Full Stack Developer Intern",
      period: "2024",
      location: "Remote",
      projects: [
        {
          name: "Foreign Travel Request Portal",
          description:
            "A web-based system for employees to submit and track onsite travel and visa requests. Built document upload/management, role-based access for Employees, Managers & Finance, approval workflows, and REST APIs for request tracking.",
          tech: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "TypeScript"],
          github: "https://github.com/anujsb/visa_portal",
        },
        {
          name: "SmartChat — CMS Agent",
          description:
            "Extended an existing knowledge-base chatbot to support AI-based real-time customer service actions: order management, invoice explanation, service renewals, support ticket creation, and escalation to live agents.",
          tech: ["Node.js", "TypeScript", "ML Ops"],
          github: "https://github.com/anujsb/cms-agent4",
        },
      ],
    },
  ];