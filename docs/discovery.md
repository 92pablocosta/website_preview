# Dental Studio - Current Context

This file captures the most relevant updates made to the project so far.

## Overall Direction

- Preserved the existing visual identity: black + gold palette, glass surfaces, gradients, typography, section rhythm, and animation style.
- Kept the original page architecture and section order from `index.html`.
- Upgraded the site by integrating real media assets (images + video) with responsive and performance-minded behavior.

## Major Implementations

### 1) Image Asset Pipeline

- Added scripted image preparation flow in `scripts/prepare-image-pipeline.ps1`.
- Curated and renamed images into semantic slots (hero, services, process, specialties, team, social proof, cta).
- Generated responsive optimized variants (`desktop`, `tablet`, `mobile`) under `assets/images/optimized/`.
- Added metadata manifest at `assets/images/image-manifest.json`.

### 2) Hero Section Rework

- Replaced old hero image with a 3-slide responsive carousel.
- Added autoplay, dot controls, pause on hover, and reduced-motion fallback.
- Preloaded first hero image for better first render.
- Switched hero media to `hero-1`, `hero-2`, `hero-3`.
- Removed old hero assets (`hero-main`, `hero-alt-01`, `hero-alt-02`) from `assets/images/original/` and `assets/images/optimized/`.

### 3) Services Section (`#servicos`)

- Converted cards to media-enhanced cards with top image bands.
- Kept original copy, icons, numbering, and flashlight hover behavior.
- Added responsive `<picture>` usage and lazy loading.

### 4) Specialties Section (`#especialidades`)

- Replaced icon-only visual backgrounds with real responsive images.
- Preserved overlay icons, badges, tags, and card structure.
- Added dark overlays and controlled hover zoom to keep text legible and visual style consistent.

### 5) Team + Social Proof + CTA Media

- Added real image panels to:
  - Team card (`#equipe`)
  - Testimonial panel (`#equipe`)
  - CTA media strip (`#contato`)
- Updated CTA image to use `hero-1` as requested.

### 6) Hero Video Integration

- Added a video card below the hero carousel in the right column.
- Video source configured as `assets/videos/dental-mouthguard.mp4`.
- Created `assets/videos/` and copied the file into project from:
  `C:\Users\pablo\Desktop\clis-test\openclaude\dental_studio_new\Dental_mouthguard.mp4`
- Current runtime video path:
  `dental_studio_new/assets/videos/dental-mouthguard.mp4`

## Content / UX Refinements

- Removed both floating hero metric cards (Tecnologia/CAD-CAM and Precisao).
- In `Jornada de Tratamento`, removed the "Precisao do scan" card.
- Rebalanced remaining process metric card to full width.
- Refined testimonial copy and naming for a more professional tone.
- Added image focal-point utility classes (`focus-center`, `focus-upper`, `focus-left`) for better crop control.
- Added subtle parallax to selected section media with reduced-motion safeguards.
- Added mobile spacing improvements for trust/CTA rhythm.

## Key Files Touched

- `index.html`
- `style.css`
- `script.js`
- `scripts/prepare-image-pipeline.ps1`
- `scripts/refresh-hero-assets.ps1`
- `assets/images/*`
- `assets/videos/dental-mouthguard.mp4`

## Current Media Expectations

- Hero carousel uses:
  - `assets/images/optimized/hero-1-*.jpg`
  - `assets/images/optimized/hero-2-*.jpg`
  - `assets/images/optimized/hero-3-*.jpg`
- Hero video uses:
  - `assets/videos/dental-mouthguard.mp4`
