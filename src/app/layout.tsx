import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arabiansamad.com"),
  title: "Arabian Samad | Fertilizer & Urea Distribution UAE",
  description: "Arabian Samad is a premier fertilizer distribution company based in UAE, targeting B2B agriculture markets in Asia and Africa with high-quality Urea N46% (Prilled and Granular).",
  keywords: ["Urea", "N46%", "Fertilizer", "Prilled", "Granular", "Prilled Urea", "Granular Urea", "Arabian Samad", "UAE Fertilizer"],
  openGraph: {
    title: "Arabian Samad | Fertilizer & Urea Distribution UAE",
    description: "Premier B2B fertilizer distribution company in UAE providing Urea N46% (Prilled & Granular).",
    type: "website",
    locale: "en_US",
    siteName: "Arabian Samad",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans antialiased bg-brand-gray-light text-brand-blue-dark">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-accent-mid focus:text-white focus:rounded-md">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
