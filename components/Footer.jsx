"use client";
import { NAV_LINKS } from "@/data/content";

export default function Footer() {
  return (
    <footer style={{ 
      background: "var(--navy)", 
      padding: "100px clamp(20px,5vw,40px)", /* 👈 Increased padding for a solid foundation */
      textAlign: "center" 
    }}>
      
      {/* ── LOGO ── */}
      <div className="font-display" style={{ 
        fontSize: 32,                 /* 👈 Bumped from 22px */
        fontWeight: 700, 
        color: "#fff", 
        marginBottom: 16              /* 👈 Increased spacing */
      }}>
        The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
      </div>

      {/* ── MISSION / LOCATION ── */}
      <p style={{ 
        fontSize: 16,                 /* 👈 Bumped from 12px */
        color: "rgba(255,255,255,0.6)", /* 👈 Slightly brighter for legibility */
        lineHeight: 1.65, 
        maxWidth: 480,                /* 👈 Widened slightly to fit the larger text */
        margin: "0 auto" 
      }}>
        A 501(c)(3) nonprofit teaching students to invest and build wealth through
        experiential education. Roseville, California.
      </p>

      {/* ── NAV LINKS ── */}
      <div style={{ 
        marginTop: 40,                /* 👈 More breathing room */
        display: "flex", 
        justifyContent: "center", 
        gap: 32,                      /* 👈 Wider gap for better tap targets */
        flexWrap: "wrap" 
      }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              fontSize: 15,           /* 👈 Bumped from 12px */
              fontWeight: 500,        /* 👈 Added weight */
              letterSpacing: 0.5,
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none", 
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.6)")}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* ── COPYRIGHT ── */}
      <p style={{ 
        marginTop: 56,                /* 👈 Pushed down to separate from links */
        fontSize: 14,                 /* 👈 Bumped from 11px */
        color: "rgba(255,255,255,0.3)", 
        letterSpacing: 0.5
      }}>
        © {new Date().getFullYear()} The Finance Lab. All rights reserved.
      </p>
    </footer>
  );
}