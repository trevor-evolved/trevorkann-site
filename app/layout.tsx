import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trevor Kann — Applied linguist. Energy strategist. Teacher.",
  description:
    "Trevor Kann — Director of Education at Evolved Energy Research. Applied linguist (PhD, UCLA), former Visiting Professor at the University of São Paulo.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Trevor Kann — Applied linguist. Energy strategist. Teacher.",
    description:
      "Trevor Kann — Director of Education at Evolved Energy Research. Applied linguist (PhD, UCLA), former Visiting Professor at the University of São Paulo.",
    url: "https://trevorkann.com",
    siteName: "Trevor Kann",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trevor Kann — Applied linguist. Energy strategist. Teacher.",
    description:
      "Trevor Kann — Director of Education at Evolved Energy Research. Applied linguist (PhD, UCLA), former Visiting Professor at the University of São Paulo.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
