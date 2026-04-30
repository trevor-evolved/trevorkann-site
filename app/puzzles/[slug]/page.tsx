import { Nav } from "../../components/Hero";
import { CrosswordPlayer } from "../../components/Puzzles";
import { PUZZLES } from "../../data/puzzles";

export const dynamic = "force-static";

export function generateStaticParams() {
  return PUZZLES.map((p) => ({ slug: p.slug }));
}

export default async function PuzzlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const puzzle = PUZZLES.find((p) => p.slug === slug);

  if (!puzzle) {
    return (
      <>
        <Nav />
        <main className="puzzles-page">
          <div className="container">
            <p>Puzzle not found</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="puzzles-page">
        <div className="container">
          <CrosswordPlayer puzzle={puzzle} />
        </div>
      </main>
    </>
  );
}
