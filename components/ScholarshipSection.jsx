"use client";
import { useState } from "react";
import { MILESTONES, DIFFERENTIATORS } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function ScholarshipSection() {
  const [activeMilestone, setActiveMilestone] = useState(null);

  return (
    <section id="scholarship" style={{ 
      background: "var(--cream)", 
      padding: "120px clamp(20px,5vw,40px)" /* 👈 Bumped to 120px padding to match other sections */
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
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
            The Finance Lab Scholarship
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
            maxWidth: 800, 
            marginBottom: 24 
          }}>
            Learn to invest by{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>actually investing.</em>
          </h2>
        </Reveal>

        {/* ── SUBTITLE ── */}
        <Reveal delay={2}>
          <p style={{ 
            fontSize: 20,                       /* 👈 Bumped from 16px */
            lineHeight: 1.6, 
            color: "var(--body-text)", 
            maxWidth: 680, 
            marginBottom: 64                    /* 👈 More breathing room before the grid */
          }}>
            Our $1,000 scholarship is disbursed across four milestones — not handed over all
            at once. Students earn each increment by demonstrating real competency.
          </p>
        </Reveal>

        {/* ── MILESTONE CARDS ── */}
        <Reveal>
          <div
            className="milestones-responsive"
            style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              marginBottom: 64, border: "1px solid var(--soft-gray)",
              borderRadius: 16, overflow: "hidden",
            }}
          >
            {MILESTONES.map((m, i) => (
              <div
                key={i}
                className="milestone-card"
                style={{
                  padding: "48px 32px", /* 👈 Increased padding for taller, premium feel */
                  borderRight: i < 3 ? "1px solid var(--soft-gray)" : "none",
                  background: activeMilestone === i ? "rgba(200,148,42,0.06)" : "#fff",
                  cursor: "pointer",
                  transition: "background 0.2s ease", /* 👈 Added a smooth hover transition */
                }}
                onMouseEnter={() => setActiveMilestone(i)}
                onMouseLeave={() => setActiveMilestone(null)}
              >
                <div className="font-mono" style={{ 
                  fontSize: 12,             /* 👈 Bumped from 11px */
                  fontWeight: 600,
                  letterSpacing: 2, 
                  color: "var(--gold)", 
                  marginBottom: 12 
                }}>
                  MILESTONE {m.num}
                </div>
                <div className="font-display" style={{ 
                  fontSize: 40,             /* 👈 Scaled up from 28px for impact */
                  fontWeight: 800, 
                  color: "var(--navy)", 
                  marginBottom: 8 
                }}>
                  {m.amount}
                </div>
                <div style={{ 
                  fontSize: 16,             /* 👈 Bumped from 13px */
                  fontWeight: 700, 
                  color: "var(--navy)", 
                  marginBottom: 12, 
                  letterSpacing: 0.2 
                }}>
                  {m.title}
                </div>
                <div style={{ 
                  fontSize: 15,             /* 👈 Bumped from 12px */
                  color: "var(--body-text)", 
                  lineHeight: 1.6, 
                  opacity: 0.85 
                }}>
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── DIFFERENTIATORS GRID ── */}
        <div className="diff-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 56 }}>
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={i} delay={(i % 3) + 1}>
              <div
                className="diff-card"
                style={{
                  display: "flex", alignItems: "flex-start", gap: 16, 
                  padding: "28px 24px", /* 👈 Chunkier padding */
                  background: "#fff", 
                  border: "1px solid var(--soft-gray)", 
                  borderRadius: 12,     /* 👈 Smoother corners */
                }}
              >
                <span style={{ fontSize: 28, flexShrink: 0 }}>{d.icon}</span> {/* 👈 Bumped icon size */}
                <div>
                  <h4 style={{ 
                    fontSize: 16,         /* 👈 Bumped from 13px */
                    fontWeight: 700, 
                    color: "var(--navy)", 
                    marginBottom: 8 
                  }}>
                    {d.title}
                  </h4>
                  <p style={{ 
                    fontSize: 15,         /* 👈 Bumped from 12px */
                    color: "var(--body-text)", 
                    lineHeight: 1.6, 
                    opacity: 0.85 
                  }}>
                    {d.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── CTA BUTTON ── */}
        <Reveal>
          <a href="#" className="btn-gold" style={{
            display: "inline-block",
            padding: "16px 40px",   /* 👈 Chunkier padding */
            fontSize: "18px",       /* 👈 Bigger text */
            fontWeight: 600
          }}>Apply for the Scholarship</a>
        </Reveal>
      </div>
    </section>
  );
}