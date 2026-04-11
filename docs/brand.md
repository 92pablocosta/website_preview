# Dental Studio — Brand & Visual Identity

## Logo

Two versions available:
- **Dark version**: gold logo on black background (primary)
- **Light version**: gold logo on white background (for light sections)

Logo mark: circular icon with a stylized tooth outline in gold gradient
Wordmark: "DENTAL STUDIO" in custom display font + "ODONTOLOGIA ESPECIALIZADA" tagline in Futura Bk BT

Logo files location: `public/assets/` (export from PDF as needed)

---

## Color Palette

### Background Colors
| Token           | Hex       | Usage                                    |
|-----------------|-----------|------------------------------------------|
| `--color-black` | `#000000` | Primary background (dark sections, hero) |
| `--color-white` | `#FFFFFF` | Light sections background                |

### Gold Gradient (brand signature color)
The gold is always applied as a **linear gradient** cycling through these 5 stops:

| Stop | RGB                | Hex approx | Role           |
|------|--------------------|------------|----------------|
| 1    | rgb(237, 198, 100) | `#EDC664`  | Warm gold      |
| 2    | rgb(169, 117, 58)  | `#A9753A`  | Dark bronze    |
| 3    | rgb(247, 241, 184) | `#F7F1B8`  | Light champagne|
| 4    | rgb(147, 101, 56)  | `#936538`  | Deep brown-gold|
| 5    | rgb(226, 184, 94)  | `#E2B85E`  | Soft gold      |

**CSS gradient (buttons, accents, dividers):**
```css
background: linear-gradient(135deg, #EDC664 0%, #A9753A 25%, #F7F1B8 50%, #936538 75%, #E2B85E 100%);
```

**Text gradient (headings, logo wordmark):**
```css
background: linear-gradient(135deg, #EDC664, #A9753A, #F7F1B8, #936538, #E2B85E);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## Typography

### Wordmark Font
- Custom display font — geometric, modern, tech-forward
- Web alternative: `'Rajdhani', sans-serif` (Google Fonts) — weight 600

### Tagline Font
- **Futura Bk BT** — clean, efficient, modern
- Usage: "ODONTOLOGIA ESPECIALIZADA", labels, subheadings
- Web alternative: `'Jost', sans-serif` — weight 300, letter-spacing: 0.2em, UPPERCASE

### Body Font
- `'DM Sans', sans-serif` or `'Inter', sans-serif` — weight 400

### Type Scale
| Role       | Size    | Weight | Transform | Spacing |
|------------|---------|--------|-----------|---------|
| H1 Hero    | 56–72px | 600    | none      | -0.02em |
| H2 Section | 36–48px | 600    | none      | -0.01em |
| H3 Card    | 20–24px | 500    | none      | 0       |
| Tagline    | 12–14px | 300    | uppercase | 0.2em   |
| Body       | 16px    | 400    | none      | 0       |

---

## Visual Language

- **Aesthetic**: luxury, premium — dark background + gold accents
- **Backgrounds**: black dominant; white for contrast sections
- **Borders/dividers**: thin gold gradient lines (1px)
- **Buttons**: dark bg + gold gradient border + gold gradient text OR solid gold gradient fill
- **Icons**: thin line style (matching the tooth logo icon)
- **Photography**: high contrast, dark tones — avoid bright clinical white

## Do's and Don'ts

✅ Gold always as gradient, never flat/solid
✅ Black as dominant background
✅ Wide letter-spacing on uppercase labels
✅ Thin, elegant line weights
❌ No blue, green, or typical dental clinic colors
❌ No heavy/bold body text
❌ No flat gold
