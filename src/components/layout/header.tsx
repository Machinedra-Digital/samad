"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about/" },
  { name: "Products Catalog", href: "/products/" },
  { name: "Contact & Location", href: "/contact/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-blue-dark/90 backdrop-blur-md border-b border-brand-blue-mid/40 shadow-lg py-3"
            : pathname === "/"
            ? "bg-transparent py-5"
            : "bg-brand-blue-dark border-b border-brand-blue-mid/40 shadow-lg py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-brand-green-mid/10 text-brand-green-light border border-brand-green-light/25 p-2 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-brand-green-mid group-hover:text-white shadow-sm">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider text-white uppercase font-heading">
                  Arabian Samad
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-green-light font-semibold -mt-1">
                  Fertilizers & Logistics
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 font-heading ${
                      isActive ? "text-brand-green-light" : "text-brand-gray-warm hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBorder"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green-light rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center pl-5 pr-2.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-brand-green-mid hover:bg-brand-green-light rounded-full shadow-md hover:shadow-brand-green-mid/20 transition-all duration-300 group gap-3"
              >
                Contact Us
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-brand-green-mid transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-blue-dark group-hover:text-white">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-brand-gray-warm hover:text-white hover:bg-brand-blue-mid/40 focus:outline-none transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-brand-blue-dark/95 backdrop-blur-lg border-t border-brand-blue-mid/30 md:hidden flex flex-col justify-between p-6"
          >
            <div className="space-y-6 py-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-lg font-semibold tracking-wide py-2 border-b border-brand-blue-mid/30 ${
                      isActive ? "text-brand-green-light" : "text-brand-gray-warm"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="pb-12">
              <Link
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-4 text-sm font-bold uppercase tracking-wider text-white bg-brand-green-mid hover:bg-brand-green-light rounded-full transition-colors duration-300 group gap-3"
              >
                Contact Us
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-green-mid transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
