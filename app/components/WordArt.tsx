"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const PALETTE = ["#FFC000", "#6BA642", "#FFD852", "#8CCF5F", "#C94B22", "#2F5F2B"];

type AnimPt = {
  tx: number; ty: number; // letter-shape target
  cx: number; cy: number; // current drawn position
  vx: number; vy: number; // velocity (scatter phase)
  c: string;
  ph: number;             // phase offset for stable oscillation
};

function buildPts(canvas: HTMLCanvasElement, text: string): AnimPt[] {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  const off = document.createElement("canvas");
  off.width = w; off.height = h;
  const octx = off.getContext("2d")!;
  const fs = Math.min(w * 0.18, 280);
  octx.fillStyle = "white";
  octx.font = `800 ${fs}px Sora, sans-serif`;
  octx.textAlign = "center"; octx.textBaseline = "middle";
  octx.fillText(text.toLowerCase(), w / 2, h / 2);
  const img = octx.getImageData(0, 0, w, h).data;
  const pts: AnimPt[] = [];
  const step = 6;
  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      if (img[(y * w + x) * 4 + 3] > 128) {
        pts.push({
          tx: x + (Math.random() - 0.5) * 2,
          ty: y + (Math.random() - 0.5) * 2,
          cx: x, cy: y,
          vx: 0, vy: 0,
          c: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          ph: Math.random() * Math.PI * 2,
        });
      }
    }
  }
  return pts;
}

