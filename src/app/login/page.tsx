"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Mail, Lock, ArrowRight } from 'lucide-react';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4 bg-cream">
      <div className="w-full max-w-[440px] bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10">

        <Link href="/" className="flex items-center gap-2 text-black/40 hover:text-black transition-colors font-bold uppercase tracking-widest text-[10px] mb-8 w-fit group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to store
        </Link>

        <div className="mb-8 text-center">
          <h1 className="display-text text-4xl mb-2">
            {activeTab === 'login' ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
          </h1>
          <p className="text-black/50 font-medium text-xs">
            {activeTab === 'login'
              ? 'Enter your credentials to access your portal.'
              : 'Join the community of healthcare professionals.'}
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-[280px] grid-cols-2 bg-sc_gray/10 rounded-none p-1 h-10 border-2 border-black">
              <TabsTrigger
                value="login"
                className="rounded-none font-bold tracking-widest uppercase text-[10px] data-[state=active]:bg-black data-[state=active]:text-cream h-full transition-all"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="rounded-none font-bold tracking-widest uppercase text-[10px] data-[state=active]:bg-black data-[state=active]:text-cream h-full transition-all"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="login" className="mt-0 focus-visible:outline-none animate-in fade-in duration-500">
            <div className="space-y-8">
              <div className="flex justify-center">
                <Button className="w-full max-w-[280px] rounded-none bg-black text-cream hover:bg-sc_red h-14 font-bold tracking-widest uppercase text-sm border-2 border-black transition-all group shadow-[4px_4px_0px_0px_rgba(214,60,42,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  Login <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="font-bold uppercase tracking-wider text-[10px] flex items-center gap-2 opacity-60">
                    <Mail className="w-3 h-3" /> Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="dr.smith@hospital.com"
                    className="rounded-none border-2 border-black bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:border-sc_red transition-colors placeholder:text-black/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="font-bold uppercase tracking-wider text-[10px] flex items-center gap-2 opacity-60">
                      <Lock className="w-3 h-3" /> Password
                    </Label>
                    <a href="#" className="text-sc_red hover:underline font-bold text-[10px] uppercase tracking-wider">Forgot?</a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-none border-2 border-black bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:border-sc_red transition-colors placeholder:text-black/20"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="signup" className="mt-0 focus-visible:outline-none animate-in fade-in duration-500">
            <div className="space-y-8">
              <div className="flex justify-center">
                <Button className="w-full max-w-[280px] rounded-none bg-black text-cream hover:bg-sc_red h-14 font-bold tracking-widest uppercase text-sm border-2 border-black transition-all group shadow-[4px_4px_0px_0px_rgba(214,60,42,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  Create Account <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName" className="font-bold uppercase tracking-wider text-[10px] opacity-60">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Jane"
                      className="rounded-none border-2 border-black bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:border-sc_red transition-colors placeholder:text-black/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName" className="font-bold uppercase tracking-wider text-[10px] opacity-60">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="rounded-none border-2 border-black bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:border-sc_red transition-colors placeholder:text-black/20"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="signupEmail" className="font-bold uppercase tracking-wider text-[10px] opacity-60">Email Address</Label>
                  <Input
                    id="signupEmail"
                    type="email"
                    placeholder="dr.doe@hospital.com"
                    className="rounded-none border-2 border-black bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:border-sc_red transition-colors placeholder:text-black/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="signupPassword" className="font-bold uppercase tracking-wider text-[10px] opacity-60">Create Password</Label>
                  <Input
                    id="signupPassword"
                    type="password"
                    placeholder="Min. 8 characters"
                    className="rounded-none border-2 border-black bg-transparent h-12 text-sm focus-visible:ring-0 focus-visible:border-sc_red transition-colors placeholder:text-black/20"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 pt-8 border-t-2 border-black/10 flex flex-col gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 text-center italic">Secure authentication</p>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 border-2 border-black py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-black hover:text-cream transition-colors">
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-black py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-black hover:text-cream transition-colors">
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
