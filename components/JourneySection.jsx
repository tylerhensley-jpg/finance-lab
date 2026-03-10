"use client";
import { PHASE1_STEPS, PHASE2_STEPS } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function JourneySection() {
  return (
    <section
      id="journey"
      style={{
        background: "var(--navy)", 
        padding: "120px clamp(20px,5vw,40px)", /* 👈 Bumped to 120px to match spacing */
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
        
        {/* ── EYEBROW ── */}
        <Reveal>
          <p className="font-mono" style={{ 
            fontSize: 13,           /* 👈 Bumped from 10px */
            fontWeight: 600,        /* 👈 Added weight */
            letterSpacing: 4,       /* 👈 Wider tracking */
            textTransform: "uppercase", 
            color: "var(--gold)", 
            marginBottom: 24 
          }}>
            Our Approach
          </p>
        </Reveal>

        {/* ── HEADLINE ── */}
        <Reveal delay={1}>
          <h2 className="font-display" style={{ 
            fontSize: "clamp(44px, 5vw, 64px)", /* 👈 Scaled up */
            fontWeight: 900, 
            color: "#fff", 
            marginBottom: 24, 
            lineHeight: 1.05,                   /* 👈 Tightened spacing */
            letterSpacing: "-0.5px"             /* 👈 Pulled letters together */
          }}>
            The <em style={{ fontStyle: "italic", color: "var(--teal-light)" }}>Plan</em>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span>
            <br />
            then the <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Portfolio.</em>
          </h2>
        </Reveal>

        {/* ── SUBTITLE ── */}
        <Reveal delay={2}>
          <p style={{ 
            fontSize: 20,                       /* 👈 Bumped from 17px */
            color: "rgba(255,255,255,0.85)",    /* 👈 Increased contrast slightly */
            maxWidth: 640, 
            lineHeight: 1.6, 
            marginBottom: 72,                   /* 👈 More breathing room before cards */
            fontWeight: 300 
          }}>
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
              paddingTop: 80, gap: 12, /* 👈 Increased gap and padding slightly for proportion */
            }}
          >
            <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05))" }} />
            <span className="font-mono" style={{ 
              fontSize: 11,             /* 👈 Bumped from 9px */
              letterSpacing: 3, 
              color: "rgba(255,255,255,0.4)", 
              writingMode: "vertical-rl", 
              textTransform: "uppercase" 
            }}>
              then
            </span>
            <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.2))" }} />
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
              marginTop: 64, /* 👈 Pushed down slightly */
              background: "linear-gradient(135deg, rgba(26,122,110,0.15), rgba(200,148,42,0.15))",
              border: "1px solid rgba(255,255,255,0.12)", /* 👈 Made border slightly more visible */
              borderRadius: 16, 
              padding: "40px 48px", /* 👈 Increased padding */
              display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 48, flexShrink: 0 }}>🎓</span> {/* 👈 Bumped emoji size */}
            <div>
              <h4 className="font-display" style={{ 
                fontSize: 26,             /* 👈 Bumped from 22px */
                fontWeight: 700, 
                color: "#fff", 
                marginBottom: 8 
              }}>
                The Result: Students Who Arrive Ready
              </h4>
              <p style={{ 
                fontSize: 16,             /* 👈 Bumped from 14px */
                color: "rgba(255,255,255,0.75)", 
                lineHeight: 1.6 
              }}>
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
        borderTop: `4px solid ${accentBorder}`, /* 👈 Made the top accent line slightly thicker */
        borderRadius: 16, 
        padding: "48px 40px", /* 👈 Increased padding for breathing room */
      }}
    >
      <p className="font-mono" style={{ 
        fontSize: 12,             /* 👈 Bumped from 10px */
        letterSpacing: 3, 
        fontWeight: 600,          /* 👈 Added weight */
        textTransform: "uppercase", 
        color: accent, 
        marginBottom: 24 
      }}>
        {num}
      </p>

      <h3 className="font-display" style={{ 
        fontSize: 36,             /* 👈 Bumped from 28px */
        fontWeight: 700, 
        color: "#fff", 
        marginBottom: 16 
      }}>
        Build Your <em style={{ fontStyle: "italic", color: accent }}>{title}</em>
      </h3>

      <span
        style={{
          display: "inline-block", 
          fontSize: 13,             /* 👈 Bumped from 11px */
          fontWeight: 600,
          letterSpacing: 1, 
          textTransform: "uppercase",
          background: tagBg, 
          color: accent,
          padding: "6px 14px",      /* 👈 Increased pill padding slightly */
          borderRadius: 99, 
          marginBottom: 24,
        }}
      >
        {tag}
      </span>

      <p style={{ 
        fontSize: 16,               /* 👈 Bumped from 14px */
        lineHeight: 1.6, 
        color: "rgba(255,255,255,0.8)", /* 👈 Made text brighter for readability */
        marginBottom: 32 
      }}>
        {desc}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}> {/* 👈 Increased gap between steps */}
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
            <div
              style={{
                width: 28, height: 28,  /* 👈 Made circles slightly larger */
                borderRadius: "50%",
                background: dotBg, color: accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, flexShrink: 0, /* 👈 Bumped number size */
              }}
            >
              {i + 1}
            </div>
            <span style={{ 
              fontSize: 15,             /* 👈 Bumped from 13px */
              color: "rgba(255,255,255,0.8)", 
              lineHeight: 1.5,
              paddingTop: 4             /* 👈 Aligned text slightly better with the dot */
            }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}