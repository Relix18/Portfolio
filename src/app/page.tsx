import Hero from "@/components/Hero";
import React from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { TracingBeam } from "@/components/ui/tracing-beam";

const page = () => {
  return (
    <div>
      <TracingBeam>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </TracingBeam>
    </div>
  );
};

export default page;
