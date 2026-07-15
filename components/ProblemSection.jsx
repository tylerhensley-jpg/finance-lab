"use client";
import Reveal from "./ui/Reveal";
import { WHO_WE_SERVE, WHO_WE_SERVE_KICKER } from "../data/content";

export default function ProblemSection() {
  return (
    <section id="problem" style={{ background: "var(--cream)", padding: "120px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── EYEBROW ── */}
        <Reveal>
          <p style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 24
          }}>
            Our Story
          </p>
        </Reveal>

        {/* ── HEADLINE ── */}
        <Reveal delay={1}>
          <h2 className="font-display" style={{
            fontSize: "clamp(44px, 5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-1px",
            color: "var(--navy)",
            maxWidth: 800,
            marginBottom: 32
          }}>
            760 students.<br />
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>One counselor.</em><br />
            No personalized plan.
          </h2>
        </Reveal>

        {/* ── BODY ── */}
        <Reveal delay={2}>
          <div style={{ maxWidth: 720, marginBottom: 72 }}>
            <p style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--body-text)",
              marginBottom: 20
            }}>
              California&apos;s counselor-to-student ratio is{" "}
              <strong style={{ color: "var(--navy)" }}>1 to 760</strong>. That&apos;s not a criticism of
              counselors; it&apos;s an impossible situation. No single professional can build a
              personalized roadmap for every student.
            </p>
            <p style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--body-text)"
            }}>
              The result: most young people make the biggest financial decision of their lives with almost no preparation.
            </p>
          </div>
        </Reveal>

        {/* ── WHO WE SERVE + STUDENT VOICE (side by side) ── */}
        <div
          className="problem-grid-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 48,
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          {/* Who we serve: open text with a rule, no box */}
          <Reveal>
            <div style={{ borderLeft: "4px solid var(--teal)", paddingLeft: 28 }}>
              <p style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: 16,
              }}>
                Who We Serve
              </p>
              <p style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--body-text)",
                marginBottom: 16,
              }}>
                {WHO_WE_SERVE}
              </p>
              <p style={{
                fontSize: 17,
                lineHeight: 1.75,
                fontWeight: 700,
                color: "var(--navy)",
                margin: 0,
              }}>
                {WHO_WE_SERVE_KICKER}
              </p>
            </div>
          </Reveal>

          {/* Student voice: one navy card, quieter type */}
          <Reveal delay={1}>
            <div style={{
              background: "var(--navy)",
              borderRadius: 16,
              padding: "clamp(32px, 4vw, 48px)",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(10, 25, 47, 0.08)",
            }}>
              <span className="font-display" style={{
                position: "absolute", top: 4, left: 16,
                fontSize: 100, lineHeight: 1,
                color: "rgba(240,201,107,0.12)",
                pointerEvents: "none",
              }}>
                &ldquo;
              </span>
              <blockquote style={{ position: "relative", zIndex: 1, margin: 0, padding: 0 }}>
                <p className="font-display" style={{
                  fontSize: "clamp(19px, 2.2vw, 24px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: 1.45,
                  marginBottom: 20,
                }}>
                  Nobody in my family has gotten this far in education. These chapters made
                  me realize that everyone has a chance to go to college regardless of their
                  background.
                </p>
                <footer style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 32, height: 2, background: "var(--gold)", borderRadius: 1 }} />
                  <cite style={{
                    fontStyle: "normal", fontSize: 13, fontWeight: 600,
                    color: "var(--gold)", fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: 0.5,
                  }}>
                    Sofia · First-generation student, Orange County
                  </cite>
                </footer>
              </blockquote>
            </div>
          </Reveal>
        </div>

        {/* ── EVIDENCE ROW: research + counselor note, side by side ── */}
        <div
          className="problem-grid-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          <Reveal>
            <div style={{
              background: "#fff",
              border: "1px solid var(--soft-gray)",
              borderTop: "4px solid var(--gold)",
              borderRadius: 12,
              padding: "28px 32px",
              height: "100%",
            }}>
              <p style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 14,
              }}>
                Why It Matters
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)" }}>
                What a student does after high school is{" "}
                <strong style={{ color: "var(--navy)" }}>one of the most important decisions
                they&apos;ll ever make</strong>. Yet many make it without a personal plan, or the
                tools, research, and guidance to build one they&apos;ll follow through on. Of
                everything we teach in high school, this decision deserves better support:{" "}
                <strong style={{ color: "var(--navy)" }}>
                  so students can own it, modify it, and live it.
                </strong>
              </p>
              <p style={{ fontSize: 13, color: "var(--mid-gray)", marginTop: 14, lineHeight: 1.6 }}>
                The research agrees: how students decide before enrollment predicts their
                outcomes after it (Public Agenda, 2009).
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div style={{
              background: "rgba(26,122,110,0.06)",
              border: "1px solid rgba(26,122,110,0.18)",
              borderTop: "4px solid var(--teal)",
              borderRadius: 12,
              padding: "28px 32px",
              height: "100%",
            }}>
              <p style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: 14,
              }}>
                To Counselors &amp; Educators
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)" }}>
                We&apos;re not here to replace you. We&apos;re here to extend what you can do:
                a tool you can put directly in students&apos; hands, so every student gets a
                personalized experience regardless of caseload size.
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
