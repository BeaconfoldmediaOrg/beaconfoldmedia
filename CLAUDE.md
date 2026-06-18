# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Turbopack, default)
npm run build    # production build (Turbopack, default)
npm run start    # start production server
npm run lint     # run ESLint (not run automatically by next build in v16)
```

There is no test suite configured in this repo.

## Stack

- **Next.js 16.2.4** — App Router only; `app/` directory
- **React 19.2.4** with Server Components by default
- **TypeScript** strict mode; import alias `@/*` maps to the repo root
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `globals.css` and `@theme inline` blocks; no `tailwind.config.*` file
- **ESLint** flat config (`eslint.config.mjs`) using `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- **Turbopack** is the default bundler for both dev and build in v16 — no `--turbopack` flag needed
- **shadcn/ui** (`components.json`, style "new-york", baseColor "neutral") — all of `components/ui/` is generated shadcn output; prefer adding new primitives via `npx shadcn add <component>` over hand-rolling

## Next.js 16 Breaking Changes

Before writing any code, consult `node_modules/next/dist/docs/` for the authoritative API.

**Async Request APIs (fully async — no sync compat):**  
`cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` must all be awaited.

```ts
// ✅ correct
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
}
```

**`revalidateTag` requires a second `cacheLife` argument:**

```ts
revalidateTag('posts', 'max') // not revalidateTag('posts')
```

**`next build` no longer runs the linter** — run `npm run lint` separately.

**Turbopack config** moves from `experimental.turbopack` to top-level `turbopack` in `next.config.ts`. Webpack custom config will cause build failures unless you add `--webpack`.

**Sass tilde imports** (`~package`) are not supported by Turbopack; use bare specifiers instead.

## Architecture

This is the marketing site for Beaconfoldmedia, an African strategic-communications/advocacy firm. It is content-heavy and mostly composed of one-off landing-page sections rather than a generic component library.

- **`app/page.tsx`** — the live homepage. It composes section components from `components/landing/` in order; several sections are commented out in-place (e.g. `BlogsSection`, `MetricsSection`, `IntegrationsSection`, `DevelopersSection`) rather than deleted — when toggling sections on/off, follow that existing pattern instead of removing the import.
- **`app/page-2/` and `app/page-3/`** — alternate/experimental homepage layouts, not linked from navigation. Treat as drafts; don't assume they're in sync with `app/page.tsx`.
- **`app/services/[slug]/page.tsx`** — dynamic service detail route. Uses `generateStaticParams()` to pre-render one page per entry in `lib/services-data.ts`, looks up the entry via `getServiceBySlug`, and renders it through the single shared `ServicePageContent` component (`components/landing/service-page-content.tsx`). To add/edit a service, edit the data file only — there is no per-service page file.
- **`lib/services-data.ts`** — single source of truth for all service content (title, tagline, offerings, approach steps, "who we work with", and `relatedSlugs` cross-links between services). This is the place to make copy changes for the services section/pages.
- **`components/landing/`** — page-specific sections (hero variants, features, pricing, testimonials, footer, etc.). Several hero/section components have numbered duplicates (`hero-section.tsx`, `hero-section-2.tsx`, `hero-section-3.tsx`) representing design iterations; check which one is actually imported by the page you're editing before changing one.
- **`components/ui/`** — shadcn/ui primitives (Radix-based). Don't hand-edit business copy here; these are generic, reusable components.
- **`public/works/`, `public/brand/`, `public/partners/`** — static assets referenced by slug/filename from `lib/services-data.ts` and landing components (case studies, logos, brand assets).
