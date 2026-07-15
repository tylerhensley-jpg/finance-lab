"use client";
import { IMPACT_STATS, MISSION, VISION, PEOPLE } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      style={{
        background: "var(--teal)", 
        padding: "120px clamp(20px,5vw,40px)", /* 👈 Bumped vertical padding to match Problem section */
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute", top: -100, left: -100,
          width: 400, height: 400, pointerEvents: "none",
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", position: "relative" }}>
        
        {/* ── EYEBROW ── */}
        <Reveal>
          <p style={{ 
            fontSize: 13,           /* 👈 Bumped from 10px */
            fontWeight: 600,        /* 👈 Made bolder */
            letterSpacing: 4,       /* 👈 Wider tracking */
            textTransform: "uppercase", 
            color: "rgba(255,255,255,0.7)", /* 👈 Made slightly brighter */
            marginBottom: 24 
          }}>
            Impact &amp; Mission
          </p>
        </Reveal>

        {/* ── HEADLINE ── */}
        <Reveal delay={1}>
          <h2 className="font-display" style={{ 
            fontSize: "clamp(44px, 5vw, 64px)", /* 👈 Scaled up */
            fontWeight: 700, 
            color: "#fff", 
            maxWidth: 800, 
            margin: "0 auto 24px", 
            lineHeight: 1.05,                   /* 👈 Tightened line-height */
            letterSpacing: "-0.5px"             /* 👈 Pulled letters closer */
          }}>
            Building a generation of{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>first-time wealth builders.</em>
          </h2>
        </Reveal>

        {/* ── BODY ── */}
        <Reveal delay={2}>
          <p style={{ 
            fontSize: 17,
            color: "rgba(255,255,255,0.85)",    /* 👈 Increased contrast slightly */
            maxWidth: 640, 
            margin: "0 auto 64px",              /* 👈 More breathing room below */
            lineHeight: 1.6, 
            fontWeight: 300 
          }}>
            The Finance Lab is a 501(c)(3) nonprofit. Your support funds scholarships,
            classroom programs, and the work of bringing real financial education to
            every student.
          </p>
        </Reveal>

        {/* ── MISSION & VISION ── */}
        <div
          className="mission-grid-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 64,
            textAlign: "left",
          }}
        >
          <Reveal>
            <div style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 16,
              padding: "32px 36px",
              height: "100%",
            }}>
              <p style={{
                fontSize: 13, fontWeight: 700, letterSpacing: 3,
                textTransform: "uppercase", color: "var(--gold-light)", marginBottom: 14,
              }}>
                Our Mission
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.92)", margin: 0 }}>
                {MISSION}
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 16,
              padding: "32px 36px",
              height: "100%",
            }}>
              <p style={{
                fontSize: 13, fontWeight: 700, letterSpacing: 3,
                textTransform: "uppercase", color: "var(--gold-light)", marginBottom: 14,
              }}>
                Our Vision
              </p>
              <p className="font-display" style={{
                fontSize: "clamp(20px, 2.2vw, 24px)", fontStyle: "italic",
                lineHeight: 1.5, color: "#fff", margin: 0,
              }}>
                {VISION}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── IMPACT STATS ── */}
        <div
          className="impact-stats-responsive"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 64 }}
        >
          {IMPACT_STATS.map((s, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                className="impact-card"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  padding: "40px 24px",         /* 👈 Increased vertical padding for taller cards */
                  borderRadius: i === 0 ? "16px 0 0 16px" : i === IMPACT_STATS.length - 1 ? "0 16px 16px 0" : 0,
                  height: "100%",
                }}
              >
                <div className="font-display" style={{ 
                  fontSize: "clamp(40px, 4vw, 56px)", /* 👈 Scaled up stat numbers */
                  fontWeight: 800, 
                  color: "var(--gold-light)", 
                  lineHeight: 1, 
                  marginBottom: 12 
                }}>
                  {s.value}
                </div>
                <div style={{ 
                  fontSize: 17,                 /* 👈 Bumped from 13px */
                  fontWeight: 500,              /* 👈 Made slightly bolder */
                  color: "rgba(255,255,255,0.8)", 
                  lineHeight: 1.5 
                }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── THE PEOPLE ── */}
        <Reveal>
          <p style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            marginBottom: 24,
          }}>
            The People Behind The Finance Lab
          </p>
        </Reveal>
        <div
          className="people-grid-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(280px, 460px))",
            gap: 24,
            justifyContent: "center",
            marginBottom: 64,
            textAlign: "left",
          }}
        >
          {PEOPLE.map((p, i) => (
            <Reveal key={p.name} delay={i + 1}>
              <div style={{
                display: "flex",
                gap: 24,
                alignItems: "flex-start",
                background: "#fff",
                borderRadius: 16,
                padding: "28px 32px",
                height: "100%",
                boxShadow: "0 16px 40px rgba(10, 25, 47, 0.15)",
              }}>
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.name}
                    style={{
                      width: 88, height: 88, borderRadius: "50%",
                      objectFit: "cover", flexShrink: 0,
                      border: `3px solid ${p.accent === "teal" ? "var(--teal)" : "var(--gold)"}`,
                    }}
                  />
                ) : (
                  <div
                    className="font-display"
                    aria-hidden="true"
                    style={{
                      width: 88, height: 88, borderRadius: "50%", flexShrink: 0,
                      background: p.accent === "teal" ? "rgba(26,122,110,0.12)" : "rgba(200,148,42,0.14)",
                      color: p.accent === "teal" ? "var(--teal)" : "var(--gold)",
                      border: `3px solid ${p.accent === "teal" ? "var(--teal)" : "var(--gold)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 30, fontWeight: 700, letterSpacing: 1,
                    }}
                  >
                    {p.initials}
                  </div>
                )}
                <div>
                  <p className="font-display" style={{
                    fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 2,
                  }}>
                    {p.name}
                  </p>
                  <p style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: p.accent === "teal" ? "var(--teal)" : "var(--gold)",
                    marginBottom: 10,
                  }}>
                    {p.title}
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--body-text)", margin: 0 }}>
                    {p.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── BUTTONS ── */}
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            <a href="https://donorbox.org/the-finance-lab" target="_blank" rel="noopener noreferrer" className="btn-white-solid" style={{
              padding: "16px 40px",   /* 👈 Chunkier padding */
              fontSize: "18px",       /* 👈 Bigger text */
              fontWeight: 600
            }}>Make a Donation</a>

            <a href="mailto:team@thefinancelab.co" className="btn-outline-white" style={{
              padding: "16px 40px",   /* 👈 Chunkier padding */
              fontSize: "18px",       /* 👈 Bigger text */
              fontWeight: 600
            }}>Partner With Us</a>
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", marginTop: 20 }}>
            Every $250 you give funds one scholarship milestone for one student.
          </p>
        </Reveal>

        <p style={{ marginTop: 48, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
          The Finance Lab · 501(c)(3) Nonprofit · EIN: 82-5305120 · team@thefinancelab.co
        </p>
      </div>
    </section>
  );
}