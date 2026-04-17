export default function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-8">About</h1>

      <div className="prose">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>PhD, Applied Linguistics</strong> — UCLA, 2017
            <br />
            Dissertation: <em>Measuring Linguistic Empathy: An Experimental Approach to
            Connecting Linguistic and Social Psychological Notions of Empathy</em>
            <br />
            Advisor: Distinguished Professor Olga T. Yokoyama
          </li>
          <li>
            <strong>MA, Applied Linguistics</strong> — 2010
            <br />
            Thesis: <em>The Prosodical Son: Music&apos;s Influence on the Evolution of Language</em>
          </li>
          <li>
            <strong>BA, Linguistics</strong> (minor: Portuguese) — 2004
          </li>
        </ul>

        <h2>Background</h2>
        <p>
          After my undergraduate degree I spent several years as an educator — teaching Spanish
          and English at the high school level, tutoring privately, and living in Korea for six
          months teaching English. I then returned to graduate school to pursue research in
          applied linguistics at UCLA.
        </p>
        <p>
          My dissertation work brought together linguistics, social psychology, and
          neuroscience, exploring how empathy manifests in language behavior and how it can be
          measured experimentally. That interdisciplinary thread — connecting rigorous methods
          to humanistic questions — has carried into my subsequent work in energy research.
        </p>
        <p>
          I have lived and studied extensively in Brazil, Mexico, and Central America, and
          incorporate Spanish and Portuguese into both research and everyday life.
        </p>

        <h2>Current work</h2>
        <p>
          I work at{" "}
          <a
            href="https://www.evolved.energy"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Evolved Energy Research
          </a>
          , a clean energy consulting and research firm. My focus there involves communicating
          complex energy modeling findings to policymakers, utilities, and the public — work
          that draws directly on a background in language and meaning-making.
        </p>

        <h2>Languages</h2>
        <ul>
          <li>English (native)</li>
          <li>Spanish (fluent)</li>
          <li>Portuguese (fluent)</li>
        </ul>
      </div>
    </div>
  );
}
