import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { InfrastructureBanner } from "@/components/InfrastructureBanner";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { InfrastructureBento } from "@/components/InfrastructureBento";
import { ClientTrustStrip } from "@/components/ClientTrustStrip";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppCtaStrip } from "@/components/WhatsAppCtaStrip";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
        <ProductsSection />
        <InfrastructureBanner />
        <WhyChooseSection />
        <IndustriesSection />
        <InfrastructureBento />
        <ClientTrustStrip />
        <ContactSection />
        <WhatsAppCtaStrip />
      </main>
      <Footer />
    </>
  );
}
