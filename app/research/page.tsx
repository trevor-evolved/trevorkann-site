"use client";
import { Nav } from "../components/Hero";
import { Viz } from "../components/Viz";
import { Publications } from "../components/Publications";

export default function ResearchPage() {
  return (
    <>
      <Nav lightBg />
      <Viz />
      <Publications />
    </>
  );
}
