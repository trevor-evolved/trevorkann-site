"use client";
import { useState, useMemo } from "react";
import { CONCEPT_NODES, CONCEPT_EDGES, CAPTIONS, ETYM_WORDS } from "../data";

const FEATURED_ETYM = ["transition", "power", "current", "capacity", "code"];

function ConceptMap() {
  const [focus, setFocus] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  const neighbors = useMemo(() => {
    const n: Record<string, Set<string>> = {};
    CONCEPT_EDGES.forEach(([a, b]) => {
      (n[a] = n[a] || new Set()).add(b);
      (n[b] = n[b] || new Set()).add(a);
    });
    return n;
  }, []);

  const active = focus || hover;
  const isNeighbor = (id: string) =>
    !!active && (id === active || (neighbors[active] && neighbors[active].has(id)));

  const nodesById: Record<string, (typeof CONCEPT_NODES)[number]> = {};
  CONCEPT_NODES.forEach((n) => (nodesById[n.id] = n));

  return (
    <div
      className="concept-map"
      onClick={(e) => {
        const t = e.target as HTMLElement;
        if (t.tagName === "DIV" || t.tagName === "svg" || t.tagName === "line")
          setFocus(null);
      }}
    >
      <div className="cm-legend">
        <span><span className="sw l" /> Linguistics</span>
        <span><span className="sw b" /> Bridge concept</span>
        <span><span className="sw e" /> Energy</span>
      </div>
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {CONCEPT_EDGES.map(([a, b], i) => {
          const A = nodesById[a], B = nodesById[b];
          if (!A || !B) return null;
          const high = !!active && (a === active || b === active);
          return (
            <line
              key={i}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke={high ? "#FFC000" : "rgba(200,220,230,0.12)"}
              strokeWidth={high ? 0.25 : 0.12}
              style={{ transition: "stroke .25s, stroke-width .25s" }}
            />
          );
        })}
      </svg>

      {CONCEPT_NODES.map((n) => {
        const isActive = n.id === active;
        const dim = !!active && !isNeighbor(n.id);
        return (
          <button
            key={n.id}
            className={`cm-node ${n.type} ${isActive ? "focused" : ""}`}
            style={{
              left: `${n.x}%`, top: `${n.y}%`,
              opacity: dim ? 0.28 : 1,
              fontSize: n.size ? `${n.size * 15}px` : undefined,
            }}
            onMouseEnter={() => setHover(n.id)}
            onMouseLeave={() => setHover(null)}
            onClick={(e) => {
              e.stopPropagation();
              setFocus(focus === n.id ? null : n.id);
            }}
          >
            {n.label}
          </button>
        );
      })}

      <div
        className={`cm-caption ${active ? "visible" : ""}`}
        dangerouslySetInnerHTML={{
          __html: active
            ? CAPTIONS[active] || "Hover or click another node to explore the map."
            : "",
        }}
      />
    </div>
  );
}

function EtymCard({ word }: { word: (typeof ETYM_WORDS)[number] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`etym-card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped((f) => !f)}>
      <div className="etym-inner">
        <div className="etym-face">
          <div>
            <div className="etym-word">{word.w}</div>
            <div className="etym-ipa">{word.ipa}</div>
          </div>
          <div className="etym-roots">{word.roots}</div>
        </div>
        <div className="etym-face back">
          <div>
            <div className="tiny">The word in both</div>
            <div className="etym-word">{word.w}</div>
          </div>
          <div className="etym-roots">
            {word.both.map((b, i) => <div key={i} style={{ marginBottom: 6 }}>{b}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Intersection() {
  return (
    <section className="section section-dark" id="intersection">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-num">Intersection</div>
            <h2 className="section-title">Language <em>↔</em> Energy.</h2>
          </div>
          <div className="section-kicker">
            The two fields share more vocabulary than anyone tells you.{" "}
            <em>Power</em>, <em>current</em>, <em>capacity</em>, <em>code</em> — each
            one does real work in both worlds. Hover the map, flip the cards.
          </div>
        </div>

        <ConceptMap />

        <div className="etym-wrap">
          <div className="etym-head">
            <h3>Etymology explorer</h3>
            <span style={{ color: "rgba(255,255,255,.55)", fontSize: 13 }}>
              Click a word to flip it.
            </span>
          </div>
          <div className="etym-grid">
            {ETYM_WORDS.filter((w) => FEATURED_ETYM.includes(w.w)).map((w) => <EtymCard key={w.w} word={w} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
