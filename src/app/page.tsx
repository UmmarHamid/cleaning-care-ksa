import React from "react";
import { UtilityBar } from "@/components/UtilityBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { InfraBanner } from "@/components/InfraBanner";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppCtaStrip } from "@/components/WhatsAppCtaStrip";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ProductsSection />
        <InfraBanner />
        <WhyChooseSection />
        <IndustriesSection />
        <InfrastructureSection />
        <ClientsSection />
        <ContactSection />
        <WhatsAppCtaStrip />
      </main>
      <Footer />
    </>
  );
}
