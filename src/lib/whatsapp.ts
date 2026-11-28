import { CONTACT_PHONE } from "@/data/company";

/**
 * Single source of truth for the official WhatsApp business contact number
 * (matches Header & Footer: +966 56 282 1089).
 */
export const WHATSAPP_NUMBER = CONTACT_PHONE.raw;
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WHATSAPP_CONFIG = {
  displayNumber: CONTACT_PHONE.display,
  businessNumber: WHATSAPP_NUMBER,
  baseUrl: WHATSAPP_BASE_URL,
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

export function buildWhatsAppChatUrl(): string {
  return WHATSAPP_BASE_URL;
}

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
    "Thank you.",
  );

  return lines.join("\n");
}

export function buildProductEnquiryWhatsAppUrl(params: ProductEnquiryParams): string {
  const recipient = params.recipient || WHATSAPP_NUMBER;
  const message = buildProductEnquiryMessage(params);
  return `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
}

export function buildProductBulkOrderUrl(productName: string): string {
  const message = [
    "Hello, I am interested in placing a bulk order for:",
    "",
    `Product: ${productName}`,
    "",
    "Please share the pricing, available options and order details.",
    "",
    "Thank you.",
  ].join("\n");

  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppQuoteUrl(productName?: string, spec?: string): string {
  let message =
    "Hello Cleaning Care Trading Co., I would like to request a bulk quotation.";
  if (productName && spec) {
    message = `Hello Cleaning Care Trading Co., I would like to request a bulk quote for "${productName}" (Capacity / Size: ${spec}).`;
  } else if (productName) {
    message = `Hello Cleaning Care Trading Co., I would like to request a bulk quote for "${productName}".`;
  }

  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
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

export function buildWhatsAppFallbackUrl(data: InquiryData): string {
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
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const buildWhatsAppInquiryUrl = buildWhatsAppFallbackUrl;
