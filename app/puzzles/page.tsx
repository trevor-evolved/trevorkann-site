"use client";
import Link from "next/link";

const PUZZLES = [
  {
    id: "afbf29f3",
    set: "31d0fd2be0db3d851731edef76b1f922b933b576f866ec93406fe4717c0f0778",
    title: "Puzzle 1",
    description: "",
  },
  // Add more puzzles here as: { id, set, title, description }
];

function puzzleUrl(id: string, set: string) {
  return `https://puzzleme.amuselabs.com/pmm/crossword?id=${id}&set=${set}`;
}

export default function PuzzlesPage() {
  return (
    <>
      <div className="puzzles-page-nav">
        <Link href="/" className="puzzles-back">← Trevor Kann</Link>
      </div>
      <main className="puzzles-page">
        <div className="container">
          <div className="puzzles-page-head">
            <div className="section-num">Puzzles</div>
            <h1 className="section-title">The full <em>archive</em>.</h1>
            <p className="puzzles-page-sub">
              Crosswords, minis, and word games — mostly themed around linguistics,
              energy, and the space between. More added as they're finished.
            </p>
          </div>

          <div className="puzzles-grid">
            {PUZZLES.map((p) => (
              <div key={p.id} className="puzzle-card">
                {p.title && <div className="puzzle-card-title">{p.title}</div>}
                {p.description && <div className="puzzle-card-desc">{p.description}</div>}
                <div className="puzzle-frame-wrap">
                  <iframe
                    src={puzzleUrl(p.id, p.set)}
                    width="100%"
                    height="700px"
                    style={{ border: "none", borderRadius: 8, display: "block" }}
                    allowFullScreen
                    title={p.title || "Crossword puzzle"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
