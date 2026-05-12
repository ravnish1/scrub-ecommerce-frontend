"use client";

import React, { useEffect, useRef } from 'react';
import { useCart } from '@/lib/cart-context';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleBackdropClick}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream border-l-2 border-black z-[101] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b-2 border-black">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" />
            <h2 className="font-display text-2xl uppercase tracking-wider">Your Bag</h2>
            <span className="bg-black text-cream text-[10px] font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-sc_red hover:text-cream transition-colors rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 border-2 border-dashed border-black/20 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-black/20" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-sm">Your bag is empty</p>
                <p className="text-black/50 text-xs mt-1">Looks like you haven't added anything yet.</p>
              </div>
              <Button
                variant="outline"
                className="rounded-none border-2 border-black font-bold uppercase tracking-widest px-8 mt-4"
                onClick={onClose}
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="relative w-24 h-32 bg-sc_gray border-2 border-black shrink-0 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold uppercase text-sm leading-tight max-w-[150px]">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-black/30 hover:text-sc_red transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {item.size && (
                      <p className="text-[10px] font-bold text-sc_red uppercase tracking-widest mt-1">
                        Size: {item.size}
                      </p>
                    )}
                    <p className="font-bold text-sm mt-1">{item.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-black h-8">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                        className="px-2 hover:bg-black hover:text-cream transition-colors h-full flex items-center"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-bold text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                        className="px-2 hover:bg-black hover:text-cream transition-colors h-full flex items-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t-2 border-black space-y-4 bg-white">
            <div className="flex justify-between items-end">
              <span className="font-bold uppercase tracking-widest text-xs text-black/50">Subtotal</span>
              <span className="display-text text-3xl">{totalPrice}</span>
            </div>
            <p className="text-[10px] text-black/50 font-medium">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="grid grid-cols-1 gap-3">
              <Button className="w-full rounded-none bg-black text-cream hover:bg-sc_red h-14 font-bold tracking-widest uppercase text-base border-2 border-black transition-colors">
                Checkout
              </Button>
              <button
                onClick={onClose}
                className="text-center font-bold uppercase tracking-widest text-xs hover:underline pt-2"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
