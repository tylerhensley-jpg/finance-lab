"use client";
import Reveal from "./ui/Reveal";

export default function ProblemSection() {
  return (
    <section id="problem" style={{ background: "var(--cream)", padding: "120px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* ── EYEBROW ── */}
        <Reveal>
          <p className="font-mono" style={{ 
            fontSize: 13,          /* 👈 Increased from 10px */
            fontWeight: 600,       /* 👈 Made bolder */
            letterSpacing: 4,      /* 👈 Wider tracking for premium feel */
            textTransform: "uppercase", 
            color: "var(--gold)", 
            marginBottom: 24 
          }}>
            The Problem
          </p>
        </Reveal>

        {/* ── HEADLINE ── */}
        <Reveal delay={1}>
          <h2 className="font-display" style={{ 
            fontSize: "clamp(44px, 5vw, 72px)", /* 👈 Scaled up */
            fontWeight: 700, 
            lineHeight: 1.05,                   /* 👈 Tightened spacing between lines */
            letterSpacing: "-1px",              /* 👈 Pulled letters closer together */
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
          <p style={{ 
            fontSize: 20,                       /* 👈 Increased from 17px */
            lineHeight: 1.6, 
            color: "var(--body-text)", 
            maxWidth: 720, 
            marginBottom: 64                    /* 👈 Gave more breathing room before the quote */
          }}>
            California&apos;s counselor-to-student ratio is{" "}
            <strong style={{ color: "var(--navy)" }}>1 to 760</strong>. That&apos;s not a criticism of
            counselors — it&apos;s an impossible situation. No single professional can build a
            personalized roadmap for every student. The result: most young people make the
            biggest financial decision of their lives with almost no preparation.
          </p>
        </Reveal>

        {/* ── HERO QUOTE ── */}
        <Reveal delay={3}>
          <div style={{
            position: "relative", background: "var(--navy)",
            borderRadius: 16, 
            padding: "clamp(48px, 8vw, 88px) clamp(32px, 6vw, 80px)", /* 👈 Increased padding for breathing room */
            marginBottom: 48, overflow: "hidden",
            boxShadow: "0 20px 40px rgba(10, 25, 47, 0.08)" /* 👈 Added a soft drop shadow */
          }}>
            {/* Background quotation mark SVG */}
            <svg
              viewBox="0 0 120 100"
              style={{
                position: "absolute", top: -10, left: -10,
                width: "clamp(160px, 25vw, 280px)", height: "auto",
                opacity: 0.06, pointerEvents: "none",
              }}
            >
              <path
                d="M28 86c-10 0-18-4-22-12C2 66 0 56 0 44 0 18 16 2 48 0l2 12C34 14 26 22 24 36c2 0 6 0 8 2 8 4 14 12 14 22 0 14-8 26-18 26zm64 0c-10 0-18-4-22-12-4-8-6-18-6-30C64 18 80 2 112 0l2 12c-16 2-24 10-26 24 2 0 6 0 8 2 8 4 14 12 14 22 0 14-8 26-18 26z"
                fill="var(--gold-light)"
              />
            </svg>

            <blockquote style={{ position: "relative", zIndex: 1, margin: 0, padding: 0 }}>
              <p className="font-display" style={{
                fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700,
                color: "#fff", lineHeight: 1.3, fontStyle: "italic",
                maxWidth: 760, marginBottom: 32,
              }}>
                Nobody in my family has gotten this far in education. These chapters made
                me realize that everyone has a chance to go to college regardless of their
                background.
              </p>
              <footer style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 40, height: 2, background: "var(--gold)", borderRadius: 1 }} />
                <cite style={{
                  fontStyle: "normal", fontSize: 16, fontWeight: 500, /* 👈 Made citation slightly larger */
                  color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: 0.5,
                }}>
                  Sofia, first-generation student — Orange County
                </cite>
              </footer>
            </blockquote>
          </div>
        </Reveal>

        {/* ── DROPOUT CALLOUT ── */}
        <Reveal>
          <div style={{
            background: "#fff", border: "1px solid var(--soft-gray)",
            borderLeft: "4px solid var(--teal)",
            borderRadius: "0 12px 12px 0", padding: "32px 40px", maxWidth: 820,
          }}>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--body-text)" }}> {/* 👈 Bumped to 17px */}
              Research shows that students who{" "}
              <strong style={{ color: "var(--navy)" }}>dropped out</strong> chose their college
              primarily because of convenience — location and schedule. Students who{" "}
              <strong style={{ color: "var(--navy)" }}>graduated</strong> chose because they
              believed it would help them get a job.{" "}
              <strong style={{ color: "var(--navy)" }}>
                The decision-making process before enrollment predicts the outcome after it.
              </strong>
            </p>
            <p style={{ fontSize: 13, color: "#9CA3AF", marginTop: 12, fontStyle: "italic", fontWeight: 500 }}>
              — Public Agenda, 2009
            </p>
          </div>
        </Reveal>

        {/* ── COUNSELOR NOTE ── */}
        <Reveal>
          <div style={{
            marginTop: 32, background: "rgba(26,122,110,0.06)",
            border: "1px solid rgba(26,122,110,0.18)",
            borderRadius: 12, padding: "28px 40px", maxWidth: 820,
          }}>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--body-text)" }}> {/* 👈 Bumped to 16px */}
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