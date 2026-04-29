"use client";
import Link from "next/link";
import { Viz } from "../components/Viz";
import { WordArt } from "../components/WordArt";

export default function VizPage() {
  return (
    <>
      <div className="puzzles-page-nav">
        <Link href="/" className="puzzles-back">← Trevor Kann</Link>
      </div>
      <Viz />
      <WordArt />
    </>
  );
}
