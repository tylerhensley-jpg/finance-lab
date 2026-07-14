"use client";
import { useMemo, useRef, useState } from "react";
import Reveal from "./ui/Reveal";

// Series colors validated for contrast + colorblind separation on the light surface
// (deepened steps of the site's teal and gold).
const BALANCE_COLOR = "#12967F";
const CONTRIB_COLOR = "#A8761B";

const STAGE_DEFS = [
  { emoji: "🎒", label: "Teen/Student", note: "Part-time, side hustles", amt: 25, yrs: 4, ret: 10 },
  { emoji: "🎓", label: "First Job", note: "Entry-level", amt: 200, yrs: 5, ret: 10 },
  { emoji: "📈", label: "Career Growth", note: "Raises, promotions", amt: 500, yrs: 10, ret: 9 },
  { emoji: "💼", label: "Peak Earning", note: "Established career", amt: 1200, yrs: 15, ret: 8 },
  { emoji: "🏡", label: "Pre-Retirement", note: "Max contributions", amt: 2000, yrs: 10, ret: 7 },
];

const fmt = (n) => `$${Math.round(n).toLocaleString()}`;
const fmtAxis = (n) =>
  n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${Math.round(n / 1000)}K`;

export default function LifeStageCalculator() {
  const [stages, setStages] = useState(
    STAGE_DEFS.map((s) => ({ amt: String(s.amt), yrs: String(s.yrs), ret: String(s.ret) }))
  );
  const [hoverYear, setHoverYear] = useState(null);
  const svgRef = useRef(null);

  const setField = (i, field, value) => {
    setStages((prev) => prev.map((s, idx) => (idx === i ? { ...s, [field]: value } : s)));
  };

  const result = useMemo(() => {
    // Monthly compounding, contributions at end of month (ordinary annuity) —
    // same math as the Catalyst source.
    let balance = 0;
    let totalContrib = 0;
    let year = 0;
    const points = [{ year: 0, balance: 0, contrib: 0 }];
    const perStage = [];
    const bands = [];

    stages.forEach((s, i) => {
      const amt = +s.amt || 0;
      const yrs = Math.max(0, Math.floor(+s.yrs || 0));
      const retPct = +s.ret || STAGE_DEFS[i].ret;
      const mr = retPct / 100 / 12;
      const startBalance = balance;
      const startYear = year;
      for (let y = 0; y < yrs; y++) {
        for (let m = 0; m < 12; m++) {
          balance = balance * (1 + mr) + amt;
          totalContrib += amt;
        }
        year++;
        points.push({ year, balance, contrib: totalContrib });
      }
      perStage.push({ ...STAGE_DEFS[i], amt, yrs, retPct, added: balance - startBalance });
      if (yrs > 0) bands.push({ from: startYear, to: year, emoji: STAGE_DEFS[i].emoji });
    });

    return {
      balance,
      totalContrib,
      growth: balance - totalContrib,
      totalYears: year,
      points,
      perStage,
      bands,
    };
  }, [stages]);

  // ── Chart geometry ──
  const W = 800, H = 340;
  const pad = { top: 34, right: 110, bottom: 40, left: 64 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;
  const { totalYears, points } = result;

  const rawMax = Math.max(result.balance, 1) * 1.08;
  const mag = 10 ** Math.floor(Math.log10(rawMax));
  const yMax = Math.ceil(rawMax / (mag / 2)) * (mag / 2);

  const xAt = (yr) => pad.left + (totalYears ? (yr / totalYears) * plotW : 0);
  const yAt = (v) => pad.top + plotH - (v / yMax) * plotH;

  const linePath = (key) =>
    points.map((p, i) => `${i === 0 ? "M" : "L"}${xAt(p.year).toFixed(1)},${yAt(p[key]).toFixed(1)}`).join(" ");
  const areaPath = (key) =>
    `${linePath(key)} L${(pad.left + plotW).toFixed(1)},${(pad.top + plotH).toFixed(1)} L${pad.left},${(pad.top + plotH).toFixed(1)} Z`;

  const xTickStep = Math.max(1, Math.floor(totalYears / 8) || 1);
  const xTicks = [];
  for (let y = 0; y <= totalYears; y += xTickStep) xTicks.push(y);

  const hoverPoint = hoverYear === null ? null : points[Math.min(hoverYear, points.length - 1)];

  const onMove = (e) => {
    const svg = svgRef.current;
    if (!svg || !totalYears) return;
    const rect = svg.getBoundingClientRect();
    const vx = ((e.clientX - rect.left) / rect.width) * W;
    const yr = Math.round(((vx - pad.left) / plotW) * totalYears);
    setHoverYear(Math.max(0, Math.min(totalYears, yr)));
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    fontSize: 16,
    fontWeight: 600,
    color: "var(--navy)",
    background: "#fff",
    border: "1px solid var(--soft-gray)",
    borderRadius: 8,
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
  };

  const captionStyle = {
    display: "none", // shown under 768px via .calc-input-caption override

    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "var(--mid-gray)",
    marginBottom: 6,
  };

  return (
    <section id="calculator" style={{
      background: "var(--cream)",
      padding: "120px clamp(20px,5vw,40px)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── EYEBROW ── */}
        <Reveal>
          <p style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "var(--teal)",
            marginBottom: 24,
          }}>
            Free Tool · Compounding Calculator
          </p>
        </Reveal>

        {/* ── HEADLINE ── */}
        <Reveal delay={1}>
          <h2 className="font-display" style={{
            fontSize: "clamp(44px, 5vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.5px",
            color: "var(--navy)",
            marginBottom: 24,
            maxWidth: 780,
          }}>
            Real life isn&apos;t a flat monthly payment.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--body-text)",
            maxWidth: 680,
            marginBottom: 56,
          }}>
            Contributions and risk change as your career grows. Set what each stage of
            life invests, and see what compounding does with it.
          </p>
        </Reveal>

        <div
          className="calc-grid-responsive"
          style={{ display: "grid", gridTemplateColumns: "minmax(320px, 460px) 1fr", gap: 40, alignItems: "start" }}
        >
          {/* ── INPUTS ── */}
          <Reveal>
            <div style={{
              background: "#fff",
              border: "1px solid var(--soft-gray)",
              borderRadius: 16,
              padding: "28px 28px",
              boxShadow: "0 10px 30px rgba(10, 25, 47, 0.03)",
            }}>
              <div className="calc-header-row" style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr 0.8fr 1fr",
                gap: 12,
                paddingBottom: 12,
                borderBottom: "2px solid var(--soft-gray)",
                marginBottom: 8,
              }}>
                {["Life Stage", "Monthly $", "Years", "Return %"].map((h) => (
                  <span key={h} style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: 1,
                    textTransform: "uppercase", color: "var(--mid-gray)",
                  }}>
                    {h}
                  </span>
                ))}
              </div>

              {STAGE_DEFS.map((def, i) => (
                <div key={def.label} className="calc-row-responsive" style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr 0.8fr 1fr",
                  gap: 12,
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: i < STAGE_DEFS.length - 1 ? "1px solid var(--soft-gray)" : "none",
                }}>
                  <div className="calc-row-label">
                    <div style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)" }}>
                      {def.emoji} {def.label}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--mid-gray)" }}>{def.note}</div>
                  </div>
                  <div>
                    <span className="calc-input-caption" style={captionStyle}>Monthly $</span>
                    <input
                      type="number" min="0" value={stages[i].amt}
                      onChange={(e) => setField(i, "amt", e.target.value)}
                      aria-label={`${def.label} monthly contribution in dollars`}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <span className="calc-input-caption" style={captionStyle}>Years</span>
                    <input
                      type="number" min="0" value={stages[i].yrs}
                      onChange={(e) => setField(i, "yrs", e.target.value)}
                      aria-label={`${def.label} years investing`}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <span className="calc-input-caption" style={captionStyle}>Return %</span>
                    <input
                      type="number" min="0" step="0.5" value={stages[i].ret}
                      onChange={(e) => setField(i, "ret", e.target.value)}
                      aria-label={`${def.label} annual return percent`}
                      style={inputStyle}
                    />
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: 20,
                background: "var(--cream)",
                borderRadius: 12,
                padding: "16px 20px",
              }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>
                  Why do return rates change?
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--body-text)" }}>
                  When you&apos;re young with decades ahead, you can be nearly all stocks
                  (historically about 10% per year). As you age, you shift toward bonds and
                  stable investments for safety: lower returns, less volatility. This is how
                  real financial planning works.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── RESULTS ── */}
          <Reveal delay={1}>
            <div style={{
              background: "#fff",
              border: "1px solid var(--soft-gray)",
              borderRadius: 16,
              padding: "28px 28px",
              boxShadow: "0 10px 30px rgba(10, 25, 47, 0.03)",
            }}>
              {/* Headline number */}
              <p style={{ fontSize: 16, color: "var(--body-text)", marginBottom: 4 }}>
                After {result.totalYears} years of investing through every life stage
              </p>
              <div className="font-display" style={{
                fontSize: "clamp(44px, 5vw, 60px)",
                fontWeight: 900,
                color: "var(--navy)",
                lineHeight: 1.1,
                marginBottom: 8,
              }}>
                {fmt(result.balance)}
              </div>
              <p style={{ fontSize: 16, color: "var(--body-text)", marginBottom: 24 }}>
                You contributed <strong style={{ color: CONTRIB_COLOR }}>{fmt(result.totalContrib)}</strong>
                {" "}· Compound growth added <strong style={{ color: BALANCE_COLOR }}>{fmt(result.growth)}</strong>
              </p>

              {/* Legend */}
              <div style={{ display: "flex", gap: 24, marginBottom: 8, flexWrap: "wrap" }}>
                {[["Total balance", BALANCE_COLOR], ["You contributed", CONTRIB_COLOR]].map(([label, color]) => (
                  <span key={label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--body-text)" }}>
                    <span style={{ width: 14, height: 3, borderRadius: 2, background: color, display: "inline-block" }} />
                    {label}
                  </span>
                ))}
              </div>

              {/* Chart */}
              <div style={{ position: "relative" }}>
                <svg
                  ref={svgRef}
                  viewBox={`0 0 ${W} ${H}`}
                  style={{ width: "100%", height: "auto", display: "block", cursor: totalYears ? "crosshair" : "default" }}
                  role="img"
                  aria-label={`Growth curve: balance reaches ${fmt(result.balance)} over ${totalYears} years versus ${fmt(result.totalContrib)} contributed. Per-stage figures are listed below the chart.`}
                  onMouseMove={onMove}
                  onMouseLeave={() => setHoverYear(null)}
                >
                  {totalYears > 0 && (
                    <>
                      {/* Stage bands */}
                      {result.bands.map((b, i) => (
                        <g key={i}>
                          <rect
                            x={xAt(b.from)} y={pad.top}
                            width={xAt(b.to) - xAt(b.from)} height={plotH}
                            fill={i % 2 === 0 ? "rgba(13,27,42,0.035)" : "transparent"}
                          />
                          <text
                            x={(xAt(b.from) + xAt(b.to)) / 2} y={pad.top - 10}
                            textAnchor="middle" fontSize="14"
                          >
                            {b.emoji}
                          </text>
                        </g>
                      ))}

                      {/* Y grid + labels */}
                      {[0, 1, 2, 3, 4].map((i) => {
                        const v = (yMax * i) / 4;
                        return (
                          <g key={i}>
                            <line
                              x1={pad.left} x2={pad.left + plotW}
                              y1={yAt(v)} y2={yAt(v)}
                              stroke="rgba(13,27,42,0.08)" strokeWidth="1"
                            />
                            <text
                              x={pad.left - 8} y={yAt(v) + 4}
                              textAnchor="end" fontSize="11" fill="var(--mid-gray)"
                              fontFamily="'DM Sans', sans-serif"
                            >
                              {i === 0 ? "$0" : fmtAxis(v)}
                            </text>
                          </g>
                        );
                      })}

                      {/* X labels */}
                      {xTicks.map((yr) => (
                        <text
                          key={yr}
                          x={xAt(yr)} y={pad.top + plotH + 22}
                          textAnchor="middle" fontSize="11" fill="var(--mid-gray)"
                          fontFamily="'DM Sans', sans-serif"
                        >
                          Yr {yr}
                        </text>
                      ))}

                      {/* Contributions: area + line */}
                      <path d={areaPath("contrib")} fill={CONTRIB_COLOR} opacity="0.12" />
                      <path d={linePath("contrib")} fill="none" stroke={CONTRIB_COLOR} strokeWidth="2" />

                      {/* Balance: area + line */}
                      <path d={areaPath("balance")} fill={BALANCE_COLOR} opacity="0.08" />
                      <path d={linePath("balance")} fill="none" stroke={BALANCE_COLOR} strokeWidth="2.5" />

                      {/* Direct labels at line ends */}
                      <text
                        x={pad.left + plotW + 8}
                        y={Math.max(pad.top + 10, yAt(result.balance) + 4)}
                        fontSize="12" fontWeight="700" fill={BALANCE_COLOR}
                        fontFamily="'DM Sans', sans-serif"
                      >
                        Balance
                      </text>
                      <text
                        x={pad.left + plotW + 8}
                        y={Math.min(pad.top + plotH - 4, Math.max(yAt(result.totalContrib) + 4, yAt(result.balance) + 22))}
                        fontSize="12" fontWeight="700" fill={CONTRIB_COLOR}
                        fontFamily="'DM Sans', sans-serif"
                      >
                        Contributed
                      </text>

                      {/* Hover crosshair */}
                      {hoverPoint && (
                        <g>
                          <line
                            x1={xAt(hoverPoint.year)} x2={xAt(hoverPoint.year)}
                            y1={pad.top} y2={pad.top + plotH}
                            stroke="rgba(13,27,42,0.35)" strokeWidth="1" strokeDasharray="3 3"
                          />
                          <circle cx={xAt(hoverPoint.year)} cy={yAt(hoverPoint.balance)} r="4.5" fill={BALANCE_COLOR} stroke="#fff" strokeWidth="2" />
                          <circle cx={xAt(hoverPoint.year)} cy={yAt(hoverPoint.contrib)} r="4.5" fill={CONTRIB_COLOR} stroke="#fff" strokeWidth="2" />
                        </g>
                      )}
                    </>
                  )}
                  {totalYears === 0 && (
                    <text x={W / 2} y={H / 2} textAnchor="middle" fontSize="15" fill="var(--mid-gray)" fontFamily="'DM Sans', sans-serif">
                      Add years to one or more stages to see the curve.
                    </text>
                  )}
                </svg>

                {/* Tooltip */}
                {hoverPoint && totalYears > 0 && (
                  <div style={{
                    position: "absolute",
                    left: `${(xAt(hoverPoint.year) / W) * 100}%`,
                    top: 0,
                    transform: `translateX(${hoverPoint.year > totalYears / 2 ? "calc(-100% - 12px)" : "12px"})`,
                    background: "var(--navy)",
                    color: "#fff",
                    borderRadius: 8,
                    padding: "10px 14px",
                    fontSize: 13,
                    lineHeight: 1.5,
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    boxShadow: "0 8px 24px rgba(10,25,47,0.25)",
                  }}>
                    <strong>Year {hoverPoint.year}</strong>
                    <br />Balance: {fmt(hoverPoint.balance)}
                    <br />Contributed: {fmt(hoverPoint.contrib)}
                    <br />Growth: {fmt(hoverPoint.balance - hoverPoint.contrib)}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── PER-STAGE BREAKDOWN ── */}
        <div
          className="calc-breakdown-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
            marginTop: 40,
          }}
        >
          {result.perStage.map((st, i) => (
            <Reveal key={st.label} delay={Math.min(i + 1, 5)}>
              <div style={{
                background: "#fff",
                border: "1px solid var(--soft-gray)",
                borderTop: `4px solid ${i % 2 === 0 ? "var(--teal)" : "var(--gold)"}`,
                borderRadius: 12,
                padding: "18px 16px",
                textAlign: "center",
                height: "100%",
              }}>
                <div style={{ fontSize: 13, color: "var(--mid-gray)", marginBottom: 4 }}>
                  {st.emoji} {st.label}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>
                  ${st.amt.toLocaleString()}/mo × {st.yrs}yr @ {st.retPct}%
                </div>
                <div className="font-display" style={{ fontSize: 22, fontWeight: 800, color: "var(--teal)" }}>
                  +{fmt(st.added)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
