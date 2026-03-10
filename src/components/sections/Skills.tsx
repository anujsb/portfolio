"use client";

import { skills } from "@/data/portfolio";

const allSkills = skills.flatMap((g) => g.items);

export default function Skills() {
  return (
    <section
      id="skills"
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
          gridTemplateColumns: "340px 1fr",
          gap: "80px",
          alignItems: "start",
        }}
        className="skills-grid"
      >
        {/* Left sticky label */}
        <div style={{ position: "sticky", top: "80px" }}>
          <span className="accent-pill" style={{ marginBottom: "20px" }}>
            Skills
          </span>
          <h2
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--fg)",
              margin: "16px 0 20px",
            }}
          >
            Tools of
            <br />
            my <em>trade.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.9rem",
              color: "var(--fg-subtle)",
              lineHeight: 1.7,
              maxWidth: "280px",
            }}
          >
            From idea to deployment — the full spectrum of modern web development and AI integrations.
          </p>
        </div>

        {/* Right — skill categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              style={{
                padding: "32px 0",
                borderBottom: i < skills.length - 1 ? "1px solid var(--border)" : "none",
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "32px",
                alignItems: "start",
              }}
              className="skill-row"
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-instrument-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--fg-subtle)",
                  }}
                >
                  {group.category}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.87rem",
                      fontWeight: 400,
                      color: "var(--fg-muted)",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      cursor: "default",
                      transition: "all 0.2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "var(--accent-muted)";
                      el.style.borderColor = "rgba(61,47,160,0.25)";
                      el.style.color = "var(--accent)";
                      el.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "var(--bg-card)";
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--fg-muted)";
                      el.style.transform = "translateY(0)";
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

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .skill-row {
            grid-template-columns: 120px 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 560px) {
          .skill-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}