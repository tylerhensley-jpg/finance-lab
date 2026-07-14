import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Family Resources | The Finance Lab",
  description:
    "Free family resources for the college journey: grade-by-grade parent calendars (printable and phone-importable) and a student deadline calendar.",
  openGraph: {
    title: "Family Resources: The College Project",
    description:
      "Grade-by-grade parent calendars and a student deadline calendar. Import every college deadline to your phone in one tap.",
    type: "website",
  },
};

const PARENT_CALENDARS = [
  { grade: "9th Grade", note: "Plant the seed: low-stakes exploring, no pressure.", pdf: "/downloads/family/parent_calendar_9th.pdf", ics: "/downloads/family/parent_calendar_9th.ics" },
  { grade: "10th Grade", note: "Explore the map: visits, options, and honest costs.", pdf: "/downloads/family/parent_calendar_10th.pdf", ics: "/downloads/family/parent_calendar_10th.ics" },
  { grade: "11th Grade", note: "Build the plan: outcomes, aid, and a balanced list.", pdf: "/downloads/family/parent_calendar_11th.pdf", ics: "/downloads/family/parent_calendar_11th.ics" },
  { grade: "12th Grade", note: "Execute: applications, FAFSA, award letters, decision.", pdf: "/downloads/family/parent_calendar_12th.pdf", ics: "/downloads/family/parent_calendar_12th.ics" },
];

export default function FamilyPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "var(--warm-white)", padding: "120px clamp(20px,5vw,40px) 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{
            fontSize: 13, fontWeight: 600, letterSpacing: 4,
            textTransform: "uppercase", color: "var(--teal)", marginBottom: 24,
          }}>
            Free Family Resources
          </p>

          <h1 className="font-display" style={{
            fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700,
            lineHeight: 1.08, letterSpacing: "-0.5px",
            color: "var(--navy)", marginBottom: 24,
          }}>
            The college journey,{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>on your calendar.</em>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 48 }}>
            Grade-by-grade calendars for families: what is happening this year, what actually
            matters, and every real deadline. Print the PDF for the fridge, or tap the calendar
            file on your phone to import every date with reminders built in.
          </p>

          {/* ── PARENT CALENDARS ── */}
          <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 24 }}>
            Parent calendars
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 56 }}>
            {PARENT_CALENDARS.map((c) => (
              <div key={c.grade} style={{
                display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14,
                padding: "20px 24px", background: "#fff",
                border: "1px solid var(--soft-gray)", borderRadius: 12,
              }}>
                <div style={{ flex: "1 1 260px" }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)" }}>{c.grade}</div>
                  <div style={{ fontSize: 13, color: "var(--body-text)", marginTop: 3 }}>{c.note}</div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a href={c.pdf} target="_blank" rel="noopener noreferrer" className="btn-outline-navy" style={{ padding: "10px 20px", fontSize: 13, fontWeight: 600 }}>
                    Print (PDF)
                  </a>
                  <a href={c.ics} className="btn-teal" style={{ padding: "10px 20px", fontSize: 13, fontWeight: 600 }}>
                    Add to Phone
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── STUDENT CALENDAR ── */}
          <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 16 }}>
            Student deadline calendar
          </h2>
          <div style={{
            display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14,
            padding: "20px 24px", background: "#fff",
            border: "1px solid var(--soft-gray)", borderRadius: 12, marginBottom: 56,
          }}>
            <div style={{ flex: "1 1 260px" }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)" }}>Every senior-year deadline</div>
              <div style={{ fontSize: 13, color: "var(--body-text)", marginTop: 3 }}>
                FAFSA opening day, UC and CSU applications, Cal Grant, and Decision Day, with reminders.
              </div>
            </div>
            <a href="/downloads/family/student_calendar.ics" className="btn-teal" style={{ padding: "10px 20px", fontSize: 13, fontWeight: 600 }}>
              Add to Phone
            </a>
          </div>

          {/* ── FAMILY LETTER ── */}
          <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 16 }}>
            The Family Letter
          </h2>
          <div style={{
            display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14,
            padding: "20px 24px", background: "#fff",
            border: "1px solid var(--soft-gray)", borderRadius: 12, marginBottom: 56,
          }}>
            <div style={{ flex: "1 1 260px" }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)" }}>Fall Edition · English and Spanish</div>
              <div style={{ fontSize: 13, color: "var(--body-text)", marginTop: 3 }}>
                What students are learning, how real prices work, and this season&apos;s moves for every grade. Teachers: an editable version is in the Launchpad Resources tab.
              </div>
            </div>
            <a href="/downloads/family/college-project-family-letter-fall.pdf" target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ padding: "10px 20px", fontSize: 13, fontWeight: 600 }}>
              Read (PDF)
            </a>
          </div>

          {/* ── MORE FOR FAMILIES ── */}
          <div style={{
            border: "1px solid var(--soft-gray)", borderRadius: 16,
            padding: "32px clamp(24px, 4vw, 40px)", background: "#fff",
          }}>
            <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>
              More for families
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 16 }}>
              Students can build their whole plan, free and without an account, at{" "}
              <a href="https://college.thefinancelab.co" style={{ color: "var(--teal)", fontWeight: 700, textDecoration: "none" }}>
                college.thefinancelab.co
              </a>
              . At the end, they choose who receives it: a counselor, a teacher, or you.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", margin: 0 }}>
              Questions? Write to{" "}
              <a href="mailto:team@thefinancelab.co" style={{ color: "var(--teal)", fontWeight: 700, textDecoration: "none" }}>
                team@thefinancelab.co
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
