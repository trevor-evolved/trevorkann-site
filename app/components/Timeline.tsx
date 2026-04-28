"use client";
import { useState } from "react";
import { TIMELINE } from "../data";

export function Timeline() {
  const [active, setActive] = useState("eer");
  const era = TIMELINE.find((e) => e.id === active) || TIMELINE[0];

  const descriptions: Record<string, string> = {
    eer: "The current post. Internal + external education for a fast-growing consultancy at the center of U.S. energy planning.",
    dos: "A year as a U.S. diplomatic scholar in São Paulo — teaching, training teachers, and representing American English in Latin America.",
    usp: "Visiting Professor at the top university in Latin America, with EMI work that reshaped several departments.",
    ucla: "The lectureship years — large enrollment, small office hours, 500+ undergraduates who taught me as much as I taught them.",
    phd: "A doctorate, a dissertation on linguistic empathy, and the research that still informs how I think about framing.",
    korea: "The first teaching post abroad — tutoring and freelancing before leaving for graduate school at UCLA.",
    smc: "Adjunct teaching while in graduate school — my first full professorial line.",
  };

  return (
    <section className="section section-dark" id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-num">02 / Work</div>
            <h2 className="section-title">Twenty years. Four <em>continents</em>.</h2>
          </div>
          <div className="section-kicker">
            Seoul · Los Angeles · San Diego · São Paulo · Madrid. Click any era
            to expand. The through-line, if I&apos;m honest, is always the same:
            understanding communication and the seamless sharing of ideas.
          </div>
        </div>

        <div className="timeline-wrap">
          <div className="timeline">
            {TIMELINE.map((e) => (
              <div
                key={e.id}
                className={`tl-era ${e.current ? "current" : ""} ${e.id === active ? "active" : ""}`}
                onClick={() => setActive(e.id)}
                style={{ borderBottom: e.id === active ? "3px solid var(--teal-light)" : "" }}
              >
                <div className="tl-year">{e.year}</div>
                <div className="tl-role">{e.role}</div>
                <div className="tl-place">{e.place}</div>
                <span className="tl-badge">{e.badge}</span>
              </div>
            ))}
          </div>

          <div className="tl-detail">
            <div>
              <h4>{era.role}</h4>
              <div className="sub">{era.place} · {era.year}</div>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: 15 }}>
                {descriptions[era.id]}
              </p>
            </div>
            <div>
              <ul>
                {era.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
