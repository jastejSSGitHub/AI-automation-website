"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Check, Sparkles } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface LeadGenModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const experienceOptions = [
    "Complete beginner",
    "Used Zapier/Make before",
    "Built automations myself",
    "Expert level",
];

export default function LeadGenModal({ isOpen, onClose }: LeadGenModalProps) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        experience: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Close on Escape key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            // Set flag so it doesn't auto-popup again
            localStorage.setItem("hasSeenLeadGenModal", "true");
        }
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

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
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={cn(
                                "pointer-events-auto w-full max-w-3xl overflow-hidden shadow-2xl",
                                "bg-white/90 backdrop-blur-2xl rounded-[32px] flex flex-col md:flex-row relative border border-white/50",
                                "max-h-[80vh] md:max-h-none"
                            )}
                        >
                            <button
                                onClick={onClose}
                                className="absolute right-5 top-5 z-[60] p-2 rounded-full bg-black/5 hover:bg-black/10 text-slate-900 transition-colors group"
                                aria-label="Close modal"
                            >
                                <X size={20} className="group-hover:scale-110 transition-transform" />
                            </button>

                            {/* Left Column: Image Area */}
                            <div className="md:w-5/12 bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-100">
                                {/* Decorative Glows */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
                                </div>

                                {/* Image Frame */}
                                <div className="relative w-full max-w-[240px] aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-105">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/thunder-3d-icon-new.png"
                                            alt="Success Strategy"
                                            fill
                                            className="object-contain floating-icon drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Content */}
                            <div className="flex-1 p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
                                {!isSuccess ? (
                                    <>
                                        <div className="text-left mb-8">
                                            {/* Header Information */}
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 bg-[length:200%_auto] text-white text-[10px] font-bold tracking-wider uppercase mb-4 shadow-sm" style={{ animation: 'gradient-flow-badge 3s linear infinite' }}>
                                                    <Sparkles size={10} className="fill-white" />
                                                    Free 7-Day Challenge
                                                </span>
                                                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3 font-sf">
                                                    Automate Your Business
                                                </h2>
                                                <p className="text-slate-600 text-[15px] leading-relaxed">
                                                    Build your first 3 automations in 7 days. Join <span className="font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded-md">1,847 founders</span> saving 10+ hrs/week.
                                                </p>
                                            </motion.div>
                                        </div>

                                        {/* Mobile Image: Floating 3D Icon */}
                                        <div className="md:hidden w-full h-32 relative rounded-2xl overflow-hidden mb-8 shadow-sm bg-slate-50 flex items-center justify-center">
                                            <motion.div
                                                animate={{
                                                    y: [-5, 5, -5],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="relative w-32 h-32"
                                            >
                                                <Image
                                                    src="/thunder-3d-icon-new.png"
                                                    alt="Automation Power"
                                                    fill
                                                    className="object-contain drop-shadow-lg"
                                                />
                                            </motion.div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            {/* Name Field (Optional) */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-slate-500 ml-1 uppercase tracking-wide">
                                                    First Name <span className="text-slate-300 font-normal normal-case">(Optional)</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formState.name}
                                                    onChange={(e) =>
                                                        setFormState({ ...formState, name: e.target.value })
                                                    }
                                                    placeholder="Ex. Jane"
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 font-medium"
                                                />
                                            </div>

                                            {/* Email Field */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-slate-500 ml-1 uppercase tracking-wide">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formState.email}
                                                    onChange={(e) =>
                                                        setFormState({ ...formState, email: e.target.value })
                                                    }
                                                    placeholder="jane@company.com"
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 font-medium"
                                                />
                                            </div>

                                            {/* Experience Dropdown */}
                                            <div className="space-y-1.5 relative z-10">
                                                <label className="text-xs font-semibold text-slate-500 ml-1 uppercase tracking-wide">
                                                    Experience Level
                                                </label>
                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                        className={cn(
                                                            "w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 outline-none transition-all text-left flex items-center justify-between font-medium",
                                                            isDropdownOpen
                                                                ? "ring-4 ring-blue-500/10 border-blue-500 bg-white"
                                                                : "hover:bg-slate-100"
                                                        )}
                                                    >
                                                        <span
                                                            className={
                                                                formState.experience
                                                                    ? "text-slate-900"
                                                                    : "text-slate-400"
                                                            }
                                                        >
                                                            {formState.experience || "Select automation experience"}
                                                        </span>
                                                        <ChevronDown
                                                            size={16}
                                                            className={cn(
                                                                "text-slate-400 transition-transform duration-200",
                                                                isDropdownOpen && "rotate-180"
                                                            )}
                                                        />
                                                    </button>

                                                    <AnimatePresence>
                                                        {isDropdownOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -5, scale: 0.98 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: -5, scale: 0.98 }}
                                                                transition={{ duration: 0.1 }}
                                                                className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden z-50 p-1"
                                                            >
                                                                {experienceOptions.map((option) => (
                                                                    <button
                                                                        key={option}
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setFormState({
                                                                                ...formState,
                                                                                experience: option,
                                                                            });
                                                                            setIsDropdownOpen(false);
                                                                        }}
                                                                        className={cn(
                                                                            "w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between font-medium",
                                                                            formState.experience === option
                                                                                ? "bg-blue-50 text-blue-700"
                                                                                : "hover:bg-slate-50 text-slate-700"
                                                                        )}
                                                                    >
                                                                        {option}
                                                                        {formState.experience === option && (
                                                                            <Check size={14} className="text-blue-600" />
                                                                        )}
                                                                    </button>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>

                                            {/* Submit Button (Shiny Beam) */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="shiny-cta w-full mt-4 bg-black text-white font-bold text-sm py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden active:scale-[0.98] transition-transform"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <span className="relative z-10 tracking-wide">Start The Challenge</span>
                                                )}
                                            </button>
                                        </form>

                                        <p className="text-center text-xs text-slate-600 mt-6 font-semibold tracking-wide uppercase">
                                            No spam. Unsubscribe at any time.
                                        </p>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                            <Check size={40} strokeWidth={3} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                                            You're In!
                                        </h3>
                                        <p className="text-slate-500 mb-8 max-w-xs mx-auto leading-relaxed">
                                            We've sent the first lesson to <strong>{formState.email}</strong>. Check your inbox!
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="px-8 py-3 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                                        >
                                            Close
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )
            }
        </AnimatePresence >
    );
}
