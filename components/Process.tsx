'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Discovery & Strategy.',
        description: 'We deep dive into requirements to identify high-impact opportunities before writing code.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Rapid Development.',
        description: 'Robust, scalable architecture using cutting-edge models. We iterate fast.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Seamless Launch.',
        description: 'Deployment with blue-green strategies for zero downtime. Real-time metrics from day one.',
        image: 'https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Scale & Optimize.',
        description: 'We optimize infrastructure costs and performance, ensuring speed at any scale.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
];

export default function Process() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="process" className="py-24 md:py-32 bg-slate-50 overflow-hidden text-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header with Arrows moved to top right for desktop */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div className="text-start max-w-3xl">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 text-[10px] font-bold uppercase tracking-wider mb-6" style={{ animation: 'gradient-flow-badge 3s linear infinite' }}>
                            How It Works
                        </span>
                        <h2 className="text-4xl md:text-[2.75rem] lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.1] font-sf mb-4">
                            From Idea to Empire.
                        </h2>
                        <p className="text-lg md:text-xl font-medium text-[#6e6e73] tracking-tight leading-snug">
                            Our simple 4-step process.
                        </p>
                    </div>

                    {/* Desktop Arrows (Hidden on Mobile) */}
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors focus:outline-none"
                            aria-label="Previous step"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors focus:outline-none"
                            aria-label="Next step"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full relative">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-10 pl-6 xl:pl-[calc((100vw-80rem)/2+1.5rem)] pr-6 cursor-grab select-none no-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                    {steps.map((step) => (
                        <div key={step.id} className="w-[85vw] md:w-[400px] flex-shrink-0 snap-center group">
                            <div className="relative h-[240px] md:h-[260px] rounded-3xl overflow-hidden mb-6 shadow-sm border border-slate-200/50">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center font-bold text-slate-900 shadow-sm border border-white/50">
                                    {step.id}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-sf">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile Arrows (Bottom) */}
                <div className="flex items-center justify-between mt-8 w-full max-w-7xl mx-auto px-6 md:hidden">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-200/60 backdrop-blur-md border border-white/30">
                        {steps.map((_, index) => (
                            // Simple indicators, functionality can be enhanced if needed
                            <div key={index} className={`w-1.5 h-1.5 rounded-full bg-slate-400 ${index === 0 ? 'w-6 bg-slate-800' : ''}`} />
                        ))}
                    </div>

                    <div className="flex gap-4 ml-auto">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors focus:outline-none"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors focus:outline-none"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
