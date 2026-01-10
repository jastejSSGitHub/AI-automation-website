"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AppleResponsiveImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    /**
     * Percentage to zoom on mobile. E.g., 1.5 for 150%
     */
    mobileZoom?: number;
    /**
     * Percentage to zoom on desktop. E.g., 1 for 100%
     */
    desktopZoom?: number;
    priority?: boolean;
}

/**
 * A component that replicates Apple's image behavior:
 * - Desktop: Shows the full image or a slightly zoomed version.
 * - Mobile: Zooms in on the image to maintain detail and clarity,
 *   effectively cropping the sides but making the focal point larger.
 */
export default function AppleResponsiveImage({
    src,
    alt,
    className,
    containerClassName,
    mobileZoom = 1.6,
    desktopZoom = 1,
    priority = false,
}: AppleResponsiveImageProps) {
    return (
        <div
            className={cn(
                "relative w-full overflow-hidden flex items-center justify-center bg-transparent",
                containerClassName
            )}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
                style={{
                    '--mobile-scale': mobileZoom,
                    '--desktop-scale': desktopZoom,
                } as React.CSSProperties}
            >
                <div
                    className="relative w-full h-full flex items-center justify-center scale-[var(--mobile-scale)] lg:scale-[var(--desktop-scale)] transition-transform duration-700 ease-out"
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={1600}
                        height={1200}
                        className={cn("w-full h-full object-contain pointer-events-none", className)}
                        priority={priority}
                    />
                </div>
            </motion.div>
        </div>
    );
}
