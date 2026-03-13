"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const projects = [
    {
        title: "MockMate",
        subtitle: "AI-Powered Mock Interview & Quiz Platform",
        description:
            "AI-driven interview prep platform — paste a job description, get tailored technical questions, simulate webcam interviews with real-time speech-to-text, and receive Gemini AI-powered scoring with actionable feedback.",
        tech: [
            "Next.js",
            "PostgreSQL",
            "Drizzle ORM",
            "Gemini AI",
            "Clerk Auth",
            "Web Speech API",
        ],
        highlights: [
            "Personalized questions from any job description",
            "Live webcam interview with speech-to-text",
            "AI-scored responses with improvement tips",
           
        ],
        live: "https://mock-mate-52o4.vercel.app/",
        github:" https://github.com/vishraj007/mock-mate",
        gradient: "from-purple-600 via-violet-600 to-indigo-600",
        glowColor: "rgba(139, 92, 246, 0.15)",
    },
    {
        title: "MediFlow",
        subtitle: "Scalable Healthcare Workflow Platform",
        description:
            "Full-stack hospital management platform with 4-role access control, end-to-end patient lifecycle tracking, Groq AI symptom analysis, real-time department messaging, and integrated Razorpay payments.",
        tech: [
            "Next.js",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Clerk Auth",
            "Groq AI",
            "Razorpay",
        ],
        highlights: [
            "4 roles: Admin, Doctor, Lab & Patient",
            "Groq AI-powered symptom analysis",
            "Real-time cross-department messaging",
            "Razorpay payments built-in",
        ],
        live: "mediflow-fina-1wohh7yaz-vishraj007s-projects.vercel.app",
        github: "https://github.com/vishraj007/mediflow-fina-",
        gradient: "from-cyan-600 via-teal-600 to-emerald-600",
        glowColor: "rgba(6, 182, 212, 0.15)",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="projects" className="relative py-24 sm:py-32">
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-6xl px-6"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="mb-16 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-pink-400">
                        My Work
                    </p>
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                </motion.div>

                {/* Project Cards */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="perspective-card"
                        >
                            <div
                                className="glass-card relative overflow-hidden rounded-2xl transition-all duration-500"
                                style={{
                                    boxShadow:
                                        hoveredIndex === index
                                            ? `0 20px 60px ${project.glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`
                                            : undefined,
                                }}
                            >
                                {/* Gradient accent bar */}
                                <div
                                    className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${project.gradient}`}
                                />

                                <div className="p-8 sm:p-10">
                                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                                        {/* Left: info */}
                                        <div className="flex-1">
                                            <h3 className="mb-1 text-2xl font-bold text-white sm:text-3xl">
                                                {project.title}
                                            </h3>
                                            <p
                                                className={`mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-sm font-semibold text-transparent`}
                                            >
                                                {project.subtitle}
                                            </p>
                                            <p className="mb-6 text-sm leading-relaxed text-gray-400">
                                                {project.description}
                                            </p>

                                            {/* Highlights */}
                                            <ul className="mb-6 space-y-2">
                                                {project.highlights.map((h) => (
                                                    <li
                                                        key={h}
                                                        className="flex items-start gap-2 text-sm text-gray-400"
                                                    >
                                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Tech tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right: buttons */}
                                        <div className="flex flex-row gap-3 lg:flex-col">
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 rounded-xl bg-gradient-to-r ${project.gradient} px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg`}
                                            >
                                                <HiExternalLink className="text-lg" />
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="glass flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                                            >
                                                <SiGithub className="text-lg" />
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
