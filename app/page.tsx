import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl">
      <div className="mb-10 flex items-start gap-8">
        <div className="flex-1">
          <h1
            className="text-5xl font-semibold text-slate-900 mb-3 leading-tight"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Trevor Kann
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500 flex-wrap">
            <span>PhD, Applied Linguistics</span>
            <span className="text-slate-300">|</span>
            <span>Director of Education, Evolved Energy Research</span>
            <span className="text-slate-300">|</span>
            <span>UCLA</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/photo-punt.jpg"
            alt="Trevor Kann"
            width={140}
            height={160}
            className="rounded-lg object-cover shadow-sm"
            style={{ objectPosition: "center top" }}
          />
        </div>
      </div>

      <div className="prose">
        <p>
          I&apos;m an applied linguist with over 20 years of experience teaching and researching
          language and social science. My academic work centers on linguistic empathy — the
          intersection of language, social psychology, and neuroscience — with broader interests
          in prosody, language evolution, humor, and pragmatics.
        </p>
        <p>
          I currently serve as Director of Education at{" "}
          <a href="https://www.evolved.energy" target="_blank" rel="noopener noreferrer">
            Evolved Energy Research
          </a>
          , leading internal training, curriculum development, and external communications
          including newsletters, technical reports, and press coverage.
        </p>
        <p>
          Before joining EER, I was a US Department of State English Language Fellow and Visiting
          Professor at the University of São Paulo, and a full-time Lecturer at UCLA. Language —
          how it works, how it fails, and what it reveals about the humans using it — remains a
          central preoccupation.
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
