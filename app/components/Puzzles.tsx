"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export interface PuzzleData {
  title: string;
  rows: number;
  cols: number;
  solution: (string | null)[][];
  nums: (number | null)[][];
  across: { n: number; row: number; clue: string }[];
  down: { n: number; col: number; clue: string }[];
}

const ROWS = 5, COLS = 5;
const B = null;

const SOLUTION: (string | null)[][] = [
  ["D", "A", "T", "E", "S"],
  ["E", "L", "O", "P", "E"],
  ["P", "O", "W", "E", "R"],
  ["T", "H", "E", "E", B],
  ["H", "A", "D", B,   B],
];

const NUMS: (number | null)[][] = [
  [1, 2, 3, 4, 5],
  [6, 0, 0, 0, 0],
  [7, 0, 0, 0, 0],
  [8, 0, 0, 0, B],
  [9, 0, 0, B,  B],
];

const ACROSS = [
  { row: 0, n: 1,  clue: "Palm fruits." },
  { row: 1, n: 6,  clue: "Hastily hitch." },
  { row: 2, n: 7,  clue: "What renewables generate." },
  { row: 3, n: 8,  clue: "For whom the bell tolls." },
  { row: 4, n: 9,  clue: "Swindled." },
];

const DOWN = [
  { col: 0, n: 1, clue: "Profundity." },
  { col: 1, n: 2, clue: "Shalom in Hawaii." },
  { col: 2, n: 3, clue: "Pulled from behind." },
  { col: 3, n: 4, clue: "Olympic blade." },
  { col: 4, n: 5, clue: "Spanish soy producer?" },
];

// Tab order: all across in order, then all down
const TAB_ORDER: { dir: "across" | "down"; idx: number }[] = [
  ...ACROSS.map((_, i) => ({ dir: "across" as const, idx: i })),
  ...DOWN.map((_, i) => ({ dir: "down" as const, idx: i })),
];

