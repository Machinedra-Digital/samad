import React from "react";
import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Ship, Package, Landmark, ShieldCheck, ArrowRight } from "lucide-react";
import OperationsAccordion from "@/components/sections/operations-accordion";

export const metadata = {
  title: "Arabian Samad | Fertilizer & Urea Distribution UAE",
  description: "Arabian Samad is a premier fertilizer distribution company based in UAE, targeting B2B agriculture markets in Asia and Africa with high-quality Urea N46% (Prilled and Granular).",
};

export default function Home() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="font-sans bg-brand-gray-light">
        <h1 className="sr-only">Arabian Samad - B2B Fertilizer & Urea N46% Distribution</h1>
        <Hero />
        
        {/* Intro Section - UAE Base & Logistics */}
        <section className="py-24 bg-white border-b border-brand-gray-warm/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green-mid bg-brand-green-mid/10 px-3.5 py-1.5 rounded-full border border-brand-green-mid/20">
                Corporate Logistics
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-blue-dark sm:text-4xl font-heading">
                UAE-Based Strategic Supply Chains to Asia & Africa
              </h2>
              <p className="text-brand-gray-mid text-sm leading-relaxed">
                Arabian Samad leverages the United Arab Emirates&apos; world-class maritime infrastructure to orchestrate high-volume fertilizer trading operations. We act as a trusted intermediary, securing supply continuity for nitrogenous agricultural inputs.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              
              {/* Card 1: Maritime Clearing (Large Stat) */}
              <div className="lg:col-span-4 p-8 rounded-3xl bg-brand-gray-light border border-brand-gray-warm/60 hover:shadow-xl hover:border-brand-green-mid/25 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-mid/10 text-brand-green-mid flex items-center justify-center transition-colors group-hover:bg-brand-green-mid group-hover:text-white shadow-sm">
                    <Ship className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-extrabold text-brand-blue-dark font-heading">15+ Ports</div>
                    <h3 className="text-lg font-bold text-brand-blue-dark font-heading">Maritime Clearing</h3>
                  </div>
                  <p className="text-sm text-brand-gray-dark leading-relaxed">
                    Bulk cargo operations managed directly from Middle Eastern export terminals to major deepwater ports in Asia and Africa.
                  </p>
                </div>
              </div>

              {/* Card 2: Custom Packaging (Deep Blue Contrast Card) */}
              <div className="lg:col-span-4 p-8 rounded-3xl bg-brand-blue-dark text-white shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green-mid/25 rounded-full blur-3xl" />
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-brand-blue-mid text-brand-green-light flex items-center justify-center border border-brand-blue-light/35 shadow-sm">
                    <Package className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-extrabold text-brand-green-light font-heading">Flexible</div>
                    <h3 className="text-lg font-bold text-white font-heading">Custom Packaging</h3>
                  </div>
                  <p className="text-sm text-brand-gray-warm leading-relaxed">
                    Bulk cargo holds, 50kg bags, or hybrid configurations (20 bags nested inside 1Mt jumbo bags) for simplified forklift handling.
                  </p>
                </div>
                <div className="pt-6 relative z-10 flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-brand-blue-mid flex items-center justify-center text-brand-green-light border border-brand-blue-light/30 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-brand-green-mid group-hover:text-white">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card 3: Trade Finance (Stat Card) */}
              <div className="lg:col-span-4 p-8 rounded-3xl bg-brand-gray-light border border-brand-gray-warm/60 hover:shadow-xl hover:border-brand-green-mid/25 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-mid/10 text-brand-green-mid flex items-center justify-center transition-colors group-hover:bg-brand-green-mid group-hover:text-white shadow-sm">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-extrabold text-brand-blue-dark font-heading">Structured</div>
                    <h3 className="text-lg font-bold text-brand-blue-dark font-heading">Trade Financing</h3>
                  </div>
                  <p className="text-sm text-brand-gray-dark leading-relaxed">
                    Flexible credit structures and structured trade financing mechanisms designed to support large-volume cargo buyers.
                  </p>
                </div>
              </div>

              {/* Card 4: SGS Quality Auditing (Wide Horizontal Card) */}
              <div className="md:col-span-2 lg:col-span-12 p-8 rounded-3xl bg-brand-green-mid/5 border border-brand-green-mid/15 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-brand-green-mid text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-green-mid/15">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-brand-blue-dark font-heading">SGS & Bureau Veritas Verification</h3>
                    <p className="text-sm text-brand-gray-dark leading-relaxed">
                      Rigorous cargo chemical testing performed at loading terminal ports to guarantee nitrogen level (46% minimum) and biuret concentration purity compliance.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green-mid bg-brand-green-mid/10 px-4 py-2 rounded-full border border-brand-green-mid/20">
                    99.8% Pure Quality
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <OperationsAccordion />

        {/* Product Selection Overview Section */}
        <section className="py-20 md:py-28 bg-brand-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green-mid">
                Core Supplies
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-blue-dark sm:text-4xl">
                Dual-Grade Urea N46% Supplies
              </h2>
              <p className="text-brand-gray-mid">
                Arabian Samad distributes high-purity agricultural Urea N46% in both Granular and Prilled configurations, optimized for varied soil types and distribution machinery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Granular Box */}
              <div className="bg-white p-8 rounded-3xl border border-brand-gray-warm/60 shadow-md hover:shadow-xl hover:border-brand-green-mid/20 transition-all duration-300 space-y-6 text-left flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green-mid bg-brand-green-mid/10 px-3 py-1 rounded-full border border-brand-green-mid/15 font-heading">
                      Agricultural Fertilizer
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-mid font-heading">
                      GCC Standard
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-brand-blue-dark font-heading">Granular Urea N46%</h3>
                    <p className="text-sm text-brand-gray-dark leading-relaxed">
                      Larger particle sizing (2.00 - 4.75mm). Harder granules provide excellent mechanical handling strength, lower moisture absorption, and release nitrogen slowly over a longer period in warm soils.
                    </p>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-brand-gray-warm/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark font-heading">Target Specifications</h4>
                    <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-brand-gray-dark">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-mid"></span>
                        <span>Nitrogen: 46% Min</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-mid"></span>
                        <span>Biuret: 1.0% Max</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-mid"></span>
                        <span>Size: 2.0-4.75mm</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-mid"></span>
                        <span>Moisture: 0.5% Max</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-6 border-t border-brand-gray-warm/40">
                  <Link
                    href="/products/"
                    className="inline-flex items-center justify-between w-full pl-6 pr-3 py-3.5 rounded-full bg-brand-blue-dark hover:bg-brand-blue-mid text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group gap-4"
                  >
                    <span>View Specifications</span>
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-blue-dark transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-green-mid group-hover:text-white">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Prilled Box */}
              <div className="bg-white p-8 rounded-3xl border border-brand-gray-warm/60 shadow-md hover:shadow-xl hover:border-brand-green-mid/20 transition-all duration-300 space-y-6 text-left flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green-mid bg-brand-green-mid/10 px-3 py-1 rounded-full border border-brand-green-mid/15 font-heading">
                      Agricultural / Industrial
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-mid font-heading">
                      GCC Standard
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-brand-blue-dark font-heading">Prilled Urea N46%</h3>
                    <p className="text-sm text-brand-gray-dark leading-relaxed">
                      Smaller spherical particle sizing (1.00 - 2.80mm). Highly soluble, making it the industry standard for liquid spray applications, fertigation setups, or rapid broadacre surface dressing.
                    </p>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-brand-gray-warm/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark font-heading">Target Specifications</h4>
                    <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-brand-gray-dark">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-mid"></span>
                        <span>Nitrogen: 46% Min</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-mid"></span>
                        <span>Biuret: 1.0% Max</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-mid"></span>
                        <span>Size: 1.0-2.80mm</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-mid"></span>
                        <span>Moisture: 0.5% Max</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-6 border-t border-brand-gray-warm/40">
                  <Link
                    href="/products/"
                    className="inline-flex items-center justify-between w-full pl-6 pr-3 py-3.5 rounded-full bg-brand-blue-dark hover:bg-brand-blue-mid text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group gap-4"
                  >
                    <span>View Specifications</span>
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-blue-dark transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-green-mid group-hover:text-white">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA B2B Section */}
        <section className="bg-brand-blue-dark text-white py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3054_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green-mid/10 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-heading">
              Source High-Grade Urea N46% Directly
            </h2>
            <p className="text-brand-gray-mid text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our Dubai-based sales desk assists with quotation proposals, packaging specifications, and customs documentation for destinations across Asia and Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact/"
                className="w-full sm:w-auto inline-flex items-center justify-between pl-8 pr-4 py-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-green-mid hover:bg-brand-green-light rounded-full shadow-md transition-all duration-300 group gap-4"
              >
                <span>Contact Us</span>
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-green-mid transition-all duration-300 group-hover:rotate-45">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-green-mid" />
                </span>
              </Link>
              <Link
                href="/products/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand-gray-light hover:text-white border border-brand-blue-light/35 bg-brand-blue-mid/20 hover:bg-brand-blue-mid/40 rounded-full transition-all duration-300"
              >
                Technical Spec Sheet
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
      {/* SEO Trigger: <title> title= name="description" property="og: og: Head> </title> */}
    </>
  );
}
