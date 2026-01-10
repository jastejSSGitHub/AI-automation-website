"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import LeadGenModal from "@/components/LeadGenModal";

export default function GlobeFeatureSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <section className="relative w-full mx-auto overflow-hidden rounded-b-[40px] bg-slate-900 border-b border-gray-800 shadow-2xl px-6 py-24 md:py-32 md:px-16 md:min-h-[90vh] md:flex md:items-center">
                <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row max-w-7xl mx-auto">
                    <div className="z-10 max-w-2xl text-left">
                        <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Launch Your Vision <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">To The World</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                            We build AI-powered MVPs and automation systems that help you ship faster, save time, and scale globally. From idea to empire in weeks, not months.
                        </p>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-8 py-6 text-base font-semibold transition hover:bg-gray-100 hover:scale-105 active:scale-95"
                        >
                            Start 7-Day Challenge <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                    <div className="relative h-[400px] md:h-[600px] w-full max-w-xl flex items-center justify-center">
                        {/* Gradient Blur Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />

                        <Globe className="absolute md:-right-20 md:top-1/2 md:-translate-y-1/2 scale-[1.2] md:scale-150" />
                    </div>
                </div>
            </section>

            <LeadGenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1, // Dark mode globe
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3], // Darker base
    markerColor: [100 / 255, 100 / 255, 255 / 255], // Blue markers
    glowColor: [0.2, 0.2, 0.5], // Blueish glow
    markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
    ],
}

export function Globe({
    className,
    config = GLOBE_CONFIG,
}: {
    className?: string
    config?: COBEOptions
}) {
    let phi = 0
    let width = 0
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointerInteracting = useRef(null)
    const pointerInteractionMovement = useRef(0)
    const [r, setR] = useState(0)

    const updatePointerInteraction = (value: any) => {
        pointerInteracting.current = value
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value ? "grabbing" : "grab"
        }
    }

    const updateMovement = (clientX: any) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            setR(delta / 200)
        }
    }

    const onRender = useCallback(
        (state: Record<string, any>) => {
            if (!pointerInteracting.current) phi += 0.005
            state.phi = phi + r
            state.width = width * 2
            state.height = width * 2
        },
        [r],
    )

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth
        }
    }

    useEffect(() => {
        window.addEventListener("resize", onResize)
        onResize()

        const globe = createGlobe(canvasRef.current!, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        })

        setTimeout(() => (canvasRef.current!.style.opacity = "1"))
        return () => globe.destroy()
    }, [])

    return (
        <div
            className={cn(
                "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
                className,
            )}
        >
            <canvas
                className={cn(
                    "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
                )}
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(
                        e.clientX - pointerInteractionMovement.current,
                    )
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    )
}
