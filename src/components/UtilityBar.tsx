import React from "react";
import { COMPANY_DATA } from "@/data/company";

export function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="container utility-inner">
        <span>⌖ {COMPANY_DATA.location}</span>
        <a href={`tel:${COMPANY_DATA.phoneTel}`}>☎ {COMPANY_DATA.phone}</a>
        <span className="utility-vat">VAT: {COMPANY_DATA.vatNumber}</span>
        <span className="utility-spacer" />
        <a href={`mailto:${COMPANY_DATA.emailSales}`}>
          ✉ {COMPANY_DATA.emailSales}
        </a>
      </div>
    </div>
  );
}
