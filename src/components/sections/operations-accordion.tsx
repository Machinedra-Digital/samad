"use client";

import React, { useState } from "react";
import { Ship, Package, Landmark, ShieldCheck, ArrowUpRight, Anchor, CheckCircle2 } from "lucide-react";

const operations = [
  {
    icon: Ship,
    title: "Maritime Clearing & Chartering",
    desc: "Coordination of bulk dry cargo vessels, port handling, and customs clearance logistics.",
    details: "Our logistics desk handles terminal loading procedures, draft surveys, and maritime document clearance (Bill of Lading, Certificate of Origin, and export customs).",
  },
  {
    icon: Package,
    title: "Custom Packaging Assembly",
    desc: "Tailored packaging designs to secure chemical integrity and simplify destination forklift operations.",
    details: "We support loose bulk cargo, durable 50kg woven PP bags, 1-Metric-Ton FIBC Jumbo bags, or pre-nested configurations (20 bags packed inside a single Jumbo).",
  },
  {
    icon: Landmark,
    title: "Trade Finance Structures",
    desc: "B2B financing structures built to secure high-volume international trading transactions.",
    details: "We facilitate Letter of Credit (L/C) structures, documentary collections, and secure payment procedures designed to support cargo buyers.",
  },
  {
    icon: ShieldCheck,
    title: "SGS Quality Verification",
    desc: "Continuous chemical monitoring and sampling guarantees N46% Nitrogen compliance.",
    details: "Pre-shipment sampling by SGS or Bureau Veritas certifies maximum 1.0% Biuret and 0.5% moisture at the Middle Eastern loading port.",
  },
];

export default function OperationsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white border-b border-brand-gray-warm/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green-mid bg-brand-green-mid/10 px-3.5 py-1.5 rounded-full border border-brand-green-mid/20">
              Supply Chain
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-blue-dark sm:text-4xl font-heading">
              Our Port-to-Destination Operations
            </h2>
            <p className="text-brand-gray-mid text-sm leading-relaxed">
              We manage the end-to-end B2B trade lifecycle, ensuring agricultural Urea N46% is delivered to Asian and African ports on-spec and on-schedule.
            </p>
          </div>
          <a
            href="/about/"
            className="inline-flex items-center justify-center pl-6 pr-3 py-3 text-xs font-bold uppercase tracking-wider text-white bg-brand-blue-dark hover:bg-brand-blue-mid rounded-full shadow-md transition-all duration-300 group gap-4"
          >
            <span>Learn Operations</span>
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-brand-blue-dark transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-blue-dark" />
            </span>
          </a>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Creative Visual Panel (inspired by GreenMarket) */}
          <div className="lg:col-span-5 relative rounded-3xl bg-brand-blue-dark text-white p-8 overflow-hidden shadow-xl flex flex-col justify-between min-h-[400px]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3054_1px,transparent_1px),linear-gradient(to_bottom,#0e3054_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green-mid/25 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-blue-light/20 rounded-full blur-[100px]" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-green-mid/20 text-brand-green-light px-3 py-1 rounded-full border border-brand-green-light/20 text-[10px] font-bold uppercase tracking-wider">
                <Anchor className="w-3.5 h-3.5" />
                <span>Dubai, UAE HQ</span>
              </div>
              <h3 className="text-2xl font-extrabold font-heading leading-tight">
                Streamlined Ocean Freight Logistics
              </h3>
              <p className="text-sm text-brand-gray-warm leading-relaxed">
                By leveraging Jebel Ali and major Middle Eastern loading terminals, we run secure, high-capacity dry bulk charter services direct to global distribution ports.
              </p>
            </div>

            <div className="relative z-10 space-y-4 pt-12 border-t border-brand-blue-light/20">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-green-light">
                Logistical Milestones
              </h4>
              <div className="space-y-3">
                {[
                  "GCC Sourced Chemical Purity",
                  "Containerized or Loose Vessel Bulk Options",
                  "Direct Ocean Shipping Routes",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs text-brand-gray-light">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-light shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Accordion (Expand on Hover) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {operations.map((op, idx) => {
              const isActive = activeIndex === idx;
              const OpIcon = op.icon;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "bg-brand-blue-dark border-brand-blue-light/30 text-white shadow-xl shadow-brand-blue-dark/15 scale-[1.01]"
                      : "bg-brand-gray-light border-brand-gray-warm/40 hover:border-brand-blue-light/25 text-brand-blue-dark"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300 ${
                          isActive
                            ? "bg-brand-blue-mid text-brand-green-light border-brand-blue-light/40"
                            : "bg-white text-brand-green-mid border-brand-gray-warm/60"
                        }`}
                      >
                        <OpIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-heading">{op.title}</h3>
                    </div>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? "bg-brand-blue-mid text-brand-green-light border-brand-blue-light/35 rotate-45"
                          : "bg-white text-brand-gray-mid border-brand-gray-warm/60 rotate-0"
                      }`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Expandable Panel */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-[160px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className={`text-sm ${isActive ? "text-brand-green-light" : "text-brand-gray-dark"} font-semibold`}>
                      {op.desc}
                    </p>
                    <p className={`text-xs mt-2 leading-relaxed ${isActive ? "text-brand-gray-warm" : "text-brand-gray-mid"}`}>
                      {op.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
