"use client";

import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "80px" }} />

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "56px",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <span className="accent-pill" style={{ marginBottom: "16px" }}>
            Selected work
          </span>
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
            Things I've built
          </h2>
        </div>
        <a
          href="https://github.com/anujsb"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-instrument-sans)",
            fontSize: "0.82rem",
            fontWeight: 500,
            color: "var(--fg-muted)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            border: "1px solid var(--border)",
            padding: "8px 16px",
            borderRadius: "99px",
            transition: "border-color 0.2s, color 0.2s",
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
          All projects
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Featured large cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
        className="projects-featured-grid"
      >
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <article
              key={project.id}
              className="card card-texture"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: "220px",
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--bg-muted)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 50%, rgba(26,23,20,0.15))",
                  }}
                />
                {/* Year badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    fontFamily: "var(--font-instrument-sans)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "rgba(26,23,20,0.5)",
                    background: "rgba(245,240,232,0.85)",
                    backdropFilter: "blur(8px)",
                    padding: "4px 10px",
                    borderRadius: "99px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-instrument-sans)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "8px",
                      opacity: 0.8,
                    }}
                  >
                    {project.subtitle}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "1.55rem",
                      fontWeight: 400,
                      color: "var(--fg)",
                      margin: "0 0 12px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.87rem",
                      color: "var(--fg-muted)",
                      lineHeight: 1.7,
                      margin: "0 0 20px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
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

                {/* Links */}
                <div style={{ display: "flex", gap: "12px" }}>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-instrument-sans)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--bg)",
                        background: "var(--fg)",
                        padding: "9px 18px",
                        borderRadius: "99px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--fg)";
                      }}
                    >
                      Live site
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-instrument-sans)",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        color: "var(--fg-muted)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        border: "1px solid var(--border)",
                        padding: "8px 18px",
                        borderRadius: "99px",
                        transition: "border-color 0.2s, color 0.2s",
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
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
      </div>

      {/* Secondary cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
        className="projects-secondary-grid"
      >
        {projects
          .filter((p) => !p.featured)
          .map((project) => (
            <article
              key={project.id}
              className="card card-texture"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "160px",
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--bg-muted)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
              </div>

              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-instrument-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "6px",
                      opacity: 0.75,
                    }}
                  >
                    {project.subtitle}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "1.3rem",
                      fontWeight: 400,
                      color: "var(--fg)",
                      margin: "0 0 10px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.83rem",
                      color: "var(--fg-muted)",
                      lineHeight: 1.65,
                      margin: "0 0 16px",
                    }}
                  >
                    {project.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "20px" }}>
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "0.7rem",
                          color: "var(--fg-subtle)",
                          background: "var(--bg-muted)",
                          border: "1px solid var(--border)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-instrument-sans)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--bg)",
                        background: "var(--fg)",
                        padding: "7px 15px",
                        borderRadius: "99px",
                        textDecoration: "none",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--fg)";
                      }}
                    >
                      Live ↗
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-instrument-sans)",
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        color: "var(--fg-muted)",
                        textDecoration: "none",
                        border: "1px solid var(--border)",
                        padding: "6px 15px",
                        borderRadius: "99px",
                        transition: "border-color 0.2s, color 0.2s",
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
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-featured-grid,
          .projects-secondary-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}