async function fetchRelated(word: string): Promise<string> {
  const clean = word.trim().toLowerCase();
  try {
    const [synRes, mlRes] = await Promise.all([
      fetch(`https://api.datamuse.com/words?rel_syn=${encodeURIComponent(clean)}&max=12`),
      fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(clean)}&max=12`),
    ]);
    const [syn, ml] = await Promise.all([synRes.json(), mlRes.json()]);
    const combined: { word: string }[] = [...syn, ...ml];
    const options = combined
      .filter((d) => d.word !== clean && !d.word.includes(" ") && d.word.length <= 14)
      .map((d) => d.word);
    const unique = [...new Set(options)];
    if (unique.length > 0) return unique[Math.floor(Math.random() * Math.min(unique.length, 8))];
  } catch {
    // fall through
  }
  return word;
}

export function WordArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [inputWord, setInputWord] = useState("power");

  const ptsRef = useRef<AnimPt[]>([]);
  const phaseRef = useRef<"stable" | "scatter" | "reform">("stable");
  const currentWordRef = useRef("power");
  const tRef = useRef(0);
  const rafRef = useRef(0);
  const scatterActiveRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const w = canvas!.clientWidth, h = canvas!.clientHeight;
      canvas!.width = w * dpr; canvas!.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const fresh = buildPts(canvas!, currentWordRef.current);
      fresh.forEach((p) => { p.cx = p.tx; p.cy = p.ty; });
      ptsRef.current = fresh;
      phaseRef.current = "stable";
    }
    resize();
    window.addEventListener("resize", resize);

    // Initialize pts at target positions
    ptsRef.current = buildPts(canvas, currentWordRef.current);
    ptsRef.current.forEach((p) => { p.cx = p.tx; p.cy = p.ty; });

    function frame() {
      const w = canvas!.clientWidth, h = canvas!.clientHeight;
      // Semi-transparent fill creates the trail effect
      ctx.fillStyle = "rgba(6, 36, 43, 0.18)";
      ctx.fillRect(0, 0, w, h);
      tRef.current += 0.012;
      const t = tRef.current;
      const phase = phaseRef.current;

      for (const p of ptsRef.current) {
        if (phase === "stable") {
          p.cx = p.tx + Math.sin(t + p.ph) * 2.2;
          p.cy = p.ty + Math.cos(t * 1.3 + p.ph) * 2.2;
        } else if (phase === "scatter") {
          p.vx *= 1.06;
          p.vy *= 1.06;
          p.cx += p.vx;
          p.cy += p.vy;
        } else {
          // reform: ease toward target
          p.cx += (p.tx - p.cx) * 0.07;
          p.cy += (p.ty - p.cy) * 0.07;
        }
        ctx.beginPath();
        ctx.arc(p.cx, p.cy, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.shadowColor = p.c;
        ctx.shadowBlur = 6;
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleInput = useCallback((val: string) => {
    const word = val.slice(0, 16) || " ";
    setInputWord(word);
    currentWordRef.current = word;
    const canvas = canvasRef.current;
    if (!canvas) return;
    scatterActiveRef.current = false;
    const fresh = buildPts(canvas, word);
    // Fly in from edges on manual word change too
    const w = canvas.clientWidth, h = canvas.clientHeight;
    fresh.forEach((p) => {
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) { p.cx = Math.random() * w; p.cy = -20; }
      else if (edge === 1) { p.cx = w + 20; p.cy = Math.random() * h; }
      else if (edge === 2) { p.cx = Math.random() * w; p.cy = h + 20; }
      else { p.cx = -20; p.cy = Math.random() * h; }
    });
    ptsRef.current = fresh;
    phaseRef.current = "reform";
    setTimeout(() => { phaseRef.current = "stable"; }, 1100);
  }, []);

  const handleScatter = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas || scatterActiveRef.current) return;
    scatterActiveRef.current = true;

    const w = canvas.clientWidth, h = canvas.clientHeight;
    const cx = w / 2, cy = h / 2;

    // Give each particle an outward velocity from center
    ptsRef.current.forEach((p) => {
      const dx = p.tx - cx || 1, dy = p.ty - cy || 1;
      const len = Math.sqrt(dx * dx + dy * dy);
      const speed = 5 + Math.random() * 7;
      p.vx = (dx / len) * speed + (Math.random() - 0.5) * 3;
      p.vy = (dy / len) * speed + (Math.random() - 0.5) * 3;
    });
    phaseRef.current = "scatter";

    // Fetch related word and wait at least 700ms for the scatter
    const [newWord] = await Promise.all([
      fetchRelated(currentWordRef.current),
      new Promise<void>((res) => setTimeout(res, 700)),
    ]);

    if (!scatterActiveRef.current) return; // cancelled by user typing

    currentWordRef.current = newWord;
    setInputWord(newWord);

    const newPts = buildPts(canvas, newWord);
    // Start new particles from random edge positions
    newPts.forEach((p) => {
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) { p.cx = Math.random() * w; p.cy = -20; }
      else if (edge === 1) { p.cx = w + 20; p.cy = Math.random() * h; }
      else if (edge === 2) { p.cx = Math.random() * w; p.cy = h + 20; }
      else { p.cx = -20; p.cy = Math.random() * h; }
      p.vx = 0; p.vy = 0;
    });

    ptsRef.current = newPts;
    phaseRef.current = "reform";
    setTimeout(() => {
      phaseRef.current = "stable";
      scatterActiveRef.current = false;
    }, 1100);
  }, []);

  return (
    <section className="section section-cream" id="play">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-num">Constellation</div>
            <h2 className="section-title">The <em>power</em> of words.</h2>
          </div>
          <div className="section-kicker">
            Type a word. It becomes a constellation. Hit re-scatter and it chases
            a synonym. See how far from <em>power</em> you can wander.
          </div>
        </div>

        <div className="wordart-wrap">
          <div className="wordart-input">
            <input
              value={inputWord}
              onChange={(e) => handleInput(e.target.value)}
              placeholder="type a word…"
            />
            <button onClick={handleScatter}>Re-scatter</button>
          </div>
          <canvas ref={canvasRef} className="wordart-canvas" />
          <div style={{ position: "absolute", bottom: 20, right: 24, color: "rgba(255,255,255,.4)", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: ".1em" }}>
            GENERATIVE · 2026
          </div>
        </div>
      </div>
    </section>
  );
}
