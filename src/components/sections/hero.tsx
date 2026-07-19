"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay blocked or video error: ", err);
        setVideoError(true);
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-blue-dark">
      {/* Background Media */}
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-45 transform scale-105"
        >
          {/* Using the local hero video asset */}
          <source
            src="/samad/hero_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        /* Dynamic aesthetic fallback gradient representing B2B industrial & agriculture */
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-dark via-brand-blue-mid to-brand-green-dark opacity-80 z-0" />
      )}

      {/* Grid Overlay for readability and premium look */}
      <div className="absolute inset-0 bg-brand-blue-dark/50 z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3054_1px,transparent_1px),linear-gradient(to_bottom,#0e3054_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 z-10" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-green-mid/20 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-blue-light/10 rounded-full blur-[150px] pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-left space-y-6 flex flex-col items-start">
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-blue-mid/60 backdrop-blur-md border border-brand-blue-light/30 shadow-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green-light"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gray-light">
                UAE Base • Global Reach to Asia & Africa
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading"
            >
              Empowering Global Agriculture with High-Performance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-light to-brand-green-mid block lg:inline">
                Urea N46%
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-gray-warm max-w-2xl leading-relaxed font-sans"
            >
              Arabian Samad is a premier fertilizer trading and logistics partner based in the UAE. We distribute prilled and granular Urea N46% in custom packaging configurations to support robust food production systems globally.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contact/"
                className="w-full sm:w-auto inline-flex items-center justify-between pl-6 pr-3 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-brand-green-mid hover:bg-brand-green-light rounded-full shadow-lg hover:shadow-brand-green-mid/20 transition-all duration-300 group gap-4"
              >
                <span>Contact Us</span>
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-green-mid transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-blue-dark group-hover:text-white">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="/products/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-brand-blue-mid/45 hover:bg-brand-blue-mid/70 border border-brand-blue-light/40 rounded-full transition-all duration-300"
              >
                Specifications
              </Link>
            </motion.div>

            {/* Micro Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 mt-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg w-full sm:w-auto"
            >
              <div>
                <div className="text-2xl font-extrabold text-brand-green-light font-heading">SGS Certified</div>
                <div className="text-xs text-brand-gray-warm">100% Quality Inspected Cargo</div>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <div className="text-2xl font-extrabold text-brand-green-light font-heading">GCC Sourced</div>
                <div className="text-xs text-brand-gray-warm">Standard ISO Compliance</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Collages / Cards Grid */}
          <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[400px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute w-[250px] h-[250px] bg-brand-green-mid/20 rounded-full blur-[80px]" />

            {/* Overlapping Bento/Collage Cards */}
            {/* Card 1: Granular Urea Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-4 left-4 sm:left-10 w-[240px] p-6 rounded-2xl bg-brand-blue-dark/75 backdrop-blur-md border border-brand-blue-light/35 shadow-xl space-y-4 hover:-translate-y-1 transition-transform duration-300 group z-10"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green-light bg-brand-green-mid/10 px-2 py-0.5 rounded border border-brand-green-mid/20">
                  Granular Grade
                </span>
                <span className="text-brand-gray-warm text-xs font-semibold">N46.0%</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">Granular Urea</h3>
                <p className="text-xs text-brand-gray-warm leading-relaxed mt-1">
                  Delayed nitrogen release, excellent for warm climates and mechanical broadcasting.
                </p>
              </div>
              <div className="flex items-center justify-between text-[10px] text-brand-green-light font-semibold pt-2 border-t border-white/10">
                <span>Particle: 2.00 - 4.75mm</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            {/* Card 2: Prilled Urea Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-4 right-4 sm:right-10 w-[240px] p-6 rounded-2xl bg-brand-blue-mid/45 backdrop-blur-md border border-brand-blue-light/20 shadow-xl space-y-4 hover:-translate-y-1 transition-transform duration-300 group z-20"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green-light bg-brand-green-mid/10 px-2 py-0.5 rounded border border-brand-green-mid/20">
                  Prilled Grade
                </span>
                <span className="text-brand-gray-warm text-xs font-semibold">N46.0%</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">Prilled Urea</h3>
                <p className="text-xs text-brand-gray-warm leading-relaxed mt-1">
                  Highly soluble sphere design, ideal for liquid fertilizer blends and fertigation.
                </p>
              </div>
              <div className="flex items-center justify-between text-[10px] text-brand-green-light font-semibold pt-2 border-t border-white/10">
                <span>Particle: 1.00 - 2.80mm</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest text-brand-gray-mid mb-2 font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-brand-green-light"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
