import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    title: "Flutter Developer",
    location: "Bangalore, IN",
    description:
      "I worked as a Flutter developer for 5 months. I also upskilled to React.",
    icon: React.createElement(FaReact),
    date: "Jun 2022 - Oct 2022",
  },
  {
    title: "Frontend Developer",
    location: "Bangalore, IN",
    description:
      "During my German language studies, I worked part-time as a front-end developer (React) for 3 months at the same company.",
    icon: React.createElement(FaReact),
    date: "Feb 2023 - May 2023",
  },
  {
    title: "Hotelfachmann",
    location: "Koblenz, DE",
    description:
      "I completed training as a Hotelfachmann and gained skills in German communication and customer service.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Feb 2024",
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
