"use client";

import { personal, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "80px" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left — Label + heading */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <span className="accent-pill">About me</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--fg)",
              margin: "0 0 32px",
            }}
          >
            Crafting digital
            <br />
            <em>experiences</em> that
            <br />
            matter.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--fg-muted)",
              margin: "0 0 24px",
            }}
          >
            {personal.about}
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "var(--border)",
              borderRadius: "var(--radius-sm)",
              overflow: "hidden",
              marginTop: "40px",
              border: "1px solid var(--border)",
            }}
          >
            {[
              { num: "4+", label: "Projects shipped" },
              { num: "1+", label: "Year experience" },
              { num: "10+", label: "Tech stack" },
              { num: "∞", label: "Coffee consumed" },
            ].map(({ num, label }) => (
              <div
                key={label}
                style={{
                  background: "var(--bg-card)",
                  padding: "20px 24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: "2rem",
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.78rem",
                    color: "var(--fg-subtle)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Skills by category */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--fg-subtle)",
              marginBottom: "28px",
            }}
          >
            Tech I work with
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {skills.map((group) => (
              <div key={group.category}>
                <div
                  style={{
                    fontFamily: "var(--font-instrument-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "10px",
                    opacity: 0.8,
                  }}
                >
                  {group.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.82rem",
                        color: "var(--fg-muted)",
                        background: "var(--bg-muted)",
                        border: "1px solid var(--border)",
                        padding: "5px 12px",
                        borderRadius: "6px",
                        transition: "border-color 0.2s, color 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--accent)";
                        el.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--border)";
                        el.style.color = "var(--fg-muted)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}