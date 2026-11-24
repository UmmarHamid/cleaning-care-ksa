"use client";

import React from "react";

export interface BorderBeamProps {
  className?: string;
  size?: number; // Spread in degrees
  duration?: number; // Animation duration in seconds
  borderWidth?: number; // Border thickness in px
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className = "",
  size = 60,
  duration = 7,
  borderWidth = 1.5,
  colorFrom = "#D32027",
  colorTo = "#F2B705",
}: BorderBeamProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden z-20 ${className}`}
      aria-hidden='true'
    >
      <div
        className='border-beam-mask absolute inset-0 rounded-[inherit]'
        style={{ padding: `${borderWidth}px` }}
      >
        <div
          className='absolute inset-[-100%] [aspect-ratio:1] animate-border-beam motion-reduce:hidden'
          style={{
            animationDuration: `${duration}s`,
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent ${360 - size * 2}deg, ${colorFrom} ${360 - size}deg, ${colorTo} 360deg)`,
          }}
        />
      </div>
    </div>
  );
}
