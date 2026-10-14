"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  RefreshCw,
  BarChart3,
  TrendingUp,
  Target,
  CheckCircle,
  FileText,
  Sliders,
  Cpu
} from "lucide-react";

interface SlideData {
  title: string;
  subtitle: string;
  tag: string;
  highlightNumber?: string;
  highlightLabel?: string;
  points: string[];
  notes: string;
}

interface DeckPreset {
  id: string;
  label: string;
  prompt: string;
  style: string;
  slides: SlideData[];
}

const PRESETS: DeckPreset[] = [
  {
    id: "yc-pitch",
    label: "🚀 YC Seed Pitch: Autonomous Agents",
    prompt: "Create a 4-slide investor seed pitch for an AI agent workforce automating tier-1 enterprise support.",
    style: "Obsidian Dark",
    slides: [
      {
        title: "The $42B Support Bottleneck",
        subtitle: "Enterprise support teams are overwhelmed by repetitive tier-1 tickets, causing churn and high SLA breaches.",
        tag: "01. PROBLEM STATEMENT",
        highlightNumber: "73%",
        highlightLabel: "of customer queries are repetitive tier-1 queries that can be resolved instantly",
        points: [
          "Human agent ramp-up takes an average of 6.2 weeks",
          "Customer churn escalates 2.4x when first-reply time exceeds 15 minutes",
          "Traditional rule-based chatbots fail on 81% of complex, contextual inquiries"
        ],
        notes: "Speaker Note: Start with the visceral pain point of support team burnout and CFO concern over ballooning support payroll."
      },
      {
        title: "Autonomous Resolution Engine",
        subtitle: "Deep integration into Jira, Salesforce, and Zendesk with instant API-driven action resolution.",
        tag: "02. THE SOLUTION",
        highlightNumber: "94.2%",
        highlightLabel: "Autonomous ticket resolution without human intervention",
        points: [
          "Self-learning from existing knowledge bases, Slack channels, and resolved tickets",
          "Multi-hop reasoning engine executes actual refunds, upgrades, and system resets",
          "Seamless handoff to human specialists with synthesized context when sentiment dips"
        ],
        notes: "Speaker Note: Emphasize that we do not just suggest text; our agents execute backend actions securely."
      },
      {
        title: "Market Traction & Velocity",
        subtitle: "Rapid ARR expansion driven by product-led trial to enterprise expansion flywheels.",
        tag: "03. TRACTION & METRICS",
        highlightNumber: "$1.4M",
        highlightLabel: "ARR achieved in 9 months with 138% net revenue retention",
        points: [
          "34 paying mid-market and enterprise logos across FinTech and SaaS",
          "Net Revenue Retention (NRR) of 138% month-over-month",
          "Customer Acquisition Cost (CAC) payback period reduced to 4.2 months"
        ],
        notes: "Speaker Note: Investors want to see capital efficiency. Mention our organic inbound pipeline via word-of-mouth."
      },
      {
        title: "Seed Round Ask: $3.2M",
        subtitle: "Accelerating go-to-market and expanding the proprietary core inference infrastructure.",
        tag: "04. THE ASK & VISION",
        highlightNumber: "$3.2M",
        highlightLabel: "Lead investor secured: $1.8M committed",
        points: [
          "50% dedicated to world-class research engineering & fine-tuning pipelines",
          "30% scaled enterprise sales & customer success operations",
          "20% working capital runway to reach $5M ARR target by Q4 next year"
        ],
        notes: "Speaker Note: Close with urgency—round is currently 60% committed with top angels in developer tooling."
      }
    ]
  },
  {
    id: "q4-review",
    label: "📊 Q4 Financial & Product Review",
    prompt: "Executive Q4 review showing 220% growth, retention milestones, and 2027 enterprise roadmap.",
    style: "Cyber Indigo",
    slides: [
      {
        title: "Executive Summary: Q4 Milestones",
        subtitle: "Surpassed annual growth targets while maintaining strong positive operating cash flows.",
        tag: "EXECUTIVE SUMMARY",
        highlightNumber: "+220%",
        highlightLabel: "Year-over-Year revenue growth across global accounts",
        points: [
          "Total ARR crossed $8.6M milestone ahead of Q4 schedule",
          "Gross margins expanded from 74% to 83% via optimized serverless infrastructure",
          "Average contract value (ACV) climbed 38% after releasing enterprise SSO & audit logs"
        ],
        notes: "Highlight operational leverage: team grew only 25% while revenue more than doubled."
      },
      {
        title: "Product Evolution & Speed",
        subtitle: "Shipped 14 major feature updates, reducing customer onboarding time from 12 days to 35 minutes.",
        tag: "PRODUCT INNOVATION",
        highlightNumber: "35m",
        highlightLabel: "Median enterprise time-to-value down from 12 days",
        points: [
          "Launched v2.0 UI rebuild with Next.js 16 and zero runtime styling overhead",
          "Implemented SOC2 Type II compliance controls with zero audit findings",
          "API latency decreased by 64% with Turbopack edge caching"
        ],
        notes: "Acknowledge the engineering team's exceptional delivery velocity over the last sprint."
      },
      {
        title: "Retention & Customer Health",
        subtitle: "Customer satisfaction reached an all-time high of 98.4% across tier-1 enterprise accounts.",
        tag: "CUSTOMER SUCCESS",
        highlightNumber: "98.4%",
        highlightLabel: "CSAT score across top 50 revenue-generating accounts",
        points: [
          "Gross revenue churn fell to 0.4% per month",
          "Enterprise expansion revenue accounted for 42% of total new quarterly bookings",
          "Over 350,000 documents processed monthly without a single data incident"
        ],
        notes: "Point out the success of dedicated customer success managers for accounts over $50k ACV."
      },
      {
        title: "Strategic Objectives for Next Year",
        subtitle: "Scaling from regional enterprise leader into the default global standard for automated document workflows.",
        tag: "FUTURE OUTLOOK",
        highlightNumber: "3x",
        highlightLabel: "Target pipeline expansion for EMEA & APAC regions",
        points: [
          "Accelerate localization in EU, UK, and APAC business hubs",
          "Integrate custom multi-modal LLM reasoning pipelines for legal and medical slides",
          "Targeting $20M ARR milestone by end of next financial cycle"
        ],
        notes: "Set expectations for upcoming team expansion and key executive hires in Q1."
      }
    ]
  }
];

