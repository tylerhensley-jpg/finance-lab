import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The College Project: Choose Your Format | The Finance Lab",
  description:
    "One project, six formats: the workbook, the Launchpad unit, the free self-paced app, one-period lessons on paper or laptops, and take-home family resources. Pick by the time and setting you have.",
  openGraph: {
    title: "The College Project: Choose Your Format",
    description:
      "Every format teaches the same project: find a college that fits and know you can afford it before you commit. Pick by the time and setting you have.",
    type: "website",
  },
};

const FORMATS = [
  {
    tag: "Paper · Full Course",
    tagColor: "var(--gold)",
    name: "The Workbook + Teacher's Guide",
    body: "A 202-page hands-on workbook (The College Project, 5th edition): students build a Money Map, a Running List, a Decision Dashboard, and leave with My Plan. The free Teacher's Guide adds 9-week and 18-week pacing, chapter-by-chapter lesson flows, and a grading rubric.",
    meta: "Time: a quarter or a semester · Tech: none",
    bestFor: "A dedicated college unit in AVID, advisory, economics, or English; classrooms that want everything on paper.",
    links: [
      { label: "About the book →", href: "/#tcp" },
      { label: "Free Teacher's Guide →", href: "/guide" },
    ],
  },
  {
    tag: "Digital · In Your Course",
    tagColor: "var(--teal)",
    name: "The Launchpad College Project Unit",
    body: "Nine interactive modules (about 20 to 25 minutes each) with live net-price and outcomes data, reflection checks, shareable cards, and a teacher dashboard that shows you what your class actually understands. Part of The Launchpad, the full personal finance curriculum by The Finance Lab.",
    meta: "Time: about three weeks of class periods · Tech: student laptops",
    bestFor: "Personal finance teachers who want the college decision taught inside their course.",
    links: [{ label: "learn.thefinancelab.co →", href: "https://learn.thefinancelab.co" }],
  },
  {
    tag: "Digital · Self-Paced",
    tagColor: "var(--teal)",
    name: "The College Project App",
    body: "Free, no accounts, no logins. Two journeys: The Full Playbook, seven Levels from “Who am I?” to “Here's my plan” (20 to 40 minutes each), or Year by Year, two short check-ins per year from 9th through 12th grade. Students leave with My Plan and email it to up to three people they choose. Everything stays on the student's device.",
    meta: "Time: self-paced; a Level fits in one sitting · Tech: any browser",
    bestFor: "Counselors, advisory programs, and students or families working on their own.",
    links: [{ label: "college.thefinancelab.co →", href: "https://college.thefinancelab.co" }],
  },
  {
    tag: "One Period · Paper",
    tagColor: "var(--gold)",
    name: "The One Hour",
    body: "The College Project One Hour student handout with a facilitation guide: a condensed 60-minute version of the project's core moves.",
    meta: "Time: one class period · Tech: none",
    bestFor: "A single seminar, assembly follow-up, or sub day with no devices.",
    links: [{ label: "In the Launchpad teacher Resources tab →", href: "https://learn.thefinancelab.co" }],
  },
  {
    tag: "One Period · Digital",
    tagColor: "var(--teal)",
    name: "Real Takes",
    body: "Three 10-to-12-minute interactives, each with a matching print version: Sticker Price vs. Real Price (net-price myth-buster), FAFSA: Myth or Must (sort beliefs, leave with a checklist), and The Three Piles (decode award letters: free, earned, borrowed).",
    meta: "Time: one class period or less · Tech: laptops, or the print versions",
    bestFor: "Warm-ups, closers, or a one-period guest lesson.",
    links: [{ label: "Assignable in The Launchpad →", href: "https://learn.thefinancelab.co" }],
  },
  {
    tag: "For Home",
    tagColor: "var(--gold)",
    name: "Parent Calendars + Family Letter",
    body: "Grade-by-grade parent calendars (9th through 12th, phone-importable and printable) and a one-page letter home in English and Spanish.",
    meta: "Time: five minutes to share · Tech: none",
    bestFor: "Back-to-school night, counselor newsletters, family nights.",
    links: [{ label: "Download the family resources →", href: "/family" }],
  },
];

