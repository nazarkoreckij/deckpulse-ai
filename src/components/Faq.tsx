"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How does DeckPulse differ from prompting ChatGPT or Claude directly?",
    answer:
      "Raw LLMs output unstructured markdown or walls of text without understanding spatial layout, font hierarchy, contrast rules, or PowerPoint XML geometry. DeckPulse pairs multi-modal models with a specialized slide compiler that enforces executive formatting rules and outputs native vector PPTX objects."
  },
  {
    question: "Can my team edit the exported slides in PowerPoint or Google Slides?",
    answer:
      "Yes, 100%. Every text box, KPI statistic, icon, and card is an editable vector object. You can change text, recolor shapes, swap fonts, and rearrange elements inside Microsoft PowerPoint, Apple Keynote, or Google Slides with zero quality loss."
  },
  {
    question: "Is our proprietary strategic or financial data used for AI training?",
    answer:
      "Never. We operate strict zero-data-retention enterprise inference endpoints. Your uploaded spreadsheets, roadmaps, and pitch outlines are processed ephemerally in memory and never stored or used to fine-tune third-party foundation models."
  },
  {
    question: "Can we enforce our company's exact fonts and brand colors?",
    answer:
      "Yes. Pro and Enterprise workspaces include custom Brand Kits where you define primary, secondary, and accent colors, logo variations, and custom web or desktop fonts. The engine strictly adheres to these constraints across all slides."
  },
  {
    question: "What architecture and technology powers the DeckPulse web platform?",
    answer:
      "DeckPulse is built on Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. The application is containerized with multi-stage Docker builds, ensuring sub-second page performance, edge caching, and scalable production deployments."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Everything you need to know about formats, security, and team rollout.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-white bg-indigo-600/30" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
