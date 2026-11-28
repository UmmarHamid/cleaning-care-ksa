import React from "react";
import { COMPANY_DATA, ClientItem } from "@/data/company";
import { SECTION_SPACING } from "@/lib/tokens";
import { SectionHeader } from "@/components/ui/SectionHeader";

function ClientMarqueeTrack({
  clients,
  prefix,
  ariaHidden = false,
}: {
  clients: ClientItem[];
  prefix: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className='flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]'
      aria-hidden={ariaHidden || undefined}
    >
      {clients.map((client, index) => (
        <div
          key={`${prefix}-${client.name}-${index}`}
          className='flex flex-col justify-center items-center w-[220px] sm:w-[260px] min-h-[96px] p-4 rounded-xl border border-border-subtle bg-white shadow-subtle hover:shadow-card hover:border-brand-red/40 hover:-translate-y-0.5 transition-all text-center shrink-0'
        >
          <strong className='font-heading font-extrabold text-base sm:text-lg text-slate-dark tracking-tight'>
            {client.name}
          </strong>
          {client.arabic && (
            <small className='text-muted-gray text-xs mt-0.5' dir='rtl'>
              {client.arabic}
            </small>
          )}
        </div>
      ))}
    </div>
  );
}

export function ClientTrustStrip() {
  const { clients } = COMPANY_DATA;

  return (
    <section
      className={`${SECTION_SPACING.y} bg-page-bg border-y border-border-subtle relative overflow-hidden`}
    >
      {/* Background Architectural Grid & Subtle Ambient Glow */}
      <div className='absolute inset-0 bg-industrial-grid pointer-events-none z-0' aria-hidden='true' />
      <div className='absolute inset-0 bg-brand-glow pointer-events-none z-0' aria-hidden='true' />

      <div className={`${SECTION_SPACING.container} relative z-10`}>
        <SectionHeader
          eyebrow='Our Valued Clients'
          title='Trusted by Leading Companies in Saudi Arabia'
          description='We are proud to be a trusted supplier for major companies and organizations across various sectors, delivering quality products and reliable supply solutions.'
        />

        {/* Seamless Looping Marquee with Edge Gradient Masks & Pause-on-Hover */}
        <div className='relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div
            className='pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-page-bg to-transparent z-10'
            aria-hidden='true'
          />
          <div
            className='pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-page-bg to-transparent z-10'
            aria-hidden='true'
          />

          <div className='group flex w-max gap-0 py-2'>
            <ClientMarqueeTrack clients={clients} prefix='client-1' />
            <ClientMarqueeTrack clients={clients} prefix='client-2' ariaHidden />
          </div>
        </div>

        <p className='text-center sm:text-left text-xs text-muted-gray mt-8'>
          Official B2B supplier and vendor partner to corporate infrastructure projects across KSA.
        </p>
      </div>
    </section>
  );
}
