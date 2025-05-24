"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full bg-slate-700/20 backdrop-blur z-[99] top-0 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={cn(
          "hidden md:flex font-thin space-x-12 w-3/4 max-w-[1080px] py-2 inset-x-0 justify-between mx-auto ",
          className
        )}
      >
        <div>
          <h1 className="text-2xl text-[#3EC642]">{"<Relix/>"}</h1>
        </div>
        <div className="w-1/2 flex gap-2 justify-between">
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
