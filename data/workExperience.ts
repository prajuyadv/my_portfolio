// data/workExperience.ts
import {
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaCloud,
  FaBolt,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";
import { SiFirebase, SiPostgresql, SiMongodb } from "react-icons/si";
import React from "react";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Brainvire Infotech Inc",
    position: "FullStack Developer",
    duration: "Aug 2024 – Present",
    year: 2024,
    description: [
      " Designed and developed a cross-platform e-commerce solution by building Android applications with Kotlin and responsive web interfaces with Angular & TypeScript, enabling seamless multi-device shopping experiences.",
      "Developed cross-platform mobile applications using React Native, integrating RESTful APIs, Firebase, AWS.",
      "Developed custom API integrations and admin panels to automate tasks, reduce manual overhead, and make teams say, 'Finally!'",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Firebase", icon: SiFirebase },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    logo: "/logos/freelance.png",
  },
   {
    company: " Capgemini pvt. Ltd.",
    position: "Software Developer",
    duration: "Oct 2019 – July 2023",
    year: 2020,
    description: [
      "Developed cross-platform apps and internal tools that helped clients cut operational delays by 35%.",
      " Managed CI/CD pipelines for seamless deployment using AWS, Firebase Hosting, and Netlify and Agile sprints.",
      "Maintained and scaled codebases like a plant parent — always nurturing, pruning, and occasionally debugging at 2 AM.",
      "Worked in agile teams delivering multiple B2B and B2C solutions from scratch to production.",
    ],
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
    logo: "/logos/freelance.png",
  },
];
