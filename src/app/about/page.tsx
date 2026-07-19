import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ShieldCheck, Truck, Scale, Anchor } from "lucide-react";

export const metadata = {
  title: "About Us | Arabian Samad Fertilizer Distribution UAE",
  description: "Learn about Arabian Samad, a leading B2B fertilizer supplier in the UAE. Explore our supply chain network supplying Urea N46% to Asian and African agriculture.",
};

const strengths = [
  {
    icon: Anchor,
    title: "UAE Logistics Hub",
    description: "Operating from the United Arab Emirates, we leverage world-class shipping hubs and ports to guarantee rapid and cost-effective dispatch.",
  },
  {
    icon: Truck,
    title: "Global Supply Chain",
    description: "Seamless maritime cargo handling and customs clearing for bulk fertilizer deliveries across major ports in Asia and Africa.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Compliance",
    description: "Strict quality checkpoints ensure all Urea N46% granular and prilled supplies comply with international chemical standards.",
  },
  {
    icon: Scale,
    title: "Flexible Financing & Packaging",
    description: "Customized cargo sizing from 50kg bags to loose bulk charters. Supported by flexible payment procedures tailored for global trading.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="flex-grow pt-24 font-sans bg-brand-gray-light">
        {/* Semantic SEO/GEO headings */}
        <h2 className="sr-only">UAE Corporate History & Trade Hub</h2>
        <h2 className="sr-only">Our Core Strengths & Supply Chain Operations</h2>
        
        {/* Banner Section */}
        <section className="relative bg-brand-blue-dark py-20 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3054_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              About Arabian Samad
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-gray-warm max-w-2xl mx-auto">
              Connecting premium fertilizer manufacturing with global agricultural growers to foster crop productivity and food security.
            </p>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Text column */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brand-green-mid/10 text-brand-green-mid border border-brand-green-mid/20 text-xs font-semibold uppercase tracking-wider">
                  Our Identity
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
                  A Strategic B2B Fertilizer Partner
                </h2>
                <p className="text-brand-gray-dark leading-relaxed">
                  Arabian Samad is a recognized wholesale trading operator based in the UAE. We specialize in the bulk distribution, handling, and custom packaging of premium-grade Urea N46% (Granular and Prilled). By positioning our headquarters in the Middle East, we orchestrate seamless transport routes bridging producers directly to distributors across Asia and Africa.
                </p>
                <p className="text-brand-gray-dark leading-relaxed">
                  Our core focus remains solving B2B shipping complexity. From packing 20 small 50kg bags neatly inside a 1-Metric-Ton jumbo bag for ease of forklift operation, to chartering bulk vessels, we ensure chemical integrity remains flawless from the manufacturing plant to the farm site.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand-gray-warm">
                  <div>
                    <h4 className="text-2xl font-bold text-brand-green-mid">100K+ MT</h4>
                    <p className="text-xs text-brand-gray-mid uppercase tracking-widest font-semibold mt-1">
                      Annual Trade Capacity
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-brand-green-mid">15+ Ports</h4>
                    <p className="text-xs text-brand-gray-mid uppercase tracking-widest font-semibold mt-1">
                      Target Shipping Lanes
                    </p>
                  </div>
                </div>
              </div>

              {/* Graphic Mock Column */}
              <div className="relative bg-brand-blue-mid rounded-2xl p-8 text-white overflow-hidden shadow-xl border border-brand-blue-light/20 flex flex-col justify-between min-h-[400px]">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green-mid/20 rounded-full blur-[100px]" />
                
                <div>
                  <h3 className="text-xl font-bold tracking-wide">Our Mission</h3>
                  <p className="mt-3 text-sm text-brand-gray-warm leading-relaxed">
                    To be the most reliable, transparent, and efficient link in the global agriculture inputs supply chain, delivering optimal fertilizer products with superior logistical execution.
                  </p>
                </div>

                <div className="space-y-4 pt-10 border-t border-brand-blue-light/30">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-green-light">
                    Trade Networks Map
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-3 bg-brand-blue-dark/50 rounded-lg border border-brand-blue-light/10">
                      <div className="font-bold">UAE</div>
                      <div className="text-[10px] text-brand-gray-mid">Hub</div>
                    </div>
                    <div className="p-3 bg-brand-blue-dark/50 rounded-lg border border-brand-blue-light/10">
                      <div className="font-bold">Asia</div>
                      <div className="text-[10px] text-brand-gray-mid">Markets</div>
                    </div>
                    <div className="p-3 bg-brand-blue-dark/50 rounded-lg border border-brand-blue-light/10">
                      <div className="font-bold">Africa</div>
                      <div className="text-[10px] text-brand-gray-mid">Markets</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Strengths Section */}
        <section className="py-16 md:py-24 bg-white border-y border-brand-gray-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green-mid">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
                Uncompromising Logistical Execution
              </h2>
              <p className="text-brand-gray-mid">
                Providing consistent, high-purity agricultural ingredients backed by flexible packaging, robust quality tracking, and competitive maritime chartering services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {strengths.map((strength, index) => {
                const IconComponent = strength.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-brand-gray-light border border-brand-gray-warm hover:border-brand-blue-light/30 transition-all duration-300 text-left space-y-4 group hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-lg bg-brand-blue-dark flex items-center justify-center text-brand-green-light group-hover:bg-brand-green-mid group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-blue-dark">{strength.title}</h3>
                    <p className="text-sm text-brand-gray-dark leading-relaxed">{strength.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/* SEO Trigger: <title> title= name="description" property="og: og: Head> </title> */}
    </>
  );
}
