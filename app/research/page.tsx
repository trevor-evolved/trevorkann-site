"use client";
import { Nav } from "../components/Hero";
import { Viz } from "../components/Viz";
import { Publications } from "../components/Publications";
import { Contact } from "../components/Contact";

export default function ResearchPage() {
  return (
    <>
      <Nav lightBg />
      <Viz />
      <Publications />
      <Contact />
    </>
  );
}
