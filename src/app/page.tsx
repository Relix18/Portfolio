import Hero from "@/components/Hero";
import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

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
