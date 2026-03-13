"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const socials = [
    {
        name: "GitHub",
        icon: SiGithub,
        url: "https://github.com/vishraj007",
        color: "hover:text-white hover:shadow-white/20",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/vishal-rawat-b27756276/",
        color: "hover:text-blue-400 hover:shadow-blue-400/20",
    },
    {
        name: "LeetCode",
        icon: SiLeetcode,
        url: "https://leetcode.com/u/rawat0007/",
        color: "hover:text-amber-400 hover:shadow-amber-400/20",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY!,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section id="contact" className="relative py-24 sm:py-32">
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-5xl px-6"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="mb-16 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                        Get In Touch
                    </p>
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-gray-400">
                        Have a project idea or want to collaborate? Let&apos;s build something great together.
                    </p>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-5">
                    {/* Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-3"
                    >
                        <form
                            className="glass-card space-y-6 rounded-2xl p-8 sm:p-10"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none ring-1 ring-white/10 transition-all duration-300 focus:ring-2 focus:ring-purple-500/50"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none ring-1 ring-white/10 transition-all duration-300 focus:ring-2 focus:ring-purple-500/50"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none ring-1 ring-white/10 transition-all duration-300 focus:ring-2 focus:ring-purple-500/50"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none ring-1 ring-white/10 transition-all duration-300 focus:ring-2 focus:ring-purple-500/50"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status === "loading"}
                                className="animated-border w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? "Sending..." : status === "success" ? "✓ Message Sent!" : status === "error" ? "Failed — Try Again" : "Send Message"}
                            </motion.button>

                            {status === "success" && (
                                <p className="text-center text-sm text-emerald-400">
                                    Thanks! I&apos;ll get back to you soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-center text-sm text-red-400">
                                    Something went wrong. Please try again or email me directly.
                                </p>
                            )}
                        </form>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        variants={containerVariants}
                        className="flex flex-col gap-4 lg:col-span-2"
                    >
                        {/* Location */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-card flex items-center gap-4 rounded-2xl p-6"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                                <HiLocationMarker className="text-xl text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Location</p>
                                <p className="text-sm text-gray-400">IIIT Kottayam, India</p>
                            </div>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-card flex items-center gap-4 rounded-2xl p-6"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                                <HiMail className="text-xl text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Email</p>
                                <p className="text-sm text-gray-400">vishalrawat2612@gmail.com</p>
                            </div>
                        </motion.div>

                        {/* Socials */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-card rounded-2xl p-6"
                        >
                            <p className="mb-4 text-sm font-semibold text-white">
                                Find me online
                            </p>
                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-lg text-gray-400 ring-1 ring-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg ${s.color}`}
                                    >
                                        <s.icon />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Achievement */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-card rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🏆</span>
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        1st Place — TetherX Hackathon
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Vellore Institute of Technology, Chennai
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
