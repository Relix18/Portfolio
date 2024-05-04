import React from "react";
import projects from "@/app/data.json";
import { Border } from "./ui/moving-border";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Project = () => {
  return (
    <div
      id="projects"
      className="bg-[#132324] w-full flex justify-center overflow-hidden"
    >
      <div className="w-3/4  py-8 md:py-16 flex justify-center items-center flex-col">
        <Border borderRadius="1.75rem" color="green" className="text-2xl">
          Projects
        </Border>
        <div className="h-[30rem] rounded-md flex flex-col bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          {/* <InfiniteMovingCards
            items={projects.projects}
            speed="normal"
            pauseOnHover={true}
          /> */}

          <h1 className="mt-20 text-xl md:text-2xl">Projects Coming Soon...</h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
