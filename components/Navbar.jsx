"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(13,27,42,0.97)" : "rgba(13,27,42,0.85)",
          backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
          padding: "0 clamp(20px, 4vw, 40px)", height: 64,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "background 0.3s",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <a href="#" style={{ textDecoration: "none" }}>
          <div
            className="font-display"
            style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: 0.3 }}
          >
            The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
          </div>
        </a>

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", gap: 28, alignItems: "center" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)",
                textDecoration: "none", letterSpacing: 0.3, transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.65)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#impact"
            className="btn-gold"
            style={{ padding: "8px 18px", fontSize: 11, letterSpacing: 1 }}
          >
            Support Us
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-toggle"
          aria-label="Toggle menu"
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", padding: 8,
          }}
        >
          <div
            style={{
              width: 22, height: 2, background: "#fff", marginBottom: 5,
              transition: "all 0.3s",
              transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <div
            style={{
              width: 22, height: 2, background: "#fff", marginBottom: 5,
              opacity: mobileOpen ? 0 : 1, transition: "opacity 0.2s",
            }}
          />
          <div
            style={{
              width: 22, height: 2, background: "#fff",
              transition: "all 0.3s",
              transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-nav ${mobileOpen ? "open" : ""}`}
        style={{
          position: "fixed", top: 64, right: 0, bottom: 0, width: "100%",
          background: "rgba(13,27,42,0.98)", backdropFilter: "blur(20px)",
          zIndex: 99, display: "flex", flexDirection: "column",
          padding: "40px 32px", gap: 24,
        }}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontSize: 20, fontWeight: 500, color: "rgba(255,255,255,0.8)",
              textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)",
              paddingBottom: 20,
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#impact"
          onClick={() => setMobileOpen(false)}
          className="btn-gold"
          style={{ textAlign: "center", marginTop: 8 }}
        >
          Support Us
        </a>
      </div>
    </>
  );
}
