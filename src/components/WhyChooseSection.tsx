import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";

export function WhyChooseSection() {
  const { strengths } = COMPANY_DATA;

  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <div className="why-eyebrow-wrap">
              <span className="why-eyebrow">WHY CHOOSE CLEANING CARE?</span>
              <span className="why-eyebrow-line" aria-hidden="true" />
            </div>
            <h2>Your Reliable B2B Supply Partner in Saudi Arabia</h2>
            <p className="section-intro">
              We combine extensive inventory, competitive pricing and reliable service
              to meet the cleaning and hygiene supply needs of businesses across the
              Kingdom.
            </p>
            <div className="strength-grid">
              {/* Strength 1 */}
              <div className="strength">
                <span className="strength-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m7.5 4.27 9 5.15" />
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                </span>
                <div className="strength-body">
                  <h3>{strengths[0].title}</h3>
                  <p>{strengths[0].description}</p>
                </div>
              </div>

              {/* Strength 2 */}
              <div className="strength">
                <span className="strength-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <div className="strength-body">
                  <h3>{strengths[1].title}</h3>
                  <p>{strengths[1].description}</p>
                </div>
              </div>

              {/* Strength 3 */}
              <div className="strength">
                <span className="strength-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                </span>
                <div className="strength-body">
                  <h3>{strengths[2].title}</h3>
                  <p>{strengths[2].description}</p>
                </div>
              </div>

              {/* Strength 4 */}
              <div className="strength">
                <span className="strength-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <path d="M15 18H9" />
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                    <circle cx="17" cy="18.5" r="2.5" />
                    <circle cx="7" cy="18.5" r="2.5" />
                  </svg>
                </span>
                <div className="strength-body">
                  <h3>{strengths[3].title}</h3>
                  <p>{strengths[3].description}</p>
                </div>
              </div>

              {/* Strength 5 */}
              <div className="strength">
                <span className="strength-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                  </svg>
                </span>
                <div className="strength-body">
                  <h3>{strengths[4].title}</h3>
                  <p>{strengths[4].description}</p>
                </div>
              </div>

              {/* Strength 6 */}
              <div className="strength">
                <span className="strength-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <div className="strength-body">
                  <h3>{strengths[5].title}</h3>
                  <p>{strengths[5].description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-photo">
            <Image
              src="/assets/warehouse-team.webp"
              alt="Cleaning Care warehouse specialist in safety vest managing operations"
              fill
              className="object-cover"
              unoptimized
            />
            <svg
              className="why-curve"
              viewBox="0 0 100 500"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="why-curve-mask"
                d="M 0,0 L 48,0 C 8,150 20,320 95,500 L 0,500 Z"
                fill="#FFFFFF"
              />
              <path
                className="why-curve-stroke"
                d="M 48,0 C 8,150 20,320 95,500"
                fill="none"
                stroke="#D32027"
                strokeWidth="14"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
