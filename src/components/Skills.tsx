import React from "react";
import { Border } from "./ui/moving-border";
import Image from "next/image";
import Vector from "@/assets/skills.png";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { ShootingStars } from "./ui/shooting-stars";

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: (
      <FaHtml5 className="w-full hover:text-orange-500 hover:bg-white h-full" />
    ),
  },
  {
    id: 2,
    name: "CSS",
    icon: (
      <FaCss3 className="w-full hover:text-sky-600 hover:bg-white h-full" />
    ),
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <SiJavascript className="w-full hover:text-yellow-500 h-full" />,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: <SiTypescript className="w-full hover:text-blue-500 h-full" />,
  },
  {
    id: 5,
    name: "React",
    icon: (
      <FaReact className="w-full hover:text-sky-500 hover:bg-white h-full" />
    ),
  },
  {
    id: 6,
    name: "Next",
    icon: (
      <SiNextdotjs className="w-full hover:text-black hover:bg-white h-full" />
    ),
  },
  {
    id: 7,
    name: "TailwindCSS",
    icon: (
      <SiTailwindcss className="w-full hover:text-sky-500 hover:bg-white h-full" />
    ),
  },
  {
    id: 8,
    name: "Nodejs",
    icon: (
      <SiNodedotjs className="w-full hover:text-green-500 hover:bg-white h-full" />
    ),
  },
  {
    id: 9,
    name: "Express",
    icon: (
      <SiExpress className="w-full hover:text-black hover:bg-white h-full" />
    ),
  },
  {
    id: 10,
    name: "MongoDB",
    icon: (
      <SiMongodb className="w-full hover:text-green-500 hover:bg-white h-full" />
    ),
  },
  {
    id: 11,
    name: "Postgresql",
    icon: (
      <BiLogoPostgresql className="w-full hover:text-blue-500 hover:bg-white h-full" />
    ),
  },
  {
    id: 12,
    name: "Prisma",
    icon: (
      <SiPrisma className="w-full hover:text-black hover:bg-white h-full" />
    ),
  },
  {
    id: 13,
    name: "Graphql",
    icon: (
      <SiGraphql className="w-full hover:text-fuchsia-600 hover:bg-white h-full" />
    ),
  },
  {
    id: 14,
    name: "Redis",
    icon: (
      <SiRedis className="w-full hover:text-white hover:bg-red-600 h-full" />
    ),
  },
  {
    id: 15,
    name: "Git",
    icon: (
      <SiGit className="w-full hover:text-orange-500 hover:bg-white h-full" />
    ),
  },
];

const Skills = () => {
  return (
    <div id="skills" className="h-[40rem] relative flex overflow-hidden">
      <div className="z-50 md:py-14 py-8 w-10/12 md:w-3/4  flex flex-col items-center mx-auto">
        <Border borderRadius="1.75rem" className="text-2xl">
          My Skills
        </Border>
        <div className="w-full mt-10 flex items-center justify-between">
          <div className="w-full lg:w-1/2 items-center hidden md:flex px-10">
            <Image src={Vector} alt={""} className="w-full  aspect-square" />
          </div>
          <div className="w-full  lg:w-1/2 grid grid-cols-3  md:grid-cols-4 gap-4 lg:gap-10">
            <AnimatedTooltip items={skills} />
          </div>
        </div>
      </div>
      <ShootingStars />
    </div>
  );
};

export default Skills;
