"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

interface SolutionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SolutionModal({ isOpen, onClose }: SolutionModalProps) {
    // Close on Escape
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Container - Scrollable */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[70] overflow-y-auto"
                    >
                        <div className="relative min-h-full w-full flex flex-col items-center bg-slate-950">
                            <button
                                onClick={onClose}
                                className="fixed top-6 right-6 z-[80] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-full">
                                <ContainerScroll
                                    titleComponent={
                                        <>
                                            <h1 className="text-4xl font-semibold text-white">
                                                Launch Your MVP <br />
                                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                                    In Record Time
                                                </span>
                                            </h1>
                                        </>
                                    }
                                >
                                    {/* 5 iOS Mobile Screens */}
                                    <div className="flex items-center justify-center gap-4 md:gap-8 w-full h-full transform scale-75 md:scale-100 origin-center">
                                        <PhoneMockup className="translate-y-12 rotate-[-10deg]" />
                                        <PhoneMockup className="translate-y-6 rotate-[-5deg]" />
                                        <PhoneMockup className="z-10 scale-110 shadow-2xl" active />
                                        <PhoneMockup className="translate-y-6 rotate-[5deg]" />
                                        <PhoneMockup className="translate-y-12 rotate-[10deg]" />
                                    </div>
                                </ContainerScroll>
                            </div>

                            {/* Additional Content below scroll */}
                            <div className="max-w-4xl mx-auto px-6 pb-20 text-white">
                                <h2 className="text-3xl font-bold mb-6 font-sf">Why Development Takes Forever (And How We Fix It)</h2>
                                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                                    Traditional development is bogged down by excessive meetings, slow design cycles, and technical debt.
                                    We use a component-driven architecture and AI-accelerated workflows to ship high-quality apps 5x faster.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

function PhoneMockup({ className, active }: { className?: string, active?: boolean }) {
    return (
        <div
            className={`
                relative w-[280px] h-[580px] rounded-[40px] border-[8px] 
                ${active ? 'border-gray-700 shadow-[0_0_50px_rgba(59,130,246,0.5)]' : 'border-gray-800'} 
                bg-gray-950 overflow-hidden flex-shrink-0 transition-transform duration-500
                ${className}
            `}
        >
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-[18px] z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700 font-medium">
                {/* Placeholder for future UI */}
                <span className="text-sm">UI Image Placeholder</span>
            </div>

            {/* Glare/Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        </div>
    );
}
