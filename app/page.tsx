export default function Home() {
  return (
    <div className="max-w-2xl">
      <div className="mb-10">
        <h1
          className="text-5xl font-semibold text-slate-900 mb-3 leading-tight"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          Trevor Kann
        </h1>
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>PhD, Applied Linguistics</span>
          <span className="text-slate-300">|</span>
          <span>Energy Researcher</span>
          <span className="text-slate-300">|</span>
          <span>UCLA</span>
        </div>
      </div>

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
      </div>

      <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-sm">
        {[
          { href: "/about", label: "About", sub: "Background & education" },
          { href: "/research", label: "Research", sub: "Papers & talks" },
          { href: "/work", label: "Energy Work", sub: "Evolved Energy Research" },
        ].map(({ href, label, sub }) => (
          <a
            key={href}
            href={href}
            className="group block p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-400 transition-colors"
          >
            <div className="font-medium text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
              {label}
            </div>
            <div className="text-slate-400 text-xs">{sub}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
