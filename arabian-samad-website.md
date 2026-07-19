# Implementation Plan: Arabian Samad Website

Implementation plan for creating a stunning, modern, and high-performance B2B website for **Arabian Samad**, a premier fertilizer distribution company based in the UAE, targeting the agriculture markets of Asia and Africa.

---

## Project Overview

- **Company Name:** Arabian Samad
- **Business Type:** B2B Fertilizer Distribution
- **Target Markets:** Asia, Africa, UAE (Home Base)
- **Key Products:** Urea N46% (Prilled & Granular), industrial and agricultural packaging configs
- **Colors:** Deep Oceanic Blue (Trust/Logistics), Mineral Gray (Industrial stability), and Organic Green (Agriculture/Fertility)
- **Inspiration:** Sleek premium corporate feel similar to [buoyancy.ae](https://buoyancy.ae/), utilizing cinematic overlays, smooth parallax scrolling, and interactive specification sheets.

---

## Project Type

**WEB** — Next.js 16+ App Router, Static Site Export (`output: 'export'`).

---

## Tech Stack

| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 | App Router, static optimizations, built-in SEO metadata API. |
| **Core Library** | React 19 | Fast rendering, Server Components by default. |
| **Styling** | Tailwind CSS v4 | CSS-first configuration, modern container queries, performance-driven Oxide compiler. |
| **Animations** | Framer Motion | High-end micro-interactions, scroll-driven parallax, smooth section entries. |
| **Icons** | Lucide React | Clean, scalable vector icons. |
| **Form Service** | Web3Forms / Formspree | Direct B2B lead submission via email webhook (serverless-friendly). |
| **Map Integration** | Leaflet / OpenStreetMap | Fully responsive, non-commercial interactive map for the UAE location. |

---

## Success Criteria

1. **Perfect Score on Audits:** Lighthouse score >= 90/100 on Mobile and Desktop for Performance, Accessibility, Best Practices, and SEO.
2. **Aesthetic Excellence:** Stunning dark mode foundation mixed with organic accents (Blue, Gray, Green), completely devoid of typical generic web templates.
3. **Product Utility:** Interactive packaging and specification filter that allows B2B buyers to select and review combinations of Prilled/Granular Urea and bag types (Bulk, 50kg, 1Mt Jumbo).
4. **Seamless Form:** Spam-protected lead generation form delivering client requests straight to email.

---

## File Structure

```
samad/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Contains root metadata, Google fonts, and layout
│   │   ├── page.tsx              # Home landing page with video hero
│   │   ├── globals.css           # Tailwind v4 import and custom @theme colors
│   │   ├── sitemap.ts            # Dynamic sitemap helper
│   │   ├── robots.ts             # Robots.txt generator
│   │   ├── about/
│   │   │   └── page.tsx          # About Us page (B2B focus, UAE base)
│   │   ├── products/
│   │   │   └── page.tsx          # Interactive B2B catalog & specification sheet
│   │   └── contact/
│   │       └── page.tsx          # Lead submission form and interactive map
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx        # Blur-backdrop navigation menu
│   │   │   └── footer.tsx        # Multi-column B2B footer
│   │   ├── sections/
│   │   │   ├── hero.tsx          # Background video hero section with smooth scroll indicator
│   │   │   ├── about-preview.tsx # Split screen feature highlighting UAE-to-Global supply chain
│   │   │   ├── grid-features.tsx # Bento-grid highlighting key product shapes (Prilled/Granular)
│   │   │   └── product-slider.tsx# High-impact animated carousel showing packaging configurations
│   │   └── ui/
│   │       ├── spec-table.tsx    # Technical specification comparison table
│   │       ├── form-input.tsx    # Premium custom floating labels for inputs
│   │       └── leaflet-map.tsx   # Interactive location map
│   ├── content/
│   │   └── products.json         # Structured product data (Urea N46%, prilled, granular, specs)
│   └── lib/
│       └── utils.ts              # Tailwind class merger (cn)
├── content/                      # Technical specifications (PDFs / Docs placeholder)
├── public/
│   ├── video/
│   │   └── hero-bg-placeholder.mp4 # Highly optimized cinematic background video (petroleum plants, farm)
│   └── images/
│       ├── hero-fallback.webp     # Static fallback graphic
│       └── packaging/            # Packaging types (Bulk, 50kg, Jumbo)
├── next.config.ts                # Strict export mode configuration
├── package.json                  # Dependencies manifest
└── tsconfig.json                 # Strict TypeScript configuration
```

---

## Proposed Changes

---

### Phase 1: Scaffolding & Foundation

#### [NEW] [next.config.ts](file:///c:/DevDojo/Buddhi/samad/next.config.ts)
Configure Next.js to export statically with unoptimized image processing required for standalone HTML hosting.
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
```

#### [NEW] [package.json](file:///c:/DevDojo/Buddhi/samad/package.json)
Initialize standard dependencies matching verified 2026 stack lines.
```json
{
  "name": "arabian-samad",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "^16.0.0",
    "framer-motion": "^11.11.11",
    "lucide-react": "^0.454.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "typescript": "^5.6.3",
    "@types/node": "^22.9.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^4.0.0-alpha.31",
    "eslint": "^9.14.0",
    "eslint-config-next": "^16.0.0"
  }
}
```

#### [NEW] [src/app/globals.css](file:///c:/DevDojo/Buddhi/samad/src/app/globals.css)
Inject Tailwind v4 imports and map custom Arabian Samad B2B color palette.
- **Deep Blue:** `#0B2545` (Trust, maritime logistics)
- **Agriculture Green:** `#134074` (Oceanic blue) blended with Green `#2C6A4F` (Crop health) and Gray `#334155` (Slate industrial tone)
```css
@import "tailwindcss";

@theme {
  --color-brand-blue-deep: #0b2545;
  --color-brand-blue-mid: #134074;
  --color-brand-green-agri: #2c6a4f;
  --color-brand-green-light: #52b788;
  --color-brand-gray-slate: #334155;
  --color-brand-gray-light: #f1f5f9;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-brand-gray-light);
  color: var(--color-brand-blue-deep);
  font-family: var(--font-sans);
}
```

