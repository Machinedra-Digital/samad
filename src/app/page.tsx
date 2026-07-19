import React from "react";
import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Ship, Package, Landmark, Award, ShieldCheck, ArrowRight, Layers, HelpCircle } from "lucide-react";

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
        <section className="py-20 md:py-28 bg-white border-b border-brand-gray-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-green-mid">
                  Corporate Logistics
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-brand-blue-dark sm:text-4xl">
                  UAE-Based Strategic Supply Chains to Asia & Africa
                </h2>
                <p className="text-brand-gray-dark leading-relaxed">
                  Arabian Samad leverages the United Arab Emirates&apos; world-class maritime infrastructure to orchestrate high-volume fertilizer trading operations. We act as a trusted intermediary, securing supply continuity for nitrogenous agricultural inputs.
                </p>
                <p className="text-brand-gray-dark leading-relaxed">
                  Our cargo logistics team oversees every phase of the trade lifecycle—from bulk vessel chartering and port handling to custom packaging assembly, ensuring on-spec chemical dispatch to critical agricultural corridors.
                </p>
                <div className="pt-4">
                  <Link
                    href="/about/"
                    className="inline-flex items-center text-sm font-bold text-brand-green-mid hover:text-brand-green-light transition-colors group"
                  >
                    Learn More About Our Operations
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Bento-style mini list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-brand-gray-light border border-brand-gray-warm space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-dark flex items-center justify-center text-brand-green-light">
                    <Ship className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-brand-blue-dark">Maritime Clearing</h3>
                  <p className="text-xs text-brand-gray-mid leading-relaxed">
                    Bulk cargo operations managed directly from Middle Eastern export terminals to deepwater ports.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-brand-gray-light border border-brand-gray-warm space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-dark flex items-center justify-center text-brand-green-light">
                    <Package className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-brand-blue-dark">Custom Packaging</h3>
                  <p className="text-xs text-brand-gray-mid leading-relaxed">
                    Flexible options: Bulk, 50kg bags, 1Mt jumbo bags, or custom 20-in-1 nested configuration.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-brand-gray-light border border-brand-gray-warm space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-dark flex items-center justify-center text-brand-green-light">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-brand-blue-dark">Trade Finance</h3>
                  <p className="text-xs text-brand-gray-mid leading-relaxed">
                    Fully structured B2B trade financing mechanisms to support bulk buyers and import procedures.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-brand-gray-light border border-brand-gray-warm space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-dark flex items-center justify-center text-brand-green-light">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-brand-blue-dark">SGS Verification</h3>
                  <p className="text-xs text-brand-gray-mid leading-relaxed">
                    Third-party quality assessments at loading port guaranteeing N46% purity content compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              <div className="bg-white p-8 rounded-2xl border border-brand-gray-warm shadow-md hover:shadow-xl transition-all duration-300 space-y-6 text-left flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <Layers className="w-5 h-5 text-brand-green-mid" />
                    <h3 className="text-xl font-bold text-brand-blue-dark">Granular Urea N46%</h3>
                  </div>
                  <p className="text-sm text-brand-gray-dark leading-relaxed">
                    Larger particle sizing (2.00 - 4.75mm). Harder granules provide excellent mechanical handling strength, lower moisture absorption, and release nitrogen slowly over a longer period in warm soils.
                  </p>
                  <ul className="space-y-2 text-xs text-brand-gray-mid">
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 rounded-full bg-brand-green-mid"></span>
                      <span>90% Min sizing within 2.0-4.75mm</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 rounded-full bg-brand-green-mid"></span>
                      <span>Best for bulk mechanical broadcasting</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-brand-gray-warm">
                  <Link
                    href="/products/"
                    className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-brand-blue-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-blue-mid transition-colors duration-200"
                  >
                    View Specifications
                  </Link>
                </div>
              </div>

              {/* Prilled Box */}
              <div className="bg-white p-8 rounded-2xl border border-brand-gray-warm shadow-md hover:shadow-xl transition-all duration-300 space-y-6 text-left flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <Layers className="w-5 h-5 text-brand-green-mid" />
                    <h3 className="text-xl font-bold text-brand-blue-dark">Prilled Urea N46%</h3>
                  </div>
                  <p className="text-sm text-brand-gray-dark leading-relaxed">
                    Smaller spherical particle sizing (1.00 - 2.80mm). Highly soluble, making it the industry standard for liquid spray applications, fertigation setups, or rapid broadacre surface dressing.
                  </p>
                  <ul className="space-y-2 text-xs text-brand-gray-mid">
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 rounded-full bg-brand-green-mid"></span>
                      <span>90% Min sizing within 1.0-2.8mm</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 rounded-full bg-brand-green-mid"></span>
                      <span>Rapid solubility for spray applications</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-brand-gray-warm">
                  <Link
                    href="/products/"
                    className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-brand-blue-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-blue-mid transition-colors duration-200"
                  >
                    View Specifications
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA B2B Section */}
        <section className="bg-brand-blue-dark text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3054_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green-mid/10 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Source High-Grade Urea N46% Directly
            </h2>
            <p className="text-brand-gray-mid text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our Dubai-based sales desk assists with quotation proposals, packaging specifications, and customs documentation for destinations across Asia and Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-green-mid hover:bg-brand-green-light rounded-lg shadow-md transition-all duration-300"
              >
                Inquire & Get Quotation
              </Link>
              <Link
                href="/products/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand-gray-light hover:text-white border border-brand-blue-light/35 bg-brand-blue-mid/20 hover:bg-brand-blue-mid/40 rounded-lg transition-all duration-300"
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
