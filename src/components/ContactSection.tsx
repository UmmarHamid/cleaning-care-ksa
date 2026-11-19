"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "whatsapp" | "error" | null;
    message: string;
    waUrl?: string;
  }>({ type: null, message: "" });

  const [formData, setFormData] = useState({
    company: "",
    person: "",
    phone: "",
    email: "",
    category: "",
    volume: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.company || !formData.person || !formData.phone || !formData.email || !formData.category) {
      setFeedback({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    const waUrl = buildWhatsAppInquiryUrl(formData);

    setIsSubmitting(true);
    setFeedback({
      type: null,
      message: "Submitting your inquiry...",
    });

    try {
      const body = new FormData();
      body.append("access_key", "YOUR_ACCESS_KEY_HERE");
      body.append("subject", "New Bulk Inquiry - Cleaning Care Trading Co.");
      body.append("from_name", "Cleaning Care Website");
      body.append("company", formData.company);
      body.append("person", formData.person);
      body.append("phone", formData.phone);
      body.append("email", formData.email);
      body.append("category", formData.category);
      body.append("volume", formData.volume || "Not specified");
      body.append("details", formData.details || "Not specified");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });

      const result = await response.json();

      if (result.success) {
        setFeedback({
          type: "success",
          message:
            "Thank you! Your quotation request has been submitted successfully. Our sales team will get back to you shortly.",
        });
        setFormData({
          company: "",
          person: "",
          phone: "",
          email: "",
          category: "",
          volume: "",
          details: "",
        });
      } else {
        // Fallback to WhatsApp
        setFeedback({
          type: "whatsapp",
          message: "Inquiry ready! Click below to send directly via WhatsApp:",
          waUrl,
        });
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      // Network issue fallback to WhatsApp
      setFeedback({
        type: "whatsapp",
        message:
          "Direct connection ready. Click below to send your inquiry directly via WhatsApp:",
        waUrl,
      });
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      {/* Decorative warehouse background and diagonal white & yellow separators */}
      <div className="contact-bg-deco" aria-hidden="true">
        <div className="contact-bg-photo">
          <Image
            src="/assets/warehouse-exterior.webp"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="contact-bg-overlay" />
        </div>
        <svg
          className="contact-bg-divider-svg"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <polygon
            points="948,0 976,0 396,600 368,600"
            fill="#FFFFFF"
            opacity="0.95"
          />
          <polygon points="976,0 994,0 414,600 396,600" fill="#F2B705" />
        </svg>
      </div>

      <div className="container contact-container">
        <div className="section-heading contact-heading">
          <div className="heading-with-lines">
            <span className="heading-line" aria-hidden="true" />
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <span className="heading-line" aria-hidden="true" />
          </div>
          <h2>Request a Bulk Quote</h2>
          <p className="section-intro">
            Contact our sales team for product inquiries, bulk pricing and supply
            arrangements for your business across Saudi Arabia.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Information Card with Map */}
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
                      className="contact-detail-value contact-link"
                    >
                      {COMPANY_DATA.phone}
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
                      className="contact-detail-value contact-link"
                    >
                      {COMPANY_DATA.emailSales}
                    </a>
                    <a
                      href={`mailto:${COMPANY_DATA.emailInfo}`}
                      className="contact-detail-value contact-link"
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
                    <span className="contact-detail-value vat-number">
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
                  className="map-action-link"
                >
                  <span>View on Google Maps</span>
                  <span className="map-action-arrow">↗</span>
                </a>
              </div>
            </div>
          </article>

          {/* Right Column: Bulk Inquiry Form Card */}
          <article className="contact-form-card">
            <div className="form-card-head">
              <span className="form-head-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                  <path d="M9 11h6" />
                  <path d="M9 15h4" />
                </svg>
              </span>
              <div className="form-head-text">
                <h3>Bulk Inquiry Form</h3>
                <p>
                  Tell us your requirements and our sales team will get back to
                  you with a competitive quotation shortly.
                </p>
              </div>
            </div>

            <form
              className="bulk-form"
              id="inquiry-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-row-2col">
                <div className="form-field">
                  <label htmlFor="form-company">
                    Company Name <span className="req">*</span>
                  </label>
                  <div className="input-wrap">
                    <svg
                      className="field-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                      <path d="M10 6h4" />
                      <path d="M10 10h4" />
                      <path d="M10 14h4" />
                      <path d="M10 18h4" />
                    </svg>
                    <input
                      type="text"
                      id="form-company"
                      name="company"
                      required
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="form-person">
                    Contact Person <span className="req">*</span>
                  </label>
                  <div className="input-wrap">
                    <svg
                      className="field-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <input
                      type="text"
                      id="form-person"
                      name="person"
                      required
                      placeholder="Full name"
                      value={formData.person}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-field">
                  <label htmlFor="form-phone">
                    Phone / WhatsApp <span className="req">*</span>
                  </label>
                  <div className="input-wrap">
                    <svg
                      className="field-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <input
                      type="tel"
                      id="form-phone"
                      name="phone"
                      required
                      placeholder="+966 5x xxx xxxx"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="form-email">
                    Email Address <span className="req">*</span>
                  </label>
                  <div className="input-wrap">
                    <svg
                      className="field-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      required
                      placeholder="your.name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-field">
                  <label htmlFor="form-category">
                    Product Category <span className="req">*</span>
                  </label>
                  <div className="input-wrap">
                    <svg
                      className="field-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" y1="22" x2="12" y2="12" />
                    </svg>
                    <select
                      id="form-category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">Select product category</option>
                      <option value="Cleaning Materials">Cleaning Materials</option>
                      <option value="Hygiene & Disposables">
                        Hygiene &amp; Disposables
                      </option>
                      <option value="Plastic Drums & Containers">
                        Plastic Drums &amp; Containers
                      </option>
                      <option value="Cleaning Equipment & Safety">
                        Cleaning Equipment &amp; Safety
                      </option>
                      <option value="Multiple Categories">
                        Multiple Categories
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="form-volume">Estimated Order Volume</label>
                  <div className="input-wrap">
                    <svg
                      className="field-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    </svg>
                    <input
                      type="text"
                      id="form-volume"
                      name="volume"
                      placeholder="e.g. 100 units, 20 drums, etc."
                      value={formData.volume}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-field full-width">
                <label htmlFor="form-details">Additional Details</label>
                <div className="input-wrap textarea-wrap">
                  <svg
                    className="field-icon textarea-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <textarea
                    id="form-details"
                    name="details"
                    rows={3}
                    placeholder="Tell us about your specific requirements, quantities or delivery timeline"
                    value={formData.details}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                className="button button-red btn-submit-inquiry"
                type="submit"
                id="btn-submit"
                disabled={isSubmitting}
              >
                <span className="btn-text">
                  {isSubmitting ? "Sending Inquiry…" : "Send Inquiry"}
                </span>
                <svg
                  className="btn-send-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              {feedback.type && (
                <div
                  className={`form-feedback ${
                    feedback.type === "success" ? "success" : ""
                  }`}
                  aria-live="polite"
                >
                  {feedback.message}{" "}
                  {feedback.waUrl && (
                    <a
                      href={feedback.waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#15803D",
                        fontWeight: 700,
                        textDecoration: "underline",
                        display: "inline-block",
                        marginTop: "6px",
                      }}
                    >
                      Click here to send via WhatsApp →
                    </a>
                  )}
                </div>
              )}
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
