import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  const words = `I'm Relix, a dedicated MERN Stack Developer driven by a passion for
    crafting exceptional digital experiences. With a strong foundation in
    JavaScript and expertise in MongoDB, Express.js, React.js, and
    Node.js, I thrive in the dynamic world of full-stack development. From
    designing robust databases to implementing sleek user interfaces, I
    approach each project with meticulous attention to detail and a
    commitment to excellence. Continuously learning and adapting to new
    technologies, I'm ready to tackle any challenge and contribute
    innovative solutions to propel web development forward.`;

  const words2 = `The dynamic nature of the tech industry motivates me to stay
    curiouys and continuously learning. I'm eager to take on new
    challenges and stay up-to-date with the latest industry trends. As a
    MERN Stack Developer, I'm passionate about staying up-to-date with
    the latest technologies and frameworks.`;
  return (
    <div
      id="about"
      className="shadow-[0_0_5px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-col mt-10"
    >
      <div className="md:w-3/4 w-11/12 my-8 md:my-28">
        <h1 className="text-3xl flex justify-center">About Me</h1>
        <TextGenerateEffect words={words} />

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
