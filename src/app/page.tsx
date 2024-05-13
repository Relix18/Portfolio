import Hero from "@/components/Hero";
import React from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { TracingBeam } from "@/components/ui/tracing-beam";

const page = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default page;
