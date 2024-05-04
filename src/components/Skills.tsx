import React from "react";
import { Border } from "./ui/moving-border";
import CardSkill from "./CardSkill";
import Vector from "@/assets/tech-guy.png";
import javascript from "@/assets/JavaScript.png";
import mongo from "@/assets/mongodb.png";
import react from "@/assets/react.png";
import next from "@/assets/next.png";
import node from "@/assets/node.png";
import typescript from "@/assets/Typescript.png";
import tailwind from "@/assets/tailwind.png";
import sass from "@/assets/sass.png";
import mui from "@/assets/mui.png";
import redux from "@/assets/redux.png";

const Skills = () => {
  return (
    <div
      id="skills"
      className="md:py-28 py-8 w-10/12 md:w-3/4  flex flex-col items-center mx-auto"
    >
      <Border borderRadius="1.75rem" className="text-2xl">
        My Skills
      </Border>
      <div className=" w-full mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-8 md:gap-28">
        <CardSkill img={javascript} />
        <CardSkill img={typescript} />
        <CardSkill img={react} />
        <CardSkill img={next} />
        <CardSkill img={redux} />
        <CardSkill img={node} />
        <CardSkill img={mongo} />
        <CardSkill img={sass} />
        <CardSkill img={tailwind} />
        <CardSkill img={mui} />
      </div>
    </div>
  );
};

export default Skills;
