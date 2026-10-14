import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeckPulse AI — Autonomous Presentations & Executive Slides in Seconds",
  description:
    "Turn raw notes, financial data, and pitch outlines into boardroom-ready presentation decks. Native editable PPTX, vector PDF, and automated typography.",
  keywords: [
    "Next.js 16",
    "AI Presentation Generator",
    "Pitch Deck AI",
    "PPTX Export",
    "Slide Automation",
    "Docsandslides",
    "Claude Code"
  ],
  authors: [{ name: "DeckPulse Engineering" }],
  openGraph: {
    title: "DeckPulse AI — Autonomous Presentations in Seconds",
    description:
      "Transform messy notes and spreadsheets into investor-ready slides and executive reports.",
    url: "https://deckpulse.ai",
    siteName: "DeckPulse AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeckPulse AI — Autonomous Presentations in Seconds",
    description:
      "Transform messy notes and spreadsheets into investor-ready slides and executive reports.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090b10] text-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}
