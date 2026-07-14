import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRICING } from "@/data/content";

export const metadata = {
  title: "Teacher's Guide: The College Project | The Finance Lab",
  description:
    "Free download: The College Project Teacher's Guide, Fifth Edition. A Kickoff session plus 19 chapters. Lesson flows, exit tickets, standards alignment, pacing guides, and rubrics.",
  openGraph: {
    title: "The College Project Teacher's Guide (Free Download)",
    description:
      "A Kickoff session plus 19 chapters. Lesson flows, exit tickets, standards alignment, pacing guides, and rubrics. Free for classroom use, no sign-up required.",
    type: "website",
  },
};

const CONTENTS = [
  { title: "Kickoff session", desc: "A ready-to-run opener that sets up the semester before Chapter 1." },
  { title: "19 chapter lesson flows", desc: "Step-by-step teaching sequences matched to the student book." },
  { title: "Exit tickets", desc: "A quick formative check for every chapter, ready to project or print." },
  { title: "Standards alignment", desc: "Chapter-by-chapter mapping to relevant academic standards." },
  { title: "Pacing guides", desc: "Suggested timing for a full semester or a condensed course." },
  { title: "Rubrics", desc: "Scoring guides for the book's reflection and project-based work." },
  { title: "Choose Your Format appendix", desc: "The six formats of The College Project and how to pick by the time and setting you have." },
];

const PDF_HREF = "/downloads/the-college-project-teachers-guide-5th-edition.pdf";

export default function GuidePage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "var(--warm-white)", padding: "120px clamp(20px,5vw,40px) 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
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
            Classroom Resource
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
            The College Project{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>Teacher&apos;s Guide</em>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 16 }}>
            Fifth Edition. The full companion for teaching <em>The College Project</em> in your
            classroom. A Kickoff session plus 19 chapters, with everything you need to plan and run
            the course: lesson flows, exit tickets, standards alignment, pacing guides, and rubrics.
          </p>

          <p
            
            style={{ fontSize: 13, color: "#9CA3AF", letterSpacing: 0.5, marginBottom: 48 }}
          >
            58 pages · PDF, ~930 KB · Free for classroom use, no sign-up required
          </p>

          {/* ── PRIMARY CTA ── */}
          <div style={{ marginBottom: 64 }}>
            <a
              href={PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal"
              style={{ padding: "18px 40px", fontSize: 18, fontWeight: 600 }}
            >
              View / Download the Teacher&apos;s Guide (PDF)
            </a>
          </div>

          {/* ── WHAT'S INSIDE ── */}
          <h2
            className="font-display"
            style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 24 }}
          >
            What&apos;s inside
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 64 }}>
            {CONTENTS.map((item) => (
              <div
                key={item.title}
                className="feature-row"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  padding: "20px 24px",
                  background: "#fff",
                  border: "1px solid var(--soft-gray)",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(26,122,110,0.12)",
                    color: "var(--teal)",
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  ✓
                </div>
                <p style={{ fontSize: 17, color: "var(--body-text)", lineHeight: 1.6 }}>
                  <strong style={{ color: "var(--navy)", fontWeight: 700 }}>{item.title}.</strong>{" "}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── ORDERING BOOKS FOR YOUR CLASS ── */}
          <div
            style={{
              border: "1px solid var(--soft-gray)",
              borderRadius: 16,
              padding: "40px clamp(24px, 4vw, 48px)",
              background: "#fff",
            }}
          >
            <h2
              className="font-display"
              style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 16 }}
            >
              Ordering copies for your class?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 24 }}>
              Schools can order <em>The College Project</em> student book in bulk at a discount off
              Amazon&apos;s retail price. Every copy funds The Finance Lab&apos;s mission, and the
              Scholarship Tier turns a portion of each order into on-site scholarships for students
              in your class.
            </p>

            <div style={{ border: "1px solid var(--soft-gray)", borderRadius: 12, overflow: "hidden", marginBottom: 32 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  padding: "14px 20px",
                  background: "var(--navy)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <span>Option</span>
                <span>Per Copy</span>
              </div>
              {PRICING.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    padding: "18px 20px",
                    borderBottom: i < PRICING.length - 1 ? "1px solid var(--soft-gray)" : "none",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)" }}>{p.tier}</div>
                    <div style={{ fontSize: 13, color: "var(--body-text)", marginTop: 4 }}>{p.note}</div>
                  </div>
                  <div className="font-display" style={{ fontSize: 26, fontWeight: 800, color: "var(--gold)" }}>
                    {p.price}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:team@thefinancelab.co?subject=Bulk%20order%3A%20The%20College%20Project"
              className="btn-outline-navy"
              style={{ padding: "16px 32px", fontSize: 17, fontWeight: 600 }}
            >
              Contact Us for Bulk Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
