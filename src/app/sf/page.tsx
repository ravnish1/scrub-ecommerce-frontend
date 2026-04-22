"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  { id: 1, name: "The Apex Top", price: "$78.00", image: "/scrubs_black.png", category: "Tops" },
  { id: 2, name: "Momentum Pant", price: "$84.00", image: "/scrubs_olive.png", category: "Bottoms" },
  { id: 3, name: "Vanguard Vest", price: "$112.00", image: "/scrubs_black.png", category: "Outerwear" },
  { id: 4, name: "Legacy Jogger", price: "$88.00", image: "/scrubs_olive.png", category: "Bottoms" },
  { id: 5, name: "Clinic Coat v2", price: "$145.00", image: "/scrubs_black.png", category: "Coats" },
  { id: 6, name: "Aero Mesh Top", price: "$72.00", image: "/scrubs_olive.png", category: "Tops" },
  { id: 7, name: "Element Underlayer", price: "$45.00", image: "/scrubs_black.png", category: "Tops" },
  { id: 8, name: "Response Cargo", price: "$92.00", image: "/scrubs_olive.png", category: "Bottoms" },
];

export default function ShopPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="min-h-screen bg-cream text-black font-sans">
      {/* Mini Nav */}
      <nav className="p-6 md:p-8 flex justify-between items-center border-b-2 border-black sticky top-0 bg-cream/80 backdrop-blur-md z-50">
        <Link href="/" className="font-display text-3xl border-4 border-black px-3 py-1 leading-none">S/C</Link>
        <div className="flex items-center gap-6">
          <Link href="/login" className="font-bold text-sm uppercase tracking-widest hover:text-sc_red transition-colors">Login</Link>
          <button className="font-bold text-sm uppercase tracking-widest bg-black text-cream px-4 py-2 hover:bg-sc_red transition-colors">Cart [0]</button>
        </div>
      </nav>

      <main className="p-4 md:p-8 max-w-[1400px] mx-auto">
        <header className="py-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b-2 border-black mb-12">
          <div>
            <h1 className="display-text text-6xl md:text-8xl uppercase leading-none">THE SHOP</h1>
            <p className="font-bold text-black/50 mt-4 uppercase tracking-[0.2em]">Explore our complete clinical range</p>
          </div>
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
            {["All", "Tops", "Bottoms", "Outerwear", "Coats"].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`font-bold uppercase tracking-widest text-xs border-2 border-black px-6 py-2 transition-all whitespace-nowrap ${filter === cat ? 'bg-black text-cream' : 'hover:bg-black/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          {products.filter(p => filter === "All" || p.category === filter).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-sc_gray border-2 border-transparent group-hover:border-black group-hover:shadow-[8px_8px_0px_0px_rgba(13,13,13,1)] transition-all duration-300 overflow-hidden mb-4">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute bottom-0 left-0 right-0 bg-black text-cream py-4 font-bold uppercase tracking-widest text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Quick Add +
                </button>
              </div>
              <h3 className="font-extrabold uppercase text-lg leading-tight mb-1">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="font-bold text-sc_red text-sm">{product.price}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/40">{product.category}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-24 border-t-2 border-black mt-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h4 className="font-display text-4xl mb-6">S/C</h4>
            <p className="font-medium text-black/60 max-w-xs">Elevating the standard of clinical apparel through design and science.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-sc_red">Navigation</h5>
            <Link href="/" className="font-bold uppercase text-sm hover:underline">Home</Link>
            <Link href="/about" className="font-bold uppercase text-sm hover:underline">About Us</Link>
            <Link href="/scrubs" className="font-bold uppercase text-sm hover:underline">Categories</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-sc_red">Support</h5>
            <a href="#" className="font-bold uppercase text-sm hover:underline">Shipping</a>
            <a href="#" className="font-bold uppercase text-sm hover:underline">Returns</a>
            <a href="#" className="font-bold uppercase text-sm hover:underline">Contact</a>
          </div>
        </div>
        <div className="mt-24 text-center font-bold uppercase tracking-widest text-[10px] text-black/30 px-4">
          &copy; 2026 SCRUBS/CLINICAL &mdash; ALL RIGHTS RESERVED &mdash; DESIGNED FOR THE VANGUARD
        </div>
      </footer>
    </div>
  );
}
