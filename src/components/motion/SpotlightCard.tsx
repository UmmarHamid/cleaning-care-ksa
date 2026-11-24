"use client";

import React, { useRef, useEffect } from "react";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  maxTilt?: number;
  enableTilt?: boolean;
  hoverScale?: number;
  enableScale?: boolean;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(211, 32, 39, 0.08)",
  spotlightSize = 350,
  maxTilt = 3,
  enableTilt = true,
  hoverScale = 1.015,
  enableScale = true,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const prefersReducedMotion = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      prefersReducedMotion.current = mediaQuery.matches;

      const listener = (e: MediaQueryListEvent) => {
        prefersReducedMotion.current = e.matches;
      };
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onMouseEnter) onMouseEnter(e);
    const card = cardRef.current;
    if (!card) return;
    if (enableScale && !prefersReducedMotion.current) {
      card.style.setProperty("--card-scale", `${hoverScale}`);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onMouseMove) onMouseMove(e);
    const card = cardRef.current;
    if (!card) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
      card.style.setProperty("--spotlight-opacity", "1");

      if (enableScale && !prefersReducedMotion.current) {
        card.style.setProperty("--card-scale", `${hoverScale}`);
      }

      if (enableTilt && !prefersReducedMotion.current) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const tiltX = (-percentY * maxTilt).toFixed(2);
        const tiltY = (percentX * maxTilt).toFixed(2);

        card.style.setProperty("--tilt-x", `${tiltX}deg`);
        card.style.setProperty("--tilt-y", `${tiltY}deg`);
      }
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onMouseLeave) onMouseLeave(e);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty("--spotlight-opacity", "0");
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--card-scale", "1");
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative [transform-style:preserve-3d] transition-transform duration-200 ease-out will-change-transform motion-reduce:transform-none ${className}`}
      style={{
        transform:
          "perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale3d(var(--card-scale, 1), var(--card-scale, 1), 1)",
        ...style,
      }}
      {...props}
    >
      {/* Pointer Spotlight Overlay */}
      <div
        className='pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300 motion-reduce:hidden'
        style={{
          opacity: "var(--spotlight-opacity, 0)",
          background: `radial-gradient(${spotlightSize}px circle at var(--x, 0px) var(--y, 0px), ${spotlightColor}, transparent 80%)`,
        }}
        aria-hidden='true'
      />
      {children}
    </div>
  );
}
