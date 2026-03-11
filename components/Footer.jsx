"use client";
import { useState } from "react";
import Script from "next/script"; // 👈 Required for the donorbox script
import { NAV_LINKS } from "@/data/content";

export default function Footer() {
  const [showDonation, setShowDonation] = useState(false);

  return (
    <footer style={{ 
      background: "var(--navy)", 
      padding: "100px clamp(20px,5vw,40px)", 
      textAlign: "center",
      position: "relative" 
    }}>
      
      {/* ── LOGO ── */}
      <div className="font-display" style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
        The Finance <span style={{ color: "var(--gold)" }}>Lab</span>
      </div>

      {/* ── MISSION / LOCATION ── */}
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto" }}>
        A 501(c)(3) nonprofit teaching students to invest and build wealth through
        experiential education. Roseville, California.
      </p>

      {/* ── NAV LINKS ── */}
      <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
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

        {/* ── MAKE A DONATION TRIGGER ── */}
        <button
          onClick={() => setShowDonation(true)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 15,
            fontWeight: 700, 
            letterSpacing: 0.5,
            color: "var(--gold)", 
            padding: 0,
            fontFamily: "inherit",
          }}
        >
          Make a Donation
        </button>
      </div>

      {/* ── DONATION MODAL OVERLAY ── */}
      {showDonation && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(10, 25, 47, 0.95)", // Dark overlay
          display: "flex", justifyContent: "center", alignItems: "center",
          zIndex: 9999,
          padding: 20
        }}>
          {/* Modal Container */}
          <div style={{ 
            background: "#fff", 
            borderRadius: 16, 
            position: "relative",
            width: "100%", 
            maxWidth: 500, 
            maxHeight: "90vh",
            overflowY: "auto",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            padding: "40px 10px 10px 10px" // Space for the close button
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setShowDonation(false)}
              style={{ 
                position: "absolute", top: 10, right: 15, 
                border: "none", background: "#f3f4f6", 
                borderRadius: "50%", width: 30, height: 30, 
                cursor: "pointer", zIndex: 10,
                fontSize: "14px", fontWeight: "bold"
              }}
            >✕</button>
            
            {/* ── DONORBOX CLASSIC EMBED ── */}
            <Script src="https://donorbox.org/widget.js" strategy="lazyOnload" />
            
            <iframe 
              src="https://donorbox.org/embed/2026-fellows-and-program-expansion?default_interval=o" 
              name="donorbox" 
              allowpaymentrequest="allowpaymentrequest" 
              seamless="seamless" 
              frameBorder="0" 
              scrolling="no" 
              height="900px" 
              width="100%" 
              style={{
                maxWidth: "500px", 
                minWidth: "250px", 
                maxHeight: "none!important",
                display: "block",
                margin: "0 auto"
              }} 
              allow="payment"
            ></iframe>
          </div>
        </div>
      )}

      {/* ── COPYRIGHT ── */}
      <p style={{ marginTop: 56, fontSize: 14, color: "rgba(255,255,255,0.3)", letterSpacing: 0.5 }}>
        © {new Date().getFullYear()} The Finance Lab. All rights reserved.
      </p>
    </footer>
  );
}
