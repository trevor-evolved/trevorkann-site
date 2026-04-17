export default function Work() {
  return (
    <div className="max-w-2xl">
      <h1
        className="text-2xl font-semibold text-slate-900 mb-8"
        style={{ fontFamily: "var(--font-lora)" }}
      >
        Energy Work
      </h1>

      <div className="prose">
        <h2>Evolved Energy Research</h2>
        <p>
          I joined{" "}
          <a href="https://www.evolved.energy" target="_blank" rel="noopener noreferrer">
            Evolved Energy Research
          </a>{" "}
          as Director of Education in 2024. EER is a clean energy consulting and research firm
          specializing in data-driven modeling of energy systems for utilities, regulators, and
          policymakers across the US and internationally.
        </p>
        <p>
          My role spans two directions: internally, I lead training and curriculum development
          for the team; externally, I oversee EER&apos;s communications — newsletters, blog posts,
          press releases, and technical reports. Recent work includes co-authoring EER&apos;s 2024
          Annual Decarbonization Perspective in Europe and dozens of client deliverables.
        </p>
        <p>
          The thread connecting linguistics to energy work is communication: energy systems
          analysis produces findings that are consequential but often opaque to non-specialist
          audiences. Making that work legible — to policymakers, journalists, and the public —
          draws directly on a background in language and meaning-making.
        </p>

        <div className="mt-8 p-4 bg-slate-50 rounded-md text-sm text-slate-500 italic">
          More detail on specific projects and publications coming soon.
        </div>
      </div>
    </div>
  );
}
