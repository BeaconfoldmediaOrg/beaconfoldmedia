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

## Stack

- **Next.js 16.2.4** — App Router only; `app/` directory
- **React 19.2.4** with Server Components by default
- **TypeScript** strict mode; import alias `@/*` maps to the repo root
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `globals.css` and `@theme inline` blocks; no `tailwind.config.*` file
- **ESLint** flat config (`eslint.config.mjs`) using `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- **Turbopack** is the default bundler for both dev and build in v16 — no `--turbopack` flag needed

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