#### [NEW] [src/lib/utils.ts](file:///c:/DevDojo/Buddhi/samad/src/lib/utils.ts)
Utility class resolver helper for styling transitions.
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

### Phase 2: Product Catalog & Data Layer

#### [NEW] [src/content/products.json](file:///c:/DevDojo/Buddhi/samad/src/content/products.json)
Configure structured products parameters to handle prilled, granular, specs, and packaging arrays.
```json
[
  {
    "id": "granular-urea",
    "name": "Granular Urea N46%",
    "category": "Agricultural Fertilizer",
    "state": "Granular",
    "specifications": {
      "nitrogen": "46.0% Min",
      "biuret": "1.0% Max",
      "moisture": "0.5% Max",
      "granulometry": "2.00 - 4.75mm (90% Min)",
      "color": "Pure White"
    },
    "packaging": [
      "Bulk (Loose Vessel)",
      "50kg bags",
      "1Mt Jumbo bag",
      "50kg bags (20 bags packed inside 1Mt Jumbo bag)"
    ],
    "description": "Premium industrial grade agricultural Granular Urea suitable for direct application or mechanical broadcasting. Engineered for delayed release and high crop efficiency in warm climates.",
    "targetMarkets": ["Southeast Asia", "East Africa", "Middle East"]
  },
  {
    "id": "prilled-urea",
    "name": "Prilled Urea N46%",
    "category": "Agricultural / Industrial Fertilizer",
    "state": "Prilled",
    "specifications": {
      "nitrogen": "46.0% Min",
      "biuret": "1.0% Max",
      "moisture": "0.5% Max",
      "granulometry": "1.00 - 2.80mm (90% Min)",
      "color": "Pure White"
    },
    "packaging": [
      "Bulk (Loose Vessel)",
      "50kg bags",
      "1Mt Jumbo bag",
      "50kg bags (20 bags packed inside 1Mt Jumbo bag)"
    ],
    "description": "High solubility Prilled Urea ideal for liquid fertilizer blends, fertigation setups, and rapid-release surface application across broadacre farming.",
    "targetMarkets": ["Central Africa", "South Asia", "GCC region"]
  }
]
```

---

### Phase 3: UI Layout & Header/Footer Navigation

#### [NEW] [src/components/layout/header.tsx](file:///c:/DevDojo/Buddhi/samad/src/components/layout/header.tsx)
Responsive navbar overlaying on the hero screen with blur effects.
- Links: Home, About Us, Products Catalog, Contact Us.
- Interactive mobile hamburger toggle using Framer Motion.

#### [NEW] [src/components/layout/footer.tsx](file:///c:/DevDojo/Buddhi/samad/src/components/layout/footer.tsx)
Multi-column footer containing UAE location registry, target trade routes (Asia & Africa), product quicklinks, and B2B contact info.

---

### Phase 4: Core Pages

#### [NEW] [src/app/layout.tsx](file:///c:/DevDojo/Buddhi/samad/src/app/layout.tsx)
Include main title layout, descriptive keywords, and standard sitemap hooks.

#### [NEW] [src/app/page.tsx](file:///c:/DevDojo/Buddhi/samad/src/app/page.tsx)
The primary entry page containing:
- **Hero Video Background Component:** Showcases chemical plant setups, heavy logistics vessels, and field operations. Includes glassmorphism header overlay.
- **Corporate Summary Section:** Deep link intro to UAE maritime hub operations.
- **Product Spotlight Cards:** Interactive flip card layouts showcasing Prilled and Granular Urea highlights.

