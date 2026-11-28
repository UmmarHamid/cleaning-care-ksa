'use client';

import React, { useState } from 'react';
import { CATEGORIES } from '@/data/catalog';
import { buildWhatsAppFallbackUrl, InquiryData, WHATSAPP_BASE_URL } from '@/lib/whatsapp';
import { ClipboardList, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

type RequiredField = 'person' | 'phone' | 'email' | 'category';
type FieldErrors = Partial<Record<RequiredField, string>>;

function getInputClassName(hasError: boolean, extra = ''): string {
  return `w-full px-3.5 py-2.5 bg-page-bg border rounded-lg text-sm text-slate-dark placeholder-slate-400 outline-none focus:bg-white focus:ring-1 min-h-touch transition-all ${
    hasError
      ? 'border-brand-red ring-1 ring-brand-red/30 focus:border-brand-red focus:ring-brand-red'
      : 'border-border-subtle focus:border-brand-red focus:ring-brand-red'
  } ${extra}`.trim();
}

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serviceError, setServiceError] = useState<string | null>(null);

  const [formData, setFormData] = useState<InquiryData>({
    company: '',
    person: '',
    phone: '',
    email: '',
    category: '',
    volume: '',
    details: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name in fieldErrors) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name as RequiredField];
        return next;
      });
    }
    if (serviceError) setServiceError(null);
  };

  const validateForm = (): FieldErrors => {
    const errors: FieldErrors = {};

    if (!formData.person.trim()) {
      errors.person = 'Please enter your full name.';
    }

    const phoneValue = formData.phone.trim();
    const phoneDigits = phoneValue.replace(/\D/g, '');
    if (!phoneValue) {
      errors.phone = 'Phone or WhatsApp number is required.';
    } else if (phoneDigits.length < 7) {
      errors.phone = 'Please enter a valid phone or WhatsApp number.';
    }

    const emailValue = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(emailValue)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.category) {
      errors.category = 'Please select a product division or inquiry type.';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setServiceError(null);
      const firstInvalidField = (['person', 'phone', 'email', 'category'] as const).find(
        (key) => errors[key],
      );
      if (firstInvalidField) {
        const inputEl = e.currentTarget.elements.namedItem(firstInvalidField) as HTMLElement | null;
        inputEl?.focus();
      }
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);
    setServiceError(null);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

      if (!accessKey) {
        throw new Error('Direct email dispatch is currently unconfigured or unavailable.');
      }

      // Check honeypot if triggered by automated spam bots
      const formEl = e.currentTarget;
      const botcheckInput = formEl.elements.namedItem('botcheck') as HTMLInputElement | null;
      if (botcheckInput && botcheckInput.checked) {
        // Silently mark as success to drop spam bots
        resetForm();
        setIsSuccess(true);
        return;
      }

      const subjectEntity = formData.company.trim() || formData.person.trim();

      const payload = {
        access_key: accessKey,
        subject: `Cleaning Care Trading Co | Inquiry — ${subjectEntity}`,
        from_name: 'Cleaning Care Website',
        replyto: formData.email.trim(),
        botcheck: '',
        name: formData.person.trim(),
        company: formData.company.trim() || 'Individual / Not specified',
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        category: formData.category,
        volume: formData.volume?.trim() || 'Not specified',
        message: formData.details?.trim() || 'Wholesale catalog pricing & product inquiry',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Server responded with status ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(
          result.message || 'Email dispatch service could not complete your request.',
        );
      }

      // Zero-loss success: clear the form and display confirmation banner
      resetForm();
      setIsSuccess(true);
    } catch (err: unknown) {
      // Zero-loss error: do NOT clear the user's typed inputs in formData!
      const errorMsg =
        err instanceof Error && err.message ? err.message : 'Network or transmission error.';
      setServiceError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      company: '',
      person: '',
      phone: '',
      email: '',
      category: '',
      volume: '',
      details: '',
    });
    setIsSuccess(false);
    setFieldErrors({});
    setServiceError(null);
  };

  const hasValidationErrors = Object.keys(fieldErrors).length > 0;

  return (
    <SpotlightCard className='h-full rounded-2xl flex flex-col' maxTilt={1.5} hoverScale={1.005}>
      <article className='rounded-2xl border border-border-subtle overflow-hidden shadow-card bg-white p-6 sm:p-8 flex flex-col h-full flex-1'>
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
              Inquiry &amp; Quote Form
            </h3>
            <p className='font-body text-xs sm:text-sm text-slate-body leading-relaxed'>
              Submit your product questions, wholesale quote requests, or procurement
              specifications. Our team in Riyadh will provide an itemized response.
            </p>
          </div>
        </div>

        {isSuccess ? (
          <div className='p-6 text-center bg-page-bg rounded-xl border border-border-subtle my-auto space-y-4'>
            <div className='w-14 h-14 bg-success-light text-success rounded-full flex items-center justify-center mx-auto shadow-xs'>
              <CheckCircle2 className='w-8 h-8' />
            </div>
            <h4 className='font-heading font-extrabold text-xl text-slate-dark'>
              Inquiry Received!
            </h4>
            <p className='text-sm text-slate-body max-w-md mx-auto leading-relaxed'>
              Thank you for contacting Cleaning Care Trading Co. Our team in Riyadh has received
              your message and will respond within 2-4 business hours.
            </p>

            <div className='pt-2 flex flex-col sm:flex-row items-center justify-center gap-3'>
              <WhatsAppButton
                href={WHATSAPP_BASE_URL}
                variant='secondary'
                size='md'
                rightIcon={<ArrowRight className='w-3.5 h-3.5' />}
                className='w-full sm:w-auto text-xs sm:text-xs font-semibold'
              >
                Chat on WhatsApp
              </WhatsAppButton>
              <Button
                variant='secondary'
                size='md'
                onClick={() => {
                  setIsSuccess(false);
                  setFieldErrors({});
                  setServiceError(null);
                }}
                className='w-full sm:w-auto px-4 text-xs sm:text-xs font-semibold text-slate-body hover:bg-slate-100'
              >
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        ) : (
          <form
            id='inquiry-form'
            onSubmit={handleSubmit}
            noValidate
            className='flex flex-col gap-4 flex-1'
          >
            {/* Web3Forms Honeypot Spam Protection */}
            <input
              type='checkbox'
              name='botcheck'
              className='hidden'
              tabIndex={-1}
              autoComplete='off'
              style={{ display: 'none' }}
            />
            {/* Row 1: Name & Phone / WhatsApp (Mandatory) */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <FormField id='form-person' label='Name' required error={fieldErrors.person}>
                <input
                  type='text'
                  id='form-person'
                  name='person'
                  required
                  placeholder='Enter your full name'
                  value={formData.person}
                  onChange={handleChange}
                  className={getInputClassName(Boolean(fieldErrors.person))}
                  aria-required='true'
                  aria-invalid={Boolean(fieldErrors.person)}
                  aria-describedby={fieldErrors.person ? 'form-person-error' : undefined}
                />
              </FormField>

              <FormField id='form-phone' label='Phone / WhatsApp' required error={fieldErrors.phone}>
                <input
                  type='tel'
                  id='form-phone'
                  name='phone'
                  required
                  placeholder='+966 5x xxx xxxx'
                  value={formData.phone}
                  onChange={handleChange}
                  className={getInputClassName(Boolean(fieldErrors.phone))}
                  aria-required='true'
                  aria-invalid={Boolean(fieldErrors.phone)}
                  aria-describedby={fieldErrors.phone ? 'form-phone-error' : undefined}
                />
              </FormField>
            </div>

            {/* Row 2: Email & Company Name (Email Mandatory, Company Optional) */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <FormField id='form-email' label='Email' required error={fieldErrors.email}>
                <input
                  type='email'
                  id='form-email'
                  name='email'
                  required
                  placeholder='name@example.com'
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClassName(Boolean(fieldErrors.email))}
                  aria-required='true'
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'form-email-error' : undefined}
                />
              </FormField>

              <FormField id='form-company' label='Company Name' optional>
                <input
                  type='text'
                  id='form-company'
                  name='company'
                  placeholder='Company or organization name'
                  value={formData.company}
                  onChange={handleChange}
                  className={getInputClassName(false)}
                />
              </FormField>
            </div>

            {/* Row 3: Product Division & Order Volume */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <FormField
                id='form-category'
                label='Product Division'
                required
                error={fieldErrors.category}
              >
                <select
                  id='form-category'
                  name='category'
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className={getInputClassName(Boolean(fieldErrors.category), 'appearance-none')}
                  aria-required='true'
                  aria-invalid={Boolean(fieldErrors.category)}
                  aria-describedby={fieldErrors.category ? 'form-category-error' : undefined}
                >
                  <option value=''>Select division or inquiry type</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                  <option value='Multiple Product Lines'>Multiple Product Lines</option>
                  <option value='Institutional Tender / Custom Order'>
                    Institutional Tender / Custom Order
                  </option>
                  <option value='General Inquiry / Product Consultation'>
                    General Inquiry / Product Consultation
                  </option>
                </select>
              </FormField>

              <FormField id='form-volume' label='Estimated Order Volume' optional>
                <input
                  type='text'
                  id='form-volume'
                  name='volume'
                  placeholder='e.g. 50 drums, retail, or N/A'
                  value={formData.volume}
                  onChange={handleChange}
                  className={getInputClassName(false)}
                />
              </FormField>
            </div>

            {/* Row 4: Message / Query */}
            <FormField
              id='form-details'
              label='Your Message / Query'
              className='flex-1 flex flex-col min-h-[140px]'
            >
              <textarea
                id='form-details'
                name='details'
                rows={5}
                placeholder='Specify required products, quantities, delivery location in Riyadh, or general questions...'
                value={formData.details}
                onChange={handleChange}
                className='w-full flex-1 min-h-[120px] px-3.5 py-2.5 bg-page-bg border border-border-subtle rounded-lg text-sm text-slate-dark placeholder-slate-400 outline-none focus:border-brand-red focus:bg-white focus:ring-1 focus:ring-brand-red transition-all resize-y'
              />
            </FormField>

            {/* Validation Alert Box (Missing / Invalid Required Fields) */}
            {hasValidationErrors && (
              <div
                className='p-3.5 rounded-xl text-xs bg-red-50 text-red-900 border border-red-200 flex items-start gap-2.5'
                role='alert'
              >
                <AlertCircle className='w-4 h-4 text-brand-red shrink-0 mt-0.5' aria-hidden='true' />
                <p className='font-medium leading-relaxed'>
                  Please fill in all required fields highlighted above before submitting your inquiry.
                </p>
              </div>
            )}

            {/* Service / Key Unavailability Alert Box with 1-Click WhatsApp Fallback */}
            {serviceError && (
              <div
                className='p-4 rounded-xl text-xs bg-amber-50 text-amber-950 border border-amber-200/90 shadow-xs space-y-3'
                role='alert'
              >
                <div className='flex items-start gap-2.5'>
                  <span
                    className='p-1 rounded-md bg-amber-100 text-amber-800 shrink-0 mt-0.5'
                    aria-hidden='true'
                  >
                    <AlertCircle className='w-4 h-4' />
                  </span>
                  <div className='space-y-1'>
                    <p className='font-heading font-bold text-amber-900 text-xs sm:text-sm'>
                      Direct Email Submission Temporarily Unavailable
                    </p>
                    <p className='text-slate-600 text-xs leading-relaxed'>
                      Our automated dispatch server is currently undergoing maintenance or
                      unavailable. Your entered quotation details have been safely preserved below.
                      Click the button below to send your exact inquiry directly to our sales desk
                      via WhatsApp without retyping:
                    </p>
                  </div>
                </div>

                <WhatsAppButton
                  href={buildWhatsAppFallbackUrl(formData)}
                  variant='secondary'
                  size='md'
                  fullWidth
                  rightIcon={
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  }
                  className='py-3 group'
                >
                  Send This Quote via WhatsApp Now
                </WhatsAppButton>
              </div>
            )}

            {/* Action Submit Buttons */}
            <div className='flex flex-col gap-2.5 pt-2'>
              <Button
                type='submit'
                variant='primary'
                size='md'
                fullWidth
                isLoading={isSubmitting}
                loadingText='Submitting Quotation Request...'
                disabled={isSubmitting}
                rightIcon={<ArrowRight className='w-4 h-4' />}
                className='px-6 py-3 text-sm sm:text-sm'
              >
                Send On Mail
              </Button>

              {/* Direct WhatsApp Quote Button */}
              <WhatsAppButton
                href={buildWhatsAppFallbackUrl(formData)}
                variant='secondary'
                size='md'
                fullWidth
                className='text-xs sm:text-xs font-semibold'
              >
                Send via WhatsApp
              </WhatsAppButton>
            </div>
          </form>
        )}
      </article>
    </SpotlightCard>
  );
}
