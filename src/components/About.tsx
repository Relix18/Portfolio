import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Border } from "./ui/moving-border";

const About = () => {
  const words = `I’m Relix, an enthusiastic Full Stack Developer who enjoys building amazing digital experiences from scratch. With expertise in front-end and back-end technologies, I develop software with a user-centric, scalable, and responsive web app.
From the database schema to user interface, I pride myself in being detail oriented and have in-depth knowledge about the software architecture. I am always adapting, learning, and exploring new technology as the adage goes, "The only constant is change!" I am ready to take on any level of challenge or problem complexity, and I am looking to deliver clean, maintainable code and solutions that have real-world impact.`;

  const words2 = `I'm excited about the fact that the tech industry is constantly changing. I'm always looking for new challenges and ways to grow, and I enjoy navigating different tools, frameworks, and best practices. As a Full Stack Developer, I love using the latest technologies to build fast, modern, and scalable web solutions.`;
  return (
    <div
      id="about"
      className="shadow-[0_0_5px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-col mt-10"
    >
      <div className="md:w-3/4 md:max-w-[1080px] w-11/12 py-8 md:py-14">
        <div className="flex justify-center">
          <Border borderRadius="1.75rem" className="text-2xl">
            About Me
          </Border>
        </div>
        <TextGenerateEffect className="mt-10" words={words} />

        <div className=" my-10">
          <h2 className="text-xl font-semibold my-4">
            Continuous Learning and Growth:
          </h2>
          <TextGenerateEffect words={words2} />
        </div>
      </div>
    </div>
  );
};

export default About;
