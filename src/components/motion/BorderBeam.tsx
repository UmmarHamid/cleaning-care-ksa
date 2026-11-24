"use client";

import React from "react";

export interface BorderBeamProps {
  className?: string;
  size?: number; // Spread in degrees per beam (default 80)
  duration?: number; // Animation duration in seconds (default 4.5s)
  borderWidth?: number; // Border thickness in px
  colorFrom?: string;
  colorTo?: string;
  dual?: boolean; // Dual opposite beams for continuous flow with minimal delay
}

export function BorderBeam({
  className = "",
  size = 80,
  duration = 4.5,
  borderWidth = 1.5,
  colorFrom = "#D32027",
  colorTo = "#F2B705",
  dual = true,
}: BorderBeamProps) {
  const half = Math.min(Math.max(size / 2, 20), 85);
  const background = dual
    ? `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} ${half}deg, ${colorTo} ${half * 2}deg, transparent ${half * 2 + 30}deg, transparent 180deg, ${colorFrom} ${180 + half}deg, ${colorTo} ${180 + half * 2}deg, transparent ${180 + half * 2 + 30}deg, transparent 360deg)`
    : `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent ${Math.max(0, 360 - size * 2)}deg, ${colorFrom} ${360 - size}deg, ${colorTo} 360deg)`;

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
            background,
          }}
        />
      </div>
    </div>
  );
}
