import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaSchool } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import youtubeImg from "@/public/youtube-img.png";
import zoomImg from "@/public/zoom.png";
import podcastImg from "@/public/podcast.png";

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
        title: "Educational foundation",
        location: "Kaliyaganj Parbati Sundari High School, Kaliyaganj | North Dinajpur",
        description:
            "My educational foundation was built during my schooling years, where I pursued science, later leading to a focused academic journey in Computer Science Engineering.",
        icon: React.createElement(FaSchool),
        date: "2023",
    },
    {
        title: "Academic Journey",
        location: "Brainware University, Barasat | Kolkata",
        description:
            "I pursued Bachelor of Technology in Computer Science and Engineering",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "LauncheED Global Internship",
        location: "Bengaluru, Karnataka",
        description:
            "I Completed a 2-month Web3 development internship at Launched Global, building AI-integrated social media frontends using React and Next.js.",
        icon: React.createElement(CgWorkAlt),
        date: "2025",
    },
] as const;

export const projectsData = [
    {
        title: "MyTube",
        description:
            "An AI-integrated full-stack web for social media and video sharing. Features include SEO optimization, light/dark mode, multi-comment section, video uploading section, and rate limiting.",
        tags: ["React", "Next.js", "TypeScript", "Express.js", "Clerk Auth", "MUX", "OpenAI", "NeonDB", "Tailwind", "Drizzle"],
        imageUrl: youtubeImg,
        url: "https://new-tube-gamma.vercel.app/",
    },
    {
        title: "Realtime Video Conference Web",
        description:
            "A real-time video conferencing web app built with Stream for high-quality video streaming and reliable real-time communication.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Stream", "Convex"],
        imageUrl: zoomImg,
        url: "https://zoom-clone-silk-kappa.vercel.app/",
    },
    {
        title: "Podcaster",
        description:
            "AI intregated multi-voice podcaster with Authentication (clerk), Convex. ",
        tags: ["React", "Next.js", "Convex", "OpenAI", "Tailwind", "shadcn/ui"],
        imageUrl: podcastImg,
        url: "https://podcaster-roan.vercel.app/",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "shadcn/ui",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "Docker",
    "AWS",
    "Express",
    "PostgreSQL",
    "C",
    "DSA",
    "Python",
    "Java",
] as const;