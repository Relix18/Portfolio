"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Mail, Instagram, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
  };
  return (
    <div
      id="contact"
      className="my-8 md:my-0 h-full md:h-[40rem] w-full bg-neutral-950 relative flex items-center justify-center flex-col antialiased"
    >
      <h1 className="text-3xl md:text-5xl z-10 mb-8">Let's Work Together</h1>
      <div className="w-11/12 md:w-3/4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-2/3 p-4 ">
          <form
            className="flex items-center justify-center flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setMessage({ ...message, name: e.target.value })}
              className="rounded-lg p-3 border border-neutral-800 focus:ring-1 focus:shadow-[0_0_10px_0px_rgb(62,102,193)] outline-none  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            />
            <input
              type="text"
              placeholder="Your Email"
              onChange={(e) =>
                setMessage({ ...message, email: e.target.value })
              }
              className="rounded-lg p-3 border border-neutral-800 focus:ring-1 focus:shadow-[0_0_10px_0px_rgb(62,102,193)] outline-none w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            />
            <textarea
              placeholder="Message"
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
              className="resize-none p-3 h-40 rounded-lg border border-neutral-800 focus:ring-1 focus:shadow-[0_0_10px_0px_rgb(62,102,193)] outline-none  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            />
            <button
              type="submit"
              className="rounded-lg p-3 w-1/3 relative z-10 mt-4  bg-[#31b6c2] shadow-[0_0_10px_0px_rgb(62,102,193)]"
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center md:grid grid-cols-2 gap-4 md:gap-8 py-8 z-10">
          <Link
            href="https://github.com/Relix18"
            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center aspect-square bg-[#0a1415] shadow-[0_0_10px_0px_rgb(62,102,193)] rounded-full"
          >
            <Github className="w-full h-full p-3" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/relixcoding/"
            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center aspect-square bg-[#0a1415] shadow-[0_0_10px_0px_rgb(62,102,193)] rounded-full"
          >
            <Linkedin className="w-full h-full p-3" />
          </Link>
          <Link
            href="mailto:relix049@gmail.com"
            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center aspect-square bg-[#0a1415] shadow-[0_0_10px_0px_rgb(62,102,193)] rounded-full"
          >
            <Mail className="w-full h-full p-3" />
          </Link>
          <Link
            href="https://www.instagram.com/ig_relix/"
            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center aspect-square bg-[#0a1415] shadow-[0_0_10px_0px_rgb(62,102,193)] rounded-full"
          >
            <Instagram className="w-full h-full p-3" />
          </Link>
        </div>
      </div>
      <BackgroundBeams className="bg-[#0A1415]" />
    </div>
  );
};

export default Contact;
