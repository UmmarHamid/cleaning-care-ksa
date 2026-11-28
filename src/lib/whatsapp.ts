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
 * Constructs a dynamic URL-encoded WhatsApp fallback message targeting the Riyadh sales desk.
 * Formats: name, company, phone, email, category, volume, message.
 */
export function buildWhatsAppFallbackUrl(data: InquiryData): string {
  const base = `https://wa.me/${COMPANY_DATA.phoneRaw}`;
  const lines = [
    "Hello Cleaning Care Trading Co., I would like to request an official quotation / inquiry.",
    "",
    `• Name: ${data.person?.trim() || "Not specified"}`,
    ...(data.company?.trim() ? [`• Company: ${data.company.trim()}`] : []),
    `• Phone: ${data.phone?.trim() || "Not specified"}`,
    `• Email: ${data.email?.trim() || "Not specified"}`,
    `• Product Division: ${data.category || "General Inquiry"}`,
    ...(data.volume?.trim() ? [`• Estimated Volume: ${data.volume.trim()}`] : []),
    `• Message / Query: ${data.details?.trim() || "Wholesale catalog pricing & product inquiry"}`,
  ];
  return `${base}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/**
 * Alias for buildWhatsAppFallbackUrl for backwards compatibility.
 */
export const buildWhatsAppInquiryUrl = buildWhatsAppFallbackUrl;
