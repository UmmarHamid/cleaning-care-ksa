'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { Button } from '@/components/ui/Button';
import { COMPANY_DATA } from '@/data/company';
import { SECTION_SPACING } from '@/lib/tokens';
import { MapPin, Phone, Mail } from 'lucide-react';

const SPY_SECTIONS = ['home', 'about', 'products', 'infrastructure', 'contact'] as const;
type SectionId = (typeof SPY_SECTIONS)[number];

interface NavItem {
  id: SectionId;
  label: string;
  href: string;
  isPageRoute?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/#home' },
  { id: 'about', label: 'About Us', href: '/#about' },
  { id: 'products', label: 'Products', href: '/products', isPageRoute: true },
  { id: 'infrastructure', label: 'Infrastructure', href: '/#infrastructure' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const headerRef = useRef<HTMLElement>(null);
  const lockScrollSpyUntilRef = useRef<number>(0);

  const isProductsPage = pathname === '/products';

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isProductsPage) return;

    let initRafId: number | null = null;
    const initialHash = window.location.hash.replace('#', '') as SectionId;
    if (SPY_SECTIONS.includes(initialHash)) {
      // Avoid overwriting the hash while Next.js finishes initial hash scroll
      lockScrollSpyUntilRef.current = Date.now() + 600;
      initRafId = window.requestAnimationFrame(() => setActiveSection(initialHash));
    }

    let rafId: number | null = null;

    const updateActiveSectionFromScroll = () => {
      rafId = null;
      if (Date.now() < lockScrollSpyUntilRef.current) return;

      const headerHeight = headerRef.current?.offsetHeight ?? 130;
      const threshold = headerHeight + 36;

      // Highlight Contact when scrolled to the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;

      let nextSection: SectionId = 'home';

      if (isAtBottom) {
        nextSection = 'contact';
      } else {
        for (const section of SPY_SECTIONS) {
          const el = document.getElementById(section);
          if (el && el.getBoundingClientRect().top <= threshold) {
            nextSection = section;
          }
        }
      }

      setActiveSection((prev) => (prev === nextSection ? prev : nextSection));

      const targetPath = nextSection === 'home' ? '/' : `/#${nextSection}`;
      const currentFull = `${window.location.pathname}${window.location.hash}`;
      if (currentFull !== targetPath) {
        window.history.replaceState(null, '', targetPath);
      }
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateActiveSectionFromScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (initRafId !== null) window.cancelAnimationFrame(initRafId);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [isProductsPage]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    sectionId: SectionId,
  ) => {
    closeMenu();

    // When on /products, allow Next.js Link/Button to navigate back to /#section
    if (isProductsPage) return;

    e.preventDefault();

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    setActiveSection(sectionId);
    lockScrollSpyUntilRef.current = Date.now() + (prefersReducedMotion ? 50 : 750);

    const targetPath = sectionId === 'home' ? '/' : `/#${sectionId}`;
    window.history.replaceState(null, '', targetPath);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const el = document.getElementById(sectionId);
    if (!el) return;

    const headerHeight = headerRef.current?.offsetHeight ?? 130;
    const targetTop = Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerHeight);
    window.scrollTo({ top: targetTop, behavior });
  };

  const currentSection = isProductsPage ? 'products' : activeSection;

  return (
    <header ref={headerRef} className='sticky top-0 z-50 w-full shadow-subtle'>
      {/* Top Utility Bar */}
      <div className='hidden md:block w-full bg-brand-charcoal text-white text-xs border-b border-slate-800'>
        <div className={`${SECTION_SPACING.container} min-h-[38px] flex items-center justify-between gap-4 flex-wrap`}>
          <div className='flex items-center gap-4 sm:gap-6 flex-wrap'>
            <a
              href={COMPANY_DATA.googleMapsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5 text-slate-300 hover:text-white hover:underline transition-colors min-h-touch sm:min-h-0'
              title='Open location in Google Maps'
            >
              <MapPin className='w-3.5 h-3.5 text-brand-gold shrink-0' aria-hidden='true' />{' '}
              {COMPANY_DATA.location}
            </a>
            <a
              href={`tel:${COMPANY_DATA.phoneTel}`}
              className='flex items-center gap-1.5 text-slate-200 hover:text-white shrink-0 font-semibold'
            >
              <Phone className='w-3.5 h-3.5 text-brand-gold shrink-0' aria-hidden='true' />
              {COMPANY_DATA.phone}
            </a>
          </div>

          <a
            href={`mailto:${COMPANY_DATA.emailSales}`}
            className='hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white hover:underline'
          >
            <Mail className='w-3.5 h-3.5 text-brand-gold shrink-0' aria-hidden='true' />{' '}
            {COMPANY_DATA.emailSales}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className='w-full bg-white/95 backdrop-blur-md border-b border-border-subtle relative'>
        <div className={`${SECTION_SPACING.container} min-h-[84px] sm:min-h-[92px] flex items-center justify-between gap-6`}>
          <Link
            href='/'
            className='min-h-touch flex items-center shrink-0'
            aria-label='Cleaning Care Trading Co. home'
            onClick={(e) => handleAnchorClick(e, 'home')}
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
            {NAV_ITEMS.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <Link
                  key={item.id}
                  className={`min-h-touch flex items-center px-2 transition-colors relative ${
                    isActive
                      ? 'text-brand-red font-bold lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-0.5 lg:after:bg-brand-red'
                      : 'text-slate-dark hover:text-brand-red'
                  }`}
                  href={item.href}
                  onClick={item.isPageRoute ? closeMenu : (e) => handleAnchorClick(e, item.id)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              href='/#contact'
              variant='primary'
              size='md'
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className='text-sm sm:text-sm mt-2 lg:mt-0 whitespace-nowrap'
            >
              Request Bulk Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
