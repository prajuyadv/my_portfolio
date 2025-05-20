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
    company: "Freelance Projects",
    position: "Freelance Software Developer",
    duration: "Aug 2023 – Present",
    year: 2023,
    description: [
      " We developed a Maintenance Management Application specifically for apartment communities to streamline the resolution of maintenance issues. The system supports two distinct logins: User, Staff /Admin.",
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
    company: "Tru Equations",
    position: "Mobile App Developer",
    duration: "March 2023 – July 2023",
    year: 2023,
    description: [
      " Led end-to-end mobile and web app development, ensuring seamless cross-platform performance for Android,iOS, and web applications.",
     " Utilized Redux for efficient state management in React applications, integrating Axios for streamlined API  calls, which improved data flow and maintainability. Collaborated with cross-functional teams to define requirements, enhance UI/UX, and integrate new features, im- proving user engagement.",
      "Refactored core modules to improve performance and scalability — and made the dev team breathe easier.",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Firebase", icon: SiFirebase },
    ],
    logo: "/logos/real-variable.jpeg",
  },
  {
    company: " Capgemini pvt. Ltd.",
    position: "Software Developer",
    duration: "Feb 2021 – Aug 2023",
    year: 2021,
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
  {
    company: "Cvcorp",
    position: "Software Intern",
    duration: "May 2019 – Aug 2021",
    year: 2019,
    description: [
      " Designed and developed responsive web pages using React, enhancing user engagement and accessibility.",
      " Worked on API integrations for real-time data handling, improving application functionality and performance.",
      " Assisted in quality assurance by conducting performance and functional testing before deployment.",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "UI Debugging", icon: FaLaptopCode },
    ],
    logo: "/logos/freelance.png",
  },
];
