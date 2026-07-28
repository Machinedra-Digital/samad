import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Arabian Samad Fertilizer Distribution UAE",
  description: "Review the Terms of Service for Arabian Samad. Terms governing website usage, B2B wholesale inquiries, quotes, and international trade disclaimers.",
};

export default function TermsOfServicePage() {
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
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent-light">
                Legal & Terms
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-brand-gray-warm">
              Last Updated: July 2026 | Arabian Samad (Dubai, United Arab Emirates)
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-brand-gray-warm space-y-8 text-brand-gray-dark text-sm sm:text-base leading-relaxed">
              
              {/* Intro */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using the website of Arabian Samad (<span className="font-semibold text-brand-blue-dark">arabiansamad.com</span>), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please refrain from using our website or submitting trade inquiries.
                </p>
              </div>

              {/* B2B Inquiries Disclaimer */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  2. B2B Commercial Scope & Inquiry Disclaimer
                </h2>
                <p>
                  Arabian Samad operates exclusively as a B2B wholesale trading partner specializing in industrial-scale fertilizer distribution (including Granular and Prilled Urea N46%).
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-brand-gray-dark">
                  <li>
                    <strong className="text-brand-blue-dark">Non-Binding Inquiries:</strong> All content, product catalog listings, quote inquiry forms, and estimated figures on this website are for informational purposes and do not constitute a binding legal offer or contract for sale.
                  </li>
                  <li>
                    <strong className="text-brand-blue-dark">Formal Sales Contracts:</strong> Commercial sales, pricing, vessel charter schedules, Incoterms, and payment terms (e.g., L/C, T/T) become legally binding only upon the execution of a formal, written Commercial Sale Agreement signed by authorized representatives of Arabian Samad.
                  </li>
                </ul>
              </div>

              {/* Website Intellectual Property */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  3. Intellectual Property Rights
                </h2>
                <p>
                  All content, branding, trademarks, logos, graphics, text, and technical layout on this website are the intellectual property of Arabian Samad or its licensors, protected by United Arab Emirates intellectual property laws and international treaties. You may not reproduce, distribute, or modify any content without explicit written consent.
                </p>
              </div>

              {/* User Obligations */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  4. Website Usage & Conduct
                </h2>
                <p>When interacting with our website and inquiry portals, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-1.5 text-brand-gray-dark">
                  <li>Submit false, misleading, or fraudulent trade inquiry data.</li>
                  <li>Attempt to compromise the security, infrastructure, or performance of the website.</li>
                  <li>Engage in automated scraping or unauthorized harvesting of site materials.</li>
                </ul>
              </div>

              {/* Disclaimer of Warranties & Limitation of Liability */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  5. Limitation of Liability
                </h2>
                <p>
                  While Arabian Samad endeavors to ensure that all information on this site is accurate and up to date, the website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, express or implied.
                </p>
                <p>
                  In no event shall Arabian Samad, its directors, officers, or employees be liable for any direct, indirect, incidental, or consequential damages resulting from your access to or inability to use this website.
                </p>
              </div>

              {/* Governing Law */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-brand-blue-dark border-b border-brand-gray-warm pb-2">
                  6. Governing Law & Jurisdiction
                </h2>
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any disputes arising in connection with these Terms or the use of this website shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 bg-brand-gray-light p-6 rounded-xl border border-brand-gray-warm">
                <h2 className="text-lg font-bold text-brand-blue-dark">
                  7. Corporate Inquiries & Legal Contact
                </h2>
                <p className="text-sm">
                  For questions regarding these Terms of Service or corporate legal inquiries, please contact Arabian Samad:
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
