"use client";
import { useState } from "react";
import Script from "next/script"; // 👈 Required for Next.js to load external scripts safely
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

        {/* ── DONATION TRIGGER BUTTON ── */}
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
            transition: "opacity 0.2s ease"
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Make a Donation
        </button>
      </div>

      {/* ── DONATION MODAL OVERLAY ── */}
      {showDonation && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(10, 25, 47, 0.9)", // Dark navy overlay
          display: "flex", justifyContent: "center", alignItems: "center",
          zIndex: 9999, // Ensure it sits on top of everything
          padding: 20
        }}>
          <div style={{ 
            background: "#fff", 
            padding: "50px 20px 20px", // Extra padding on top for the close button
            borderRadius: 16, 
            position: "relative",
            width: "100%", 
            maxWidth: 500, // Kept slightly narrow to match standard donation forms
            maxHeight: "90vh",
            overflowY: "auto",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setShowDonation(false)}
              style={{ 
                position: "absolute", 
                top: 15, 
                right: 20, 
                border: "none", 
                background: "var(--soft-gray, #f3f4f6)", 
                borderRadius: "50%",
                width: 32,
                height: 32,
                fontSize: 16, 
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "var(--navy, #0a192f)"
              }}
            >
              ✕
            </button>
            
            {/* ── DONORBOX EMBED ── */}
            {/* The Next.js Script component handles the JS safely */}
            <Script 
              type="module" 
              src="https://donorbox.org/widgets.js" 
              strategy="lazyOnload" 
            />
            
            {/* The actual custom widget element */}
            <dbox-widget 
              campaign="2026-fellows-and-program-expansion" 
              type="donation_form" 
              interval="1 T" 
              enable-auto-scroll="true"
            ></dbox-widget>

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
