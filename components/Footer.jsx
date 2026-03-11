"use client";
import Script from "next/script";
import { NAV_LINKS } from "@/data/content";

export default function Footer() {
  return (
    <footer style={{ 
      background: "var(--navy)", 
      padding: "100px clamp(20px,5vw,40px)", 
      textAlign: "center",
      position: "relative" 
    }}>
      
      {/* ── DONORBOX SCRIPT ── */}
      <Script type="module" src="https://donorbox.org/widgets.js" strategy="lazyOnload" />

      {/* ── LOGO ── */}
      <div className="font-display" style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
        The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
      </div>

      {/* ── MISSION / LOCATION ── */}
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto" }}>
        A 501(c)(3) nonprofit teaching students to invest and build wealth through
        experiential education. Roseville, California.
      </p>

      {/* ── NAV LINKS & DONATION BUTTON ── */}
      <div style={{ marginTop: 40, display: "flex", justifyContent: "center", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ 
              fontSize: 15, 
              fontWeight: 500, 
              letterSpacing: 0.5, 
              color: "rgba(255,255,255,0.6)", 
              textDecoration: "none", 
              transition: "color 0.2s ease" 
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.6)")}
          >
            {l.label}
          </a>
        ))}

        {/* ── DONORBOX POPUP WIDGET ── */}
        {/* Changed button-label and updated button-color to a Gold Hex (#D4AF37) */}
        <dbox-widget 
          campaign="the-finance-lab" 
          type="popup" 
          button-label="Make a Donation" 
          button-type="regular" 
          button-color="#D4AF37" 
          button-size="medium" 
          regular-position="left" 
          show-icon=""
        ></dbox-widget>
      </div>

      {/* ── COPYRIGHT ── */}
      <p style={{ marginTop: 56, fontSize: 14, color: "rgba(255,255,255,0.3)", letterSpacing: 0.5 }}>
        © {new Date().getFullYear()} The Finance Lab. All rights reserved.
      </p>
    </footer>
  );
}
