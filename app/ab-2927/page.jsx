import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AB 2927 Alignment | The Finance Lab",
  description:
    "How The Launchpad maps to AB 2927, California's personal finance graduation requirement: every required topic in Ed Code 51284.5, matched to the modules that teach it.",
  openGraph: {
    title: "AB 2927 Alignment: The Launchpad",
    description:
      "California's required personal finance topics, mapped module by module to a free classroom curriculum built by a working CA teacher.",
    type: "website",
  },
};

const h2 = {
  fontSize: 24,
  fontWeight: 700,
  color: "var(--navy)",
  margin: "56px 0 16px",
};

const p = {
  fontSize: 17,
  lineHeight: 1.65,
  color: "var(--body-text)",
  marginBottom: 16,
};

// Each row: the required topic (paraphrased from Ed Code § 51284.5(a)),
// the statute subdivision, and where it lives in The Launchpad.
const CROSSWALK = [
  {
    n: 1,
    topic: "Fundamentals of banking: savings, checking, and managing to minimize fees",
    map: [
      { unit: "Banking & Saving", modules: "Where Does Money Live? · Your Banking Blueprint · Save Smarter" },
    ],
  },
  {
    n: 2,
    topic: "Principles of budgeting for independent living",
    map: [
      { unit: "Banking & Saving", modules: "Build a Budget That Runs Itself" },
      { unit: "The College Project", modules: "Real Costs" },
    ],
  },
  {
    n: 3,
    topic: "Employment and the factors that affect net income",
    map: [
      { unit: "Banking & Saving", modules: "Your First Paycheck" },
      { unit: "Taxes", modules: "How Taxes Work" },
    ],
  },
  {
    n: 4,
    topic: "Uses and effects of credit, including credit scores and the relation of debt and interest to credit",
    map: [
      { unit: "Credit & Debt", modules: "The Terms Decide · Your Score, Your Future · Credit Cards 101 · The Full Picture" },
    ],
  },
  {
    n: 5,
    topic: "Uses and costs of loans, including student loans and loan forgiveness policies",
    map: [
      { unit: "Credit & Debt", modules: "Borrowing for College · The Car Decision · The Biggest Loan You’ll Ever Take" },
      { unit: "The College Project", modules: "Aid Plan" },
    ],
  },
  {
    n: 6,
    topic: "Types and costs of insurance, including home, auto, health, and life",
    map: [
      { unit: "Insurance", modules: "What Is Insurance? · Health Insurance · The HSA Advantage · Your Other Insurance · Fight Your Bill" },
    ],
  },
  {
    n: 7,
    topic: "Impacts of the tax system: personal income, filing, and reading tax forms and pay stubs",
    map: [
      { unit: "Taxes", modules: "How Taxes Work · File Your Taxes (a guided filing simulation) · Tax Next Steps" },
      { unit: "Banking & Saving", modules: "Your First Paycheck" },
    ],
  },
  {
    n: 8,
    topic: "Principles of investing and building wealth: 401(k) plans, IRAs, stocks, bonds, mutual funds, and index funds",
    map: [
      { unit: "Investing", modules: "Why Invest? · Know Yourself · The Long Game · Accounts and Assets · Your First Move · Money in Motion" },
    ],
  },
  {
    n: 9,
    topic: "Consumer protection: common scams and frauds, and preventing identity theft",
    map: [
      { unit: "Credit & Debt", modules: "When Debt Is a Trap · Protect What You’ve Built" },
      { unit: "Insurance", modules: "Fight Your Bill" },
    ],
  },
  {
    n: 10,
    topic: "Financing college, workforce education, low-cost community college options, and CTE pathways or apprenticeships",
    map: [
      { unit: "The College Project", modules: "All nine modules, from All Paths Have Costs through Launch, including Cal Grant and CADAA" },
    ],
  },
  {
    n: 11,
    topic: "How psychology can impact financial well-being",
    map: [
      { unit: "Investing", modules: "Know Yourself" },
      { unit: "Wrapping Up (capstone)", modules: "The Big Things, where students write their own financial philosophy" },
    ],
  },
  {
    n: 12,
    topic: "Charitable giving",
    partial: true,
    map: [
      { unit: "Taxes", modules: "Appears briefly where donations meet deductions in How Taxes Work" },
    ],
  },
  {
    n: 13,
    topic: "Other topics directly and specifically relevant to personal finance",
    map: [
      { unit: "Credit & Debt", modules: "The Invisible Hand, on the Federal Reserve and why every rate changes" },
      { unit: "Wrapping Up (capstone)", modules: "Cross-unit synthesis of every decision students practiced" },
    ],
  },
];

