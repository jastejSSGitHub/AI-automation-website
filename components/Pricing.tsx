"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const TIERS = [
    {
        name: "AI Workflow Automation",
        subtitle: "Save 15+ Hours Per Week",
        description: "Replace expensive, repetitive manual work with intelligent automation that runs 24/7 — and pays for itself fast.",
        price: "From $2,500",
        priceRange: "Most projects: $2,500–$8,000",
        valueProof: "Replaces $3,000+/mo in manual labour costs",
        features: [
            "Lead Generation & Enrichment",
            "Sales Pipeline Automation",
            "AI-Powered Chatbots",
            "Email & Follow-up Sequences",
            "CRM Integration & Updates",
            "Automated Reporting Dashboards"
        ],
        cta: "Book Strategy Call",
        scarcity: "Next available slot: March 10",
        highlight: false,
        colorClass: "text-blue-600",
        checkColor: "text-blue-500",
        buttonVariant: "outline"
    },
    {
        name: "Rapid MVP Development",
        subtitle: "Launch in 3–4 Weeks",
        description: "Investor-ready product, designer-quality UI, production code — shipped in weeks, not months. You keep 100% ownership.",
        price: "From $8,000",
        priceRange: "Most projects: $8,000–$20,000",
        valueProof: "Traditional agencies quote $40,000+ for the same",
        features: [
            "Designer-Quality UI/UX & Mobile",
            "Production-Ready Code",
            "AI Feature Integration (Optional)",
            "User Authentication & Dashboards",
            "API Integrations",
            "Payment Processing Setup",
            "100% Code Ownership"
        ],
        cta: "Book Your Strategy Call",
        scarcity: "Only 2 spots left for March",
        highlight: true,
        colorClass: "text-white",
        checkColor: "text-emerald-500", // Green icons for center
        buttonVariant: "beam"
    },
    {
        name: "Complete AI Solution",
        subtitle: "Product + Full Automation Stack",
        description: "Your entire digital operation, built and automated by one team on one deadline — no hand-off chaos, no gaps.",
        price: "From $15,000",
        priceRange: "Complete packages: $15,000–$35,000",
        valueProof: "Replaces 2 full-time hires + an entire dev team",
        features: [
            "Everything in Rapid MVP",
            "Everything in AI Automation",
            "Built-in AI Features",
            "Advanced Analytics & Tracking",
            "Priority Support Channel",
            "Monthly Optimization Calls"
        ],
        cta: "Book Strategy Call",
        scarcity: "1 enterprise slot open in March",
        highlight: false,
        colorClass: "text-purple-600",
        checkColor: "text-purple-500", // Purple icons for tier 3
        buttonVariant: "outline"
    }
];

const openCalendly = () => {
    const url = 'https://calendly.com/jastejsehra/chat-about-ai-automation';
    if (typeof window !== 'undefined' && (window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({ url });
    } else {
        window.open(url, '_blank');
    }
};

export default function Pricing() {
    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden" id="pricing">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-6 font-sf tracking-tight leading-[1.1]">
                        Straightforward Pricing.<br className="hidden md:block" /> No Surprises.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Every project starts with a free 30-minute strategy call. Exact scope and price confirmed before we touch a single line of code.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative items-start">
                    {TIERS.map((tier, index) => (
                        <div
                            key={index}
                            className={cn(
                                "relative rounded-2xl p-8 transition-all duration-300 border flex flex-col h-full",
                                tier.highlight
                                    ? "bg-slate-900 text-white shadow-2xl scale-105 border-slate-800 z-10" // High z-index for center
                                    : "bg-white text-slate-900 shadow-xl border-slate-300 hover:shadow-2xl z-0"
                            )}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
                                    <div className="relative rounded-full shadow-[0_4px_10px_rgba(194,65,12,0.5)]">
                                        <div className="absolute inset-0 rounded-full bg-orange-900/40 blur-sm transform translate-y-0.5"></div>
                                        <div className="relative bg-gradient-to-r from-orange-700 to-orange-800 p-[1px] rounded-full">
                                            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-4 py-1.5 rounded-full border-t border-orange-400/30">
                                                <span className="text-xs font-bold uppercase tracking-wider text-white drop-shadow-sm">
                                                    Most Popular
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={cn("text-xl font-bold mb-2", tier.highlight ? "text-white" : "text-slate-900")}>
                                    {tier.name}
                                </h3>
                                <p className={cn("text-lg font-medium", tier.highlight ? "text-slate-300" : tier.colorClass)}>
                                    {tier.subtitle}
                                </p>
                                <p className={cn("mt-4 text-sm leading-relaxed", tier.highlight ? "text-slate-400" : "text-slate-500")}>
                                    {tier.description}
                                </p>

                                {/* Price anchor block */}
                                <div className={cn(
                                    "mt-5 rounded-xl px-4 py-3 border",
                                    tier.highlight
                                        ? "bg-white/5 border-white/10"
                                        : "bg-slate-50 border-slate-200"
                                )}>
                                    <p className={cn("text-3xl font-bold tracking-tight", tier.highlight ? "text-white" : "text-slate-900")}>
                                        {tier.price}
                                    </p>
                                    <p className={cn("text-xs mt-0.5", tier.highlight ? "text-slate-400" : "text-slate-500")}>
                                        {tier.priceRange}
                                    </p>
                                    <p className={cn(
                                        "text-xs font-semibold mt-2 flex items-center gap-1",
                                        tier.highlight ? "text-emerald-400" : "text-emerald-600"
                                    )}>
                                        <span>✦</span> {tier.valueProof}
                                    </p>
                                </div>
                            </div>

                            <div className="flex-grow mb-8 space-y-4">
                                <p className={cn("text-xs font-bold uppercase w-full pb-2 border-b", tier.highlight ? "text-slate-500 border-slate-800" : "text-slate-400 border-slate-100")}>
                                    What's Included
                                </p>
                                <ul className="space-y-4">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className={cn("w-5 h-5 flex-shrink-0", tier.checkColor)} />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-6">
                                {tier.buttonVariant === "beam" ? (
                                    <button
                                        onClick={openCalendly}
                                        className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                                    >
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                            {tier.cta}
                                        </span>
                                    </button>
                                ) : (
                                    <button
                                        onClick={openCalendly}
                                        className={cn(
                                            "w-full py-3 rounded-full font-medium text-sm transition-all duration-200",
                                            "border border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white text-slate-900"
                                        )}
                                    >
                                        {tier.cta}
                                    </button>
                                )}
                                {/* Scarcity / availability indicator */}
                                <div className="mt-3 flex items-center justify-center gap-1.5">
                                    <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                    </span>
                                    <p className={cn(
                                        "text-xs font-medium",
                                        tier.highlight ? "text-slate-400" : "text-slate-500"
                                    )}>
                                        {tier.scarcity}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
