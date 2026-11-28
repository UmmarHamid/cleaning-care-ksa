import { COMPANY_DATA } from "@/data/company";

/**
 * Centralized WhatsApp Configuration
 * Single source of truth for business and testing recipients.
 * Reference: Stage 6 — WhatsApp Bulk Order Functionality
 */
export const WHATSAPP_CONFIG = {
  /** Verified permanent business WhatsApp number (KSA: +966 56 282 1089) */
  permanentBusinessNumber: COMPANY_DATA.phoneRaw, // "966562821089"

  /**
   * Temporary test recipient specified in requirements: 9103590544
   * Configured in this single location; do not hardcode across components.
   */
  testRecipient: "9103590544",

  /**
   * Active recipient used for product enquiry messages.
   * Note: WhatsApp click-to-chat (https://wa.me/<number>) requires a full international number.
   * If testing with a local/incomplete number, wa.me expects country code prefix.
   */
  activeRecipient: "9103590544",
} as const;

export interface ProductEnquiryParams {
  productName: string;
  quantity: number | string;
  spec?: string;
  company?: string;
  name?: string;
  notes?: string;
  recipient?: string;
}

/**
 * Builds the structured WhatsApp bulk order enquiry message string.
 * Format specified in Stage 6:
 *
 * Hello, I am interested in placing a bulk order.
 *
 * Product: [Product Name]
 * Quantity: [Quantity]
 * [Optional details]
 *
 * Please share available sizes, pricing, minimum order quantity and delivery details.
 *
 * Thank you.
 */
export function buildProductEnquiryMessage(params: ProductEnquiryParams): string {
  const lines: string[] = [
    "Hello, I am interested in placing a bulk order.",
    "",
    `Product: ${params.productName}`,
    `Quantity: ${params.quantity}`,
  ];

  if (params.spec) {
    lines.push(`Specification: ${params.spec}`);
  }

  if (params.company) {
    lines.push(`Company: ${params.company}`);
  }

  if (params.name) {
    lines.push(`Contact Person: ${params.name}`);
  }

  if (params.notes) {
    lines.push(`Notes: ${params.notes}`);
  }

  lines.push(
    "",
    "Please share available sizes, pricing, minimum order quantity and delivery details.",
    "",
    "Thank you."
  );

  return lines.join("\n");
}

/**
 * Builds the full WhatsApp click-to-chat URL for a product bulk order enquiry.
 */
export function buildProductEnquiryWhatsAppUrl(
  params: ProductEnquiryParams
): string {
  const recipient =
    params.recipient || WHATSAPP_CONFIG.activeRecipient || WHATSAPP_CONFIG.permanentBusinessNumber;
  const message = buildProductEnquiryMessage(params);
  return `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds the direct WhatsApp prefilled URL for a specific product bulk order enquiry.
 * Formats the direct message without an intermediate modal per Section 4.
 */
export function buildProductBulkOrderUrl(
  productName: string,
  usePermanentNumber = false
): string {
  const recipient = usePermanentNumber
    ? WHATSAPP_CONFIG.permanentBusinessNumber
    : WHATSAPP_CONFIG.activeRecipient;
  const base = `https://wa.me/${recipient}`;

  const message = [
    "Hello, I am interested in placing a bulk order for:",
    "",
    `Product: ${productName}`,
    "",
    "Please share the pricing, available options and order details.",
    "",
    "Thank you.",
  ].join("\n");

  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a standard WhatsApp prefilled URL for general product quotes.
 * Defaults to the active testing recipient (9103590544).
 */
export function buildWhatsAppQuoteUrl(
  productName?: string,
  spec?: string,
  usePermanentNumber = false
): string {
  const recipient = usePermanentNumber
    ? WHATSAPP_CONFIG.permanentBusinessNumber
    : WHATSAPP_CONFIG.activeRecipient;
  const base = `https://wa.me/${recipient}`;

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
