"use client";

import { motion } from "framer-motion";

export default function MissionStatement() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Gradients/Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-900 border border-slate-800 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse" />
          <span className="text-sm font-medium text-slate-100">
            Our Mission
          </span>
        </motion.div>

        {/* Main Text with Beam effect */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-[#1d1d1f] mx-auto max-w-4xl"
        >
          We launch your production-ready{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            MVP in 2 weeks
          </span>.
          <div className="flex flex-col items-center mt-6 mb-8 group">
            <div className="h-[1px] w-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent transition-all duration-1000 group-hover:w-full"></div>
            <div className="h-px w-24 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 my-4"></div>
            <p className="text-sm md:text-base text-slate-500 font-normal tracking-wide uppercase">Built for Scale</p>
          </div>
          Then, we deploy{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            autonomous AI agents
          </span>{" "}
          that run your operations—saving you 15+ hours weekly.
        </motion.h2>
      </div>

      {/* Global CSS for custom animations if not in globals.css */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
