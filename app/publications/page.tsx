"use client";
import Link from "next/link";
import { Publications } from "../components/Publications";

export default function PublicationsPage() {
  return (
    <>
      <div className="puzzles-page-nav">
        <Link href="/" className="puzzles-back">← Trevor Kann</Link>
      </div>
      <Publications />
    </>
  );
}
