"use client";
import Link from "next/link";
import { Teaching } from "../components/Teaching";

export default function TeachingPage() {
  return (
    <>
      <div className="puzzles-page-nav">
        <Link href="/" className="puzzles-back">← Trevor Kann</Link>
      </div>
      <Teaching />
    </>
  );
}
