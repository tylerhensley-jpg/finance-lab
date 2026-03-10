"use client";
import { useState, useEffect, useCallback } from "react";
import { NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (mobileOpen || modalOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, modalOpen]);

  const handleNavClick = useCallback((e, href, label) => {
    // "Scholarship" opens Coming Soon modal instead of navigating
    if (label === "Scholarship") {
      e.preventDefault();
      setMobileOpen(false);
      setModalOpen(true);
      return;
    }
    // Smooth scroll for anchor links
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <>
      <nav
        style={{
          position: "sticky", top: 0, zIndex: 100,
          background: scrolled ? "rgba(13,27,42,0.70)" : "rgba(13,27,42,0.85)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          padding: "0 clamp(20px, 4vw, 40px)", 
          height: 80, /* 👈 Bumped from 64px for a more breathable header */
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "background 0.3s, height 0.3s",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        {/* ── LOGO ── */}
        <a
          href="#"
          style={{ textDecoration: "none" }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="font-display" style={{ 
            fontSize: 24,           /* 👈 Bumped from 18px */
            fontWeight: 700, 
            color: "#fff", 
            letterSpacing: 0.3 
          }}>
            The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
          </div>
        </a>

        {/* ── DESKTOP LINKS ── */}
        <div className="desktop-nav" style={{ display: "flex", gap: 32 /* 👈 Wider gap */, alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href, l.label)}
              style={{
                fontSize: 15,           /* 👈 Bumped from 13px */
                fontWeight: 500, 
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none", 
                letterSpacing: 0.3,
                transition: "color 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.65)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#impact"
            onClick={(e) => handleNavClick(e, "#impact", "Support Us")}
            className="btn-gold"
            style={{ 
              padding: "12px 24px",     /* 👈 Chunkier padding */
              fontSize: 14,             /* 👈 Bumped from 11px */
              fontWeight: 600,
              letterSpacing: 1 
            }}
          >
            Support Us
          </a>
        </div>

        {/* ── HAMBURGER TOGGLE ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-toggle"
          aria-label="Toggle menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}
        >
          <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 6, transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
          <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 6, opacity: mobileOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <div style={{ width: 24, height: 2, background: "#fff", transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
        </button>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className={`mobile-nav ${mobileOpen ? "open" : ""}`}
        style={{
          position: "fixed", top: 80 /* 👈 Matched new nav height */, right: 0, bottom: 0, width: "100%",
          background: "rgba(13,27,42,0.98)", backdropFilter: "blur(20px)",
          zIndex: 99, display: "flex", flexDirection: "column",
          padding: "40px 32px", gap: 24,
        }}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={(e) => handleNavClick(e, l.href, l.label)}
            style={{
              fontSize: 28,             /* 👈 Bumped from 20px for massive touch targets */
              fontWeight: 500, 
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none", 
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              paddingBottom: 24,        /* 👈 Increased padding */
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#impact"
          onClick={(e) => handleNavClick(e, "#impact", "Support Us")}
          className="btn-gold"
          style={{ 
            textAlign: "center", 
            marginTop: 16, 
            padding: "16px",            /* 👈 Chunkier mobile button */
            fontSize: 18,               /* 👈 Bigger text */
            fontWeight: 600 
          }}
        >
          Support Us
        </a>
      </div>

      {/* ── COMING SOON MODAL ── */}
      <div
        className={`modal-overlay ${modalOpen ? "open" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) { setModalOpen(false); setSubmitted(false); setEmail(""); } }}
      >
        <div className="modal-box" style={{ padding: "48px 40px" /* 👈 Assumes modal-box class exists, overriding inner padding if needed */ }}>
          {!submitted ? (
            <>
              <p className="font-mono" style={{ 
                fontSize: 13,           /* 👈 Standardized from 10px */
                fontWeight: 600,
                letterSpacing: 4, 
                textTransform: "uppercase", 
                color: "var(--gold)", 
                marginBottom: 20 
              }}>
                Coming Soon
              </p>
              <h3 className="font-display" style={{ 
                fontSize: 36,           /* 👈 Bumped from 28px */
                fontWeight: 700, 
                color: "#fff", 
                marginBottom: 16, 
                lineHeight: 1.1 
              }}>
                Scholarship applications open soon.
              </h3>
              <p style={{ 
                fontSize: 16,           /* 👈 Bumped from 14px */
                color: "rgba(255,255,255,0.7)", 
                lineHeight: 1.6, 
                marginBottom: 32 
              }}>
                Be the first to know when The Finance Lab Scholarship opens for the next cohort. Drop your email and we&apos;ll notify you.
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="modal-input"
                  style={{ 
                    flex: "1 1 220px", 
                    minWidth: 0,
                    padding: "16px 20px", /* 👈 Chunkier input */
                    fontSize: 16          /* 👈 Bigger text */
                  }}
                />
                <button type="submit" className="btn-gold" style={{ 
                  padding: "16px 32px",   /* 👈 Chunkier button */
                  fontSize: 16, 
                  fontWeight: 600,
                  whiteSpace: "nowrap" 
                }}>
                  Notify Me
                </button>
              </form>
            </>
          ) : (
            <>
              <div style={{ 
                fontSize: 56,             /* 👈 Bumped from 40px */
                color: "var(--gold)", 
                marginBottom: 20 
              }}>✓</div>
              <h3 className="font-display" style={{ 
                fontSize: 32,             /* 👈 Bumped from 24px */
                fontWeight: 700, 
                color: "#fff", 
                marginBottom: 12 
              }}>
                You&apos;re on the list.
              </h3>
              <p style={{ 
                fontSize: 16,             /* 👈 Bumped from 14px */
                color: "rgba(255,255,255,0.7)", 
                marginBottom: 32 
              }}>
                We&apos;ll reach out to <strong style={{ color: "var(--gold)" }}>{email}</strong> when applications open.
              </p>
              <button
                onClick={() => { setModalOpen(false); setSubmitted(false); setEmail(""); }}
                className="btn-outline-white"
                style={{ 
                  padding: "12px 32px",   /* 👈 Chunkier close button */
                  fontSize: 16,
                  fontWeight: 600
                }}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}