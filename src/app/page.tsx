"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveGenerator from "@/components/InteractiveGenerator";
import Features from "@/components/Features";
import RoiCalculator from "@/components/RoiCalculator";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090b10] text-gray-100 selection:bg-indigo-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      <main className="relative">
        {/* Hero Section */}
        <Hero onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* Live Interactive Generator & Sandbox */}
        <InteractiveGenerator />

        {/* Feature Grid */}
        <Features />

        {/* ROI and Hours Saved Calculator */}
        <RoiCalculator onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* Social Proof & Customer Reviews */}
        <Testimonials />

        {/* Transparent Pricing Plans */}
        <Pricing onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* Frequently Asked Questions */}
        <Faq />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Demo / Lead Activation Modal */}
      <LeadModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
