import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { COMPANY_DATA } from "@/data/company";
import { CATEGORIES } from "@/data/catalog";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-main-container">
        <div className="footer-grid">
          {/* Col 1: Brand & Description */}
          <div className="footer-col footer-col-brand">
            <Link
              className="brand brand-light min-h-[44px] flex items-center"
              href="/#home"
              aria-label="Cleaning Care Trading Co. home"
            >
              <BrandLogo variant="dark" size="footer" />
            </Link>
            <p className="footer-arabic-name" lang="ar" dir="rtl">
              {COMPANY_DATA.arabicName}
            </p>
            <p className="footer-brand-desc">
              A leading B2B supplier of cleaning materials, hygiene disposables,
              plastic drums and cleaning equipment in Riyadh, serving businesses
              across the Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Col 2: Product Divisions */}
          <div className="footer-col">
            <h3 className="footer-col-title">
              Product Divisions
              <span className="footer-title-bar" aria-hidden="true" />
            </h3>
            <ul className="footer-links-list">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href="/products">
                    <span className="footer-chevron" aria-hidden="true">›</span>
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">
              Quick Links
              <span className="footer-title-bar" aria-hidden="true" />
            </h3>
            <ul className="footer-links-list">
              <li>
                <Link href="/">
                  <span className="footer-chevron" aria-hidden="true">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <span className="footer-chevron" aria-hidden="true">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="footer-chevron" aria-hidden="true">›</span>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="/#infrastructure">
                  <span className="footer-chevron" aria-hidden="true">›</span>
                  <span>Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <span className="footer-chevron" aria-hidden="true">›</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get in Touch */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-col-title">
              Get in Touch
              <span className="footer-title-bar" aria-hidden="true" />
            </h3>
            <div className="footer-contact-rows">
              <div className="footer-contact-row">
                <span className="footer-round-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div className="footer-contact-info">
                  <span className="footer-sublabel">Phone / WhatsApp</span>
                  <a
                    href={`tel:${COMPANY_DATA.phoneTel}`}
                    className="footer-val-link"
                  >
                    {COMPANY_DATA.phone}
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_DATA.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-val-link text-emerald-400 hover:underline"
                    style={{ color: "#34D399", fontSize: "11.5px", marginTop: "2px", display: "inline-block" }}
                  >
                    Direct WhatsApp Chat ↗
                  </a>
                </div>
              </div>

              <div className="footer-contact-row">
                <span className="footer-round-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div className="footer-contact-info">
                  <span className="footer-sublabel">Email Us</span>
                  <a
                    href={`mailto:${COMPANY_DATA.emailSales}`}
                    className="footer-val-link"
                  >
                    {COMPANY_DATA.emailSales}
                  </a>
                  <a
                    href={`mailto:${COMPANY_DATA.emailInfo}`}
                    className="footer-val-link"
                  >
                    {COMPANY_DATA.emailInfo}
                  </a>
                </div>
              </div>

              <div className="footer-contact-row">
                <span className="footer-round-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className="footer-contact-info">
                  <span className="footer-sublabel">Location</span>
                  <span className="footer-val-text">{COMPANY_DATA.location}</span>
                </div>
              </div>

              <div className="footer-contact-row">
                <span className="footer-round-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                </span>
                <div className="footer-contact-info">
                  <span className="footer-sublabel">VAT Registration Number</span>
                  <span className="footer-vat-number">
                    {COMPANY_DATA.vatNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Item Business Highlights Strip */}
        <div className="footer-highlights-strip">
          <div className="footer-highlight-item">
            <svg
              className="gold-highlight-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5" />
              <path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5" />
            </svg>
            <div className="highlight-text">
              <strong>{COMPANY_DATA.highlightsStrip[0].title}</strong>
              <span>{COMPANY_DATA.highlightsStrip[0].subtitle}</span>
            </div>
          </div>

          <div className="footer-highlight-sep" aria-hidden="true" />

          <div className="footer-highlight-item">
            <svg
              className="gold-highlight-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
              <path d="M2 7h20" />
            </svg>
            <div className="highlight-text">
              <strong>{COMPANY_DATA.highlightsStrip[1].title}</strong>
              <span>{COMPANY_DATA.highlightsStrip[1].subtitle}</span>
            </div>
          </div>

          <div className="footer-highlight-sep" aria-hidden="true" />

          <div className="footer-highlight-item">
            <svg
              className="gold-highlight-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            <div className="highlight-text">
              <strong>{COMPANY_DATA.highlightsStrip[2].title}</strong>
              <span>{COMPANY_DATA.highlightsStrip[2].subtitle}</span>
            </div>
          </div>

          <div className="footer-highlight-sep" aria-hidden="true" />

          <div className="footer-highlight-item">
            <svg
              className="gold-highlight-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path d="M15 18H9" />
              <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-4v10Z" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>
            <div className="highlight-text">
              <strong>{COMPANY_DATA.highlightsStrip[3].title}</strong>
              <span>{COMPANY_DATA.highlightsStrip[3].subtitle}</span>
            </div>
          </div>

          <div className="footer-highlight-sep" aria-hidden="true" />

          <div className="footer-highlight-item">
            <svg
              className="gold-highlight-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <div className="highlight-text">
              <strong>{COMPANY_DATA.highlightsStrip[4].title}</strong>
              <span>{COMPANY_DATA.highlightsStrip[4].subtitle}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Restrained Riyadh Skyline Silhouette */}
      <div className="footer-skyline-wrapper" aria-hidden="true">
        <svg
          className="footer-skyline-svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 L0,70 L35,70 L35,62 L55,62 L55,70 L90,70 L90,56 L120,56 L120,70 L160,70 L160,65 L190,65 L190,70 L240,70 L240,58 L270,58 L270,70 L320,70 L320,50 L345,50 L345,42 L365,42 L365,50 L390,50 L390,70 L440,70 L440,64 L480,64 L480,70 L520,70 L520,35 L535,35 L535,20 L545,8 L555,20 L555,35 L570,35 L570,70 L620,70 L620,62 L660,62 L660,70 L700,70 L700,54 L730,54 L730,70 L780,70 L780,48 L800,48 L800,28 L815,10 C820,10 820,24 820,24 C820,24 820,10 825,10 L840,28 L840,48 L860,48 L860,70 L910,70 L910,60 L950,60 L950,70 L990,70 L990,44 L1020,44 L1020,70 L1070,70 L1070,62 L1110,62 L1110,70 L1150,70 L1150,52 L1180,52 L1180,70 L1230,70 L1230,64 L1270,64 L1270,70 L1310,70 L1310,56 L1340,56 L1340,70 L1390,70 L1390,65 L1440,65 L1440,80 Z"
            fill="#162332"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Bottom Crimson Copyright Bar */}
      <div className="footer-copyright-bar">
        <div className="footer-copyright-corner" aria-hidden="true" />
        <div className="container footer-copyright-inner">
          <div className="copyright-text">
            <span>
              &copy; {currentYear} {COMPANY_DATA.name} ({COMPANY_DATA.arabicName}).
              All Rights Reserved.
            </span>
          </div>
          <div className="copyright-legal">
            <Link href="#contact">Privacy Policy</Link>
            <span className="legal-sep" aria-hidden="true">
              &bull;
            </span>
            <Link href="#contact">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
