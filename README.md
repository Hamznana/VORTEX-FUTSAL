<div align="center">

# VORTEX FUTSAL
### "PLAY FAST. PLAY TOGETHER."

A cinematic, high-performance, Awwwards-caliber landing page and interactive booking platform for **VORTEX FUTSAL** — an elite urban indoor futsal arena brand.

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-050505?style=for-the-badge)](https://lenis.darkroom.engineering/)

[Live Demo](https://your-deployment-url.vercel.app) • [Key Features](#-key-features) • [Tech Stack](#-tech-stack) • [Installation](#-getting-started) • [Deployment](#-deployment-guide)

</div>

---

## ⚡ Overview

**VORTEX FUTSAL** combines the raw competitive atmosphere of an international sports brand (Nike Football aesthetic), a high-tech gaming UI, and live broadcast match graphics.

Built strictly with **performance**, **athletic motion**, and **antislop design standards** (zero generic AI slop, WCAG AA contrast compliance, zero dead buttons, and full responsive reflow).

---

## 🚀 Key Features

| Feature | Description |
|---|---|
| **Cinematic SVG Preloader** | Dynamic futsal pitch blueprint line drawing (`touchlines`, `center circle`, `penalty box arcs`) with logo scale burst and split-curtain transition in under 2.3 seconds. |
| **Multi-Layer Parallax Hero** | Kinetic typography with staggered entrance blur and tilt ("PLAY WITHOUT LIMITS."), mouse coordinate tracking on player silhouette via `gsap.quickTo`, and an interactive futsal ball. |
| **Hero Telemetry & Counters** | Animated live stats counter: `24/7 OPEN`, `4 PRO COURTS`, `120+ MATCHES / WEEK`. |
| **The Arena Showcase** | Smooth scroll clip-path reveal (`inset(15%)` $\to$ `inset(0%)`) with an athletic 6-amenity grid (Pro Turf, 1200 Lux LED, Lockers, Heated Showers, Energy Café, Parking). |
| **Tactical Court Experience** | Interactive 4-court switcher (**COURT 01** to **04**) with technical specifications, camera angle shifts, and illuminated SVG blueprint court lines. |
| **Speed of the Game (Special Animation)** | Scroll-scrubbed futsal ball with motion light trail triggering sequential keywords (**SPEED**, **CONTROL**, **PASSION**) and shot velocity telemetry (*124 KM/H*). |
| **Direct Booking Console** | Futuristic sports console: 7-day date selector, period filter (Pagi, Siang, Malam), interactive availability slot matrix, live price calculator, and modal receipt with celebration confetti. |
| **Match Packages & Pricing** | Dark glass cards with subtle border glow for **CASUAL** (Rp 100K/jam), **TEAM** (Rp 175K/jam - Most Popular), and **PRO** (Rp 250K/jam). |
| **Vortex Night Cup Tournament** | Official 16-team tournament showcase, total prize pool Rp 10.000.000, real-time kick-off countdown timer (Days, Hours, Minutes, Seconds), and team registration modal. |
| **Live Broadcast Scoreboard HUD** | Television sports graphics displaying `VORTEX FC 4 - 2 BLACK TIGERS`, match timer `01:32 (2ND HALF)`, ball possession (56% vs 44%), and shot statistics. |
| **Roster & Community Showcase** | Athlete roster cards with grayscale-to-color hover and jersey number scaling, accompanied by a horizontal scroll carousel of weekly community programs. |
| **Social Wall & Final Stadium CTA** | Masonry photo gallery with modal view and full-viewport stadium light activation effect with an expanding magnetic button. |

---

## 🎨 Design System & Palette

- **Obsidian Dark (Background)**: `#050505`
- **Pitch Surface**: `#0B0D0C`
- **Electric Green (Primary Accent)**: `#B6FF00`
- **Flame Orange (Secondary Accent)**: `#FF5A1F`
- **Stark White (Text)**: `#F5F5F2`
- **Muted Gray**: `#8A8A8A`
- **Display Typography**: *Bebas Neue*, *Space Grotesk*
- **Body Typography**: *Inter*

---

## 🛠️ Project Structure

```
vORTEX/
├── public/
│   └── favicon.svg             # Custom SVG brand favicon
├── src/
│   ├── animations/
│   │   ├── gsapConfig.ts       # GSAP & ScrollTrigger registration
│   │   └── magnetic.ts         # Magnetic button interaction helper
│   ├── components/
│   │   ├── Preloader.tsx       # Pitch line drawing SVG & split curtain
│   │   ├── CustomCursor.tsx    # Desktop custom cursor (VIEW / PLAYER / EXPLORE)
│   │   ├── GrainOverlay.tsx    # Subtle film grain noise
│   │   ├── Navbar.tsx          # Scroll-blur compact navbar & mobile drawer
│   │   ├── Hero.tsx            # Parallax hero, kinetic type, ball tracking
│   │   ├── Arena.tsx           # Clip-path scroll reveal & amenities
│   │   ├── CourtExperience.tsx # Tactical court switcher & pitch diagram
│   │   ├── SpeedSection.tsx    # Scroll ball trail & velocity section
│   │   ├── Booking.tsx         # Futuristic direct booking console
│   │   ├── Pricing.tsx         # Casual, Team, Pro match packages
│   │   ├── Tournament.tsx      # Tournament banner & realtime countdown
│   │   ├── MatchExperience.tsx # Live broadcast scoreboard HUD
│   │   ├── Players.tsx         # Athlete cards with hover color shift
│   │   ├── Community.tsx       # Horizontal scroll storytelling
│   │   ├── SocialWall.tsx      # Masonry gallery & modal viewer
│   │   ├── FinalCTA.tsx        # Stadium lights activation effect
│   │   ├── Footer.tsx          # Official brand footer & contacts
│   │   └── icons.tsx           # Clean custom SVG brand icons
│   ├── data/                   # Structured data (courts, players, slots, pricing)
│   ├── hooks/                  # useLenis, useMediaQuery, useReducedMotion
│   ├── types/                  # TypeScript interface definitions
│   ├── App.tsx                 # Root application
│   ├── main.tsx                # Entry mount point
│   └── index.css               # Design tokens, scrollbars, focus rings
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started

### Prerequisites
- Node.js (version 18.0 or higher recommended)
- npm, yarn, or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/vortex-futsal.git
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
Visit `http://localhost:5173/` in your browser.

### 4. Build for production
```bash
npm run build
```
Generates a minified, type-checked bundle in the `dist/` directory.

---

## 🌐 Deployment Guide

### Option 1: Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account.
2. Import the project into [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Option 2: Deploy to GitHub Pages
`vite.config.ts` is already pre-configured with `base: './'` for relative subpath resolution.
1. Build the production files:
   ```bash
   npm run build
   ```
2. You can deploy the `dist/` folder via GitHub Actions or the `gh-pages` package:
   ```bash
   npx gh-pages -d dist
   ```
3. In your repository on GitHub, go to **Settings > Pages** and choose **gh-pages** branch as the source.

---

## 📄 License

© 2026 VORTEX FUTSAL. All rights reserved.
