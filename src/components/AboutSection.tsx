import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { SECTION_SPACING } from "@/lib/tokens";
import { ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  const { about } = COMPANY_DATA;

  return (
    <section id='about' className={SECTION_SPACING.y}>
      <div className={SECTION_SPACING.container}>
        <div className='bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-card border border-border-subtle'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            <SpotlightCard
              className='rounded-2xl overflow-hidden shadow-card w-full'
              maxTilt={2}
              hoverScale={1.015}
            >
              <div className='relative overflow-hidden rounded-2xl aspect-[3/2] w-full'>
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
            </SpotlightCard>
            <div className='flex flex-col justify-center text-center sm:text-left items-center sm:items-start w-full'>
              <span className='inline-block text-brand-red font-heading font-extrabold text-sm sm:text-base tracking-wider uppercase mb-3'>
                {about.eyebrow}
              </span>
              <h2 className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight mb-4'>
                A Trusted B2B Partner
                <br className='hidden sm:inline' /> for a Cleaner, Safer KSA
              </h2>
              <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed mb-6 w-full max-w-none lg:max-w-xl'>
                {about.description}
              </p>
              <Button
                href='#infrastructure'
                variant='primary'
                size='lg'
                fullWidth
                rightIcon={<ArrowRight size={20} />}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
