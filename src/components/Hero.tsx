import Vector from "@/assets/tech-guy.png";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Hero() {
  const word = [
    {
      text: "MERN",
    },
    {
      text: "Stack",
    },
    {
      text: "Developer.",
      className: "text-[#3EC642]",
    },
  ];

  return (
    <div className="flex md:w-3/4 w-11/12  items-center justify-center flex-col-reverse md:flex-row my-0 md:my-8 md:items-center md:justify-center antialiased bg-grid-white/[0.02] mx-auto overflow-hidden">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative"></div>
      <Spotlight className="-top-40 left-0 md:left-10 md:top-10" fill="green" />

      <div className="md:w-3/5 w-full">
        <p className="md:text-3xl text-xl font-semibold">Hi, I&#39;m</p>
        <h1 className="md:text-9xl text-6xl -ml-1 md:-ml-2">Relix</h1>
        <TypewriterEffectSmooth words={word} />
        <p className="mt-8 text-lg font-thin">
          If you&#39;re looking for MERN Stack Developer who is not just
          proficient but passionate about turning concepts into reality,
          let&#39;s connect! I&#39;m always excited about new opportunities and
          challenges that push the boundaries of what&#39;s possible in web
          development.
        </p>
        <p className="mt-8 text-lg font-thin"></p>
      </div>
      <div className="md:w-2/5 w-full mt-12 flex flex-col items-center justify-center overflow-hidden rounded-[8rem]">
        <Image className="w-full relative" src={Vector} alt="Vector" />
        <div className="w-[40rem] relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full md:h-[8rem] h-[4rem] mb-8 md:mb-0"
            particleColor="#3EC642"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-transparent"></div>
        </div>
      </div>
    </div>
  );
}
