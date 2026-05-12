"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-cream border-t-8 border-sc_red pt-20 pb-8 mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-4xl border-4 border-cream px-3 py-1 inline-block leading-none mb-6 hover:bg-cream hover:text-black transition-colors">
              S/C
            </Link>
            <p className="text-lg text-sc_gray max-w-sm mb-8">
              Clinical-grade scrubs engineered for those who never clock out. Precision design for the vanguard.
            </p>
            <div className="flex gap-4">
              {['IG', 'TW', 'LI'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 border border-cream/30 rounded-full flex items-center justify-center hover:bg-cream hover:text-black transition-colors font-bold text-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-xl font-bold text-sc_gray mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {[
                { label: "Shop Collection", href: "/sf" },
                { label: "About Our Story", href: "/about" },
                { label: "Size Guide", href: "#" },
                { label: "Returns & Exchanges", href: "#" },
                { label: "Fit Quiz", href: "/#fit" }
              ].map((link) => (
                <Link key={link.label} href={link.href} className="font-bold uppercase tracking-widest text-xs hover:text-sc_red transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xl font-bold text-sc_gray mb-6 uppercase tracking-widest text-xs">Direct Support</h4>
            <div className="space-y-4">
              <p className="font-bold text-lg hover:text-sc_red transition-colors cursor-pointer">hello@clinical.sc</p>
              <div className="pt-4">
                <p className="text-[10px] text-sc_gray font-bold uppercase tracking-widest mb-1 opacity-50">Headquarters</p>
                <p className="text-sm font-bold">London / Mumbai / Singapore</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/10 text-[10px] font-bold text-sc_gray uppercase tracking-[0.2em] gap-4 text-center md:text-left">
          <p>&copy; 2026 S/C CLINICAL APPAREL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
