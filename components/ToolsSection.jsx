"use client";
import { TOOLS } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function ToolsSection() {
  return (
    <section id="tools" style={{ background: "var(--navy)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold-light)", marginBottom: 20 }}>
            Free Tools
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
            Start here. No cost. No catch.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.65, marginBottom: 56, fontWeight: 300 }}>
            Every student deserves access to financial education. These tools are free and
            open to anyone.
          </p>
        </Reveal>

        <div className="tools-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {TOOLS.map((t, i) => (
            <Reveal key={i} delay={i + 1}>
              <a
                href={t.href}
                target={t.href.startsWith("http") ? "_blank" : undefined}
                rel={t.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="tool-card-wrap"
                style={{
                  display: "block", textDecoration: "none",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16, padding: "36px 30px",
                }}
              >
                <span
                  style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
                    textTransform: "uppercase", padding: "4px 10px",
                    borderRadius: 99, display: "inline-block", marginBottom: 20,
                    background: t.badgeColor === "teal" ? "rgba(42,168,154,0.2)" : "rgba(200,148,42,0.2)",
                    color: t.badgeColor === "teal" ? "var(--teal-light)" : "var(--gold-light)",
                  }}
                >
                  {t.badge}
                </span>
                <span style={{ fontSize: 32, marginBottom: 14, display: "block" }}>{t.emoji}</span>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
                  {t.name}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 20 }}>
                  {t.desc}
                </p>
                <span
                  style={{
                    fontSize: 12, fontWeight: 700, letterSpacing: 0.5,
                    textTransform: "uppercase",
                    color: t.badgeColor === "teal" ? "var(--teal-light)" : "var(--gold-light)",
                  }}
                >
                  {t.link} →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
