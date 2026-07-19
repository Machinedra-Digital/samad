"use client";

import React, { useState } from "react";
import productsData from "@/content/products.json";
import { Layers, FileText, ChevronRight, MessageSquare, Box, ShoppingBag, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const packagingDetails: Record<string, { title: string; desc: string; tip: string }> = {
  "Bulk (Loose Vessel)": {
    title: "Bulk Cargo (Loose Vessel)",
    desc: "Shipped directly in bulk holds of dry cargo vessels. Designed for large-scale national distributors or processing plants equipped with harbor discharge silos.",
    tip: "Best for raw capacity and lowering freight costs on shipments > 10,000 Metric Tons.",
  },
  "50kg bags": {
    title: "50kg Woven PP Bags",
    desc: "Laminated woven polypropylene bags with inner PE liners to prevent moisture entry. Ideal for manual unloading at regional retail centers or smaller agricultural co-ops.",
    tip: "Highly durable, easy to stack, and prevents product leakage in humid environments.",
  },
  "1Mt Jumbo bag": {
    title: "1-Metric-Ton (1Mt) FIBC Jumbo Bag",
    desc: "Flexible Intermediate Bulk Containers (FIBC) constructed from heavy-duty woven plastic, with 4 loops for forklift or crane rigging. Designed for mechanised farms.",
    tip: "Speeds up loading/unloading operations and minimizes manual handling risks.",
  },
  "50kg bags (20 bags packed inside 1Mt Jumbo bag)": {
    title: "50kg Bags inside a 1Mt Jumbo Bag",
    desc: "A hybrid B2B packaging configuration. 20 individual 50kg bags are pre-packed into a single 1-Metric-Ton jumbo bag for protection during ocean transit and simplified forklift hoisting.",
    tip: "Protects individual bags from damage during transit, allowing easy break-bulk distribution at destination ports.",
  },
};

export default function ProductCatalogClient() {
  const [activeProduct, setActiveProduct] = useState(productsData[0]);
  const [selectedPack, setSelectedPack] = useState(productsData[0].packaging[1]); // default to 50kg bags

  const selectProduct = (id: string) => {
    const prod = productsData.find((p) => p.id === id);
    if (prod) {
      setActiveProduct(prod);
      setSelectedPack(prod.packaging[1] || prod.packaging[0]);
    }
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative bg-brand-blue-dark py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3054_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Products Catalog
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-gray-warm max-w-2xl mx-auto">
            Explore our technical specifications and diverse cargo packaging layouts for premium Urea N46%.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Sidebar Product Toggles */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green-mid block mb-2">
                Select Grade
              </span>
              
              {productsData.map((prod) => {
                const isSelected = activeProduct.id === prod.id;
                return (
                  <button
                    key={prod.id}
                    onClick={() => selectProduct(prod.id)}
                    className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? "bg-brand-blue-dark border-brand-blue-light/30 text-white shadow-lg shadow-brand-blue-dark/10"
                        : "bg-white border-brand-gray-warm hover:border-brand-blue-light/20 text-brand-blue-dark hover:shadow-md"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Layers className={`w-4 h-4 ${isSelected ? "text-brand-green-light" : "text-brand-green-mid"}`} />
                        <span className="font-bold tracking-wide">{prod.name}</span>
                      </div>
                      <span className={`text-xs block ${isSelected ? "text-brand-gray-mid" : "text-brand-gray-mid"}`}>
                        {prod.category} ({prod.state})
                      </span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected ? "text-brand-green-light translate-x-1" : "text-brand-gray-mid group-hover:translate-x-1"
                    }`} />
                  </button>
                );
              })}

              {/* Technical Overview Info box */}
              <div className="bg-brand-blue-mid/5 rounded-xl border border-brand-blue-mid/10 p-6 space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-blue-mid flex items-center">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Standard Specs Guarantee
                </h4>
                <p className="text-xs text-brand-gray-dark leading-relaxed">
                  Our chemical supplies are sourced from ISO-certified production lines in the GCC. All urea deliveries come with SGS/Bureau Veritas certification reports certifying nitrogen and biuret compliance.
                </p>
              </div>
            </div>

            {/* Product Specifications Display */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Specs Card */}
              <div className="bg-white rounded-2xl border border-brand-gray-warm shadow-md p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue-dark">
                    {activeProduct.name}
                  </h2>
                  <p className="text-sm text-brand-gray-mid mt-1">
                    {activeProduct.description}
                  </p>
                </div>

                {/* Specifications Table */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                    Technical Specification Sheet
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-brand-gray-light text-brand-blue-mid uppercase text-[10px] tracking-widest font-semibold border-b border-brand-gray-warm">
                          <th className="py-3 px-4">Parameter</th>
                          <th className="py-3 px-4">Guaranteed Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-gray-warm">
                        <tr>
                          <td className="py-3 px-4 font-medium text-brand-gray-dark">Nitrogen Content</td>
                          <td className="py-3 px-4 text-brand-blue-dark font-bold">{activeProduct.specifications.nitrogen}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-brand-gray-dark">Biuret Content</td>
                          <td className="py-3 px-4 text-brand-blue-dark font-bold">{activeProduct.specifications.biuret}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-brand-gray-dark">Moisture Content</td>
                          <td className="py-3 px-4 text-brand-blue-dark font-bold">{activeProduct.specifications.moisture}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-brand-gray-dark">Granulometry Size Range</td>
                          <td className="py-3 px-4 text-brand-blue-dark font-bold">{activeProduct.specifications.granulometry}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-brand-gray-dark">Physical Appearance Color</td>
                          <td className="py-3 px-4 text-brand-blue-dark font-bold">{activeProduct.specifications.color}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Packaging Section Widget */}
              <div className="bg-white rounded-2xl border border-brand-gray-warm shadow-md p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-blue-dark">
                    B2B Cargo Packaging Configurations
                  </h3>
                  <p className="text-xs text-brand-gray-mid mt-1">
                    Select a packaging style to inspect container loading configurations and recommendations.
                  </p>
                </div>

                {/* Packaging Buttons Selector */}
                <div className="flex flex-wrap gap-2.5">
                  {activeProduct.packaging.map((pack) => {
                    const isSelected = selectedPack === pack;
                    return (
                      <button
                        key={pack}
                        onClick={() => setSelectedPack(pack)}
                        className={`px-4 py-2.5 rounded-lg border text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                          isSelected
                            ? "bg-brand-green-mid border-brand-green-mid text-white shadow-md shadow-brand-green-mid/20"
                            : "bg-brand-gray-light border-brand-gray-warm hover:border-brand-gray-warm text-brand-gray-dark hover:bg-brand-gray-warm/40"
                        }`}
                      >
                        <Box className="w-3.5 h-3.5" />
                        <span>{pack.split(" (")[0]}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Packaging Information Panel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPack}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-xl bg-brand-blue-dark/5 border border-brand-blue-mid/10 space-y-4"
                  >
                    <div className="flex items-center space-x-3 text-brand-blue-dark">
                      <ShoppingBag className="w-5 h-5 text-brand-green-mid" />
                      <h4 className="font-bold tracking-wide">
                        {packagingDetails[selectedPack]?.title || selectedPack}
                      </h4>
                    </div>
                    <p className="text-sm text-brand-gray-dark leading-relaxed">
                      {packagingDetails[selectedPack]?.desc}
                    </p>
                    <div className="flex items-start space-x-2.5 bg-brand-green-mid/5 border border-brand-green-mid/15 p-4 rounded-lg">
                      <Truck className="w-4 h-4 text-brand-green-mid shrink-0 mt-0.5" />
                      <p className="text-xs text-brand-green-dark leading-relaxed">
                        <strong>B2B Logistics Tip:</strong> {packagingDetails[selectedPack]?.tip}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Call to Action Quote Box */}
              <div className="bg-gradient-to-r from-brand-blue-dark to-brand-blue-mid rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-brand-blue-light/10">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-lg font-bold tracking-wide">Ready to Source B2B Fertilizers?</h3>
                  <p className="text-xs text-brand-gray-mid max-w-md">
                    Let our Dubai logistics office assist you with ocean bulk chartering, tailored pricing, and destination shipping clearance.
                  </p>
                </div>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-green-mid hover:bg-brand-green-light text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-300 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request Quote
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
