"use client";

import { personal } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 24px 80px",
        maxWidth: "1120px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Decorative top-right element */}
      <div
        style={{
          position: "absolute",
          top: "120px",
          right: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "8px",
          opacity: 0.5,
        }}
        className="animate-fade-in delay-600"
      >
        <div
          style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, transparent, var(--border-strong))",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-instrument-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "var(--fg-subtle)",
            writingMode: "vertical-rl",
            textTransform: "uppercase",
          }}
        >
          Full Stack Developer
        </span>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "860px" }}>
        {/* Available badge */}
        <div
          className="animate-fade-up"
          style={{ marginBottom: "32px" }}
        >
          <span className="accent-pill">
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
                boxShadow: "0 0 6px rgba(34, 197, 94, 0.6)",
              }}
            />
            Available for new projects
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            margin: "0 0 24px",
          }}
        >
          Anuj
          <br />
          <span style={{ color: "var(--fg-muted)" }}>S. Bhuyar</span>
        </h1>

        {/* Divider line */}
        <div
          className="animate-fade-up delay-200"
          style={{
            width: "80px",
            height: "1px",
            background: "var(--accent)",
            marginBottom: "28px",
            opacity: 0.6,
          }}
        />

        {/* Tagline */}
        <p
          className="animate-fade-up delay-300"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--fg-muted)",
            lineHeight: 1.65,
            maxWidth: "520px",
            margin: "0 0 48px",
            fontWeight: 400,
          }}
        >
          {personal.about}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-400"
          style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--bg)",
              background: "var(--fg)",
              padding: "14px 28px",
              borderRadius: "99px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--accent)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--fg)";
              el.style.transform = "translateY(0)";
            }}
          >
            View my work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href={personal.resume}
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "var(--fg)",
              background: "transparent",
              padding: "13px 28px",
              borderRadius: "99px",
              textDecoration: "none",
              border: "1px solid var(--border-strong)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--accent)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border-strong)";
              el.style.transform = "translateY(0)";
            }}
          >
            Resume
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1.5V9.5M6.5 9.5L3.5 6.5M6.5 9.5L9.5 6.5M1.5 11.5H11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Socials */}
          <div style={{ display: "flex", gap: "12px", marginLeft: "8px" }}>
            {[
              { href: personal.github, icon: "github" },
              { href: personal.linkedin, icon: "linkedin" },
              { href: personal.twitter, icon: "twitter" },
            ].map(({ href, icon }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fg-muted)",
                  transition: "border-color 0.2s, color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--accent)";
                  el.style.color = "var(--accent)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--fg-muted)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {icon === "github" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                )}
                {icon === "linkedin" && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                )}
                {icon === "twitter" && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in delay-600"
        style={{
          position: "absolute",
          bottom: "32px",
          right: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-instrument-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: "var(--fg-subtle)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
          <path d="M6 1V15M6 15L1 10M6 15L11 10" stroke="var(--fg-subtle)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}