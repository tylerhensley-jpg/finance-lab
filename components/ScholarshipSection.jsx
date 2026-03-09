"use client";
import { useState } from "react";
import { MILESTONES, DIFFERENTIATORS } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function ScholarshipSection() {
  const [activeMilestone, setActiveMilestone] = useState(null);

  return (
    <section id="scholarship" style={{ background: "var(--cream)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            The Finance Lab Scholarship
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4vw, 50px)", fontWeight: 700, color: "var(--navy)", maxWidth: 660, marginBottom: 16 }}>
            Learn to invest by{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>actually investing.</em>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--body-text)", maxWidth: 600, marginBottom: 56 }}>
            Our $1,000 scholarship is disbursed across four milestones — not handed over all
            at once. Students earn each increment by demonstrating real competency.
          </p>
        </Reveal>

        {/* Milestone cards */}
        <Reveal>
          <div
            className="milestones-responsive"
            style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              marginBottom: 40, border: "1px solid var(--soft-gray)",
              borderRadius: 16, overflow: "hidden",
            }}
          >
            {MILESTONES.map((m, i) => (
              <div
                key={i}
                className="milestone-card"
                style={{
                  padding: "36px 28px",
                  borderRight: i < 3 ? "1px solid var(--soft-gray)" : "none",
                  background: activeMilestone === i ? "rgba(200,148,42,0.06)" : "#fff",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setActiveMilestone(i)}
                onMouseLeave={() => setActiveMilestone(null)}
              >
                <div className="font-mono" style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", marginBottom: 8 }}>
                  MILESTONE {m.num}
                </div>
                <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>
                  {m.amount}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", marginBottom: 8, letterSpacing: 0.2 }}>
                  {m.title}
                </div>
                <div style={{ fontSize: 12, color: "var(--body-text)", lineHeight: 1.6, opacity: 0.8 }}>
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Differentiators grid */}
        <div className="diff-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={i} delay={(i % 3) + 1}>
              <div
                className="diff-card"
                style={{
                  display: "flex", alignItems: "flex-start", gap: 14, padding: 20,
                  background: "#fff", border: "1px solid var(--soft-gray)", borderRadius: 10,
                }}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{d.icon}</span>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>
                    {d.title}
                  </h4>
                  <p style={{ fontSize: 12, color: "var(--body-text)", lineHeight: 1.55, opacity: 0.85 }}>
                    {d.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a href="#" className="btn-gold">Apply for the Scholarship</a>
        </Reveal>
      </div>
    </section>
  );
}
