"use client";
import {
  RESULTS, QUOTES, TCP_EDITION, TCP_TAGLINE, TCP_POSITIONING, TCP_PILLARS,
  TCP_CREDIBILITY, TCP_ARTIFACTS, TCP_PREVIEW, BULK_ORDER_MAILTO,
  TEACHER_QUOTE, COURSE_TAGS, FEATURES, PRICING,
} from "@/data/content";
import Reveal from "./ui/Reveal";
import AnimatedNumber from "./ui/AnimatedNumber";

export default function TCPSection() {
  return (
    <section id="tcp" style={{ 
      background: "var(--warm-white)", 
      padding: "120px clamp(20px,5vw,40px)" /* 👈 Bumped to 120px padding */
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* ── EYEBROW ── */}
        <Reveal>
          <p style={{ 
            fontSize: 13,           /* 👈 Bumped from 10px */
            fontWeight: 600,        /* 👈 Added weight */
            letterSpacing: 4,       /* 👈 Wider tracking */
            textTransform: "uppercase", 
            color: "var(--teal)", 
            marginBottom: 24 
          }}>
            The College Project
          </p>
        </Reveal>

        {/* ── EDITION BADGE ── */}
        <Reveal>
          <span style={{
            display: "inline-block",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#8A6318",
            background: "rgba(200,148,42,0.12)",
            border: "1px solid rgba(200,148,42,0.35)",
            borderRadius: 99,
            padding: "8px 18px",
            marginBottom: 24,
          }}>
            {TCP_EDITION}
          </span>
        </Reveal>

        {/* ── HEADLINE ── */}
        <Reveal delay={1}>
          <h2 className="font-display" style={{ 
            fontSize: "clamp(44px, 5vw, 64px)", /* 👈 Scaled up */
            fontWeight: 700, 
            lineHeight: 1.05,                   /* 👈 Tightened spacing */
            letterSpacing: "-0.5px",            /* 👈 Pulled letters together */
            color: "var(--navy)", 
            marginBottom: 24, 
            maxWidth: 720 
          }}>
            The book that gives every student a{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>personalized plan.</em>
          </h2>
        </Reveal>

        {/* ── SUBTITLE ── */}
        <Reveal delay={2}>
          <p style={{ 
            fontSize: 17,
            lineHeight: 1.6, 
            color: "var(--body-text)", 
            maxWidth: 680, 
            marginBottom: 64                    /* 👈 More breathing room */
          }}>
            4 parts. 19 chapters. A hands-on workbook that puts pen back on paper: plain
            language, diligent research, and a personalized plan each student builds for
            themselves. Built for California classrooms. Proceeds fund scholarships and
            student programming.
          </p>
        </Reveal>

        {/* ── COVER + PILLARS ── */}
        <div
          className="tcp-grid-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(260px, 380px) 1fr",
            gap: 64,
            alignItems: "center",
            marginBottom: 64,
          }}
        >
          <Reveal>
            <img
              src="/images/college-project-cover.png"
              alt="The College Project, Fifth Edition: front cover"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 12,
                boxShadow: "0 24px 60px rgba(10, 25, 47, 0.18)",
                display: "block",
              }}
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="font-display" style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--teal)",
                marginBottom: 16,
                lineHeight: 1.2,
              }}>
                {TCP_TAGLINE}
              </p>
            </Reveal>

            <Reveal delay={1}>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 32 }}>
                {TCP_POSITIONING}
              </p>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {TCP_PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={Math.min(i + 1, 4)}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: "rgba(26,122,110,0.12)", color: "var(--teal)",
                      fontSize: 13, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 2,
                    }}>
                      ✓
                    </div>
                    <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--body-text)" }}>
                      <strong style={{ color: "var(--navy)", fontWeight: 700 }}>{p.title}.</strong>{" "}
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={4}>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", marginBottom: 12 }}>
                {TCP_ARTIFACTS}
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body-text)", fontStyle: "italic" }}>
                {TCP_CREDIBILITY}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── CHAPTER PREVIEW ── */}
        <Reveal>
          <div style={{
            background: "#fff",
            border: "1px solid var(--soft-gray)",
            borderTop: "4px solid var(--gold)",
            borderRadius: 16,
            padding: "clamp(32px, 5vw, 56px)",
            marginBottom: 24,
            boxShadow: "0 10px 30px rgba(10, 25, 47, 0.03)",
          }}>
            <p style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 3,
              textTransform: "uppercase", color: "var(--gold)", marginBottom: 24,
            }}>
              {TCP_PREVIEW.label}
            </p>
            <blockquote style={{ margin: 0, padding: 0 }}>
              <p style={{
                fontSize: "clamp(18px, 2.2vw, 21px)",
                fontWeight: 500,
                color: "var(--navy)",
                lineHeight: 1.65,
                marginBottom: 32,
                maxWidth: 860,
              }}>
                &ldquo;{TCP_PREVIEW.quote}&rdquo;
              </p>
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <div className="font-display" style={{
                fontSize: "clamp(44px, 5vw, 60px)", fontWeight: 900,
                color: "var(--teal)", lineHeight: 1,
              }}>
                {TCP_PREVIEW.stat}
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--body-text)", maxWidth: 420 }}>
                {TCP_PREVIEW.statCaption}
              </p>
            </div>
            <p style={{
              fontSize: 13, color: "#9CA3AF", marginTop: 24, letterSpacing: 1,
            }}>
              {TCP_PREVIEW.attribution}
            </p>
          </div>
        </Reveal>

        {/* ── FREE DOWNLOADS ROW ── */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 64 }}>
            <span style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#9CA3AF",
            }}>
              Free Downloads
            </span>
            <a
              href="/downloads/college-project-sample-chapter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                padding: "10px 18px",
                borderRadius: 99,
                border: "1px solid var(--teal)",
                color: "var(--teal)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Sample Chapter: Free Money ↓
            </a>
            <a
              href="/downloads/college-planning-checklists-senior-year-calendar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                padding: "10px 18px",
                borderRadius: 99,
                border: "1px solid var(--teal)",
                color: "var(--teal)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Checklists &amp; Senior Year Calendar ↓
            </a>
          </div>
        </Reveal>

        {/* ── BEFORE/AFTER CARDS ── */}
