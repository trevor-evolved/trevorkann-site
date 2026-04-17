import Image from "next/image";

export default function Research() {
  return (
    <div className="max-w-2xl">
      <h1
        className="text-2xl font-semibold text-slate-900 mb-8"
        style={{ fontFamily: "var(--font-lora)" }}
      >
        Research
      </h1>

      <div className="mb-8 flex gap-6 items-start">
        <Image
          src="/photo-eeg.jpg"
          alt="Trevor Kann in EEG lab"
          width={160}
          height={160}
          className="rounded-lg object-cover shadow-sm flex-shrink-0"
        />
        <p className="text-sm text-slate-500 italic leading-relaxed pt-2">
          Running a psycholinguistic experiment in the Zaidel EEG Lab at UCLA, where behavioral
          and neurophysiological measures of linguistic empathy were developed and tested.
        </p>
      </div>

      <div className="prose">
        <p>
          My research sits at the intersection of linguistics, social psychology, and cognitive
          neuroscience, with a particular focus on how empathy operates in and through language.
          Secondary interests include prosody, language evolution, humor, pragmatics, and
          language and gender.
        </p>

        <h2>Publications</h2>
        <ul>
          <li>
            Kann T, Berman S, Cohen MS, Goldknopf E, Gülser M, Erlikhman G, Trinh K,
            Yokoyama OT, Zaidel E (2023). &ldquo;Linguistic Empathy: Behavioral measures,
            neurophysiological correlates, and correlation with Psychological Empathy.&rdquo;{" "}
            <em>Neuropsychologia</em>. 15;191:108650.
          </li>
        </ul>

        <h2>Dissertation &amp; Theses</h2>
        <ul>
          <li>
            <strong>PhD Dissertation (UCLA)</strong> — <em>Measuring Linguistic Empathy: An
            Experimental Approach to Connecting Linguistic and Social Psychological Notions
            of Empathy</em>
          </li>
          <li>
            <strong>C.Phil Qualifying Paper (UCLA)</strong> — <em>Seeking Natural Interaction:
            A Comparison of Emergent Language within Developmental Therapies for Children
            with Autism</em>
          </li>
          <li>
            <strong>MA Thesis (UCLA)</strong> — <em>The Prosodical Son: Music&apos;s Influence
            on the Evolution of Language</em>
          </li>
        </ul>

        <h2>Presentations &amp; Talks</h2>
        <ul>
          <li>
            2023–2024 &mdash; Multiple keynote speeches and English teaching seminars, US
            Department of State / University of São Paulo.
          </li>
          <li>
            2019 &mdash; &ldquo;Humor as Defensive and Offensive: Manipulating linguistic
            perspective in political and social media exchanges.&rdquo; Center for Medieval and
            Renaissance Studies Conference, UCLA.
          </li>
          <li>
            2015 &mdash; &ldquo;Exploring Empathy and Language Acceptability through
            Electrophysiology.&rdquo; UCLA AppLing 10W.
          </li>
          <li>
            2014 &mdash; &ldquo;EEG Methods in Pragmatics Research.&rdquo; Co-presenter with
            Olga Yokoyama. AMPRA.
          </li>
          <li>
            2014 &mdash; &ldquo;Neurology, Language, and Empathy.&rdquo; UCLA AppLing 10W.
          </li>
          <li>
            2012 &mdash; Multiple presentations on prosody, language evolution, and
            conversational analysis.
          </li>
          <li>
            2010 &mdash; &ldquo;Intonation Incorporated: Prosodic Patterns in Speech.&rdquo;
          </li>
        </ul>
      </div>
    </div>
  );
}
