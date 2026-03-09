import { useState, useEffect, useRef, useCallback } from "react";

// ─── INTERSECTION OBSERVER HOOK ───
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsInView(true); obs.unobserve(el); } },
      { threshold: 0.15, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, isInView];
}

// ─── ANIMATED COUNTER ───
function AnimatedNumber({ value, suffix = "", duration = 1600 }) {
  const [display, setDisplay] = useState("0");
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) { setDisplay(value); return; }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const current = Math.round(num * ease);
      setDisplay(current.toString());
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);
  return <span ref={ref}>{display}{suffix}</span>;
}

// ─── DATA ───
const NAV_LINKS = [
  { label: "Our Approach", href: "#journey" },
  { label: "The College Project", href: "#tcp" },
  { label: "Scholarship", href: "#scholarship" },
  { label: "Free Tools", href: "#tools" },
  { label: "For Educators", href: "#educators" },
];

const STATS = [
  { value: "70", suffix: "%", desc: "of students say money is their #1 worry about college" },
  { value: "83", suffix: "%", desc: "cannot explain how financial aid works before our program" },
  { value: "59", suffix: "%", desc: "report high or very high stress about the cost of college" },
];

const PHASE1_STEPS = [
  "Explore interests, majors, and career paths",
  "Research schools using real cost and outcome data",
  "Decode FAFSA, financial aid, and award letters",
  "Build a personalized action plan with real deadlines",
];

const PHASE2_STEPS = [
  "Complete modules on goal-setting and financial planning",
  "Open a real brokerage account, learn risk and index funds",
  "Invest at least 10% of scholarship in real markets",
  "Present investment strategy to a panel of professionals",
];

const RESULTS = [
  { before: "17%", after: "49%", label: "understood financial aid after completing the program" },
  { before: "59%", after: "39%", label: "reported high stress about college costs — a 20-point drop" },
  { before: "14%", after: "43%", label: "felt confident navigating the application process" },
];

const QUOTES = [
  { text: "Nobody in my family has gotten this far in education. These chapters made me realize that everyone has a chance to go to college regardless of their background.", attr: "First-generation student, Orange County" },
  { text: "I started thinking I probably wouldn't be able to afford the college I wanted — but after this book, I definitely think it changed my mind.", attr: "11th grader, post-survey" },
  { text: "For once we weren't being left alone in the dark.", attr: "Undocumented student, on the DACA/Dream Act chapter" },
];

const MILESTONES = [
  { num: "01", amount: "$250", title: "Set Your Goals", desc: "Complete self-paced modules on financial goal-setting. Define what wealth means for your life." },
  { num: "02", amount: "$250", title: "Know Your Risk", desc: "Learn risk tolerance, index funds, and long-term investing. Open your real brokerage account." },
  { num: "03", amount: "$250", title: "Build Your Portfolio", desc: "Invest at least 10% of your scholarship in real markets. Real decisions. Real money." },
  { num: "04", amount: "$250", title: "Present Your Strategy", desc: "Present your investment approach to a panel of professionals at our showcase event." },
];

const DIFFERENTIATORS = [
  { icon: "💰", title: "Real Money, Real Stakes", desc: "Not simulations. Students invest actual dollars — and that emotional weight changes everything." },
  { icon: "📈", title: "Earned, Not Given", desc: "Each $250 is unlocked by demonstrating competence. Accountability a free course can't replicate." },
  { icon: "🎤", title: "Authentic Audience", desc: "Defending choices to real professionals transforms how seriously students approach the work." },
  { icon: "🤝", title: "Designed for Equity", desc: "ITIN-accessible enrollment. Built for first-generation wealth builders." },
  { icon: "🔄", title: "Year-Long Relationship", desc: "From spring application through first college year — ongoing mentorship, not a one-day workshop." },
  { icon: "🎓", title: "College Transition Support", desc: "Financial literacy meets the biggest financial moment of a young person's life." },
];

const TOOLS = [
  { badge: "Free · Play Now", badgeColor: "teal", emoji: "🎮", name: "Compound Chaos", desc: "An interactive game teaching compound interest through real decisions and real consequences.", link: "game.thefinancelab.co", href: "https://game.thefinancelab.co" },
  { badge: "Free App", badgeColor: "gold", emoji: "🧭", name: "The College Project App", desc: "A 7-day guided journey to research schools, decode financial aid, and build a personalized plan.", link: "Launch the App", href: "#" },
  { badge: "Free App", badgeColor: "gold", emoji: "⚡", name: "Catalyst", desc: "A financial literacy companion app. Concepts, tools, and exercises that meet students where they are.", link: "Explore Catalyst", href: "#" },
];

const COURSE_TAGS = ["Dual Enrollment", "College Seminar", "AVID", "Personal Finance", "Senior English", "Advisory", "College & Career Readiness", "Economics"];

const FEATURES = [
  { title: "California-specific content", desc: "CA Dream Act, DACA, Cal Grant, CalKIDS. No adapting required." },
  { title: "Undocumented student chapters", desc: "Dedicated sections that serve every student, including those who can't file the FAFSA." },
  { title: "Modular design", desc: "Assign all 22 chapters or pick what fits your course. Flexible by design." },
  { title: "No financial institution affiliations", desc: "No bank sponsorships, no enrollment funnels. All proceeds fund scholarships." },
  { title: "Built-in reflection activities", desc: "\"Blank Space\" and interview exercises for deeper, personalized learning." },
  { title: "Scholarship pipeline included", desc: "Schools on the Scholarship Tier connect students directly to Finance Lab scholarships." },
];

