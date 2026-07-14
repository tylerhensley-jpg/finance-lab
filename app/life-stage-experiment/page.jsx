import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Life Stage Experiment | The Finance Lab",
  description:
    "A one-period assignment for the Life Stage Calculator: students run four experiments, then build and defend a life-shaped investing plan, stage by stage.",
  openGraph: {
    title: "The Life Stage Experiment",
    description:
      "Students discover why time beats contribution size, then defend their own earnings and risk assumptions at every stage of life.",
    type: "website",
  },
};

const RUNS = [
  {
    n: "Run 1",
    title: "The default path",
    steps: [
      "Press nothing. Just read the results and record:",
    ],
    blanks: [
      "Total contributed: $",
      "Final balance: $",
      "Growth (balance minus contributed): $",
      "How far off was your guess?",
    ],
  },
  {
    n: "Run 2",
    title: "The late start",
    steps: [
      "Set the first two stages (Teen/Student and First Job) to $0 a month. Leave everything else alone.",
    ],
    blanks: [
      "New final balance: $",
      "How much money did those two stages actually contribute in Run 1? (Hint: $25 a month for 4 years, then $200 a month for 5 years.) $",
      "How much did skipping them cost the final balance? $",
    ],
  },
  {
    n: "Run 3",
    title: "The early bird",
    steps: [
      "Reset, then double the Teen/Student stage to $50 a month and cut every later stage in half.",
    ],
    blanks: [
      "Total contributed: $",
      "Final balance: $",
      "Compare to Run 1: who invested more money, and who ended with more?",
    ],
  },
];

const STAGES = ["Teen/Student", "First Job", "Career Growth", "Peak Earning", "Pre-Retirement"];

const REFLECT = [
  "Which single change moved the final number the most? Why do you think that is?",
  "The curve bends upward instead of climbing in a straight line. Explain why, in your own words.",
  "Look back at your defended plan. Which of your assumptions is most likely to turn out differently, and what could you do about it?",
];

function Blank({ width = 180 }) {
  return <span style={{ display: "inline-block", width, borderBottom: "1.5px solid var(--mid-gray)", height: 18, verticalAlign: "bottom" }} />;
}

