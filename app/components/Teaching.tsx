"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { COURSES, TESTIMONIALS } from "../data";

const PREVIEW_COURSE_CODES = ["LING 9W", "APPLING 40W", "ESL 33C"];

// One EN, one ZH, one PT — picked by index for stability
const PREVIEW_TESTIMONIALS = [TESTIMONIALS[2], TESTIMONIALS[3], TESTIMONIALS[1]];

export function Teaching({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("all");

  const shown = useMemo(() => {
    if (preview) return COURSES.filter((c) => PREVIEW_COURSE_CODES.includes(c.code));
    return filter === "all" ? COURSES : COURSES.filter((c) => c.cat === filter);
  }, [filter, preview]);

  const testimonials = preview ? PREVIEW_TESTIMONIALS : TESTIMONIALS;

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

        {!preview && (
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
        )}

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

        {preview && (
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/teaching" className="btn btn-outline">See all courses →</Link>
          </div>
        )}

        <div className="testimonials">
          {testimonials.map((t, i) => (
            <div key={i} className="testi" style={t.span ? { gridColumn: "1 / -1" } : undefined}>
              <span className="lang">{t.lang}</span>
              {t.quote}
              <div className="author">{t.author}</div>
            </div>
          ))}
        </div>

        {preview && (
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/teaching" className="btn btn-outline">See more reviews →</Link>
          </div>
        )}
      </div>
    </section>
  );
}
