"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';

const products = [
  { id: 1, name: "The Apex Top", price: "₹2,499", image: "/scrubs_navy.png", category: "Tops" },
  { id: 2, name: "Momentum Pant", price: "₹2,999", image: "/scrubs_olive.png", category: "Bottoms" },
  { id: 3, name: "Vanguard Vest", price: "₹3,999", image: "/scrubs_navy.png", category: "Outerwear" },
  { id: 4, name: "Legacy Jogger", price: "₹2,799", image: "/scrubs_olive.png", category: "Bottoms" },
  { id: 5, name: "Clinic Coat v2", price: "₹4,499", image: "/scrubs_navy.png", category: "Coats" },
  { id: 6, name: "Aero Mesh Top", price: "₹1,999", image: "/scrubs_olive.png", category: "Tops" },
  { id: 7, name: "Element Underlayer", price: "₹1,499", image: "/scrubs_navy.png", category: "Tops" },
  { id: 8, name: "Response Cargo", price: "₹3,299", image: "/scrubs_olive.png", category: "Bottoms" },
];

export default function ShopPage() {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-cream text-black font-sans">
      <main className="p-4 md:p-8 max-w-[1400px] mx-auto pt-16">
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
                <button 
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                    size: 'M'
                  })}
                  className="absolute bottom-0 left-0 right-0 bg-black text-cream py-4 font-bold uppercase tracking-widest text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
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
    </div>
  );
}
