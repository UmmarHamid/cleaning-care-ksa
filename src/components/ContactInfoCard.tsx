import React from 'react';
import { COMPANY_DATA } from '@/data/company';
import { buildWhatsAppQuoteUrl } from '@/lib/whatsapp';
import { Phone, Mail, MapPin, FileText, ExternalLink } from 'lucide-react';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactDetailItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

export function ContactDetailItem({ icon, label, children }: ContactDetailItemProps) {
  return (
    <div className='flex items-start gap-3.5 pb-4 border-b border-border-subtle'>
      <span
        className='w-10 h-10 rounded-xl bg-red-50 text-brand-red border border-red-100 flex items-center justify-center shrink-0 mt-0.5'
        aria-hidden='true'
      >
        {icon}
      </span>
      <div className='flex flex-col gap-0.5'>
        <span className='font-heading font-bold text-xs tracking-wider uppercase text-slate-500'>
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}

export function ContactInfoCard() {
  const whatsappUrl = buildWhatsAppQuoteUrl();

  return (
    <SpotlightCard className='h-full rounded-2xl flex flex-col' maxTilt={1.5} hoverScale={1.005}>
      <article className='rounded-2xl border border-border-subtle overflow-hidden shadow-card bg-white flex flex-col h-full flex-1'>
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
        <div className='flex flex-col gap-6 p-6 sm:p-8 flex-1 bg-white justify-between'>
          {/* Contact Details List */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Direct Phone Call */}
            <ContactDetailItem icon={<Phone className='w-5 h-5' />} label='PHONE NUMBER'>
              <a
                href={`tel:${COMPANY_DATA.phoneTel}`}
                className='text-sm font-semibold text-slate-dark hover:text-brand-red min-h-touch flex items-center transition-colors'
                title='Call Cleaning Care Trading Co.'
              >
                {COMPANY_DATA.phone}
              </a>
            </ContactDetailItem>

            {/* WhatsApp */}
            <ContactDetailItem icon={<WhatsAppIcon className='w-5 h-5' />} label='WHATSAPP'>
              <a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-sm font-semibold text-slate-dark hover:text-brand-red min-h-touch transition-colors group'
                title='Chat with Sales Desk on WhatsApp'
              >
                <span>{COMPANY_DATA.phone}</span>
              </a>
            </ContactDetailItem>

            {/* Email Us */}
            <ContactDetailItem icon={<Mail className='w-5 h-5' />} label='EMAIL US'>
              <a
                href={`mailto:${COMPANY_DATA.emailSales}`}
                className='text-xs font-semibold text-slate-dark hover:text-brand-red min-h-touch flex items-center transition-colors'
              >
                {COMPANY_DATA.emailSales}
              </a>
            </ContactDetailItem>

            {/* VAT */}
            <ContactDetailItem
              icon={<FileText className='w-5 h-5' />}
              label='VAT REGISTRATION NUMBER'
            >
              <span className='text-sm font-mono font-bold text-slate-dark tracking-wide'>
                {COMPANY_DATA.vatNumber}
              </span>
            </ContactDetailItem>

            {/* Location */}
            <ContactDetailItem icon={<MapPin className='w-5 h-5' />} label='OUR LOCATION'>
              <a
                href={COMPANY_DATA.googleMapsUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm font-semibold text-slate-dark hover:text-brand-red min-h-touch inline-flex items-center gap-1.5 transition-colors group'
                title='Open Riyadh location in Google Maps'
              >
                <span>{COMPANY_DATA.location}</span>
                <ExternalLink
                  className='w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all'
                  aria-hidden='true'
                />
              </a>
            </ContactDetailItem>
          </div>

          {/* Full-Width Google Map Section below VAT */}
          <div className='flex flex-col gap-3 w-full pt-1'>
            <div className='relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden border border-border-subtle shadow-subtle'>
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
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}
