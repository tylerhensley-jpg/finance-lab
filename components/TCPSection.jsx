"use client";
import { RESULTS, QUOTES } from "@/data/content";
import Reveal from "./ui/Reveal";
import AnimatedNumber from "./ui/AnimatedNumber";

export default function TCPSection() {
  return (
    <section id="tcp" style={{ background: "var(--warm-white)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--teal)", marginBottom: 20 }}>
            The College Project
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4vw, 50px)", fontWeight: 700, color: "var(--navy)", marginBottom: 16, maxWidth: 600 }}>
            The book that gives every student a{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>personalized plan.</em>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--body-text)", maxWidth: 600, marginBottom: 56 }}>
            22 chapters. 216 pages. Written in plain language that speaks to teens — not at
            them. Built for California classrooms. Every dollar of proceeds funds scholarships.
          </p>
        </Reveal>

        {/* Before/After result cards */}
        <div className="results-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
          {RESULTS.map((r, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                className="result-card-wrap"
                style={{
                  background: "#fff", border: "1px solid var(--soft-gray)",
                  borderRadius: 12, padding: "32px 28px",
                }}
              >
                <div className="font-mono" style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 4 }}>
                  {r.before} before
                </div>
                <span style={{ fontSize: 20, color: "var(--teal)", margin: "6px 0", display: "block" }}>↓</span>
                <div className="font-display" style={{ fontSize: 42, fontWeight: 900, color: "var(--teal)", lineHeight: 1, marginBottom: 10 }}>
                  <AnimatedNumber value={r.after.replace("%", "")} suffix="%" />
                </div>
                <div style={{ fontSize: 13, color: "var(--body-text)", lineHeight: 1.5 }}>{r.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Student quotes */}
        <div className="quotes-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                className="quote-card-wrap"
                style={{ background: "var(--navy)", borderRadius: 12, padding: 28, position: "relative" }}
              >
                <span
                  className="font-display"
                  style={{
                    position: "absolute", top: 16, left: 20,
                    fontSize: 60, lineHeight: 1, color: "rgba(200,148,42,0.3)",
                    pointerEvents: "none",
                  }}
                >
                  &ldquo;
                </span>
                <p style={{ fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.65, marginBottom: 14, paddingTop: 20 }}>
                  &ldquo;{q.text}&rdquo;
                </p>
                <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 600, letterSpacing: 0.5 }}>
                  {q.attr}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#" className="btn-teal">Try the App Free</a>
            <a href="#educators" className="btn-outline-navy">Order for Your School</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
