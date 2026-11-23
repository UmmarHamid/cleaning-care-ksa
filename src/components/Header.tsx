"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { COMPANY_DATA } from "@/data/company";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "products", "infrastructure", "contact"];
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className='sticky top-0 z-50 w-full'>
      {/* Top Utility Bar */}
      <div className='utility-bar w-full'>
        <div className='container utility-inner'>
          <span className='flex items-center gap-1.5'>
            <span aria-hidden='true'>⌖</span> {COMPANY_DATA.location}
          </span>
          <a
            href={`tel:${COMPANY_DATA.phoneTel}`}
            className='flex items-center gap-1.5 hover:underline min-h-11 sm:min-h-0'
          >
            <span aria-hidden='true'>☎</span> {COMPANY_DATA.phone}
          </a>
          <span className='utility-vat hidden sm:inline'>VAT: {COMPANY_DATA.vatNumber}</span>
          <span className='utility-spacer' />
          <a
            href={`mailto:${COMPANY_DATA.emailSales}`}
            className='hidden md:flex items-center gap-1.5 hover:underline'
          >
            <span aria-hidden='true'>✉</span> {COMPANY_DATA.emailSales}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className='site-header w-full'>
        <div className='container nav-wrap'>
          <Link
            href='/'
            className='brand min-h-11 flex items-center'
            aria-label='Cleaning Care Trading Co. home'
            onClick={closeMenu}
          >
            <BrandLogo variant='light' size='header' />
          </Link>

          <button
            className='menu-toggle min-h-11 min-w-11'
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls='primary-nav'
            onClick={toggleMenu}
            type='button'
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id='primary-nav'
            className={`primary-nav ${isOpen ? "open" : ""}`}
            aria-label='Main Navigation'
          >
            <Link
              className={`${activeSection === "home" ? "active" : ""} min-h-11 flex items-center`}
              href='/#home'
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              className={`${activeSection === "about" ? "active" : ""} min-h-11 flex items-center`}
              href='/#about'
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              className={`${activeSection === "products" ? "active" : ""} min-h-11 flex items-center`}
              href='/products'
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              className={`${activeSection === "infrastructure" ? "active" : ""} min-h-11 flex items-center`}
              href='/#infrastructure'
              onClick={closeMenu}
            >
              Infrastructure
            </Link>
            <Link
              className={`${activeSection === "contact" ? "active" : ""} min-h-11 flex items-center`}
              href='/#contact'
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              className='button button-red nav-cta min-h-11'
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
