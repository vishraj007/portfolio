"use client";

import { motion } from "framer-motion";
import { HiAcademicCap, HiCode, HiLightningBolt, HiStar } from "react-icons/hi";

const stats = [
    { icon: HiCode, label: "Problems Solved", value: "250+", color: "text-purple-400" },
    { icon: HiAcademicCap, label: "CGPA", value: "9.22", color: "text-cyan-400" },
    { icon: HiLightningBolt, label: "Projects Built", value: "5+", color: "text-pink-400" },
    { icon: HiStar, label: "Hackathon Wins", value: "1st", color: "text-amber-400" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
    return (
        <section id="about" className="relative py-24 sm:py-32">
            {/* Background accent */}
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-6xl px-6"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="mb-16 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                        About Me
                    </p>
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Know Who <span className="gradient-text">I Am</span>
                    </h2>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-5">
                    {/* Bio Card */}
                    <motion.div variants={itemVariants} className="lg:col-span-3">
                        <div className="glass-card rounded-2xl p-8 sm:p-10">
                            <h3 className="mb-4 text-2xl font-bold text-white">
                                Vishal Rawat
                            </h3>
                            <p className="mb-4 text-sm font-medium text-purple-400">
                                B.Tech CSE @ IIIT Kottayam &bull; 2023 — 2027
                            </p>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    CSE undergrad at IIIT Kottayam with a 9.22 CGPA, focused on
                                    shipping production-ready, AI-powered web apps.
                                </p>
                                <p>
                                 250+ DSA problems solved. 🥇 1st place at TetherX Hackathon, VIT Chennai — 
I build fast under pressure and ship things that actually work.
                                </p>
                                <p>
                                    Strong foundations in DSA, OS, Networks, Databases &amp; OOP —
                                    everything needed to architect robust software.
                                </p>
                            </div>

                            {/* Education pill */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                {[
                                    "DSA",
                                    "Operating Systems",
                                    "Computer Networks",
                                    "Databases",
                                    "OOP",
                                ].map((c) => (
                                    <span
                                        key={c}
                                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-white/10"
                                    >
                                        {c}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-2 gap-4 lg:col-span-2"
                    >
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                className="glass-card group flex flex-col items-center justify-center rounded-2xl p-6 text-center"
                            >
                                <stat.icon
                                    className={`mb-3 text-3xl ${stat.color} transition-transform duration-300 group-hover:scale-110`}
                                />
                                <span className="text-3xl font-extrabold text-white">
                                    {stat.value}
                                </span>
                                <span className="mt-1 text-xs font-medium text-gray-500">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
