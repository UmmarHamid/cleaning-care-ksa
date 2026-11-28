import React from "react";
import Image from "next/image";
import { COMPANY_DATA, FacilityItem } from "@/data/company";
import { SECTION_SPACING } from "@/lib/tokens";
import { Check, Warehouse, Store } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

function FacilityCard({ facility, delay }: { facility: FacilityItem; delay: number }) {
  const isRed = facility.theme === "red";
  const Icon = isRed ? Warehouse : Store;

  return (
    <RevealOnScroll delay={delay} className='h-full'>
      <SpotlightCard
        spotlightColor={isRed ? "rgba(255, 255, 255, 0.15)" : undefined}
        className={`grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center p-6 sm:p-7 rounded-2xl h-full ${
          isRed
            ? "bg-gradient-to-br from-brand-red to-brand-red-dark text-white shadow-card"
            : "bg-white border border-border-subtle text-slate-dark shadow-subtle hover:shadow-card transition-all"
        }`}
      >
        <div className='sm:col-span-6 flex flex-col justify-between h-full'>
          <div>
            <div className='flex items-start mb-2 gap-4'>
              <Icon size={56} className={isRed ? "shrink-0" : "text-brand-red shrink-0"} />
              <div className='flex flex-col gap-0.5'>
                <span className='font-heading font-extrabold text-4xl sm:text-5xl text-brand-gold leading-none'>
                  {facility.num}
                </span>
                <h3
                  className={`font-heading font-bold text-base sm:text-lg mb-1.5 ${
                    isRed ? "text-white" : "text-slate-dark"
                  }`}
                >
                  {facility.title}
                </h3>
              </div>
            </div>
            <hr
              className={`border-t mb-4 ${isRed ? "border-white/20" : "border-border-subtle"}`}
            />
            <p
              className={`font-body text-xs sm:text-sm leading-relaxed ${
                isRed ? "text-white/90" : "text-slate-body"
              }`}
            >
              {facility.description}
            </p>
          </div>
        </div>
        <div className='sm:col-span-6 relative w-full h-44 sm:h-48 rounded-xl overflow-hidden shadow-subtle'>
          <Image
            src={facility.image}
            alt={facility.imageAlt}
            fill
            className='object-cover'
            unoptimized
          />
        </div>
      </SpotlightCard>
    </RevealOnScroll>
  );
}

export function InfrastructureBento() {
  const { infrastructureFeatures, facilities } = COMPANY_DATA;

  return (
    <section id='infrastructure' className={`${SECTION_SPACING.y} bg-white relative overflow-hidden`}>
      {/* Background Architectural Grid & Ambient Brand Glow */}
      <div className='absolute inset-0 bg-industrial-grid pointer-events-none z-0' aria-hidden='true' />
      <div className='absolute inset-0 bg-brand-glow pointer-events-none z-0' aria-hidden='true' />
      <div className={`${SECTION_SPACING.container} relative z-10`}>
        <SectionHeader
          eyebrow='OUR INFRASTRUCTURE'
          title='Strong Facilities for a Reliable Supply'
          description='A well-established logistics and distribution network in Riyadh to ensure consistent inventory, fast delivery and uninterrupted supply for our customers across Saudi Arabia.'
        />

        {/* Main Bento Hero Card */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10'>
          <RevealOnScroll delay={0} className='order-2 lg:order-1 lg:col-span-7 h-full w-full'>
            <SpotlightCard className='flex flex-col justify-center min-w-0 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-white shadow-subtle h-full w-full text-center sm:text-left'>
              <h3 className='font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-dark tracking-tight mb-3 w-full max-w-none'>
                Warehouse &amp; <span className='text-brand-red'>Distribution Facilities</span>
              </h3>
              <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed mb-6 w-full max-w-none'>
                Our company operates a well-organized wholesale warehouse and storage facility
                designed to maintain a large inventory of cleaning products, materials, plastics and
                hygiene supplies.
              </p>
              <div className='flex flex-col gap-2.5 w-full text-left'>
                {infrastructureFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-3 p-3 sm:p-3.5 bg-page-bg border border-border-subtle rounded-xl text-xs sm:text-sm font-semibold text-slate-dark shadow-subtle hover:translate-x-1 hover:border-slate-300 transition-all'
                  >
                    <span
                      className='w-5 h-5 text-brand-red shrink-0 flex items-center justify-center'
                      aria-hidden='true'
                    >
                      <Check className='w-4 h-4' />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </RevealOnScroll>

          <RevealOnScroll delay={60} className='order-1 lg:order-2 lg:col-span-5 h-full w-full'>
            <SpotlightCard className='relative rounded-2xl overflow-hidden w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] h-full shadow-card'>
              <Image
                src='/assets/images/our-infrastructure-warehouse-interior.webp'
                alt='Organized warehouse interior with inventory and high pallet racking in Riyadh'
                fill
                className='object-cover object-center'
                unoptimized
              />
            </SpotlightCard>
          </RevealOnScroll>
        </div>

        {/* 2-Card Facility Bento Strip */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {facilities.map((facility, idx) => (
            <FacilityCard key={facility.title} facility={facility} delay={120 + idx * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
