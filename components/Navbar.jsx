"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const resolveHref = (href) => (href.startsWith("#") && !isHome ? `/${href}` : href);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
    // Smooth scroll for anchor links, only when already on the homepage —
    // otherwise let the browser navigate to "/#section" and jump there natively.
    if (href.startsWith("#") && isHome) {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      setMobileOpen(false);
    }
  }, [isHome]);

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
          href="/"
          style={{ textDecoration: "none" }}
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/images/cubes-white.png"
              alt=""
              style={{ height: 30, width: "auto", display: "block" }}
            />
            <div className="font-display" style={{
              fontSize: 24,           /* 👈 Bumped from 18px */
              fontWeight: 700,
              color: "#fff",
              letterSpacing: 0.3
            }}>
              The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
            </div>
          </div>
        </a>

        {/* ── DESKTOP LINKS ── */}
        <div className="desktop-nav" style={{ display: "flex", gap: 32 /* 👈 Wider gap */, alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={resolveHref(l.href)}
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
            href={resolveHref("#impact")}
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
        onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
      >
        <div className="modal-box" style={{ padding: "48px 40px" }}>
          <p className="font-mono" style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 20
          }}>
            Coming Soon
          </p>
          <h3 className="font-display" style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 16,
            lineHeight: 1.1
          }}>
            Scholarship applications open soon.
          </h3>
          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6,
            marginBottom: 32
          }}>
            Want to be first to know when The Finance Lab Scholarship opens for the next
            cohort? Send us a quick email and we&apos;ll reach out.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="mailto:team@thefinancelab.co?subject=Notify%20me%3A%20Finance%20Lab%20Scholarship&body=Name%3A%0ASchool%20(optional)%3A%0A"
              className="btn-gold"
              style={{ padding: "16px 32px", fontSize: 16, fontWeight: 600, whiteSpace: "nowrap" }}
            >
              Email to Get Notified
            </a>
            <button
              onClick={() => setModalOpen(false)}
              className="btn-outline-white"
              style={{ padding: "16px 32px", fontSize: 16, fontWeight: 600 }}
            >
              Close
            </button>
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 24 }}>
            Or write to us directly:{" "}
            <a
              href="mailto:team@thefinancelab.co"
              style={{ color: "var(--gold-light)", fontWeight: 600, textDecoration: "underline" }}
            >
              team@thefinancelab.co
            </a>
          </p>
        </div>
      </div>
    </>
  );
}