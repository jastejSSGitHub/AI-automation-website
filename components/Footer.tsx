"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export default function Footer() {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText("jastejsingh98@gmail.com");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <footer className="relative bg-gradient-to-b from-slate-950 via-slate-950 to-black text-slate-300 overflow-hidden py-24 md:py-32 border-t border-slate-900">
            {/* Futuristic Beam / Glow Effect */}
            <motion.div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-75 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-20"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                    repeatDelay: 1
                }}
                style={{ width: '50%' }} // distinct beam length
            />
            <div className="absolute top-0 inset-x-0 h-px bg-slate-800 z-10" /> {/* Static Border line */}

            {/* Animated Gradient Orb Background (Reduced Opacity) */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">

                    {/* Brand & Mission */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-400">
                                LoopSuit
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            Empowering forward-thinking businesses with intelligent automation systems.
                            We blend cutting-edge AI with seamless workflows to help you scale faster.
                        </p>

                        {/* Location & Service Area */}
                        <div className="space-y-2">
                            <p className="text-white font-semibold text-base">
                                Jastej Singh Sehra
                            </p>
                            <button
                                onClick={handleEmailClick}
                                className="group relative text-slate-400 text-sm hover:text-cyan-400 transition-all duration-200 cursor-pointer text-left flex items-center gap-2"
                            >
                                <span className="flex items-center gap-2">
                                    ✉️ jastejsingh98@gmail.com
                                </span>
                                {emailCopied && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-green-400 text-xs font-semibold"
                                    >
                                        Email copied
                                    </motion.span>
                                )}
                            </button>
                            <p className="text-slate-400 text-sm">
                                📍 Vancouver, Canada
                            </p>
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold text-sm">
                                Serving clients across US, Canada & EU
                            </p>
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold text-sm">
                                6+ Years of Industry Experience
                            </p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <SocialIcon href="#" icon={<Twitter size={20} />} label="Twitter" />
                            <SocialIcon href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                            <SocialIcon href="#" icon={<Github size={20} />} label="GitHub" />
                        </div>
                    </div>

                    {/* Mobile Divider */}
                    <div className="block md:hidden h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

                    {/* Navigation Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold mb-4 text-lg">Navigation</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="#how-it-works">How It Works</FooterLink>
                            <FooterLink href="#case-studies">Case Studies</FooterLink>
                        </ul>
                    </div>

                    {/* Mobile Divider */}
                    <div className="block md:hidden h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

                    {/* Solutions Column - Side by Side with Navigation */}
                    <div className="lg:col-span-4">
                        <h3 className="text-white font-semibold mb-4 text-lg">Solutions</h3>
                        <ul className="space-y-3">
                            <FooterLink href="#workflow-automation">AI Workflow Automation</FooterLink>
                            <FooterLink href="#mvp-development">Rapid MVP Development</FooterLink>
                            <FooterLink href="#ai-support">AI-Powered Support</FooterLink>
                            <FooterLink href="#complete-solution">Complete AI-Powered Solution</FooterLink>
                        </ul>
                    </div>

                    {/* Mobile Divider */}
                    <div className="block md:hidden h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

                    {/* Book Free Call CTA - Aligned to the right */}
                    <div className="lg:col-span-2 flex items-start justify-start lg:justify-end">
                        <Link
                            href="#book-call"
                            className="group relative inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                        >
                            {/* Beam animation */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100"
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "linear"
                                }}
                            />
                            <span className="relative z-10">Book Free Call</span>
                        </Link>
                    </div>
                </div>

                {/* Separator */}
                <div className="border-t border-slate-800/50 mb-6 md:mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} LoopSuit. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all duration-300 group"
        >
            <span className="group-hover:scale-110 transition-transform duration-300">
                {icon}
            </span>
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group text-left"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mr-3 group-hover:bg-cyan-400 transition-colors duration-300" />
                {children}
            </Link>
        </li>
    );
}
