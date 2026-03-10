"use client";

import { personal } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px 120px",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "80px" }} />

      {/* Big CTA block */}
      <div
        className="card card-texture"
        style={{
          padding: "clamp(48px, 8vw, 80px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative accent blob */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(61,47,160,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "240px",
            height: "240px",
            background: "radial-gradient(circle, rgba(61,47,160,0.04) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <span className="accent-pill" style={{ marginBottom: "24px" }}>
          Get in touch
        </span>

        <h2
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            margin: "20px auto 20px",
            maxWidth: "700px",
          }}
        >
          Let's build something{" "}
          <em style={{ color: "var(--accent)" }}>great</em>{" "}
          together.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "1rem",
            color: "var(--fg-muted)",
            lineHeight: 1.7,
            maxWidth: "460px",
            margin: "0 auto 40px",
          }}
        >
          Have a project in mind, or just want to say hi? My inbox is always open.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <a
            href={`mailto:${personal.email}`}
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "var(--bg)",
              background: "var(--fg)",
              padding: "15px 32px",
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
            Say hello
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href={personal.resume}
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "var(--fg)",
              background: "transparent",
              padding: "14px 32px",
              borderRadius: "99px",
              textDecoration: "none",
              border: "1px solid var(--border-strong)",
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
            Download résumé
          </a>
        </div>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            borderTop: "1px solid var(--border)",
            paddingTop: "32px",
          }}
        >
          {[
            { label: "GitHub", href: personal.github },
            { label: "LinkedIn", href: personal.linkedin },
            { label: "Twitter / X", href: personal.twitter },
            { label: personal.email, href: `mailto:${personal.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-instrument-sans)",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--fg-subtle)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: "99px",
                border: "1px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--accent)";
                el.style.borderColor = "rgba(61,47,160,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--fg-subtle)";
                el.style.borderColor = "transparent";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--font-dm-sans)",
          fontSize: "0.75rem",
          color: "var(--fg-subtle)",
          marginTop: "32px",
          letterSpacing: "0.02em",
        }}
      >
        Designed & built by Anuj S. Bhuyar · {new Date().getFullYear()}
      </p>
    </section>
  );
}