<div className="results-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 64 }}>
  {RESULTS.map((r, i) => (
    <Reveal key={i} delay={i + 1}>
      <div
        className="result-card-wrap"
        style={{
          background: "#fff", 
          border: "1px solid var(--soft-gray)",
          borderRadius: 16, 
          padding: "48px 40px",
          boxShadow: "0 10px 30px rgba(10, 25, 47, 0.03)"
        }}
      >
        
        {/* 1. ANIMATED NUMBER */}
        <div className="font-display" style={{ 
          fontSize: "clamp(56px, 6vw, 72px)", 
          fontWeight: 900, 
          color: "var(--teal)", 
          lineHeight: 1, 
          marginBottom: 8,
          textAlign: "center" /* 👈 Added center alignment */
        }}>
          <AnimatedNumber value={r.after.replace("%", "")} suffix="%" />
        </div>

        {/* 2. ARROW UP */}
        <span style={{ 
          fontSize: 28,           
          color: "var(--teal)", 
          margin: "8px 0", 
          display: "block",
          textAlign: "center" /* 👈 Added center alignment */
        }}>↑</span>

        {/* 3. BEFORE TEXT */}
        <div style={{ 
          fontSize: 17,           
          fontWeight: 500,
          color: "#9CA3AF", 
          marginBottom: 16,
          textAlign: "center" /* 👈 Added center alignment to match the stack */
        }}>
          {r.before} before
        </div>
        
        {/* 4. LABEL */}
        <div style={{ 
          fontSize: 17,
          fontWeight: 600,
          color: "var(--navy)",   
          lineHeight: 1.5 
        }}>
          {r.label}
        </div>
        
        {/* 5. FOOTER TEXT */}
        <p style={{ 
          fontSize: 13,           
          color: "#9CA3AF", 
          marginTop: 16, 
          letterSpacing: 1 
        }}>
          Pre/post matched cohort · n=368 / n=99
        </p>

      </div>
    </Reveal>
  ))}
