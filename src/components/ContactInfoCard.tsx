import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { buildWhatsAppQuoteUrl } from "@/lib/whatsapp";

export function ContactInfoCard() {
  const whatsappUrl = buildWhatsAppQuoteUrl();
  return (
    <article className="contact-info-card">
      <div className="contact-card-head">
        <span className="contact-gold-accent" aria-hidden="true" />
        <div className="contact-head-text">
          <h3>
            Contact
            <br />
            Cleaning Care Trading Co.
          </h3>
          <p>
            Our team is ready to support your business with product
            information, quotations and reliable supply solutions across the
            Kingdom.
          </p>
        </div>
      </div>

      <div className="contact-card-body">
        {/* Left Details */}
        <div className="contact-details-col">
          <div className="contact-detail-row">
            <span className="contact-icon-wrap" aria-hidden="true">
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
            <div className="contact-detail-text">
              <span className="contact-detail-title">PHONE / WHATSAPP</span>
              <a
                href={`tel:${COMPANY_DATA.phoneTel}`}
                className="contact-detail-value contact-link min-h-[44px] flex items-center"
              >
                {COMPANY_DATA.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-semibold mt-1"
              >
                <span>Chat on WhatsApp (+966 56 282 1089)</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="contact-detail-row">
            <span className="contact-icon-wrap" aria-hidden="true">
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
            <div className="contact-detail-text">
              <span className="contact-detail-title">EMAIL US</span>
              <a
                href={`mailto:${COMPANY_DATA.emailSales}`}
                className="contact-detail-value contact-link min-h-[44px] flex items-center"
              >
                {COMPANY_DATA.emailSales}
              </a>
              <a
                href={`mailto:${COMPANY_DATA.emailInfo}`}
                className="contact-detail-value contact-link min-h-[44px] flex items-center"
              >
                {COMPANY_DATA.emailInfo}
              </a>
            </div>
          </div>

          <div className="contact-detail-row">
            <span className="contact-icon-wrap" aria-hidden="true">
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
            <div className="contact-detail-text">
              <span className="contact-detail-title">OUR LOCATION</span>
              <span className="contact-detail-value">
                {COMPANY_DATA.location}
              </span>
            </div>
          </div>

          <div className="contact-detail-row">
            <span className="contact-icon-wrap" aria-hidden="true">
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
            <div className="contact-detail-text">
              <span className="contact-detail-title">
                VAT REGISTRATION NUMBER
              </span>
              <span className="contact-detail-value vat-number font-mono">
                {COMPANY_DATA.vatNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Right Map Preview */}
        <div className="contact-map-col">
          <div className="map-embed-frame">
            <iframe
              src={COMPANY_DATA.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cleaning Care Trading Co. location in Riyadh"
            />
            <div className="map-center-pin" aria-hidden="true">
              <div className="map-pin-badge">
                <span className="map-pin-dot" />
                <span className="map-pin-text">
                  <strong>Riyadh</strong> · الرياض
                </span>
              </div>
              <svg
                className="map-pin-svg"
                viewBox="0 0 24 24"
                fill="#D32027"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
          <a
            href={COMPANY_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-action-link min-h-[44px] flex items-center justify-between"
          >
            <span>View on Google Maps</span>
            <span className="map-action-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
