"use client";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-num">01 / About</div>
            <h2 className="section-title">A linguist who kept <em>translating</em>.</h2>
          </div>
          <div className="section-kicker">
            The shortest version of the story: I spent twenty years studying and
            teaching how humans use language, then learned how to channel these
            efforts to making a difference in the energy transition. Same
            interactions, different vocabulary.
          </div>
        </div>

        <div className="about">
          <div className="polaroid-stack">
            <div className="polaroid p1">
              <img src="/assets/photo-ucla.jpg" alt="ESL class at UCLA" />
              <div className="cap">Student Sketch</div>
            </div>
            <div className="polaroid p2">
              <img src="/assets/photo-eeg.jpg" alt="in EEG lab" />
              <div className="cap">Zaidel Lab, UCLA</div>
            </div>
            <div className="polaroid p3">
              <img src="/assets/photo-sketch.jpg" alt="student letter from end of term" />
              <div className="cap">Portrait of a Lecturer</div>
            </div>
            <div className="polaroid p4">
              <img src="/assets/photo-class.jpg" alt="USP despedida 2024" />
              <div className="cap">ESL · UCLA</div>
            </div>
            <div className="polaroid p5">
              <img src="/assets/photo-classroom.jpg" alt="classroom selfie at USP" />
              <div className="cap">Topics in Applied Ling · USP</div>
            </div>
            <div className="polaroid p6">
              <img src="/assets/photo-usp-2.jpg" alt="class at USP" />
              <div className="cap">São Paulo · 2023</div>
            </div>
            <div className="polaroid p7">
              <img src="/assets/photo-chalkboard.jpg" alt="Thank you Trevor chalkboard" />
              <div className="cap">Despedida · USP 2024</div>
            </div>
          </div>

          <div className="about-copy">
            <h3>I&apos;m Trevor — a teacher who ended up in energy.</h3>
            <p>
              I trained at UCLA (PhD, Applied Linguistics) studying linguistic
              empathy — the way grammar encodes perspective-taking, and what it
              reveals about how two minds coordinate meaning. I lectured there
              for three years, then moved to Brazil as a U.S. Department of
              State English Language Fellow and Visiting Professor at the
              University of São Paulo, where I taught linguistics, ran
              English-as-a-Medium-of-Instruction workshops, and tried to
              pronounce <em>pamonha</em> correctly.
            </p>
            <p>
              In 2024 I joined{" "}
              <a href="https://www.evolved.energy" target="_blank" rel="noreferrer" style={{ color: "var(--teal)" }}>
                Evolved Energy Research
              </a>{" "}
              as Director of Education. EER builds custom energy models for
              NGOs, governments, and utilities planning for the decarbonization
              transition. My job is to make that work legible to clients,
              journalists, and the public.
            </p>
            <p>
              Turns out applied linguistics is good training for this. Both
              fields are about who controls the frame, what counts as a valid
              answer, and how meaning moves — or gets lost — across the gap
              between expert and audience. If you can teach a Brazilian engineer
              to lecture in English, you can teach a lobbyist what capacity
              expansion actually means.
            </p>
            <div className="pullquote">
              Language is infrastructure.
              <span className="attr">— From a draft of &ldquo;Language and Power&rdquo;</span>
            </div>
            <div className="chips">
              <span className="chip solid">Applied Linguistics PhD</span>
              <span className="chip teal">EER Director of Education</span>
              <span className="chip green">EMI specialist</span>
              <span className="chip gold">EEG / psycholinguistics</span>
              <span className="chip">PT · EN · ES</span>
              <span className="chip">Crossword setter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