export default function InteractiveGenerator() {
  const [selectedPreset, setSelectedPreset] = useState<DeckPreset>(PRESETS[0]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [promptInput, setPromptInput] = useState(PRESETS[0].prompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [themeStyle, setThemeStyle] = useState<"dark" | "cyan" | "indigo">("dark");
  const [showNotes, setShowNotes] = useState(false);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);

  const currentSlide = selectedPreset.slides[currentSlideIndex];

  const handleSelectPreset = (preset: DeckPreset) => {
    setSelectedPreset(preset);
    setPromptInput(preset.prompt);
    setCurrentSlideIndex(0);
  };

  const handleSimulateGenerate = () => {
    setIsGenerating(true);
    setGenerationStep(1);

    setTimeout(() => setGenerationStep(2), 600);
    setTimeout(() => setGenerationStep(3), 1200);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationStep(0);
      setCurrentSlideIndex(0);
    }, 1800);
  };

  const handleExport = (type: "PPTX" | "PDF") => {
    setExportSuccess(`Preparing ${type} export...`);
    setTimeout(() => {
      setExportSuccess(`✓ ${type} downloaded successfully!`);
      setTimeout(() => setExportSuccess(null), 3000);
    }, 1000);
  };

  // Theme styling helpers
  const getThemeClasses = () => {
    switch (themeStyle) {
      case "cyan":
        return "bg-slate-900/90 border-cyan-500/30 text-cyan-50";
      case "indigo":
        return "bg-indigo-950/70 border-indigo-500/40 text-indigo-50";
      default:
        return "bg-gray-900/90 border-white/15 text-gray-100";
    }
  };

  return (
    <section id="demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Interactive Live Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See the AI Engine in <span className="gradient-accent">Action</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Pick a scenario below or enter your own prompt to see how DeckPulse automatically
            structures, styles, and crafts executive-ready slides in real-time.
          </p>
        </div>

        {/* Generator Workspace Box */}
        <div className="glass-panel-glow rounded-3xl p-4 sm:p-8 relative overflow-hidden">
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold mr-1 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-indigo-400" /> Presets:
            </span>
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedPreset.id === preset.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Prompt Input & Generation Control */}
          <div className="flex flex-col md:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Describe your presentation topic or paste bullet notes..."
                className="w-full px-4 py-3.5 rounded-xl bg-gray-950/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base transition-colors"
              />
              <FileText className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSimulateGenerate}
                disabled={isGenerating}
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin text-cyan-300" />
                    Synthesizing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 text-cyan-300" />
                    Regenerate Deck
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generation Step Indicator Banner (when active) */}
          {isGenerating && (
            <div className="mb-6 p-4 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-between text-xs sm:text-sm text-indigo-200 animate-pulse">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span>
                  {generationStep === 1 && "Phase 1: Synthesizing outline, financial data, and core themes..."}
                  {generationStep === 2 && "Phase 2: Applying executive design hierarchy and contrast ratios..."}
                  {generationStep === 3 && "Phase 3: Finalizing speaker notes and vector rendering..."}
                </span>
              </div>
              <span className="font-mono text-cyan-400">Step {generationStep}/3</span>
            </div>
          )}

          {/* Slide Deck Canvas Viewer */}
          <div className="border border-white/10 rounded-2xl bg-black/60 p-4 sm:p-6 shadow-2xl relative">
            {/* Top Toolbar inside preview */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
              {/* Pagination */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-gray-400">
                  Slide <strong className="text-white">{currentSlideIndex + 1}</strong> of{" "}
                  <strong className="text-white">{selectedPreset.slides.length}</strong>
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentSlideIndex === 0}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlideIndex((prev) =>
                        Math.min(selectedPreset.slides.length - 1, prev + 1)
                      )
                    }
                    disabled={currentSlideIndex === selectedPreset.slides.length - 1}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Theme selector chips */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-medium hidden sm:inline">Theme:</span>
                <button
                  onClick={() => setThemeStyle("dark")}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    themeStyle === "dark"
                      ? "bg-white/20 text-white font-semibold"
                      : "bg-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  Obsidian
                </button>
                <button
                  onClick={() => setThemeStyle("cyan")}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    themeStyle === "cyan"
                      ? "bg-cyan-500/30 text-cyan-300 font-semibold border border-cyan-500/40"
                      : "bg-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  Cyber Cyan
                </button>
                <button
                  onClick={() => setThemeStyle("indigo")}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    themeStyle === "indigo"
                      ? "bg-indigo-500/30 text-indigo-300 font-semibold border border-indigo-500/40"
                      : "bg-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  Neo Indigo
                </button>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className={`px-2.5 py-1 text-xs rounded-md border transition-colors cursor-pointer ${
                    showNotes
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                      : "bg-white/5 text-gray-400 border-transparent hover:text-white"
                  }`}
                >
                  Notes
                </button>

                <button
                  onClick={() => handleExport("PPTX")}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-400" />
                  <span>PPTX</span>
                </button>

                <button
                  onClick={() => handleExport("PDF")}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PDF</span>
                </button>
              </div>
            </div>

            {/* Export Notification Toast */}
            {exportSuccess && (
              <div className="mb-4 p-2.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs rounded-lg flex items-center justify-center gap-2 animate-fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>{exportSuccess}</span>
              </div>
            )}

            {/* THE ACTUAL SLIDE VIEWPORT (16:9 Aspect Ratio Container) */}
            <div
              className={`w-full aspect-[16/9] min-h-[340px] sm:min-h-[440px] rounded-xl border p-6 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-xl ${getThemeClasses()}`}
            >
              {/* Slide Header */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] sm:text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
                    {currentSlide.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                      DeckPulse AI Engine
                    </span>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {currentSlide.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-300 max-w-2xl font-light">
                  {currentSlide.subtitle}
                </p>
              </div>

              {/* Slide Body: Metrics Card + Bullet Points */}
              <div className="my-auto py-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {currentSlide.highlightNumber && (
                  <div className="md:col-span-5 bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col justify-center">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-white">
                        {currentSlide.highlightNumber}
                      </span>
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="mt-2 text-xs text-gray-300 font-medium leading-relaxed">
                      {currentSlide.highlightLabel}
                    </p>
                  </div>
                )}

                <div
                  className={`${
                    currentSlide.highlightNumber ? "md:col-span-7" : "md:col-span-12"
                  } space-y-3`}
                >
                  {currentSlide.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-200 leading-snug">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[10px] sm:text-xs text-gray-400">
                <span>Confidential — Prepared for Board & Investment Committee</span>
                <span>Slide {currentSlideIndex + 1}</span>
              </div>
            </div>

            {/* Collapsible Speaker Notes */}
            {showNotes && (
              <div className="mt-4 p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs sm:text-sm animate-fade-in">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-amber-400 block mb-1">
                  🎙️ Speaker Context & Talking Points:
                </span>
                <p>{currentSlide.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
