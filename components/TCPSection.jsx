"use client";
import { RESULTS, QUOTES } from "@/data/content";
import Reveal from "./ui/Reveal";
import AnimatedNumber from "./ui/AnimatedNumber";

export default function TCPSection() {
  return (
    <section id="tcp" style={{ 
      background: "var(--warm-white)", 
      padding: "120px clamp(20px,5vw,40px)" /* 👈 Bumped to 120px padding */
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* ── EYEBROW ── */}
        <Reveal>
          <p className="font-mono" style={{ 
            fontSize: 13,           /* 👈 Bumped from 10px */
            fontWeight: 600,        /* 👈 Added weight */
            letterSpacing: 4,       /* 👈 Wider tracking */
            textTransform: "uppercase", 
            color: "var(--teal)", 
            marginBottom: 24 
          }}>
            The College Project
          </p>
        </Reveal>

        {/* ── HEADLINE ── */}
        <Reveal delay={1}>
          <h2 className="font-display" style={{ 
            fontSize: "clamp(44px, 5vw, 64px)", /* 👈 Scaled up */
            fontWeight: 700, 
            lineHeight: 1.05,                   /* 👈 Tightened spacing */
            letterSpacing: "-0.5px",            /* 👈 Pulled letters together */
            color: "var(--navy)", 
            marginBottom: 24, 
            maxWidth: 720 
          }}>
            The book that gives every student a{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>personalized plan.</em>
          </h2>
        </Reveal>

        {/* ── SUBTITLE ── */}
        <Reveal delay={2}>
          <p style={{ 
            fontSize: 20,                       /* 👈 Bumped from 16px */
            lineHeight: 1.6, 
            color: "var(--body-text)", 
            maxWidth: 680, 
            marginBottom: 64                    /* 👈 More breathing room */
          }}>
            22 chapters. 216 pages. Written in plain language that speaks to teens — not at
            them. Built for California classrooms. Every dollar of proceeds funds scholarships.
          </p>
        </Reveal>

        {/* ── BEFORE/AFTER CARDS ── */}
<div className="results-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 64 }}>
  {RESULTS.map((r, i) => (
    <Reveal key={i} delay={i + 1}>
      <div
        className="result-card-wrap"
        style={{
          background: "#fff", 
          border: "1px solid var(--soft-gray)",
          borderRadius: 16, 
          padding: "48px 40px",
          boxShadow: "0 10px 30px rgba(10, 25, 47, 0.03)"
        }}
      >
        
        {/* 1. ANIMATED NUMBER */}
        <div className="font-display" style={{ 
          fontSize: "clamp(56px, 6vw, 72px)", 
          fontWeight: 900, 
          color: "var(--teal)", 
          lineHeight: 1, 
          marginBottom: 8,
          textAlign: "center" /* 👈 Added center alignment */
        }}>
          <AnimatedNumber value={r.after.replace("%", "")} suffix="%" />
        </div>

        {/* 2. ARROW UP */}
        <span style={{ 
          fontSize: 28,           
          color: "var(--teal)", 
          margin: "8px 0", 
          display: "block",
          textAlign: "center" /* 👈 Added center alignment */
        }}>↑</span>

        {/* 3. BEFORE TEXT */}
        <div className="font-mono" style={{ 
          fontSize: 16,           
          fontWeight: 500,
          color: "#9CA3AF", 
          marginBottom: 16,
          textAlign: "center" /* 👈 Added center alignment to match the stack */
        }}>
          {r.before} before
        </div>
        
        {/* 4. LABEL */}
        <div style={{ 
          fontSize: 18,           
          fontWeight: 600,
          color: "var(--navy)",   
          lineHeight: 1.5 
        }}>
          {r.label}
        </div>
        
        {/* 5. FOOTER TEXT */}
        <p className="font-mono" style={{ 
          fontSize: 12,           
          color: "#9CA3AF", 
          marginTop: 16, 
          letterSpacing: 1 
        }}>
          Pre/post matched cohort · n=368 / n=99
        </p>

      </div>
    </Reveal>
  ))}
</div>

        {/* ── STUDENT QUOTES ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 56 }}>
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                style={{
                  background: "var(--navy)", 
                  borderRadius: 16,
                  padding: "clamp(40px, 6vw, 64px) clamp(32px, 5vw, 64px)", /* 👈 Increased padding */
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Background quotation mark */}
                <span
                  className="font-display"
                  style={{
                    position: "absolute", top: 12, left: 20,
                    fontSize: 120,          /* 👈 Bumped from 80px */
                    lineHeight: 1, 
                    color: "rgba(200,148,42,0.1)", /* 👈 Softened opacity slightly */
                    pointerEvents: "none",
                  }}
                >
                  &ldquo;
                </span>
                <blockquote style={{ position: "relative", zIndex: 1, margin: 0, padding: 0 }}>
                  <p className="font-display" style={{
                    fontSize: "clamp(24px, 3.5vw, 36px)", /* 👈 Scaled up to match Hero Quote */
                    fontWeight: 700,
                    fontStyle: "italic", 
                    color: "rgba(255,255,255,0.95)",
                    lineHeight: 1.35, 
                    marginBottom: 24, 
                    maxWidth: 860,
                  }}>
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <footer style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 32, height: 2, background: "var(--gold)", borderRadius: 1 }} />
                    <cite style={{
                      fontStyle: "normal", 
                      fontSize: 16,           /* 👈 Bumped from 13px */
                      fontWeight: 600,
                      color: "var(--gold)", 
                      letterSpacing: 0.5,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {q.attr}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── BUTTONS ── */}
        <Reveal>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a href="https://college.thefinancelab.co" className="btn-teal" style={{
              padding: "16px 40px",   /* 👈 Chunkier padding */
              fontSize: "18px",       /* 👈 Bigger text */
              fontWeight: 600
            }}>Try the App Free</a>
            
            <a href="#educators" className="btn-outline-navy" style={{
              padding: "16px 40px",   /* 👈 Chunkier padding */
              fontSize: "18px",       /* 👈 Bigger text */
              fontWeight: 600
            }}>Order for Your School</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
