import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import HeroVideoBackground from "./hero-video-background";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-blue-dark">
      {/* Dynamic aesthetic background gradient representing B2B industrial & agriculture */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-dark via-brand-blue-mid to-brand-accent-dark opacity-90 z-0" />

      {/* Deferred Desktop Background Video (Isolated client component) */}
      <HeroVideoBackground />

      {/* Grid Overlay for readability and premium look */}
      <div className="absolute inset-0 bg-brand-blue-dark/30 z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3054_1px,transparent_1px),linear-gradient(to_bottom,#0e3054_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 z-10" />

      {/* Optimized Radial Glow effects (Zero heavy GPU filter blur computation) */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,#0284c7_0%,transparent_70%)] opacity-30 pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,#059669_0%,transparent_70%)] opacity-20 pointer-events-none z-10" />

      {/* Hero Content - Instant Paint for LCP Optimization */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content (Rendered instantly as a pure Server Component) */}
          <div className="lg:col-span-7 text-left space-y-6 flex flex-col items-start">

            {/* Floating Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-blue-mid/60 border border-brand-blue-light/30 shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent-light"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gray-light">
                UAE Base • Global Reach to Asia & Africa
              </span>
            </div>

            {/* Headline - LCP Element (Immediate Static Server HTML Visibility) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Empowering Global Agriculture with High-Performance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 block lg:inline">
                Urea N46%
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              Arabian Samad is a premier fertilizer trading and logistics partner based in the UAE. We distribute prilled and granular Urea N46% in custom packaging configurations to support robust food production systems globally.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact/"
                className="w-full sm:w-auto inline-flex items-center justify-between pl-6 pr-3 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-500 rounded-full shadow-lg hover:shadow-sky-500/20 transition-all duration-300 group gap-4"
              >
                <span>Contact Us</span>
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-sky-600 transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-blue-dark group-hover:text-white">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="/products/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-brand-blue-mid/45 hover:bg-brand-blue-mid/70 border border-brand-blue-light/40 rounded-full transition-all duration-300"
              >
                Specifications
              </Link>
            </div>

            {/* Micro Stats Card */}
            <div className="flex items-center gap-6 mt-4 p-4 rounded-2xl bg-brand-blue-dark/80 border border-white/10 shadow-lg w-full sm:w-auto">
              <div>
                <div className="text-2xl font-extrabold text-sky-400 font-heading">SGS Certified</div>
                <div className="text-xs text-slate-300">100% Quality Inspected Cargo</div>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <div className="text-2xl font-extrabold text-sky-400 font-heading">GCC Sourced</div>
                <div className="text-xs text-slate-300">Standard ISO Compliance</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collages / Cards Grid */}
          <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[400px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute w-[250px] h-[250px] bg-[radial-gradient(circle_at_center,#0284c7_0%,transparent_70%)] opacity-30" />

            {/* Overlapping Bento/Collage Cards */}
            {/* Card 1: Granular Urea Info Card */}
            <div className="absolute top-4 left-4 sm:left-10 w-[240px] p-6 rounded-2xl bg-brand-blue-dark/95 border border-brand-blue-light/35 shadow-xl space-y-4 hover:-translate-y-1 transition-transform duration-300 group z-10">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-700/50">
                  Granular Grade
                </span>
                <span className="text-slate-300 text-xs font-semibold">N46.0%</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">Granular Urea</h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Delayed nitrogen release, excellent for warm climates and mechanical broadcasting.
                </p>
              </div>
              <div className="flex items-center justify-between text-[10px] text-sky-400 font-semibold pt-2 border-t border-white/10">
                <span>Particle: 2.00 - 4.75mm</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Prilled Urea Info Card */}
            <div className="absolute bottom-4 right-4 sm:right-10 w-[240px] p-6 rounded-2xl bg-brand-blue-dark/90 border border-brand-blue-light/30 shadow-xl space-y-4 hover:-translate-y-1 transition-transform duration-300 group z-20">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-700/50">
                  Prilled Grade
                </span>
                <span className="text-slate-300 text-xs font-semibold">N46.0%</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">Prilled Urea</h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Highly soluble sphere design, ideal for liquid fertilizer blends and fertigation.
                </p>
              </div>
              <div className="flex items-center justify-between text-[10px] text-sky-400 font-semibold pt-2 border-t border-white/10">
                <span>Particle: 1.00 - 2.80mm</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest text-brand-gray-mid mb-2 font-medium">Scroll Down</span>
        <div className="text-brand-accent-light animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
