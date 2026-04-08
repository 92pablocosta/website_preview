# Aurea Dental — Premium Oral Rehabilitation Website

> A boutique premium dentistry landing page, entirely inspired by and derived from the **Antigravity Design System**. Showcase of handcrafted frontend design, video integration, and modern web components.

---

## 🎨 Project Overview

**Aurea Dental** is a high-end dental prosthetics and oral rehabilitation website built to demonstrate:

- **Premium design language inheritance** — Complete visual reuse of CSS tokens, animations, and component patterns from a reference design system
- **Modern motion design** — Scroll reveals, text masks, parallax, beam buttons with shimmer effects, and floating orb ambiance
- **Editorial-grade layout** — Full-width video hero, glassmorphism panels, transparent outlined typography, and fine-grained spatial control
- **Bilingual support** — Complete Portuguese (BR) and English implementations
- **Production-ready code** — Relative asset paths, responsive mobile-first design, and accessible patterns

### Key Features

✨ **Glass Panel System** — Frosted backdrop with blur and layered borders  
✨ **Transparent Typography** — Outlined and stroked headlines for premium feel  
✨ **Video Centerpiece** — Hero section built around dental prosthetics transition video  
✨ **Scroll-Triggered Reveals** — Blur-in animations with staggered entrance delays  
✨ **Beam Button Effects** — Rotating conic-gradient borders with shimmer sweep on hover  
✨ **Marquee Scrolling** — Infinite-loop treatment keyword carousel  
✨ **Flashlight Hover Cards** — Mouse-tracking radial glow on interaction  
✨ **Responsive Grid** — 12-column layout system with elegant gutters  
✨ **Floating Ambient Elements** — Blurred orbs with sine-wave animation

---

## 📁 File Structure

```
preview/
├── index.html                    # Antigravity Design System reference (English)
├── dental.html                   # Aurea Dental landing page (English & PT-BR)
├── Dental_mouthguard.mp4         # Hero video: dental plate transition
├── digital-assets/               # Preloaded CSS, JS, fonts, images
│   ├── resource_3fa48481346f.js  # Tailwind/utility framework
│   ├── iconify-icon_*.js         # Icon system (SVG sprites)
│   ├── css2_*.css                # Google Fonts CSS
│   └── *.webp, *.jpg             # Moodboard images
├── gemini-assets/                # Secondary asset bundle
│   ├── css2_*.css                # Font loading and resets
│   └── *.woff2                   # Font files (Geist, Space Grotesk, Inter)
└── README.md                     # This file
```

---

## 🎯 Design System Inheritance

The Aurea Dental website **directly reuses 95%** of the Antigravity Design System:

### CSS Tokens (Unchanged)

