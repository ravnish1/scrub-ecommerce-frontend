import type { Metadata } from "next";
import { Anton, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "S/C | Scrubs. Redefined. Zero Compromise.",
  description: "Modern, fashion-forward medical apparel for healthcare professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${anton.variable} ${dmSans.variable} font-body bg-cream text-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
