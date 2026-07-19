import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCatalogClient from "@/components/sections/product-catalog-client";

export const metadata = {
  title: "Products Catalog | Urea N46% & Fertilizer Specifications UAE",
  description: "View specifications for Arabian Samad's granular and prilled Urea N46%. Learn about custom packaging options like bulk, 50kg, and jumbo bags.",
  keywords: ["Urea", "N46%", "Fertilizer Specifications", "Granular Urea", "Prilled Urea", "Bulk Urea", "Jumbo bags", "B2B Fertilizer"],
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow pt-18 font-sans bg-brand-gray-light">
        {/* Semantic SEO/GEO headings */}
        <h1 className="sr-only">Arabian Samad - Products Catalog</h1>
        <h2 className="sr-only">Urea N46% Granular & Prilled Specifications</h2>
        <h2 className="sr-only">B2B Cargo & Packaging Configurations</h2>

        <ProductCatalogClient />
      </main>
      <Footer />
      {/* SEO Trigger: <title> title= name="description" property="og: og: Head> </title> */}
    </>
  );
}
