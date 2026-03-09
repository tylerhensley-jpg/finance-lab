"use client";
import { IMPACT_STATS } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      style={{
        background: "var(--teal)", padding: "100px clamp(20px,5vw,40px)",
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
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            Impact &amp; Mission
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4.5vw, 52px)", fontWeight: 700, color: "#fff", maxWidth: 680, margin: "0 auto 16px", lineHeight: 1.15 }}>
            Building a generation of{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>first-time wealth builders.</em>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "0 auto 60px", lineHeight: 1.65, fontWeight: 300 }}>
            The Finance Lab is a 501(c)(3) nonprofit. Every dollar supports students from
            underserved communities who won&apos;t get this education anywhere else.
          </p>
        </Reveal>

        {/* Impact stats */}
        <div
          className="impact-stats-responsive"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginBottom: 56 }}
        >
          {IMPACT_STATS.map((s, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                className="impact-card"
                style={{
                  background: "rgba(255,255,255,0.1)", padding: "32px 24px",
                  borderRadius: i === 0 ? "12px 0 0 12px" : i === 3 ? "0 12px 12px 0" : 0,
                }}
              >
                <div className="font-display" style={{ fontSize: 44, fontWeight: 900, color: "var(--gold-light)", lineHeight: 1, marginBottom: 8 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="#" className="btn-white-solid">Make a Donation</a>
            <a href="mailto:team@thefinancelab.co" className="btn-outline-white">Partner With Us</a>
          </div>
        </Reveal>

        <p style={{ marginTop: 32, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          The Finance Lab · 501(c)(3) Nonprofit · EIN: 82-5305120 · team@thefinancelab.co
        </p>
      </div>
    </section>
  );
}
