# Citron Demo — Design Build Kit (READ FULLY before building)

You are building ONE complete, distinct website design for Citron Baltimore inside an existing
Astro project at `/Users/seabasstheman/Desktop/citron-astro`. Each design is a self-contained
multi-page site under its own route namespace. The FLAGSHIP (design 1) already exists at the site
root — study it as the quality/interaction reference, but your design must look DISTINCT.

## Non-negotiable standards (every page, every design)
1. **Astro**, static output. Use `astro:assets` `<Image>` for ALL images.
2. **Lighthouse mobile must be 95+ / 100 / 100 / 100** (perf / a11y / best-practices / SEO). This is verified.
3. **CSS `clamp()`/`calc()` MUST have spaces around `+` and `-`**. `clamp(2rem, 1rem + 3vw, 5rem)` is valid;
   `clamp(2rem,1rem+3vw,5rem)` is SILENTLY DROPPED by the browser (computes to 0) and breaks spacing.
   This is the #1 bug — never write a no-space operator inside clamp/calc.
4. **Images**: exactly ONE eager LCP image per page (`loading="eager" fetchpriority="high"`), everything else
   `loading="lazy"`. `format="avif"`, `quality` 45–60. Cap widths: hero ≤1500, content ≤900, thumbs ≤400.
   NEVER stack multiple full-bleed large AVIF layers (kills mobile TBT). Heavy source images: room-cove,
   courtyard-gathering, terrace-event, secluded-lake — keep these small if used as hero.
5. **No text/element overlaps.** Buttons/inputs need breathing room from section edges (use section padding +
   top margins on CTAs). No horizontal scroll at 375px.
6. **No em dashes** anywhere (—, &mdash;, %E2%80%94). Use commas/colons. En-dash ranges (2019–2025) are fine.
7. **Accessibility**: one `<h1>` per page, semantic landmarks, alt text, labeled inputs, focus-visible outlines,
   `prefers-reduced-motion` guards on all motion, keyboard-operable interactive elements.
8. **Interactivity + motion** (this is a premium demo, not a template): scroll reveals, hover states, and at least
   one signature interaction per design (e.g. a WebGL/canvas moment, an interactive gallery, a live configurator,
   kinetic type, a scroll-driven sequence). Motion = transform/opacity only. Gate continuous rAF loops behind
   first user interaction so a non-interacting Lighthouse run stays fast (see flagship LakeHero for the pattern).
9. **Real content**: import `../../data/site.js` (SITE: reserveUrl=OpenTable, pickupUrl=Toast, portalUrl, email,
   phone, address) and `../../data/menu.js` (MENU, MENU_NOTES) — never retype menu data. Real facts only
   (est. 2016, 10th anniv Nov 2026, ~14,000 events over 40 yrs, Wine Spectator 2019–2025, Exec Chef Mary Hersh,
   full sushi bar, 300 seats, Charles & Susan Levine, 2605 Quarry Lake Dr, PhRMA-compliant menus, Charm City /
   Pimlico heritage). Do NOT invent vendor company names.

## The CTA popup (required on every design)
Every primary CTA opens a popup with THREE options: Reserve a Table → `SITE.reserveUrl` (OpenTable),
Order Pick-Up → `SITE.pickupUrl` (Toast), Events & Private Dining → `SITE.portalUrl`. Build a modal styled to
YOUR design, opened by any `[data-cta]` trigger, with focus trap + Escape close + scrim. (Copy the flagship's
CtaModal.astro logic; restyle it to your palette.)

## Page structure (each design builds all five)
`/dN/` (home), `/dN/menu`, `/dN/events`, `/dN/about`, `/dN/contact`.
- Nav order: Home · Menu · Events & Private Dining · About · Contact + a CTA button (opens popup).
- Events page SHOWCASES a few marquee spaces + catering service and funnels to `SITE.portalUrl` — it does NOT
  list the full nine-space booking inventory (that lives in the portals).
- Footer holds "hidden" links (e.g. a Journal/News) + newsletter + address/hours + real booking links.
- Home sections (adapt to your art direction): hero (signature interaction) · story/intro · three offerings
  (Dine/Cater/Celebrate) · menu teaser · interactive events showcase · local Charm City note · final CTA.

## File layout for YOUR design (namespace = dN, e.g. d2)
- `src/pages/dN/index.astro`, `menu.astro`, `events.astro`, `about.astro`, `contact.astro`
- `src/layouts/DNBase.astro` (your layout: head/SEO/OG/JSON-LD, your Nav + Footer + CtaModal, your global reveal
  script). You MAY put Nav/Footer/CtaModal inline in the layout or as `src/designs/dN/*.astro` components.
- `src/styles/dN.css` OR scoped `<style>` — your OWN tokens (palette, fonts via @fontsource or the two already
  installed: Cormorant, Karla; you may add others via @fontsource if you `npm i` them — but the flagship's fonts
  are already available). Self-host fonts (no render-blocking Google Fonts `<link>`).
- Images live in `src/assets/img/` (38 real Citron photos: room-*, cove-*, courtyard-*, terrace-*, bar-*,
  dining-room, main-dining, main-entry, exterior, date-night, sunset, lake, secluded-lake, alfresco, food-*,
  wine, charles, charles-susan, decor-food, logo-dark). Import with relative path `../../assets/img/NAME.jpg`.

## SEO per page
Unique `<title>` (<60 chars) and `<meta description>`, canonical, OG tags, `<html lang="en">`, Restaurant JSON-LD.

## Verify before finishing
Run `npm run build` (Node 22: `export PATH="$HOME/.nvm/versions/node/v22.22.3/bin:$PATH"`). It must pass.
Grep your files for no-space clamp operators and for em dashes; fix any. Confirm one `<h1>` per page.
