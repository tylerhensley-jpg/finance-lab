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

        {/* Before/After — 2 cards side by side */}
        <div className="results-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 56 }}>
          {RESULTS.map((r, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                className="result-card-wrap"
                style={{
                  background: "#fff", border: "1px solid var(--soft-gray)",
                  borderRadius: 16, padding: "40px 36px",
                }}
              >
                <div className="font-mono" style={{ fontSize: 14, color: "#9CA3AF", marginBottom: 6 }}>
                  {r.before} before
                </div>
                <span style={{ fontSize: 22, color: "var(--teal)", margin: "8px 0", display: "block" }}>↓</span>
                <div className="font-display" style={{ fontSize: 56, fontWeight: 900, color: "var(--teal)", lineHeight: 1, marginBottom: 14 }}>
                  <AnimatedNumber value={r.after.replace("%", "")} suffix="%" />
                </div>
                <div style={{ fontSize: 15, color: "var(--body-text)", lineHeight: 1.55 }}>{r.label}</div>
                <p className="font-mono" style={{ fontSize: 10, color: "#9CA3AF", marginTop: 12, letterSpacing: 1 }}>
                  Pre/post matched cohort · n=368 / n=99
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Student quotes — larger, full-width stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                style={{
                  background: "var(--navy)", borderRadius: 16,
                  padding: "clamp(32px, 5vw, 48px) clamp(28px, 4vw, 48px)",
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Background quotation mark */}
                <span
                  className="font-display"
                  style={{
                    position: "absolute", top: 12, left: 20,
                    fontSize: 80, lineHeight: 1, color: "rgba(200,148,42,0.15)",
                    pointerEvents: "none",
                  }}
                >
                  &ldquo;
                </span>
                <blockquote style={{ position: "relative", zIndex: 1, margin: 0, padding: 0 }}>
                  <p className="font-display" style={{
                    fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 700,
                    fontStyle: "italic", color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.45, marginBottom: 16, maxWidth: 800,
                  }}>
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <footer style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 24, height: 2, background: "var(--gold)", borderRadius: 1 }} />
                    <cite style={{
                      fontStyle: "normal", fontSize: 13, fontWeight: 600,
                      color: "var(--gold)", letterSpacing: 0.5,
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

        <Reveal>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="https://college.thefinancelab.co" className="btn-teal">Try the App Free</a>
            <a href="#educators" className="btn-outline-navy">Order for Your School</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
