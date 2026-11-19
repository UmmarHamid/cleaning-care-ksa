import React from "react";
import { COMPANY_DATA } from "@/data/company";

export function StatsBar() {
  return (
    <section className="stats-wrap" aria-label="Company highlights">
      <div className="stats-card">
        {/* Stat 1: 3 Warehouses */}
        <div className="stat">
          <span className="stat-icon" aria-hidden="true">
            <svg
              className="stat-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21V9.5L12 3l9 6.5V21H3z" />
              <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
              <rect x="10" y="9" width="4" height="3" />
            </svg>
          </span>
          <div className="stat-content">
            <strong className="stat-metric">{COMPANY_DATA.stats[0].metric}</strong>
            <span className="stat-desc">
              <span className="stat-label">{COMPANY_DATA.stats[0].label}</span>
              <br />
              {COMPANY_DATA.stats[0].subtext}
            </span>
          </div>
        </div>

        {/* Stat 2: 2 Retail Stores */}
        <div className="stat">
          <span className="stat-icon" aria-hidden="true">
            <svg
              className="stat-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
              <path d="M2 7h20" />
            </svg>
          </span>
          <div className="stat-content">
            <strong className="stat-metric">{COMPANY_DATA.stats[1].metric}</strong>
            <span className="stat-desc">
              <span className="stat-label">{COMPANY_DATA.stats[1].label}</span>
              <br />
              {COMPANY_DATA.stats[1].subtext}
            </span>
          </div>
        </div>

        {/* Stat 3: Bulk Supply */}
        <div className="stat">
          <span className="stat-icon" aria-hidden="true">
            <svg
              className="stat-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 2 10 5-10 5L2 7l10-5Z" />
              <path d="m2 12 10 5 10-5" />
              <path d="m2 17 10 5 10-5" />
            </svg>
          </span>
          <div className="stat-content">
            <strong className="stat-metric stat-metric-text">
              {COMPANY_DATA.stats[2].metric}
            </strong>
            <span className="stat-desc">{COMPANY_DATA.stats[2].label}</span>
          </div>
        </div>

        {/* Stat 4: Fast Dispatch */}
        <div className="stat">
          <span className="stat-icon" aria-hidden="true">
            <svg
              className="stat-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </span>
          <div className="stat-content">
            <strong className="stat-metric stat-metric-text">
              {COMPANY_DATA.stats[3].metric}
            </strong>
            <span className="stat-desc">
              {COMPANY_DATA.stats[3].label}
              <br />
              {COMPANY_DATA.stats[3].subtext}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
