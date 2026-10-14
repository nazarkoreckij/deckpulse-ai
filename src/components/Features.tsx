"use client";

import React from "react";
import {
  Sparkles,
  Layers,
  Palette,
  FileSpreadsheet,
  Download,
  Share2,
  Lock,
  Zap,
  Cpu
} from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    color: "from-indigo-500 to-cyan-400",
    title: "AI Layout & Typographic Hierarchy",
    description:
      "Our multi-modal engine understands visual weight, contrast, and executive readability. No overlapping text or generic bullet points."
  },
  {
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    title: "Instant Brand Kit Theming",
    description:
      "Lock in your exact corporate hex codes, custom typography, and master logo lockups. One click transforms any raw draft into your brand guidelines."
  },
  {
    icon: FileSpreadsheet,
    color: "from-emerald-500 to-teal-400",
    title: "Excel, Notion & CSV Ingestion",
    description:
      "Drag-and-drop raw quarterly spreadsheets or product PRDs. The AI auto-generates clean KPI cards, cohort charts, and milestone roadmaps."
  },
  {
    icon: Download,
    color: "from-amber-500 to-orange-400",
    title: "Native Editable PPTX & Vector PDF",
    description:
      "Export pure vector PowerPoint files with fully editable shapes, text boxes, and SVG icons. Zero lock-in or rasterized static images."
  },
  {
    icon: Zap,
    color: "from-blue-500 to-indigo-500",
    title: "Sub-Second Generation Latency",
    description:
      "Built on optimized Next.js 16 serverless streaming and high-throughput LLM clusters. Generate a 20-slide deck in under 15 seconds."
  },
  {
    icon: Lock,
    color: "from-rose-500 to-red-500",
    title: "Enterprise Grade SOC-2 Security",
    description:
      "Your strategic data never trains public models. Zero-retention enterprise pipelines, granular team RBAC, and single sign-on (SAML/Okta)."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            Architected for Speed & Precision
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to <span className="gradient-accent">Scale Presentations</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Engineered specifically for consulting firms, founders, and growth teams who need
            flawless slide decks at 10x velocity.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-7 sm:p-8 rounded-2xl hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
