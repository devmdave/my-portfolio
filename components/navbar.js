"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { The_Nautigal } from "next/font/google";

const nautigal = The_Nautigal({
  weight: ["400"],
  subsets: ["latin"],
});

const MENU = [
  { name: "About Me", href: "/my-portfolio/about" },
  { name: "Projects", href: "/my-portfolio/projects" },
  { name: "Certificates", href: "/my-portfolio/certificates" },
  { name: "Contact", href: "/my-portfolio/contact" },
];

const SocialIcons = ({ className = "w-5 h-5" }) => (
  <div className="flex gap-3 items-center">
    {/* GitHub */}
    <a
      href="https://github.com/devmdave"
      target="_blank"
      className="p-2 rounded-full hover:bg-white/10 transition"
    >
      <svg className={className} fill="black" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8..." />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/madhav-dave-52b552379/"
      target="_blank"
      className="p-2 rounded-full hover:bg-white/10 transition"
    >
      <svg className={className} fill="black" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0..." />
      </svg>
    </a>

    {/* StackOverflow */}
    <a
      href="https://stackoverflow.com/users/23113631/dev-mdave"
      target="_blank"
      className="p-2 rounded-full hover:bg-white/10 transition"
    >
      <svg className={className} fill="black" viewBox="0 0 16 16">
        <path d="M12.412 14.572V10.29..." />
      </svg>
    </a>
  </div>
);

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile menu
  const [socialOpen, setSocialOpen] = useState(false); // floating dropdown
  const dropdownRef = useRef(null);

  // Close socials when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSocialOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <style>{`
        .active-underline {
          position: relative;
        }
        .active-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background-color: #1e293b;
          border-radius: 20px;
        }
      `}</style>

      <nav className="backdrop-blur-xl bg-white/20 sticky top-0 z-50 shadow-md border-b border-white/20 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <Link href="/my-portfolio">
            <h1
              className={`${nautigal.className} text-3xl md:text-4xl text-slate-700 hover:text-[#D5C455] transition`}
            >
              &lt;m.dev/&gt;
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-6 text-sm font-semibold text-slate-700">
              {MENU.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span
                      className={`cursor-pointer hover:text-slate-900 transition ${
                        pathname === item.href ? "active-underline" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}

              {/* Socials dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setSocialOpen(!socialOpen)}
                  className="hover:text-slate-900 transition"
                >
                  Socials
                </button>

                {/* floating glassmorphic box */}
                {socialOpen && (
                  <div className="absolute right-0 mt-2 w-44 p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-lg">
                    <p className="text-xs text-slate-500 mb-2">Find me on</p>
                    <SocialIcons className="w-5 h-5" />
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-3 bg-white/40 backdrop-blur-xl border border-white/30 rounded-xl p-4">
            <ul className="flex justify-center items-center gap-3 text-xs font-bold uppercase">
              {MENU.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span
                      onClick={() => setOpen(false)}
                      className="bg-slate-700 text-white px-4 py-2 rounded-full hover:bg-slate-600 transition"
                    >
                      {item.name.replace(" Me", "")}
                    </span>
                  </Link>
                </li>
              ))}

              <li>
                <button
                  onClick={() => setSocialOpen(!socialOpen)}
                  className="bg-slate-700 text-white px-4 py-2 rounded-full hover:bg-slate-600 transition"
                >
                  Socials
                </button>
              </li>
            </ul>

            {/* mobile social icons */}
            {socialOpen && (
              <div className="mt-3 bg-white/25 backdrop-blur-xl p-3 rounded-lg border border-white/20">
                <SocialIcons className="w-6 h-6" />
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;