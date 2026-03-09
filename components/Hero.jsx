"use client";
import { useState } from "react";
import Reveal from "./ui/Reveal";

const TIMELINE_NODES = [
  {
    id: "explore",
    label: "Explore",
    time: "Junior Year",
    phase: "tcp",
    desc: "Students discover interests, research majors, and start building a personalized plan for life after high school.",
    iconId: "explore",
  },
  {
    id: "plan",
    label: "Build the Plan",
    time: "Senior Year",
    phase: "tcp",
    desc: "Decode FAFSA, compare real school costs, and lock in a data-driven action plan — not a guess.",
    iconId: "plan",
  },
  {
    id: "apply",
    label: "Apply & Transition",
    time: "Senior Spring",
    phase: "bridge",
    desc: "Students apply for the Finance Lab Scholarship during spring semester, bridging the plan to the portfolio.",
    iconId: "bridge",
  },
  {
    id: "invest",
    label: "Learn to Invest",
    time: "College Year 1",
    phase: "flab",
    desc: "Open a real brokerage account, invest real dollars, and earn $1,000 across four competency milestones.",
    iconId: "invest",
  },
  {
    id: "present",
    label: "Arrive Ready",
    time: "Year 1 Complete",
    phase: "flab",
    desc: "Present investment strategy to professionals. Enter adulthood with a direction and a portfolio already growing.",
    iconId: "cap",
  },
];

/* Hand-drawn style SVG icons — slightly imperfect strokes, rounded caps */
function TimelineIcon({ iconId, color, size = 16 }) {
  const stroke = color;
  const sw = 1.8; // stroke width
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", xmlns: "http://www.w3.org/2000/svg",
    style: { display: "block" },
  };

  switch (iconId) {
    /* Compass — explore / discover */
    case "explore":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeDasharray="0.1 0" />
          <path d="M12 2.5v1.5M12 20v1.5M2.5 12H4M20 12h1.5" stroke={stroke} strokeWidth={1.2} strokeLinecap="round" opacity="0.5" />
          <polygon points="10,14 8.5,8.5 14,10 15.5,15.5" fill={stroke} opacity="0.25" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" />
          <line x1="10" y1="14" x2="14" y2="10" stroke={stroke} strokeWidth={1} strokeLinecap="round" />
        </svg>
      );

    /* Clipboard with checkmarks — build the plan */
    case "plan":
      return (
        <svg {...props}>
          <rect x="5" y="3.5" width="14" height="17" rx="2.2" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <path d="M9 3.5V2.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <path d="M8.5 9.5l1.8 1.8 3.5-3.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <line x1="8.5" y1="15" x2="15.5" y2="15" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.45" />
          <line x1="8.5" y1="18" x2="13" y2="18" stroke={stroke} strokeWidth={1.2} strokeLinecap="round" opacity="0.3" />
        </svg>
      );

    /* Two arrows converging — bridge / transition */
    case "bridge":
      return (
        <svg {...props}>
          <path d="M4 8c3 0 5 1.5 8 4" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 8c-3 0-5 1.5-8 4" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="2" fill={stroke} opacity="0.3" stroke={stroke} strokeWidth={1.2} />
          <path d="M12 14v5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <path d="M10 17.5l2 2 2-2" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    /* Seedling growing / upward trend — invest */
    case "invest":
      return (
        <svg {...props}>
          <path d="M4 20c1-4 4-7 8-9.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <path d="M12 10.5c2.5-2 5.5-3.2 8-3.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <path d="M17 4.5l3 2.5-3.2 1" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="17" r="0.8" fill={stroke} opacity="0.4" />
          <circle cx="12" cy="10.5" r="1" fill={stroke} opacity="0.3" stroke={stroke} strokeWidth={1} />
        </svg>
      );

    /* Graduation cap — arrive ready */
    case "cap":
      return (
        <svg {...props}>
          <path d="M2.5 9.5L12 5l9.5 4.5L12 14 2.5 9.5z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" fill={stroke} fillOpacity="0.15" />
          <path d="M7 11.5v5c0 0 2 2.5 5 2.5s5-2.5 5-2.5v-5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <line x1="21.5" y1="9.5" x2="21.5" y2="15.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <circle cx="21.5" cy="16.5" r="1" fill={stroke} opacity="0.4" />
        </svg>
      );

    default:
      return null;
  }
}

