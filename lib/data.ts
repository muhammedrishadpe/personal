import React from "react";
import { CgDatabase, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import task from "@/public/task.png";
import movies from "@/public/moviesapp.png";
import zolt from "@/public/zolt.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freiwilliges Soziales Jahr (FSJ)",
    location: "Bad Mergentheim, DE",
    description:
      "Currently participating in an FSJ to improve my German communication skills through daily interactions and social work in a German-speaking environment.",
    icon: React.createElement(CgWorkAlt),
    date: "Juli 2024 - Aktuell",
  },
  {
    title: "Schnupperpraktikum  Würth Industrie Service",
    location: " Würth Industrie Service, Bad Mergentheim, DE",
    description:
      "During my internship at Würth Industrie Service, I gained valuable insights into various areas of SAP. I was introduced to international SAP projects, working with modules such as SAP SD, SAP MM, and SAP FICO. I also learned the fundamentals of Kanban Management System (KMS) development and gained initial experience in C# programming. In Business Solution Consulting, I developed an understanding of the consulting process, including the collaboration between clients, consultants, and developers, as well as visualizing business processes using Microsoft Visio. Additionally, I deepened my knowledge in SAP development and ABAP programming through practical tasks. I also had the opportunity to explore procurement, logistics, and quality management, with a focus on their integration into SAP systems.",
    icon: React.createElement(CgDatabase),
    date: "Nov 2024 – Nov 2024",
  },
 
  {
    title: "Frontend Developer ",
    location: " AdaptNXT Technology Solutions Pvt Ltd (PointNXT), Bangalore, IN",
    description:
      "During my German language studies, I worked part-time as a front-end developer (React) for 3 months.",
    icon: React.createElement(FaReact),
    date: "Feb 2023 - May 2023",
  },
 
  {
    title: "Flutter Developer",
    location: " AdaptNXT Technology Solutions Pvt Ltd, Bangalore, IN",
    description:
      "I worked as a Flutter developer for 5 months. I also upskilled to React.",
    icon: React.createElement(FaReact),
    date: "Jun 2022 - Oct 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Movies App",
    description:
      " The Movie App is a React application designed to display a list of movies along with their details and images. To enhance user experience and ensure security, the app requires users to sign in. New users can easily sign up for an account, and their data will be securely stored using local storage. Additionally, the app utilizes protected routes to restrict unauthorized access to certain pages.",
    tags: ["React", ],
    imageUrl: movies,
  },
  {
    title: "Task Manager",
    description:
      "i built a task manager using React and Express.js, combining front-end and back-end technologies for a seamless user experience.",
    tags: ["React", "Express.js"],
    imageUrl: task,
  },
  {
    title: "Zolt",
    description:
      "in a recent endeavor, I took on the challenge of designing and developing the user interface (UI) for the Zolt app using Flutter. With a focus on performance and aesthetics, I aimed to create an immersive and visually stunning experience for users.",
    tags: ["Flutter"],
    imageUrl: zolt,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Flutter",
  "Dart",
  "Git",
  "PHP",
  "JAVA",
  "Figma",
] as const;
