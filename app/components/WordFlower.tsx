"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { FLOWER_PUZZLES, type FlowerPuzzle } from "../data/wordflower";

const CX = 200, CY = 210, R = 52;
const D = R * Math.sqrt(3);

const LEVELS = [
  { name: "Observer",           pct: 0    },
  { name: "Load Follower",      pct: 0.04 },
  { name: "Grid Aware",         pct: 0.10 },
  { name: "Peak Demand",        pct: 0.20 },
  { name: "Transmission",       pct: 0.35 },
  { name: "Grid Operator",      pct: 0.55 },
  { name: "Renewable",          pct: 0.80 },
  { name: "Net Zero",           pct: 1.00 },
];

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");
}

function outerCenters(outer: string[]) {
  return outer.map((letter, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return { letter, x: CX + D * Math.cos(a), y: CY + D * Math.sin(a) };
  });
}

function wordScore(w: string, center: string, outer: string[]): number {
  const allLetters = [center, ...outer].map(l => l.toLowerCase());
  const isPangram = allLetters.every(l => w.includes(l));
  return (w.length === 4 ? 1 : w.length) + (isPangram ? 7 : 0);
}

export function WordFlower({ puzzle = FLOWER_PUZZLES[0], archive }: { puzzle?: FlowerPuzzle; archive?: FlowerPuzzle[] }) {
  const [current, setCurrent] = useState("");
  const [found, setFound] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [shake, setShake] = useState(false);
  const msgTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevLevelRef = useRef(0);

  const totalPossible = puzzle.answers.reduce(
    (acc, w) => acc + wordScore(w, puzzle.center, puzzle.outer), 0
  );

  const pct = totalPossible > 0 ? score / totalPossible : 0;
  const levelIdx = LEVELS.reduce((best, l, i) => (pct >= l.pct ? i : best), 0);

  const showMessage = (msg: string, bad = false) => {
    setMessage(msg);
    if (bad) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
    if (msgTimer.current) clearTimeout(msgTimer.current);
    msgTimer.current = setTimeout(() => setMessage(""), 1800);
  };

  useEffect(() => {
    if (levelIdx > prevLevelRef.current) {
      showMessage(`${LEVELS[levelIdx].name}!`);
      prevLevelRef.current = levelIdx;
    }
  }, [levelIdx]);

  const submitWord = useCallback(() => {
    const word = current.toLowerCase();
    if (word.length < 4) { showMessage("Too short", true); setCurrent(""); return; }
    if (!word.includes(puzzle.center.toLowerCase())) {
      showMessage(`Must use ${puzzle.center}`, true); setCurrent(""); return;
    }
    if (found.includes(word)) { showMessage("Already found", true); setCurrent(""); return; }
    if (!puzzle.answers.includes(word)) { showMessage("Not a word", true); setCurrent(""); return; }

    const pts = wordScore(word, puzzle.center, puzzle.outer);
    const allLetters = [puzzle.center, ...puzzle.outer].map(l => l.toLowerCase());
    const isPangram = allLetters.every(l => word.includes(l));
    setFound(prev => [...prev, word]);
    setScore(prev => prev + pts);
    showMessage(isPangram ? `Power word! +${pts}` : `+${pts}`);
    setCurrent("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, found, puzzle]);

  const submitRef = useRef(submitWord);
  useEffect(() => { submitRef.current = submitWord; }, [submitWord]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const key = e.key.toUpperCase();
      const valid = [puzzle.center, ...puzzle.outer];
      if (valid.includes(key)) setCurrent(prev => prev + key);
      else if (e.key === "Backspace") setCurrent(prev => prev.slice(0, -1));
      else if (e.key === "Enter") submitRef.current();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const positions = outerCenters(puzzle.outer);

  return (
    <section className="section wf-section" id="wordflower">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-num">Word Flower</div>
            <h2 className="section-title">Words in <em>nature</em>.</h2>
          </div>
          <p className="section-kicker">
            Play the Word Flower where the ultimate goal is to uncover a hidden energy-themed word.
            Create as many words as possible using letters on the petals surrounding a central letter —
            letters can be used more than once. Every word must include the central letter, and at least
            one word — the <em style={{ fontStyle: "italic", color: "var(--teal-light)" }}>power word</em> — must use all available letters.
          </p>
        </div>

        <div className="wf-wrap">
          <div className="wf-flower">
            <svg viewBox="60 55 280 310" className="wf-svg">
              {positions.map(({ letter, x, y }) => (
                <g key={letter} className="wf-hex-group" onClick={() => setCurrent(prev => prev + letter)}>
                  <polygon points={hexPoints(x, y, R)} className="wf-hex outer" />
                  <text x={x} y={y} className="wf-hex-letter">{letter}</text>
                </g>
              ))}
              <g className="wf-hex-group" onClick={() => setCurrent(prev => prev + puzzle.center)}>
                <polygon points={hexPoints(CX, CY, R)} className="wf-hex center" />
                <text x={CX} y={CY} className="wf-hex-letter wf-hex-letter-center">{puzzle.center}</text>
              </g>
            </svg>

            <div className="wf-current">
              <span className={`wf-current-word${shake ? " shake" : ""}`}>
                {current
                  ? current.split("").map((ch, i) => (
                      <span key={i} style={{ color: ch.toUpperCase() === puzzle.center ? "var(--teal-light)" : undefined }}>
                        {ch}
                      </span>
                    ))
                  : <span className="wf-placeholder-dot">·</span>
                }
              </span>
            </div>

            {message && <div className="wf-message">{message}</div>}

            <div className="wf-controls">
              <button onClick={() => setCurrent(prev => prev.slice(0, -1))} className="wf-btn">Delete</button>
              <button onClick={() => setCurrent("")} className="wf-btn">Clear</button>
              <button onClick={submitWord} className="wf-btn wf-btn-primary">Enter</button>
            </div>
          </div>

          <div className="wf-sidebar">
            <div className="wf-score-wrap">
              <span className="wf-score-n">{score}</span>
              <span className="wf-score-l">/ {totalPossible} pts</span>
            </div>

            <div className="wf-level-name">{LEVELS[levelIdx].name}</div>
            {levelIdx < LEVELS.length - 1 && (
              <div className="wf-next-level">
                {Math.ceil(LEVELS[levelIdx + 1].pct * totalPossible) - score} pts to next level: {LEVELS[levelIdx + 1].name}
              </div>
            )}
            <div className="wf-progress">
              <div className="wf-progress-fill" style={{ width: `${Math.min(pct * 100, 100)}%` }} />
              {LEVELS.slice(1).map((l) => (
                <div
                  key={l.name}
                  className={`wf-progress-tick${pct >= l.pct ? " reached" : ""}`}
                  style={{ left: `${l.pct * 100}%` }}
                />
              ))}
            </div>

            {LEVELS[levelIdx].name !== "Renewable" && LEVELS[levelIdx].name !== "Net Zero" && (
              <div className="wf-win-hint">Reach <strong>Renewable</strong> to complete the puzzle.</div>
            )}
            {LEVELS[levelIdx].name === "Renewable" && (
              <div className="wf-win-banner">
                Puzzle complete! Keep going to reach <strong>Net Zero</strong>.
              </div>
            )}
            {LEVELS[levelIdx].name === "Net Zero" && (
              <div className="wf-win-banner wf-win-banner-final">
                Every word found. Net Zero achieved.
              </div>
            )}

            <div className="wf-found-head">{found.length} word{found.length !== 1 ? "s" : ""} found</div>
            <div className="wf-found-list">
              {[...found].sort().map(w => (
                <span key={w} className={`wf-found-word${w === puzzle.powerWord ? " power" : ""}`}>{w}</span>
              ))}
            </div>
          </div>
        </div>

        {archive && archive.length > 0 && (
          <div className="wf-archive">
            <div className="wf-archive-label">Word Flower Archive</div>
            <div className="wf-archive-grid">
              {archive.map((p) => (
                <Link key={p.slug} href={`/flowers/${p.slug}`} className="wf-archive-card">
                  <div className="wf-archive-icon">
                    <svg width="28" height="28" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {(() => {
                        const r = 8, cx = 23, cy = 23;
                        const d = r * Math.sqrt(3);
                        const pts = (x: number, y: number) => Array.from({length:6},(_,i)=>{const a=(Math.PI/3)*i-Math.PI/6;return`${x+r*Math.cos(a)},${y+r*Math.sin(a)}`;}).join(" ");
                        const outers = Array.from({length:6},(_,i)=>{const a=(Math.PI/3)*i-Math.PI/2;return{x:cx+d*Math.cos(a),y:cy+d*Math.sin(a)};});
                        return <>
                          {outers.map((o,i)=><polygon key={i} points={pts(o.x,o.y)} fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>)}
                          <polygon points={pts(cx,cy)} fill="rgba(255,255,255,0.45)" stroke="rgba(255,255,255,0.7)" strokeWidth="1"/>
                        </>;
                      })()}
                    </svg>
                  </div>
                  <div className="wf-archive-title">{p.title}</div>
                  <div className="wf-archive-meta">{p.date} · power word: {p.powerWord}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
