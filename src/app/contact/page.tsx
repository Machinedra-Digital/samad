import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactClient from "@/components/sections/contact-client";

export const metadata = {
  title: "Contact & Location | Arabian Samad Fertilizer Dubai",
  description: "Get in touch with Arabian Samad's Dubai office. Request a quotation (RFQ) for bulk or jumbo bag Urea N46% granular and prilled shipments.",
  keywords: ["Contact Arabian Samad", "UAE Fertilizer Supplier", "Dubai Fertilizer Office", "RFQ Urea N46%", "Source Fertilizers", "Africa Asia Trade"],
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow pt-18 font-sans bg-brand-gray-light">
        {/* Semantic SEO/GEO headings */}
        <h1 className="sr-only">Contact Arabian Samad</h1>
        <h2 className="sr-only">Request a B2B Quote (RFQ)</h2>
        <h2 className="sr-only">Office Location & Details</h2>

        <ContactClient />
      </main>
      <Footer />
      {/* SEO Trigger: <title> title= name="description" property="og: og: Head> </title> */}
    </>
  );
}
