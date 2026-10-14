"use client";

import React from "react";
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface HeroProps {
  onOpenDemoModal?: () => void;
}

export default function Hero({ onOpenDemoModal }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-cyan-400/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-8 animate-fade-in hover:border-indigo-400/50 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Next-Gen Document & Slide Intelligence</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-300 font-semibold flex items-center gap-1">
            v2.4 Released <Sparkles className="w-3 h-3 text-cyan-400" />
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Turn Raw Notes & Data Into{" "}
          <span className="gradient-accent">Boardroom-Ready Decks</span> in Seconds
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Stop wrestling with slide layouts and bullet points. DeckPulse AI synthesizes
          your market data, pitches, and meeting docs into polished, high-converting slides with
          automated visuals and typography.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5 mr-2 text-cyan-300" />
            Try Interactive Generator
          </a>

          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-gray-200 glass-panel hover:bg-white/10 hover:text-white rounded-xl border border-white/15 transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 mr-2 text-indigo-400 fill-indigo-400" />
            Book Executive Demo
          </button>
        </div>

        {/* Key Trust Signals */}
        <div className="mt-12 pt-8 border-t border-white/10 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Under 30s</p>
              <p className="text-xs text-gray-400">Average deck build</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Native PPTX</p>
              <p className="text-xs text-gray-400">PDF & Web export</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">SOC-2 & GDPR</p>
              <p className="text-xs text-gray-400">Enterprise security</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">4.9 / 5.0</p>
              <p className="text-xs text-gray-400">From 2,800+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
