"use client";

import { motion } from "framer-motion";
import {
    SiCplusplus,
    SiC,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiHtml5,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiPrisma,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostman,
    SiVercel,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
    {
        title: "Languages",
        color: "from-purple-500 to-violet-600",
        skills: [
            { name: "C++", icon: SiCplusplus, level: 90 },
            { name: "C", icon: SiC, level: 85 },
            { name: "JavaScript", icon: SiJavascript, level: 92 },
            { name: "TypeScript", icon: SiTypescript, level: 88 },
            { name: "Python", icon: SiPython, level: 80 },
        ],
    },
    {
        title: "Frontend",
        color: "from-cyan-500 to-blue-600",
        skills: [
            { name: "React", icon: SiReact, level: 92 },
            { name: "Next.js", icon: SiNextdotjs, level: 90 },
            { name: "HTML5", icon: SiHtml5, level: 95 },
            { name: "CSS3", icon: FaCss3Alt, level: 90 },
            { name: "Tailwind", icon: SiTailwindcss, level: 93 },
        ],
    },
    {
        title: "Backend",
        color: "from-emerald-500 to-green-600",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, level: 90 },
            { name: "Express", icon: SiExpress, level: 88 },
        ],
    },
    {
        title: "Databases",
        color: "from-orange-500 to-amber-600",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql, level: 88 },
            { name: "MongoDB", icon: SiMongodb, level: 85 },
            { name: "MySQL", icon: SiMysql, level: 82 },
            { name: "Prisma", icon: SiPrisma, level: 90 },
        ],
    },
    {
        title: "Tools & Platforms",
        color: "from-pink-500 to-rose-600",
        skills: [
            { name: "Git", icon: SiGit, level: 92 },
            { name: "GitHub", icon: SiGithub, level: 95 },
            { name: "Docker", icon: SiDocker, level: 75 },
            { name: "Postman", icon: SiPostman, level: 88 },
            { name: "VS Code", icon: VscVscode, level: 95 },
            { name: "Vercel", icon: SiVercel, level: 90 },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 sm:py-32">
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-6xl px-6"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="mb-16 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        My Skills
                    </p>
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Tech <span className="gradient-text">Arsenal</span>
                    </h2>
                </motion.div>

                {/* Skill Categories */}
                <div className="space-y-10">
                    {skillCategories.map((category) => (
                        <motion.div key={category.title} variants={itemVariants}>
                            <h3 className="mb-5 text-lg font-semibold text-white">
                                <span
                                    className={`inline-block bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                                >
                                    {category.title}
                                </span>
                            </h3>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05, y: -4 }}
                                        className="glass-card group relative flex flex-col items-center gap-3 rounded-xl p-4"
                                    >
                                        <skill.icon className="text-2xl text-gray-400 transition-colors duration-300 group-hover:text-white" />
                                        <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                        {/* Mini Progress */}
                                        <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                                className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
