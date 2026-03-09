"use client";
import Reveal from "./ui/Reveal";

export default function ProblemSection() {
  return (
    <section id="problem" style={{ background: "var(--cream)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            The Problem
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 700, lineHeight: 1.12, color: "var(--navy)", maxWidth: 700, marginBottom: 20 }}>
            760 students.<br />
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>One counselor.</em><br />
            No personalized plan.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--body-text)", maxWidth: 680, marginBottom: 56 }}>
            California&apos;s counselor-to-student ratio is{" "}
            <strong style={{ color: "var(--navy)" }}>1 to 760</strong>. That&apos;s not a criticism of
            counselors — it&apos;s an impossible situation. No single professional can build a
            personalized roadmap for every student. The result: most young people make the
            biggest financial decision of their lives with almost no preparation.
          </p>
        </Reveal>

        {/* ── HERO QUOTE — replaces stat cards ── */}
        <Reveal delay={3}>
          <div style={{
            position: "relative", background: "var(--navy)",
            borderRadius: 16, padding: "clamp(40px, 6vw, 72px) clamp(28px, 5vw, 64px)",
            marginBottom: 40, overflow: "hidden",
          }}>
            {/* Background quotation mark SVG */}
            <svg
              viewBox="0 0 120 100"
              style={{
                position: "absolute", top: -10, left: -10,
                width: "clamp(140px, 25vw, 260px)", height: "auto",
                opacity: 0.07, pointerEvents: "none",
              }}
            >
              <path
                d="M28 86c-10 0-18-4-22-12C2 66 0 56 0 44 0 18 16 2 48 0l2 12C34 14 26 22 24 36c2 0 6 0 8 2 8 4 14 12 14 22 0 14-8 26-18 26zm64 0c-10 0-18-4-22-12-4-8-6-18-6-30C64 18 80 2 112 0l2 12c-16 2-24 10-26 24 2 0 6 0 8 2 8 4 14 12 14 22 0 14-8 26-18 26z"
                fill="var(--gold-light)"
              />
            </svg>

            <blockquote style={{ position: "relative", zIndex: 1, margin: 0, padding: 0 }}>
              <p className="font-display" style={{
                fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 700,
                color: "#fff", lineHeight: 1.35, fontStyle: "italic",
                maxWidth: 720, marginBottom: 24,
              }}>
                Nobody in my family has gotten this far in education. These chapters made
                me realize that everyone has a chance to go to college regardless of their
                background.
              </p>
              <footer style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 32, height: 2, background: "var(--gold)", borderRadius: 1 }} />
                <cite style={{
                  fontStyle: "normal", fontSize: 14, fontWeight: 400,
                  color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: 0.3,
                }}>
                  Sofia, first-generation student — Orange County
                </cite>
              </footer>
            </blockquote>
          </div>
        </Reveal>

        {/* Dropout callout — preserved */}
        <Reveal>
          <div style={{
            background: "#fff", border: "1px solid var(--soft-gray)",
            borderLeft: "4px solid var(--teal)",
            borderRadius: "0 12px 12px 0", padding: "28px 32px", maxWidth: 820,
          }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--body-text)" }}>
              Research shows that students who{" "}
              <strong style={{ color: "var(--navy)" }}>dropped out</strong> chose their college
              primarily because of convenience — location and schedule. Students who{" "}
              <strong style={{ color: "var(--navy)" }}>graduated</strong> chose because they
              believed it would help them get a job.{" "}
              <strong style={{ color: "var(--navy)" }}>
                The decision-making process before enrollment predicts the outcome after it.
              </strong>
            </p>
            <p style={{ fontSize: 11, color: "#9CA3AF", marginTop: 10, fontStyle: "italic" }}>
              — Public Agenda, 2009
            </p>
          </div>
        </Reveal>

        {/* Counselor note — preserved */}
        <Reveal>
          <div style={{
            marginTop: 32, background: "rgba(26,122,110,0.06)",
            border: "1px solid rgba(26,122,110,0.18)",
            borderRadius: 12, padding: "24px 28px", maxWidth: 820,
          }}>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--body-text)" }}>
              <strong style={{ color: "var(--teal)" }}>A note to counselors and educators:</strong>{" "}
              We&apos;re not here to replace you — we&apos;re here to extend what you can do. Think
              of us as a tool you can put directly in students&apos; hands, so every student gets a
              personalized experience regardless of caseload size.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
