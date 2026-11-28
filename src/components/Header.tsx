'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { COMPANY_DATA } from '@/data/company';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'products',
        'infrastructure',
        'contact',
      ];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='sticky top-0 z-50 w-full shadow-subtle'>
      {/* Top Utility Bar */}
      <div className='w-full bg-brand-charcoal text-white text-xs border-b border-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[38px] flex items-center justify-between gap-4 flex-wrap'>
          <div className='flex items-center gap-4 sm:gap-6 flex-wrap'>
            <a
              href={COMPANY_DATA.googleMapsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5 text-slate-300 hover:text-white hover:underline transition-colors min-h-touch sm:min-h-0'
              title='Open location in Google Maps'
            >
              <MapPin
                className='w-3.5 h-3.5 text-brand-gold shrink-0'
                aria-hidden='true'
              />{' '}
              {COMPANY_DATA.location}
            </a>
            <a
              href={`tel:${COMPANY_DATA.phoneTel}`}
              className='flex items-center gap-1.5 text-slate-200 hover:text-white shrink-0 font-semibold'
            >
              <Phone
                className='w-3.5 h-3.5 text-brand-gold shrink-0'
                aria-hidden='true'
              />
              {COMPANY_DATA.phone}
            </a>
          </div>

          <a
            href={`mailto:${COMPANY_DATA.emailSales}`}
            className='hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white hover:underline'
          >
            <Mail
              className='w-3.5 h-3.5 text-brand-gold shrink-0'
              aria-hidden='true'
            />{' '}
            {COMPANY_DATA.emailSales}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className='w-full bg-white/95 backdrop-blur-md border-b border-border-subtle relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[84px] sm:min-h-[92px] flex items-center justify-between gap-6'>
          <Link
            href='/'
            className='min-h-touch flex items-center shrink-0'
            aria-label='Cleaning Care Trading Co. home'
            onClick={closeMenu}
          >
            <BrandLogo variant='light' size='header' />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className='lg:hidden min-h-touch min-w-touch p-2.5 rounded-lg border border-border-subtle text-slate-dark hover:bg-slate-50 flex flex-col justify-center items-center gap-1.5 transition-colors'
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
            aria-controls='primary-nav'
            onClick={toggleMenu}
            type='button'
          >
            <span
              className={`w-6 h-0.5 bg-slate-dark rounded transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-slate-dark rounded transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-slate-dark rounded transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

          {/* Desktop & Mobile Responsive Menu */}
          <nav
            id='primary-nav'
            className={`${
              isOpen
                ? 'flex flex-col absolute top-full left-0 right-0 bg-white border-b border-border-subtle p-6 shadow-card gap-2 z-50'
                : 'hidden'
            } lg:flex lg:flex-row lg:static lg:p-0 lg:shadow-none lg:border-none items-stretch lg:items-center gap-4 xl:gap-8 font-heading font-semibold text-sm`}
            aria-label='Main Navigation'
          >
            <Link
              className={`min-h-touch flex items-center px-2 transition-colors relative ${
                activeSection === 'home'
                  ? 'text-brand-red font-bold lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-0.5 lg:after:bg-brand-red'
                  : 'text-slate-dark hover:text-brand-red'
              }`}
              href='/#home'
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              className={`min-h-touch flex items-center px-2 transition-colors relative ${
                activeSection === 'about'
                  ? 'text-brand-red font-bold lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-0.5 lg:after:bg-brand-red'
                  : 'text-slate-dark hover:text-brand-red'
              }`}
              href='/#about'
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              className={`min-h-touch flex items-center px-2 transition-colors relative ${
                activeSection === 'products'
                  ? 'text-brand-red font-bold lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-0.5 lg:after:bg-brand-red'
                  : 'text-slate-dark hover:text-brand-red'
              }`}
              href='/products'
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              className={`min-h-touch flex items-center px-2 transition-colors relative ${
                activeSection === 'infrastructure'
                  ? 'text-brand-red font-bold lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-0.5 lg:after:bg-brand-red'
                  : 'text-slate-dark hover:text-brand-red'
              }`}
              href='/#infrastructure'
              onClick={closeMenu}
            >
              Infrastructure
            </Link>
            <Link
              className={`min-h-touch flex items-center px-2 transition-colors relative ${
                activeSection === 'contact'
                  ? 'text-brand-red font-bold lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-0.5 lg:after:bg-brand-red'
                  : 'text-slate-dark hover:text-brand-red'
              }`}
              href='/#contact'
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              className='inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white font-heading font-bold text-sm px-5 py-2.5 rounded-lg shadow-subtle min-h-touch transition-colors mt-2 lg:mt-0 whitespace-nowrap'
              href='/#contact'
              onClick={closeMenu}
            >
              Request Bulk Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
