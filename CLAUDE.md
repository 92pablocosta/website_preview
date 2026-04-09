# Dental Studio — Project Context

## Project Overview

Landing page for **Dental Studio**, a premium dental clinic. Dark/gold theme. Single HTML page with a companion `style.css` and `script.js`.

- `index.html` — main page (active, being developed)
- `style.css` — all styles (design tokens, layout, animations, responsive)
- `script.js` — scroll-reveal observer, nav entrance, flashlight mouse tracker
- `v2/index.html` — reference design (light theme, Tailwind-based); used as a content and structure reference

## Asset Locations

| Path | Contents |
|------|----------|
| `./Dental_mouthguard.mp4` | Hero video — dental plate transition, used in hero right column |
| `./digital-assets/*.webp` | 8 WebP images used as photo backgrounds in specialty cards (section 04) |
| `./digital-assets/*.jpg` | 3 JPG images (available, not yet placed) |
| `./digital-assets/iconify-icon_*.js` | Local Iconify bundle (v2 uses this; index.html uses CDN) |

### WebP → Spec-card mapping

| File | Card |
|------|------|
| `6c710de5-...webp` | Implantes Dentários (sc-g1) |
| `c7fa69dd-...webp` | All-on-4 / All-on-6 (sc-g2) |
| `62cc53b7-...webp` | Lentes e Facetas (sc-g3) |
| `ddab06d9-...webp` | Ortodontia Estética (sc-g4) |
| `4b7d31e6-...webp` | Design Digital do Sorriso (sc-g5) |
| `5ea5c0e9-...webp` | Reabilitação Oral (sc-g6) |

## Design System

- **Fonts:** Rajdhani (display/headings) + Jost (body) via Google Fonts
- **Palette:** Black background, gold gradient (`--gold-grad`), white text
- **Key CSS classes:** `.flash-card` (flashlight hover), `.beam-btn` (spinning conic CTA), `.ghost-btn`, `.reveal` / `.reveal-active` (scroll animations), `.glass-dark`
- **Icons:** Iconify Solar set (CDN) — `solar:*-linear` / `solar:*-bold`

## Sections

| # | ID | Heading |
|---|-----|---------|
| 01 | `#inicio` | Hero — Excelência em Sorrisos |
| — | — | Marquee strip |
| 02 | `#servicos` | Diferenciais — Feito para durar |
| 03 | `#processo` | Jornada de Tratamento — Do scan ao sorriso |
| 04 | `#especialidades` | Áreas de Especialidade — O que restauramos |
| 05 | `#equipe` | Equipe & Padrões — Fundamentado em evidência |
| 06 | `#contato` | CTA Final — Seu sorriso de precisão começa aqui |
| — | — | Footer |

## What Was Done (Integration Session)

### Video hero
- Replaced static JPEG (`../dental_studio/img/WhatsApp Image...jpeg`) with `<video autoplay muted loop playsinline>` sourcing `./Dental_mouthguard.mp4`
- Fixed centering: moved `aspect-ratio:16/9` from the `<video>` element onto the `.hero-frame` container div (matching v2's pattern), and set `width:100%; height:100%` on the video — this lets the flex parent center the frame correctly

### Hero metadata (from v2)
- Float top-left card: "Tecnologia / CAD/CAM" → "Material Clínico / Zircônia / Biocompatível · ISO 13485"
- Hero caption: "Ambiente Clínico · Equipamentos de última geração" → "Placa dental · transição de prótese"
- Hero glow div: added `video-glow` pulse animation (keyframe added to style.css)

### Specialty cards
- All 6 `.sc-vis` visual areas now use WebP images as photo backgrounds (`sc-vis-photo` class + inline `background-image`)
- A `.sc-vis-overlay` gradient div sits above each image to keep icons/badges legible

### Testimonials (section 05)
- "Laio Nojento" (joke placeholder) → anonymized `M.F., 54` with copy from v2
- Second testimonial updated to `C.R., 38` with better copy
- Star ratings changed from `★★★★★` text to `solar:star-bold` Iconify icons

### CSS additions (style.css)
- `@keyframes video-glow`
- `.hero-frame video` rule (same filter as `.hero-frame img`)
- `.sc-vis-photo` — enables background-image on spec-card visuals
- `.sc-vis-overlay` — dark gradient overlay for readability over photos
- `.t-stars` updated to `display:flex; gap:0.1rem` for icon stars

## Known Gaps / TODO

- **CTA buttons** (`Agendar Consulta`) have no action — should link to WhatsApp or a booking form
- **Mobile nav** hides all links on `<768px` with no hamburger replacement
- No scroll-based active state on nav links
- `./digital-assets/*.jpg` images (3 files) are not yet used
- `loading="lazy"` not added to any images
