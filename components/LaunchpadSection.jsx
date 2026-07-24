"use client";
import { LAUNCHPAD } from "@/data/content";
import Reveal from "./ui/Reveal";
import SketchIcon from "./ui/SketchIcon";

export default function LaunchpadSection() {
  return (
    <section id="launchpad" style={{
      background: "linear-gradient(160deg, #0A2E29 0%, #11473F 55%, #1A7A6E 140%)",
      padding: "120px clamp(20px,5vw,40px)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Soft glow accent */}
      <div style={{
        position: "absolute", top: -180, right: -180,
        width: 520, height: 520, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(42,168,154,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── EYEBROW ── */}
        <Reveal>
          <p style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "var(--gold-light)",
            marginBottom: 24,
          }}>
            Free Classroom Curriculum · Grades 11–12
          </p>
        </Reveal>

        {/* ── LOCKUP + ROCKET EMBLEM ── */}
        <div
          className="launchpad-header-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr minmax(220px, 300px)",
            gap: 48,
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <div>
            <Reveal delay={1}>
              <h2 className="font-display" style={{
                fontSize: "clamp(52px, 6vw, 76px)",
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: "-0.5px",
                color: "#fff",
                marginBottom: 8,
              }}>
                {LAUNCHPAD.name}
              </h2>
              <p style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                marginBottom: 24,
              }}>
                {LAUNCHPAD.lockup}
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="font-display" style={{
                fontSize: "clamp(22px, 2.8vw, 30px)",
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--teal-light)",
                marginBottom: 24,
                lineHeight: 1.25,
              }}>
                {LAUNCHPAD.tagline}
              </p>
            </Reveal>

            <Reveal delay={3}>
              <p style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.88)",
                maxWidth: 720,
                margin: 0,
              }}>
                {LAUNCHPAD.intro}
              </p>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <img
              src="/images/launchpad-rocket.jpg"
              alt="The Launchpad paper-rocket emblem"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 16,
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
              }}
            />
          </Reveal>
        </div>

        {/* ── UNIT PILLS ── */}
        <Reveal delay={4}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
            {LAUNCHPAD.units.map((u) => (
              <span key={u} style={{
                fontSize: 13,
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: 99,
                border: "1px solid rgba(255,255,255,0.28)",
                color: "rgba(255,255,255,0.9)",
                background: "rgba(255,255,255,0.05)",
              }}>
                {u}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ── AB 2927 CALLOUT ── */}
        <Reveal>
          <div style={{
            background: "rgba(255,255,255,0.07)",
            borderLeft: "4px solid var(--gold)",
            borderRadius: 12,
            padding: "28px 32px",
            marginBottom: 48,
            maxWidth: 860,
          }}>
            <p style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "var(--gold-light)",
              marginBottom: 12,
            }}>
              {LAUNCHPAD.ab2927.title}
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.88)" }}>
              {LAUNCHPAD.ab2927.body}
            </p>
            <a
              href={LAUNCHPAD.ab2927.linkHref}
              style={{
                display: "inline-block",
                marginTop: 14,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 0.5,
                color: "var(--gold-light)",
                textDecoration: "none",
              }}
            >
              {LAUNCHPAD.ab2927.linkLabel} →
            </a>
          </div>
        </Reveal>

        {/* ── FEATURE GRID ── */}
        <div
          className="launchpad-grid-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {LAUNCHPAD.features.map((f, i) => (
            <Reveal key={f.title} delay={Math.min(i + 1, 5)}>
              <div style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: "32px 32px",
                height: "100%",
              }}>
                <div style={{ marginBottom: 16 }}>
                  <SketchIcon iconId={f.iconId} color="var(--gold-light)" size={32} />
                </div>
                <h3 className="font-display" style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── WORKBOOK COMING SOON ── */}
        <Reveal>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            flexWrap: "wrap",
            background: "rgba(200,148,42,0.10)",
            border: "1px solid rgba(200,148,42,0.35)",
            borderRadius: 12,
            padding: "24px 28px",
            marginBottom: 48,
            maxWidth: 860,
          }}>
            <a
              href={LAUNCHPAD.workbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flexShrink: 0, display: "block" }}
            >
              <img
                src="/images/launchpad-workbook-cover.jpg"
                alt="The Launchpad Activity Workbook: front cover"
                style={{
                  width: 118,
                  height: "auto",
                  borderRadius: 6,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
                  display: "block",
                }}
              />
            </a>
            <div style={{ flex: "1 1 320px" }}>
              <span style={{
                display: "inline-block",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: 99,
                background: "var(--gold)",
                color: "var(--navy)",
                whiteSpace: "nowrap",
                marginBottom: 12,
              }}>
                In Print · Available Now
              </span>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,0.85)" }}>
                {LAUNCHPAD.workbook}
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(255,255,255,0.7)", marginTop: 10 }}>
                {LAUNCHPAD.workbookBulk}{" "}
                <a
                  href={LAUNCHPAD.workbookBulkMailto}
                  style={{ color: "var(--gold-light)", fontWeight: 700, textDecoration: "underline" }}
                >
                  team@thefinancelab.co
                </a>
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href={LAUNCHPAD.workbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  padding: "10px 18px",
                  borderRadius: 99,
                  background: "var(--gold)",
                  border: "1px solid var(--gold)",
                  color: "var(--navy)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                Get It on Amazon ↗
              </a>
              <a
                href={LAUNCHPAD.teachersGuideUrl}
                target="_blank"
                rel="noopener noreferrer"
                
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  padding: "10px 18px",
                  borderRadius: 99,
                  border: "1px solid var(--gold)",
                  color: "var(--gold)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                Teacher&rsquo;s Guide (free PDF) &darr;
              </a>
            </div>
          </div>
        </Reveal>

        {/* ── CTAS: two cards, each button with its own caption ── */}
        <Reveal>
          <div
            className="launchpad-cta-responsive"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(240px, 400px))", gap: 20 }}
          >
            <div style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "28px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
            }}>
              <a
                href={LAUNCHPAD.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ padding: "16px 40px", fontSize: 18, fontWeight: 600 }}
              >
                Access The Launchpad
              </a>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.65)" }}>
                {LAUNCHPAD.appCaption}
              </p>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "28px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
            }}>
              <a
                href={LAUNCHPAD.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
                style={{ padding: "16px 40px", fontSize: 18, fontWeight: 600 }}
              >
                Preview the Teacher Demo
              </a>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.65)" }}>
                {LAUNCHPAD.demoCaption}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
