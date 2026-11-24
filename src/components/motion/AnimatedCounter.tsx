"use client";

import React, { useEffect, useRef, useState } from "react";

export interface AnimatedCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  end?: number;
  value?: string | number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  value,
  duration,
  prefix,
  suffix,
  className = "",
  ...rest
}: AnimatedCounterProps) {
  // Parse numeric target, prefix, and suffix
  let target = 0;
  let displayPrefix = prefix ?? "";
  let displaySuffix = suffix ?? "";
  let isNumeric = false;

  if (typeof end === "number") {
    target = end;
    isNumeric = true;
  } else if (value !== undefined) {
    if (typeof value === "number") {
      target = value;
      isNumeric = true;
    } else {
      const match = value.trim().match(/^([^\d]*)(\d+)([^\d]*)$/);
      if (match) {
        displayPrefix = prefix ?? match[1];
        target = parseInt(match[2], 10);
        displaySuffix = suffix ?? match[3];
        isNumeric = true;
      }
    }
  }

  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!isNumeric) return;

    const element = elementRef.current;
    if (!element) return;

    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      requestAnimationFrame(() => setCount(target));
      return;
    }

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          observer.disconnect();

          const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          if (prefersReducedMotion) {
            setCount(target);
            return;
          }

          const startTime = performance.now();
          const animDuration = duration ?? (target <= 5 ? 1000 : 1500);

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / animDuration, 1);
            // Ease-out cubic curve for natural slowdown
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(easedProgress * target);

            setCount(current);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          animationFrameId = requestAnimationFrame(step);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration, isNumeric]);

  if (!isNumeric) {
    return (
      <span className={className} {...rest}>
        {value}
      </span>
    );
  }

  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={`${displayPrefix}${target}${displaySuffix}`}
      {...rest}
    >
      {displayPrefix}
      {count.toLocaleString()}
      {displaySuffix}
    </span>
  );
}
