"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-black font-sans">
      {/* Mini Nav */}
      <nav className="p-4 md:p-6 flex justify-between items-center border-b-2 border-black sticky top-0 bg-cream/90 backdrop-blur-sm z-50">
        <Link href="/" className="font-display text-4xl border-4 border-black px-2 leading-none uppercase">S/C</Link>
        <Link href="/" className="font-bold text-sm uppercase tracking-widest hover:text-sc_red transition-colors">Back to Home</Link>
      </nav>

      <main>
        {/* Hero Section - Optimized for Single Viewport */}
        <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-center py-8 px-4 md:px-8 max-w-[1400px] mx-auto border-b-2 border-black text-center md:text-left">
          <div className="w-fit mx-auto md:mx-0 border-2 border-black rounded-full px-4 py-1.5 font-bold text-[10px] tracking-widest uppercase mb-4 md:mb-6">
            The S/C Manifesto
          </div>
          <h1 className="display-text text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] leading-[0.85] uppercase mb-8 md:mb-10">
            CRAFTING THE<br/>FUTURE OF<br/><span className="text-sc_red">CLINICAL WEAR.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 items-start mt-4 md:mt-8">
            <div className="space-y-3 md:space-y-4">
              <h2 className="font-display text-3xl md:text-4xl uppercase">The Vanguard Spirit</h2>
              <p className="text-base md:text-xl font-bold leading-snug">
                S/C was born on the hospital floor, between double shifts and the relentless pursuit of excellence. We don't just make uniforms; we build gear for the ones who never stop.
              </p>
            </div>
            <div className="text-black/70 font-medium space-y-3 md:space-y-4 pt-1 text-sm md:text-base">
              <p>
                Our journey began with a simple observation: the garments worn by those saving lives were fundamentally disconnected from the technology and aesthetics of the modern world. We saw a void where there should have been innovation.
              </p>
              <p>
                By merging medical-grade functionality with high-fashion silhouettes, we created a new standard. One that respects the professional identity of the clinician while providing the technical edge required for peak performance.
              </p>
            </div>
          </div>
        </section>

        {/* Science & Fabric Section */}
        <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto border-b-2 border-black">
          <h2 className="display-text text-5xl md:text-7xl mb-16 uppercase text-center md:text-left">SCIENCE X STYLE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(13,13,13,1)]">
              <h3 className="font-display text-3xl mb-4 uppercase">SILK-TECH™</h3>
              <p className="font-bold text-sm tracking-tight text-black/60 uppercase mb-4">Proprietary Textile</p>
              <p className="font-medium text-black/80">
                Our signature fabric blend. Engineered for 100% breathability with advanced moisture-wicking properties that keep you cool under the pressure of the OR.
              </p>
            </div>
            <div className="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(13,13,13,1)]">
              <h3 className="font-display text-3xl mb-4 uppercase">SHIELD-MAX</h3>
              <p className="font-bold text-sm tracking-tight text-black/60 uppercase mb-4">Antimicrobial Barrier</p>
              <p className="font-medium text-black/80">
                Integrated at the molecular level, our antimicrobial treatment prevents odor and provides a persistent barrier against clinical pathogens.
              </p>
            </div>
            <div className="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(13,13,13,1)]">
              <h3 className="font-display text-3xl mb-4 uppercase">4-WAY FLEX</h3>
              <p className="font-bold text-sm tracking-tight text-black/60 uppercase mb-4">Precision Ergonomics</p>
              <p className="font-medium text-black/80">
                Mechanical stretch that moves with you. No bunching, no restriction. Tailored for the anatomical range of motion required in high-stakes environments.
              </p>
            </div>
          </div>
        </section>

        {/* The S/C Commitment Section */}
        <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="display-text text-5xl md:text-6xl uppercase">THE S/C<br/>COMMITMENT</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sc_red mb-2 underline underline-offset-4">01. RADICAL TRANSPARENCY</h3>
                  <p className="font-medium text-black/70">From our ethical manufacturing partners to our sustainable fabric sourcing, we believe you deserve to know exactly where your gear comes from.</p>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sc_red mb-2 underline underline-offset-4">02. CLINICAL FEEDBACK LOOP</h3>
                  <p className="font-medium text-black/70">We iterate based on real-world data from thousands of healthcare professionals. Every pocket placement and seam height is the result of clinical testing.</p>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sc_red mb-2 underline underline-offset-4">03. GLOBAL IMPACT</h3>
                  <p className="font-medium text-black/70">A portion of every purchase supports medical education in underserved regions. We are invested in the next generation of the vanguard.</p>
                </div>
              </div>
            </div>
            <div className="bg-black text-cream p-12 md:p-20 border-4 border-black relative overflow-hidden">
               {/* Decorative elements instead of images */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-sc_red opacity-20 -mr-16 -mt-16 rounded-full"></div>
               <div className="relative z-10">
                 <p className="font-display text-3xl md:text-4xl mb-8 leading-tight italic">
                   "DESIGN IS NOT JUST HOW IT LOOKS. DESIGN IS HOW IT PERFORMS UNDER PRESSURE."
                 </p>
                 <div className="h-1 w-24 bg-sc_red mb-4"></div>
                 <p className="font-bold uppercase tracking-widest text-sm">S/C DESIGN LAB &mdash; LONDON / MUMBAI</p>
               </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-black text-cream text-center border-t-2 border-cream">
          <h2 className="display-text text-[3.5rem] md:text-[6rem] mb-12">READY FOR THE SHIFT?</h2>
          <Link href="/sf" className="inline-block border-2 border-cream px-12 py-5 font-bold uppercase tracking-[0.2em] text-xl hover:bg-sc_red hover:border-sc_red transition-all">
            Shop The Collection
          </Link>
        </section>
      </main>

      <footer className="py-12 border-t-2 border-black text-center font-bold uppercase tracking-widest text-[10px] text-black/40">
        &copy; 2026 SCRUBS/CLINICAL &mdash; ALL RIGHTS RESERVED &mdash; BUILT FOR THE VANGUARD
      </footer>
    </div>
  );
}
