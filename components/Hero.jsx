"use client";
import { useState, useEffect } from "react";
import { useInView } from "./ui/useInView";
import Reveal from "./ui/Reveal";

/* ─── TIMELINE DATA ─── */
const TIMELINE_NODES = [
  { id: "explore", label: "Explore", time: "Junior Year", phase: "tcp", desc: "Students discover interests, research majors, and start building a personalized plan for life after high school.", iconId: "compass" },
  { id: "plan", label: "Build the Plan", time: "Senior Year", phase: "tcp", desc: "Decode FAFSA, compare real school costs, and lock in a data-driven action plan — not a guess.", iconId: "blueprint" },
  { id: "apply", label: "Apply & Transition", time: "Senior Spring", phase: "bridge", desc: "Students apply for the Finance Lab Scholarship during spring semester, bridging the plan to the portfolio.", iconId: "paperplane" },
  { id: "invest", label: "Learn to Invest", time: "College Year 1", phase: "flab", desc: "Open a real brokerage account, invest real dollars, and earn $1,000 across four competency milestones.", iconId: "seedling" },
  { id: "present", label: "Arrive Ready", time: "Year 1 Complete", phase: "flab", desc: "Present investment strategy to professionals. Enter adulthood with a direction and a portfolio already growing.", iconId: "shield" },
];

/* ─── NEW SVG ICONS — stroke-width: 2, hand-drawn feel ─── */
function TimelineIcon({ iconId, color, size = 24 }) {
  const s = color;
  const w = 2;
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { display: "block" } };

  switch (iconId) {
    /* Compass: circle + polyline needle */
    case "compass":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke={s} strokeWidth={1.2} strokeLinecap="round" opacity="0.4" />
          <polygon points="14.5,9.5 9.5,14.5 10.8,10.8 14.5,9.5" stroke={s} strokeWidth={w} strokeLinejoin="round" fill={s} fillOpacity="0.2" />
          <polygon points="9.5,14.5 14.5,9.5 13.2,13.2 9.5,14.5" stroke={s} strokeWidth={w} strokeLinejoin="round" fill={s} fillOpacity="0.35" />
        </svg>
      );

    /* Blueprint/Drafting: rect + V-shape compass tool */
    case "blueprint":
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <line x1="3" y1="8" x2="21" y2="8" stroke={s} strokeWidth={w} strokeLinecap="round" opacity="0.3" />
          <path d="M12 10l-3.5 8" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 10l3.5 8" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="1.2" fill={s} fillOpacity="0.4" stroke={s} strokeWidth={1} />
          <line x1="9.2" y1="16" x2="14.8" y2="16" stroke={s} strokeWidth={1.2} strokeLinecap="round" opacity="0.4" />
        </svg>
      );

    /* Paper Plane: polygon + trail line */
    case "paperplane":
      return (
        <svg {...p}>
          <polygon points="3,12 21,4 16,20" stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" fill={s} fillOpacity="0.1" />
          <polyline points="3,12 10,13.5 16,20" stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" />
          <line x1="10" y1="13.5" x2="21" y2="4" stroke={s} strokeWidth={1.2} strokeLinecap="round" opacity="0.35" />
          <path d="M1 18c1-1.5 2.5-2 4-1.5" stroke={s} strokeWidth={1.2} strokeLinecap="round" opacity="0.3" />
        </svg>
      );

    /* Seedling/Sprout: curved leaves + stem */
    case "seedling":
      return (
        <svg {...p}>
          <line x1="12" y1="22" x2="12" y2="11" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <path d="M12 14c-4-1-6-5-5-9 4 1 6 5 5 9z" stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" fill={s} fillOpacity="0.15" />
          <path d="M12 11c3-0.5 5.5-3.5 5-7.5 -3.5 0.5-5.5 3.5-5 7.5z" stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" fill={s} fillOpacity="0.1" />
          <path d="M9 11.5c0.8-0.3 1.6-1 2.2-2" stroke={s} strokeWidth={1} strokeLinecap="round" opacity="0.35" />
        </svg>
      );

    /* Shield + Checkmark */
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 2.5l8 3.5v5c0 5-3.5 8.5-8 10.5C7.5 19.5 4 16 4 11V6z" stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" fill={s} fillOpacity="0.08" />
          <polyline points="8.5,12 11,14.5 16,9.5" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    default: return null;
  }
}

/* ─── HELPERS ─── */
function getColor(ph) { return ph === "tcp" ? "var(--teal-light)" : "var(--gold-light)"; }
function getGlowClass(ph) { return ph === "tcp" ? "active-teal" : "active-gold"; }
function getBg(ph) { if (ph === "tcp") return "rgba(42,168,154,0.12)"; if (ph === "flab") return "rgba(200,148,42,0.12)"; return "linear-gradient(135deg, rgba(42,168,154,0.12), rgba(200,148,42,0.12))"; }
function getLabel(ph) { if (ph === "tcp") return "The College Project"; if (ph === "flab") return "The Finance Lab"; return "The Bridge"; }
function getLabelColor(ph) { return ph === "tcp" ? "var(--teal-light)" : "var(--gold)"; }


