"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { HiArrowDown } from "react-icons/hi";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const roles = [
    "Full-Stack Developer",
   
    "Creative Problem Solver",
    "Hackathon Winner",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timer: NodeJS.Timeout;

        if (!isDeleting && displayed.length < current.length) {
            timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!isDeleting && displayed.length === current.length) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayed.length > 0) {
            timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timer);
    }, [displayed, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            <Scene3D />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a]" />
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0a0a1a] to-transparent" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400"
                    >
                        Welcome to my portfolio
                    </motion.p>

                    <h1 className="mb-6 text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        <span className="text-white">Hi, I&apos;m </span>
                        <span className="gradient-text text-glow">Vishal</span>
                    </h1>

                    <div className="mb-8 flex items-center justify-center text-xl font-medium text-gray-300 sm:text-2xl md:text-3xl">
                        <span className="mr-2 text-cyan-400">&lt;</span>
                        <span className="min-w-[200px] text-left">
                            {displayed}
                            <span className="animate-pulse text-purple-400">|</span>
                        </span>
                        <span className="ml-2 text-cyan-400">/&gt;</span>
                    </div>

                    <p className="mx-auto mb-10 max-w-2xl text-base text-gray-400 sm:text-lg">
                        CSE @ IIIT Kottayam · Building AI-powered apps with
                        modern web tech · 250+ DSA problems crushed · Hackathon champion.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="#projects"
                            className="animated-border group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            <span className="relative z-10">View My Work</span>
                        </a>
                        <a
                            href="#contact"
                            className="glass rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                        >
                            Get In Touch
                        </a>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                            Scroll
                        </span>
                        <HiArrowDown className="text-lg text-purple-400" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
