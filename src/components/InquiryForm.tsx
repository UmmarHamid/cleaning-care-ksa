"use client";

import React, { useState } from "react";
import { CATEGORIES } from "@/data/catalog";
import { buildWhatsAppInquiryUrl, InquiryData } from "@/lib/whatsapp";

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState<InquiryData>({
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
    if (errorMessage) setErrorMessage(null);
  };

  const validateForm = () => {
    if (!formData.company.trim()) return "Company name is required.";
    if (!formData.person.trim()) return "Contact person name is required.";
    if (!formData.phone.trim()) return "Phone or WhatsApp number is required.";
    if (!formData.email.trim()) return "Email address is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim()))
      return "Please enter a valid email address.";
    if (!formData.category) return "Please select a product category.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

      const payload = {
        access_key: accessKey,
        subject: `New B2B Bulk Quote Request — ${formData.company}`,
        from_name: "Cleaning Care B2B Web Platform",
        company: formData.company,
        contact_person: formData.person,
        phone_number: formData.phone,
        email: formData.email,
        product_category: formData.category,
        estimated_volume: formData.volume || "Not specified",
        order_details: formData.details || "Standard wholesale catalog pricing",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        // If API key is invalid or submission fails, offer immediate WhatsApp transition
        const waUrl = buildWhatsAppInquiryUrl(formData);
        setErrorMessage(
          "Our automated mail server is busy. Your inquiry is ready to send directly via our WhatsApp Sales Desk below:"
        );
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      // Network failure fallback
      const waUrl = buildWhatsAppInquiryUrl(formData);
      setErrorMessage(
        "Network dispatch error. Please click below to send your quotation request directly via WhatsApp:"
      );
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      company: "",
      person: "",
      phone: "",
      email: "",
      category: "",
      volume: "",
      details: "",
    });
    setIsSuccess(false);
    setErrorMessage(null);
  };

  const directWhatsAppUrl = buildWhatsAppInquiryUrl(formData);

  return (
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
          <h3>Request an Official Bulk Quote</h3>
          <p>
            Submit your procurement specifications or contract inquiry. Our commercial sales desk in Riyadh will provide an itemized proposal.
          </p>
        </div>
      </div>

      {isSuccess ? (
        <div className="p-6 text-center bg-slate-50 rounded-xl border border-slate-200 mt-4 space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-heading font-extrabold text-xl text-slate-900">
            Quotation Request Received!
          </h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for contacting Cleaning Care Trading Co. Our commercial procurement team in Riyadh has received your specifications and will respond within 2-4 business hours.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs min-h-[44px] transition-colors"
            >
              <span>Follow up on WhatsApp (+966 56 282 1089)</span>
              <span aria-hidden="true">→</span>
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs min-h-[44px] transition-colors cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form
          className="bulk-form"
          id="inquiry-form"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Row 1: Company & Contact Person */}
          <div className="form-row-2col">
            <div className="form-field">
              <label htmlFor="form-company">
                Company Name <span className="req">*</span>
              </label>
              <div className="input-wrap">
                <input
                  type="text"
                  id="form-company"
                  name="company"
                  required
                  placeholder="e.g. Al Bawani, Alfanar..."
                  value={formData.company}
                  onChange={handleChange}
                  className="min-h-[44px]"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="form-person">
                Contact Person <span className="req">*</span>
              </label>
              <div className="input-wrap">
                <input
                  type="text"
                  id="form-person"
                  name="person"
                  required
                  placeholder="Procurement Manager name"
                  value={formData.person}
                  onChange={handleChange}
                  className="min-h-[44px]"
                  aria-required="true"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="form-row-2col">
            <div className="form-field">
              <label htmlFor="form-phone">
                Phone / WhatsApp <span className="req">*</span>
              </label>
              <div className="input-wrap">
                <input
                  type="tel"
                  id="form-phone"
                  name="phone"
                  required
                  placeholder="+966 5x xxx xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  className="min-h-[44px]"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="form-email">
                Corporate Email <span className="req">*</span>
              </label>
              <div className="input-wrap">
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  required
                  placeholder="procurement@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="min-h-[44px]"
                  aria-required="true"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Product Category & Order Volume */}
          <div className="form-row-2col">
            <div className="form-field">
              <label htmlFor="form-category">
                Product Division <span className="req">*</span>
              </label>
              <div className="input-wrap">
                <select
                  id="form-category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="min-h-[44px]"
                  aria-required="true"
                >
                  <option value="">Select product division</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                  <option value="Multiple Product Lines">Multiple Product Lines</option>
                  <option value="Institutional Tender / Custom Order">Institutional Tender / Custom Order</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="form-volume">Estimated Order Volume</label>
              <div className="input-wrap">
                <input
                  type="text"
                  id="form-volume"
                  name="volume"
                  placeholder="e.g. 50 drums, monthly contract"
                  value={formData.volume}
                  onChange={handleChange}
                  className="min-h-[44px]"
                />
              </div>
            </div>
          </div>

          {/* Row 4: Details & Specifications */}
          <div className="form-field">
            <label htmlFor="form-details">Order Details &amp; Specifications</label>
            <textarea
              id="form-details"
              name="details"
              rows={3}
              placeholder="Specify capacities (e.g. 1100G, 240L, 75cm), delivery location in Riyadh, or RFP requirements..."
              value={formData.details}
              onChange={handleChange}
            />
          </div>

          {/* Error / Fallback Box */}
          {errorMessage && (
            <div
              className="p-3.5 rounded-lg text-xs bg-amber-50 text-amber-900 border border-amber-200 mb-4 space-y-2"
              role="alert"
            >
              <p className="font-semibold">{errorMessage}</p>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 underline"
              >
                <span>Send via WhatsApp (+966 56 282 1089) Now</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}

          {/* Dual Action Submit Row */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              className="button button-red w-full min-h-[48px] font-bold text-sm cursor-pointer shadow-xs disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Submitting Quotation Request...</span>
                </>
              ) : (
                <>
                  <span>Submit Bulk Quote Request</span>
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp Quote Button */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-whatsapp w-full min-h-[44px] font-semibold text-xs flex items-center justify-center gap-2 text-emerald-700 border-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              <svg className="w-4 h-4 fill-emerald-600" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.84 12.18 15.89C12.76 16.14 13.21 16.29 13.57 16.41C14.16 16.59 14.69 16.57 15.12 16.51C15.6 16.44 16.6 15.9 16.81 15.31C17.02 14.72 17.02 14.22 16.96 14.11C16.89 14.01 16.73 13.95 16.48 13.82C16.24 13.7 15.02 13.1 14.8 13.02C14.57 12.94 14.41 12.9 14.25 13.15C14.08 13.39 13.61 13.95 13.47 14.11C13.33 14.27 13.19 14.29 12.94 14.17C12.7 14.04 11.92 13.79 10.99 12.96C10.27 12.32 9.78 11.52 9.64 11.28C9.5 11.03 9.62 10.9 9.75 10.78C9.86 10.67 10 10.48 10.12 10.34C10.24 10.2 10.28 10.1 10.36 9.94C10.44 9.77 10.4 9.63 10.34 9.51C10.28 9.39 9.8 8.21 9.6 7.72C9.4 7.24 9.21 7.31 9.06 7.3C8.92 7.3 8.75 7.3 8.58 7.3L8.53 7.33Z" />
              </svg>
              <span>Or Send via WhatsApp Directly</span>
            </a>
          </div>
        </form>
      )}
    </article>
  );
}
