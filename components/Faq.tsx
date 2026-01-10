'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import AppleResponsiveImage from './ui/AppleResponsiveImage'

const FAQS = [
    {
        question: "What industries do you work with?",
        answer: "We work with SaaS companies, startups, agencies, e-commerce businesses, and B2B service companies across all industries. If you have repetitive processes to automate or need a custom product built, we can help. Our solutions are industry-agnostic and customized to your specific business needs."
    },
    {
        question: "Do I own the code you write?",
        answer: "Yes, 100%. You receive full source code access and complete ownership of everything we build. There's no vendor lock-in, no ongoing licensing fees, and you're free to modify, host, or transfer your product anywhere you choose."
    },
    {
        question: "Do you offer ongoing support?",
        answer: "All projects include 30 days of post-launch support for bug fixes. For ongoing changes or optimization, we offer flexible retainer packages or project-based pricing depending on your needs."
    },
    {
        question: "How do you deliver so fast?",
        answer: "We use AI-assisted development tools (Claude, Cursor, Make.com) combined with productized processes and reusable component libraries. We leverage proven frameworks to accelerate delivery without compromising quality."
    },
    {
        question: "Can you integrate with my existing tools?",
        answer: "Absolutely. We integrate with CRMs (HubSpot, Salesforce), payment processors (Stripe), project management tools (Notion, Asana), and 1,000+ other platforms via APIs and automation tools."
    },
    {
        question: "What's your refund policy?",
        answer: "If we don't deliver what we promised within the agreed timeline, you get a full refund. We stand behind our work and our commitments. Your success is our success."
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function FAQ() {
    return (
        <section className="py-24 md:py-32 bg-white font-sf overflow-hidden" id="faq">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
                    {/* Left Column: Image (Desktop) / Top Image (Mobile) */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="relative group">
                            {/* Decorative Blur behind image */}
                            <div className="absolute inset-0 bg-blue-50/50 blur-3xl rounded-full scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <AppleResponsiveImage
                                src="/iphone-row.png"
                                alt="LoopSuit Product Mockups"
                                containerClassName="aspect-[4/3] sm:aspect-video lg:aspect-square"
                                mobileZoom={1.6} // Zoom in on mobile to show ~3 phones clearly
                                desktopZoom={1}  // Show all 5 on desktop
                            />
                        </div>

                        {/* Mobile view text (optional enhancement) */}
                        <div className="mt-8 lg:hidden text-center">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Designed for performance</h3>
                            <p className="text-slate-500 text-sm max-w-xs mx-auto">Our products are built with a focus on speed, reliability, and premium aesthetics.</p>
                        </div>
                    </div>

                    {/* Right Column: FAQ Content */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="mb-12">
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 bg-[length:200%_auto] text-[10px] font-bold uppercase tracking-wider mb-6" style={{ animation: 'gradient-flow-badge 3s linear infinite' }}>
                                FAQ
                            </span>
                            <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f] mb-2">Designed for the future.</h3>
                            <h2 className="text-4xl md:text-[3.5rem] leading-[1.05] font-semibold tracking-tight mb-8">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent block">Power player.</span>
                                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent block">Energy expert.</span>
                            </h2>
                            <p className="text-lg text-[#86868b] font-medium leading-relaxed max-w-xl">
                                We build AI systems that aren't just fast—they're incredibly efficient. Everything you need to know about our technology and process.
                            </p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="space-y-4"
                        >
                            {FAQS.map((faq, i) => (
                                <motion.div key={i} variants={itemVariants}>
                                    <FAQItem question={faq.question} answer={faq.answer} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-blue-600 transition-colors focus:outline-none group"
            >
                <span className="text-lg font-semibold text-[#1d1d1f] group-hover:text-inherit pr-8 transition-colors">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-slate-400"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-[#86868b] leading-relaxed font-medium">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

