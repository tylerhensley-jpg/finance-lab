"use client";
import { TOOLS } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function ToolsSection() {
  return (
    <section id="tools" style={{ 
      background: "var(--navy)", 
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
            color: "var(--gold-light)", 
            marginBottom: 24 
          }}>
            Free Tools
          </p>
        </Reveal>

        {/* ── HEADLINE ── */}
        <Reveal delay={1}>
          <h2 className="font-display" style={{ 
            fontSize: "clamp(44px, 5vw, 64px)", /* 👈 Scaled up */
            fontWeight: 700, 
            lineHeight: 1.05,                   /* 👈 Tightened spacing */
            letterSpacing: "-0.5px",            /* 👈 Pulled letters together */
            color: "#fff", 
            marginBottom: 24 
          }}>
            Start here. No cost. No catch.
          </h2>
        </Reveal>

        {/* ── SUBTITLE ── */}
        <Reveal delay={2}>
          <p style={{ 
            fontSize: 20,                       /* 👈 Bumped from 16px */
            color: "rgba(255,255,255,0.85)",    /* 👈 Increased contrast slightly */
            maxWidth: 640, 
            lineHeight: 1.6, 
            marginBottom: 64,                   /* 👈 More breathing room before the grid */
            fontWeight: 300 
          }}>
            Every student deserves access to financial education. These tools are free and
            open to anyone.
          </p>
        </Reveal>

        {/* ── TOOLS GRID ── */}
        <div className="tools-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 /* 👈 Increased gap from 16px */ }}>
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
                  borderRadius: 16, 
                  padding: "48px 40px", /* 👈 Increased padding */
                  transition: "background 0.2s ease, transform 0.2s ease", /* 👈 Added smooth hover transition */
                }}
              >
                {/* Badge */}
                <span
                  style={{
                    fontSize: 12,             /* 👈 Bumped from 10px */
                    fontWeight: 700, 
                    letterSpacing: 1.5,
                    textTransform: "uppercase", 
                    padding: "6px 14px",      /* 👈 Increased badge padding slightly */
                    borderRadius: 99, 
                    display: "inline-block", 
                    marginBottom: 24,
                    background: t.badgeColor === "teal" ? "rgba(42,168,154,0.2)" : "rgba(200,148,42,0.2)",
                    color: t.badgeColor === "teal" ? "var(--teal-light)" : "var(--gold-light)",
                  }}
                >
                  {t.badge}
                </span>

                {/* Emoji */}
                <span style={{ 
                  fontSize: 48,               /* 👈 Bumped from 32px */
                  marginBottom: 20, 
                  display: "block" 
                }}>{t.emoji}</span>

                {/* Title */}
                <h3 className="font-display" style={{ 
                  fontSize: 26,               /* 👈 Bumped from 22px */
                  fontWeight: 700, 
                  color: "#fff", 
                  marginBottom: 12 
                }}>
                  {t.name}
                </h3>

                {/* Description */}
                <p style={{ 
                  fontSize: 16,               /* 👈 Bumped from 13px */
                  color: "rgba(255,255,255,0.75)", 
                  lineHeight: 1.6, 
                  marginBottom: 32            /* 👈 Pushed the link down a bit more */
                }}>
                  {t.desc}
                </p>

                {/* Link Text */}
                <span
                  style={{
                    fontSize: 14,             /* 👈 Bumped from 12px */
                    fontWeight: 700, 
                    letterSpacing: 1,         /* 👈 Widened tracking for a CTA feel */
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