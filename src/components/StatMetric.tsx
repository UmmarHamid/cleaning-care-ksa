import React from "react";
import type { LucideIcon } from "lucide-react";

export interface StatMetricProps {
  icon: LucideIcon;
  metric: string;
  label: string;
  subtext?: string;
  className?: string;
}

/**
 * Reusable metric tile displaying a brand-accented icon alongside a headline metric, label, and optional subtext.
 */
export function StatMetric({
  icon: Icon,
  metric,
  label,
  subtext,
  className = "",
}: StatMetricProps) {
  return (
    <div
      className={`flex items-center justify-center gap-2.5 sm:gap-4 p-1.5 sm:p-3 min-w-0 ${className}`.trim()}
    >
      <Icon className='text-brand-red w-7 h-7 sm:w-10 sm:h-10 shrink-0' aria-hidden='true' />
      <div className='flex flex-col justify-center leading-snug min-w-0'>
        <strong className='font-heading font-extrabold text-lg sm:text-2xl lg:text-3xl text-slate-dark tracking-tight leading-none'>
          {metric}
        </strong>
        <span className='font-heading font-bold text-2xs sm:text-xs text-slate-dark leading-tight mt-1'>
          {label}
        </span>
        {subtext ? (
          <span className='font-body text-2xs text-muted-gray leading-tight'>{subtext}</span>
        ) : null}
      </div>
    </div>
  );
}
