# VORTEX FUTSAL

> **"PLAY FAST. PLAY TOGETHER."**

A premium, cinematic, Awwwards-style sports brand landing page and urban arena booking platform for **VORTEX FUTSAL**. Designed with athletic energy, broadcast graphics, and interactive court experiences.

---

## Key Features

- **Cinematic SVG Preloader**: Authentic futsal pitch blueprint drawing sequence (< 2.5s) with logo burst and dual curtain split.
- **Multi-Layer Parallax Hero**:
  - Kinetic typography with staggered blur & 3D tilt ("PLAY WITHOUT LIMITS.").
  - Dynamic player action silhouette responding to mouse coordinates via `gsap.quickTo`.
  - Interactive futsal ball with hover rotation and trajectory tracking.
  - Live animated stats counter (`24/7 OPEN`, `4 PRO COURTS`, `120+ MATCHES / WEEK`).
  - Magnetic button interactions.
- **The Arena Showcase**: Smooth clip-path scroll reveal (`inset(15%)` to full bleed) with a 6-amenity FIFA-spec grid.
- **Tactical Court Experience**: Interactive court switcher (Court 01 to 04) with dynamic specs, live camera angle shifts, and illuminated SVG tactical pitch lines.
- **The Speed of the Game (Special Section)**: Scroll-scrubbed futsal ball with luminous light trail, triggering kinetic keywords (**SPEED**, **CONTROL**, **PASSION**) and telemetry (124 KM/H shot velocity).
- **Direct Booking Console**: Futuristic sports console featuring 7-day date selector, period filters, interactive slot matrix with color-coded availability, live price calculation, player counter, and booking receipt modal with celebratory confetti.
- **Match Packages & Pricing**: Clean dark glass cards with subtle border glow for Casual, Team (Most Popular), and Pro tiers.
- **Vortex Night Cup Tournament**: Official 16-team tournament banner, realtime countdown ticker (days, hours, minutes, seconds), and team registration modal.
- **Live Match Experience**: Television sports broadcast scoreboard HUD (`VORTEX FC 4 - 2 BLACK TIGERS`), match timer, ball possession telemetry, and shot statistics.
- **Roster & Community Showcase**: Player cards with grayscale-to-color hover and jersey number scaling, plus horizontal scroll storytelling for weekly community programs.
- **Social Wall & Final Stadium CTA**: Masonry photo gallery with modal view and full-viewport stadium light activation effect.

---

## Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom Obsidian Dark `#050505` & Electric Green `#B6FF00` design system)
- **Animations**: [GSAP](https://greensock.com/gsap/), [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/), [Lenis](https://lenis.darkroom.engineering/) smooth scroll
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti), Film Grain Noise Overlay

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/vortex-futsal.git
cd vortex-futsal
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## Deployment Guide

### Deploy to GitHub Pages
1. In `vite.config.ts`, ensure `base: './'` is configured (already set).
2. Install `gh-pages` (optional) or use GitHub Actions:
```bash
npm run build
```
3. Push the repository to GitHub:
```bash
git init
git add .
git commit -m "feat: initial commit vortex futsal landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
4. On GitHub, go to **Settings > Pages** and set source to GitHub Actions or your deployment branch.

### Deploy to Vercel / Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

---

## License & Copyright

© 2026 VORTEX FUTSAL. All rights reserved.
