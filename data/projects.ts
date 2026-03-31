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
    githubLink: "https://github.com/prajuyadv/my_portfolio.git",
    skills: [
      { name: "Frontend Development" },
      { name: "UI/UX Design" },
      { name: "Responsive Web Design" },
      { name: "Performance Optimization" },
    ],
  },
  {
    id: 2,
    title: "ShopGadgets E-Commerce Application",
    description:
      "ShopGadgets is a full-stack e-commerce platform with a React admin dashboard and a React Native mobile app, enabling seamless product management, secure checkout, and real-time user interactions.",
    icon: FaCar,
    technologies: ["React", "React Native", "TypeScript", "Supabase", "Stripe"],
    githubLink: "https://github.com/prajuyadv/shop-gadgets.git",
    liveLink: "https://your-live-link.com",
    skills: [
      { name: "React (Admin Dashboard), React Native (Mobile App)" },
      { name: "Supabase (Auth, Database, RLS, Edge Functions)" },
      { name: "Stripe Payment Integration (PaymentSheet)" },
      { name: "Zustand / State Management" },
      { name: "Tailwind CSS / Responsive UI" },
      { name: "REST APIs & Real-time Data Handling" },
    ],
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "Employee Management System is a full-stack application with a React.js frontend and Spring Boot backend, enabling efficient management of employee data through secure and scalable REST APIs.",
    icon: FaCar,
    technologies: ["React", "Spring Boot", "Java", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/prajuyadv/employee-management-system.git",
    liveLink: "https://your-live-link.com",
    skills: [
      { name: "React.js with Bootstrap for responsive UI" },
      { name: "Spring Boot backend with REST API architecture" },
      { name: "CRUD operations (Create, Read, Update, Delete)" },
      { name: "MySQL database integration" },
      { name: "MVC architecture & clean coding practices" },
      { name: "API integration between frontend and backend" },
    ],
  },
  {
    id: 4,
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
    id: 5,
    title: "BOOTS",
    description:
      "An E-commerce mobile application I was part of it during my tenure in capgemini I used to fix UI bugs and handled state management and also used to test manually application",
    icon: FaReact,
    technologies: ["React Native", "React", "TailwindCSS", "EmailJS", "Vercel"],
    githubLink: "",
    liveLink: "",
    skills: [
      { name: "Manual Testing" },
      { name: "Contact Form Integration" },
      { name: "Deployment on playstore" },
    ],
  },
  {
    id: 6,
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
    id: 7,
    title: "Maintanance HUB App",
    description:
      "My Friend and I  developed  a Maintenance Management Application specifically for apartment communities to streamline the resolution of maintenance issues",
    icon: FaMobileAlt,
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Supabase",
      "Redux",
    ],
    githubLink: "https://github.com/sandman0111/MaintenanceHub.git",
    skills: [
      { name: "Mobile App UI" },
      { name: "Backend Development" },
      { name: "State Management" },
      { name: "Session Tracking" },
    ],
  },
  {
    id: 8,
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
  {
    id: 9,
    title: "Real-Estate website",
    description:
      "Designed a UI/UX  Real-Estate website  developed the project using React ensuring Responsiveness",
    icon: FaCar,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/prajuyadv/realEstate.git",
    liveLink: "https://real-estate-hs6d.vercel.app/",
    skills: [
      { name: "Frontend Development" },
      { name: "Responsive Design" },
      { name: "Landing Page Clone" },
      { name: "Animation & UX" },
    ],
  },
  {
    id: 10,
    title: "Movies App",
    description:
      "MoviesApp is a modern web application built using React 19 and Vite 6, designed to deliver a fast, responsive, and interactive movie-browsing experience.",
    icon: FaCar,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/prajuyadv/movieApp.git",
    liveLink: "https://movie-app-six-neon.vercel.app/",
    skills: [
      { name: "React 19, Vite 6, React Router 7" },
      { name: "@react-icons/all-files, react-icons" },
      { name: "Tailwind CSS / CSS Modules / Styled Components" },
      { name: "ESLint, React Hooks plugin" },
      { name: "TypeScript / JavaScript" },
    ],
  },

  {
    id: 11,
    title: "WEB Project",
    description:
      "Developed a web project which includes all my works during my frontend project.",
    icon: FaNodeJs,
    technologies: ["HTML", "CSS", "Vite", "React", "JSON"],
    liveLink: "https://prajuyadv.github.io/WebProject/",
    githubLink: "https://github.com/prajuyadv/WebProject.git",
    skills: [
      { name: "Web App Development" },
      { name: "Landing Page Development" },
      { name: "TailwindCSS Theming" },
      { name: "Real-Time Communication" },
      { name: "Responsive UI" },
    ],
  },
];
