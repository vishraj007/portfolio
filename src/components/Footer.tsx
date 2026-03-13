"use client";

import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const socials = [
    { icon: SiGithub, url: "https://github.com/vishraj007", label: "GitHub" },
    {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/vishal-rawat-b27756276/",
        label: "LinkedIn",
    },
    { icon: SiLeetcode, url: "https://leetcode.com/u/rawat0007/", label: "LeetCode" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="gradient-text font-semibold">Vishal Rawat</span>. All
                    rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="text-gray-500 transition-colors duration-300 hover:text-white"
                        >
                            <s.icon className="text-lg" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
