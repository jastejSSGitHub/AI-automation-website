"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const calendlyUrl = "https://calendly.com/jastejsehra/chat-about-ai-automation";

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("jastejsingh98@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      window.location.href = "mailto:jastejsingh98@gmail.com";
    }
  };

  return (
    <footer
      data-theme="dark"
      className="relative bg-gradient-to-b from-slate-950 via-slate-950 to-black text-slate-300 overflow-hidden py-12 md:py-16"
    >
      <style jsx>{`
        @keyframes footer-beam {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        .animate-footer-beam {
          animation: footer-beam 4s linear infinite;
        }

        .footer-futuristic {
          background: #020617;
          position: relative;
          overflow: hidden;
        }

        .footer-futuristic::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 100%, rgba(6, 182, 212, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .footer-futuristic::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent);
        }
      `}</style>

      <div className="absolute inset-0 footer-futuristic pointer-events-none" />
      <div className="absolute top-0 left-0 h-1 w-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-75 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-20 animate-footer-beam" />
      <div className="absolute top-0 inset-x-0 h-px bg-slate-800 z-10" />
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="md:col-span-2 lg:col-span-5 space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/index.html" className="inline-block">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-black italic tracking-tighter text-white">
                  LOOPSUIT<sup className="text-[9px] not-italic text-gray-500 ml-0.5">R</sup>
                </div>
                <div className="hidden sm:flex flex-col justify-center pl-4 border-l-2 border-white/10 h-8 text-left">
                  <span className="text-[8px] font-bold tracking-[0.3em] text-gray-400 uppercase leading-none mb-0.5">
                    VISION
                  </span>
                  <div className="bg-[#3b82f6] px-1.5 py-[1px] transform -skew-x-12 inline-block w-max">
                    <span className="block transform skew-x-12 text-[9px] font-black tracking-widest text-white uppercase leading-none">
                      AUTOMATED
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed max-w-sm font-sf text-base">
              Empowering forward-thinking businesses with intelligent automation systems. We blend cutting-edge AI with seamless workflows to help you scale faster.
            </p>

            <div className="space-y-2 font-sf">
              <div className="relative group w-max">
                <button
                  onClick={handleEmailClick}
                  className="text-slate-400 text-sm hover:text-cyan-400 transition-all duration-200 cursor-pointer text-left flex items-center gap-2"
                >
                  <span>jastejsingh98@gmail.com</span>
                </button>
                <span
                  className={`absolute left-full ml-2 top-1/2 -translate-y-1/2 text-green-400 text-xs font-semibold transition-opacity duration-300 pointer-events-none whitespace-nowrap ${
                    emailCopied ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Email copied
                </span>
              </div>
              <p className="text-slate-400 text-sm">Vancouver, Canada</p>
            </div>

            <div className="pt-4 flex flex-col items-center lg:items-start gap-2">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105"
              >
                Book Free Strategy Call
              </a>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <span>Delivered on time or your money back.</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-2 lg:col-start-8 text-left">
            <h3 className="text-white font-semibold mb-4 text-lg font-sf">Navigation</h3>
            <ul className="space-y-3">
              <FooterLink href="/index.html">Home</FooterLink>
              <FooterLink href="/index.html#how-it-works">How It Works</FooterLink>
              <FooterLink href="/services.html">Services</FooterLink>
              <FooterLink href="/case-studies.html">Case Studies</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-1 lg:col-span-3 text-left lg:pl-4">
            <h3 className="text-white font-semibold mb-4 text-lg font-sf">Solutions</h3>
            <ul className="space-y-3">
              <FooterLink href="/index.html#workflow-automation">AI Workflow Automation</FooterLink>
              <FooterLink href="/index.html#mvp-development">Rapid MVP Development</FooterLink>
              <FooterLink href="/index.html#ai-support">AI-Powered Support</FooterLink>
              <FooterLink href="/index.html#complete-solution">Complete AI Solution</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mb-6 md:mb-8" />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-sf text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} LoopSuit. All rights reserved.</p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <div className="space-y-1">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold text-sm">
                Serving clients across US, Canada & EU
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold text-sm">
                6+ Years of Industry Experience
              </p>
            </div>
            <div className="flex items-center space-x-4 pt-1">
              <SocialIcon href="#" label="Twitter" icon={<Twitter size={18} />} />
              <SocialIcon href="#" label="LinkedIn" icon={<Linkedin size={18} />} />
              <SocialIcon href="#" label="GitHub" icon={<Github size={18} />} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all duration-300 group"
    >
      <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 flex items-center justify-start group font-sf"
      >
        <span className="w-0 group-hover:w-2 h-[1px] bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
        {children}
      </Link>
    </li>
  );
}
