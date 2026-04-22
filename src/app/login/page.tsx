"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function AuthPage() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-cream flex flex-col lg:flex-row">
      {/* LEFT SIDE - FORM */}
      <div className="w-full lg:w-[55%] flex flex-col border-r-0 lg:border-r-2 border-black h-full overflow-y-auto lg:overflow-hidden bg-cream">
        <header className="p-4 md:p-6 flex justify-between items-center border-b-2 border-black lg:border-none shrink-0">
          <Link href="/" className="font-display text-3xl tracking-tighter bg-black text-cream px-2 pb-0.5 leading-none inline-block hover:bg-sc_red transition-colors">
            S/C
          </Link>
          <div className="font-bold tracking-widest text-[10px] uppercase">
            Secure Portal
          </div>
        </header>

        <main className="flex-1 flex items-start justify-center p-4 md:p-8 lg:p-12 pt-8 md:pt-12 lg:pt-16">
          <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block border-2 border-black rounded-full px-3 py-1 font-bold text-[10px] tracking-widest uppercase mb-4">
              Authentication
            </div>
            <h1 className="display-text text-5xl md:text-6xl mb-6">ACCESS S/C</h1>

            <Tabs defaultValue="login" className="w-full flex flex-col">
              <TabsList className="grid w-full grid-cols-2 bg-transparent border-2 border-black rounded-none p-0 h-12 mb-6 shrink-0">
                <TabsTrigger
                  value="login"
                  className="rounded-none font-bold tracking-widest uppercase text-xs data-[state=active]:bg-black data-[state=active]:text-cream h-full transition-colors"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="rounded-none font-bold tracking-widest uppercase text-xs data-[state=active]:bg-black data-[state=active]:text-cream h-full transition-colors"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="mt-0 outline-none">
                <Card className="rounded-none border-2 border-black bg-cream shadow-[6px_6px_0px_0px_rgba(13,13,13,1)] hover:shadow-[10px_10px_0px_0px_rgba(214,60,42,1)] transition-all duration-300">
                  <CardHeader className="pb-3 border-b-2 border-black mb-4 py-3">
                    <CardTitle className="font-display text-2xl uppercase tracking-wider">Welcome Back</CardTitle>
                    <CardDescription className="text-black/70 font-medium text-xs">
                      Enter your credentials to access your account.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 py-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="font-bold uppercase tracking-wider text-[10px]">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="doctor@hospital.com"
                        className="rounded-none border-2 border-black bg-transparent h-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-sc_red transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="password" className="font-bold uppercase tracking-wider text-[10px] flex justify-between">
                        <span>Password</span>
                        <a href="#" className="text-sc_red hover:underline normal-case tracking-normal font-medium">Forgot?</a>
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        className="rounded-none border-2 border-black bg-transparent h-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-sc_red transition-colors"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 pb-6">
                    <Button className="w-full rounded-none bg-black text-cream hover:bg-sc_red hover:text-cream h-12 font-bold tracking-widest uppercase text-base border-2 border-black transition-colors">
                      Login
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="signup" className="mt-0 outline-none">
                <Card className="rounded-none border-2 border-black bg-cream shadow-[6px_6px_0px_0px_rgba(13,13,13,1)] hover:shadow-[10px_10px_0px_0px_rgba(214,60,42,1)] transition-all duration-300">
                  <CardHeader className="pb-3 border-b-2 border-black mb-4 py-3">
                    <CardTitle className="font-display text-2xl uppercase tracking-wider">Join S/C</CardTitle>
                    <CardDescription className="text-black/70 font-medium text-xs">
                      Create an account to track orders and save your fit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 py-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName" className="font-bold uppercase tracking-wider text-[10px]">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Priya"
                          className="rounded-none border-2 border-black bg-transparent h-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-sc_red transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lastName" className="font-bold uppercase tracking-wider text-[10px]">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Sharma"
                          className="rounded-none border-2 border-black bg-transparent h-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-sc_red transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="signupEmail" className="font-bold uppercase tracking-wider text-[10px]">Email</Label>
                      <Input
                        id="signupEmail"
                        type="email"
                        placeholder="doctor@hospital.com"
                        className="rounded-none border-2 border-black bg-transparent h-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-sc_red transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="signupPassword" className="font-bold uppercase tracking-wider text-[10px]">Password</Label>
                      <Input
                        id="signupPassword"
                        type="password"
                        className="rounded-none border-2 border-black bg-transparent h-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-sc_red transition-colors"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 pb-6">
                    <Button className="w-full rounded-none bg-black text-cream hover:bg-sc_red hover:text-cream h-12 font-bold tracking-widest uppercase text-base border-2 border-black transition-colors">
                      Create Account
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="hidden lg:block lg:w-[45%] relative bg-sc_gray h-full">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <Image
          src="/scrubs_olive.png"
          alt="Medical Professional"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute bottom-10 left-10 z-20 text-cream max-w-sm">
          <h2 className="display-text text-6xl mb-3 leading-[0.85]">CLINICAL<br />PRECISION.</h2>
          <p className="font-bold text-base tracking-wide">Gear up with the best in medical apparel.</p>
        </div>
      </div>
    </div>
  );
}
