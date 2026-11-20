import { COMPANY_DATA } from "@/data/company";

/**
 * Builds a WhatsApp prefilled URL for product quotes.
 * Follows guidelines from GEMINI.md.
 */
export function buildWhatsAppQuoteUrl(
  productName?: string,
  spec?: string
): string {
  const base = `https://wa.me/${COMPANY_DATA.phoneRaw}`;
  let message =
    "Hello Cleaning Care Trading Co., I would like to request a bulk quotation.";
  if (productName && spec) {
    message = `Hello Cleaning Care Trading Co., I would like to request a bulk quote for "${productName}" (Capacity / Size: ${spec}).`;
  } else if (productName) {
    message = `Hello Cleaning Care Trading Co., I would like to request a bulk quote for "${productName}".`;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}

export interface InquiryData {
  company: string;
  person: string;
  phone: string;
  email: string;
  category: string;
  volume?: string;
  details?: string;
}

/**
 * Constructs a fallback WhatsApp inquiry message string and URL.
 */
export function buildWhatsAppInquiryUrl(data: InquiryData): string {
  const base = `https://wa.me/${COMPANY_DATA.phoneRaw}`;
  const lines = [
    "Hello Cleaning Care Trading Co., I would like to request a bulk quote.",
    `Company: ${data.company}`,
    `Contact: ${data.person}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Category: ${data.category}`,
    `Estimated Volume: ${data.volume || "Not specified"}`,
    `Details: ${data.details || "Not specified"}`,
  ];
  return `${base}?text=${encodeURIComponent(lines.join("\n"))}`;
}