export default function LifeStageExperimentPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "var(--warm-white)", padding: "120px clamp(20px,5vw,40px) 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{
            fontSize: 13, fontWeight: 600, letterSpacing: 4,
            textTransform: "uppercase", color: "var(--teal)", marginBottom: 24,
          }}>
            Classroom Assignment · Print or Assign
          </p>

          <h1 className="font-display" style={{
            fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700,
            lineHeight: 1.08, letterSpacing: "-0.5px",
            color: "var(--navy)", marginBottom: 24,
          }}>
            The Life Stage <em style={{ fontStyle: "italic", color: "var(--teal)" }}>Experiment</em>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 12 }}>
            Ordinary compound interest calculators assume you invest the same amount at the same
            return for forty years. Real life does not work that way: what you can invest at 22 and
            at 52 are different numbers, and the risk you can afford changes with your
            responsibilities and your time horizon. The{" "}
            <a href="/#calculator" style={{ color: "var(--teal)", fontWeight: 700, textDecoration: "none" }}>
              Life Stage Calculator
            </a>{" "}
            models five stages of a working life, and every stage is yours to change.
          </p>

          <p style={{ fontSize: 13, color: "var(--mid-gray)", letterSpacing: 0.5, marginBottom: 48 }}>
            Laptop required · Works as a single-period lesson · Print this page for the write-in version
          </p>

          {/* ── PREDICTIONS ── */}
          <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 14 }}>
            Before you touch anything: two predictions
          </h2>
          <div style={{ background: "#fff", border: "1px solid var(--soft-gray)", borderRadius: 12, padding: "22px 26px", marginBottom: 40 }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 14 }}>
              1. The default plan invests a total of about $529,000 across 44 years. Write down
              your guess: what is it worth at the end?&nbsp;&nbsp;My guess: $<Blank width={140} />
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", margin: 0 }}>
              2. Which stage do you think matters most to the final number: the teen years
              ($25 a month) or the peak earning years ($1,200 a month)?&nbsp;&nbsp;<Blank width={220} />
            </p>
          </div>

          {/* ── RUNS 1-3 ── */}
          {RUNS.map((run) => (
            <div key={run.n} style={{ background: "#fff", border: "1px solid var(--soft-gray)", borderRadius: 12, padding: "22px 26px", marginBottom: 20 }}>
              <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>
                {run.n}: {run.title}
              </h2>
              {run.steps.map((s) => (
                <p key={s} style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 12 }}>{s}</p>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {run.blanks.map((b) => (
                  <p key={b} style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", margin: 0 }}>
                    {b} <Blank />
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* ── RUN 4: THE DEFENDED PLAN ── */}
          <div style={{ background: "#fff", border: "1px solid var(--soft-gray)", borderTop: "4px solid var(--gold)", borderRadius: 12, padding: "22px 26px", marginBottom: 40 }}>
            <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>
              Run 4: Your plan, defended
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 8 }}>
              This is the real assignment. Set every stage to numbers you actually believe about
              your own life, then defend each one. For every stage, justify two things:
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 18 }}>
              <strong style={{ color: "var(--navy)" }}>The monthly amount</strong>: what will you
              likely earn at that age, what will life cost (rent, family, everything), and what
              does that leave to invest?{" "}
              <strong style={{ color: "var(--navy)" }}>The return rate</strong>: how much risk fits
              that stage of your life, given your responsibilities and how long the money has to
              recover from a bad year?
            </p>

            <div style={{ overflowX: "auto", border: "1px solid var(--soft-gray)", borderRadius: 10, marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640, background: "#fff" }}>
                <thead>
                  <tr style={{ background: "var(--navy)" }}>
                    {["Stage", "$ / month", "Return %", "Why this amount (earnings, costs, life)", "Why this risk (responsibilities, time horizon)"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {STAGES.map((s, i) => (
                    <tr key={s} style={{ borderTop: i > 0 ? "1px solid var(--soft-gray)" : "none" }}>
                      <td style={{ padding: "16px 12px", fontSize: 13, fontWeight: 700, color: "var(--navy)", whiteSpace: "nowrap" }}>{s}</td>
                      <td style={{ padding: "16px 12px" }}><Blank width={64} /></td>
                      <td style={{ padding: "16px 12px" }}><Blank width={48} /></td>
                      <td style={{ padding: "16px 12px" }}><Blank width={200} /></td>
                      <td style={{ padding: "16px 12px" }}><Blank width={200} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", margin: 0 }}>
              My total contributed: $<Blank width={120} />&nbsp;&nbsp;&nbsp;My final balance: $<Blank width={120} />
            </p>
          </div>

          {/* ── REFLECT ── */}
          <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 14 }}>
            Reflect
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
            {REFLECT.map((q, i) => (
              <div key={q} style={{ background: "#fff", border: "1px solid var(--soft-gray)", borderRadius: 12, padding: "18px 24px" }}>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 10 }}>
                  {i + 1}. {q}
                </p>
                <Blank width={640} />
                <div style={{ height: 10 }} />
                <Blank width={640} />
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13, color: "var(--mid-gray)", lineHeight: 1.6, fontStyle: "italic", marginBottom: 56 }}>
            The calculator&apos;s return rates are assumptions, not promises. All investments involve
            some form of risk, and past performance does not predict future returns.
          </p>

          {/* ── TEACHER NOTES ── */}
          <div style={{ border: "1px solid var(--soft-gray)", borderTop: "4px solid var(--teal)", borderRadius: 16, padding: "32px clamp(24px, 4vw, 40px)", background: "#fff" }}>
            <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 14 }}>
              Teacher notes
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 14 }}>
              <strong style={{ color: "var(--navy)" }}>The big idea.</strong> Time in the market
              beats size of contribution, and a real plan changes shape with life. Students
              discover both by breaking the calculator, not by being told. Runs 1 through 3 build
              the intuition; Run 4 is the assessment: a defended, life-shaped plan.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 14 }}>
              <strong style={{ color: "var(--navy)" }}>Numbers for the board</strong> (calculator
              defaults): Run 1 turns $529,200 contributed into about $2,115,000; growth alone is
              about $1,586,000, so the money made roughly three times more than the person. Run 2
              skips only $13,200 of early contributions but ends about $292,000 lower: every
              skipped dollar would have been worth about 22. Run 3 contributes about half of Run 1
              ($266,400) and still ends above $1.1 million.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 14 }}>
              <strong style={{ color: "var(--navy)" }}>What to listen for in Run 4.</strong> The
              defense matters more than the numbers. Strong answers connect the monthly amount to a
              believable income and cost of living for that age, and connect the return rate to
              risk: a 22-year-old with decades of recovery time can reasonably hold riskier assets
              than a 58-year-old five years from needing the money. Push back gently on plans where
              risk rises with age, or where a teen invests more than a plausible paycheck allows.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 14 }}>
              <strong style={{ color: "var(--navy)" }}>Common misconceptions.</strong> "The big
              late contributions matter most" (Run 2 is the rebuttal: early dollars have the most
              time to compound). "Growth is linear" (the bending-curve reflection is the check;
              listen for "the growth earns growth"). "These numbers are guaranteed" (they are not,
              and the note on the student page says so; it is worth saying out loud).
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", margin: 0 }}>
              <strong style={{ color: "var(--navy)" }}>Grading.</strong> Grade the thinking, never
              the plan. Complete recorded runs, a defense for every stage, and honest reflections
              is full credit; the actual dollar amounts in a student&apos;s plan are their own
              business.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
