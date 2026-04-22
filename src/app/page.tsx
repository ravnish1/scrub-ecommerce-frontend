"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// -- COMPONENTS --

const ProductModal = ({ product, onClose }: { product: any; onClose: () => void }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-cream w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black text-cream rounded-full flex items-center justify-center hover:bg-sc_red transition-colors"
        >
          ✕
        </button>

        <div className="relative h-[40vh] md:h-full bg-sc_gray">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="display-text text-4xl md:text-5xl mb-2">{product.name}</h2>
          <p className="text-xl font-bold text-sc_red mb-6">{product.price}</p>
          <p className="text-black/70 mb-8">{product.desc}</p>

          <div className="mb-8">
            <h4 className="font-bold uppercase tracking-wider text-sm mb-3">Select Size</h4>
            <div className="flex gap-3 flex-wrap">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button key={size} className="w-12 h-12 border-2 border-black hover:bg-black hover:text-cream transition-colors font-bold uppercase">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-black text-cream py-4 font-bold uppercase tracking-widest border-2 border-black hover:bg-transparent hover:text-black transition-colors">
            Add to Cart — {product.price}
          </button>
        </div>
      </div>
    </div>
  );
};

// -- MAIN PAGE --

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const products = [
    { id: 1, name: "The Essential Top", price: "₹2,499", image: "/scrubs_navy.png", desc: "4-way stretch, ultra-soft, tailored fit. The top that started it all." },
    { id: 2, name: "The Cargo Pant", price: "₹2,999", image: "/scrubs_olive.png", desc: "10 pockets. Reinforced knees. Fluid-resistant. Built for the longest shifts." },
    { id: 3, name: "The Core Set", price: "₹4,999", image: "/hero-image.png", desc: "The ultimate bundle. Get the Essential Top and Cargo Pant together." },
    { id: 4, name: "The Lab Coat", price: "₹3,499", image: "/scrubs_navy.png", desc: "Modern silhouette, tailored shoulders, anti-microbial finish." },
    { id: 5, name: "The Underscrub", price: "₹1,499", image: "/scrubs_olive.png", desc: "Seamless, breathable, moisture-wicking base layer." },
    { id: 6, name: "The Jogger", price: "₹2,799", image: "/hero-image.png", desc: "Athletic fit, ribbed cuffs, ultimate mobility." },
  ];

  return (
    <main className="relative min-h-screen">
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-sc_red text-cream py-2 overflow-hidden flex whitespace-nowrap font-bold text-sm tracking-[0.1em] uppercase">
        <div className="animate-marquee flex">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex">
              <span className="px-8">$99 FREE SHIPPING</span><span>•</span>
              <span className="px-8">30-DAY RETURNS</span><span>•</span>
              <span className="px-8">TRUSTED BY 10K+ PROS</span><span>•</span>
              <span className="px-8">MADE FOR THOSE WHO SHOW UP</span><span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. NAVBAR */}
      <nav className="sticky top-0 z-50 px-4 md:px-8 py-4 flex justify-between items-center bg-cream/80 backdrop-blur-md transition-all shadow-sm">
        <a href="#" className="font-display text-3xl border-4 border-black px-3 py-1 leading-none">S/C</a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="#collection" className="font-bold text-xs lg:text-sm uppercase tracking-widest hover:text-sc_red transition-colors relative group">
            Collection
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sc_red scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300"></span>
          </Link>
          <Link href="/about" className="font-bold text-xs lg:text-sm uppercase tracking-widest hover:text-sc_red transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sc_red scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300"></span>
          </Link>
          <Link href="#fit" className="font-bold text-xs lg:text-sm uppercase tracking-widest hover:text-sc_red transition-colors relative group">
            Find Your Fit
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sc_red scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300"></span>
          </Link>
          <Link href="/login" className="font-bold text-xs lg:text-sm uppercase tracking-widest bg-black text-cream px-4 py-2 hover:bg-sc_red transition-colors">
            Login/Signup
          </Link>
          <button className="font-bold text-xs lg:text-sm uppercase tracking-widest border-2 border-black px-4 py-1.5 hover:bg-sc_red hover:text-cream hover:border-sc_red transition-colors">
            Cart [0]
          </button>
        </div>

        <button
          className="md:hidden w-8 h-6 relative z-[101] flex flex-col justify-between"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-full h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[11px]' : ''}`}></span>
          <span className={`w-full h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[11px]' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-cream z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {[
          { label: "Collection", href: "#collection" },
          { label: "About Us", href: "/about" },
          { label: "Find Your Fit", href: "#fit" },
          { label: "Login/Signup", href: "/login" },
          { label: "Cart [0]", href: "#cart" }
        ].map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={`font-display text-[2.5rem] sm:text-5xl uppercase transition-all duration-500 delay-${i * 100} ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* 3. HERO SECTION */}
      <section className="pb-8 pt-4 md:pb-12 md:pt-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <div className="inline-block border-2 border-black rounded-full px-4 py-1.5 font-bold text-xs tracking-widest uppercase mb-6">
              SS26 CORE
            </div>
            <h1 className="display-text text-[3rem] sm:text-[4.5rem] lg:text-[4.5rem] xl:text-[5.5rem] flex flex-col mb-4">
              <span className="animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100 fill-mode-both">SCRUBS.</span>
              <span className="text-sc_red animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 fill-mode-both">REDEFINED.</span>
              <span className="animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300 fill-mode-both">ZERO COMPROMISE.</span>
            </h1>
            <div className="text-base md:text-lg text-black/70 max-w-xl mb-6 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both flex flex-col">
              <span>Engineered for the ones who never stop.</span>
              <span>Clinical-grade performance. Elevated aesthetics.</span>
              <span>Built for every shift.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-both">
              <a href="#collection" className="bg-black text-cream border-2 border-black px-6 py-3 font-bold uppercase tracking-widest text-center hover:bg-transparent hover:text-black transition-colors">
                Shop Collection
              </a>
              <a href="#fit" className="bg-transparent text-black border-2 border-black px-6 py-3 font-bold uppercase tracking-widest text-center hover:bg-black hover:text-cream transition-colors">
                Find Your Fit
              </a>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto lg:w-auto lg:max-w-none lg:h-[70vh] aspect-[2/3] lg:ml-auto overflow-hidden animate-in fade-in slide-in-from-right-16 duration-1000 delay-300 fill-mode-both bg-sc_gray">
            <Image src="/hero-image.png" alt="Doctor in premium scrubs" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* 4. STATS BAR */}
      <section className="bg-black text-cream py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "10000+", label: "Professionals Trust Us" },
            { num: "48", label: "Hrs Avg Delivery" },
            { num: "4.9", label: "Customer Rating" },
            { num: "30", label: "Days Hassle-Free" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="display-text text-5xl md:text-6xl text-sc_red">{stat.num}</span>
              <span className="font-bold text-xs md:text-sm uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE STANDARD COLLECTION */}
      <section id="collection" className="py-24 bg-white border-y-2 border-black">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="display-text text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[0.85] uppercase max-w-2xl">THE STANDARD<br />COLLECTION</h2>
            <Link href="/sf" className="hidden md:inline-block font-bold uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:text-sc_red hover:border-sc_red transition-colors">
              View All Products &rarr;
            </Link>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer flex flex-col flex-none w-[280px] md:w-auto snap-center"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative aspect-[4/5] bg-sc_gray overflow-hidden transition-all duration-500 group-hover:shadow-[8px_8px_0px_0px_rgba(13,13,13,1)] border-2 border-transparent group-hover:border-black mb-4">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                    Best Seller
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-extrabold uppercase text-lg leading-tight mb-1">{product.name}</h3>
                    <span className="font-bold text-sc_red text-sm">{product.price}</span>
                  </div>
                  <button className="w-full mt-4 bg-transparent text-black border-2 border-black py-2.5 font-bold text-xs uppercase tracking-widest group-hover:bg-black group-hover:text-cream transition-all">
                    Quick Add +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/sf" className="inline-block w-full border-2 border-black py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY S/C - FEATURE STRIP */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {[
            { num: "01", title: "Built To Perform", desc: "4-way stretch fabric engineered for 12-hour shifts. Anti-microbial. Moisture-wicking. Zero restriction." },
            { num: "02", title: "Designed To Last", desc: "Reinforced stitching at every stress point. Colorfast through 200+ washes. This isn't fast fashion — this is forever-wear.", reverse: true },
            { num: "03", title: "Made For Every Body", desc: "XS to 5XL. Petite to Tall. Straight, Slim, and Relaxed fits. Because comfort isn't one-size-fits-all." }
          ].map((feature, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 last:mb-0 px-4 md:px-8 ${feature.reverse ? 'md:[direction:rtl]' : ''}`}>
              <div className={`${feature.reverse ? 'md:[direction:ltr]' : ''}`}>
                <h2 className="display-text text-5xl md:text-[5rem] mb-6">{feature.title}</h2>
                <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-lg">{feature.desc}</p>
              </div>
              <div className={`hidden md:block display-text text-[15rem] lg:text-[20rem] text-sc_red opacity-10 leading-none select-none text-center ${feature.reverse ? 'md:[direction:ltr]' : ''}`}>
                {feature.num}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="display-text text-5xl md:text-[6rem] mb-16 text-center">WORN BY THE BEST.</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar md:grid md:grid-cols-3">
            {[
              { quote: "Finally scrubs that look as sharp as the care I deliver. My team noticed on day one.", author: "Dr. Priya Sharma, ICU Specialist" },
              { quote: "The fit. The fabric. The durability. S/C gets it right across the board.", author: "Rahul Verma, ER Nurse" },
              { quote: "Clinical performance meets elevated aesthetics — exactly what they promise.", author: "Dr. Anika Joshi, Surgeon" }
            ].map((t, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-0 snap-center bg-cream border-2 border-black p-8 relative">
                <span className="display-text text-[6rem] text-sc_red opacity-20 absolute top-4 left-6 leading-none">"</span>
                <p className="text-lg italic leading-relaxed mb-8 relative z-10 pt-8">{t.quote}</p>
                <p className="font-extrabold uppercase text-sm">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FIND YOUR FIT CTA */}
      <section id="fit" className="bg-black text-cream py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="display-text text-[4rem] md:text-[6rem] mb-6 leading-[0.85]">FIND YOUR<br />PERFECT FIT.</h2>
            <p className="text-xl text-sc_gray mb-10 max-w-md">Not sure where to start? Answer 3 quick questions and we'll match you to your ideal scrub.</p>
            <a href="#" className="inline-block bg-sc_red text-cream border-2 border-sc_red px-8 py-4 font-bold uppercase tracking-widest hover:bg-transparent hover:text-sc_red transition-colors">
              Take The Fit Quiz &rarr;
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] aspect-square bg-sc_red rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-700 [clip-path:polygon(20%_0%,_100%_20%,_80%_100%,_0%_80%)]"></div>
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM / SOCIAL PROOF STRIP */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="display-text text-5xl md:text-[6rem] mb-12 text-center">#WEARSC</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar md:grid md:grid-cols-3 md:grid-rows-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="min-w-[70vw] md:min-w-0 snap-center aspect-square bg-sc_gray flex items-center justify-center group cursor-pointer overflow-hidden">
                <span className="display-text text-[4rem] text-black/30 group-hover:scale-125 transition-transform duration-500">+</span>
              </div>
            ))}
          </div>
          <p className="text-center font-bold uppercase text-sm tracking-widest text-black/60 mt-4">Tag @wearsc to be featured.</p>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-black text-cream border-t-8 border-sc_red pt-20 pb-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
            <div className="md:col-span-5">
              <div className="font-display text-4xl border-4 border-cream px-3 py-1 inline-block leading-none mb-6">S/C</div>
              <p className="text-lg text-sc_gray max-w-sm mb-8">Scrubs engineered for those who never clock out.</p>
              <div className="flex gap-4">
                {['IG', 'TW', 'LI'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 border border-cream/30 rounded-full flex items-center justify-center hover:bg-cream hover:text-black transition-colors font-bold text-sm">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:col-span-4">
              <h4 className="text-xl font-bold text-sc_gray mb-6">Quick Links</h4>
              <div className="flex flex-col gap-4">
                {["Collection", "Specialty", "Find Your Fit", "Size Guide", "Returns"].map((link) => (
                  <a key={link} href="#" className="font-bold uppercase tracking-widest hover:text-sc_red transition-colors w-fit">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-xl font-bold text-sc_gray mb-6">Contact</h4>
              <p className="font-bold mb-2">hello@launchlive.studio</p>
              <p className="font-bold mb-6">+91 73031 12516</p>
              <p className="text-sm text-sc_gray font-bold">Mon–Sat, 10AM–6PM IST</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/10 text-sm font-bold text-sc_gray gap-4">
            <p>&copy; 2026 S/C. All rights reserved.</p>
            <p>Made with ❤️ by Launch Live Studio</p>
          </div>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}
