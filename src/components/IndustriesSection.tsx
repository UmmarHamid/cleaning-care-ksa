import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { SECTION_SPACING } from "@/lib/tokens";
import {
  Sparkles,
  Building2,
  UtensilsCrossed,
  Plus,
  GraduationCap,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const INDUSTRY_ICONS: Record<string, { Icon: LucideIcon; iconClass?: string }> = {
  contractors: { Icon: Sparkles },
  offices: { Icon: Building2 },
  horeca: { Icon: UtensilsCrossed },
  healthcare: { Icon: Plus, iconClass: "stroke-[3]" },
  education: { Icon: GraduationCap },
  "facility-mgmt": { Icon: Wrench },
};

export function IndustriesSection() {
  const { industries } = COMPANY_DATA;

  return (
    <section id='industries' className={`${SECTION_SPACING.y} bg-white`}>
      <div className={SECTION_SPACING.container}>
        <SectionHeader
          title='Industries We Serve'
          description='Supplying high-quality cleaning and hygiene products to a wide range of business sectors across Saudi Arabia.'
        />

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4'>
          {industries.map((industry) => {
            const { Icon, iconClass = "" } = INDUSTRY_ICONS[industry.id] ?? { Icon: Sparkles };
            const titleLines = industry.title.split("\n");

            return (
              <SpotlightCard key={industry.id} className='h-full rounded-2xl' hoverScale={1.02}>
                <article className='flex flex-col items-center h-full rounded-2xl bg-white border border-border-subtle shadow-subtle hover:shadow-card transition-all overflow-hidden text-center group'>
                  <div className='w-full h-28 relative bg-slate-100 overflow-hidden'>
                    <Image
                      src={industry.image}
                      alt={industry.alt}
                      fill
                      className='object-cover'
                      unoptimized
                    />
                  </div>
                  <div
                    className='w-16 h-16 rounded-full bg-white shadow-subtle border border-slate-100 flex items-center justify-center text-brand-red -mt-5 mb-2 relative z-10 shrink-0'
                    aria-hidden='true'
                  >
                    <Icon className={`w-10 h-10 ${iconClass}`.trim()} />
                  </div>
                  <h3 className='font-heading font-black text-xs sm:text-sm text-slate-dark leading-snug px-2.5 pb-4 min-h-[60px] sm:min-h-[52px] flex items-center justify-center'>
                    <span>
                      {titleLines.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < titleLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </h3>
                </article>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