function getPhaseColor(phase) {
  if (phase === "tcp") return "var(--teal-light)";
  if (phase === "flab") return "var(--gold-light)";
  return "var(--gold-light)";
}

function getPhaseGlow(phase) {
  if (phase === "tcp") return "rgba(42,168,154,0.4)";
  if (phase === "flab") return "rgba(240,201,107,0.4)";
  return "rgba(240,201,107,0.3)";
}

function getPhaseBg(phase) {
  if (phase === "tcp") return "rgba(42,168,154,0.12)";
  if (phase === "flab") return "rgba(200,148,42,0.12)";
  return "bg-bridge";
}

function getPhaseLabel(phase) {
  if (phase === "tcp") return "The College Project";
  if (phase === "flab") return "The Finance Lab";
  return "The Bridge";
}

function getPhaseLabelColor(phase) {
  if (phase === "tcp") return "var(--teal-light)";
  if (phase === "flab") return "var(--gold)";
  return "var(--gold)";
}

export default function Hero() {
  const [activeNode, setActiveNode] = useState(null);
  const active = activeNode !== null ? TIMELINE_NODES[activeNode] : null;

  return (
    <section
      style={{
        minHeight: "100vh", background: "var(--navy)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "100px clamp(20px,5vw,40px) 48px",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Keyframe for card fade-in */}
      <style>{`
        @keyframes fadeInCard {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .timeline-node { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
        .timeline-node:hover { transform: scale(1.08); }
        @media (max-width: 640px) {
          .timeline-phase-labels { display: none !important; }
          .timeline-node-label { font-size: 9px !important; max-width: 56px !important; }
          .timeline-time-label { font-size: 7px !important; letter-spacing: 1px !important; }
          .timeline-detail-card { padding: 16px 20px !important; }
          .timeline-detail-card p { font-size: 13px !important; }
        }
      `}</style>

      {/* Animated gradient glow */}
      <div
        className="hero-glow"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(26,122,110,0.18) 0%, transparent 70%), " +
            "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(200,148,42,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Eyebrow ── */}
      <Reveal>
        <p
          className="font-mono"
          style={{
            fontSize: 11, fontWeight: 500, letterSpacing: 3,
            textTransform: "uppercase", color: "var(--gold)", marginBottom: 28,
          }}
        >
          A 501(c)(3) Nonprofit · Roseville, CA
        </p>
      </Reveal>

      {/* ── Headline ── */}
      <Reveal delay={1}>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(44px, 7.5vw, 86px)", fontWeight: 900,
            lineHeight: 1.02, color: "#fff", marginBottom: 20,
          }}
        >
          The <em style={{ fontStyle: "italic", color: "var(--teal-light)" }}>Plan.</em>
          <br />
          Then the <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Portfolio.</em>
        </h1>
      </Reveal>

      {/* ── New subhead ── */}
      <Reveal delay={2}>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 300,
            color: "rgba(255,255,255,0.7)", maxWidth: 580,
            lineHeight: 1.7, marginBottom: 44,
          }}
        >
          We meet every student where they are — with a personalized roadmap and real
          investing skills — so they begin adulthood{" "}
          <strong style={{ color: "#fff", fontWeight: 600 }}>one step ahead.</strong>
        </p>
      </Reveal>

      {/* ── INTERACTIVE TIMELINE ── */}
      <Reveal delay={3}>
        <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", position: "relative" }}>

          {/* Phase labels above the line */}
          <div className="timeline-phase-labels" style={{
            display: "flex", justifyContent: "space-between", marginBottom: 14,
            padding: "0 6px",
          }}>
            <span className="font-mono" style={{
              fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
              color: "var(--teal-light)", opacity: 0.6,
            }}>
              ← The College Project
            </span>
            <span className="font-mono" style={{
              fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
              color: "var(--gold)", opacity: 0.6,
            }}>
              The Finance Lab →
            </span>
          </div>

          {/* Timeline track */}
          <div style={{ position: "relative", padding: "0 6px" }}>

            {/* Background track */}
            <div style={{
              position: "absolute", top: 17, left: 6, right: 6, height: 3,
              background: "rgba(255,255,255,0.06)", borderRadius: 2,
            }} />

            {/* Teal segment */}
            <div style={{
              position: "absolute", top: 17, left: 6, width: "37%", height: 3,
              background: "var(--teal-light)", borderRadius: "2px 0 0 2px", opacity: 0.45,
            }} />

            {/* Gradient bridge */}
            <div style={{
              position: "absolute", top: 17, left: "37%", width: "26%", height: 3,
              background: "linear-gradient(90deg, var(--teal-light), var(--gold))", opacity: 0.45,
            }} />

            {/* Gold segment */}
            <div style={{
              position: "absolute", top: 17, left: "63%", right: 6, height: 3,
              background: "var(--gold)", borderRadius: "0 2px 2px 0", opacity: 0.45,
            }} />

            {/* Nodes row */}
            <div style={{
              display: "flex", justifyContent: "space-between",
              position: "relative", zIndex: 2,
            }}>
              {TIMELINE_NODES.map((node, i) => {
                const isActive = activeNode === i;
                const color = getPhaseColor(node.phase);
                const glow = getPhaseGlow(node.phase);

                return (
                  <div
                    key={node.id}
                    className="timeline-node"
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center",
                      cursor: "pointer", flex: "1 1 0", minWidth: 0,
                    }}
                    onMouseEnter={() => setActiveNode(i)}
                    onMouseLeave={() => setActiveNode(null)}
                    onClick={() => setActiveNode(isActive ? null : i)}
                  >
                    {/* Dot */}
                    <div style={{
                      width: isActive ? 36 : 30,
                      height: isActive ? 36 : 30,
                      borderRadius: "50%",
                      background: isActive ? color : "var(--navy)",
                      border: `2.5px solid ${color}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: isActive
                        ? `0 0 16px ${glow}, 0 0 32px ${glow}`
                        : `0 0 0 transparent`,
                    }}>
                      <TimelineIcon
                        iconId={node.iconId}
                        color={isActive ? "var(--navy)" : color}
                        size={isActive ? 18 : 15}
                      />
                    </div>

                    {/* Time */}
                    <span className="font-mono timeline-time-label" style={{
                      fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase",
                      color: isActive ? color : "rgba(255,255,255,0.3)",
                      marginTop: 10, transition: "color 0.3s",
                      whiteSpace: "nowrap",
                    }}>
                      {node.time}
                    </span>

                    {/* Label */}
                    <span className="timeline-node-label" style={{
                      fontSize: 11, fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
                      marginTop: 4, transition: "all 0.3s",
                      textAlign: "center", lineHeight: 1.3,
                      maxWidth: 90,
                    }}>
                      {node.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail card */}
          <div style={{ marginTop: 20, minHeight: 86 }}>
            {active ? (
              <div
                className="timeline-detail-card"
                key={active.id}
                style={{
                  background: active.phase === "bridge"
                    ? "linear-gradient(135deg, rgba(42,168,154,0.12), rgba(200,148,42,0.12))"
                    : getPhaseBg(active.phase),
                  border: `1px solid ${getPhaseColor(active.phase)}30`,
                  borderRadius: 12, padding: "18px 28px",
                  textAlign: "left",
                  animation: "fadeInCard 0.3s ease forwards",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span className="font-mono" style={{
                    fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
                    color: getPhaseLabelColor(active.phase),
                    background: `${getPhaseLabelColor(active.phase)}15`,
                    padding: "3px 8px", borderRadius: 4,
                  }}>
                    {getPhaseLabel(active.phase)}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>
                    {active.label}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>
                  {active.desc}
                </p>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "18px 0" }}>
                <p className="font-mono" style={{
                  fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                }}>
                  Hover over a milestone to explore the journey
                </p>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      {/* ── CTAs ── */}
      <Reveal delay={4}>
        <div style={{
          display: "flex", gap: 16, justifyContent: "center",
          flexWrap: "wrap", marginTop: 28,
        }}>
          <a href="#journey" className="btn-gold">See How It Works</a>
          <a href="#tcp" className="btn-outline-white">Explore the Book</a>
        </div>
      </Reveal>

      {/* Audience pills */}
      <Reveal delay={5}>
        <div
          className="audience-row-responsive"
          style={{ marginTop: 36, display: "flex", justifyContent: "center" }}
        >
          <a href="#tcp" className="audience-pill" style={{ borderRadius: "99px 0 0 99px" }}>
            I&apos;m a Student
          </a>
          <a href="#educators" className="audience-pill">
            I&apos;m an Educator
          </a>
          <a href="#impact" className="audience-pill" style={{ borderRadius: "0 99px 99px 0" }}>
            I Want to Support
          </a>
        </div>
      </Reveal>
    </section>
  );
}
