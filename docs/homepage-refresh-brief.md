# Homepage Refresh Brief — thefinancelab.co

**Scratch brief for a build session. Not for commit to `main` as-is.** Written 2026-07-09.
Repo: `finance-lab-website` (Next.js 14 App Router, JSX, inline-style objects, no Tailwind in components).
Homepage assembles section components in `app/page.jsx`. All copy/data lives in `data/content.js`.
Color/button classes in `app/globals.css`: `btn-teal`, `btn-outline-navy`, `btn-gold`, `btn-outline-white`;
vars `--navy`, `--teal`, `--teal-light`, `--gold`, `--gold-light`, `--warm-white`, `--cream`, `--soft-gray`, `--body-text`.

## Goals (from Tyler)
1. Prominent link to `/guide` (the free Teacher's Guide) for teachers considering The College Project.
2. Clear "email us to bulk order" path (`team@thefinancelab.co`).
3. Refresh The College Project section with 5th-edition language, the new cover image, and a short chapter preview.
4. Surface the **Life Stage compounding calculator** (currently buried in Catalyst) somewhere easy on the homepage.
5. Add a big, well-highlighted section describing **The Launchpad** (the flagship classroom curriculum) as a free resource.

---

## 1. Prominent `/guide` link

`/guide` already exists (`app/guide/page.jsx`) and is good. It's currently only reachable via one small underlined link at the bottom of `EducatorsSection`. Make it obvious:

- **Navbar:** add `{ label: "Teacher's Guide", href: "/guide" }` to `NAV_LINKS` in `data/content.js`. (Navbar already resolves non-hash hrefs correctly.)
- **TCPSection:** add a third button/link in the button row — `<a href="/guide" className="btn-outline-navy">Free Teacher's Guide →</a>`.
- **Footer:** `/guide` will appear in the footer automatically once it's in `NAV_LINKS`.
- Keep the existing "Want to preview it first? Download the free Teacher's Guide →" link in EducatorsSection.

## 2. Bulk-order email path

`mailto:team@thefinancelab.co` links already exist in EducatorsSection ("Request a Free Copy" / "Contact Us to Order"). Make bulk-ordering explicit:

- Add a clear CTA with a pre-filled subject:
  `mailto:team@thefinancelab.co?subject=Bulk%20order%20%E2%80%94%20The%20College%20Project&body=School%2FDistrict%3A%0AApprox%20quantity%3A%0AGrade%20level(s)%3A%0A`
- Place it (a) in the TCPSection button row, and (b) near the EducatorsSection pricing table with a line like "Ordering 25+ copies? Email us and we'll set it up." The pricing table (`PRICING` in content.js) already documents Scholarship/Discounted/100+ tiers — keep it.

## 3. The College Project section refresh (`components/TCPSection.jsx` + `data/content.js`)

**New language (from the 5th-edition KDP listing + cover — use verbatim where useful):**
- Edition / recency: **"Fifth Edition · Updated for the 2026–27 school year."**
- Cover tagline: **"Find Your Fit. Afford Your Future."**
- Back-cover headline: **"The full picture, finally in your hands."**
- Positioning line: *"Most college-prep books cover finding a fit, or paying for it. Rarely both. The College Project treats them as one decision, because they are."*
- The four pillars (use as an icon/checklist row):
  - **Find Your Fit** — explore majors and careers, visit schools, and build a list that's actually yours.
  - **Run the Real Numbers** — free money, net price, red flags, and the FAFSA and CSS Profile, in plain language.
  - **Make Your Move** — applications, award letters, and student loans, so you can compare offers side by side.
  - **Finish What You Started** — a junior and senior year checklist and calendar so nothing falls through the cracks.
- Built-and-tested credibility: *"Built and classroom-tested by a former wealth manager turned high school teacher. Every worksheet has already been used by real students choosing real colleges."*
- Artifacts students build: **Money Map, Running List, Decision Dashboard.**
- Nonprofit line: *"Every dollar of proceeds funds scholarships and financial-literacy programming."*

**FIX STALE FACTS (verify, then correct everywhere):** current site says "22 chapters. 216 pages" and FEATURES says "all 22 chapters." The 5th edition is **4 parts · 19 chapters · 202-page workbook** (cover + KDP listing + `/guide` all say 19 chapters). Update the subtitle in TCPSection and the "Modular design" FEATURE in content.js from 22 → 19 chapters and 216 → 202 pages.

**Cover image:** already placed at `public/images/college-project-cover.png` (front cover, 900×1182, patchwork-backpack art). Add it to the section — e.g. a two-column layout: cover image left, copy + pillars right, or cover floated beside the headline. Add `alt="The College Project, Fifth Edition — cover"`.

**Chapter preview (pick: Chapter 6, "Free Money"):** it's the most compelling teaser — a myth-buster with a real data point. Render a short styled "A look inside" card quoting:
> "You've probably heard that the total cost of college has grown sharply over the past decade. Here is what fewer people hear: financial aid grew even faster. Measure what students actually pay after grant aid — the net tuition — and the trend points **down.** Net tuition at a public 4-year is about **\$2,480 today, down 41% from its 2012–13 peak.**"
> — *Chapter 6, "Free Money"*
(Source: `FL-Curriculum/college-project/chapters/06-free-money.md`. Numbers are from the book; keep them verbatim. Optionally also offer Ch.1 "It's Your Decision" as an alternate — Tyler can swap.)

## 4. Life Stage compounding calculator on the homepage

Source lives in `public/catalyst.html` (search "Life Stage Growth Calculator", markup ~line 1530, JS `calcLifeStage()` ~line 2288). **Reimplement as a self-contained React client component** `components/LifeStageCalculator.jsx` (no Chart.js dependency — render an SVG/`<canvas>` growth curve or a simple stacked bar of contributions vs. growth). Add it to `app/page.jsx` as its own section (suggest: right after `ToolsSection`, id `#calculator`), and add a "Compounding Calculator" entry to `NAV_LINKS` or the Free Tools grid so it's discoverable.

**Exact math to preserve (verified against the Catalyst source — monthly compounding, ordinary annuity, contributions at end of month):**
```
Five life stages, each with { monthly $, years, annual return % }. Defaults:
  🎒 Teen/Student    $25/mo   × 4yr  @ 10%
  🎓 First Job       $200/mo  × 5yr  @ 10%
  📈 Career Growth   $500/mo  × 10yr @ 9%
  💼 Peak Earning    $1200/mo × 15yr @ 8%
  🏡 Pre-Retirement  $2000/mo × 10yr @ 7%

balance = 0; totalContrib = 0
for each stage:
    mr = (annualReturnPct/100) / 12          // monthly rate
    for each of (years*12) months:
        balance = balance * (1 + mr) + monthly
        totalContrib += monthly
growthEarned = balance - totalContrib
```
Show: final balance, total contributed, compound growth added, and a per-stage breakdown (+$ each stage added). Keep inputs editable (number fields). Return rates decline with age on purpose — include the one-line "Why do returns change?" note from the source (young = mostly stocks ~10%, older = shift to bonds for safety). Keep the light/warm styling consistent with the site (navy/teal/gold), not Catalyst's forest/terra palette.

## 5. The Launchpad — new highlighted resource section

Build a prominent new section (`components/LaunchpadSection.jsx`, add to `app/page.jsx`; suggest placing after TCPSection or after ScholarshipSection so the flagship gets real estate). This is the **flagship classroom curriculum** — treat it as a hero-weight block, not a small card.

**Brand (from `FL-Launchpad/docs/brand/brand-architecture.md`):**
- Name: **The Launchpad** — lockup subtext **"by The Finance Lab"** (The Finance Lab = the nonprofit only, never the product).
- Tagline: **"Gaining velocity for life after high school."**
- Accent: deep teal. Audience: core personal-finance curriculum for high school (11th–12th flagship focus).

**What it is / why it's unique (benefits to feature):**
- A complete, **free** classroom curriculum delivered as a web app — six units: **Banking & Saving, Investing, Credit & Debt, Taxes, Insurance, and The College Project.**
- **Teacher dashboard** with live, class-level outcomes and analytics; deletion-proof all-time impact data; CSV export; standards alignment and pacing guides.
- **"Real Takes"** — short, misconception-busting decision activities (e.g. rank-the-debt, "Do you even have to file?"), each shipping in both **digital and print/paper** modes.
- **California-specific throughout** (Cal Grant, CADAA, CalKIDS, CA Dream Act) and built as an adoption path for **AB 2927** (CA's personal-finance graduation requirement, effective 2027).
- **No bank sponsorships, no enrollment funnels** — nonprofit-built; all proceeds fund scholarships.
- **Built by a working CA classroom teacher** who is also the sole developer — designed teacher-first, not vendor-first.
- Free **guest/demo mode** lets a teacher browse a full sample class with no signup.

**CTAs:** "Explore The Launchpad" (primary) and "Preview the teacher demo" (guest mode). **⚠️ OPEN — needs Tyler:** confirm the public URLs. The College Project companion app is `college.thefinancelab.co`; the guest demo path is `/teacher?guest=1` but the Launchpad's public domain (e.g. `launchpad.thefinancelab.co` / `app.thefinancelab.co`) is **not confirmed in the repo** — do not guess; ask Tyler for the live link(s) before wiring the buttons.

---

## Open questions to confirm with Tyler before/while building
1. **Launchpad public URL(s)** — main app link + guest-demo link. (Blocker for section 5 CTAs.)
2. **Chapter/page counts** — confirm 19 chapters / 202 pages / "4 parts" is what to display (replacing 22 / 216).
3. **Chapter preview choice** — Ch.6 "Free Money" (recommended) vs Ch.1 "It's Your Decision".
4. **Calculator placement** — dedicated homepage section (recommended) vs a `/calculator` route linked from nav.
5. **Section order** — where the Launchpad block sits relative to The College Project and Scholarship sections.

## Assets already staged
- `public/images/college-project-cover.png` — front cover, web-optimized (900×1182).
- (If a chapter-preview page image is wanted instead of a text pull-quote, render from `FL-Curriculum/college-project`.)
