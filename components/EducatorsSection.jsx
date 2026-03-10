"use client";
import { COURSE_TAGS, FEATURES, PRICING } from "@/data/content";
import Reveal from "./ui/Reveal";

export default function EducatorsSection() {
  return (
    <section id="educators" style={{ 
      background: "var(--warm-white)", 
      padding: "120px clamp(20px,5vw,40px)" /* 👈 Bumped to 120px padding */
    }}>
      <div
        className="edu-grid-responsive"
        style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 100, /* 👈 Increased gap for more breathing room between columns */
          alignItems: "start",
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div>
          <Reveal>
            <p className="font-mono" style={{ 
              fontSize: 13,             /* 👈 Bumped from 10px */
              fontWeight: 600,          /* 👈 Added weight */
              letterSpacing: 4,         /* 👈 Wider tracking */
              textTransform: "uppercase", 
              color: "var(--teal)", 
              marginBottom: 24 
            }}>
              For Educators
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="font-display" style={{ 
              fontSize: "clamp(44px, 5vw, 64px)", /* 👈 Scaled up */
              fontWeight: 700, 
              color: "var(--navy)", 
              marginBottom: 24, 
              lineHeight: 1.05,                   /* 👈 Tightened spacing */
              letterSpacing: "-0.5px"             /* 👈 Pulled letters together */
            }}>
              A partner for counselors. A resource for classrooms.
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p style={{ 
              fontSize: 18,             /* 👈 Bumped from 15px */
              lineHeight: 1.6, 
              color: "var(--body-text)", 
              marginBottom: 24 
            }}>
              We know counselors aren&apos;t falling short — the system is. No one can build 760
              personalized plans. The College Project sits in students&apos; hands and does the
              personalization work that isn&apos;t possible at scale.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div
              style={{
                fontSize: 18,             /* 👈 Bumped from 14px */
                fontStyle: "italic", 
                fontWeight: 600,          /* 👈 Added weight to make it pop */
                color: "var(--teal)",
                lineHeight: 1.6, 
                borderLeft: "4px solid var(--teal)", /* 👈 Thicker border */
                paddingLeft: 24,          /* 👈 More padding */
                margin: "32px 0", 
              }}
            >
              &ldquo;We&apos;re not here to replace what counselors do. We&apos;re here to multiply
              it — so every student gets a tailored experience, regardless of caseload.&rdquo;
            </div>
          </Reveal>

          <Reveal>
            <p style={{ 
              fontSize: 18,             /* 👈 Bumped from 15px */
              lineHeight: 1.6, 
              color: "var(--body-text)", 
              marginBottom: 40            /* 👈 More breathing room before table */
            }}>
              Schools that adopt The College Project can connect students directly to The
              Finance Lab scholarship pipeline — meaning the plan and the portfolio are
              available to your whole class.
            </p>
          </Reveal>

          {/* Pricing table */}
          <Reveal>
            <div style={{ border: "1px solid var(--soft-gray)", borderRadius: 16, overflow: "hidden", marginBottom: 40 }}>
              <div
                style={{
                  display: "grid", gridTemplateColumns: "1fr auto",
                  padding: "16px 24px", 
                  background: "var(--navy)",
                  fontSize: 12,           /* 👈 Bumped from 10px */
                  fontWeight: 700, 
                  letterSpacing: 2,
                  textTransform: "uppercase", 
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <span>Option</span>
                <span>Per Copy</span>
              </div>
              <div>
                {PRICING.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid", gridTemplateColumns: "1fr auto",
                      padding: "20px 24px", /* 👈 Increased row padding */
                      borderBottom: i < PRICING.length - 1 ? "1px solid var(--soft-gray)" : "none",
                      alignItems: "center", transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cream)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <div>
                      <div style={{ 
                        fontSize: 18,         /* 👈 Bumped from 13px */
                        fontWeight: 700, 
                        color: "var(--navy)" 
                      }}>{p.tier}</div>
                      <div style={{ 
                        fontSize: 14,         /* 👈 Bumped from 11px */
                        color: "var(--body-text)", 
                        marginTop: 4 
                      }}>{p.note}</div>
                    </div>
                    <div className="font-display" style={{ 
                      fontSize: 32,           /* 👈 Bumped from 22px */
                      fontWeight: 800, 
                      color: "var(--gold)" 
                    }}>
                      {p.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="mailto:team@thefinancelab.co" className="btn-teal" style={{
                padding: "16px 40px",   /* 👈 Chunkier padding */
                fontSize: "18px",       /* 👈 Bigger text */
                fontWeight: 600
              }}>Request a Free Copy</a>
              <a href="mailto:team@thefinancelab.co" className="btn-outline-navy" style={{
                padding: "16px 40px",   /* 👈 Chunkier padding */
                fontSize: "18px",       /* 👈 Bigger text */
                fontWeight: 600
              }}>Contact Us to Order</a>
            </div>
          </Reveal>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ paddingTop: 12 }}>
          <Reveal>
            <div style={{ marginBottom: 40 }}>
              <h4 className="font-mono" style={{ 
                fontSize: 13,             /* 👈 Bumped from 11px */
                fontWeight: 700, 
                letterSpacing: 3, 
                textTransform: "uppercase", 
                color: "#9CA3AF", 
                marginBottom: 20 
              }}>
                Course Fit
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {COURSE_TAGS.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 14,             /* 👈 Bumped from 12px */
                      fontWeight: 600, 
                      padding: "8px 18px",      /* 👈 Chunkier pills */
                      borderRadius: 99, 
                      background: "var(--soft-gray)", 
                      color: "var(--navy)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 /* 👈 Increased gap */ }}>
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 5)}>
                <div
                  className="feature-row"
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 16,
                    padding: "20px 24px",       /* 👈 Increased padding */
                    background: "#fff",
                    border: "1px solid var(--soft-gray)", 
                    borderRadius: 12,
                  }}
                >
                  <div
                    style={{
                      width: 28, height: 28,    /* 👈 Larger icons */
                      borderRadius: "50%",
                      background: "rgba(26,122,110,0.12)", 
                      color: "var(--teal)",
                      fontSize: 14,             /* 👈 Larger checkmark */
                      display: "flex", alignItems: "center",
                      justifyContent: "center", flexShrink: 0, fontWeight: 700,
                      marginTop: 2              /* 👈 Better alignment with text */
                    }}
                  >
                    ✓
                  </div>
                  <p style={{ 
                    fontSize: 16,               /* 👈 Bumped from 13px */
                    color: "var(--body-text)", 
                    lineHeight: 1.6 
                  }}>
                    <strong style={{ color: "var(--navy)", fontWeight: 700 }}>{f.title}</strong> — {f.desc}
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