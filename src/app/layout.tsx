import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1A1D20",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Cleaning Care Trading Co. | B2B Cleaning & Hygiene Supplies",
  description:
    "Cleaning Care Trading Co. — cleaning, hygiene, plastic and janitorial supply solutions across Saudi Arabia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
