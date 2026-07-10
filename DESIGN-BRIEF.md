# Citron Baltimore Demo - Master Design Brief

## Aesthetic Direction
"Waterfront elegance with a citrus edge." Refined charcoal and warm cream base drawn
from the current site, elevated photography-forward layouts, and Citron's signature
citron green used confidently as the one memorable accent (the current site barely
uses it). Every variant should feel expensive, warm, and unmistakably Citron.

## Master Palette (source for all variants; each variant uses a DIFFERENT balance)
- Charcoal ink: #1A1A1A (deep #141414)
- Body gray: #4F4F4F
- Warm cream: #FAF9F5 / paper: #F4F2EC
- Citron green (signature): #C4D809 -- use for fills, highlights, hover states.
  LOW CONTRAST on white: never use for body text on light backgrounds.
- Olive (citron-dark, text-safe on light): #6B7A00 / #8A9A0B
- Lake slate/navy (waterfront): #1F2A33 / #22333E
- Brass/gold (wine awards, luxury): #B08D3E
- Terracotta warm accent (sparing): #C06E52

## Brand Assets (already in repo root: assets/)
- assets/citron-logo-dark.png -- dark olive wordmark, use on LIGHT backgrounds (250x70)
- assets/citron-logo-light.png -- pale cream wordmark, use on DARK backgrounds (613x177)
- Copy the appropriate logo(s) into your variant folder and reference relatively
  (e.g., ./logo-dark.png). Height in nav: 28-40px.

## THE CORE UX DIRECTIVE (applies to EVERY variant)
The client's current site buries event spaces on inner pages behind a dense 7-item nav.
Every variant MUST:
1. SIMPLIFY the page flow: max 5 top-level nav items:
   Home | Menus | Private Events | Our Story | Contact
   plus a prominent "Reserve a Table" CTA button in the nav bar.
2. Put ALL event spaces AND event vendors/services in ONE "Private Events" menu in
   the top nav bar. On desktop this is a mega-menu (or dropdown/panel treatment that
   fits the template's interaction style); on mobile it is an expandable section of
   the hamburger menu. It must contain BOTH columns below:

   SPACES (with capacity):
   - Fireplace Room (20 guests)
   - Mirror Room (26 guests)
   - Club Room (50 guests)
   - Waterfront Terrace (50 guests)
   - Citron Bar (125 guests)
   - Waterfront Courtyard (200 guests)
   - The COVE (200 guests)
   - Entire Venue (500 guests)
   - Off-Premise Catering (unlimited)

   VENDORS & SERVICES:
   - Floral & Decor
   - Linens & Tabletop
   - AV & Production (Savant-powered)
   - Event Planning
   - Photography Partners
   - Entertainment & Music

   Menu items link to in-page anchors (#spaces, #vendors, etc.). Since each variant
   is a single standalone page (except the multi-page variant), include an event
   spaces section and a vendors/services section in the page body so the links work.

## Shared Copy Facts (use naturally, do not dump all of them everywhere)
- Upscale waterfront restaurant + private event venue at Quarry Lake,
  2605 Quarry Lake Drive, Baltimore, MD 21209
- Phone 410-363-0900 (events: x2, events@citronbaltimore.com)
- Family owned by Charles & Susan Levine, opened November 2016; 10th anniversary
  November 2026
- Executive Chef Mary Hersh; seasonal scratch kitchen; center-cut steaks, day-boat
  seafood, house-made pastas, full sushi bar
- Wine Spectator Award of Excellence 2019-2025; FINE WINE World's Best 2025
- Charles Levine: 40+ years, ~14,000 catered events, clients including five US
  presidents, the NFL, the Rolling Stones, and Oprah
- Citron Caterers: 30+ years of off-premise catering across MD, DC, Northern VA
- Dinner Wed-Sun from 4 PM; Happy Hour 4-6:30; private events 7 days a week
- Heated waterfront terraces, handcrafted cocktails, ~300 seats
- Reservations via OpenTable (link CTA to https://citronbaltimore.com or # anchors)

## Field Conventions
- Use headline / subheadline / eyebrow text patterns (NOT heading/subtitle/badge)
- CTAs: prominent, action-oriented buttons ("Book Your Event", "Reserve a Table",
  "Explore The COVE", "Plan Your Celebration")

## Hero Images
Generated images live in assets/heroes/ (see per-variant assignment in the lineup).
Copy your assigned image into your variant folder. If an assigned image is missing,
build a rich CSS gradient/pattern hero in your variant's palette instead. Use
loading="lazy" for below-fold images, but NOT on the hero.

## Technical Requirements (every variant)
- One complete standalone index.html with inline CSS (and inline JS for interactions)
- Google Fonts via <link> tags with display=swap and preconnect
- Fully responsive: 375px, 768px, 1024px, 1440px. No horizontal scroll on mobile.
- 44px minimum touch targets; visible focus states; prefers-reduced-motion respected
- Semantic HTML: one h1, logical heading order, <html lang="en">
- <title> and meta description unique per variant
- No emojis as icons: inline SVG icons only
- cursor: pointer on all clickable elements; hover transitions 150-300ms
- Text contrast 4.5:1 minimum on body copy
