import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";

export function InfrastructureSection() {
  const { infrastructureFeatures, facilities } = COMPANY_DATA;

  return (
    <section id="infrastructure" className="section infrastructure-section">
      <div className="container">
        <div className="section-heading infra-heading">
          <div className="heading-with-lines">
            <span className="heading-line" aria-hidden="true" />
            <span className="infra-eyebrow">OUR INFRASTRUCTURE</span>
            <span className="heading-line" aria-hidden="true" />
          </div>
          <h2>Strong Facilities for a Reliable Supply</h2>
          <p className="section-intro">
            A well-established logistics and distribution network in Riyadh to ensure
            consistent inventory, fast delivery and uninterrupted supply for our
            customers across Saudi Arabia.
          </p>
        </div>

        <div className="infra-main-grid">
          <div className="infra-warehouse-photo">
            <Image
              src="/assets/warehouse-interior.webp"
              alt="Organized warehouse interior with inventory and high pallet racking"
              fill
              className="object-cover"
              unoptimized
            />
            <svg
              className="infra-curve"
              viewBox="0 0 100 500"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="infra-curve-mask"
                d="M 100,0 L 52,0 C 92,150 80,320 5,500 L 100,500 Z"
                fill="#FFFFFF"
              />
              <path
                className="infra-curve-stroke"
                d="M 52,0 C 92,150 80,320 5,500"
                fill="none"
                stroke="#D32027"
                strokeWidth="14"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="infra-features-panel">
            <h3>
              Warehouse &amp;{" "}
              <span className="highlight-red">Distribution Facilities</span>
            </h3>
            <p>
              Our company operates a well-organized wholesale warehouse and
              storage facility designed to maintain a large inventory of cleaning
              products, materials, plastics and hygiene supplies.
            </p>
            <div className="infra-feature-list">
              {/* Feature 1 */}
              <div className="infra-feature-row">
                <span className="infra-feature-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5" />
                    <path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5" />
                  </svg>
                </span>
                <span>{infrastructureFeatures[0]}</span>
              </div>

              {/* Feature 2 */}
              <div className="infra-feature-row">
                <span className="infra-feature-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21V9.5L12 3l9 6.5V21H3z" />
                    <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
                    <rect x="10" y="9" width="4" height="3" />
                  </svg>
                </span>
                <span>{infrastructureFeatures[1]}</span>
              </div>

              {/* Feature 3 */}
              <div className="infra-feature-row">
                <span className="infra-feature-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                </span>
                <span>{infrastructureFeatures[2]}</span>
              </div>

              {/* Feature 4 */}
              <div className="infra-feature-row">
                <span className="infra-feature-icon" aria-hidden="true">
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
                <span>{infrastructureFeatures[3]}</span>
              </div>

              {/* Feature 5 */}
              <div className="infra-feature-row">
                <span className="infra-feature-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 16h6" />
                    <path d="M19 13v6" />
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="m7.5 4.27 9 5.15" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                </span>
                <span>{infrastructureFeatures[4]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="facility-cards-grid">
          {/* Card 1: 3 Warehouses */}
          <div className="facility-card facility-card-red">
            <div className="facility-card-body">
              <div className="facility-stat-top">
                <span className="facility-stat-num">{facilities[0].num}</span>
                <span className="facility-stat-icon-wrap" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21V9.5L12 3l9 6.5V21H3z" />
                    <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
                    <rect x="10" y="9" width="4" height="3" />
                  </svg>
                </span>
              </div>
              <h3>{facilities[0].title}</h3>
              <p>{facilities[0].description}</p>
            </div>
            <div className="facility-card-img">
              <Image
                src={facilities[0].image}
                alt={facilities[0].imageAlt}
                width={280}
                height={200}
                unoptimized
              />
            </div>
          </div>

          {/* Card 2: 2 Retail Stores */}
          <div className="facility-card facility-card-white">
            <div className="facility-card-body">
              <div className="facility-stat-top">
                <span className="facility-stat-num">{facilities[1].num}</span>
                <span className="facility-stat-icon-wrap" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                    <path d="M2 7h20" />
                  </svg>
                </span>
              </div>
              <h3>{facilities[1].title}</h3>
              <p>{facilities[1].description}</p>
            </div>
            <div className="facility-card-img">
              <Image
                src={facilities[1].image}
                alt={facilities[1].imageAlt}
                width={280}
                height={200}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
