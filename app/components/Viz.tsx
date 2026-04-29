"use client";
import { useState, useMemo } from "react";

const NODES = [
  { x: 22, y: 28, type: "sp", label: "Grammar" },
  { x: 15, y: 44, type: "sp", label: "Stance" },
  { x: 24, y: 62, type: "sp", label: "Prosody" },
  { x: 14, y: 76, type: "sp", label: "Deixis" },
  { x: 30, y: 82, type: "sp", label: "Register" },
  { x: 50, y: 24, type: "shared", label: "Perspective" },
  { x: 50, y: 42, type: "shared", label: "Empathy" },
  { x: 50, y: 60, type: "shared", label: "Context" },
  { x: 50, y: 78, type: "shared", label: "Common Ground" },
  { x: 78, y: 28, type: "ls", label: "Inference" },
  { x: 85, y: 44, type: "ls", label: "Pragmatics" },
  { x: 76, y: 62, type: "ls", label: "Attention" },
  { x: 84, y: 76, type: "ls", label: "Memory" },
  { x: 70, y: 82, type: "ls", label: "Situation" },
];

function SpaceBetweenSpeakers() {
  const [mode, setMode] = useState("both");

  const edges = useMemo(() => {
    const e: [number, number][] = [];
    NODES.forEach((a, i) => {
      NODES.forEach((b, j) => {
        if (i >= j) return;
        const dx = a.x - b.x, dy = a.y - b.y;
        if (Math.sqrt(dx * dx + dy * dy) < 30) e.push([i, j]);
      });
    });
    return e;
  }, []);

  const visible = (t: string) => mode === "both" || t === "shared" || t === mode;
  const colorOf = (t: string) => t === "sp" ? "#8CCF5F" : t === "ls" ? "#6BBED8" : "#FFD852";

  return (
    <div>
      <div className="brain-scene">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M 26 12 C 6 18, 6 84, 30 88 C 42 88, 44 50, 44 50 C 44 50, 38 12, 26 12 Z"
            fill="none" stroke="rgba(107,166,66,0.18)" strokeWidth="0.25" />
          <path d="M 74 12 C 94 18, 94 84, 70 88 C 58 88, 56 50, 56 50 C 56 50, 62 12, 74 12 Z"
            fill="none" stroke="rgba(107,190,216,0.15)" strokeWidth="0.25" />
          {edges.map(([i, j], k) => {
            const a = NODES[i], b = NODES[j];
            const vis = visible(a.type) && visible(b.type);
            return (
              <line key={k} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={vis ? "rgba(200,220,230,0.28)" : "rgba(200,220,230,0.05)"}
                strokeWidth="0.15" style={{ transition: "stroke .4s" }} />
            );
          })}
          {NODES.map((n, i) => {
            const vis = visible(n.type);
            return (
              <g key={i} style={{ transition: "opacity .4s", opacity: vis ? 1 : 0.15 }}>
                <circle cx={n.x} cy={n.y} r="1.8" fill={colorOf(n.type)}
                  style={{ filter: vis ? `drop-shadow(0 0 4px ${colorOf(n.type)})` : "none" }} />
                <text x={n.x} y={n.y - 3.2} textAnchor="middle"
                  fontSize="2.2" fill="rgba(255,255,255,0.85)"
                  fontFamily="Roboto Mono, monospace" letterSpacing="0.05em">{n.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="brain-controls">
        <button className={`brain-btn ${mode === "sp" ? "active" : ""}`} onClick={() => setMode("sp")}>What&apos;s encoded</button>
        <button className={`brain-btn ${mode === "ls" ? "active" : ""}`} onClick={() => setMode("ls")}>What&apos;s decoded</button>
        <button className={`brain-btn ${mode === "both" ? "active" : ""}`} onClick={() => setMode("both")}>What&apos;s co-created</button>
      </div>
    </div>
  );
}

export function Viz() {
  return (
    <section className="section" id="viz">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-num">Research</div>
            <h2 className="section-title">Language &amp; <em>empathy</em>.</h2>
          </div>
          <div className="section-kicker">
            My research is driven by a desire to empower language learners to
            express themselves authentically. My fatal flaw comprises
            understanding and the need to be understood (my partner, who has infinite patience, can confirm).
          </div>
        </div>

        <div className="viz-wrap">
          <div className="viz-float">
            <SpaceBetweenSpeakers />
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-.02em", margin: "0 0 18px" }}>
              The Pervasive Duality of Empathy
            </h3>
            <p style={{ color: "#3A4A4F", fontSize: 17, lineHeight: 1.65 }}>
              Empathy has a habit of showing up in two places at once. There is
              the version everyone knows — the social-psychological one, the
              standing-in-someone-else&apos;s-shoes version, the kind that makes for
              good commencement speeches. And then there is a quieter version,
              hiding in plain sight inside grammar itself: the way a sentence
              quietly commits to a perspective before its speaker has decided to
              take one. My research pursues how intertwined these distinct
              notions of empathy are.
            </p>
            <p style={{ color: "#3A4A4F", fontSize: 17, lineHeight: 1.65, marginTop: 16 }}>
              My early research involved discourse and conversational analysis of
              language therapy for children with developmental delays, comparing
              a vocabulary-first approach to one organized around emotional
              engagement. When the therapy started from where the child already
              was — their attention, their affect, their gaze — language arrived
              in layered modalities memorized vocabulary never could reach:
              gesture, intonation, timing, play. It looked less like instruction
              and more like joining and co-creating a conversation already in
              progress.
            </p>
            <p style={{
              color: "#1E4A52", fontSize: 17, lineHeight: 1.7, marginTop: 24,
              fontStyle: "italic", borderLeft: "3px solid #FFC000", paddingLeft: 18, overflow: "hidden",
            }}>
              When and why do we say &ldquo;I met Gary&rdquo; versus &ldquo;Gary
              met me&rdquo; versus &ldquo;Gary and I met&rdquo;? They all mean
              the same thing, right?
            </p>
            <p style={{ color: "#3A4A4F", fontSize: 17, lineHeight: 1.65, marginTop: 24 }}>
              If empathy is structuring how we use language, the structure should
              leave a trace, and traces are measurable. Psycholinguistic
              experiments and EEG data say it does and they are. Listeners flag
              violations of empathic encoding within milliseconds, fast enough
              that no deliberation is involved, and the size of that neural
              reaction tracks how empathic the same person is on
              social-psychological measures. Linguistic Empathy and Psychological
              Empathy turn out to be unusually well-behaved as a pair: they
              correlate where you would hope, and they predict each other in
              directions that are theoretically interesting rather than trivial.
            </p>
            <p style={{ color: "#3A4A4F", fontSize: 17, lineHeight: 1.65, marginTop: 16 }}>
              Empathy is not a soft skill bolted onto a hard system; it is part
              of how the system runs. The processes we usually treat as separate
              problems are variations on the same underlying move: how a child
              acquires a first language, how an adult learns a second, how a
              therapist meets a client, how a teacher reaches a student who feels
              unmet. They are all attempts to take a perspective seriously enough
              to let it shape what comes next.
            </p>
            <p style={{
              color: "#1E4A52", fontSize: 17, lineHeight: 1.7, marginTop: 24,
              fontStyle: "italic", borderLeft: "3px solid #FFC000", paddingLeft: 18, overflow: "hidden",
            }}>
              Face-to-face interaction is the primary means of
              communication; more fundamental than lecturing, emailing, texting,
              and traditional teaching. Why, then, don&apos;t we teach language
              this way?
            </p>
            <p style={{ color: "#3A4A4F", fontSize: 17, lineHeight: 1.65, marginTop: 24 }}>
              This conviction runs through years of tutoring children with
              learning differences, through sociolinguistics courses where
              students bring their own communities in as primary material, through
              establishing natural language interactive education in São Paulo for
              professors across departments. The research and the practice are
              the same argument in two registers. Both insist that language is
              built between people, and that taking the other person&apos;s
              perspective is not a nicety on top of communication but fundamental
              to the means of communication itself.
            </p>
        </div>
      </div>
    </section>
  );
}
