"use client";
import { STATS } from "@/data/content";
import { useInView } from "./ui/useInView";
import Reveal from "./ui/Reveal";
import AnimatedNumber from "./ui/AnimatedNumber";

export default function ProblemSection() {
  const [statsRef, statsInView] = useInView();

  return (
    <section id="problem" style={{ background: "var(--cream)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            The Problem
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 700, lineHeight: 1.12, color: "var(--navy)", maxWidth: 700, marginBottom: 20 }}>
            760 students.<br />
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>One counselor.</em><br />
            No personalized plan.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--body-text)", maxWidth: 680, marginBottom: 56 }}>
            California&apos;s counselor-to-student ratio is{" "}
            <strong style={{ color: "var(--navy)" }}>1 to 760</strong>. That&apos;s not a criticism of
            counselors — it&apos;s an impossible situation. No single professional can build a
            personalized roadmap for every student. The result: most young people make the
            biggest financial decision of their lives with almost no preparation.
          </p>
        </Reveal>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="stats-grid-responsive"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 40 }}
        >
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i + 1}>
              <div
                style={{
                  background: "var(--navy)", padding: "40px 32px",
                  position: "relative", overflow: "hidden",
                  borderRadius: i === 0 ? "12px 0 0 12px" : i === 2 ? "0 12px 12px 0" : 0,
                }}
              >
                <div className="font-display" style={{ fontSize: 56, fontWeight: 900, color: "var(--gold-light)", lineHeight: 1, marginBottom: 12 }}>
                  {statsInView ? <AnimatedNumber value={s.value} suffix={s.suffix} /> : `0${s.suffix}`}
                </div>
                <div style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.7)", lineHeight: 1.55 }}>
                  {s.desc}
                </div>
                <div
                  className={`stat-bar ${statsInView ? "active" : ""}`}
                  style={{ transitionDelay: `${0.4 + i * 0.2}s` }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Dropout callout */}
        <Reveal>
          <div
            style={{
              background: "#fff", border: "1px solid var(--soft-gray)",
              borderLeft: "4px solid var(--teal)",
              borderRadius: "0 12px 12px 0", padding: "28px 32px", maxWidth: 820,
            }}
          >
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--body-text)" }}>
              Research shows that students who{" "}
              <strong style={{ color: "var(--navy)" }}>dropped out</strong> chose their college
              primarily because of convenience — location and schedule. Students who{" "}
              <strong style={{ color: "var(--navy)" }}>graduated</strong> chose because they
              believed it would help them get a job.{" "}
              <strong style={{ color: "var(--navy)" }}>
                The decision-making process before enrollment predicts the outcome after it.
              </strong>
            </p>
            <p style={{ fontSize: 11, color: "#9CA3AF", marginTop: 10, fontStyle: "italic" }}>
              — Public Agenda, 2009
            </p>
          </div>
        </Reveal>

        {/* Counselor note */}
        <Reveal>
          <div
            style={{
              marginTop: 32, background: "rgba(26,122,110,0.06)",
              border: "1px solid rgba(26,122,110,0.18)",
              borderRadius: 12, padding: "24px 28px", maxWidth: 820,
            }}
          >
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--body-text)" }}>
              <strong style={{ color: "var(--teal)" }}>A note to counselors and educators:</strong>{" "}
              We&apos;re not here to replace you — we&apos;re here to extend what you can do. Think
              of us as a tool you can put directly in students&apos; hands, so every student gets a
              personalized experience regardless of caseload size.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
