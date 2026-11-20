import React from "react";
import { COMPANY_DATA } from "@/data/company";

export function ClientsSection() {
  const { clients } = COMPANY_DATA;

  return (
    <section className="section clients-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Our Valued Clients</span>
          <h2>Trusted by Leading Companies in Saudi Arabia</h2>
          <p>
            We are proud to be a trusted supplier for major companies and
            organizations across various sectors, delivering quality products and
            reliable supply solutions.
          </p>
        </div>

        <div className="client-grid">
          {clients.map((client) => (
            <div
              key={client.name}
              className={`client-logo ${client.colorClass || ""}`}
            >
              <strong>{client.name}</strong>
              {client.arabic && <small>{client.arabic}</small>}
            </div>
          ))}
        </div>

        <p className="asset-note">
          Client names are presented as text placeholders. Replace with approved
          official logo files before launch.
        </p>
      </div>
    </section>
  );
}
