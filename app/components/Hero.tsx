"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MORPH_WORDS, NOW_ITEMS } from "../data";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w: number, h: number, raf: number;
    const colors = ["rgba(107,166,66,", "rgba(255,192,0,", "rgba(140,207,95,", "rgba(255,216,82,"];
    type Pt = { x: number; y: number; vx: number; vy: number; r: number; c: string; a: number };
    let pts: Pt[] = [];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas!.clientWidth; h = canvas!.clientHeight;
      canvas!.width = w * dpr; canvas!.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = [];
      const count = Math.min(80, Math.floor((w * h) / 16000));
      for (let i = 0; i < count; i++) {
        pts.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
          r: Math.random() * 1.8 + 0.6,
          c: colors[Math.floor(Math.random() * colors.length)],
          a: Math.random() * 0.6 + 0.25,
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.strokeStyle = `rgba(150,181,192,${(1 - d / 140) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + p.a + ")";
        ctx.shadowColor = p.c + "1)"; ctx.shadowBlur = 8; ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    resize(); tick();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas className="hero-canvas" ref={canvasRef} />;
}

function Morph() {
  const [i, setI] = useState(0);
  const [out, setOut] = useState<number | null>(null);
  useEffect(() => {
    const id = setInterval(() => {
      setOut(i);
      setI((v) => (v + 1) % MORPH_WORDS.length);
      setTimeout(() => setOut(null), 550);
    }, 2600);
    return () => clearInterval(id);
  }, [i]);
  return (
    <span className="hero-morph" style={{ minWidth: "14ch" }}>
      {MORPH_WORDS.map((w, idx) => {
        let cls = "word " + w.cls;
        if (idx === i) cls += " in";
        else if (idx === out) cls += " out";
        return <span key={idx} className={cls}>{w.text}.</span>;
      })}
    </span>
  );
}

export function Nav({ lightBg = false }: { lightBg?: boolean }) {
  const [scrolled, setScrolled] = useState(lightBg);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const home = pathname === "/";
  const a = (anchor: string) => home ? anchor : `/${anchor}`;

  useEffect(() => {
    const onScroll = () => setScrolled(lightBg || window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lightBg]);

  const close = () => setMenuOpen(false);

  const cls = `nav ${scrolled ? "scrolled" : "on-dark"}`;
  return (
    <nav className={cls}>
      <div className="nav-inner">
        <a href="/" className="brand">
          <span className="brand-mark">TK</span>
          <span>Trevor Kann</span>
        </a>
        <div className="nav-links">
          <a href={a("#about")}>About</a>
          <a href={a("#intersection")}>Intersection</a>
          <a href={a("#blog")}>Blog</a>
          <a href="/about">Work & Teaching <span className="nav-arrow">↗</span></a>
          <a href="/research">Research <span className="nav-arrow">↗</span></a>
          <a href="/puzzles">Puzzles <span className="nav-arrow">↗</span></a>
        </div>
        <a href={a("#contact")} className="nav-cta">Get in touch</a>
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      {menuOpen && (
        <div className="nav-mobile-menu">
          <a href={a("#about")}        onClick={close}>About</a>
          <a href={a("#intersection")} onClick={close}>Intersection</a>
          <a href={a("#blog")}         onClick={close}>Blog</a>
          <a href="/about"             onClick={close}>Work & Teaching <span className="nav-arrow">↗</span></a>
          <a href="/research"          onClick={close}>Research <span className="nav-arrow">↗</span></a>
          <a href="/puzzles"           onClick={close}>Puzzles <span className="nav-arrow">↗</span></a>
          <a href={a("#contact")}      onClick={close} className="nav-mobile-cta">Get in touch</a>
        </div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg">
        <ParticleField />
        <div className="hero-vignette" />
      </div>
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="dot" />
          <span>San Diego · São Paulo · Los Angeles · Madrid · Seoul</span>
        </div>
        <h1 className="hero-h1">
          Trevor Kann<span className="accent">.</span>
        </h1>
        <div className="hero-morph-wrap">
          <span className="static">I&apos;m</span>
          <Morph />
        </div>
        <p className="hero-lede">
          Applied linguist by training, energy strategist by trade. I&apos;m
          Director of Education at <em>Evolved Energy Research</em> — where I
          translate modeling work for the people who need to read it, and try to
          keep the seminar table and the grid in the same conversation.
        </p>
        <div className="hero-actions">
          <a href="#intersection" className="btn btn-primary">Language ↔ Energy</a>
          <a href="#work" className="btn btn-ghost">The CV tour →</a>
        </div>
        <div className="hero-strip">
          <div><div className="n">20+</div><div className="l">Yrs teaching</div></div>
          <div><div className="n">1000+</div><div className="l">Students</div></div>
          <div><div className="n">4</div><div className="l">Continents</div></div>
          <div><div className="n">too many</div><div className="l">Student papers graded</div></div>
        </div>
      </div>
    </header>
  );
}

export function NowStrip() {
  const row = [...NOW_ITEMS, ...NOW_ITEMS];
  return (
    <div className="now-strip">
      <div className="now-row">
        {row.map((t, i) => (
          <span key={i}>
            <span className="d">●</span>
            Currently: {t}
          </span>
        ))}
      </div>
    </div>
  );
}
