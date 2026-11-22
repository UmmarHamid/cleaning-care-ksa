"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
    <header className="site-header">
      <div className="container nav-wrap">
        <Link
          href="#home"
          className="brand min-h-[44px] flex items-center"
          aria-label="Cleaning Care Trading Co. home"
          onClick={closeMenu}
        >
          <BrandLogo variant="light" size="header" />
        </Link>

        <button
          className="menu-toggle"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          onClick={toggleMenu}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav ${isOpen ? "open" : ""}`}
          aria-label="Main Navigation"
        >
          <Link
            className={activeSection === "home" ? "active" : ""}
            href="#home"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className={activeSection === "about" ? "active" : ""}
            href="#about"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            className={activeSection === "products" ? "active" : ""}
            href="#products"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            className={activeSection === "infrastructure" ? "active" : ""}
            href="#infrastructure"
            onClick={closeMenu}
          >
            Infrastructure
          </Link>
          <Link
            className={activeSection === "contact" ? "active" : ""}
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            className="button button-red nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Request Bulk Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
