import React from "react";
import { buildWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { MessageCircle, ArrowRight, MessageCircleMore } from "lucide-react";

export function WhatsAppCtaStrip() {
  const whatsappUrl = buildWhatsAppQuoteUrl();

  return (
    <section className='relative bg-brand-charcoal text-white py-8 sm:py-9 overflow-hidden'>
      {/* Corner Accents */}
      <div
        className='absolute top-0 left-0 w-8 h-full bg-brand-gold pointer-events-none [clip-path:polygon(0_0,100%_0,0_100%)] hidden sm:block'
        aria-hidden='true'
      />
      <div
        className='absolute top-0 right-0 w-8 h-full bg-brand-gold pointer-events-none [clip-path:polygon(100%_0,100%_100%,0_100%)] hidden sm:block'
        aria-hidden='true'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 text-center sm:text-left'>
          <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 w-full md:w-auto text-center sm:text-left'>
            <div
              className='w-12 h-12 text-success shrink-0 flex items-center justify-center'
              aria-hidden='true'
            >
              <MessageCircle className='w-10 h-10' />
            </div>
            <span className='hidden sm:block w-[3px] h-10 bg-brand-gold rounded-sm shrink-0' aria-hidden='true' />
            <div>
              <h2 className='text-white font-heading font-extrabold text-xl sm:text-2xl leading-tight mb-1'>
                Need a Quick Quote?
              </h2>
              <p className='text-slate-300 font-body text-xs sm:text-sm'>
                Chat with our sales team directly on WhatsApp for instant support.
              </p>
            </div>
          </div>

          <div className='w-full md:w-auto flex justify-center sm:justify-start md:justify-end'>
            <a
              className='inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-white hover:bg-success text-success-dark hover:text-white font-heading font-bold text-sm rounded-full border-2 border-success transition-all shadow-md group min-h-touch whitespace-nowrap w-full sm:w-auto'
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <MessageCircleMore className='w-5 h-5 text-success group-hover:text-white transition-colors' />
              <span>Chat on WhatsApp</span>
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
