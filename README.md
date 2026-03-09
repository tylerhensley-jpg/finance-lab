# The Finance Lab — Homepage

A production-ready Next.js website for The Finance Lab, a 501(c)(3) nonprofit teaching students to invest and build wealth through experiential education.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Click Deploy — done!

## Project Structure

```
the-finance-lab/
├── app/
│   ├── globals.css        ← All CSS variables, animations, button styles
│   ├── layout.jsx         ← Root layout with fonts & metadata
│   └── page.jsx           ← Main page — assembles all sections
├── components/
│   ├── ui/
│   │   ├── useInView.js   ← Intersection Observer hook
│   │   ├── Reveal.jsx     ← Scroll-triggered reveal wrapper
│   │   └── AnimatedNumber.jsx ← Counting number animation
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProblemSection.jsx
│   ├── JourneySection.jsx
│   ├── TCPSection.jsx
│   ├── ScholarshipSection.jsx
│   ├── ToolsSection.jsx
│   ├── EducatorsSection.jsx
│   ├── ImpactSection.jsx
│   └── Footer.jsx
├── data/
│   └── content.js         ← All site text, stats, quotes in one file
├── tailwind.config.js     ← Custom colors & fonts for Tailwind
├── package.json
└── README.md
```

## Editing Content

All text, stats, quotes, milestones, and pricing live in **`data/content.js`**. Edit that single file to update anything on the site — no need to touch components.

## Colors

| Token       | Value     | Usage                              |
|-------------|-----------|-------------------------------------|
| navy        | `#0D1B2A` | Primary dark, hero, cards           |
| gold        | `#C8942A` | CTAs, accents, labels               |
| gold-light  | `#F0C96B` | Display numbers on dark backgrounds |
| teal        | `#1A7A6E` | College Project color               |
| teal-light  | `#2AA89A` | Teal on dark backgrounds            |
| cream       | `#FAF7F2` | Alternating section backgrounds     |
| warm-white  | `#FEFCF8` | Base page background                |
