import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Anuj S. Bhuyar — Full Stack Developer",
  description:
    "Building web apps and AI tools that actually solve problems. Full Stack Developer specializing in Next.js, React, TypeScript, and LLM integrations.",
  openGraph: {
    title: "Anuj S. Bhuyar — Full Stack Developer",
    description: "Building web apps and AI tools that actually solve problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${instrumentSerif.variable} ${instrumentSans.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}