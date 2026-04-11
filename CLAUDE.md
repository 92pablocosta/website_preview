# Dental Studio — Claude Code Context

You are building a **conversion-focused landing page** for Dental Studio, a dental clinic in João Pessoa, PB, Brazil.
The goal of this page is to **generate appointment bookings via WhatsApp**.

---

## Project Stack

- Pure HTML / CSS / JavaScript (no frameworks)
- No build step required
- Mobile-first, responsive

## Project Structure

```
dental-studio-landing/
├── CLAUDE.md
├── docs/
│   ├── brand.md          ← colors, fonts, visual identity
│   ├── content.md        ← all copy, procedures, team info
│   └── discovery.md      ← bot discovery session (business context)
├── public/
│   └── assets/           ← logo, photos, icons
└── index.html
```

Read all files inside `/docs` before writing any code.

---

## Design System

A reference design system has been extracted from a competitor/reference site and is available at:
`docs/design-system.md` (or equivalent extracted file in this folder)

**Match the visual language of that design system** — spacing, typography scale, component style, color usage.
Do not invent a new design language. Adapt it to Dental Studio's brand colors and content.

---

## Primary CTA

Every section must drive toward a single action:

> **"Agendar pelo WhatsApp"** → `https://wa.me/5583996094959`

Use this link for all WhatsApp buttons. Open in new tab.

---

## Rules

- Do not use any CSS frameworks (no Tailwind, no Bootstrap)
- Write clean, semantic HTML5
- All variable names, IDs, class names in English
- Comments in English
- No placeholder lorem ipsum — use only real content from `docs/content.md`
- Prioritize Largest Contentful Paint: hero image must load fast
- All images must have descriptive `alt` attributes in Portuguese
- Ignore folder @backup\ | Add it to .gitignore
