import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ohio AI Agency — Custom AI Assistants for Your Business",
  description:
    "We design, train, and deploy autonomous AI assistants for Ohio businesses. Customer service reps, executive assistants, and algorithmic traders — built to your specs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
