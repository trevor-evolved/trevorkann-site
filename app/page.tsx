"use client";
import { useEffect } from "react";
import { Nav, Hero, NowStrip } from "./components/Hero";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Teaching } from "./components/Teaching";
import { Intersection } from "./components/Intersection";
import { Blog } from "./components/Blog";
import { Puzzles } from "./components/Puzzles";
import { Viz } from "./components/Viz";
import { WordArt } from "./components/WordArt";
import { Publications } from "./components/Publications";
import { Contact } from "./components/Contact";

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <NowStrip />
      <About />
      <Timeline />
      <Teaching preview />
      <Intersection />
      <Blog />
      <Puzzles />
      <Viz />
      <WordArt />
      <Publications />
      <Contact />
    </>
  );
}