function Crossword() {
  const [grid, setGrid] = useState<(string | null)[][]>(() =>
    SOLUTION.map((row) => row.map((cell) => (cell === null ? null : "")))
  );
  const [focus, setFocus] = useState({ r: 0, c: 0 });
  const [dir, setDir] = useState<"across" | "down">("across");
  const refs = useRef<(HTMLInputElement | null)[][]>(
    Array(ROWS).fill(0).map(() => Array(COLS).fill(null))
  );
  const clueRefs = useRef<(HTMLLIElement | null)[][]>(
    [Array(ACROSS.length).fill(null), Array(DOWN.length).fill(null)]
  );
  const gridRef = useRef(grid);
  useEffect(() => { gridRef.current = grid; }, [grid]);
  const interactedRef = useRef(false);

  const [elapsed, setElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const isBlack = (r: number, c: number) => SOLUTION[r]?.[c] === null;

  const activeAcrossIdx = isBlack(focus.r, focus.c) ? -1 : ACROSS.findIndex(cl => cl.row === focus.r);
  const activeDownIdx   = isBlack(focus.r, focus.c) ? -1 : DOWN.findIndex(cl => cl.col === focus.c);

  const whiteCells_t = SOLUTION.flat().filter((c) => c !== null).length;
  let correct_t = 0;
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (!isBlack(r, c) && grid[r][c] === SOLUTION[r][c]) correct_t++;
  const done_t = correct_t === whiteCells_t;

  useEffect(() => {
    if (timerRunning) {
      timerIntervalRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
    return () => { if (timerIntervalRef.current) clearInterval(timerIntervalRef.current); };
  }, [timerRunning]);

  useEffect(() => { if (done_t) setTimerRunning(false); }, [done_t]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const handleWrapFocus = () => { if (timerStarted && !done_t) setTimerRunning(true); };
  const handleWrapBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!wrapRef.current?.contains(e.relatedTarget as Node)) setTimerRunning(false);
  };

  // Only scroll clue into view after the user has interacted — never on mount
  useEffect(() => {
    if (!interactedRef.current) return;
    const idx = dir === "across" ? activeAcrossIdx : activeDownIdx;
    const dirIdx = dir === "across" ? 0 : 1;
    clueRefs.current[dirIdx][idx]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeAcrossIdx, activeDownIdx, dir]);

  const focusCell = (r: number, c: number) => {
    interactedRef.current = true;
    setFocus({ r, c });
    refs.current[r]?.[c]?.focus();
  };

  const jumpToClue = (tabIdx: number) => {
    const { dir: d, idx } = TAB_ORDER[tabIdx];
    setDir(d);
    const g = gridRef.current;
    if (d === "across") {
      const cl = ACROSS[idx];
      // find first empty cell in row, skipping blacks
      let c = 0;
      while (c < COLS && (isBlack(cl.row, c) || g[cl.row][c])) c++;
      if (c >= COLS) c = 0; // all filled — go to start of clue
      while (c < COLS && isBlack(cl.row, c)) c++;
      focusCell(cl.row, c);
    } else {
      const cl = DOWN[idx];
      let r = 0;
      while (r < ROWS && (isBlack(r, cl.col) || g[r][cl.col])) r++;
      if (r >= ROWS) r = 0;
      while (r < ROWS && isBlack(r, cl.col)) r++;
      focusCell(r, cl.col);
    }
  };

  const getCurrentTabIdx = (r: number, c: number, d: "across" | "down") => {
    if (d === "across") {
      const ci = ACROSS.findIndex(cl => cl.row === r);
      return TAB_ORDER.findIndex(t => t.dir === "across" && t.idx === ci);
    } else {
      const ci = DOWN.findIndex(cl => cl.col === c);
      return TAB_ORDER.findIndex(t => t.dir === "down" && t.idx === ci);
    }
  };

  const setCell = (r: number, c: number, v: string) => {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || isBlack(r, c)) return;
    setGrid((g) => g.map((row, i) => row.map((cell, j) => (i === r && j === c ? v : cell))));
  };

  const handleInput = (r: number, c: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const v = (e.target.value || "").slice(-1).toUpperCase().replace(/[^A-Z]/g, "");
    setCell(r, c, v);
    if (v) {
      if (dir === "across") {
        let nc = c + 1;
        while (nc < COLS && isBlack(r, nc)) nc++;
        if (nc < COLS) focusCell(r, nc);
      } else {
        let nr = r + 1;
        while (nr < ROWS && isBlack(nr, c)) nr++;
        if (nr < ROWS) focusCell(nr, c);
      }
    }
  };

  const handleKey = (r: number, c: number, e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const cur = getCurrentTabIdx(r, c, dir);
      const next = e.shiftKey
        ? (cur - 1 + TAB_ORDER.length) % TAB_ORDER.length
        : (cur + 1) % TAB_ORDER.length;
      jumpToClue(next);
      return;
    }
    if (e.key === "Backspace" && !grid[r][c]) {
      if (dir === "across" && c > 0) focusCell(r, c - 1);
      else if (dir === "down" && r > 0) focusCell(r - 1, c);
    }
    const move = (dr: number, dc: number, newDir: "across" | "down") => {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !isBlack(nr, nc)) {
        setDir(newDir);
        focusCell(nr, nc);
      }
    };
    if (e.key === "ArrowRight") move(0,  1, "across");
    if (e.key === "ArrowLeft")  move(0, -1, "across");
    if (e.key === "ArrowDown")  move( 1, 0, "down");
    if (e.key === "ArrowUp")    move(-1, 0, "down");
  };

  const whiteCells = whiteCells_t;
  const correct = correct_t;
  const pct = Math.round((correct / whiteCells) * 100);
  const done = done_t;

  return (
    <div className="cw-wrap" ref={wrapRef} onFocus={handleWrapFocus} onBlur={handleWrapBlur}>
      <div>
        <div className="puzzle-card-title">Power to the People</div>
        <div
          className="cw-board"
          style={{
            gridTemplateColumns: `repeat(${COLS}, 44px)`,
            gridTemplateRows: `repeat(${ROWS}, 44px)`,
          }}
        >
          {SOLUTION.flatMap((row, r) =>
            row.map((sol, c) => {
              if (sol === null) return <div key={`${r}-${c}`} className="cw-cell black" />;
              const v = grid[r][c] as string;
              const isFocus = focus.r === r && focus.c === c;
              const highlight = (dir === "across" && focus.r === r) || (dir === "down" && focus.c === c);
              const isCorrect = v && v === sol;
              const num = NUMS[r][c];
              return (
                <div
                  key={`${r}-${c}`}
                  className={`cw-cell ${isFocus ? "focus" : ""} ${highlight && !isFocus ? "highlight" : ""} ${isCorrect && done ? "correct" : ""}`}
                >
                  {num ? <span className="num">{num}</span> : null}
                  <input
                    ref={(el) => { refs.current[r][c] = el; }}
                    value={v}
                    onPointerDown={() => {
                      interactedRef.current = true;
                      if (!timerStarted) { setTimerStarted(true); setTimerRunning(true); }
                    }}
                    onFocus={() => { setFocus({ r, c }); }}
                    onChange={(e) => handleInput(r, c, e)}
                    onKeyDown={(e) => handleKey(r, c, e)}
                    maxLength={1}
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="cw-meta">
          <span>5×5</span>
          <div className="pg"><div className="pg-fill" style={{ width: `${pct}%` }} /></div>
          <span>{done ? `✓ SOLVED · ${formatTime(elapsed)}` : timerStarted ? formatTime(elapsed) : `${correct}/${whiteCells}`}</span>
        </div>
      </div>

      <div className="cw-clues">
        <div>
          <h5>Across</h5>
          <ol>
            {ACROSS.map((cl, i) => (
              <li
                key={i}
                ref={(el) => { clueRefs.current[0][i] = el; }}
                className={dir === "across" && i === activeAcrossIdx ? "active" : ""}
                onClick={() => {
                  setDir("across");
                  focusCell(cl.row, 0);
                }}
              >
                <span className="n">{cl.n}.</span>
                <span>{cl.clue}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h5>Down</h5>
          <ol>
            {DOWN.map((cl, i) => (
              <li
                key={i}
                ref={(el) => { clueRefs.current[1][i] = el; }}
                className={dir === "down" && i === activeDownIdx ? "active" : ""}
                onClick={() => {
                  setDir("down");
                  focusCell(0, cl.col);
                }}
              >
                <span className="n">{cl.n}.</span>
                <span>{cl.clue}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function CrosswordPlayer({ puzzle }: { puzzle: PuzzleData }) {
  const { rows: ROWS, cols: COLS, solution: SOLUTION, nums: NUMS, across: ACROSS, down: DOWN } = puzzle;

  const TAB_ORDER: { dir: "across" | "down"; idx: number }[] = [
    ...ACROSS.map((_, i) => ({ dir: "across" as const, idx: i })),
    ...DOWN.map((_, i) => ({ dir: "down" as const, idx: i })),
  ];

  const [grid, setGrid] = useState<(string | null)[][]>(() =>
    SOLUTION.map((row) => row.map((cell) => (cell === null ? null : "")))
  );
  const [focus, setFocus] = useState({ r: 0, c: 0 });
  const [dir, setDir] = useState<"across" | "down">("across");
  const refs = useRef<(HTMLInputElement | null)[][]>(
    Array(ROWS).fill(0).map(() => Array(COLS).fill(null))
  );
  const clueRefs = useRef<(HTMLLIElement | null)[][]>(
    [Array(ACROSS.length).fill(null), Array(DOWN.length).fill(null)]
  );
  const gridRef = useRef(grid);
  useEffect(() => { gridRef.current = grid; }, [grid]);
  const interactedRef = useRef(false);

  const [elapsed, setElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const isBlack = (r: number, c: number) => SOLUTION[r]?.[c] === null;

  const activeAcrossIdx = isBlack(focus.r, focus.c) ? -1 : ACROSS.findIndex(cl => cl.row === focus.r);
  const activeDownIdx   = isBlack(focus.r, focus.c) ? -1 : DOWN.findIndex(cl => cl.col === focus.c);

  const whiteCellsP = SOLUTION.flat().filter((c) => c !== null).length;
  let correctP = 0;
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (!isBlack(r, c) && grid[r][c] === SOLUTION[r][c]) correctP++;
  const doneP = correctP === whiteCellsP;

  useEffect(() => {
    if (timerRunning) {
      timerIntervalRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
    return () => { if (timerIntervalRef.current) clearInterval(timerIntervalRef.current); };
  }, [timerRunning]);

  useEffect(() => { if (doneP) setTimerRunning(false); }, [doneP]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const handleWrapFocus = () => { if (timerStarted && !doneP) setTimerRunning(true); };
  const handleWrapBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!wrapRef.current?.contains(e.relatedTarget as Node)) setTimerRunning(false);
  };

  useEffect(() => {
    if (!interactedRef.current) return;
    const idx = dir === "across" ? activeAcrossIdx : activeDownIdx;
    const dirIdx = dir === "across" ? 0 : 1;
    clueRefs.current[dirIdx][idx]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeAcrossIdx, activeDownIdx, dir]);

  const focusCell = (r: number, c: number) => {
    interactedRef.current = true;
    setFocus({ r, c });
    refs.current[r]?.[c]?.focus();
  };

  const jumpToClue = (tabIdx: number) => {
    const { dir: d, idx } = TAB_ORDER[tabIdx];
    setDir(d);
    const g = gridRef.current;
    if (d === "across") {
      const cl = ACROSS[idx];
      let c = 0;
      while (c < COLS && (isBlack(cl.row, c) || g[cl.row][c])) c++;
      if (c >= COLS) c = 0;
      while (c < COLS && isBlack(cl.row, c)) c++;
      focusCell(cl.row, c);
    } else {
      const cl = DOWN[idx];
      let r = 0;
      while (r < ROWS && (isBlack(r, cl.col) || g[r][cl.col])) r++;
      if (r >= ROWS) r = 0;
      while (r < ROWS && isBlack(r, cl.col)) r++;
      focusCell(r, cl.col);
    }
  };

  const getCurrentTabIdx = (r: number, c: number, d: "across" | "down") => {
    if (d === "across") {
      const ci = ACROSS.findIndex(cl => cl.row === r);
      return TAB_ORDER.findIndex(t => t.dir === "across" && t.idx === ci);
    } else {
      const ci = DOWN.findIndex(cl => cl.col === c);
      return TAB_ORDER.findIndex(t => t.dir === "down" && t.idx === ci);
    }
  };

  const setCell = (r: number, c: number, v: string) => {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || isBlack(r, c)) return;
    setGrid((g) => g.map((row, i) => row.map((cell, j) => (i === r && j === c ? v : cell))));
  };

  const handleInput = (r: number, c: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const v = (e.target.value || "").slice(-1).toUpperCase().replace(/[^A-Z]/g, "");
    setCell(r, c, v);
    if (v) {
      if (dir === "across") {
        let nc = c + 1;
        while (nc < COLS && isBlack(r, nc)) nc++;
        if (nc < COLS) focusCell(r, nc);
      } else {
        let nr = r + 1;
        while (nr < ROWS && isBlack(nr, c)) nr++;
        if (nr < ROWS) focusCell(nr, c);
      }
    }
  };

  const handleKey = (r: number, c: number, e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const cur = getCurrentTabIdx(r, c, dir);
      const next = e.shiftKey
        ? (cur - 1 + TAB_ORDER.length) % TAB_ORDER.length
        : (cur + 1) % TAB_ORDER.length;
      jumpToClue(next);
      return;
    }
    if (e.key === "Backspace" && !grid[r][c]) {
      if (dir === "across" && c > 0) focusCell(r, c - 1);
      else if (dir === "down" && r > 0) focusCell(r - 1, c);
    }
    const move = (dr: number, dc: number, newDir: "across" | "down") => {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !isBlack(nr, nc)) {
        setDir(newDir);
        focusCell(nr, nc);
      }
    };
    if (e.key === "ArrowRight") move(0,  1, "across");
    if (e.key === "ArrowLeft")  move(0, -1, "across");
    if (e.key === "ArrowDown")  move( 1, 0, "down");
    if (e.key === "ArrowUp")    move(-1, 0, "down");
  };

  const whiteCells = whiteCellsP;
  const correct = correctP;
  const pct = Math.round((correct / whiteCells) * 100);
  const done = doneP;

  return (
    <div className="cw-wrap" ref={wrapRef} onFocus={handleWrapFocus} onBlur={handleWrapBlur}>
      <div>
        <div
          className="cw-board"
          style={{
            gridTemplateColumns: `repeat(${COLS}, 44px)`,
            gridTemplateRows: `repeat(${ROWS}, 44px)`,
          }}
        >
          {SOLUTION.flatMap((row, r) =>
            row.map((sol, c) => {
              if (sol === null) return <div key={`${r}-${c}`} className="cw-cell black" />;
              const v = grid[r][c] as string;
              const isFocus = focus.r === r && focus.c === c;
              const highlight = (dir === "across" && focus.r === r) || (dir === "down" && focus.c === c);
              const isCorrect = v && v === sol;
              const num = NUMS[r][c];
              return (
                <div
                  key={`${r}-${c}`}
                  className={`cw-cell ${isFocus ? "focus" : ""} ${highlight && !isFocus ? "highlight" : ""} ${isCorrect && done ? "correct" : ""}`}
                >
                  {num ? <span className="num">{num}</span> : null}
                  <input
                    ref={(el) => { refs.current[r][c] = el; }}
                    value={v}
                    onPointerDown={() => {
                      interactedRef.current = true;
                      if (!timerStarted) { setTimerStarted(true); setTimerRunning(true); }
                    }}
                    onFocus={() => { setFocus({ r, c }); }}
                    onChange={(e) => handleInput(r, c, e)}
                    onKeyDown={(e) => handleKey(r, c, e)}
                    maxLength={1}
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="cw-meta">
          <span>{ROWS}×{COLS}</span>
          <div className="pg"><div className="pg-fill" style={{ width: `${pct}%` }} /></div>
          <span>{done ? `✓ SOLVED · ${formatTime(elapsed)}` : timerStarted ? formatTime(elapsed) : `${correct}/${whiteCells}`}</span>
        </div>
      </div>

      <div className="cw-clues">
        <div>
          <h5>Across</h5>
          <ol>
            {ACROSS.map((cl, i) => (
              <li
                key={i}
                ref={(el) => { clueRefs.current[0][i] = el; }}
                className={dir === "across" && i === activeAcrossIdx ? "active" : ""}
                onClick={() => {
                  setDir("across");
                  focusCell(cl.row, 0);
                }}
              >
                <span className="n">{cl.n}.</span>
                <span>{cl.clue}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h5>Down</h5>
          <ol>
            {DOWN.map((cl, i) => (
              <li
                key={i}
                ref={(el) => { clueRefs.current[1][i] = el; }}
                className={dir === "down" && i === activeDownIdx ? "active" : ""}
                onClick={() => {
                  setDir("down");
                  focusCell(0, cl.col);
                }}
              >
                <span className="n">{cl.n}.</span>
                <span>{cl.clue}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function Puzzles({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-num">Puzzles</div>
            <h2 className="section-title">A warm-up <em>mini</em>.</h2>
          </div>
          <div className="section-kicker">
            {standalone
              ? "I tinker with crosswords on the side, often themed around linguistics or energy. They're mostly minis, with a couple of larger ones below."
              : "I tinker with crosswords on the side, often themed around linguistics or energy. They're mostly minis, with a couple of larger ones on the puzzles page."}
          </div>
        </div>
        <Crossword />
        {!standalone && (
          <div className="puzzle-footer">
            <Link href="/puzzles" className="puzzle-more-btn">
              More puzzles →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
