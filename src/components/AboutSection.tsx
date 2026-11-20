import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";

export function AboutSection() {
  const { about } = COMPANY_DATA;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <Image
              src={about.image}
              alt={about.imageAlt}
              width={640}
              height={427}
              unoptimized
            />
          </div>
          <div className="about-copy">
            <span className="about-eyebrow">{about.eyebrow}</span>
            <h2>{about.title}</h2>
            <p>{about.description}</p>
            <Link className="button button-red" href="#infrastructure">
              Learn More About Us <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
