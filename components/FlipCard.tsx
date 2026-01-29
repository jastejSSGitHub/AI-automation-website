'use client';

import { Challenge } from '@/data/challenges';

interface FlipCardProps {
    challenge: Challenge;
    isFlipped: boolean;
    onToggle: () => void;
    onViewSolution?: (id: number) => void;
}

export default function FlipCard({ challenge, isFlipped, onToggle, onViewSolution }: FlipCardProps) {
    return (
        <div className="group h-[420px] md:h-[340px] min-w-[78vw] md:min-w-[45vw] lg:min-w-0 lg:max-w-none w-full lg:w-auto perspective-1000 flex-shrink-0 select-none snap-center transition-transform duration-300 hover:-translate-y-2">
            <div
                className={`flip-card-inner relative w-full h-full duration-700 transform-style-3d transition-transform ease-out-expo shadow-lg rounded-[24px] ${isFlipped ? 'card-flipped' : ''
                    }`}
            >
                {/* Front of Card */}
                <div
                    onClick={onToggle}
                    className={`absolute inset-0 w-full h-full backface-hidden ${challenge.isDark ? 'bg-stone-900' : 'bg-white'
                        } rounded-[24px] border border-black/5 flex flex-col justify-between overflow-hidden cursor-pointer`}
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    {!challenge.isDark && (
                        <div className="absolute inset-0 z-0">
                            <img
                                src={challenge.image}
                                alt={challenge.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
                        </div>
                    )}

                    {challenge.isDark && (
                        <div className="absolute inset-0 z-0">
                            <img
                                src={challenge.image}
                                alt={challenge.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.8] pointer-events-none"
                            />
                        </div>
                    )}

                    <div className="flex flex-col p-8 h-full z-10 relative justify-between">
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <span
                                className={`inline-flex items-center gap-1 rounded-full ${challenge.isDark
                                    ? 'bg-black/20 backdrop-blur-md border border-white/20 text-white'
                                    : 'bg-white/90 backdrop-blur-sm border border-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 bg-[length:200%_auto]'
                                    } px-2.5 py-0.5 text-[10px] font-bold tracking-wide mb-3`}
                                style={!challenge.isDark ? { animation: 'gradient-flow-badge 3s linear infinite' } : undefined}
                            >
                                PROBLEM {String(challenge.id).padStart(2, '0')}
                            </span>
                            <h3
                                className={`text-2xl font-semibold tracking-tight ${challenge.isDark ? 'text-white drop-shadow-sm' : 'text-slate-900'
                                    } leading-tight`}
                            >
                                {challenge.title}
                            </h3>
                            <p
                                className={`text-xs font-medium ${challenge.isDark ? 'text-white/90 drop-shadow-sm' : 'text-slate-600'
                                    } mt-2 hidden md:block`}
                            >
                                {challenge.subtitle}
                            </p>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggle();
                            }}
                            className={`absolute bottom-6 right-6 z-20 ${challenge.isDark ? 'w-10 h-10 bg-white' : 'w-10 h-10 bg-slate-900'
                                } rounded-full shadow-lg flex items-center justify-center ${challenge.isDark
                                    ? 'text-slate-900 hover:bg-slate-100'
                                    : 'text-white hover:bg-slate-800'
                                } transition-colors`}
                            aria-label="Flip Card"
                        >
                            <svg
                                className="w-[20px] h-[20px]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Back of Card */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-[24px] border border-black/5 p-8 flex flex-col overflow-hidden"
                    style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    }}
                >
                    <div className="flex flex-col items-center text-center md:items-start md:text-left flex-shrink-0 mb-2">
                        <span className="inline-flex items-center gap-1 w-fit rounded-full bg-white border border-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 bg-[length:200%_auto] tracking-wide mb-3" style={{ animation: 'gradient-flow-badge 3s linear infinite' }}>
                            PROBLEM {String(challenge.id).padStart(2, '0')}
                        </span>
                        <h3 className="text-2xl font-semibold tracking-tight text-slate-900 leading-tight">
                            {challenge.title}
                        </h3>
                    </div>
                    <div className="overflow-y-auto custom-scrollbar flex-grow pr-1 pb-10">
                        {challenge.description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-sm text-slate-500 leading-relaxed font-medium mb-3"
                            >
                                {paragraph}
                            </p>
                        ))}

                        {/* Interactive trigger for Problem 1 */}
                        {challenge.id === 1 && onViewSolution && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onViewSolution(challenge.id);
                                }}
                                className="mt-4 w-full py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                            >
                                View Solution
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        )}
                    </div>
                    <button
                        onClick={onToggle}
                        className="absolute bottom-5 right-5 z-20 w-8 h-8 bg-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-slate-300 transition-colors"
                        aria-label="Flip Back"
                    >
                        <svg
                            className="w-[16px] h-[16px]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
