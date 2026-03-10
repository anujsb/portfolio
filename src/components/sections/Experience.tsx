"use client";

import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "80px" }} />

      <div style={{ marginBottom: "56px" }}>
        <span className="accent-pill">Experience</span>
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "var(--fg)",
            margin: "16px 0 0",
          }}
        >
          Where I've worked
        </h2>
      </div>

      {experience.map((job) => (
        <div key={job.company} style={{ marginBottom: "40px" }}>
          {/* Company header */}
          <div
            className="card card-texture"
            style={{
              padding: "32px",
              marginBottom: "2px",
              borderRadius: "var(--radius) var(--radius) 0 0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    color: "var(--fg)",
                    margin: "0 0 6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {job.company}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-instrument-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--accent)",
                    margin: 0,
                  }}
                >
                  {job.role}
                </p>
              </div>
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.8rem",
                    color: "var(--fg-subtle)",
                    background: "var(--bg-muted)",
                    border: "1px solid var(--border)",
                    padding: "4px 12px",
                    borderRadius: "99px",
                  }}
                >
                  {job.period}
                </span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {job.projects.map((project, i) => (
              <div
                key={project.name}
                className="card"
                style={{
                  padding: "28px 32px",
                  borderRadius:
                    i === job.projects.length - 1
                      ? "0 0 var(--radius) var(--radius)"
                      : "0",
                  borderTop: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        opacity: 0.6,
                        flexShrink: 0,
                      }}
                    />
                    <h4
                      style={{
                        fontFamily: "var(--font-instrument-sans)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--fg)",
                        margin: 0,
                      }}
                    >
                      {project.name}
                    </h4>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-instrument-sans)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "var(--fg-subtle)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--fg-subtle)";
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    View code
                  </a>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.88rem",
                    color: "var(--fg-muted)",
                    lineHeight: 1.7,
                    margin: "0 0 16px",
                    paddingLeft: "16px",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    paddingLeft: "16px",
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.72rem",
                        color: "var(--fg-subtle)",
                        background: "var(--bg-muted)",
                        border: "1px solid var(--border)",
                        padding: "3px 9px",
                        borderRadius: "4px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}