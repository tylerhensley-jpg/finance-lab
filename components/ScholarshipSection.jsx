"use client";
import { useState } from "react";
import { MILESTONES, DIFFERENTIATORS, SCHOLARS } from "@/data/content";
import Reveal from "./ui/Reveal";
import SketchIcon from "./ui/SketchIcon";

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
          <p style={{ 
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
            fontSize: 17,
            lineHeight: 1.6, 
            color: "var(--body-text)", 
            maxWidth: 680, 
            marginBottom: 64                    /* 👈 More breathing room before the grid */
          }}>
            The plan is step one. The portfolio is step two: our $1,000 scholarship is
            disbursed across four milestones, not handed over all at once. Students earn
            each increment by demonstrating real competency.
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
                <div style={{ 
                  fontSize: 13,             /* 👈 Bumped from 11px */
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
                  fontSize: 17,             /* 👈 Bumped from 13px */
                  fontWeight: 700, 
                  color: "var(--navy)", 
                  marginBottom: 12, 
                  letterSpacing: 0.2 
                }}>
                  {m.title}
                </div>
                <div style={{ 
                  fontSize: 17,             /* 👈 Bumped from 12px */
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

        {/* ── CURRENT SCHOLARS ── */}
        <Reveal>
          <p style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 24,
          }}>
            Meet Our Current Scholars
          </p>
        </Reveal>
        <div
          className="scholars-grid-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 530px))",
            gap: 24,
            marginBottom: 64,
          }}
        >
          {SCHOLARS.map((sc, i) => (
            <Reveal key={sc.name} delay={i + 1}>
              <div
                className="scholar-card-responsive"
                style={{
                  display: "flex",
                  gap: 28,
                  alignItems: "center",
                  background: "#fff",
                  border: "1px solid var(--soft-gray)",
                  borderRadius: 16,
                  padding: "32px 36px",
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(10, 25, 47, 0.03)",
                }}
              >
                <img
                  src={sc.photo}
                  alt={sc.alt}
                  style={{
                    width: 128,
                    height: 128,
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "3px solid var(--gold)",
                  }}
                />
                <div>
                  <p className="font-display" style={{
                    fontSize: 19,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--navy)",
                    lineHeight: 1.45,
                    marginBottom: 14,
                  }}>
                    &ldquo;{sc.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 24, height: 2, background: "var(--gold)", borderRadius: 1 }} />
                    <cite style={{
                      fontStyle: "normal",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--gold)",
                      letterSpacing: 0.5,
                    }}>
                      {sc.name} · {sc.attr}
                    </cite>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

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
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  <SketchIcon iconId={d.iconId} color="var(--gold)" size={30} />
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: 17,         /* 👈 Bumped from 13px */
                    fontWeight: 700, 
                    color: "var(--navy)", 
                    marginBottom: 8 
                  }}>
                    {d.title}
                  </h4>
                  <p style={{ 
                    fontSize: 17,         /* 👈 Bumped from 12px */
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
          <a
            href="mailto:team@thefinancelab.co?subject=Notify%20me%3A%20Finance%20Lab%20Scholarship&body=Name%3A%0ASchool%20(optional)%3A%0A"
            className="btn-gold"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              fontSize: "18px",
              fontWeight: 600
            }}
          >
            Get Notified When Applications Open
          </a>
          <p style={{ fontSize: 13, color: "var(--body-text)", marginTop: 16 }}>
            Or email us directly:{" "}
            <a
              href="mailto:team@thefinancelab.co?subject=Notify%20me%3A%20Finance%20Lab%20Scholarship&body=Name%3A%0ASchool%20(optional)%3A%0A"
              style={{ color: "var(--teal)", fontWeight: 700, textDecoration: "underline" }}
            >
              team@thefinancelab.co
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}