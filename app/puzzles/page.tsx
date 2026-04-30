"use client";
import { useLayoutEffect } from "react";
import Link from "next/link";
import { Nav } from "../components/Hero";
import { Puzzles } from "../components/Puzzles";
import { WordArt } from "../components/WordArt";
import { PUZZLES } from "../data/puzzles";

export default function PuzzlesPage() {
  useLayoutEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Nav />
      <Puzzles standalone />
      <main className="puzzles-page">
        <div className="container">
          <div className="puzzles-page-head">
            <h1 className="section-title">The full <em>archive</em>.</h1>
            <p className="puzzles-page-sub">
              Crosswords, minis, and word games — mostly themed around linguistics,
              energy, and the space between. More added as they&apos;re finished.
            </p>
          </div>
          <div className="puzzles-grid">
            {PUZZLES.map((p) => (
              <Link key={p.slug} href={`/puzzles/${p.slug}`} className="puzzle-card-link">
                <div className="puzzle-card">
                  <div className="puzzle-card-title">{p.title}</div>
                  <div className="puzzle-card-meta">{p.rows}×{p.cols} · {p.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <WordArt />
    </>
  );
}
