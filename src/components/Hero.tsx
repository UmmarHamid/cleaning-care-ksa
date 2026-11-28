import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { SECTION_SPACING } from "@/lib/tokens";
import { buildWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/motion/BorderBeam";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Hero() {
  const whatsappUrl = buildWhatsAppQuoteUrl();

  return (
    <section
      id='home'
      className='relative overflow-hidden bg-brand-charcoal min-h-[520px] flex items-center'
    >
      {/* Subtle Ambient Industrial Grid & Brand Glow */}
      <div
        className='absolute inset-0 bg-industrial-grid [filter:invert(1)_brightness(1.5)] opacity-20 pointer-events-none z-0'
        aria-hidden='true'
      />
      <div
        className='absolute inset-0 bg-brand-glow pointer-events-none z-0'
        aria-hidden='true'
      />

      {/* Continuous Ambient Hero Aurora (Crimson Red & Warm Gold Drifting Orbs) */}
      <div
        className='absolute inset-0 overflow-hidden pointer-events-none z-0 select-none'
        aria-hidden='true'
      >
        <div className='absolute -top-24 -left-20 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full bg-[#D32027]/10 blur-3xl animate-aurora-1' />
        <div className='absolute top-1/4 left-1/4 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#F2B705]/10 blur-3xl animate-aurora-2' />
      </div>

      {/* Background Warehouse Photography with Angular Geometric Accents */}
      <div
        className="absolute inset-0 bg-[url('/assets/images/hero-section-banner.png')] bg-right bg-cover no-repeat opacity-30 lg:opacity-100 lg:[clip-path:polygon(calc(50%+60px)_0,100%_0,100%_100%,calc(50%-60px)_100%)] z-0"
        role='img'
        aria-label='Commercial high-bay warehouse in Riyadh with cleaning materials and drums'
      />

      {/* Brand Red Angular Accent Stripe on Desktop */}
      <div
        className='hidden lg:block absolute inset-0 bg-brand-red [clip-path:polygon(calc(50%+50px)_0,calc(50%+61px)_0,calc(50%-59px)_100%,calc(50%-70px)_100%)] z-[1] pointer-events-none'
        aria-hidden='true'
      />

      {/* Content */}
      <div className={`${SECTION_SPACING.container} w-full relative z-10 pt-10 pb-20 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28`}>
        <div className='max-w-xl text-white text-center sm:text-left flex flex-col items-center sm:items-start mx-auto sm:mx-0'>
          {/* Eyebrow Badge */}
          <span className='inline-flex items-center rounded-full px-4 py-1.5 bg-brand-gold text-slate-dark font-heading font-bold text-xs sm:text-sm tracking-tight'>
            {COMPANY_DATA.tagline}
          </span>

          {/* Headline */}
          <h1 className='font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight my-5'>
            Complete Cleaning,
            <br />
            Hygiene &amp; Facility
            <br />
            Supply Solutions
          </h1>

          {/* Description */}
          <p className='font-body text-slate-200 text-sm sm:text-base leading-relaxed max-w-lg mb-8'>
            {COMPANY_DATA.shortDescription}
          </p>

          {/* Dual Action CTAs */}
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto'>
            <Button
              href='/products'
              variant='primary'
              size='lg'
              rightIcon={
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              }
              overlay={
                <BorderBeam
                  duration={3.5}
                  size={80}
                  borderWidth={1.5}
                  colorFrom='#FFFFFF'
                  colorTo='#F2B705'
                />
              }
              className='group w-full sm:w-auto'
            >
              Explore Product Catalog
            </Button>

            <WhatsAppButton
              href={whatsappUrl}
              variant='ghost-dark'
              size='lg'
              icon={<WhatsAppIcon className='w-4.5 h-4.5' />}
              className='w-full sm:w-auto'
            >
              WhatsApp Sales Desk
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
