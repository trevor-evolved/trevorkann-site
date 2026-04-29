"use client";
import { useLayoutEffect } from "react";
import { Nav } from "../components/Hero";
import { Puzzles, CrosswordPlayer, PuzzleData } from "../components/Puzzles";
import { WordArt } from "../components/WordArt";

const PUZZLE_9: PuzzleData = {
  title: "Staying Current",
  rows: 6,
  cols: 5,
  solution: [
    ["C", "L", "E", "A", "N"],
    ["R", "I", "N", "S", "E"],
    ["U", "S", "E", "R", "S"],
    ["S", "T", "R", "U", "T"],
    ["E", "A", "G", "L", "E"],
    ["S", "T", "Y", "E", "D"],
  ],
  nums: [
    [1,  2, 3, 4, 5],
    [6,  0, 0, 0, 0],
    [7,  0, 0, 0, 0],
    [8,  0, 0, 0, 0],
    [9,  0, 0, 0, 0],
    [10, 0, 0, 0, 0],
  ],
  across: [
    { n: 1,  row: 0, clue: "Spotless, or with 3-down, the source of little or no emissions." },
    { n: 6,  row: 1, clue: "Lather, _____, repeat." },
    { n: 7,  row: 2, clue: "Exploiters" },
    { n: 8,  row: 3, clue: "Walk with a swagger" },
    { n: 9,  row: 4, clue: "Bald bird" },
    { n: 10, row: 5, clue: "Penned up, like pigs" },
  ],
  down: [
    { n: 1, col: 0, clue: "Old, earthen pots for liquids, or a misspelling of a sea voyage." },
    { n: 2, col: 1, clue: "Have a suggested price of" },
    { n: 3, col: 2, clue: "Vigor" },
    { n: 4, col: 3, clue: '"__ a ____..." (ordinarily, generally)' },
    { n: 5, col: 4, clue: "Like Russian dolls" },
  ],
};

const ARCHIVE: PuzzleData[] = [PUZZLE_9];

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
            {ARCHIVE.map((puzzle, i) => (
              <div key={i} className="puzzle-card">
                <div className="puzzle-card-title">{puzzle.title}</div>
                <CrosswordPlayer puzzle={puzzle} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <WordArt />
    </>
  );
}
