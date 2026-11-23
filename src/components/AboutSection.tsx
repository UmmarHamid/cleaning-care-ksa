import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const { about } = COMPANY_DATA;

  return (
    <section id='about' className='section about-section'>
      <div className='container'>
        <div className='about-card'>
          <div className='about-grid'>
            <div className='about-image'>
              <Image src={about.image} alt={about.imageAlt} width={640} height={480} unoptimized />
            </div>
            <div className='about-copy'>
              <span className='about-eyebrow'>{about.eyebrow}</span>
              <h2>
                A Trusted B2B Partner
                <br className='hidden sm:inline' /> for a Cleaner, Safer KSA
              </h2>
              <p>{about.description}</p>
              <Link className='button button-red' href='#infrastructure'>
                <span>Learn More About Us</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