export default function Hero() {
  const [activeNode, setActiveNode] = useState(null);
  const active = activeNode !== null ? TIMELINE_NODES[activeNode] : null;
  const [tlRef, tlInView] = useInView();

  return (
    <section
      style={{
        minHeight: "100vh", background: "var(--navy)",
        display: "flex", flexDirection: "column",
        alignItems: "stretch",
        textAlign: "center", padding: "88px clamp(16px,5vw,40px) 40px",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Background effects */}
      <div className="hero-glow" style={{ position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(26,122,110,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(200,148,42,0.10) 0%, transparent 60%)",
      }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.025,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* ── TOP 25%: Headline cluster ── */}
      <div style={{ flex: "0 0 auto", paddingTop: "2vh", textAlign: "center", margin: "0 auto" }}>
        <Reveal>
          <p className="font-mono" style={{
            fontSize: 11, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase",
            color: "var(--gold-light)", marginBottom: 24, opacity: 0.9,
          }}>
            A 501(c)(3) Nonprofit · Roseville, CA
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="font-display" style={{
            fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 900,
            lineHeight: 1.02, color: "#fff", marginBottom: 16,
          }}>
            The <em style={{ fontStyle: "italic", color: "var(--teal-light)" }}>Plan.</em>
            <br />
            Then the <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Portfolio.</em>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p style={{
            fontSize: "clamp(15px, 1.8vw, 19px)", fontWeight: 300,
            color: "rgba(255,255,255,0.68)", maxWidth: 760,
            lineHeight: 1.7, margin: "0 auto 0",
          }}>
            We meet every student where they are — with a personalized roadmap and
            real investing skills — so they begin adulthood{" "}
            <strong style={{ color: "#fff", fontWeight: 600 }}>one step ahead.</strong>
          </p>
        </Reveal>
      </div>

      {/* ── TIMELINE: 100% width, centered, SCALED UP ── */}
      <div ref={tlRef} style={{ 
        flex: "1 1 auto", 
        display: "flex", 
        flexDirection: "column",     /* 👈 FIX: Stops the horizontal squishing */
        justifyContent: "center",    /* 👈 FIX: Centers it vertically */
        alignItems: "stretch",       /* 👈 FIX: Forces the line to stretch edge-to-edge */
        width: "min(95%, 1200px)",   /* 👈 FIX: Increased max-width for a bigger stage */
        margin: "0 auto", 
        paddingTop: 32, 
        paddingBottom: 24 
      }}>
        <Reveal delay={3} className="timeline-horizontal" style={{ width: "100%" }}>
          <div style={{ width: "100%", position: "relative" }}>

            {/* Phase labels - Scaled up typography */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, padding: "0 16px" }}>
              <span className="font-mono" style={{ fontSize: 16, fontWeight:600, letterSpacing: 3, textTransform: "uppercase", color: "var(--teal-light)", opacity: 0.8 }}>← The College Project</span>
              <span className="font-mono" style={{ fontSize: 16, fontWeight:600, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", opacity: 0.8 }}>The Finance Lab →</span>
            </div>

            {/* SVG track - Thicker 6px line */}
            <div style={{ position: "relative", padding: "0 16px" }}>
              <svg style={{ position: "absolute", top: 32, left: 16, right: 16, width: "calc(100% - 32px)", height: 6, overflow: "visible" }}>
                <line x1="0" y1="3" x2="100%" y2="3" stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeLinecap="round" />
                <line x1="0" y1="3" x2="100%" y2="3"
                  stroke="url(#trackGrad)" strokeWidth="6" strokeLinecap="round"
                  className={`timeline-draw-line ${tlInView ? "animate" : ""}`}
                />
                <defs>
                  <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--teal-light)" stopOpacity="0.7" />
                    <stop offset="45%" stopColor="var(--teal-light)" stopOpacity="0.7" />
                    <stop offset="55%" stopColor="var(--gold)" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Nodes - Scaled up from 42px to 64px (and 80px on hover) */}
              <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
                {TIMELINE_NODES.map((node, i) => {
                  const isActive = activeNode === i;
                  const color = getColor(node.phase);
                  return (
                    <div key={node.id} className="tl-node" style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 0", minWidth: 0 }}
                      onMouseEnter={() => setActiveNode(i)} onMouseLeave={() => setActiveNode(null)} onClick={() => setActiveNode(isActive ? null : i)}>
                      
                      {/* HUGE DOTS */}
                      <div className={`tl-node-dot ${isActive ? getGlowClass(node.phase) : ""}`} style={{
                        width: isActive ? 80 : 64, height: isActive ? 80 : 64,
                        borderRadius: "50%",
                        background: isActive ? color : "var(--navy)",
                        border: `3px solid ${color}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", /* Bouncy pop effect */
                        cursor: "pointer",
                        boxShadow: isActive ? `0 0 24px ${color}50` : "none" /* Adds a glow when hovered */
                      }}>
                        {/* BIGGER ICONS */}
                        <TimelineIcon iconId={node.iconId} color={isActive ? "var(--navy)" : color} size={isActive ? 36 : 28} />
                      </div>
                      
                      {/* Bigger Labels */}
                      <span className="font-mono" style={{ fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: isActive ? color : "rgba(255,255,255,0.4)", marginTop: 16, transition: "color 0.3s", whiteSpace: "nowrap" }}>{node.time}</span>
                      <span style={{ fontSize: 16, fontWeight: isActive ? 700 : 500, color: isActive ? "#fff" : "rgba(255,255,255,0.5)", marginTop: 6, transition: "all 0.3s", textAlign: "center", lineHeight: 1.3, maxWidth: 120 }}>{node.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detail card - More breathing room */}
            <div style={{ marginTop: 32, minHeight: 90 }}>
              {active ? (
                <div key={active.id} style={{
                  background: getBg(active.phase),
                  border: `1px solid ${getColor(active.phase)}30`,
                  borderRadius: 16, padding: "20px 32px", textAlign: "left",
                  animation: "fadeInCard 0.3s ease forwards",
                  maxWidth: "800px", margin: "0 auto" /* Keeps the text readable */
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span className="font-mono" style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: getLabelColor(active.phase), background: `${getLabelColor(active.phase)}15`, padding: "4px 10px", borderRadius: 4 }}>{getLabel(active.phase)}</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{active.label}</span>
                  </div>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>{active.desc}</p>
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <p className="font-mono" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>Hover over a milestone to explore the journey</p>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* ── VERTICAL STEPPER (mobile < 768px) ── */}
        <div className="timeline-vertical" style={{ display: "none", flexDirection: "column", gap: 0, width: "100%", padding: "0 4px" }}>
          {TIMELINE_NODES.map((node, i) => {
            const isActive = activeNode === i;
            const color = getColor(node.phase);
            const isLast = i === TIMELINE_NODES.length - 1;
            return (
              <div key={node.id} style={{ display: "flex", gap: 16, cursor: "pointer" }}
                onClick={() => setActiveNode(isActive ? null : i)}>
                {/* Left: dot + connector line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div className={`tl-node-dot ${isActive ? getGlowClass(node.phase) : ""}`} style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: isActive ? color : "var(--navy)",
                    border: `2px solid ${color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <TimelineIcon iconId={node.iconId} color={isActive ? "var(--navy)" : color} size={18} />
                  </div>
                  {!isLast && (
                    <div style={{ width: 2, flex: "1 1 auto", minHeight: 32, background: `linear-gradient(to bottom, ${color}40, ${getColor(TIMELINE_NODES[i+1].phase)}40)` }} />
                  )}
                </div>
                {/* Right: text */}
                <div style={{ paddingTop: 6, paddingBottom: isLast ? 0 : 24 }}>
                  <span className="font-mono" style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: isActive ? color : "rgba(255,255,255,0.35)" }}>{node.time}</span>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: isActive ? "#fff" : "rgba(255,255,255,0.6)", marginTop: 2, marginBottom: 4 }}>{node.label}</h4>
                  {isActive && (
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.55, margin: 0, animation: "fadeInCard 0.3s ease forwards" }}>{node.desc}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── BOTTOM: CTAs + pills (SCALED UP) ── */}
      <div style={{ flex: "0 0 auto", marginTop: "24px" }}>
        <Reveal delay={4}>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            <a href="#journey" className="btn-gold" style={{ 
              padding: "16px 40px",   /* 👈 Chunkier padding */
              fontSize: "18px",       /* 👈 Bigger text */
              fontWeight: 600,
              letterSpacing: "0.5px"
            }}>See How It Works</a>
            
            <a href="#tcp" className="btn-outline-white" style={{ 
              padding: "16px 40px",   /* 👈 Chunkier padding */
              fontSize: "18px",       /* 👈 Bigger text */
              fontWeight: 600,
              letterSpacing: "0.5px"
            }}>Explore the Book</a>
          </div>
        </Reveal>

        <Reveal delay={5}>
          <div className="audience-row-responsive" style={{ display: "flex", justifyContent: "center" }}>
            <a href="#tcp" className="audience-pill" style={{ 
              borderRadius: "99px 0 0 99px",
              padding: "14px 28px",   /* 👈 Increased pill height/width */
              fontSize: "16px",       /* 👈 Bumped up from default */
              fontWeight: 500
            }}>I&apos;m a Student</a>
            
            <a href="#educators" className="audience-pill" style={{ 
              padding: "14px 28px",
              fontSize: "16px",
              fontWeight: 500
            }}>I&apos;m an Educator</a>
            
            <a href="#impact" className="audience-pill" style={{ 
              borderRadius: "0 99px 99px 0",
              padding: "14px 28px",
              fontSize: "16px",
              fontWeight: 500
            }}>I Want to Support</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
