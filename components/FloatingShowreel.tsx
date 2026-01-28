"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

export default function FloatingShowreel() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const previewVideoRef = useRef<HTMLVideoElement>(null);

    // Auto-play preview video in the floating button
    useEffect(() => {
        if (previewVideoRef.current) {
            previewVideoRef.current.play().catch(() => {
                // Autoplay might be blocked, that's okay
            });
        }
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
        setIsPlaying(true);
        // Play the main video when overlay opens
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 100);
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <>
            {/* Floating Circular Button - Bottom Right */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40"
            >
                <button
                    onClick={handleOpen}
                    className="group relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 border-4 border-white/20 backdrop-blur-sm"
                    aria-label="Open Showreel"
                >
                    {/* Video Preview in Circle */}
                    <video
                        ref={previewVideoRef}
                        src="/videos/showreel.mp4"
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-blue-500/30 group-hover:opacity-50 transition-opacity duration-300" />

                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-5 h-5 md:w-6 md:h-6 text-black fill-black ml-1" />
                        </div>
                    </div>

                    {/* Pulse Animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping" />
                </button>

                {/* Tooltip */}
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                >
                    Watch Showreel
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-black/80" />
                </motion.div>
            </motion.div>

            {/* Overlay Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={handleClose}
                    >
                        {/* Glassmorphic Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-blue-900/95 backdrop-blur-xl" />

                        {/* Animated Gradient Orbs */}
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                            aria-label="Close Showreel"
                        >
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Large "SHOWREEL" Background Text */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                            <h2 className="text-[12rem] md:text-[20rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white/5 via-cyan-500/10 to-purple-500/5 select-none">
                                SHOWREEL
                            </h2>
                        </div>

                        {/* Video Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, type: "spring" }}
                            className="relative w-full max-w-5xl aspect-video z-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Glassmorphic Container */}
                            <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-md p-2 md:p-4">
                                <video
                                    ref={videoRef}
                                    src="/videos/showreel.mp4"
                                    controls
                                    autoPlay
                                    className="w-full h-full rounded-xl md:rounded-2xl object-cover"
                                    playsInline
                                />
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-2xl -z-10" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
