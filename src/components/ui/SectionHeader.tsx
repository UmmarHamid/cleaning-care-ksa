import React from 'react';
import { SECTION_SPACING } from '@/lib/tokens';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  descriptionClassName?: string;
  titleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = `text-center sm:text-left max-w-3xl mx-auto sm:mx-0 ${SECTION_SPACING.headerMb}`,
  descriptionClassName = 'font-body text-slate-body text-sm sm:text-base leading-relaxed',
  titleClassName = 'font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight mb-3',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <>
          <div className='flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-3'>
            <span
              className='h-0.5 w-10 sm:w-14 sm:hidden bg-brand-red rounded-full shrink-0'
              aria-hidden='true'
            />
            <span className='text-brand-red font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase'>
              {eyebrow}
            </span>
            <span
              className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full shrink-0'
              aria-hidden='true'
            />
          </div>
          <h2 className={titleClassName}>{title}</h2>
        </>
      ) : (
        <div className='flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-3'>
          <span
            className='h-0.5 w-10 sm:w-14 sm:hidden bg-brand-red rounded-full shrink-0'
            aria-hidden='true'
          />
          <h2 className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight'>
            {title}
          </h2>
          <span
            className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full shrink-0'
            aria-hidden='true'
          />
        </div>
      )}
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
}
