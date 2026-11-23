import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { COMPANY_DATA } from '@/data/company';
import { CATEGORIES } from '@/data/catalog';
import { Phone, Mail, MapPin, FileText, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-slate-dark text-slate-200 pt-16 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12'>
          {/* Col 1: Brand & Description */}
          <div className='lg:col-span-4 flex flex-col'>
            <Link
              className='min-h-touch flex items-center mb-2'
              href='/#home'
              aria-label='Cleaning Care Trading Co. home'
            >
              <BrandLogo variant='dark' size='footer' />
            </Link>
            <p className='font-bold text-base sm:text-lg text-white mb-2 tracking-wide' lang='ar' dir='rtl'>
              {COMPANY_DATA.arabicName}
            </p>
            <p className='font-body text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm'>
              A leading B2B supplier of cleaning materials, hygiene disposables,
              plastic drums and cleaning equipment in Riyadh, serving businesses
              across the Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Col 2: Product Divisions */}
          <div className='lg:col-span-3 flex flex-col'>
            <h3 className='font-heading font-extrabold text-base text-white mb-4 relative inline-block'>
              Product Divisions
              <span className='block w-9 h-[3px] bg-brand-red mt-2 rounded-sm' aria-hidden='true' />
            </h3>
            <ul className='flex flex-col gap-2.5 font-body text-xs sm:text-sm'>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href='/products'
                    className='inline-flex items-center gap-2 text-slate-300 hover:text-brand-gold hover:translate-x-1 transition-all'
                  >
                    <span className='text-brand-red font-bold' aria-hidden='true'>›</span>
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className='lg:col-span-2 flex flex-col'>
            <h3 className='font-heading font-extrabold text-base text-white mb-4 relative inline-block'>
              Quick Links
              <span className='block w-9 h-[3px] bg-brand-red mt-2 rounded-sm' aria-hidden='true' />
            </h3>
            <ul className='flex flex-col gap-2.5 font-body text-xs sm:text-sm'>
              <li>
                <Link
                  href='/'
                  className='inline-flex items-center gap-2 text-slate-300 hover:text-brand-gold hover:translate-x-1 transition-all'
                >
                  <span className='text-brand-red font-bold' aria-hidden='true'>›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/#about'
                  className='inline-flex items-center gap-2 text-slate-300 hover:text-brand-gold hover:translate-x-1 transition-all'
                >
                  <span className='text-brand-red font-bold' aria-hidden='true'>›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/products'
                  className='inline-flex items-center gap-2 text-slate-300 hover:text-brand-gold hover:translate-x-1 transition-all'
                >
                  <span className='text-brand-red font-bold' aria-hidden='true'>›</span>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/#infrastructure'
                  className='inline-flex items-center gap-2 text-slate-300 hover:text-brand-gold hover:translate-x-1 transition-all'
                >
                  <span className='text-brand-red font-bold' aria-hidden='true'>›</span>
                  <span>Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/#contact'
                  className='inline-flex items-center gap-2 text-slate-300 hover:text-brand-gold hover:translate-x-1 transition-all'
                >
                  <span className='text-brand-red font-bold' aria-hidden='true'>›</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get in Touch */}
          <div className='lg:col-span-3 flex flex-col'>
            <h3 className='font-heading font-extrabold text-base text-white mb-4 relative inline-block'>
              Get in Touch
              <span className='block w-9 h-[3px] bg-brand-red mt-2 rounded-sm' aria-hidden='true' />
            </h3>
            <div className='flex flex-col gap-3.5'>
              {/* Phone / WA */}
              <div className='flex items-start gap-3'>
                <span className='w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5' aria-hidden='true'>
                  <Phone className='w-4 h-4' />
                </span>
                <div className='flex flex-col gap-0.5'>
                  <span className='font-heading font-bold text-2xs text-slate-400 uppercase tracking-wider'>
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${COMPANY_DATA.phoneTel}`}
                    className='text-xs sm:text-sm text-slate-200 hover:text-brand-gold transition-colors font-medium'
                  >
                    {COMPANY_DATA.phone}
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_DATA.phoneRaw}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-success text-xs hover:underline'
                  >
                    Direct WhatsApp Chat ↗
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-3'>
                <span className='w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5' aria-hidden='true'>
                  <Mail className='w-4 h-4' />
                </span>
                <div className='flex flex-col gap-0.5'>
                  <span className='font-heading font-bold text-2xs text-slate-400 uppercase tracking-wider'>
                    Email Us
                  </span>
                  <a
                    href={`mailto:${COMPANY_DATA.emailSales}`}
                    className='text-xs sm:text-sm text-slate-200 hover:text-brand-gold transition-colors font-medium'
                  >
                    {COMPANY_DATA.emailSales}
                  </a>
                  <a
                    href={`mailto:${COMPANY_DATA.emailInfo}`}
                    className='text-xs sm:text-sm text-slate-200 hover:text-brand-gold transition-colors font-medium'
                  >
                    {COMPANY_DATA.emailInfo}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className='flex items-start gap-3'>
                <span className='w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5' aria-hidden='true'>
                  <MapPin className='w-4 h-4' />
                </span>
                <div className='flex flex-col gap-0.5'>
                  <span className='font-heading font-bold text-2xs text-slate-400 uppercase tracking-wider'>
                    Location
                  </span>
                  <span className='text-xs sm:text-sm text-slate-200 font-medium'>
                    {COMPANY_DATA.location}
                  </span>
                </div>
              </div>

              {/* VAT */}
              <div className='flex items-start gap-3'>
                <span className='w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5' aria-hidden='true'>
                  <FileText className='w-4 h-4' />
                </span>
                <div className='flex flex-col gap-0.5'>
                  <span className='font-heading font-bold text-2xs text-slate-400 uppercase tracking-wider'>
                    VAT Registration
                  </span>
                  <span className='font-mono text-xs font-bold text-slate-100 tracking-wide'>
                    {COMPANY_DATA.vatNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Item Business Highlights Strip */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 py-8 border-t border-slate-800 items-center'>
          {COMPANY_DATA.highlightsStrip.map((item, idx) => (
            <div key={idx} className='flex items-center gap-3'>
              <span className='text-brand-gold shrink-0' aria-hidden='true'>
                <CheckCircle2 className='w-5 h-5' />
              </span>
              <div className='flex flex-col leading-snug'>
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
      <div className='w-full overflow-hidden leading-none opacity-85' aria-hidden='true'>
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

      {/* Bottom Crimson Copyright Bar */}
      <div className='bg-brand-red text-white py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs'>
          <div>
            &copy; {currentYear} {COMPANY_DATA.name} ({COMPANY_DATA.arabicName}). All Rights Reserved.
          </div>
          <div className='flex items-center gap-3 text-white/90'>
            <Link href='#contact' className='hover:underline'>Privacy Policy</Link>
            <span aria-hidden='true'>&bull;</span>
            <Link href='#contact' className='hover:underline'>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
