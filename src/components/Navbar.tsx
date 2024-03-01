"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed md:flex hidden font-thin space-x-12 w-3/4 top-2 inset-x-0 justify-end mx-auto z-50 ",
        className
      )}
    >
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
  );
};

export default Navbar;
