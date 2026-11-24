"use client";

import React, { useEffect, useRef, useState } from "react";

export interface RevealOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export function RevealOnScroll({
  children,
  delay = 0,
  threshold = 0.12,
  className = "",
  as: Component = "div",
  style,
  ...rest
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const inlineStyle: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
  };

  const stateClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  return (
    <Component
      ref={elementRef}
      className={`${stateClasses} transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${className}`.trim()}
      style={inlineStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
