"use client";

import React from "react";
import data from "@/app/data.json";
import { Border } from "./ui/moving-border";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { Spotlight } from "./ui/spotlight-new";

const Project = () => {
  return (
    <div
      id="projects"
      className="bg-[#132324] relative w-full flex justify-center overflow-hidden"
    >
      <Spotlight />
      <div className="w-3/4  py-8 md:py-16 flex justify-center items-center flex-col">
        <Border borderRadius="1.75rem" color="green" className="text-2xl">
          Projects
        </Border>
        <AnimatedTestimonials testimonials={data.projects} />
      </div>
    </div>
  );
};

export default Project;
