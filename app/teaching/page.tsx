"use client";
import { Nav } from "../components/Hero";
import { Timeline } from "../components/Timeline";
import { Teaching } from "../components/Teaching";
import { Contact } from "../components/Contact";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <Timeline />
      <Teaching />
      <Contact />
    </>
  );
}
