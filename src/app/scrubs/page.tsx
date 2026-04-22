"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { id: 1, name: "TOP WEAR", image: "/scrubs_black.png", count: "12 Styles" },
  { id: 2, name: "BOTTOM WEAR", image: "/scrubs_olive.png", count: "08 Styles" },
  { id: 3, name: "LAB COATS", image: "/scrubs_black.png", count: "04 Styles" },
  { id: 4, name: "ACCESSORIES", image: "/scrubs_olive.png", count: "15 Styles" },
];

export default function ScrubsPage() {
  return (
    <div className="min-h-screen bg-cream text-black font-sans">
      {/* Mini Nav */}
      <nav className="p-6 md:p-8 flex justify-between items-center border-b-2 border-black sticky top-0 bg-cream/80 backdrop-blur-md z-50">
        <Link href="/" className="font-display text-3xl border-4 border-black px-3 py-1 leading-none">S/C</Link>
        <div className="flex gap-8">
          <Link href="/sf" className="font-bold text-sm uppercase tracking-widest hover:text-sc_red transition-colors">Shop All</Link>
          <Link href="/" className="font-bold text-sm uppercase tracking-widest hover:text-sc_red transition-colors">Home</Link>
        </div>
      </nav>

      <main className="p-4 md:p-8 max-w-[1400px] mx-auto">
        <header className="py-24 border-b-2 border-black mb-12">
          <h1 className="display-text text-[4rem] md:text-[8rem] leading-[0.85] uppercase">
            DOCTOR<br/><span className="text-sc_red">WEAR.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mt-8 max-w-2xl">
            Precision-engineered garments for the modern clinical professional. Categorized for efficiency.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} href="/sf" className="group relative aspect-[16/9] bg-sc_gray overflow-hidden border-2 border-black">
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8 text-cream">
                <h2 className="display-text text-4xl md:text-6xl uppercase leading-none mb-2">{cat.name}</h2>
                <div className="flex items-center gap-4">
                  <span className="font-bold uppercase tracking-widest text-xs">{cat.count}</span>
                  <div className="h-[2px] w-12 bg-sc_red"></div>
                  <span className="font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">Explore &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="py-24 text-center">
          <p className="font-bold text-sm uppercase tracking-[0.3em] text-black/40 mb-4">Quality Guaranteed</p>
          <h2 className="display-text text-3xl md:text-5xl uppercase max-w-3xl mx-auto">
            ALL GARMENTS FEATURE OUR SIGNATURE SILK-TECH™ ANTIMICROBIAL FABRIC.
          </h2>
        </section>
      </main>

      <footer className="py-12 border-t-2 border-black text-center font-bold uppercase tracking-widest text-xs">
        &copy; 2026 SCRUBS/CLINICAL &mdash; ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
