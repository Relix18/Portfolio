import Hero from "@/components/Hero";
import React from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default page;
