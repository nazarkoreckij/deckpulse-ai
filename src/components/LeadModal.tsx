"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, Loader2, ShieldCheck } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState("Investor Pitch Deck");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid work email address.");
      return;
    }

    setError(null);
    setStatus("submitting");

    // Simulate API call to CRM / Form backend
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setCompany("");
    setStatus("idle");
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel-glow bg-gray-950 p-6 sm:p-8 border border-white/15 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">You&apos;re on the VIP Access List!</h3>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              Thank you, <strong className="text-white">{name}</strong>. We sent an onboarding
              link and your 14-day Pro trial credentials to <strong className="text-indigo-300">{email}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-400 max-w-sm mx-auto text-left">
              <span className="font-semibold text-gray-200 block mb-1">⚡ Next Steps:</span>
              1. Check your inbox for the instant sandbox link.
              <br />
              2. Download the PowerPoint & Google Slides add-in.
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm transition-colors cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Early Access & Executive Demo
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Start Your 14-Day Free Pro Trial
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Zero credit card required. Full access to AI layouts and vector PPTX exports.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/80 border border-red-500/40 text-red-300 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Cooper"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Primary Use Case
                  </label>
                  <select
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Investor Pitch Deck">Investor Pitch Decks</option>
                    <option value="Sales Proposals">Sales Proposals</option>
                    <option value="QBR & Strategy">QBR & Internal Strategy</option>
                    <option value="Consulting Deliverables">Consulting Reports</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Setting Up Workspace...
                    </>
                  ) : (
                    <>
                      <span>Activate Free Trial Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Enterprise SOC-2 ready · No credit card required</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
