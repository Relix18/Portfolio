import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const fira = Fira_Code({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relix",
  description: "This is my portfolio",
  keywords: ["Relix", "Portfolio", "MERN", "Developer"],
  icons: {
    icon: "../assets/tech-guy.png",
  },
  openGraph: {
    title: "Relix",
    description: "This is my portfolio",
    url: "https://relix.vercel.app",
    images: [
      "https://res.cloudinary.com/dkjnrcbib/image/upload/v1728059959/portfolio/eikbfptmb6e56gjeogc3.png",
    ],
  },

  twitter: {
    title: "Relix",
    description: "This is my portfolio",
    images: [
      "https://res.cloudinary.com/dkjnrcbib/image/upload/v1728059959/portfolio/eikbfptmb6e56gjeogc3.png",
    ],
    card: "summary_large_image",
  },
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
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #31b6c2",
                padding: "16px",
                color: "#fff",
                backgroundColor: "#0A1415",
              },
            }}
          />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
