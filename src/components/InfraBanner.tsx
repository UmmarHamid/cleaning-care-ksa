import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";

export function InfraBanner() {
  return (
    <section id="infrastructure-banner" className="section infra-banner-section">
      <div className="container">
        <div className="infra-banner">
          <div className="infra-panel">
            <h2>Our Infrastructure in Riyadh</h2>
            <p>
              A strong logistics and distribution setup to ensure consistent supply,
              fast delivery, and reliable service across the Kingdom.
            </p>
            <Link href="#infrastructure" className="button button-infra-white">
              Explore Our Infrastructure <span>→</span>
            </Link>
          </div>
          <div className="infra-visual">
            <Image
              src="/assets/warehouse-interior.webp"
              alt="Clean, organized Cleaning Care logistics warehouse in Riyadh with tall pallet racks"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="infra-diagonal-strip" aria-hidden="true" />
          </div>
          <div className="infra-stat-card">
            <div className="infra-stat-row">
              <span className="infra-stat-icon" aria-hidden="true">
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
              <div className="infra-stat-info">
                <strong className="infra-stat-num">
                  {COMPANY_DATA.stats[0].metric}
                </strong>
                <span className="infra-stat-label">
                  Fully Equipped Warehouses
                </span>
              </div>
            </div>
            <div className="infra-stat-divider" aria-hidden="true" />
            <div className="infra-stat-row">
              <span className="infra-stat-icon" aria-hidden="true">
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
              <div className="infra-stat-info">
                <strong className="infra-stat-num">
                  {COMPANY_DATA.stats[1].metric}
                </strong>
                <span className="infra-stat-label">Retail Stores in Riyadh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
