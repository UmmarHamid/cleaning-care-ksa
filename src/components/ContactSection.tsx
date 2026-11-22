import React from 'react';
import Image from 'next/image';
import { ContactInfoCard } from './ContactInfoCard';
import { InquiryForm } from './InquiryForm';

export function ContactSection() {
  return (
    <section id='contact' className='section contact-section relative'>
      {/* Decorative warehouse background and diagonal separators */}
      <div className='contact-bg-deco' aria-hidden='true'>
        <div className='contact-bg-photo'>
          <Image
            src='/assets/images/about-section-warehouse-exterior.png'
            alt='Cleaning Care warehouse exterior in Riyadh'
            fill
            className='object-cover'
            unoptimized
          />
          <div className='contact-bg-overlay' />
        </div>
        <svg
          className='contact-bg-divider-svg'
          viewBox='0 0 1000 600'
          preserveAspectRatio='none'
        >
          <polygon
            points='948,0 976,0 396,600 368,600'
            fill='#FFFFFF'
            opacity='0.95'
          />
          <polygon points='976,0 994,0 414,600 396,600' fill='#F2B705' />
        </svg>
      </div>

      <div className='container contact-container relative z-10'>
        <div className='section-heading contact-heading'>
          <div className='heading-with-lines'>
            <span className='heading-line' aria-hidden='true' />
            <span className='contact-eyebrow'>GET IN TOUCH</span>
            <span className='heading-line' aria-hidden='true' />
          </div>
          <h2>Request a Bulk Quote</h2>
          <p className='section-intro'>
            Contact our sales team for product inquiries, bulk pricing and
            supply arrangements for your business across Saudi Arabia.
          </p>
        </div>

        <div className='contact-grid'>
          {/* Left Column: Contact Information Card with Map */}
          <ContactInfoCard />

          {/* Right Column: Bulk Inquiry Form Card */}
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