const MAP_ROWS = [
  ["Decide it is worth deciding", "Before You Start, Ch 1", "Why This Matters", "Level 0"],
  ["Know yourself: careers, majors, interests", "Ch 2–3", "Who You Are", "Level 1"],
  ["See the real price (sticker vs. net)", "Ch 6, 9", "Real Costs", "Level 2"],
  ["Check the payoff: grad rates, earnings, debt", "Ch 7–8", "Outcomes", "Level 3"],
  ["All paths: community college, transfer, trades", "Ch 10", "All Paths Have Costs", "Level 2 + explorers"],
  ["The aid plan: FAFSA, CADAA, scholarships", "Ch 6, 12–13", "Aid Plan + FAFSA Real Take", "Level 4"],
  ["Borrow wisely", "Ch 14", "Aid Plan + Outcomes", "Level 4"],
  ["Build your balanced list (Focus Schools)", "Ch 4–5", "Final Three", "Level 5"],
  ["The timeline: every deadline on your calendar", "Junior/Senior checklists", "Timeline", "Level 6"],
  ["Read award letters (the Three Piles)", "Ch 15", "The Three Piles Real Take", "Year by Year, 12th"],
  ["Choose, commit, don't disappear over summer", "Ch 17–18", "Launch", "Level 7"],
];

const IF_YOU_HAVE = [
  ["One class period and no devices", "The One Hour."],
  ["One class period and laptops", "A Real Take."],
  ["Three weeks inside a personal finance course", "The Launchpad unit."],
  ["A quarter or a semester", "The workbook, with the app as its digital companion."],
  ["An advisory program or a counseling caseload", "The app, Year by Year."],
  ["Five minutes at back-to-school night", "The parent calendar and the family letter."],
];

export default function CollegeProjectFormatsPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "var(--warm-white)", padding: "120px clamp(20px,5vw,40px) 80px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p
            
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: 24,
            }}
          >
            For Teachers, Counselors &amp; Families
          </p>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.5px",
              color: "var(--navy)",
              marginBottom: 24,
            }}
          >
            One project. <em style={{ fontStyle: "italic", color: "var(--teal)" }}>Pick your format.</em>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 64, maxWidth: 720 }}>
            The College Project teaches one decision: finding a college that fits and knowing you
            can afford it before you commit. Every format below teaches that same project with the
            same data and the same voice. They differ in time, setting, and paper versus screen.
            Pick by what you have.
          </p>

          {/* ── THE SIX FORMATS ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20, marginBottom: 72 }}>
            {FORMATS.map((f) => (
              <div
                key={f.name}
                style={{
                  background: "#fff",
                  border: "1px solid var(--soft-gray)",
                  borderRadius: 16,
                  padding: "28px 28px 24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: f.tagColor,
                    marginBottom: 10,
                  }}
                >
                  {f.tag}
                </p>
                <h2 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>
                  {f.name}
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 14 }}>{f.body}</p>
                <p style={{ fontSize: 13, color: "#9CA3AF", letterSpacing: 0.3, marginBottom: 10 }}>
                  {f.meta}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--body-text)", marginBottom: 18 }}>
                  <strong style={{ color: "var(--navy)" }}>Best for:</strong> {f.bestFor}
                </p>
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 6 }}>
                  {f.links.map((l) => (
                    <a
                      key={l.href + l.label}
                      href={l.href}
                      style={{ fontSize: 17, fontWeight: 700, color: "var(--teal)", textDecoration: "none" }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── IF YOU HAVE ── */}
          <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "var(--navy)", marginBottom: 24 }}>
            If you have&hellip;
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 72 }}>
            {IF_YOU_HAVE.map(([have, use]) => (
              <div
                key={have}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px 12px",
                  alignItems: "baseline",
                  padding: "16px 22px",
                  background: "#fff",
                  border: "1px solid var(--soft-gray)",
                  borderRadius: 12,
                }}
              >
                <span style={{ fontSize: 17, color: "var(--body-text)" }}>{have}:</span>
                <span style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)" }}>{use}</span>
              </div>
            ))}
          </div>

          {/* ── THE MAP ── */}
          <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>
            What&apos;s covered where
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 24, maxWidth: 720 }}>
            The formats mix well. Many classrooms run the workbook and send students to the app for
            the live data, or run the Launchpad unit and use the print Real Takes on no-device days.
          </p>

          <div style={{ overflowX: "auto", border: "1px solid var(--soft-gray)", borderRadius: 12, marginBottom: 24 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640, background: "#fff" }}>
              <thead>
                <tr style={{ background: "var(--navy)" }}>
                  {["The goal", "Workbook", "Launchpad unit", "The app"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MAP_ROWS.map((row, i) => (
                  <tr key={row[0]} style={{ borderTop: i > 0 ? "1px solid var(--soft-gray)" : "none" }}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "12px 16px",
                          fontSize: 13,
                          lineHeight: 1.5,
                          color: j === 0 ? "var(--navy)" : "var(--body-text)",
                          fontWeight: j === 0 ? 600 : 400,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 13, lineHeight: 1.6, color: "#9CA3AF" }}>
            Questions about which format fits your setting? Email{" "}
            <a href="mailto:team@thefinancelab.co" style={{ color: "var(--teal)", textDecoration: "underline" }}>
              team@thefinancelab.co
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
