"use client";

import React, { useRef } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Mail, Github, Linkedin } from "lucide-react";
import { RiDiscordLine } from "react-icons/ri";
import Link from "next/link";
import submit from "@/actions/action";
import { isEmail } from "validator";
import { toast } from "react-hot-toast";

const Contact = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div
      id="contact"
      className="my-8 md:my-0 h-full md:h-[40rem] w-full  bg-neutral-950 relative flex items-center justify-center flex-col antialiased"
    >
      <h1 className="text-3xl md:text-5xl z-10 mb-8">
        Let&#39;s Work Together
      </h1>
      <div className="w-11/12  md:w-3/4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-2/3 p-4 ">
          <form
            ref={ref}
            className="flex items-center justify-center flex-col"
            action={async (formData) => {
              if (!isEmail(formData.get("email") as string)) {
                return toast.error("Please enter a valid email");
              }
              await submit(formData);
              toast.success("Email sent successfully");
              ref.current?.reset();
            }}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="rounded-lg p-3 border border-neutral-800 focus:ring-1 focus:shadow-[0_0_10px_0px_rgb(62,102,193)] outline-none  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              className="rounded-lg p-3 border border-neutral-800 focus:ring-1 focus:shadow-[0_0_10px_0px_rgb(62,102,193)] outline-none w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              className="resize-none p-3 h-40 rounded-lg border border-neutral-800 focus:ring-1 focus:shadow-[0_0_10px_0px_rgb(62,102,193)] outline-none  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
              required
            />
            <button
              type="submit"
              className="rounded-lg p-3 w-1/3 relative z-10 mt-4  bg-[#0d7680] hover:shadow-[0_0_4px_0px_rgb(62,102,193)]"
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center md:grid grid-cols-2 gap-4 md:gap-8 py-8 z-10">
          <a
            href="https://github.com/Relix18"
            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center aspect-square bg-[#0a1415] shadow-[0_0_10px_0px_rgb(62,102,193)] rounded-full"
            target="_blank"
          >
            <Github className="w-full h-full p-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/relixcoding/"
            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center aspect-square bg-[#0a1415] shadow-[0_0_10px_0px_rgb(62,102,193)] rounded-full"
            target="_blank"
          >
            <Linkedin className="w-full h-full p-3" />
          </a>
          <a
            href="mailto:relix049@gmail.com"
            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center aspect-square bg-[#0a1415] shadow-[0_0_10px_0px_rgb(62,102,193)] rounded-full"
            target="_blank"
          >
            <Mail className="w-full h-full p-3" />
          </a>
          <a
            href="https://discord.com/users/440030380888817684"
            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center aspect-square bg-[#0a1415] shadow-[0_0_10px_0px_rgb(62,102,193)] rounded-full"
            target="_blank"
          >
            <RiDiscordLine className="w-full h-full p-3" />
          </a>
        </div>
      </div>
      <BackgroundBeams className="bg-[#0A1415]" />
    </div>
  );
};

export default Contact;
