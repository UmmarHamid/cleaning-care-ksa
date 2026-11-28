import React from 'react';
import Image from 'next/image';
import { ContactInfoCard } from './ContactInfoCard';
import { InquiryForm } from './InquiryForm';
import { SECTION_SPACING } from '@/lib/tokens';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ContactSection() {
  return (
    <section id='contact' className={`${SECTION_SPACING.y} relative bg-page-bg overflow-hidden`}>
      {/* Decorative warehouse background and diagonal separators */}
      <div
        className='absolute inset-0 pointer-events-none opacity-10 overflow-hidden'
        aria-hidden='true'
      >
        <Image
          src='/assets/images/about-section-warehouse-exterior.webp'
          alt='Cleaning Care warehouse exterior in Riyadh'
          fill
          className='object-cover'
          unoptimized
        />
      </div>

      <div className={`${SECTION_SPACING.container} relative z-10`}>
        <SectionHeader
          eyebrow='GET IN TOUCH'
          title='Request a Bulk Quote'
          description='Contact our sales team for product inquiries, bulk pricing and supply arrangements for your business across Saudi Arabia.'
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
          {/* Left Column: Contact Information Card with Map */}
          <div className='w-full flex flex-col'>
            <ContactInfoCard />
          </div>

          {/* Right Column: Bulk Inquiry Form Card */}
          <div className='w-full flex flex-col'>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
