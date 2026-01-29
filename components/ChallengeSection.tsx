'use client';

import { useState } from 'react';
import { challenges } from '@/data/challenges';
import FlipCard from './FlipCard';
import SolutionModal from './SolutionModal';

export default function ChallengeSection() {
    const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
    const [activeCardId, setActiveCardId] = useState<number | null>(null);

    const handleCardToggle = (id: number) => {
        setActiveCardId(prev => prev === id ? null : id);
    };

    return (
        <section
            className="flex flex-col overflow-hidden text-slate-900 bg-[#F6F6F7] z-10 py-24 md:py-32 pr-6 pl-6 relative justify-center"
            id="results"
        >
            <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center relative">
                <div className="text-center mb-16 max-w-3xl mx-auto flex-shrink-0">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 bg-[length:200%_auto] text-[10px] font-bold uppercase tracking-wider mb-6" style={{ animation: 'gradient-flow-badge 3s linear infinite' }}>
                        The Challenge
                    </span>
                    <h2 className="text-4xl md:text-[2.75rem] lg:text-5xl leading-[1.1] font-medium text-[#1d1d1f] tracking-tight font-sf">
                        The Challenge Every
                        <br />
                        Founder Faces
                    </h2>
                </div>

                <div
                    id="challengesContainer"
                    className="drag-scroll-container flex lg:grid lg:grid-cols-2 overflow-x-auto gap-4 md:gap-6 w-full pb-12 cursor-grab scroll-smooth snap-x snap-mandatory lg:snap-none no-scrollbar"
                >
                    {challenges.map((challenge) => (
                        <FlipCard
                            key={challenge.id}
                            challenge={challenge}
                            isFlipped={activeCardId === challenge.id}
                            onToggle={() => handleCardToggle(challenge.id)}
                            onViewSolution={(id) => setIsSolutionModalOpen(true)}
                        />
                    ))}
                </div>
            </div>

            <SolutionModal
                isOpen={isSolutionModalOpen}
                onClose={() => setIsSolutionModalOpen(false)}
            />
        </section>
    );
}
