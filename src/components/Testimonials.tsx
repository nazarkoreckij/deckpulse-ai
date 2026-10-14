"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "DeckPulse cut our pitch creation cycle from 3 days to under 40 minutes. We closed our Series A using a 14-slide deck generated and polished here.",
    author: "Elena Rostova",
    role: "Co-Founder & CEO",
    company: "Veloce Robotics",
    avatarBg: "bg-indigo-600"
  },
  {
    quote:
      "As a strategy consulting boutique, our slide typography and layout must be pristine. The editable PPTX export with native vector shapes is simply unmatched.",
    author: "Marcus Lindqvist",
    role: "Managing Partner",
    company: "Nordic Strategy Group",
    avatarBg: "bg-cyan-600"
  },
  {
    quote:
      "Our sales team creates 80+ custom client proposals every single month. DeckPulse's CRM integration and brand kit rules saved us literally thousands of hours.",
    author: "Sarah Jenkins",
    role: "VP of Global Revenue",
    company: "HyperScale Cloud",
    avatarBg: "bg-purple-600"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="text-xs font-semibold text-gray-300 ml-2">4.9 / 5 Rating</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Founders, Consultancies & Sales Leaders
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Over 25,000 executive presentations generated each month across 40+ countries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-indigo-500/30 transition-all"
            >
              <div>
                <Quote className="w-8 h-8 text-indigo-400/40 mb-4" />
                <p className="text-sm text-gray-200 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.author}</h4>
                  <p className="text-xs text-gray-400">
                    {t.role} · <span className="text-gray-300">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
