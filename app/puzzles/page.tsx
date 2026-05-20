"use client";
import { useLayoutEffect } from "react";
import Link from "next/link";
import { Nav } from "../components/Hero";
import { Puzzles } from "../components/Puzzles";
import { WordArt } from "../components/WordArt";
import { WordFlower } from "../components/WordFlower";
import { Contact } from "../components/Contact";
import { PUZZLES } from "../data/puzzles";
import { FLOWER_PUZZLES } from "../data/wordflower";

export default function PuzzlesPage() {
  useLayoutEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Nav />
      <Puzzles standalone />
      <main className="puzzles-page">
        <div className="container">
          <div className="crossword-archive">
            <div className="archive-section-label">Crossword Archive</div>
            <div className="puzzles-grid">
              {[...PUZZLES].reverse().map((p) => (
                <Link key={p.slug} href={`/puzzles/${p.slug}`} className="puzzle-card-link">
                  <div className="puzzle-card">
                    <div className="puzzle-card-icon">
                      <svg width="28" height="28" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {[0,1,2,3].map(row => [0,1,2,3].map(col => {
                          const black = (row===0&&col===0)||(row===0&&col===3)||(row===1&&col===2)||(row===2&&col===1)||(row===3&&col===0)||(row===3&&col===3);
                          return <rect key={`${row}-${col}`} x={col*11} y={row*11} width={10} height={10} rx={1} fill={black ? "rgba(255,255,255,0.7)" : "none"} stroke="rgba(255,255,255,0.35)" strokeWidth="1" />;
                        }))}
                      </svg>
                    </div>
                    <div className="puzzle-card-title">{p.title}</div>
                    <div className="puzzle-card-meta">{p.rows}×{p.cols}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <WordFlower archive={FLOWER_PUZZLES} />
      <WordArt />
      <Contact />
    </>
  );
}