```css
--bg-main: #f4f3ee;
--accent: #e9d9b9;
--shadow-md: 0 18px 40px rgba(24, 19, 10, 0.1);
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

### Component Classes (Reused)

- `.reveal` — scroll-triggered blur-in animation (1s, `--ease-out`)
- `.text-reveal-wrapper / .text-reveal-content` — masked headline slide-up
- `.glass-panel` — frosted background with blur and border
- `.hero-glass-stroke / .hero-ink-stroke` — transparent text with `-webkit-text-stroke`
- `.beam-button` — conic-gradient rotating border + shimmer sweep
- `.flashlight-card` — mouse-tracking radial glow with CSS custom properties
- `.floating-orb` — blurred circles with `float` animation (10s ease-in-out)
- `.marquee-container / .marquee-content` — infinite horizontal scroll
- `.section-shell` — section wrapper with animated background drift

### Animations (Reused)

```
@keyframes drift     { 0% { transform: translate3d(-2%,-1%,0) scale(1); } ... }
@keyframes float     { 0%,100% { transform: translateY(0) translateX(0); } ... }
@keyframes shimmer   { from { transform: translateX(-140%) skewX(-18deg); } ... }
@keyframes spin      { to { transform: rotate(360deg); } }
@keyframes scroll    { from { transform: translateX(0); } to { transform: translateX(-100%); } }
```

### Typography Stack

- **Display**: Space Grotesk (bold, attention-grabbing)
- **Body**: Inter (neutral, highly legible)
- **Mono**: Geist Mono (labels, timestamps, metadata)

---

## 🌐 Pages

### `index.html` — Antigravity Design System

Reference documentation page showcasing:

- 12-column grid overlay and surface patterns
- Complete color palette (18+ tokens)
- Typography hierarchy (H1–Body-sm–Captions)
- Component library (Beam button, Glass panel, Flashlight card, Modal, Badges, etc.)
- Motion specs (Reveal, Masked text, Pointer glow, Parallax)
- Icon language (Solar icon set, stroke-based, thin weight)

**Purpose**: Live design reference and testing ground.

### `dental.html` — Aurea Dental Landing Page

Production-ready premium dentistry website with 8 major sections:

#### 01 Hero (100vh)

- **Split layout**: Left (content + CTAs), Right (video)
- **Video**: Dental mouthguard transition (16:9 aspect, rounded frame, glow halo)
- **Headline**: "Precisão / Restaurada" with masked text reveal and stroked typography
- **CTAs**: Beam button + Ghost button
- **Metrics**: 18+ years, 4k smiles, 99% satisfaction

#### 02 Marquee Strip

Infinite scrolling dental keywords: Implantes, Reabilitação, Zircônia, Design Digital, etc.

#### 03 Benefits (Why Aurea)

4 flashlight cards:

- Digital Precision (±20μm CAD/CAM)
- Medical-Grade Materials (ISO-certified)
- Comfortable Recovery (48-hour median)
- Lasting Results (15-year warranty)

#### 04 Treatment Process (Journey)

5 numbered steps + data metrics:

1. Consulta Inicial → Tomografia CBCT
2. Planejamento Digital → Aprovação CAD
3. Fabricação Própria → Fresagem em laboratório
4. Instalação Precisa → Ajuste no mesmo dia
5. Pós-tratamento → Garantia escrita

**Metrics**: 98% implant success, 1.2d recovery, 0 remakes, ±20μm accuracy

#### 05 Specialty Areas (Treatments)

6 visual cards:

- Implantes Dentários (Most requested)
- All-on-4 / All-on-6 (Full arch)
- Facetas de Porcelana (Premium)
- Coroas em Zircônia
- Próteses Removíveis
- Design Digital do Sorriso (Planning)

#### 06 Trust & Credibility

- Certifications: ISO 13485, CE Mark, EAO Member, Straumann Gold Center
- Clinical Team: Dr. E. Corrêa (PhD), Dr. A. Mendes (MSc)
- Patient Testimonials: 4.9⭐ rating, 890+ reviews, 12 awards

#### 07 Final CTA

- Headline: "Seu sorriso de precisão começa aqui"
- Description, Schedule button, Call button
- Value props: No commitment, Digital preview, Written plan

#### 08 Footer

- Brand story, links to Treatments & Clinic
- Copyright + ISO/CE/EAO badges

---

## 🚀 Technical Details

### Performance & Optimization

- **No external dependencies** — Pure HTML/CSS/JS (fonts are local)
- **Lazy-loaded assets** — Video in `<video autoplay muted loop playsinline>`
- **Responsive design** — Mobile-first, tested on desktop/tablet/mobile
- **Accessibility** — Semantic HTML, icon labels, alt text
- **Relative paths** — All assets use `./` references
- **Passive scroll listeners** — `{ passive: true }` for performance

### JavaScript Features

- **Scroll reveal observer** — Intersection Observer API (0.12 threshold)
- **Text reveal choreography** — Staggered `.delay-100` to `.delay-700` classes
- **Parallax scrolling** — Per-element `data-speed` attribute handling
- **Marquee animation** — CSS `scroll` animation + dual content loop
- **Beam button shine** — Shimmer animation on hover
- **Flashlight glow** — `onmousemove` with CSS custom properties

### Browser Support

- Chrome 90+ ✅
- Safari 14+ ✅
- Firefox 88+ ✅
- Edge 90+ ✅

---

## 📱 Responsive Breakpoints

- **Mobile** (< 768px): Single column, full-width sections
- **Tablet** (768px–1024px): 2-column grids, compact spacing
- **Desktop** (1024px+): 12-column grid, full hero split, 1500px max-width

**CSS breakpoints**: `md:` (768px), `lg:` (1024px), `xl:` (1280px)

---

## 🎬 Video Integration

### Dental_mouthguard.mp4

- **Format**: MP4 (H.264, 1920×1080)
- **Usage**: Hero centerpiece, auto-playing, muted, looping
- **Frame**: Dark rounded border with glow halo

```html
<video autoplay muted loop playsinline>
  <source src="./Dental_mouthguard.mp4" type="video/mp4" />
