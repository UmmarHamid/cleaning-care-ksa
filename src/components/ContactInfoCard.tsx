import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { buildWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, FileText, ArrowRight, ExternalLink } from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export function ContactInfoCard() {
  const whatsappUrl = buildWhatsAppQuoteUrl();

  return (
    <SpotlightCard className='h-full rounded-2xl' maxTilt={1.5} hoverScale={1.005}>
      <article className='rounded-2xl border border-border-subtle overflow-hidden shadow-card bg-white flex flex-col h-full'>
      {/* Card Header */}
      <div className='flex items-start gap-4 p-6 sm:p-8 bg-gradient-to-br from-brand-red to-brand-red-dark text-white'>
        <div className='border-l-4 border-brand-gold pl-4'>
          <h3 className='font-heading font-extrabold text-3xl text-white tracking-tight leading-tight mb-2'>
            Contact
            <br />
            Cleaning Care Trading Co.
          </h3>
          <p className='font-body text-white/90 text-md leading-relaxed'>
            Our team is ready to support your business with product information, quotations and
            reliable supply solutions across the Kingdom.
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 flex-1 bg-white items-start'>
        {/* Left Details Column */}
        <div className='md:col-span-7 flex flex-col gap-4'>
          {/* Phone / WhatsApp */}
          <div className='flex items-start gap-3.5 pb-4 border-b border-border-subtle'>
            <span
              className='w-10 h-10 rounded-xl bg-red-50 text-brand-red border border-red-100 flex items-center justify-center shrink-0 mt-0.5'
              aria-hidden='true'
            >
              <Phone className='w-5 h-5' />
            </span>
            <div className='flex flex-col gap-0.5'>
              <span className='font-heading font-bold text-xs  tracking-wider uppercase'>
                PHONE / WHATSAPP
              </span>
              <a
                href={`tel:${COMPANY_DATA.phoneTel}`}
                className='text-sm font-semibold text-slate-dark hover:text-brand-red min-h-touch flex items-center transition-colors'
              >
                {COMPANY_DATA.phone}
              </a>
              <a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-xs text-slate-dark hover:text-brand-red font-semibold mt-0.5'
              >
                <span>Chat on WhatsApp (+966 56 282 1089)</span>
                <ArrowRight className='w-3.5 h-3.5' aria-hidden='true' />
              </a>
            </div>
          </div>

          {/* Email Us */}
          <div className='flex items-start gap-3.5 pb-4 border-b border-border-subtle'>
            <span
              className='w-10 h-10 rounded-xl bg-red-50 text-brand-red border border-red-100 flex items-center justify-center shrink-0 mt-0.5'
              aria-hidden='true'
            >
              <Mail className='w-5 h-5' />
            </span>
            <div className='flex flex-col gap-0.5'>
              <span className='font-heading font-bold text-xs  tracking-wider uppercase'>
                EMAIL US
              </span>
              <a
                href={`mailto:${COMPANY_DATA.emailSales}`}
                className='text-sm font-semibold text-slate-dark hover:text-brand-red min-h-touch flex items-center transition-colors'
              >
                {COMPANY_DATA.emailSales}
              </a>
              <a
                href={`mailto:${COMPANY_DATA.emailInfo}`}
                className='text-sm font-semibold text-slate-dark hover:text-brand-red min-h-touch flex items-center transition-colors'
              >
                {COMPANY_DATA.emailInfo}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className='flex items-start gap-3.5 pb-4 border-b border-border-subtle'>
            <span
              className='w-10 h-10 rounded-xl bg-red-50 text-brand-red border border-red-100 flex items-center justify-center shrink-0 mt-0.5'
              aria-hidden='true'
            >
              <MapPin className='w-5 h-5' />
            </span>
            <div className='flex flex-col gap-0.5'>
              <span className='font-heading font-bold text-xs  tracking-wider uppercase'>
                OUR LOCATION
              </span>
              <span className='text-sm font-semibold text-slate-dark leading-snug'>
                {COMPANY_DATA.location}
              </span>
            </div>
          </div>

          {/* VAT */}
          <div className='flex items-start gap-3.5'>
            <span
              className='w-10 h-10 rounded-xl bg-red-50 text-brand-red border border-red-100 flex items-center justify-center shrink-0 mt-0.5'
              aria-hidden='true'
            >
              <FileText className='w-5 h-5' />
            </span>
            <div className='flex flex-col gap-0.5'>
              <span className='font-heading font-bold text-xs  tracking-wider uppercase'>
                VAT REGISTRATION NUMBER
              </span>
              <span className='text-sm font-mono font-bold text-slate-dark tracking-wide'>
                {COMPANY_DATA.vatNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Right Map Column */}
        <div className='md:col-span-5 flex flex-col gap-3 w-full'>
          <div className='relative w-full aspect-square min-h-[220px] rounded-xl overflow-hidden border border-border-subtle shadow-subtle'>
            <iframe
              src={COMPANY_DATA.googleMapsEmbedUrl}
              width='100%'
              height='100%'
              className='w-full h-full border-0'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Cleaning Care Trading Co. location in Riyadh'
            />
          </div>
          <a
            href={COMPANY_DATA.googleMapsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg border border-border-subtle bg-page-bg hover:bg-slate-100 text-xs font-semibold text-slate-dark min-h-touch transition-colors'
          >
            <span>View on Google Maps</span>
            <ExternalLink className='w-3.5 h-3.5 ' aria-hidden='true' />
          </a>
        </div>
      </div>
    </article>
  </SpotlightCard>
  );
}
