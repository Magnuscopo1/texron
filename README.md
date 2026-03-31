
# Texron Power Plant Systems Website

Frontend source for the Texron Power Plant Systems marketing, technical catalog, and lead-intake website.

This repository is intentionally built as a static-first React SPA with no backend runtime. It prioritizes fast page delivery, rich product/service presentation, and direct engineering contact flows.

In practical terms, this site is the digital front door for a principal-led industrial engineering company serving thermal and hydro power plants. It is designed to support both emergency troubleshooting situations and planned retrofit/procurement decision cycles.

## Table of Contents

- [1. What This Project Is and Context](#1-what-this-project-is-and-context)
- [2. Technology Stack (Deep)](#2-technology-stack-deep)
- [3. System Runtime and How It Works](#3-system-runtime-and-how-it-works)
- [4. Routing Architecture and Page Mechanics](#4-routing-architecture-and-page-mechanics)
- [5. Project Structure and Responsibilities](#5-project-structure-and-responsibilities)
- [6. Reusable UI Building Blocks](#6-reusable-ui-building-blocks)
- [7. Content and Data Model (Code-as-Content)](#7-content-and-data-model-code-as-content)
- [8. Interaction Flows (What Happens on User Actions)](#8-interaction-flows-what-happens-on-user-actions)
- [9. Styling, Theme, and Motion Architecture](#9-styling-theme-and-motion-architecture)
- [10. Dependency Landscape (Active vs Scaffolded)](#10-dependency-landscape-active-vs-scaffolded)
- [11. Local Development Workflow](#11-local-development-workflow)
- [12. Build, Deploy, and Hosting Internals](#12-build-deploy-and-hosting-internals)
- [13. Operational Constraints and Known Gaps](#13-operational-constraints-and-known-gaps)
- [14. Engineering Improvement Backlog](#14-engineering-improvement-backlog)
- [15. Attributions](#15-attributions)

## 1. What This Project Is and Context

### 1.1 What this product is

This is a B2B industrial website for Texron Power Plant Systems. It is not an e-commerce product and not a web application with authenticated user workflows. It is a technical discovery and lead-intake platform that helps power-plant stakeholders:

- Understand what Texron can supply and service.
- Verify fitment and compatibility quickly.
- Reach engineering contacts directly for urgent and planned needs.

### 1.2 Business context

Texron operates in a high-consequence engineering domain where delays can translate into generation losses. The site is therefore built around two business realities:

- Emergency reality: active plant trips and critical failures need immediate human contact.
- Planned reality: retrofits, RLA studies, and spares procurement need trust-building technical detail.

Because of this, the information architecture combines direct-response CTAs (phone/WhatsApp) with deep reference content (specs, compatibility matrices, methodology pages, case studies).

### 1.3 User context (primary audiences)

The main user groups are:

- Plant O&M and maintenance engineers diagnosing equipment issues.
- C&I/electrical/mechanical engineers validating technical compatibility.
- Procurement and contracts teams comparing retrofit/spares options.
- Plant managers and leadership evaluating project risk, timeline, and vendor credibility.

### 1.4 Product context (what it is not)

Current scope intentionally excludes:

- User accounts and role-based portals.
- Server-side business logic and APIs.
- Transaction processing, ordering, and payment flows.
- Real CMS content editing pipelines.

This keeps the platform lightweight, fast to deploy, and easy to maintain while still delivering high-value technical presentation and conversion paths.

### 1.5 Primary goals

- Showcase Texron products and services for thermal/hydro/cogen power stakeholders.
- Support technical pre-sales through specs, compatibility matrices, and case studies.
- Capture planned inquiries and route emergency interactions quickly to direct phone/WhatsApp channels.
- Improve discoverability with long-tail SEO pages targeting specific industrial problem statements.

### 1.6 Current implementation approach

- Client-side only SPA.
- All business content represented as in-code arrays/objects.
- Static deploy output from Vite.

## 2. Technology Stack (Deep)

### 2.1 Core Runtime

| Technology | Version | Why it is used | Where it is central |
| --- | --- | --- | --- |
| React | 18.3.1 | Component architecture + hooks-based UI logic | All pages/components |
| TypeScript | TSX source | Type-safe interfaces for structured content models | Product/spec/customer/services data objects |
| React Router | 7.13.0 | Client-side route tree with nested layout shell | `src/app/routes.ts`, `src/app/App.tsx` |
| Vite | 6.3.5 | Fast dev server and static production bundling | `vite.config.ts`, npm scripts |

### 2.2 Styling and Design

| Technology | Role |
| --- | --- |
| Tailwind CSS v4 + `@tailwindcss/vite` | Utility-first styling with compile-time class extraction |
| CSS variable theme tokens | Brand color, typography, and semantic token control |
| Google font imports | Rajdhani, Inter, Roboto Mono typography system |
| Lucide React | Consistent icon system across CTAs, nav, and status UI |

### 2.3 Motion and UX Behavior

| Technology | Role |
| --- | --- |
| `motion` (`motion/react`) | Section reveal transitions, modal animations, floating CTA behavior |
| `AnimatePresence` | Entry/exit animations for conditional components (modals, FAQ panels, floating cards) |

### 2.4 UI Primitives and Scaffolding

The repository includes a full Radix/shadcn wrapper library under `src/app/components/ui/`. This provides extensibility for future feature growth even though many current pages are custom-built directly.

## 3. System Runtime and How It Works

### 3.1 Boot Sequence

The app startup pipeline is:

1. Browser loads `index.html`.
2. `index.html` loads `/src/main.tsx` as module script.
3. `src/main.tsx` calls `createRoot(...).render(<App />)`.
4. `src/app/App.tsx` renders `<RouterProvider router={router} />`.
5. Router resolves route in `src/app/routes.ts`.
6. Root layout `src/app/pages/Layout.tsx` renders global shell + current page via `<Outlet />`.

### 3.2 Persistent Layout Shell

`Layout.tsx` keeps these persistent across route transitions:

- Header navigation
- Footer
- Floating emergency widget
- Mobile sticky action bar
- Back-to-top utility

Result:

- Navigation and emergency access are always available.
- Only page body content swaps on route change.

### 3.3 Render Model

- Entire site is client-rendered.
- No server-side rendering.
- No streaming HTML.
- No API-driven hydration.

## 4. Routing Architecture and Page Mechanics

Route map source: `src/app/routes.ts`

| Route | Page Component | Core behavior |
| --- | --- | --- |
| `/` | `HomePage` | Landing narrative with trust bars, offerings, testimonials, SLA block |
| `/about` | `AboutPage` | Principal profile + facility story + timeline |
| `/products` | `ProductsIndexPage` | 13-item catalog grouped into categories |
| `/products/:slug` | `ProductDetailPage` | Dynamic slug lookup against in-file map, compatibility/details rendering |
| `/services` | `ServicesPage` | Service cards + methodology timelines |
| `/capabilities` | `CapabilitiesPage` | Facility area gallery + equipment stack |
| `/customers` | `CustomersPage` | Filterable customer grid + modal details |
| `/specs` | `SpecsPage` | Searchable docs table + compatibility matrix |
| `/contact` | `ContactPage` | Principal contact cards + inquiry form UI |
| `/expertise` | `ServicesPage` | Backward-compatible alias route |
| `/bhel-steam-turbine-governor-retrofits` | `BhelRetrofitsPage` | SEO topic page with model matrix + FAQ |
| `/voith-hydraulic-troubleshooting-spares` | `VoithHydraulicPage` | SEO topic page with troubleshooting and spares data |
| `/rla-studies-thermal-power-plants-bangalore` | `RlaStudiesPage` | SEO topic page for RLA scope and deliverables |
| `/admin` | `AdminPage` | UI-only mock dashboard (checklists, PDF tracker) |

Important route notes:

- `src/app/pages/ExpertisePage.tsx` exists but is not currently wired as the live `/expertise` route.
- Product detail page uses slug-to-record resolution with fallback content if slug is missing in map.

## 5. Project Structure and Responsibilities

```text
.
|- index.html
|- package.json
|- vite.config.ts
|- postcss.config.mjs
|- src/
|  |- main.tsx                    # React mount entry
|  |- app/
|  |  |- App.tsx                  # RouterProvider bridge
|  |  |- routes.ts                # Route table
|  |  |- pages/                   # Route-level feature pages
|  |  |- components/              # Reusable content and shell blocks
|  |  |  |- ui/                   # Radix/shadcn primitive wrappers
|  |- styles/
|     |- index.css                # Style import chain
|     |- tailwind.css             # Tailwind v4 source directives
|     |- theme.css                # Design tokens + base layer
|     |- fonts.css                # Google fonts import
|- .netlify/
|  |- netlify.toml                # Netlify build config
|- ATTRIBUTIONS.md
```

## 6. Reusable UI Building Blocks

### 6.1 Shell and Navigation

- `src/app/components/Header.tsx`
- `src/app/components/Footer.tsx`
- `src/app/components/Breadcrumb.tsx`
- `src/app/components/FloatingEmergency.tsx`
- `src/app/components/MobileStickyBar.tsx`
- `src/app/components/BackToTop.tsx`

### 6.2 Content Modules

- `src/app/components/TieredSLA.tsx`
- `src/app/components/QuickSpecAccess.tsx`
- `src/app/components/CaseStudyTemplate.tsx`
- `src/app/components/ClientLogos.tsx`
- `src/app/components/Testimonials.tsx`
- `src/app/components/FAQ.tsx`
- `src/app/components/SpecSheetTable.tsx`
- `src/app/components/CompatibilityMatrix.tsx`
- `src/app/components/ExperienceTimeline.tsx`
- `src/app/components/PageTimestamp.tsx`
- `src/app/components/PhotoPlaceholder.tsx`

### 6.3 Common Pattern

Most reusable sections follow this pattern:

- Data array local to component.
- Lightweight state with `useState`.
- Optional reveal animation with `motion`.
- Tailwind-first styling with semantic token values.

## 7. Content and Data Model (Code-as-Content)

There is no central CMS/API data layer. Content lives directly in TypeScript constants.

### 7.1 Key Data Owners

- Product summary cards: `src/app/pages/ProductsIndexPage.tsx`
- Product detailed records (slug map): `src/app/pages/ProductDetailPage.tsx`
- Service definitions and timelines: `src/app/pages/ServicesPage.tsx`
- Spec-sheet searchable rows: `src/app/components/SpecSheetTable.tsx`
- Compatibility matrix rows: `src/app/components/CompatibilityMatrix.tsx`
- Customer records and sector taxonomy: `src/app/pages/CustomersPage.tsx`
- Case studies: `src/app/components/CaseStudyTemplate.tsx`
- Testimonials: `src/app/components/Testimonials.tsx`
- FAQ datasets by SEO page: `BhelRetrofitsPage.tsx`, `VoithHydraulicPage.tsx`, `RlaStudiesPage.tsx`
- Mock admin audit/pdf tracker: `src/app/pages/AdminPage.tsx`

### 7.2 Data-Model Characteristics

- Strongly typed interfaces in several content modules.
- Slug-driven lookup for product detail rendering.
- Repeated contact and document metadata across multiple files.
- Manual synchronization required when business data changes.

### 7.3 Practical Impact

- Fast build-time simplicity.
- High control over copy and layout.
- Higher maintenance overhead for frequent content updates.

## 8. Interaction Flows (What Happens on User Actions)

### 8.1 Product Discovery Flow

1. User opens `/products`.
2. Category cards render from `productCategories` arrays.
3. User opens `/products/:slug`.
4. Page resolves slug from in-memory `products` record map.
5. Compatibility/spec/docs sections render conditionally based on available fields.

### 8.2 Emergency Access Flow

1. Persistent emergency CTAs are visible in header, floating widget, and mobile bar.
2. Tapping call opens `tel:` target.
3. Tapping WhatsApp opens pre-filled `wa.me` target.
4. No middleware step, no auth gate, no backend dependency.

### 8.3 Inquiry Form Flow (Current)

1. User fills form in Contact or Tiered SLA.
2. Submit handler calls `preventDefault()`.
3. Component state toggles to success visual.
4. No request is sent to backend/API.

### 8.4 Customers Modal Flow

1. User filters by sector (state-based filter).
2. User clicks customer tile.
3. Selected client object is stored in state.
4. Animated modal renders with details.

### 8.5 Specs Search Flow

1. User enters query and/or selects category.
2. Table rows are filtered in-memory.
3. Rendered row list updates instantly.

## 9. Styling, Theme, and Motion Architecture

### 9.1 CSS Import Chain

`src/styles/index.css` imports:

1. `fonts.css`
2. `tailwind.css`
3. `theme.css`

### 9.2 Tailwind v4 Wiring

- `src/styles/tailwind.css` declares:
  - `@import 'tailwindcss' source(none);`
  - `@source '../**/*.{js,ts,jsx,tsx}';`
- Vite plugin (`@tailwindcss/vite`) handles integration.

### 9.3 Theme Tokens

`src/styles/theme.css` defines:

- Brand palette (`--primary`, `--accent`, etc.)
- Semantic tokens (`--background`, `--foreground`, etc.)
- Typography variables (`--font-sans`, `--font-heading`, `--font-mono`)
- Base layer defaults for body/headings/forms

### 9.4 Motion Strategy

The animation model is intentionally restrained:

- Section reveal for scanability
- Modal and panel transitions for context continuity
- Floating emergency CTA pulse for urgency affordance

## 10. Dependency Landscape (Active vs Scaffolded)

### 10.1 Actively used in route experience

- `react`, `react-dom`
- `react-router`
- `motion`
- `lucide-react`
- `tailwindcss`, `@tailwindcss/vite`

### 10.2 Present as scaffolding/extension base

Many UI-oriented packages are available through `src/app/components/ui/` wrappers (Radix ecosystem and related utilities), but are not deeply consumed in current route pages.

This is useful for:

- Faster future feature buildout without adding new dependencies.
- Consistent UI primitive base when moving from static content to richer app flows.

## 11. Local Development Workflow

### 11.1 Prerequisites

- Node.js 18+
- npm 9+

### 11.2 Install and run

```bash
npm install
npm run dev
```

Vite dev server defaults to `http://localhost:5173`.

### 11.3 Production build and preview

```bash
npm run build
npx vite preview
```

Build artifacts are generated in `dist/`.

## 12. Build, Deploy, and Hosting Internals

### 12.1 Vite Configuration

`vite.config.ts` includes:

- React plugin
- Tailwind plugin
- Alias `@` to `src`
- Raw assets include for `svg` and `csv`

### 12.2 Netlify Configuration

- Config file: `.netlify/netlify.toml`
- Build command: `npm run build`
- Publish path currently points to an absolute machine path

Important:

- Convert publish path to a repository-relative value (`dist`) for portable CI/deploy behavior.

### 12.3 SPA Deep-Link Behavior

Because routing uses `createBrowserRouter`, hosting should rewrite unknown paths to `index.html`.

Without rewrite fallback, direct navigation to deep routes can 404 at the host edge.

## 13. Operational Constraints and Known Gaps

1. No backend/API integration.
2. Inquiry forms are visual-only submissions.
3. Download buttons are primarily UI placeholders.
4. `/admin` is public, mock, and non-persistent.
5. Significant business content duplication across files.
6. Image strategy still includes placeholder directives and stock fallback images.
7. Test/lint scripts are not currently defined in `package.json`.

## 14. Engineering Improvement Backlog

Priority recommendations:

1. Introduce a single-source content module (or headless CMS) for products/services/specs.
2. Implement real inquiry submission pipeline (email/webhook/CRM).
3. Centralize contact constants and document metadata.
4. Add linting, formatting, and CI validation scripts.
5. Add auth if `/admin` is to become operational.
6. Replace placeholder imagery with approved production assets.
7. Add route-level SEO metadata management and sitemap automation.

## 15. Attributions

See `ATTRIBUTIONS.md` for third-party licenses and media attribution.
  