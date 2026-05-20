import { site } from "./site";

export type Project = {
  title: string;
  company: string;
  period: string;
  position: string;
  teamSize: string;
  description: string;
  highlights: string[];
  stack: string[];
  href?: string;
  repo?: string;
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export type Education = {
  school: string;
  major: string;
  period: string;
  details: string[];
};

export type Stat = {
  label: string;
  value: string;
  note: string;
};

export type TechGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: site.name,
  role: site.role,
  location: site.location,
  tagline: site.tagline,
  intro:
    "My name is Chánh (born 2005). I am a Web Development student at FPT Polytechnic with a passion for Backend Development and modern web technologies. I have experience building personal fullstack projects using PHP Laravel, ReactJS, MySQL, and RESTful APIs. I enjoy learning new technologies, solving problems, and continuously improving my programming skills to become a professional Fullstack Developer.",
} as const;

export const stats: Stat[] = [
  {
    label: "Years of experience",
    value: "3+",
    note: "Production-focused frontend",
  },
  {
    label: "Delivered projects",
    value: "20+",
    note: "SaaS, landing pages, e-commerce",
  },
  {
    label: "Core stack",
    value: "React/Next",
    note: "TypeScript-first approach",
  },
];

export const education: Education[] = [
  {
    school: "FPT Polytechnic",
    major: "Web Development",
    period: "2023 - 2025",
    details: ["GPA: 3.5/4.0"],
  },
];

export const projects: Project[] = [
  {
    title: "Online Sushi Reservation System",
    company: "Green24H Technology Co., Ltd.",
    period: "05/2025 - 08/2025",
    position: "Back-End Developer",
    teamSize: "4 members",
    description:
      "Built a fullstack sushi reservation platform with booking management, authentication, and responsive user experience.",
    highlights: [
      "Developed RESTful APIs for reservations, authentication, and order management.",
      "Designed and optimized MySQL database relationships and query performance.",
      "Integrated booking workflow, reservation status tracking, and admin management features.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
    repo: "https://github.com/VanChanh93-hub/Online-Sushi-Reservation-System.git",
  },
  {
    title: "Real-time Chat Application",
    company: "ITECH System Integration Co., Ltd.",
    period: "01/2026 - 03/2026",
    position: "Full-Stack Developer",
    teamSize: "1 members",
    description:
      "Developed a real-time messaging platform with friend requests, conversations, and secure authentication.",
    highlights: [
      "Built authentication and authorization system using JWT.",
      "Developed friend request and private conversation features.",
      "Created responsive chat UI with reusable ReactJS components.",
      "Designed RESTful APIs for messaging and user management.",
      "Managed database structure for users, messages, and conversations.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "RESTful API",
      "Laravel",
      "MySQL",
      "Socket.IO",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    repo: "https://github.com/VanChanh93-hub/chatbox.git",
  },
  {
    title: "Todo Management Application",
    company: "SMAC Technology Investment and Development Co., Ltd.",
    period: "01/2026",
    position: "Full-Stack Developer",
    teamSize: "1 members",
    description:
      "Built a task management web application with clean UI and efficient task handling features.",
    highlights: [
      "Developed RESTful APIs for task management using Laravel.",
      "Built responsive and modern user interfaces with ReactJS and TailwindCSS.",
      "Implemented CRUD functionalities for creating, updating, deleting, and managing tasks.",
      "Improved user experience with responsive layouts and clean UI design.",
    ],
    stack: ["React.js", "TailwindCSS", "MySQL", "RESTful API"],
    repo: "https://github.com/VanChanh93-hub/Todo-App.git",
  },
];

export const techGroups: TechGroup[] = [
  {
    title: "Programming Languages",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Frontend Core",
    items: ["React", "Component Architecture"],
  },
  {
    title: "Backend Core",
    items: ["Laravel", "REST API", "JWT Authentication", "oAuth2"],
  },
  {
    title: "UI Engineering",
    items: ["Tailwind CSS", "Shadcn/UI", "Responsive UI", "Lucide UI"],
  },
  {
    title: "Database & State",
    items: ["React Query", "Zustand", "MySQL"],
  },
  {
    title: "Testing, Tooling",
    items: [
      "Git/GitHub",
      "Vercel",
      "ESLint",
      "Prettier",
      "GitHub Copilot",
      "Postman",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Green24H Technology Co., Ltd.",
    title: "Front-End Developer",
    period: "3/2025 - 2/2026",
    summary:
      "Developed a green e-commerce platform for eco-friendly products, building and maintaining the frontend with Next.js focused on performance and user experience.",
    bullets: [
      "Built responsive UI components with Next.js and TypeScript.",
      "Integrated RESTful APIs for product listing, cart, order management, and authentication.",
      "Optimized page performance using Next.js SSR/SSG strategies.",
      "Translated Figma designs into pixel-perfect interfaces.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "RESTful API"],
  },
  {
    company: "ITECH System Integration Co., Ltd.",
    title: "Front-End Developer (Freelancer)",
    period: "6/2025 - 2/2026",
    summary:
      "Developed a container yard management system for HMM Tan Cang, building the frontend interface for complex logistics and warehouse operations.",
    bullets: [
      "Built responsive UI components with Next.js and TypeScript.",
      "Integrated RESTful APIs for real-time data display and warehouse operations.",
      "Developed responsive, data-heavy interfaces optimized for operational use.",
      "Collaborated with backend team to ensure smooth API integration and data flow.",
    ],
    stack: ["Vue.js", "RESTful API"],
  },
  {
    company: "SMAC Technology Investment and Development Co., Ltd.",
    title: "Front-End Developer",
    period: "Present",
    summary:
      "Developed a chain-based dental clinic management system, building the frontend interface for complex healthcare and operational workflows across multiple clinic branches.",
    bullets: [
      "Built and maintained UI components for patient management, appointment scheduling, and clinic operations.",
      "Implemented complex data tables and forms using Ant Design (antd).",
      "Integrated RESTful APIs for real-time data synchronization across clinic branches.",
      "Ensured consistent UI/UX experience across the entire clinic chain system.",
    ],
    stack: ["React.js", "Ant Design (antd)", "RESTful API"],
  },
];
