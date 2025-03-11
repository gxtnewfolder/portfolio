'use client';

import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import Education from "./components/Education";
// import Skills from "./components/Skills";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <div className="bg-[#111111]">
      {/* <Navbar /> */}
      <Home />
      <Skill />
      <Education />
      {/* <Skills /> */}
      <Work />
      <Contact />
    </div>
  );
}