export default function AB2927Page() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "var(--warm-white)", padding: "120px clamp(20px,5vw,40px) 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{
            fontSize: 13, fontWeight: 600, letterSpacing: 4,
            textTransform: "uppercase", color: "var(--teal)", marginBottom: 24,
          }}>
            For California Schools
          </p>

          <h1 className="font-display" style={{
            fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700,
            lineHeight: 1.08, letterSpacing: "-0.5px",
            color: "var(--navy)", marginBottom: 24,
          }}>
            AB 2927, mapped{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>module by module.</em>
          </h1>

          <p style={p}>
            AB 2927 makes personal finance a one-semester course that every California high
            school must offer starting in the 2027&ndash;28 school year, and a graduation
            requirement beginning with the class of 2031. The law spells out the topics the
            course must cover in Education Code Section 51284.5(a).
          </p>
          <p style={p}>
            Below is where each required topic lives in The Launchpad, our free classroom
            curriculum, so your department can evaluate coverage against the statute itself
            rather than a brochure.
          </p>

          {/* ── KEY DATES ── */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, margin: "40px 0 8px" }}>
            {[
              { big: "2027–28", small: "Every CA high school must offer the one-semester course" },
              { big: "Class of 2031", small: "First class required to pass it to graduate" },
            ].map((d) => (
              <div key={d.big} style={{
                flex: "1 1 260px", background: "#fff",
                border: "1px solid var(--soft-gray)", borderRadius: 12,
                padding: "20px 24px",
              }}>
                <div className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)" }}>{d.big}</div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--body-text)", marginTop: 4 }}>{d.small}</div>
              </div>
            ))}
          </div>

          {/* ── CROSSWALK ── */}
          <h2 className="font-display" style={h2}>The thirteen required topics</h2>
          <p style={p}>
            Topic language is condensed from the statute; each row cites its subdivision of
            Section 51284.5(a) so you can check our summary against the full text.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
            {CROSSWALK.map((row) => (
              <div key={row.n} style={{
                background: "#fff",
                border: "1px solid var(--soft-gray)",
                borderRadius: 12,
                padding: "20px 24px",
              }}>
                <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                  <span className="font-display" style={{
                    fontSize: 17, fontWeight: 700, color: "var(--teal)",
                    flexShrink: 0, minWidth: 26,
                  }}>
                    {row.n}
                  </span>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.45, color: "var(--navy)" }}>
                      {row.topic}
                      <span style={{ fontWeight: 500, fontSize: 13, color: "var(--body-text)", opacity: 0.7 }}>
                        {" "}&sect; 51284.5(a)({row.n})
                      </span>
                    </div>
                    {row.map.map((m) => (
                      <div key={m.unit} style={{ fontSize: 13, lineHeight: 1.6, color: "var(--body-text)", marginTop: 8 }}>
                        <span style={{ fontWeight: 700, color: "var(--navy)" }}>{m.unit}:</span> {m.modules}
                      </div>
                    ))}
                    {row.partial && (
                      <div style={{
                        fontSize: 13, lineHeight: 1.6, color: "var(--body-text)",
                        marginTop: 10, paddingTop: 10, borderTop: "1px dashed var(--soft-gray)",
                      }}>
                        Honest note: this is the one required topic The Launchpad does not yet
                        cover in depth. We would rather tell you that plainly than pad the
                        table, and most teachers pair it with a class discussion or advisory
                        lesson of their own.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── HOW TO USE ── */}
          <h2 className="font-display" style={h2}>How to use this page</h2>
          <p style={p}>
            There is no state-approved vendor list for AB 2927; choosing course materials is a
            local decision. This page exists to make that evaluation fast. Send it to your
            department chair or district curriculum lead, open the statute next to it, and
            check our work.
          </p>
          <p style={p}>
            The Launchpad is free for every teacher and student, built and taught daily by a
            working California classroom teacher. You can preview the full teacher experience
            with no signup and no email.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "28px 0 8px" }}>
            <a href="https://learn.thefinancelab.co/teacher?guest=1" target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ padding: "12px 24px", fontSize: 14, fontWeight: 600 }}>
              Preview the teacher demo
            </a>
            <a href="https://learn.thefinancelab.co" target="_blank" rel="noopener noreferrer" className="btn-outline-navy" style={{ padding: "12px 24px", fontSize: 14, fontWeight: 600 }}>
              Access The Launchpad
            </a>
          </div>

          <p style={{ ...p, fontSize: 13, opacity: 0.7, marginTop: 32 }}>
            Full statutory text:{" "}
            <a
              href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=EDC&sectionNum=51284.5."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--teal)", fontWeight: 600, textDecoration: "none" }}
            >
              California Education Code &sect; 51284.5
            </a>
            . Questions about alignment or district evaluation? Write to{" "}
            <a href="mailto:team@thefinancelab.co" style={{ color: "var(--teal)", fontWeight: 600, textDecoration: "none" }}>
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
