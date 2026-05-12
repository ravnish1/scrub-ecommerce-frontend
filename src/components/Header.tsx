"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import CartDrawer from './CartDrawer';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-sc_red text-cream py-2 overflow-hidden flex whitespace-nowrap font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase border-b-2 border-black relative z-[110]">
        <div className="animate-marquee flex">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="px-8">FREE SHIPPING ON ORDERS OVER ₹4,999</span>
              <span className="opacity-30">•</span>
              <span className="px-8">NEW SS26 COLLECTION OUT NOW</span>
              <span className="opacity-30">•</span>
              <span className="px-8">TRUSTED BY 10,000+ MEDICAL PROS</span>
              <span className="opacity-30">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. NAVBAR */}
      <nav 
        className={cn(
          "sticky top-0 z-[100] px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-300 border-b-2 border-black",
          isScrolled ? "bg-cream/95 backdrop-blur-md shadow-lg" : "bg-cream"
        )}
      >
        {/* Logo */}
        <Link href="/" className="font-display text-2xl md:text-3xl border-2 md:border-4 border-black px-2 md:px-3 py-0.5 md:py-1 leading-none hover:bg-black hover:text-cream transition-all transform active:scale-95">
          S/C
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {[
            { label: "Collection", href: "/#collection" },
            { label: "About Us", href: "/about" },
            { label: "Find Your Fit", href: "/#fit" },
          ].map((item) => (
            <Link 
              key={item.label}
              href={item.href} 
              className="font-bold text-xs uppercase tracking-widest hover:text-sc_red transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sc_red scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link 
            href="/login" 
            className="hidden md:flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-sc_red transition-colors group"
          >
            <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Account</span>
          </Link>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest border-2 border-black px-3 md:px-4 py-1.5 hover:bg-black hover:text-cream transition-all group relative overflow-hidden"
          >
            <ShoppingBag className="w-4 h-4 group-hover:animate-bounce" />
            <span className="hidden sm:inline">Bag</span>
            <span>[{totalItems}]</span>
          </button>

          <button
            className="md:hidden w-8 h-8 flex items-center justify-center border-2 border-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "fixed inset-0 bg-cream z-[90] flex flex-col pt-32 px-6 gap-8 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        {[
          { label: "Collection", href: "/#collection" },
          { label: "About Us", href: "/about" },
          { label: "Find Your Fit", href: "/#fit" },
          { label: "My Account", href: "/login" },
        ].map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "font-display text-[2.5rem] uppercase border-b-2 border-black/10 pb-2 flex justify-between items-center",
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {item.label}
            <span className="text-sc_red">→</span>
          </Link>
        ))}
        
        <div className="mt-auto pb-12 space-y-6">
          <p className="font-bold uppercase tracking-widest text-[10px] text-black/40">S/C &copy; 2026</p>
          <div className="flex gap-4">
            {['IG', 'TW', 'LI'].map((social) => (
              <span key={social} className="font-bold uppercase tracking-widest text-sm underline underline-offset-4">{social}</span>
            ))}
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