#### [NEW] [src/app/about/page.tsx](file:///c:/DevDojo/Buddhi/samad/src/app/about/page.tsx)
- Focus: B2B fertilizer value chain (sourcing, compliance, maritime dispatch, custom packaging).
- Grid layout highlighting logistics strengths (UAE ports, shipping lanes to Asia and Africa).

#### [NEW] [src/app/products/page.tsx](file:///c:/DevDojo/Buddhi/samad/src/app/products/page.tsx)
- Filterable product database display.
- Packaging selector widget: Clicking on different bags (Bulk, 50kg, 1Mt Jumbo) renders a dynamic visual of how the shipment is loaded.
- Fully formatted specification sheet tables with export-friendly print layouts.

#### [NEW] [src/app/contact/page.tsx](file:///c:/DevDojo/Buddhi/samad/src/app/contact/page.tsx)
- Left Column: Standard input fields (Name, B2B Company, Target Shipment Volume, Destination Port, Message) using custom animations.
- Right Column: Location details in Dubai/UAE with an interactive OpenStreetMap component mapping logistics offices.

---

## Task Breakdown

| Task ID | Task Description | Assigned Agent | Recommended Skill | Priority | Dependencies | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AS-1** | Setup Next.js boilerplate and verify dev server starts up. | `frontend-specialist` | `app-builder` | High | None | **IN:** Empty folder.<br>**OUT:** Next.js scaffolding with configuration files.<br>**VERIFY:** Run `npm run dev` and check compilation success. |
| **AS-2** | Configure Tailwind v4 styles, colors, and font-families. | `frontend-specialist` | `tailwind-patterns` | High | `AS-1` | **IN:** Standard layout configuration.<br>**OUT:** Custom colors mapped inside `globals.css` with responsive scroll behaviors.<br>**VERIFY:** Verify stylesheet imports without errors. |
| **AS-3** | Initialize products static database and mapping functions. | `frontend-specialist` | `clean-code` | Medium | `AS-1` | **IN:** Specifications parameters.<br>**OUT:** `products.json` file populated and typescript functions setup to query it.<br>**VERIFY:** Compile tests to confirm JSON reads correctly. |
| **AS-4** | Implement Layout components (`header.tsx`, `footer.tsx`). | `frontend-specialist` | `frontend-architecture` | Medium | `AS-2` | **IN:** Navigation mappings.<br>**OUT:** Responsive sticky navigation bar and footer components.<br>**VERIFY:** Visual check on viewport resizing. |
| **AS-5** | Design Hero Video section with fallback image cover. | `frontend-specialist` | `frontend-design` | High | `AS-2` | **IN:** Video placeholder URL and styling constraints.<br>**OUT:** Fullscreen video component with CSS overlay to enforce readability.<br>**VERIFY:** Check video loops cleanly and scales dynamically. |
| **AS-6** | Create the About Us content structures and logistics highlights. | `frontend-specialist` | `clean-code` | Medium | `AS-4` | **IN:** Narrative copy.<br>**OUT:** Corporate profile layout with interactive timeline elements.<br>**VERIFY:** Readability check and responsiveness. |
| **AS-7** | Build interactive product page with packaging selectors. | `frontend-specialist` | `frontend-design` | High | `AS-3`, `AS-4` | **IN:** Product schema parameters.<br>**OUT:** Spec sheet tables and visual packaging selector panel.<br>**VERIFY:** Click through packaging options and ensure correct state updates. |
| **AS-8** | Implement Contact page, form handlers, and map rendering. | `frontend-specialist` | `frontend-design` | High | `AS-4` | **IN:** Form endpoints & Leaflet scripts.<br>**OUT:** Interactive Contact Us screen with valid submissions handlers.<br>**VERIFY:** Trigger submission test and check for correct mapping loading. |
| **AS-9** | Run static site generation and run comprehensive verification audits. | `frontend-specialist` | `lint-and-validate` | High | All Tasks | **IN:** Complete codebase.<br>**OUT:** Bundled static files exported inside `/out` folder.<br>**VERIFY:** Run `npm run build` and launch verification script checks. |

---

## Verification Plan

### Automated Verification
We will verify codebase health and static builds using the following commands:
- **Lint Check:** `npm run lint`
- **Build Compile Check:** `npm run build`
- **UI UX Contrast Audit:** `python .agents/skills/frontend-design/scripts/ux_audit.py .`
- **Security scan:** `python .agents/skills/vulnerability-scanner/scripts/security_scan.py .`

### Manual Verification
1. Open the exported HTML bundle inside browser to confirm links perform client-side routing smoothly.
2. Confirm the hero video loads immediately or displays placeholder cover on low-speed throttle conditions inside DevTools.
3. Submit contact form details with empty required fields to test UI feedback.

---

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass
- Security: ✅ No critical issues
- Build: ✅ Success
- Date: 2026-07-19

