"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles, ArrowRight } from "lucide-react";

interface RoiCalculatorProps {
  onOpenDemoModal?: () => void;
}

export default function RoiCalculator({ onOpenDemoModal }: RoiCalculatorProps) {
  const [decksCount, setDecksCount] = useState<number>(14);
  const [hourlyCost, setHourlyCost] = useState<number>(75);

  // Manual hours per deck: ~4.5 hours
  // DeckPulse hours per deck: ~0.5 hours
  // Hours saved per deck: 4.0 hours
  const hoursSavedPerMonth = Math.round(decksCount * 4.0);
  const monthlySavingsDollars = hoursSavedPerMonth * hourlyCost;
  const annualSavingsDollars = monthlySavingsDollars * 12;

  return (
    <section id="calculator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-12 relative overflow-hidden border border-indigo-500/30">
          {/* Ambient background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
                <Calculator className="w-3.5 h-3.5" />
                Live ROI & Productivity Calculator
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Calculate Exactly How Much Time & Budget You Save
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
                See how replacing manual formatting with DeckPulse AI transforms your team&apos;s
                operational bandwidth and bottom line.
              </p>

              {/* Slider 1: Decks per month */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-300">Decks & pitch docs created monthly:</span>
                  <span className="font-bold text-lg text-white font-mono bg-white/5 px-3 py-0.5 rounded-lg border border-white/10">
                    {decksCount} decks
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="60"
                  step="1"
                  value={decksCount}
                  onChange={(e) => setDecksCount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[11px] text-gray-500">
                  <span>2 decks/mo (Solo)</span>
                  <span>30 decks/mo (Mid-market)</span>
                  <span>60+ decks/mo (Agency)</span>
                </div>
              </div>

              {/* Slider 2: Average hourly cost */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-300">Blended team hourly rate ($ / hr):</span>
                  <span className="font-bold text-lg text-white font-mono bg-white/5 px-3 py-0.5 rounded-lg border border-white/10">
                    ${hourlyCost} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="180"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-gray-500">
                  <span>$30/hr</span>
                  <span>$100/hr</span>
                  <span>$180/hr (Exec/Partner)</span>
                </div>
              </div>
            </div>

            {/* Right Metrics Box */}
            <div className="lg:col-span-6">
              <div className="bg-black/60 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
                    Projected Impact
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" /> +88% Velocity
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Metric 1 */}
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>Hours Saved / Mo</span>
                    </div>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                      {hoursSavedPerMonth}h
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1">Reclaimed for strategy</p>
                  </div>

                  {/* Metric 2 */}
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      <span>Monthly Value</span>
                    </div>
                    <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                      ${monthlySavingsDollars.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1">Operating budget saved</p>
                  </div>
                </div>

                {/* Annualized Big Highlight */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-950/80 to-purple-950/80 border border-indigo-500/40">
                  <p className="text-xs uppercase tracking-wider text-indigo-300 font-semibold mb-1">
                    Estimated Annual ROI
                  </p>
                  <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
                    ${annualSavingsDollars.toLocaleString()}{" "}
                    <span className="text-xs text-gray-300 font-normal">/ year</span>
                  </p>
                  <p className="text-xs text-indigo-200 mt-2">
                    Equivalent to gaining{" "}
                    <strong className="text-white">
                      {(hoursSavedPerMonth / 160).toFixed(1)} full-time team member(s)
                    </strong>{" "}
                    in pure capacity.
                  </p>
                </div>

                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <span>Start Capturing These Savings</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
