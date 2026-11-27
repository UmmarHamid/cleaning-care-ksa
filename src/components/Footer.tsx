import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { COMPANY_DATA } from '@/data/company';
import { Phone, Mail, MapPin, FileText, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-slate-dark text-slate-200 pt-8 md:pt-16 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top Section: Stacked on mobile & tablet, 2 columns on desktop */}
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pb-12'>
          {/* Row 1 on Tablet / Col 1 on Desktop: Brand & Description */}
          <div className='md:col-span-1 lg:col-span-5 flex flex-col md:flex-row lg:flex-col md:items-center lg:items-start md:gap-6 lg:gap-0 justify-start'>
            <Link
              className='min-h-touch flex items-center mb-2 md:mb-0 lg:mb-2 shrink-0'
              href='/#home'
              aria-label='Cleaning Care Trading Co. home'
            >
              <BrandLogo variant='dark' size='footer' />
            </Link>
            <p className='font-body text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm md:max-w-[480px] lg:max-w-sm'>
              A leading B2B supplier of cleaning materials, hygiene disposables,
              plastic drums and cleaning equipment in Riyadh, serving businesses
              across the Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Row 2 on Tablet / Col 2 on Desktop: Get in Touch */}
          <div className='md:col-span-1 lg:col-span-7 flex flex-col min-w-0'>
            <h3 className='font-heading font-extrabold text-base text-white mb-4 relative inline-block'>
              Get in Touch
              <span
                className='block w-9 h-[3px] bg-brand-red mt-2 rounded-sm'
                aria-hidden='true'
              />
            </h3>
            {/* 2x2 Contact Grid: 1fr_1.4fr on tablet for ample email width, 2 cols on mobile/desktop */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1.4fr] lg:grid-cols-2 gap-4 sm:gap-6 md:gap-x-6 md:gap-y-6 lg:gap-6'>
              {/* Phone / WA (Left Col, Top) */}
              <div className='flex items-start gap-3 min-w-0'>
                <span
                  className='w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5'
                  aria-hidden='true'
                >
                  <Phone className='w-4 h-4' />
                </span>
                <div className='flex flex-col gap-0.5 min-w-0'>
                  <span className='font-heading font-bold text-2xs text-slate-400 uppercase tracking-wider'>
                    Phone
                  </span>
                  <a
                    href={`tel:${COMPANY_DATA.phoneTel}`}
                    className='text-xs sm:text-sm text-slate-200 hover:text-brand-gold transition-colors font-medium whitespace-nowrap break-normal'
                  >
                    {COMPANY_DATA.phone}
                  </a>
                </div>
              </div>

              {/* Email (Right Col, Top - single line, no mid-word breaks) */}
              <div className='flex items-start gap-3 min-w-0'>
                <span
                  className='w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5'
                  aria-hidden='true'
                >
                  <Mail className='w-4 h-4' />
                </span>
                <div className='flex flex-col gap-0.5 min-w-0'>
                  <span className='font-heading font-bold text-2xs text-slate-400 uppercase tracking-wider'>
                    Email Us
                  </span>
                  <a
                    href={`mailto:${COMPANY_DATA.emailSales}`}
                    className='text-xs sm:text-sm md:text-sm lg:text-sm text-slate-200 hover:text-brand-gold transition-colors font-medium whitespace-nowrap break-normal'
                  >
                    {COMPANY_DATA.emailSales}
                  </a>
                </div>
              </div>

              {/* Location (Left Col, Bottom) */}
              <div className='flex items-start gap-3 min-w-0'>
                <span
                  className='w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5'
                  aria-hidden='true'
                >
                  <MapPin className='w-4 h-4' />
                </span>
                <div className='flex flex-col gap-0.5 min-w-0'>
                  <span className='font-heading font-bold text-2xs text-slate-400 uppercase tracking-wider'>
                    Location
                  </span>
                  <span className='text-xs sm:text-sm text-slate-200 font-medium'>
                    {COMPANY_DATA.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 on Tablet: Thin Divider & Balanced Stats Grid (3 cols on tablet, 5 on desktop) */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-x-12 sm:gap-y-6 md:gap-5 lg:gap-4 py-8 border-t border-slate-800 md:border-white/10 lg:border-slate-800 items-center'>
          {COMPANY_DATA.highlightsStrip.map((item, idx) => (
            <div key={idx} className='flex items-center gap-2 min-w-0'>
              <span className='text-brand-gold shrink-0' aria-hidden='true'>
                <CheckCircle2 className='w-5 h-5' />
              </span>
              <div className='flex flex-col leading-snug min-w-0'>
                <strong className='font-heading font-bold text-xs sm:text-sm text-white'>
                  {item.title}
                </strong>
                <span className='font-body text-2xs sm:text-xs text-slate-400'>
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skyline Silhouette */}
      <div
        className='w-full overflow-hidden leading-none opacity-85'
        aria-hidden='true'
      >
        <svg
          className='w-full h-12 sm:h-16'
          viewBox='0 0 1440 80'
          preserveAspectRatio='none'
        >
          <path
            d='M0,80 L0,70 L35,70 L35,62 L55,62 L55,70 L90,70 L90,56 L120,56 L120,70 L160,70 L160,65 L190,65 L190,70 L240,70 L240,58 L270,58 L270,70 L320,70 L320,50 L345,50 L345,42 L365,42 L365,50 L390,50 L390,70 L440,70 L440,64 L480,64 L480,70 L520,70 L520,35 L535,35 L535,20 L545,8 L555,20 L555,35 L570,35 L570,70 L620,70 L620,62 L660,62 L660,70 L700,70 L700,54 L730,54 L730,70 L780,70 L780,48 L800,48 L800,28 L815,10 C820,10 820,24 820,24 C820,24 820,10 825,10 L840,28 L840,48 L860,48 L860,70 L910,70 L910,60 L950,60 L950,70 L990,70 L990,44 L1020,44 L1020,70 L1070,70 L1070,62 L1110,62 L1110,70 L1150,70 L1150,52 L1180,52 L1180,70 L1230,70 L1230,64 L1270,64 L1270,70 L1310,70 L1310,56 L1340,56 L1340,70 L1390,70 L1390,65 L1440,65 L1440,80 Z'
            fill='#162332'
          />
        </svg>
      </div>

      {/* Row 4: Red Copyright Bar - centered on tablet, pb-16 to clear floating Next.js dev badge */}
      <div className='bg-brand-red text-white py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-start md:justify-center lg:justify-start text-center text-xs text-white/95'>
          &copy; {currentYear} {COMPANY_DATA.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
