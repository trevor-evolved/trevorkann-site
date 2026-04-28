"use client";
import { useState, useMemo } from "react";
import { COURSES, TESTIMONIALS } from "../data";

export function Teaching() {
  const [filter, setFilter] = useState("all");
  const shown = useMemo(
    () => (filter === "all" ? COURSES : COURSES.filter((c) => c.cat === filter)),
    [filter]
  );

  return (
    <section className="section section-cream" id="teaching">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-num">03 / Teaching</div>
            <h2 className="section-title">Courses I&apos;ve <em>run</em>.</h2>
          </div>
          <div className="section-kicker">
            Across UCLA, USP, Santa Monica College, and the U.S. Department of
            State. About 1000 students across the world, tens of thousands of
            papers graded, and a linguistic humor seminar I would teach forever
            if they&apos;d let me.
          </div>
        </div>

        <div className="teaching-filter">
          {[
            { k: "all", l: "All courses" },
            { k: "ling", l: "Linguistics" },
            { k: "appling", l: "Applied Linguistics" },
            { k: "esl", l: "ESL / EMI" },
          ].map((b) => (
            <button
              key={b.k}
              className={`tf-btn ${filter === b.k ? "active" : ""}`}
              onClick={() => setFilter(b.k)}
            >
              {b.l}
            </button>
          ))}
        </div>

        <div className="courses">
          {shown.map((c, i) => (
            <div key={i} className="course">
              <span className={`tag ${c.cat}`}>
                {c.cat === "ling" ? "Ling" : c.cat === "appling" ? "App-Ling" : "ESL"}
              </span>
              <div className="code">{c.code}</div>
              <div className="title">{c.title}</div>
              <div className="where">{c.where}</div>
            </div>
          ))}
        </div>

        <div className="testimonials">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi" style={t.span ? { gridColumn: "1 / -1" } : undefined}>
              <span className="lang">{t.lang}</span>
              {t.quote}
              <div className="author">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