const IMPACT_STATS = [
  { value: "368", label: "students surveyed in our research cohort" },
  { value: "3×", label: "increase in financial aid understanding" },
  { value: "20pt", label: "drop in high stress about college costs" },
  { value: "$0", label: "from banks or financial institutions" },
];

const PRICING = [
  { tier: "Scholarship Tier", note: "Includes $250 on-site scholarship per 25 books + support", price: "$20" },
  { tier: "Discounted Tier", note: "Supports the mission; no on-site scholarships", price: "$15" },
  { tier: "100+ Copy Bonus", note: "Additional 10% off on orders of 100 or more", price: "+10% off" },
];

// ─── STYLES ───
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700&family=DM+Mono:wght@400;500&display=swap');

  :root {
    --navy: #0D1B2A;
    --gold: #C8942A;
    --gold-light: #F0C96B;
    --teal: #1A7A6E;
    --teal-light: #2AA89A;
    --cream: #FAF7F2;
    --warm-white: #FEFCF8;
    --soft-gray: #EDE8E0;
    --body-text: #3D3530;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--warm-white); color: var(--body-text); overflow-x: hidden; }

  .font-display { font-family: 'Playfair Display', serif; }
  .font-mono { font-family: 'DM Mono', monospace; }

  /* Reveal animation */
  .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-d1 { transition-delay: 0.1s; }
  .reveal-d2 { transition-delay: 0.2s; }
  .reveal-d3 { transition-delay: 0.3s; }
  .reveal-d4 { transition-delay: 0.4s; }
  .reveal-d5 { transition-delay: 0.5s; }

  /* Stat bar animation */
  .stat-bar { width: 0; height: 3px; background: var(--gold); transition: width 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s; position: absolute; bottom: 0; left: 0; }
  .stat-bar.active { width: 100%; }

  /* Phase step stagger */
  .step-enter { opacity: 0; transform: translateX(-12px); transition: all 0.5s cubic-bezier(0.22,1,0.36,1); }
  .step-enter.visible { opacity: 1; transform: translateX(0); }

  /* Milestone hover */
  .milestone-card { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
  .milestone-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.1); }

  /* Tool card */
  .tool-card-wrap { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
  .tool-card-wrap:hover { transform: translateY(-6px); border-color: rgba(255,255,255,0.25) !important; background: rgba(255,255,255,0.08) !important; }

  /* Quote card hover */
  .quote-card-wrap { transition: transform 0.3s ease; }
  .quote-card-wrap:hover { transform: scale(1.02); }

  /* Result card */
  .result-card-wrap { transition: all 0.3s ease; }
  .result-card-wrap:hover { transform: translateY(-4px); box-shadow: 0 14px 40px rgba(0,0,0,0.08); }

  /* Diff item */
  .diff-card { transition: all 0.25s ease; }
  .diff-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); border-color: var(--gold) !important; }

  /* Impact stat */
  .impact-card { transition: background 0.3s; }
  .impact-card:hover { background: rgba(255,255,255,0.18) !important; }

  /* Feature item */
  .feature-row { transition: all 0.2s; }
  .feature-row:hover { background: var(--cream) !important; transform: translateX(4px); }

  /* Mobile menu */
  .mobile-nav { transform: translateX(100%); transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
  .mobile-nav.open { transform: translateX(0); }

  /* Hero gradient animation */
  @keyframes heroGlow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  .hero-glow { animation: heroGlow 6s ease-in-out infinite; }

  /* Scroll arrow bounce */
  @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
  .scroll-bounce { animation: bounce 2s ease-in-out infinite; }

  /* Button styles */
  .btn-gold { background: var(--gold); color: var(--navy); font-weight: 700; font-size: 13px; letter-spacing: 0.8px; text-transform: uppercase; padding: 14px 28px; border-radius: 8px; text-decoration: none; border: 2px solid var(--gold); transition: all 0.2s; display: inline-block; cursor: pointer; }
  .btn-gold:hover { background: var(--gold-light); border-color: var(--gold-light); }
  .btn-outline-white { background: transparent; color: rgba(255,255,255,0.85); font-weight: 600; font-size: 13px; letter-spacing: 0.8px; text-transform: uppercase; padding: 14px 28px; border-radius: 8px; text-decoration: none; border: 2px solid rgba(255,255,255,0.25); transition: all 0.2s; display: inline-block; cursor: pointer; }
  .btn-outline-white:hover { border-color: rgba(255,255,255,0.7); color: #fff; }
  .btn-teal { background: var(--teal); color: #fff; font-weight: 700; font-size: 13px; letter-spacing: 0.8px; text-transform: uppercase; padding: 14px 28px; border-radius: 8px; text-decoration: none; border: 2px solid var(--teal); transition: all 0.2s; display: inline-block; cursor: pointer; }
  .btn-teal:hover { background: var(--teal-light); border-color: var(--teal-light); }
  .btn-outline-navy { background: transparent; color: var(--navy); font-weight: 600; font-size: 13px; letter-spacing: 0.8px; text-transform: uppercase; padding: 14px 28px; border-radius: 8px; text-decoration: none; border: 2px solid var(--navy); transition: all 0.2s; display: inline-block; cursor: pointer; }
  .btn-outline-navy:hover { background: var(--navy); color: #fff; }
  .btn-white-solid { background: #fff; color: var(--teal); font-weight: 700; font-size: 13px; letter-spacing: 0.8px; text-transform: uppercase; padding: 14px 28px; border-radius: 8px; text-decoration: none; border: 2px solid #fff; transition: all 0.2s; display: inline-block; cursor: pointer; }
  .btn-white-solid:hover { background: transparent; color: #fff; }

  /* Audience pills */
  .audience-pill { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.5); padding: 10px 22px; border: 1px solid rgba(255,255,255,0.12); cursor: pointer; transition: all 0.25s; text-decoration: none; }
  .audience-pill:hover { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.95); }

  @media (max-width: 768px) {
    .phases-grid-responsive { grid-template-columns: 1fr !important; }
    .stats-grid-responsive { grid-template-columns: 1fr !important; }
    .results-grid-responsive { grid-template-columns: 1fr !important; }
    .quotes-grid-responsive { grid-template-columns: 1fr !important; }
    .milestones-responsive { grid-template-columns: 1fr 1fr !important; }
    .diff-grid-responsive { grid-template-columns: 1fr !important; }
    .tools-grid-responsive { grid-template-columns: 1fr !important; }
    .edu-grid-responsive { grid-template-columns: 1fr !important; }
    .impact-stats-responsive { grid-template-columns: 1fr 1fr !important; }
    .audience-row-responsive { flex-direction: column !important; gap: 8px !important; }
  }
`;

// ─── REVEAL WRAPPER ───
function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  const delayClass = delay > 0 ? `reveal-d${delay}` : "";
  return (
    <div ref={ref} className={`reveal ${inView ? "visible" : ""} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

// ─── NAVBAR ───
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(13,27,42,0.97)" : "rgba(13,27,42,0.85)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        padding: "0 clamp(20px, 4vw, 40px)", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "background 0.3s",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}>
        <a href="#" style={{ textDecoration: "none" }}>
          <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: 0.3 }}>
            The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)",
              textDecoration: "none", letterSpacing: 0.3, transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "#fff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
            >{l.label}</a>
          ))}
          <a href="#impact" className="btn-gold" style={{ padding: "8px 18px", fontSize: 11, letterSpacing: 1 }}>Support Us</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle" style={{
          display: "none", background: "none", border: "none", cursor: "pointer", padding: 8,
        }}>
          <div style={{ width: 22, height: 2, background: "#fff", marginBottom: 5, transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <div style={{ width: 22, height: 2, background: "#fff", marginBottom: 5, opacity: mobileOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <div style={{ width: 22, height: 2, background: "#fff", transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`} style={{
        position: "fixed", top: 64, right: 0, bottom: 0, width: "100%",
        background: "rgba(13,27,42,0.98)", backdropFilter: "blur(20px)",
        zIndex: 99, display: "flex", flexDirection: "column", padding: "40px 32px", gap: 24,
      }}>
        {NAV_LINKS.map(l => (
          <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{
            fontSize: 20, fontWeight: 500, color: "rgba(255,255,255,0.8)",
            textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)",
            paddingBottom: 20,
          }}>{l.label}</a>
        ))}
        <a href="#impact" onClick={() => setMobileOpen(false)} className="btn-gold" style={{ textAlign: "center", marginTop: 8 }}>Support Us</a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}

// ─── TIMELINE DATA ───
const TIMELINE_NODES = [
  { id: "explore", label: "Explore", time: "Junior Year", phase: "tcp", desc: "Students discover interests, research majors, and start building a personalized plan for life after high school.", iconId: "explore" },
  { id: "plan", label: "Build the Plan", time: "Senior Year", phase: "tcp", desc: "Decode FAFSA, compare real school costs, and lock in a data-driven action plan — not a guess.", iconId: "plan" },
  { id: "apply", label: "Apply & Transition", time: "Senior Spring", phase: "bridge", desc: "Students apply for the Finance Lab Scholarship during spring semester, bridging the plan to the portfolio.", iconId: "bridge" },
  { id: "invest", label: "Learn to Invest", time: "College Year 1", phase: "flab", desc: "Open a real brokerage account, invest real dollars, and earn $1,000 across four competency milestones.", iconId: "invest" },
  { id: "present", label: "Arrive Ready", time: "Year 1 Complete", phase: "flab", desc: "Present investment strategy to professionals. Enter adulthood with a direction and a portfolio already growing.", iconId: "cap" },
];

function TimelineIcon({ iconId, color, size = 16 }) {
  const stroke = color;
  const sw = 1.8;
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { display: "block" } };
  switch (iconId) {
    case "explore":
      return (<svg {...props}><circle cx="12" cy="12" r="9.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeDasharray="0.1 0" /><path d="M12 2.5v1.5M12 20v1.5M2.5 12H4M20 12h1.5" stroke={stroke} strokeWidth={1.2} strokeLinecap="round" opacity="0.5" /><polygon points="10,14 8.5,8.5 14,10 15.5,15.5" fill={stroke} opacity="0.25" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" /><line x1="10" y1="14" x2="14" y2="10" stroke={stroke} strokeWidth={1} strokeLinecap="round" /></svg>);
    case "plan":
      return (<svg {...props}><rect x="5" y="3.5" width="14" height="17" rx="2.2" stroke={stroke} strokeWidth={sw} strokeLinecap="round" /><path d="M9 3.5V2.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke={stroke} strokeWidth={sw} strokeLinecap="round" /><path d="M8.5 9.5l1.8 1.8 3.5-3.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" /><line x1="8.5" y1="15" x2="15.5" y2="15" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.45" /><line x1="8.5" y1="18" x2="13" y2="18" stroke={stroke} strokeWidth={1.2} strokeLinecap="round" opacity="0.3" /></svg>);
    case "bridge":
      return (<svg {...props}><path d="M4 8c3 0 5 1.5 8 4" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" /><path d="M20 8c-3 0-5 1.5-8 4" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="2" fill={stroke} opacity="0.3" stroke={stroke} strokeWidth={1.2} /><path d="M12 14v5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" /><path d="M10 17.5l2 2 2-2" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" /></svg>);
    case "invest":
      return (<svg {...props}><path d="M4 20c1-4 4-7 8-9.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" /><path d="M12 10.5c2.5-2 5.5-3.2 8-3.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" /><path d="M17 4.5l3 2.5-3.2 1" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" /><circle cx="8" cy="17" r="0.8" fill={stroke} opacity="0.4" /><circle cx="12" cy="10.5" r="1" fill={stroke} opacity="0.3" stroke={stroke} strokeWidth={1} /></svg>);
    case "cap":
      return (<svg {...props}><path d="M2.5 9.5L12 5l9.5 4.5L12 14 2.5 9.5z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" fill={stroke} fillOpacity="0.15" /><path d="M7 11.5v5c0 0 2 2.5 5 2.5s5-2.5 5-2.5v-5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" /><line x1="21.5" y1="9.5" x2="21.5" y2="15.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" /><circle cx="21.5" cy="16.5" r="1" fill={stroke} opacity="0.4" /></svg>);
    default: return null;
  }
}

function getPhaseColor(phase) { return phase === "tcp" ? "var(--teal-light)" : "var(--gold-light)"; }
function getPhaseGlow(phase) { return phase === "tcp" ? "rgba(42,168,154,0.4)" : "rgba(240,201,107,0.4)"; }
function getPhaseBg(phase) { if (phase === "tcp") return "rgba(42,168,154,0.12)"; if (phase === "flab") return "rgba(200,148,42,0.12)"; return "bridge"; }
function getPhaseLabel(phase) { if (phase === "tcp") return "The College Project"; if (phase === "flab") return "The Finance Lab"; return "The Bridge"; }
function getPhaseLabelColor(phase) { return phase === "tcp" ? "var(--teal-light)" : "var(--gold)"; }

// ─── HERO ───
function Hero() {
  const [activeNode, setActiveNode] = useState(null);
  const active = activeNode !== null ? TIMELINE_NODES[activeNode] : null;

  return (
    <section style={{
      minHeight: "100vh", background: "var(--navy)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "100px clamp(20px,5vw,40px) 48px",
      position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes fadeInCard { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .tl-node { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
        .tl-node:hover { transform: scale(1.08); }
        @media (max-width: 640px) {
          .tl-phase-labels { display: none !important; }
          .tl-node-label { font-size: 9px !important; max-width: 56px !important; }
          .tl-time-label { font-size: 7px !important; letter-spacing: 1px !important; }
        }
      `}</style>

      {/* Gradient glow */}
      <div className="hero-glow" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(26,122,110,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(200,148,42,0.10) 0%, transparent 60%)",
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <Reveal>
        <p className="font-mono" style={{ fontSize: 11, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 28 }}>
          A 501(c)(3) Nonprofit · Roseville, CA
        </p>
      </Reveal>

      <Reveal delay={1}>
        <h1 className="font-display" style={{ fontSize: "clamp(44px, 7.5vw, 86px)", fontWeight: 900, lineHeight: 1.02, color: "#fff", marginBottom: 20 }}>
          The <em style={{ fontStyle: "italic", color: "var(--teal-light)" }}>Plan.</em><br />
          Then the <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Portfolio.</em>
        </h1>
      </Reveal>

      <Reveal delay={2}>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 300, color: "rgba(255,255,255,0.7)", maxWidth: 580, lineHeight: 1.7, marginBottom: 44 }}>
          We meet every student where they are — with a personalized roadmap and real investing skills — so they begin adulthood{" "}
          <strong style={{ color: "#fff", fontWeight: 600 }}>one step ahead.</strong>
        </p>
      </Reveal>

      {/* ── TIMELINE ── */}
      <Reveal delay={3}>
        <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", position: "relative" }}>
          {/* Phase labels */}
          <div className="tl-phase-labels" style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, padding: "0 6px" }}>
            <span className="font-mono" style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "var(--teal-light)", opacity: 0.6 }}>← The College Project</span>
            <span className="font-mono" style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", opacity: 0.6 }}>The Finance Lab →</span>
          </div>

          <div style={{ position: "relative", padding: "0 6px" }}>
            {/* Track */}
            <div style={{ position: "absolute", top: 17, left: 6, right: 6, height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }} />
            <div style={{ position: "absolute", top: 17, left: 6, width: "37%", height: 3, background: "var(--teal-light)", borderRadius: "2px 0 0 2px", opacity: 0.45 }} />
            <div style={{ position: "absolute", top: 17, left: "37%", width: "26%", height: 3, background: "linear-gradient(90deg, var(--teal-light), var(--gold))", opacity: 0.45 }} />
            <div style={{ position: "absolute", top: 17, left: "63%", right: 6, height: 3, background: "var(--gold)", borderRadius: "0 2px 2px 0", opacity: 0.45 }} />

            {/* Nodes */}
            <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
              {TIMELINE_NODES.map((node, i) => {
                const isActive = activeNode === i;
                const color = getPhaseColor(node.phase);
                const glow = getPhaseGlow(node.phase);
                return (
                  <div key={node.id} className="tl-node" style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", flex: "1 1 0", minWidth: 0 }}
                    onMouseEnter={() => setActiveNode(i)} onMouseLeave={() => setActiveNode(null)} onClick={() => setActiveNode(isActive ? null : i)}>
                    <div style={{
                      width: isActive ? 36 : 30, height: isActive ? 36 : 30, borderRadius: "50%",
                      background: isActive ? color : "var(--navy)", border: `2.5px solid ${color}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: isActive ? `0 0 16px ${glow}, 0 0 32px ${glow}` : "none",
                    }}><TimelineIcon iconId={node.iconId} color={isActive ? "var(--navy)" : color} size={isActive ? 18 : 15} /></div>
                    <span className="font-mono tl-time-label" style={{ fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: isActive ? color : "rgba(255,255,255,0.3)", marginTop: 10, transition: "color 0.3s", whiteSpace: "nowrap" }}>{node.time}</span>
                    <span className="tl-node-label" style={{ fontSize: 11, fontWeight: isActive ? 700 : 500, color: isActive ? "#fff" : "rgba(255,255,255,0.45)", marginTop: 4, transition: "all 0.3s", textAlign: "center", lineHeight: 1.3, maxWidth: 90 }}>{node.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail card */}
          <div style={{ marginTop: 20, minHeight: 86 }}>
            {active ? (
              <div key={active.id} style={{
                background: active.phase === "bridge" ? "linear-gradient(135deg, rgba(42,168,154,0.12), rgba(200,148,42,0.12))" : getPhaseBg(active.phase),
                border: `1px solid ${getPhaseColor(active.phase)}30`, borderRadius: 12, padding: "18px 28px", textAlign: "left",
                animation: "fadeInCard 0.3s ease forwards",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span className="font-mono" style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: getPhaseLabelColor(active.phase), background: `${getPhaseLabelColor(active.phase)}15`, padding: "3px 8px", borderRadius: 4 }}>{getPhaseLabel(active.phase)}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{active.label}</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>{active.desc}</p>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "18px 0" }}>
                <p className="font-mono" style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Hover over a milestone to explore the journey</p>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={4}>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
          <a href="#journey" className="btn-gold">See How It Works</a>
          <a href="#tcp" className="btn-outline-white">Explore the Book</a>
        </div>
      </Reveal>

      <Reveal delay={5}>
        <div className="audience-row-responsive" style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
          <a href="#tcp" className="audience-pill" style={{ borderRadius: "99px 0 0 99px" }}>I'm a Student</a>
          <a href="#educators" className="audience-pill">I'm an Educator</a>
          <a href="#impact" className="audience-pill" style={{ borderRadius: "0 99px 99px 0" }}>I Want to Support</a>
        </div>
      </Reveal>
    </section>
  );
}

// ─── PROBLEM SECTION ───
function ProblemSection() {
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
            760 students.<br /><em style={{ fontStyle: "italic", color: "var(--teal)" }}>One counselor.</em><br />No personalized plan.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--body-text)", maxWidth: 680, marginBottom: 56 }}>
            California's counselor-to-student ratio is <strong style={{ color: "var(--navy)" }}>1 to 760</strong>. That's not a criticism of counselors — it's an impossible situation. No single professional can build a personalized roadmap for every student. The result: most young people make the biggest financial decision of their lives with almost no preparation.
          </p>
        </Reveal>

        {/* Stats */}
        <div ref={statsRef} className="stats-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 40 }}>
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i + 1}>
              <div style={{
                background: "var(--navy)", padding: "40px 32px", position: "relative", overflow: "hidden",
                borderRadius: i === 0 ? "12px 0 0 12px" : i === 2 ? "0 12px 12px 0" : 0,
              }}>
                <div className="font-display" style={{ fontSize: 56, fontWeight: 900, color: "var(--gold-light)", lineHeight: 1, marginBottom: 12 }}>
                  {statsInView ? <AnimatedNumber value={s.value} suffix={s.suffix} /> : `0${s.suffix}`}
                </div>
                <div style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.7)", lineHeight: 1.55 }}>{s.desc}</div>
                <div className={`stat-bar ${statsInView ? "active" : ""}`} style={{ transitionDelay: `${0.4 + i * 0.2}s` }} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Dropout callout */}
        <Reveal>
          <div style={{
            background: "#fff", border: "1px solid var(--soft-gray)", borderLeft: "4px solid var(--teal)",
            borderRadius: "0 12px 12px 0", padding: "28px 32px", maxWidth: 820,
          }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--body-text)" }}>
              Research shows that students who <strong style={{ color: "var(--navy)" }}>dropped out</strong> chose their college primarily because of convenience — location and schedule. Students who <strong style={{ color: "var(--navy)" }}>graduated</strong> chose because they believed it would help them get a job. <strong style={{ color: "var(--navy)" }}>The decision-making process before enrollment predicts the outcome after it.</strong>
            </p>
            <p style={{ fontSize: 11, color: "var(--soft-gray)", marginTop: 10, fontStyle: "italic", color: "#9CA3AF" }}>— Public Agenda, 2009</p>
          </div>
        </Reveal>

        {/* Counselor note */}
        <Reveal>
          <div style={{
            marginTop: 32, background: "rgba(26,122,110,0.06)", border: "1px solid rgba(26,122,110,0.18)",
            borderRadius: 12, padding: "24px 28px", maxWidth: 820,
          }}>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--body-text)" }}>
              <strong style={{ color: "var(--teal)" }}>A note to counselors and educators:</strong> We're not here to replace you — we're here to extend what you can do. Think of us as a tool you can put directly in students' hands, so every student gets a personalized experience regardless of caseload size.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── JOURNEY SECTION ───
function JourneySection() {
  return (
    <section id="journey" style={{
      background: "var(--navy)", padding: "100px clamp(20px,5vw,40px)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: -200, right: -200, width: 600, height: 600, pointerEvents: "none",
        background: "radial-gradient(circle, rgba(26,122,110,0.12) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Our Approach</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>
            The <em style={{ fontStyle: "italic", color: "var(--teal-light)" }}>Plan</em><span style={{ color: "rgba(255,255,255,0.3)" }}>,</span><br />
            then the <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Portfolio.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 580, lineHeight: 1.65, marginBottom: 64, fontWeight: 300 }}>
            Two connected programs. One complete journey — from choosing a path, to building wealth on it.
          </p>
        </Reveal>

        {/* Phases grid */}
        <div className="phases-grid-responsive" style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 0, alignItems: "start" }}>
          {/* Phase 1 */}
          <Reveal>
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              borderTop: "3px solid var(--teal-light)", borderRadius: 16, padding: "40px 36px",
            }}>
              <p className="font-mono" style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--teal-light)", marginBottom: 20 }}>Phase 01 · The College Project</p>
              <h3 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Build Your <em style={{ fontStyle: "italic", color: "var(--teal-light)" }}>Plan</em></h3>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", background: "rgba(26,122,110,0.2)", color: "var(--teal-light)", padding: "4px 10px", borderRadius: 99, marginBottom: 20 }}>Book + App · For High Schoolers</span>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>Before a student can build wealth, they need to know where they're going. The College Project gives every student a personalized roadmap for life after high school.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {PHASE1_STEPS.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(42,168,154,0.2)", color: "var(--teal-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Connector */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 60, gap: 8 }}>
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))" }} />
            <span className="font-mono" style={{ fontSize: 9, letterSpacing: 2, color: "rgba(255,255,255,0.3)", writingMode: "vertical-rl", textTransform: "uppercase" }}>then</span>
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.15))" }} />
          </div>

          {/* Phase 2 */}
          <Reveal delay={2}>
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              borderTop: "3px solid var(--gold)", borderRadius: 16, padding: "40px 36px",
            }}>
              <p className="font-mono" style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Phase 02 · The Finance Lab</p>
              <h3 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Build Your <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Portfolio</em></h3>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", background: "rgba(200,148,42,0.2)", color: "var(--gold-light)", padding: "4px 10px", borderRadius: 99, marginBottom: 20 }}>Scholarship · For College Year One</span>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>Once students have a plan, they learn to build wealth by doing it — not simulating it. $1,000 disbursed in four milestones, with real money in real accounts.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {PHASE2_STEPS.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(200,148,42,0.2)", color: "var(--gold-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Fusion bar */}
        <Reveal>
          <div style={{
            marginTop: 48, background: "linear-gradient(135deg, rgba(26,122,110,0.15), rgba(200,148,42,0.15))",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "32px 40px",
            display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
          }}>
            <span style={{ fontSize: 36, flexShrink: 0 }}>🎓</span>
            <div>
              <h4 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6 }}>The Result: Students Who Arrive Ready</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                A student who completes both programs enters adulthood with something rare: a thoughtful plan for their path forward <em>and</em> a real investment portfolio already growing.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── TCP RESULTS SECTION ───
function TCPSection() {
  return (
    <section id="tcp" style={{ background: "var(--warm-white)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--teal)", marginBottom: 20 }}>The College Project</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4vw, 50px)", fontWeight: 700, color: "var(--navy)", marginBottom: 16, maxWidth: 600 }}>
            The book that gives every student a <em style={{ fontStyle: "italic", color: "var(--teal)" }}>personalized plan.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--body-text)", maxWidth: 600, marginBottom: 56 }}>
            22 chapters. 216 pages. Written in plain language that speaks to teens — not at them. Built for California classrooms. Every dollar of proceeds funds scholarships.
          </p>
        </Reveal>

        {/* Results */}
        <div className="results-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
          {RESULTS.map((r, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="result-card-wrap" style={{
                background: "#fff", border: "1px solid var(--soft-gray)", borderRadius: 12, padding: "32px 28px",
              }}>
                <div className="font-mono" style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 4 }}>{r.before} before</div>
                <span style={{ fontSize: 20, color: "var(--teal)", margin: "6px 0", display: "block" }}>↓</span>
                <div className="font-display" style={{ fontSize: 42, fontWeight: 900, color: "var(--teal)", lineHeight: 1, marginBottom: 10 }}>
                  <AnimatedNumber value={r.after.replace("%", "")} suffix="%" />
                </div>
                <div style={{ fontSize: 13, color: "var(--body-text)", lineHeight: 1.5 }}>{r.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quotes */}
        <div className="quotes-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="quote-card-wrap" style={{
                background: "var(--navy)", borderRadius: 12, padding: 28, position: "relative",
              }}>
                <span className="font-display" style={{ position: "absolute", top: 16, left: 20, fontSize: 60, lineHeight: 1, color: "rgba(200,148,42,0.3)", pointerEvents: "none" }}>"</span>
                <p style={{ fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.65, marginBottom: 14, paddingTop: 20 }}>"{q.text}"</p>
                <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 600, letterSpacing: 0.5 }}>{q.attr}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#" className="btn-teal">Try the App Free</a>
            <a href="#educators" className="btn-outline-navy">Order for Your School</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── SCHOLARSHIP SECTION ───
function ScholarshipSection() {
  const [activeMilestone, setActiveMilestone] = useState(null);

  return (
    <section id="scholarship" style={{ background: "var(--cream)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>The Finance Lab Scholarship</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4vw, 50px)", fontWeight: 700, color: "var(--navy)", maxWidth: 660, marginBottom: 16 }}>
            Learn to invest by <em style={{ fontStyle: "italic", color: "var(--gold)" }}>actually investing.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--body-text)", maxWidth: 600, marginBottom: 56 }}>
            Our $1,000 scholarship is disbursed across four milestones — not handed over all at once. Students earn each increment by demonstrating real competency.
          </p>
        </Reveal>

        {/* Milestones */}
        <Reveal>
          <div className="milestones-responsive" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginBottom: 40,
            border: "1px solid var(--soft-gray)", borderRadius: 16, overflow: "hidden",
          }}>
            {MILESTONES.map((m, i) => (
              <div key={i} className="milestone-card" style={{
                padding: "36px 28px", borderRight: i < 3 ? "1px solid var(--soft-gray)" : "none",
                background: activeMilestone === i ? "rgba(200,148,42,0.06)" : "#fff",
                cursor: "pointer",
              }}
              onMouseEnter={() => setActiveMilestone(i)}
              onMouseLeave={() => setActiveMilestone(null)}
              >
                <div className="font-mono" style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", marginBottom: 8 }}>MILESTONE {m.num}</div>
                <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>{m.amount}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", marginBottom: 8, letterSpacing: 0.2 }}>{m.title}</div>
                <div style={{ fontSize: 12, color: "var(--body-text)", lineHeight: 1.6, opacity: 0.8 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Differentiators */}
        <div className="diff-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={i} delay={(i % 3) + 1}>
              <div className="diff-card" style={{
                display: "flex", alignItems: "flex-start", gap: 14, padding: 20,
                background: "#fff", border: "1px solid var(--soft-gray)", borderRadius: 10,
              }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{d.icon}</span>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>{d.title}</h4>
                  <p style={{ fontSize: 12, color: "var(--body-text)", lineHeight: 1.55, opacity: 0.85 }}>{d.desc}</p>
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

// ─── FREE TOOLS ───
function ToolsSection() {
  return (
    <section id="tools" style={{ background: "var(--navy)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold-light)", marginBottom: 20 }}>Free Tools</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>Start here. No cost. No catch.</h2>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.65, marginBottom: 56, fontWeight: 300 }}>
            Every student deserves access to financial education. These tools are free and open to anyone.
          </p>
        </Reveal>

        <div className="tools-grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {TOOLS.map((t, i) => (
            <Reveal key={i} delay={i + 1}>
              <a href={t.href} target={t.href.startsWith("http") ? "_blank" : undefined} className="tool-card-wrap" style={{
                display: "block", textDecoration: "none",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16, padding: "36px 30px",
              }}>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
                  padding: "4px 10px", borderRadius: 99, display: "inline-block", marginBottom: 20,
                  background: t.badgeColor === "teal" ? "rgba(42,168,154,0.2)" : "rgba(200,148,42,0.2)",
                  color: t.badgeColor === "teal" ? "var(--teal-light)" : "var(--gold-light)",
                }}>{t.badge}</span>
                <span style={{ fontSize: 32, marginBottom: 14, display: "block" }}>{t.emoji}</span>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{t.name}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 20 }}>{t.desc}</p>
                <span style={{
                  fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase",
                  color: t.badgeColor === "teal" ? "var(--teal-light)" : "var(--gold-light)",
                }}>{t.link} →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EDUCATORS SECTION ───
function EducatorsSection() {
  return (
    <section id="educators" style={{ background: "var(--warm-white)", padding: "100px clamp(20px,5vw,40px)" }}>
      <div className="edu-grid-responsive" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        {/* Left */}
        <div>
          <Reveal>
            <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "var(--teal)", marginBottom: 20 }}>For Educators</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display" style={{ fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 700, color: "var(--navy)", marginBottom: 20, lineHeight: 1.15 }}>
              A partner for counselors. A resource for classrooms.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--body-text)", marginBottom: 16 }}>
              We know counselors aren't falling short — the system is. No one can build 760 personalized plans. The College Project sits in students' hands and does the personalization work that isn't possible at scale.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div style={{ fontSize: 14, fontStyle: "italic", color: "var(--teal)", lineHeight: 1.65, borderLeft: "3px solid var(--teal)", paddingLeft: 16, margin: "24px 0" }}>
              "We're not here to replace what counselors do. We're here to multiply it — so every student gets a tailored experience, regardless of caseload."
            </div>
          </Reveal>
          <Reveal>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--body-text)", marginBottom: 24 }}>
              Schools that adopt The College Project can connect students directly to The Finance Lab scholarship pipeline — meaning the plan and the portfolio are available to your whole class.
            </p>
          </Reveal>

          {/* Pricing table */}
          <Reveal>
            <div style={{ border: "1px solid var(--soft-gray)", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", padding: "14px 20px", background: "var(--navy)", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                <span>Option</span><span>Per Copy</span>
              </div>
              {PRICING.map((p, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "1fr auto", padding: "16px 20px",
                  borderBottom: i < PRICING.length - 1 ? "1px solid var(--soft-gray)" : "none",
                  alignItems: "center", transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--cream)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)" }}>{p.tier}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{p.note}</div>
                  </div>
                  <div className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--gold)" }}>{p.price}</div>
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

        {/* Right */}
        <div style={{ paddingTop: 8 }}>
          <Reveal>
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#9CA3AF", marginBottom: 14 }}>Course Fit</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {COURSE_TAGS.map(tag => (
                  <span key={tag} style={{ fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 99, background: "var(--soft-gray)", color: "var(--navy)" }}>{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 5)}>
                <div className="feature-row" style={{
                  display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px",
                  background: "#fff", border: "1px solid var(--soft-gray)", borderRadius: 8,
                }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%", background: "rgba(26,122,110,0.12)",
                    color: "var(--teal)", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontWeight: 700,
                  }}>✓</div>
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

// ─── IMPACT SECTION ───
function ImpactSection() {
  return (
    <section id="impact" style={{ background: "var(--teal)", padding: "100px clamp(20px,5vw,40px)", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: -100, left: -100, width: 400, height: 400, pointerEvents: "none",
        background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
      }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal>
          <p className="font-mono" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>Impact & Mission</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display" style={{ fontSize: "clamp(34px, 4.5vw, 52px)", fontWeight: 700, color: "#fff", maxWidth: 680, margin: "0 auto 16px", lineHeight: 1.15 }}>
            Building a generation of <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>first-time wealth builders.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "0 auto 60px", lineHeight: 1.65, fontWeight: 300 }}>
            The Finance Lab is a 501(c)(3) nonprofit. Every dollar supports students from underserved communities who won't get this education anywhere else.
          </p>
        </Reveal>

        <div className="impact-stats-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginBottom: 56 }}>
          {IMPACT_STATS.map((s, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="impact-card" style={{
                background: "rgba(255,255,255,0.1)", padding: "32px 24px",
                borderRadius: i === 0 ? "12px 0 0 12px" : i === 3 ? "0 12px 12px 0" : 0,
              }}>
                <div className="font-display" style={{ fontSize: 44, fontWeight: 900, color: "var(--gold-light)", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="#" className="btn-white-solid">Make a Donation</a>
            <a href="mailto:team@thefinancelab.co" className="btn-outline-white">Partner With Us</a>
          </div>
        </Reveal>

        <p style={{ marginTop: 32, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          The Finance Lab · 501(c)(3) Nonprofit · EIN: 82-5305120 · team@thefinancelab.co
        </p>
      </div>
    </section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer style={{ background: "var(--navy)", padding: "56px clamp(20px,5vw,40px)", textAlign: "center" }}>
      <div className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
        The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: 400, margin: "0 auto" }}>
        A 501(c)(3) nonprofit teaching students to invest and build wealth through experiential education. Roseville, California.
      </p>
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
        {NAV_LINKS.map(l => (
          <a key={l.label} href={l.href} style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--gold)"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
          >{l.label}</a>
        ))}
      </div>
      <p style={{ marginTop: 24, fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
        © {new Date().getFullYear()} The Finance Lab. All rights reserved.
      </p>
    </footer>
  );
}

// ─── MAIN APP ───
export default function TheFinanceLab() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--warm-white)", color: "var(--body-text)" }}>
      <style>{styles}</style>
      <Navbar />
      <Hero />
      <ProblemSection />
      <JourneySection />
      <TCPSection />
      <ScholarshipSection />
      <ToolsSection />
      <EducatorsSection />
      <ImpactSection />
      <Footer />
    </div>
  );
}