</video>
```

---

## 🌍 Multilingual Support

### Available Languages

- **English** (default): All content and metadata
- **Português (BR)**: Complete translation of every user-facing string

**HTML lang attribute**: `lang="pt-BR"` toggles translations

---

## 🛠 How to Use

### View Locally

```bash
# Clone or download
git clone <repo-url>
cd preview

# Open in browser
open dental.html  # macOS
start dental.html # Windows
```

### Customize

- **Colors**: Edit `:root { --accent: #e9d9b9; ... }`
- **Text**: Search/replace strings
- **Video**: Replace `./Dental_mouthguard.mp4` with your own
- **Images**: Update `digital-assets/` moodboard images
- **Language**: Adapt Portuguese for other languages

### Deploy

1. FTP the `preview/` folder to your hosting
2. Ensure recursive directory upload
3. Test video playback and fonts on production

---

## 💡 Design Highlights

### Aesthetic Philosophy

**Less "standard clinic", more "premium contemporary dentistry":**

- Editorial design sensibility (generous whitespace, fine typography)
- Medical precision (ISO, certifications, clinical data)
- Restrained luxury (champagne gold, soft grays, never garish)
- Motion without noise (subtle reveals, 1s timings, smooth easing)

### Key Visual Decisions

1. **Transparent Headlines** — `-webkit-text-stroke` communicates "premium" instantly
2. **Video as Hero** — Dental prosthetics transition is the story
3. **Glass Panels Everywhere** — Frosted surfaces repeat for visual cohesion
4. **Floating Orbs** — Blurred elements add depth without clutter
5. **Staggered Reveals** — `delay-100` increments orchestrate attention
6. **Beam Buttons** — Rotating border + shimmer = high-tech feel

---

## 📊 Component Showcase

### Beam Button

```html
<button class="beam-button group">
  <span></span>
  <span>
    <span class="text-sm font-semibold uppercase">Schedule</span>
    <iconify-icon
      class="group-hover:translate-x-1"
      icon="solar:arrow-right-linear"
    ></iconify-icon>
  </span>
</button>
```

**Effect**: Rotating conic-gradient border + shimmer sweep

### Flashlight Card

```html
<div
  class="flashlight-card"
  onmousemove="
    const r = this.getBoundingClientRect();
    this.style.setProperty('--mouse-x', `${event.clientX - r.left}px`);
    this.style.setProperty('--mouse-y', `${event.clientY - r.top}px`);
"
></div>
```

**Effect**: Radial glow follows cursor

### Text Reveal

```html
<span class="text-reveal-wrapper">
  <span class="text-reveal-content delay-100">Word</span>
</span>
```

**Effect**: Words slide up and fade in with staggered delay

---

## 🎓 Learning Value

✅ Design System inheritance without breaking cohesion  
✅ CSS architecture: variables, keyframes, card patterns  
✅ Motion design: reveals, parallax, beam shimmer, float animations  
✅ Responsive layout: 12-column grid, mobile-first breakpoints  
✅ Video framing: aspect ratio, autoplay, layered overlays  
✅ Intersection Observer API: trigger animations without jank  
✅ Glassmorphism: backdrop-filter + border strategies  
✅ Bilingual markup: clean language-switching structure  
✅ Premium UX: micro-interactions, hover states, orchestrated loading

---

## 📸 Demo

To see this in action:

1. Open `dental.html` in your browser
2. Hero: Watch dental video with glowing halo
3. Scroll: Observe staggered reveals and parallax
4. Hover: See beam rotation and flashlight glow

---

## 🔗 Assets Used

- **Icons**: Solar icon set (stroke-based, semantic)
- **Fonts**: Inter, Space Grotesk, Geist Mono (local woff2)
- **Utilities**: Tailwind CSS framework structure
- **Video**: Original dental prosthetics transition (MP4, 1920×1080)
- **Images**: Moodboard assets (WebP + JPEG fallback)

---

## 📝 License

Portfolio showcase. Design system referenced for educational purposes. Feel free to adapt for your own premium websites.

---

## 👤 Author

**Pablo Costa**  
Frontend Designer & Developer | Premium Web Experiences

---

## 🙏 Credits

**Antigravity Design System** — Foundational visual language  
**Solar Icons** — Icon set throughout  
**Tailwind CSS** — Utility-first structure  
**Google Fonts** — Typography (Inter, Space Grotesk)

---

**Thank you for visiting Aurea Dental!** 🦷✨
