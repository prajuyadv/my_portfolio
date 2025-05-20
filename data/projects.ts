import {
  FaReact,
  FaNodeJs,
  FaEthereum,
  FaMobileAlt,
  FaWarehouse,
  FaCar,
} from "react-icons/fa";
import { SiFirebase, SiPostgresql } from "react-icons/si";

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
  liveLink?: string; // Optional live deployment link
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description:
      "A personal portfolio built with Next.js, TailwindCSS, and shadcn/ui, showcasing projects, skills, and work experience with smooth animations and a professional layout.",
    icon: FaReact,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
    ],
    githubLink:
      "https://github.com/prajuyadv/my_portfolio.git",
    skills: [
      { name: "Frontend Development" },
      { name: "UI/UX Design" },
      { name: "Responsive Web Design" },
      { name: "Performance Optimization" },
    ],
  },
  {
    id: 2,
    title: "WEB Project",
    description:
      "Developed a web project which includes all my works during my frontend project.",
    icon: FaNodeJs,
    technologies: [
    "HTML",
    "CSS",
    "Vite",
    "React",
    "JSON"
    ],
    liveLink:"https://prajuyadv.github.io/WebProject/",
    githubLink: "https://github.com/prajuyadv/WebProject.git",
    skills: [
      { name: "Web App Development" },
      {name:"Landing Page Development"},
      { name: "TailwindCSS Theming" },
      { name: "Real-Time Communication" },
      { name: "Responsive UI" },
    ],
  },
  {
    id: 3,
    title: "Victoria Secret",
    description:
      "An E-commerce Mobile Application i was part of it developed marketing tool for it and did hot fixes duwing production time and active part in functionality development app is live in playstore & appstore .",
    icon: FaEthereum,
    technologies: [
      "React Native",
      "Solidity",
      "Firebase",
      "Web3.js",
      "Smart Contracts",
    ],
    githubLink: "",
    skills: [
      { name: "Marketing Tool" },
      { name: "Bugs fixes" },
      { name: "functionality development" },
      { name: "UI/UX" },
    ],
  },
  {
    id: 4,
    title: "BOOTS",
    description:
      "An E-commerce mobile application I was part of it during my tenure in capgemini I used to fix UI bugs and handled state management and also used to test manually application",
    icon: FaReact,
    technologies: ["React Native", "React", "TailwindCSS", "EmailJS", "Vercel"],
    githubLink:
      "",
    liveLink: "",
    skills: [
      { name: "Manual Testing" },
      { name: "Contact Form Integration" },
      { name: "Deployment on playstore" },
    ],
  },
  {
    id: 5,
    title: "smart Tech",
    description:
      "I developed An E-commerce Mobile Application ensuring all major functionalities from scratch to app development level ",
    icon: FaWarehouse,
    technologies: ["React", "Node.js", "ExcelJS", "CSV", "Tailwind"],
    githubLink: "https://github.com/prajuyadv/smarttech.git",
    liveLink: "https://smarttech-six.vercel.app/",
    skills: [
      { name: "Excel Automation" },
      { name: "Inventory Management" },
      { name: "Data Processing" },
      { name: "Dashboard UI Design" },
    ],
  },
  {
    id: 6,
    title: "Maintanance HUB App",
    description:
      "My Friend and I  developed  a Maintenance Management Application specifically for apartment communities to streamline the resolution of maintenance issues",
    icon: FaMobileAlt,
    technologies: ["React Native", "TypeScript", "Firebase","Supabase", "Redux"],
    githubLink: "https://github.com/sandman0111/MaintenanceHub.git",
    skills: [
      { name: "Mobile App UI" },
      { name: "Backend Development" },
      { name: "State Management" },
      { name: "Session Tracking" },
    ],
  },
  {
    id: 7,
    title: "Figma App",
    description:
      "Designed a UI/UX  website using figma for the same developed the project using React ensuring Responsiveness",
    icon: FaCar,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/prajuyadv/figmaApp.git",
    liveLink: "https://figma-app-gamma.vercel.app/",
    skills: [
      { name: "Frontend Development" },
      { name: "Responsive Design" },
      { name: "Landing Page Clone" },
      { name: "Animation & UX" },
    ],
  },
];
