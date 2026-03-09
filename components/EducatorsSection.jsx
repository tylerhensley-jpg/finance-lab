"use client";
import { COURSE_TAGS, FEATURES, PRICING } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function EducatorsSection() {
  return (
    <section id="educators" style={{ background: "var(--warm-white)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div
        className="edu-grid-responsive"
        style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 80, alignItems: "start",
        }}
      >
        {/* Left column */}
        <div>
          <Reveal>
            <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--teal)", marginBottom: 20 }}>
              For Educators
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="font-display" style={{ fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 700, color: "var(--navy)", marginBottom: 20, lineHeight: 1.15 }}>
              A partner for counselors. A resource for classrooms.
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--body-text)", marginBottom: 16 }}>
              We know counselors aren&apos;t falling short — the system is. No one can build 760
              personalized plans. The College Project sits in students&apos; hands and does the
              personalization work that isn&apos;t possible at scale.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div
              style={{
                fontSize: 14, fontStyle: "italic", color: "var(--teal)",
                lineHeight: 1.65, borderLeft: "3px solid var(--teal)",
                paddingLeft: 16, margin: "24px 0",
              }}
            >
              &ldquo;We&apos;re not here to replace what counselors do. We&apos;re here to multiply
              it — so every student gets a tailored experience, regardless of caseload.&rdquo;
            </div>
          </Reveal>

          <Reveal>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--body-text)", marginBottom: 24 }}>
              Schools that adopt The College Project can connect students directly to The
              Finance Lab scholarship pipeline — meaning the plan and the portfolio are
              available to your whole class.
            </p>
          </Reveal>

          {/* Pricing table */}
          <Reveal>
            <div style={{ border: "1px solid var(--soft-gray)", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
              <div
                style={{
                  display: "grid", gridTemplateColumns: "1fr auto",
                  padding: "14px 20px", background: "var(--navy)",
                  fontSize: 10, fontWeight: 700, letterSpacing: 2,
                  textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
                }}
              >
                <span>Option</span>
                <span>Per Copy</span>
              </div>
              {PRICING.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid", gridTemplateColumns: "1fr auto",
                    padding: "16px 20px",
                    borderBottom: i < PRICING.length - 1 ? "1px solid var(--soft-gray)" : "none",
                    alignItems: "center", transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cream)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)" }}>{p.tier}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{p.note}</div>
                  </div>
                  <div className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--gold)" }}>
                    {p.price}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="mailto:team@thefinancelab.co" className="btn-teal">Request a Free Copy</a>
              <a href="mailto:team@thefinancelab.co" className="btn-outline-navy">Contact Us to Order</a>
            </div>
          </Reveal>
        </div>

        {/* Right column */}
        <div style={{ paddingTop: 8 }}>
          <Reveal>
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#9CA3AF", marginBottom: 14 }}>
                Course Fit
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {COURSE_TAGS.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12, fontWeight: 600, padding: "6px 14px",
                      borderRadius: 99, background: "var(--soft-gray)", color: "var(--navy)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 5)}>
                <div
                  className="feature-row"
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "14px 16px", background: "#fff",
                    border: "1px solid var(--soft-gray)", borderRadius: 8,
                  }}
                >
                  <div
                    style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: "rgba(26,122,110,0.12)", color: "var(--teal)",
                      fontSize: 11, display: "flex", alignItems: "center",
                      justifyContent: "center", flexShrink: 0, fontWeight: 700,
                    }}
                  >
                    ✓
                  </div>
                  <p style={{ fontSize: 13, color: "var(--body-text)", lineHeight: 1.5 }}>
                    <strong style={{ color: "var(--navy)" }}>{f.title}</strong> — {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
