"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className="fixed w-full bg-slate-700/20 backdrop-blur z-[99] top-0">
      <div
        className={cn(
          "hidden md:flex font-thin space-x-12 w-3/4 py-2 inset-x-0 justify-between mx-auto ",
          className
        )}
      >
        <div>
          <h1 className="text-2xl text-[#3EC642]">{"<Relix/>"}</h1>
        </div>
        <div className="w-1/2 flex justify-between">
          <Link
            href="/"
            className="text-xl text-white transition-all relative after:bottom-0 after:transition after:duration-200 after:ease-out after:left-0 after:absolute after:w-full after:h-0.5 after:scale-0 after:bg-[#3EC642] hover:after:scale-100"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="text-xl text-white transition-all relative after:bottom-0 after:transition after:duration-200 after:ease-out after:left-0 after:absolute after:w-full after:h-0.5 after:scale-0 after:bg-[#3EC642] hover:after:scale-100"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-xl text-white transition-all relative after:bottom-0 after:transition after:duration-200 after:ease-out after:left-0 after:absolute after:w-full after:h-0.5 after:scale-0 after:bg-[#3EC642] hover:after:scale-100"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-xl text-white transition-all relative after:bottom-0 after:transition after:duration-200 after:ease-out after:left-0 after:absolute after:w-full after:h-0.5 after:scale-0 after:bg-[#3EC642] hover:after:scale-100"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-xl text-white transition-all relative after:bottom-0 after:transition after:duration-200 after:ease-out after:left-0 after:absolute after:w-full after:h-0.5 after:scale-0 after:bg-[#3EC642] hover:after:scale-100"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
