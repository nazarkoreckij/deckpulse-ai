"use client";

import React, { useState } from "react";
import { Check, Sparkles, Zap, Shield, HelpCircle } from "lucide-react";

interface PricingProps {
  onOpenDemoModal?: () => void;
}

export default function Pricing({ onOpenDemoModal }: PricingProps) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Ideal for individual founders, consultants, and solo creators.",
      priceMonthly: 29,
      priceAnnual: 22,
      popular: false,
      features: [
        "Up to 25 decks generated / month",
        "Export to vector PDF & PPTX",
        "3 Custom brand color presets",
        "Standard AI generation queue",
        "Community support & docs"
      ],
      ctaText: "Get Started Free",
      ctaVariant: "outline"
    },
    {
      name: "Pro Team",
      description: "For fast-moving startups, agencies, and high-volume sales teams.",
      priceMonthly: 79,
      priceAnnual: 59,
      popular: true,
      features: [
        "Unlimited deck generations",
        "Unlimited custom brand kits & fonts",
        "Priority GPU inference (sub-10s decks)",
        "Excel, CSV & Notion ingestion",
        "Shared team workspace & comments",
        "Custom domain presentation links",
        "Dedicated priority email support"
      ],
      ctaText: "Start 14-Day Free Trial",
      ctaVariant: "primary"
    },
    {
      name: "Enterprise",
      description: "Custom security, compliance, and dedicated AI models for scale.",
      priceMonthly: 249,
      priceAnnual: 199,
      popular: false,
      features: [
        "Everything in Pro Team",
        "Private zero-data-retention AI pipeline",
        "Custom fine-tuned LLM on company decks",
        "SAML SSO & SCIM directory sync",
        "Custom MSA & SLA (99.9% uptime)",
        "Dedicated Customer Success Manager"
      ],
      ctaText: "Contact Enterprise Sales",
      ctaVariant: "outline"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            Simple & Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Plans Scaled for <span className="gradient-accent">Every Stage</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Start free, upgrade when your presentation volume grows. All plans include full PPTX export.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                !annualBilling
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                annualBilling
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? "glass-panel-glow border-indigo-500/50 shadow-2xl shadow-indigo-500/20 scale-105 z-10 bg-gray-900/90"
                    : "glass-panel border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-gray-400 mb-6 min-h-[32px]">{plan.description}</p>

                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                      ${price}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      / user / month
                    </span>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-3.5">
                    <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                      Included with plan:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={onOpenDemoModal}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg shadow-indigo-500/30"
                        : "bg-white/10 hover:bg-white/15 text-white"
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
