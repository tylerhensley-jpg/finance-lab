"use client";
import { IMPACT_STATS } from "@/data/content";
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
          <p className="font-mono" style={{ 
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
            fontSize: 20,                       /* 👈 Bumped from 16px */
            color: "rgba(255,255,255,0.85)",    /* 👈 Increased contrast slightly */
            maxWidth: 640, 
            margin: "0 auto 64px",              /* 👈 More breathing room below */
            lineHeight: 1.6, 
            fontWeight: 300 
          }}>
            The Finance Lab is a 501(c)(3) nonprofit. Every dollar supports students from
            underserved communities who won&apos;t get this education anywhere else.
          </p>
        </Reveal>

        {/* ── IMPACT STATS ── */}
        <div
          className="impact-stats-responsive"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginBottom: 64 }}
        >
          {IMPACT_STATS.map((s, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                className="impact-card"
                style={{
                  background: "rgba(255,255,255,0.1)", 
                  padding: "40px 24px",         /* 👈 Increased vertical padding for taller cards */
                  borderRadius: i === 0 ? "16px 0 0 16px" : i === 3 ? "0 16px 16px 0" : 0, /* 👈 Smoother corners */
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
                  fontSize: 15,                 /* 👈 Bumped from 13px */
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
        </Reveal>

        <p style={{ marginTop: 48, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
          The Finance Lab · 501(c)(3) Nonprofit · EIN: 82-5305120 · team@thefinancelab.co
        </p>
      </div>
    </section>
  );
}