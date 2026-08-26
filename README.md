# Aranya Chatterjee — Constellation Universe Portfolio website

A gesture-driven 3D portfolio for an AI/ML engineer. The whole site is one
continuous camera flight through a starfield: five sections (home, about,
projects, skills, contact), each a named constellation floating in front of a
procedurally rendered nebula. Every star is hoverable and tells a story via a
tooltip; project and contact stars are clickable and open the real thing.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| 3D | Three.js via `@react-three/fiber` + `@react-three/drei` |
| Navigation | GSAP Observer — discrete section paging (wheel / touch / keys) |
| Animation | GSAP (constellations, camera) + Framer Motion (text, tooltip, UI) |
| Styling | Tailwind CSS v4 + inline styles |
| Fonts | Space Grotesk + Space Mono via `next/font/google` |

---

## File map

```
src/
├── app/
│   ├── layout.tsx            Fonts, SEO metadata, JSON-LD person schema
│   ├── globals.css           Tailwind, hint chevron, fallback star twinkle
│   ├── page.tsx              Root composition — webgl detect, state, wiring
│   ├── icon.svg              Favicon (constellation glyph)
│   ├── opengraph-image.png   Social card (1200×630)
│   ├── robots.ts             robots.txt
│   └── sitemap.ts            sitemap.xml
├── components/
│   ├── UniverseCanvas.tsx    R3F Canvas: nebula, starfield, camera rig
│   ├── ConstellationSystem.tsx  Stars, fat-line edges, hover, presence, transitions
│   ├── ConstellationLabel.tsx   Star-atlas nameplate per constellation
│   ├── ScrollEngine.tsx      GSAP Observer paging + input lock
│   ├── SectionText.tsx       Per-section text reveals (Framer Motion)
│   ├── StarTooltip.tsx       Hover tooltip / mobile bottom sheet
│   ├── ProgressDots.tsx      Section indicator dots
│   ├── UIOverlay.tsx         Home intro, nav, monogram, socials, scroll hint
│   └── FallbackUniverse.tsx  No-WebGL static fallback
└── data/
    ├── constellations.ts     All sections, stars, edges, palettes, copy, contacts
    └── palette.ts            Palette type
public/
├── nebula_bg.webp            Procedural nebula render (2560×1440)
└── Aranya_Chatterjee_Resume.pdf
```

---

## How it works

**Gesture → camera.** There is no real scrolling: the page is a fixed
viewport and GSAP Observer captures wheel flicks, touch swipes, and arrow /
page keys. Each gesture advances exactly one section — a single committed
camera flight (`power2.inOut`, ~1.25s) — and further input is ignored until
the destination's arrival animation has played out, so fast scrolling can
never skip sections. Camera Z is damped toward `progress × −720`; mouse
(desktop) or device orientation (mobile) adds parallax on X/Y.

**A persistent universe.** Constellations live at fixed positions in space
rather than mounting and unmounting, so perspective alone grows them as you
approach — that is what makes travel feel real. Only two exist in the sky at
once: the current section's and the next one ahead as an approach target;
everything further is faded out and fully hidden from drawing and raycasting.

**Transitions are velocity-aware, not timer-based.** A GSAP ticker watches
progress every frame:

- *Departure* — once the camera pulls >0.05 progress from the displayed
  section's stop, the line pattern dissolves while its stars stay and recede.
- *Arrival* — only when the camera is within 0.03 of a stop **and**
  decelerating does each star flare gently in sequence, then the edges trace
  themselves in (fat-line `dashOffset`), then the nameplate and text reveal.
  Multi-section jumps never flash intermediate constellations.

**Stars.** drei `<Stars>` (9000, 5000 on mobile) parallaxes at 0.8× camera;
300 custom foreground stars in 3 size classes (white / blue-white / warm)
follow at 0.95× with slow rotation.

**Hover and open.** Invisible hit spheres at 3× star radius; the hovered star
scales 1.5× and brightens, connected edges light up, everything else dims, and
a Framer Motion tooltip (viewport-clamped, edge-flipping) shows its label,
name, description, and tags. Stars with an `href` (projects, contacts) are
clickable — desktop click opens, mobile taps once to reveal and again to open.

**Edge cases.** No WebGL → static nebula + CSS starfield + normal scrolling
sections. `prefers-reduced-motion` → instant section swaps, no parallax or
input lock. Mobile (<768px) → swipe paging via the same Observer, the two
smallest stars dropped per constellation, constellation top / text bottom.

---

## Run

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build && npm start
```

All content lives in `src/data/constellations.ts` — stars, edges, palettes,
copy, and contact details are plain data.

---

## Deploy

The site is fully static (`○ prerendered`) and deploys to Vercel, Netlify, or
any Node host with no configuration.

Set **`NEXT_PUBLIC_SITE_URL`** to the production origin (e.g.
`https://aranyachatterjee.com`) so canonical URLs, Open Graph tags,
`robots.txt`, and `sitemap.xml` point at the real domain. On Vercel it falls
back to `VERCEL_PROJECT_PRODUCTION_URL` automatically, so this is only
required for a custom domain.

```bash
npx vercel deploy --prod
```

Checks before shipping:

```bash
npm run lint
npx tsc --noEmit
npm run build
```
