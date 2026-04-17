export default function Home() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold text-slate-900 mb-2">Trevor Kann</h1>
      <p className="text-slate-500 mb-8 text-sm uppercase tracking-wide">
        PhD, Applied Linguistics &nbsp;&middot;&nbsp; Energy Researcher
      </p>

      <div className="prose">
        <p>
          I&apos;m a linguist and researcher based in the US. My academic work centers on linguistic
          empathy — the intersection of language, social psychology, and neuroscience — with
          broader interests in prosody, language evolution, humor, and pragmatics.
        </p>
        <p>
          In recent years I&apos;ve shifted into energy policy and planning research at{" "}
          <a
            href="https://www.evolved.energy"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Evolved Energy Research
          </a>
          , where I work on data-driven analysis of energy systems and the communication of
          complex technical findings to broad audiences.
        </p>
        <p>
          I taught for many years at UCLA and Santa Monica College, and spent time living and
          working in Brazil, Mexico, Central America, and Korea. Language — how it works, how it
          fails, and what it reveals about the humans using it — remains a central preoccupation.
        </p>

        <div className="mt-8 flex gap-6 text-sm flex-wrap">
          <a href="/about" className="text-blue-600 hover:text-blue-800 underline">
            Background →
          </a>
          <a href="/research" className="text-blue-600 hover:text-blue-800 underline">
            Research →
          </a>
          <a href="/work" className="text-blue-600 hover:text-blue-800 underline">
            Energy Work →
          </a>
        </div>
      </div>
    </div>
  );
}
