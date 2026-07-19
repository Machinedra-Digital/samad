"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Shield, Globe, Award, ChevronDown } from "lucide-react";
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
          {/* Using a high-quality free stock video from Pexels CDN showing maritime port & oil refineries/vessels */}
          <source
            src="https://player.vimeo.com/external/435649354.sd.mp4?s=d046c4f03a6c25374ed2e8b61c47df554a9d701f&profile_id=165&oauth2_token_id=57447761"
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-20 text-center flex flex-col items-center">
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-blue-mid/60 backdrop-blur-md border border-brand-blue-light/30 shadow-md mb-6"
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
        <motion.div
          role="heading"
          aria-level={1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight sm:leading-none"
        >
          Empowering Global Agriculture with High-Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-light to-brand-green-mid">
            Urea N46%
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-brand-gray-warm max-w-2xl leading-relaxed"
        >
          Arabian Samad is a premier fertilizer trading and logistics partner based in the UAE. We distribute prilled and granular Urea N46% in custom packaging configurations to support robust food production systems globally.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/contact/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-brand-green-mid hover:bg-brand-green-light rounded-xl shadow-lg hover:shadow-brand-green-mid/20 transition-all duration-300 group"
          >
            Get a B2B Quote
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/products/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-brand-blue-mid/45 hover:bg-brand-blue-mid/70 border border-brand-blue-light/40 rounded-xl transition-all duration-300"
          >
            View Specifications
          </Link>
        </motion.div>

        {/* Features badges bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full border-t border-brand-blue-mid/30 pt-10"
        >
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2 bg-brand-blue-mid/40 rounded-lg text-brand-green-light border border-brand-blue-light/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Prilled & Granular</h4>
              <p className="text-xs text-brand-gray-mid">Dual-grade N46% supplies</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2 bg-brand-blue-mid/40 rounded-lg text-brand-green-light border border-brand-blue-light/20">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Custom Packaging</h4>
              <p className="text-xs text-brand-gray-mid">Bulk, 50Kg, 1Mt Jumbo configurations</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-left col-span-2 md:col-span-1 justify-center md:justify-start">
            <div className="p-2 bg-brand-blue-mid/40 rounded-lg text-brand-green-light border border-brand-blue-light/20">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Logistical Hub</h4>
              <p className="text-xs text-brand-gray-mid">Direct shipping from UAE ports</p>
            </div>
          </div>
        </motion.div>
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
