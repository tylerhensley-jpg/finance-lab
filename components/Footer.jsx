"use client";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/content";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const resolveHref = (href) => (href.startsWith("#") && !isHome ? `/${href}` : href);
  return (
    <footer style={{ 
      background: "var(--navy)", 
      padding: "100px clamp(20px,5vw,40px)", 
      textAlign: "center",
      position: "relative" 
    }}>
      
      {/* ── LOGO ── */}
      <img
        src="/images/cubes-white.png"
        alt=""
        style={{ height: 48, width: "auto", display: "block", margin: "0 auto 16px" }}
      />
      <div className="font-display" style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
        The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
      </div>

      {/* ── MISSION / LOCATION ── */}
      <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto" }}>
        A 501(c)(3) nonprofit teaching students to invest and build wealth through
        experiential education.
      </p>

      {/* ── NAV LINKS & DONATION BUTTON ── */}
      <div style={{ marginTop: 40, display: "flex", justifyContent: "center", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={resolveHref(l.href)}
            style={{ 
              fontSize: 17, 
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

        {/* Direct link keeps the Donorbox widget's PayPal/fingerprinting
            scripts off every page; donors give on donorbox.org instead. */}
        <a
          href="https://donorbox.org/the-finance-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          ♥ Make a Donation
        </a>
      </div>

      {/* ── COPYRIGHT ── */}
      <p style={{ marginTop: 56, fontSize: 13, color: "rgba(255,255,255,0.3)", letterSpacing: 0.5 }}>
        © {new Date().getFullYear()} The Finance Lab. All rights reserved.
      </p>
    </footer>
  );
}
