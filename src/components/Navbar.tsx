"use client";
import { useState, useEffect } from "react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      transition:"all 0.35s cubic-bezier(0.22,1,0.36,1)",
      background: scrolled ? "rgba(244,237,224,0.82)" : "transparent",
      backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
      borderBottom: scrolled ? "1px solid rgba(91,63,212,0.1)" : "1px solid transparent",
      boxShadow: scrolled ? "0 4px 24px rgba(24,20,15,0.06)" : "none",
    }}>
      <nav style={{
        maxWidth:"1120px", margin:"0 auto", padding:"0 24px",
        height:"62px", display:"flex", alignItems:"center", justifyContent:"space-between",
      }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"2px" }}>
          <span style={{ fontFamily:"var(--font-serif)", fontSize:"1.2rem", color:"var(--fg)", letterSpacing:"-0.02em" }}>
            Anuj
          </span>
          <span style={{ fontFamily:"var(--font-serif)", fontSize:"1.2rem", background:"linear-gradient(135deg,var(--violet),var(--rose))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
            .
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display:"flex", gap:"2px", listStyle:"none", margin:0, padding:0 }} className="hide-mobile">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily:"var(--font-sans)", fontSize:"0.82rem", fontWeight:500,
                  color:"var(--fg-muted)", textDecoration:"none",
                  padding:"6px 13px", borderRadius:"99px",
                  display:"block", transition:"all 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.color = "var(--fg)";
                  el.style.background = "rgba(91,63,212,0.07)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.color = "var(--fg-muted)";
                  el.style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${personal.email}`}
          className="hide-mobile"
          style={{
            fontFamily:"var(--font-sans)", fontSize:"0.8rem", fontWeight:600,
            color:"#fff",
            background:"linear-gradient(135deg, var(--violet), var(--indigo))",
            padding:"9px 20px", borderRadius:"99px", textDecoration:"none",
            transition:"all 0.25s ease",
            boxShadow:"0 2px 12px rgba(91,63,212,0.25)",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = "0 6px 20px rgba(91,63,212,0.38)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 2px 12px rgba(91,63,212,0.25)";
          }}
        >
          Let's talk
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ display:"none", background:"none", border:"none", cursor:"pointer", padding:"8px", color:"var(--fg)" }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M3 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background:"rgba(244,237,224,0.97)", backdropFilter:"blur(20px)", borderTop:"1px solid rgba(91,63,212,0.1)", padding:"16px 24px 28px" }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ display:"block", fontFamily:"var(--font-sans)", fontSize:"1rem", fontWeight:500, color:"var(--fg-muted)", textDecoration:"none", padding:"11px 0", borderBottom:"1px solid var(--border)" }}>
              {link.label}
            </a>
          ))}
          <a href={`mailto:${personal.email}`} style={{ display:"inline-block", marginTop:"18px", fontFamily:"var(--font-sans)", fontSize:"0.88rem", fontWeight:600, color:"#fff", background:"var(--violet)", padding:"11px 22px", borderRadius:"99px", textDecoration:"none" }}>
            Let's talk
          </a>
        </div>
      )}
    </header>
  );
}