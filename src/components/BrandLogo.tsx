import React from "react";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function BrandLogo({ variant = "light", className = "" }: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <span
      className={`brand ${isDark ? "brand-light" : ""} ${className}`}
      aria-label="Cleaning Care Trading Co."
    >
      <span className="brand-mark" aria-hidden="true">
        <i />
        <b />
      </span>
      <span className="brand-type">
        <strong
          style={{
            color: isDark ? "#FFFFFF" : "#0F172A",
          }}
        >
          CLEANING CARE
        </strong>
        <em>TRADING CO.</em>
      </span>
    </span>
  );
}
