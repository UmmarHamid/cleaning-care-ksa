import React from 'react';
import Image from 'next/image';
import { ContactInfoCard } from './ContactInfoCard';
import { InquiryForm } from './InquiryForm';

export function ContactSection() {
  return (
    <section id='contact' className='py-16 relative bg-page-bg overflow-hidden'>
      {/* Decorative warehouse background and diagonal separators */}
      <div className='absolute inset-0 pointer-events-none opacity-10 overflow-hidden' aria-hidden='true'>
        <Image
          src='/assets/images/about-section-warehouse-exterior.png'
          alt='Cleaning Care warehouse exterior in Riyadh'
          fill
          className='object-cover'
          unoptimized
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <div className='flex items-center justify-center gap-3 sm:gap-4 mb-3'>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
            <span className='text-brand-red font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase'>
              GET IN TOUCH
            </span>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
          </div>
          <h2 className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight mb-3'>
            Request a Bulk Quote
          </h2>
          <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed'>
            Contact our sales team for product inquiries, bulk pricing and
            supply arrangements for your business across Saudi Arabia.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          {/* Left Column: Contact Information Card with Map */}
          <div className='lg:col-span-7 w-full'>
            <ContactInfoCard />
          </div>

          {/* Right Column: Bulk Inquiry Form Card */}
          <div className='lg:col-span-5 w-full'>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
