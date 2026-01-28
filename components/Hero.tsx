"use client";

import { useState, useEffect } from "react";
import LeadGenModal from "@/components/LeadGenModal";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Only trigger the auto-popup if it hasn't been shown before
        const hasSeenModal = localStorage.getItem("hasSeenLeadGenModal");

        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setIsModalOpen(true);
                localStorage.setItem("hasSeenLeadGenModal", "true");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <section className="px-4 md:px-6 flex flex-col justify-center items-center py-12 md:py-20 relative overflow-hidden bg-slate-900">
                <div className="relative w-full max-w-5xl rounded-[32px] overflow-hidden flex flex-col items-center justify-center text-center py-20 px-6">
                    <h1 className="text-[3.5rem] md:text-[5.5rem] font-sf leading-[1.05] mb-6 drop-shadow-lg font-bold tracking-tight text-white text-center">
                        <span className="block">Ship Faster.</span>
                        <span className="block">Automate Smarter.</span>
                    </h1>
                    <p className="text-base md:text-[1.5rem] font-normal max-w-xl mx-auto leading-snug drop-shadow-md text-white/90 mb-8 px-4 text-center">
                        We build AI-powered MVPs and automation for ambitious founders. Launch in weeks, save 15+ hours weekly.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-5 py-2.5 md:px-7 md:py-3 rounded-full font-medium text-sm transition-all bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center min-h-[44px]"
                        >
                            Start 7-Day Challenge
                        </button>
                        <button className="px-5 py-2.5 md:px-7 md:py-3 rounded-full font-medium text-sm transition-all bg-white text-black hover:bg-white/90 flex items-center justify-center min-h-[44px]">
                            Book Strategy Call
                        </button>
                        <a
                            href="#results"
                            className="px-5 py-2.5 md:px-7 md:py-3 rounded-full font-medium text-sm transition-all hover:bg-white/10 text-white border border-white/30 backdrop-blur-sm flex items-center justify-center min-h-[44px]"
                        >
                            See Solutions
                        </a>
                    </div>
                </div>
            </section>

            <LeadGenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
