import React from "react";
import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-dark text-brand-gray-warm border-t border-brand-blue-mid/40 font-sans">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-brand-green-mid p-2 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-white uppercase">
                  Arabian Samad
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-green-light font-medium -mt-1">
                  Fertilizers & Logistics
                </span>
              </div>
            </Link>
            <p className="text-sm text-brand-gray-mid leading-relaxed">
              Based in the UAE, Arabian Samad is a premier wholesale fertilizer trading and distribution partner. We connect industrial-scale chemical logistics with agricultural end-markets across Asia and Africa.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Site Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-green-light transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-brand-green-light transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products/" className="hover:text-brand-green-light transition-colors duration-200">
                  Products Catalog
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-brand-green-light transition-colors duration-200">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Trade Routes Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Target Markets & Routes
            </h3>
            <ul className="space-y-2 text-sm text-brand-gray-mid">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light"></span>
                <span>East Africa (Mombasa, Dar es Salaam)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light"></span>
                <span>West Africa (Lagos, Tema)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light"></span>
                <span>South Asia (India, Bangladesh)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light"></span>
                <span>Southeast Asia (Vietnam, Indonesia)</span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              UAE Corporate Office
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5" />
                <span className="text-brand-gray-mid">
                  Business Bay, Dubai, United Arab Emirates (UAE)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-green-light shrink-0" />
                <span className="text-brand-gray-mid">+971 4 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-green-light shrink-0" />
                <a href="mailto:info@arabiansamad.com" className="hover:text-brand-green-light transition-colors duration-200">
                  info@arabiansamad.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-brand-blue-mid/30 bg-brand-blue-dark/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-gray-mid">
          <p>
            &copy; {currentYear} Arabian Samad. All rights reserved. Registered under UAE commercial laws.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-brand-green-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-green-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
