import React from "react";
import { COMPANY_DATA } from "@/data/company";

export function ClientTrustStrip() {
  const { clients } = COMPANY_DATA;

  return (
    <section className="section clients-section bg-slate-50 border-y border-slate-200">
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
              className={`client-logo ${client.colorClass || ""} flex flex-col justify-center items-center min-h-[72px] p-3 text-center`}
            >
              <strong className="text-slate-900 tracking-tight">{client.name}</strong>
              {client.arabic && (
                <small className="text-slate-500 text-xs mt-0.5" dir="rtl">
                  {client.arabic}
                </small>
              )}
            </div>
          ))}
        </div>

        <p className="asset-note text-center text-xs text-slate-400 mt-6">
          Official B2B supplier and vendor partner to corporate infrastructure projects across KSA.
        </p>
      </div>
    </section>
  );
}
