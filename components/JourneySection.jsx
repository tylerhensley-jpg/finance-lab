"use client";
import { PHASE1_STEPS, PHASE2_STEPS } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function JourneySection() {
  return (
    <section
      id="journey"
      style={{
        background: "var(--navy)", padding: "100px clamp(20px,5vw,40px)",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute", top: -200, right: -200,
          width: 600, height: 600, pointerEvents: "none",
          background: "radial-gradient(circle, rgba(26,122,110,0.12) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            Our Approach
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>
            The <em style={{ fontStyle: "italic", color: "var(--teal-light)" }}>Plan</em>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span>
            <br />
            then the <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Portfolio.</em>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 580, lineHeight: 1.65, marginBottom: 64, fontWeight: 300 }}>
            Two connected programs. One complete journey — from choosing a path, to building wealth on it.
          </p>
        </Reveal>

        {/* Two-phase grid */}
        <div
          className="phases-grid-responsive"
          style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 0, alignItems: "start" }}
        >
          {/* Phase 1 — The College Project */}
          <Reveal>
            <PhaseCard
              color="teal"
              num="Phase 01 · The College Project"
              title="Plan"
              tag="Book + App · For High Schoolers"
              desc="Before a student can build wealth, they need to know where they're going. The College Project gives every student a personalized roadmap for life after high school."
              steps={PHASE1_STEPS}
            />
          </Reveal>

          {/* Connector */}
          <div
            className="phase-connector-responsive"
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              paddingTop: 60, gap: 8,
            }}
          >
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))" }} />
            <span className="font-mono" style={{ fontSize: 9, letterSpacing: 2, color: "rgba(255,255,255,0.3)", writingMode: "vertical-rl", textTransform: "uppercase" }}>
              then
            </span>
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.15))" }} />
          </div>

          {/* Phase 2 — The Finance Lab */}
          <Reveal delay={2}>
            <PhaseCard
              color="gold"
              num="Phase 02 · The Finance Lab"
              title="Portfolio"
              tag="Scholarship · For College Year One"
              desc="Once students have a plan, they learn to build wealth by doing it — not simulating it. $1,000 disbursed in four milestones, with real money in real accounts."
              steps={PHASE2_STEPS}
            />
          </Reveal>
        </div>

        {/* Fusion bar */}
        <Reveal>
          <div
            style={{
              marginTop: 48,
              background: "linear-gradient(135deg, rgba(26,122,110,0.15), rgba(200,148,42,0.15))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, padding: "32px 40px",
              display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 36, flexShrink: 0 }}>🎓</span>
            <div>
              <h4 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
                The Result: Students Who Arrive Ready
              </h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                A student who completes both programs enters adulthood with something rare: a
                thoughtful plan for their path forward <em>and</em> a real investment portfolio
                already growing.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Phase card sub-component ── */
function PhaseCard({ color, num, title, tag, desc, steps }) {
  const isTeal = color === "teal";
  const accent = isTeal ? "var(--teal-light)" : "var(--gold-light)";
  const accentBorder = isTeal ? "var(--teal-light)" : "var(--gold)";
  const dotBg = isTeal ? "rgba(42,168,154,0.2)" : "rgba(200,148,42,0.2)";
  const tagBg = isTeal ? "rgba(26,122,110,0.2)" : "rgba(200,148,42,0.2)";

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderTop: `3px solid ${accentBorder}`,
        borderRadius: 16, padding: "40px 36px",
      }}
    >
      <p className="font-mono" style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: accent, marginBottom: 20 }}>
        {num}
      </p>
      <h3 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
        Build Your <em style={{ fontStyle: "italic", color: accent }}>{title}</em>
      </h3>
      <span
        style={{
          display: "inline-block", fontSize: 11, fontWeight: 600,
          letterSpacing: 1, textTransform: "uppercase",
          background: tagBg, color: accent,
          padding: "4px 10px", borderRadius: 99, marginBottom: 20,
        }}
      >
        {tag}
      </span>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
        {desc}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <div
              style={{
                width: 24, height: 24, borderRadius: "50%",
                background: dotBg, color: accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 700, flexShrink: 0,
              }}
            >
              {i + 1}
            </div>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
