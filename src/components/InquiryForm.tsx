"use client";

import React, { useState } from "react";
import { CATEGORIES } from "@/data/catalog";
import { buildWhatsAppInquiryUrl, InquiryData } from "@/lib/whatsapp";
import {
  ClipboardList,
  CheckCircle2,
  Loader2,
  ArrowRight,
  MessageCircle,
  MessageCircleMore,
} from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
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
    if (!emailRegex.test(formData.email.trim())) return "Please enter a valid email address.";
    if (!formData.category) return "Please select a product division.";
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
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

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
        const waUrl = buildWhatsAppInquiryUrl(formData);
        setErrorMessage(
          "Our automated mail server is busy. Your inquiry is ready to send directly via our WhatsApp Sales Desk below:",
        );
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      const waUrl = buildWhatsAppInquiryUrl(formData);
      setErrorMessage(
        "Network dispatch error. Please click below to send your quotation request directly via WhatsApp:",
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
    <SpotlightCard className='h-full rounded-2xl' maxTilt={1.5} hoverScale={1.005}>
      <article className='rounded-2xl border border-border-subtle overflow-hidden shadow-card bg-white p-6 sm:p-8 flex flex-col h-full'>
      {/* Form Card Header */}
      <div className='flex items-start gap-3.5 pb-6 mb-6 border-b border-border-subtle'>
        <span
          className='w-10 h-10 rounded-xl bg-red-50 text-brand-red border border-red-100 flex items-center justify-center shrink-0 mt-0.5'
          aria-hidden='true'
        >
          <ClipboardList className='w-5 h-5' />
        </span>
        <div>
          <h3 className='font-heading font-extrabold text-xl text-slate-dark tracking-tight leading-tight mb-1'>
            Bulk Inquiry Form
          </h3>
          <p className='font-body text-xs sm:text-sm text-slate-body leading-relaxed'>
            Submit your procurement specifications or contract inquiry. Our commercial sales desk in
            Riyadh will provide an itemized proposal.
          </p>
        </div>
      </div>

      {isSuccess ? (
        <div className='p-6 text-center bg-page-bg rounded-xl border border-border-subtle my-auto space-y-4'>
          <div className='w-14 h-14 bg-success-light text-success rounded-full flex items-center justify-center mx-auto shadow-xs'>
            <CheckCircle2 className='w-8 h-8' />
          </div>
          <h4 className='font-heading font-extrabold text-xl text-slate-dark'>
            Quotation Request Received!
          </h4>
          <p className='text-sm text-slate-body max-w-md mx-auto leading-relaxed'>
            Thank you for contacting Cleaning Care Trading Co. Our commercial procurement team in
            Riyadh has received your specifications and will respond within 2-4 business hours.
          </p>

          <div className='pt-2 flex flex-col sm:flex-row items-center justify-center gap-3'>
            <a
              href={directWhatsAppUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-success hover:bg-success-dark text-white font-semibold text-xs min-h-touch transition-colors'
            >
              <MessageCircle className='w-4 h-4' />
              <span>Follow up on WhatsApp (+966 56 282 1089)</span>
              <ArrowRight className='w-3.5 h-3.5' aria-hidden='true' />
            </a>
            <button
              type='button'
              onClick={resetForm}
              className='w-full sm:w-auto px-4 py-2.5 rounded-lg border border-border-subtle text-slate-body hover:bg-slate-100 font-semibold text-xs min-h-touch transition-colors cursor-pointer'
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form id='inquiry-form' onSubmit={handleSubmit} noValidate className='flex flex-col gap-4'>
          {/* Row 1: Company & Contact Person */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='form-company'
                className='block text-xs font-heading font-bold text-slate-dark tracking-wider uppercase mb-1.5'
              >
                Company Name <span className='text-brand-red'>*</span>
              </label>
              <input
                type='text'
                id='form-company'
                name='company'
                required
                placeholder='e.g. Al Bawani, Alfanar...'
                value={formData.company}
                onChange={handleChange}
                className='w-full px-3.5 py-2.5 bg-page-bg border border-border-subtle rounded-lg text-sm text-slate-dark placeholder-slate-400 outline-none focus:border-brand-red focus:bg-white focus:ring-1 focus:ring-brand-red min-h-touch transition-all'
                aria-required='true'
              />
            </div>

            <div>
              <label
                htmlFor='form-person'
                className='block text-xs font-heading font-bold text-slate-dark tracking-wider uppercase mb-1.5'
              >
                Contact Person <span className='text-brand-red'>*</span>
              </label>
              <input
                type='text'
                id='form-person'
                name='person'
                required
                placeholder='Procurement Manager name'
                value={formData.person}
                onChange={handleChange}
                className='w-full px-3.5 py-2.5 bg-page-bg border border-border-subtle rounded-lg text-sm text-slate-dark placeholder-slate-400 outline-none focus:border-brand-red focus:bg-white focus:ring-1 focus:ring-brand-red min-h-touch transition-all'
                aria-required='true'
              />
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='form-phone'
                className='block text-xs font-heading font-bold text-slate-dark tracking-wider uppercase mb-1.5'
              >
                Phone / WhatsApp <span className='text-brand-red'>*</span>
              </label>
              <input
                type='tel'
                id='form-phone'
                name='phone'
                required
                placeholder='+966 5x xxx xxxx'
                value={formData.phone}
                onChange={handleChange}
                className='w-full px-3.5 py-2.5 bg-page-bg border border-border-subtle rounded-lg text-sm text-slate-dark placeholder-slate-400 outline-none focus:border-brand-red focus:bg-white focus:ring-1 focus:ring-brand-red min-h-touch transition-all'
                aria-required='true'
              />
            </div>

            <div>
              <label
                htmlFor='form-email'
                className='block text-xs font-heading font-bold text-slate-dark tracking-wider uppercase mb-1.5'
              >
                Corporate Email <span className='text-brand-red'>*</span>
              </label>
              <input
                type='email'
                id='form-email'
                name='email'
                required
                placeholder='procurement@company.com'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-3.5 py-2.5 bg-page-bg border border-border-subtle rounded-lg text-sm text-slate-dark placeholder-slate-400 outline-none focus:border-brand-red focus:bg-white focus:ring-1 focus:ring-brand-red min-h-touch transition-all'
                aria-required='true'
              />
            </div>
          </div>

          {/* Row 3: Product Division & Order Volume */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='form-category'
                className='block text-xs font-heading font-bold text-slate-dark tracking-wider uppercase mb-1.5'
              >
                Product Division <span className='text-brand-red'>*</span>
              </label>
              <select
                id='form-category'
                name='category'
                required
                value={formData.category}
                onChange={handleChange}
                className='appearance-none w-full px-3.5 py-2.5 bg-page-bg border border-border-subtle rounded-lg text-sm text-slate-dark outline-none focus:border-brand-red focus:bg-white focus:ring-1 focus:ring-brand-red min-h-touch transition-all'
                aria-required='true'
              >
                <option value=''>Select product division</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
                <option value='Multiple Product Lines'>Multiple Product Lines</option>
                <option value='Institutional Tender / Custom Order'>
                  Institutional Tender / Custom Order
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor='form-volume'
                className='block text-xs font-heading font-bold text-slate-dark tracking-wider uppercase mb-1.5'
              >
                Estimated Order Volume
              </label>
              <input
                type='text'
                id='form-volume'
                name='volume'
                placeholder='e.g. 50 drums, monthly contract'
                value={formData.volume}
                onChange={handleChange}
                className='w-full px-3.5 py-2.5 bg-page-bg border border-border-subtle rounded-lg text-sm text-slate-dark placeholder-slate-400 outline-none focus:border-brand-red focus:bg-white focus:ring-1 focus:ring-brand-red min-h-touch transition-all'
              />
            </div>
          </div>

          {/* Row 4: Details & Specifications */}
          <div>
            <label
              htmlFor='form-details'
              className='block text-xs font-heading font-bold text-slate-dark tracking-wider uppercase mb-1.5'
            >
              Order Details &amp; Specifications
            </label>
            <textarea
              id='form-details'
              name='details'
              rows={3}
              placeholder='Specify capacities (e.g. 1100G, 240L, 75cm), delivery location in Riyadh, or RFP requirements...'
              value={formData.details}
              onChange={handleChange}
              className='w-full px-3.5 py-2.5 bg-page-bg border border-border-subtle rounded-lg text-sm text-slate-dark placeholder-slate-400 outline-none focus:border-brand-red focus:bg-white focus:ring-1 focus:ring-brand-red transition-all resize-y'
            />
          </div>

          {/* Error Alert Box */}
          {errorMessage && (
            <div
              className='p-3.5 rounded-lg text-xs bg-amber-50 text-amber-900 border border-amber-200 space-y-2'
              role='alert'
            >
              <p className='font-semibold'>{errorMessage}</p>
              <a
                href={directWhatsAppUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 font-bold text-success hover:text-success-dark underline'
              >
                <span>Send via WhatsApp (+966 56 282 1089) Now</span>
                <ArrowRight className='w-3.5 h-3.5' aria-hidden='true' />
              </a>
            </div>
          )}

          {/* Action Submit Buttons */}
          <div className='flex flex-col gap-2.5 pt-2'>
            <button
              type='submit'
              className='w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-bold text-sm rounded-lg shadow-subtle min-h-touch transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className='w-4 h-4 animate-spin' />
                  <span>Submitting Quotation Request...</span>
                </>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <ArrowRight className='w-4 h-4' aria-hidden='true' />
                </>
              )}
            </button>

            {/* Direct WhatsApp Quote Button */}
            <a
              href={directWhatsAppUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-success-light hover:bg-success text-success-dark hover:text-white border border-success/30 font-heading font-semibold text-xs rounded-lg min-h-touch transition-all'
            >
              <MessageCircleMore className='w-4 h-4' />
              <span>Or Send via WhatsApp Directly</span>
            </a>
          </div>
        </form>
      )}
    </article>
  </SpotlightCard>
  );
}
