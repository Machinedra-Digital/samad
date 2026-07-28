import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Arabian Samad Fertilizer Distribution UAE",
  description: "Read the Privacy Policy of Arabian Samad. Learn how we handle B2B trade inquiry data, cookies, and corporate security for fertilizer buyers.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="flex-grow pt-18 font-sans bg-brand-gray-light">
        {/* Banner Section */}
        <section className="relative bg-brand-blue-dark py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3054_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-semibold text-brand-accent-light hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-brand-accent-mid/20 text-brand-accent-light">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent-light">
                Legal & Compliance
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-brand-gray-warm">
              Last Updated: July 2026 | Arabian Samad (Dubai, United Arab Emirates)
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-brand-gray-warm space-y-8 text-brand-gray-dark text-sm sm:text-base leading-relaxed">
              
              {/* Intro */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  1. Introduction
                </h2>
                <p>
                  Arabian Samad (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as a wholesale fertilizer trading and maritime distribution business based in Dubai, United Arab Emirates. We are committed to protecting the privacy and security of business partners, clients, and website visitors who interact with our website (<span className="font-semibold text-brand-blue-dark">arabiansamad.com</span>).
                </p>
                <p>
                  This Privacy Policy outlines how we collect, use, store, and safeguard your commercial information when you submit trade inquiries, request price quotations for Urea N46% fertilizer cargo, or browse our site.
                </p>
              </div>

              {/* Information Collection */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  2. Information We Collect
                </h2>
                <p>
                  As a B2B agricultural commodities trading company, we primarily collect corporate and commercial inquiry information necessary to fulfill trade requests:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-brand-gray-dark">
                  <li>
                    <strong className="text-brand-blue-dark">Contact Information:</strong> Full name, corporate email address, phone/WhatsApp number, company name, and geographic location.
                  </li>
                  <li>
                    <strong className="text-brand-blue-dark">Trade Inquiry Specifications:</strong> Fertilizer specifications (e.g., Granular or Prilled Urea N46%), volume requirements (MT), port of destination, packaging preferences, and target schedule.
                  </li>
                  <li>
                    <strong className="text-brand-blue-dark">Technical & Log Data:</strong> IP address, browser type, device information, operating system, and page browsing activity collected automatically via standard analytics tools.
                  </li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  3. How We Use Your Information
                </h2>
                <p>We use the information collected exclusively for legitimate commercial purposes:</p>
                <ul className="list-disc pl-6 space-y-1.5 text-brand-gray-dark">
                  <li>Processing, evaluating, and responding to wholesale trade quote requests.</li>
                  <li>Coordinating vessel chartering, freight logistics, and custom packing options with verified logistics partners.</li>
                  <li>Communicating trade updates, technical specifications, and official commercial documentation.</li>
                  <li>Maintaining site security, performance, and legal compliance under United Arab Emirates commercial laws.</li>
                </ul>
              </div>

              {/* Data Sharing & Disclosure */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  4. Information Sharing & Third-Party Vendors
                </h2>
                <p>
                  We do not sell, rent, or trade your personal or commercial contact information to third parties. We may share necessary details only under the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-brand-gray-dark">
                  <li>
                    <strong className="text-brand-blue-dark">Logistics & Shipping Partners:</strong> Port handlers, maritime freight carriers, and quality inspection bodies required to execute verified supply orders.
                  </li>
                  <li>
                    <strong className="text-brand-blue-dark">Legal Compliance:</strong> When required by applicable UAE laws, regulations, or legal processes to satisfy statutory obligations.
                  </li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  5. Cookies & Tracking Technologies
                </h2>
                <p>
                  Our website uses basic essential cookies and standard web analytics to ensure proper functionality and assess overall site traffic performance. You may disable cookies through your browser settings, though certain interactive elements may be affected.
                </p>
              </div>

              {/* Security */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  6. Data Security & Retention
                </h2>
                <p>
                  We implement standard administrative and technical safeguards to protect your communications and commercial inquiry details against unauthorized access, loss, or disclosure. Commercial records are retained only for as long as necessary to fulfill trade inquiries and maintain regulatory records.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 bg-brand-gray-light p-6 rounded-xl border border-brand-gray-warm">
                <h2 className="text-lg font-bold text-brand-blue-dark">
                  7. Contact Us Regarding Privacy
                </h2>
                <p className="text-sm">
                  If you have questions about this Privacy Policy or wish to update your business inquiry contact information, please reach out to our corporate office:
                </p>
                <div className="text-sm text-brand-gray-dark space-y-1 pt-2">
                  <p className="font-semibold text-brand-blue-dark">Arabian Samad</p>
                  <p>
                    OFFICE NO. 1114, <br />
                    ADEL MOHAMED ALI JASIM <br />
                    AL MARZOUQ BUILDING, <br />
                    AL QUOZ 1, DUBAI, <br />
                    UNITED ARAB EMIRATES
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@arabiansamad.com" className="text-brand-accent-mid hover:underline font-medium">
                      info@arabiansamad.com
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
