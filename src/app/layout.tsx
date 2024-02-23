import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

const fira = Fira_Code({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <div className="relative w-full flex items-center justify-center bg-[#0A1415] flex-col">
          <Navbar />
          {children}
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
      </body>
    </html>
  );
}