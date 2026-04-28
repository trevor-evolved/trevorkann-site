import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trevor Kann — Applied linguist. Energy strategist. Teacher.",
  description:
    "Trevor Kann — Director of Education at Evolved Energy Research. Applied linguist (PhD, UCLA), former Visiting Professor at the University of São Paulo.",
  icons: {
    icon: "/favicon.svg",
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