</div>

        {/* ── STUDENT QUOTES ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 56 }}>
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                style={{
                  background: "var(--navy)", 
                  borderRadius: 16,
                  padding: "clamp(40px, 6vw, 64px) clamp(32px, 5vw, 64px)", /* 👈 Increased padding */
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Background quotation mark */}
                <span
                  className="font-display"
                  style={{
                    position: "absolute", top: 12, left: 20,
                    fontSize: 120,          /* 👈 Bumped from 80px */
                    lineHeight: 1, 
                    color: "rgba(200,148,42,0.1)", /* 👈 Softened opacity slightly */
                    pointerEvents: "none",
                  }}
                >
                  &ldquo;
                </span>
                <blockquote style={{ position: "relative", zIndex: 1, margin: 0, padding: 0 }}>
                  <p className="font-display" style={{
                    fontSize: "clamp(24px, 3.5vw, 36px)", /* 👈 Scaled up to match Hero Quote */
                    fontWeight: 400,
                    fontStyle: "italic", 
                    color: "rgba(255,255,255,0.95)",
                    lineHeight: 1.35, 
                    marginBottom: 24, 
                    maxWidth: 860,
                  }}>
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <footer style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 32, height: 2, background: "var(--gold)", borderRadius: 1 }} />
                    <cite style={{
                      fontStyle: "normal", 
                      fontSize: 17,           /* 👈 Bumped from 13px */
                      fontWeight: 600,
                      color: "var(--gold)", 
                      letterSpacing: 0.5,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {q.attr}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ══════ FOR EDUCATORS (merged sub-block) ══════ */}
        <div id="educators" style={{ marginTop: 112 }}>
          <Reveal>
            <p style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: 24,
            }}>
              For Educators
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h3 className="font-display" style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 700,
              color: "var(--navy)",
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              marginBottom: 24,
            }}>
              Bring it to your classroom.
            </h3>
          </Reveal>

          <Reveal delay={2}>
            <p style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--body-text)",
              maxWidth: 680,
              marginBottom: 48,
            }}>
              No one can hand-build 760 personalized plans. The College Project sits in
              students&apos; hands and does the personalization work that isn&apos;t possible
              at scale.
            </p>
          </Reveal>

          {/* Teacher testimonial */}
          <Reveal>
            <div style={{
              background: "var(--navy)",
              borderRadius: 16,
              padding: "clamp(40px, 6vw, 64px) clamp(32px, 5vw, 64px)",
              position: "relative",
              overflow: "hidden",
              marginBottom: 56,
            }}>
              <span className="font-display" style={{
                position: "absolute", top: 12, left: 20,
                fontSize: 120, lineHeight: 1,
                color: "rgba(200,148,42,0.1)",
                pointerEvents: "none",
              }}>
                &ldquo;
              </span>
              <blockquote style={{ position: "relative", zIndex: 1, margin: 0, padding: 0 }}>
                <p className="font-display" style={{
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: 1.35,
                  marginBottom: 24,
                  maxWidth: 860,
                }}>
                  &ldquo;{TEACHER_QUOTE.text}&rdquo;
                </p>
                <footer style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 32, height: 2, background: "var(--gold)", borderRadius: 1 }} />
                  <cite style={{
                    fontStyle: "normal",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--gold)",
                    letterSpacing: 0.5,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {TEACHER_QUOTE.attr}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </Reveal>

          {/* Two columns: fit + features | pricing + ordering */}
          <div
            className="edu-grid-responsive"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            {/* Left: course fit + features */}
            <div>
              <Reveal>
                <div style={{ marginBottom: 40 }}>
                  <h4 style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    marginBottom: 20,
                  }}>
                    Course Fit
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    {COURSE_TAGS.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          padding: "8px 18px",
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

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {FEATURES.map((f, i) => (
                  <Reveal key={i} delay={Math.min(i + 1, 5)}>
                    <div
                      className="feature-row"
                      style={{
                        display: "flex", alignItems: "flex-start", gap: 16,
                        padding: "20px 24px",
                        background: "#fff",
                        border: "1px solid var(--soft-gray)",
                        borderRadius: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 28, height: 28,
                          borderRadius: "50%",
                          background: "rgba(26,122,110,0.12)",
                          color: "var(--teal)",
                          fontSize: 13,
                          display: "flex", alignItems: "center",
                          justifyContent: "center", flexShrink: 0, fontWeight: 700,
                          marginTop: 2,
                        }}
                      >
                        ✓
                      </div>
                      <p style={{ fontSize: 17, color: "var(--body-text)", lineHeight: 1.6 }}>
                        <strong style={{ color: "var(--navy)", fontWeight: 700 }}>{f.title}.</strong>{" "}
                        {f.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: pricing + ordering */}
            <div>
              <Reveal>
                <div style={{ border: "1px solid var(--soft-gray)", borderRadius: 16, overflow: "hidden", marginBottom: 24 }}>
                  <div
                    style={{
                      display: "grid", gridTemplateColumns: "1fr auto",
                      padding: "16px 24px",
                      background: "var(--navy)",
                      fontSize: 13,
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
                          padding: "20px 24px",
                          borderBottom: i < PRICING.length - 1 ? "1px solid var(--soft-gray)" : "none",
                          alignItems: "center", transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cream)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <div>
                          <div style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)" }}>{p.tier}</div>
                          <div style={{ fontSize: 13, color: "var(--body-text)", marginTop: 4 }}>{p.note}</div>
                        </div>
                        <div className="font-display" style={{ fontSize: 32, fontWeight: 800, color: "var(--gold)" }}>
                          {p.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Bulk order callout */}
              <Reveal>
                <div style={{
                  background: "var(--cream)",
                  border: "1px dashed var(--gold)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  marginBottom: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  flexWrap: "wrap",
                }}>
                  <p style={{ fontSize: 17, fontWeight: 600, color: "var(--navy)", lineHeight: 1.5 }}>
                    Ordering 25+ copies? Email us and we&apos;ll set it up.
                  </p>
                  <a href={BULK_ORDER_MAILTO} style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--teal)",
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}>
                    team@thefinancelab.co →
                  </a>
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <a href="/guide" className="btn-gold" style={{
                    padding: "18px 40px",
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "center",
                    display: "block",
                  }}>
                    Free Teacher&apos;s Guide →
                  </a>
                  <a href="/college-project" className="btn-outline-navy" style={{
                    padding: "18px 40px",
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "center",
                    display: "block",
                  }}>
                    Choose Your Format
                  </a>
                  <a href={BULK_ORDER_MAILTO} className="btn-outline-navy" style={{
                    padding: "18px 40px",
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "center",
                    display: "block",
                  }}>
                    Bulk Orders (25+)
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ── COMPANION APP NOTE ── */}
        <Reveal>
          <p style={{
            marginTop: 64,
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--body-text)",
            textAlign: "center",
            maxWidth: 760,
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            The workbook is the heart of it. When a screen helps, students working on their
            own can pick up the free companion app at{" "}
            <a
              href="https://college.thefinancelab.co"
              style={{ color: "var(--teal)", fontWeight: 700, textDecoration: "underline" }}
            >
              college.thefinancelab.co
            </a>
            , built to support them from 9th grade through graduation. Teaching a class?
            The same chapters run as a full unit inside{" "}
            <a
              href="#launchpad"
              style={{ color: "var(--teal)", fontWeight: 700, textDecoration: "underline" }}
            >
              The Launchpad
            </a>
            , teacher dashboard included.
          </p>
        </Reveal>

        {/* ── BRIDGE TO THE SCHOLARSHIP ── */}
        <Reveal>
          <a
            href="#scholarship"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              marginTop: 96,
              background: "linear-gradient(135deg, rgba(26,122,110,0.08), rgba(200,148,42,0.10))",
              border: "1px solid var(--soft-gray)",
              borderRadius: 16,
              padding: "32px 40px",
              textDecoration: "none",
            }}
          >
            <div style={{ maxWidth: 720 }}>
              <p style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 8,
              }}>
                Step Two
              </p>
              <p style={{ fontSize: 17, fontWeight: 600, color: "var(--navy)", lineHeight: 1.55 }}>
                Finish the plan, then build the portfolio. Students who complete The College
                Project can apply for The Finance Lab Scholarship: $1,000, earned across four
                milestones.
              </p>
            </div>
            <span style={{
              fontSize: 17,
              fontWeight: 700,
              color: "var(--teal)",
              whiteSpace: "nowrap",
            }}>
              See how it works →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
