import Link from "next/link";
import { Nav } from "../../components/Hero";
import { WordFlower } from "../../components/WordFlower";
import { FLOWER_PUZZLES } from "../../data/wordflower";

export function generateStaticParams() {
  return FLOWER_PUZZLES.map((p) => ({ slug: p.slug }));
}

export default async function FlowerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const puzzle = FLOWER_PUZZLES.find((p) => p.slug === slug);
  if (!puzzle) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center", fontFamily: "sans-serif" }}>
        Puzzle not found. <Link href="/puzzles">Back to archive</Link>
      </div>
    );
  }
  return (
    <>
      <Nav />
      <div className="flower-page-back">
        <Link href="/puzzles" className="puzzles-back">← Back to archive</Link>
      </div>
      <WordFlower puzzle={puzzle} />
    </>
  );
}
