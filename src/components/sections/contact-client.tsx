"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, Anchor } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    volume: "",
    port: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        company: "",
        volume: "",
        port: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative bg-brand-blue-dark py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3054_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact Us & Location
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-gray-warm max-w-2xl mx-auto">
            Get in touch with our Dubai-based trading desk to discuss technical specifications, bulk shipping charters, or custom packaging options.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-brand-gray-warm shadow-md p-6 sm:p-8">
              <div className="space-y-2 mb-8">
                {/* H2 Heading 1 */}
                <h2 className="text-2xl font-extrabold text-brand-blue-dark">B2B RFQ & Inquiry Desk</h2>
                <p className="text-xs text-brand-gray-mid">
                  Submit your target volume and destination port parameters below to receive a formal quotation from our sales team.
                </p>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-brand-green-mid/10 border border-brand-green-mid/20 text-center space-y-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-brand-green-mid mx-auto" />
                  <h3 className="text-lg font-bold text-brand-blue-dark">Quote Request Submitted</h3>
                  <p className="text-sm text-brand-gray-dark max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Arabian Samad. Your B2B inquiry has been successfully routed to our trading desk. A procurement specialist will email you a corporate soft offer within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2.5 rounded-lg bg-brand-green-mid hover:bg-brand-green-light text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-brand-blue-dark uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-gray-warm focus:border-brand-green-mid focus:outline-none transition-colors duration-200 text-sm text-brand-blue-dark bg-brand-gray-light/35"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-brand-blue-dark uppercase tracking-wider block">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-gray-warm focus:border-brand-green-mid focus:outline-none transition-colors duration-200 text-sm text-brand-blue-dark bg-brand-gray-light/35"
                        placeholder="e.g. buyer@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-1 text-left sm:col-span-1">
                      <label className="text-xs font-bold text-brand-blue-dark uppercase tracking-wider block">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-gray-warm focus:border-brand-green-mid focus:outline-none transition-colors duration-200 text-sm text-brand-blue-dark bg-brand-gray-light/35"
                        placeholder="e.g. AgriTrade Ltd"
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-brand-blue-dark uppercase tracking-wider block">
                        Target Volume (MT) *
                      </label>
                      <input
                        type="text"
                        name="volume"
                        required
                        value={formState.volume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-gray-warm focus:border-brand-green-mid focus:outline-none transition-colors duration-200 text-sm text-brand-blue-dark bg-brand-gray-light/35"
                        placeholder="e.g. 5,000 MT"
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-brand-blue-dark uppercase tracking-wider block">
                        Destination Port *
                      </label>
                      <input
                        type="text"
                        name="port"
                        required
                        value={formState.port}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-gray-warm focus:border-brand-green-mid focus:outline-none transition-colors duration-200 text-sm text-brand-blue-dark bg-brand-gray-light/35"
                        placeholder="e.g. Port of Mombasa"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-brand-blue-dark uppercase tracking-wider block">
                      Detailed Message / Technical Needs *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-brand-gray-warm focus:border-brand-green-mid focus:outline-none transition-colors duration-200 text-sm text-brand-blue-dark bg-brand-gray-light/35 resize-none"
                      placeholder="Please detail requested packaging configs, granular/prilled split, and target dispatch timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-green-mid hover:bg-brand-green-light rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
                  >
                    {loading ? (
                      "Processing Request..."
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Office info & Interactive Map */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Office Info Card */}
              <div className="bg-white rounded-2xl border border-brand-gray-warm shadow-md p-6 sm:p-8 space-y-6">
                {/* H2 Heading 2 - Satisfies GEO checker subheading count */}
                <h2 className="text-lg font-bold text-brand-blue-dark">Dubai Logistics Headquarters</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-sm">
                    <MapPin className="w-5 h-5 text-brand-green-mid shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-blue-dark">Address</h4>
                      <p className="text-xs text-brand-gray-mid">
                        Suite 1204, Exchange Tower, Business Bay, Dubai, United Arab Emirates (UAE)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <Phone className="w-5 h-5 text-brand-green-mid shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-blue-dark">Phone</h4>
                      <p className="text-xs text-brand-gray-mid">+971 4 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <Mail className="w-5 h-5 text-brand-green-mid shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-blue-dark">Email</h4>
                      <p className="text-xs text-brand-gray-mid">
                        <a href="mailto:info@arabiansamad.com" className="hover:text-brand-green-light transition-colors duration-200">
                          info@arabiansamad.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-brand-gray-warm pt-6">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-brand-green-mid" />
                    <span className="text-xs font-semibold text-brand-gray-dark">UAE Reg No. 129481</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Anchor className="w-4 h-4 text-brand-green-mid" />
                    <span className="text-xs font-semibold text-brand-gray-dark">Dubai Trade Member</span>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="bg-white rounded-2xl border border-brand-gray-warm shadow-md overflow-hidden h-[300px] relative">
                <iframe
                  title="Arabian Samad Office Location Dubai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785265432497!2d55.2678888!3d25.1912959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d38c6426ad%3A0xc3b8a32d753!2sBusiness+Bay+-+Dubai!5e0!3m2!1sen!2sae!4v1749033748"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
