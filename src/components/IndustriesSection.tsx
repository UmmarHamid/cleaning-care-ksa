import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";

export function IndustriesSection() {
  const { industries } = COMPANY_DATA;

  return (
    <section id="industries" className="section industries-section">
      <div className="container">
        <div className="section-heading">
          <div className="heading-with-lines">
            <span className="heading-line" aria-hidden="true" />
            <h2>Industries We Serve</h2>
            <span className="heading-line" aria-hidden="true" />
          </div>
          <p className="section-intro">
            Supplying high-quality cleaning and hygiene products to a wide range of
            business sectors across Saudi Arabia.
          </p>
        </div>

        <div className="industry-grid">
          {/* 1. Cleaning Companies & Contractors */}
          <article className="industry-card">
            <div className="industry-image">
              <Image
                src={industries[0].image}
                alt={industries[0].alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="industry-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m14 11 7-7" />
                <path d="M9 16c-1.5 0-3-.5-4-1.5-1.5-1.5-2-4-2-6 2 0 4.5.5 6 2 1 1 1.5 2.5 1.5 4" />
                <path d="M12.5 17.5 16 14l3 3-3.5 3.5a3.54 3.54 0 0 1-5 0l2-2Z" />
              </svg>
            </div>
            <h3>
              Cleaning Companies<br />
              &amp; Contractors
            </h3>
          </article>

          {/* 2. Corporate Offices */}
          <article className="industry-card">
            <div className="industry-image">
              <Image
                src={industries[1].image}
                alt={industries[1].alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="industry-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
            </div>
            <h3>Corporate Offices</h3>
          </article>

          {/* 3. Hotels & Restaurants (HORECA) */}
          <article className="industry-card">
            <div className="industry-image">
              <Image
                src={industries[2].image}
                alt={industries[2].alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="industry-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
                <path d="M15 2v19" />
                <path d="M5 2v7a4 4 0 0 0 4 4v8" />
                <path d="M9 2v4" />
              </svg>
            </div>
            <h3>
              Hotels &amp; Restaurants<br />
              (HORECA)
            </h3>
          </article>

          {/* 4. Hospitals & Clinics */}
          <article className="industry-card">
            <div className="industry-image">
              <Image
                src={industries[3].image}
                alt={industries[3].alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="industry-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 6v12" />
                <path d="M6 12h12" />
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
            </div>
            <h3>Hospitals &amp; Clinics</h3>
          </article>

          {/* 5. Schools & Universities */}
          <article className="industry-card">
            <div className="industry-image">
              <Image
                src={industries[4].image}
                alt={industries[4].alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="industry-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
            </div>
            <h3>Schools &amp; Universities</h3>
          </article>

          {/* 6. Facility Management & Maintenance Companies */}
          <article className="industry-card">
            <div className="industry-image">
              <Image
                src={industries[5].image}
                alt={industries[5].alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="industry-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>
              Facility Management &amp;<br />
              Maintenance Companies
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}
