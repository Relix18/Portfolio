"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed md:flex hidden font-thin space-x-12 w-3/4 top-2 inset-x-0 justify-end mx-auto z-50",
        className
      )}
    >
      <Link
        href="/"
        className="text-xl underline underline-offset-4 text-black dark:text-white"
      >
        Home
      </Link>

      <Link href="#about" className="text-xl text-black dark:text-white">
        About
      </Link>
      <Link href="#skills" className="text-xl text-black dark:text-white">
        Skills
      </Link>
      <Link href="#projects" className="text-xl text-black dark:text-white">
        Projects
      </Link>
      <Link href="#contact" className="text-xl text-black dark:text-white">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
