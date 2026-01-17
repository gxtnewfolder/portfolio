'use client';

import Home from "./components/Home";
import StatsSection from "./components/StatsSection";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <>
      <Home />
      <StatsSection />
      <Skill />
      <Education />
      <Work />
      <Contact />
    </>
  );
}
