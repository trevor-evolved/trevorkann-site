import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Lora } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trevor Kann",
  description: "Linguist and energy researcher",
};

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/work", label: "Energy Work" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-slate-800 antialiased">
        <header className="bg-white border-b border-slate-200">
          <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold text-slate-900 tracking-tight hover:text-slate-600 transition-colors"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Trevor Kann
            </Link>
            <ul className="flex gap-6 text-sm text-slate-500">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-slate-900 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-14">
          {children}
        </main>

        <footer className="bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6 py-6 text-sm text-slate-400 flex justify-between items-center">
            <span>Trevor Kann</span>
            <a href="mailto:lingua@gmail.com" className="hover:text-slate-600 transition-colors">
              lingua@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
