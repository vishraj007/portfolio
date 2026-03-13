import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishal Rawat — Full-Stack Developer",
  description:
    "Portfolio of Vishal Rawat — CSE student at IIIT Kottayam, Full-Stack Developer specializing in Next.js, Node.js, and AI-powered applications.",
  keywords: [
    "Vishal Rawat",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "IIIT Kottayam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${firaCode.variable} font-sans antialiased noise-bg`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
