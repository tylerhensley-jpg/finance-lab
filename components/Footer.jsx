"use client";

import { NAV_LINKS } from "@/data/content";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", padding: "56px clamp(20px,5vw,40px)", textAlign: "center" }}>
      <div className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
        The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
      </div>

      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: 400, margin: "0 auto" }}>
        A 501(c)(3) nonprofit teaching students to invest and build wealth through
        experiential education. Roseville, California.
      </p>

      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              fontSize: 12, color: "rgba(255,255,255,0.4)",
              textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
          >
            {l.label}
          </a>
        ))}
      </div>

      <p style={{ marginTop: 24, fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
        © {new Date().getFullYear()} The Finance Lab. All rights reserved.
      </p>
    </footer>
  );
}
