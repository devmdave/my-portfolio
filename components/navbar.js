"use client";
import React, { useState } from "react";
import { The_Nautigal } from "next/font/google";

const nautigal = The_Nautigal({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.35s ease-out;
        }
      `}</style>

      <nav className="backdrop-blur-xl bg-white/20 sticky top-0 z-50 shadow-md border-b border-white/20 p-4">
        
        {/* ⭐ DESKTOP FLEX LAYOUT FIXED */}
        <div className="flex items-center justify-between">
          
          {/* LEFT — LOGO */}
          <div className="flex-1">
            <a href="/my-portfolio">
              <h1
                className={`${nautigal.className} text-6xl text-slate-700 hover:text-[#D5C455] transition-all duration-700`}
              >
                &lt;m.dev/&gt;
              </h1>
            </a>
          </div>

          {/* RIGHT — DESKTOP MENU */}
          <div className="hidden md:flex flex-1 justify-end">
            <ul className="uppercase text-xs flex space-x-10 text-slate-700 font-bold">
              <li>
                <a className="hover:text-slate-600" href="/my-portfolio/about">About Me</a>
              </li>
              <li>
                <a className="hover:text-slate-600" href="/my-portfolio/projects">Projects</a>
              </li>
              <li>
                <a className="hover:text-slate-600" href="/my-portfolio/certificates">Certificates</a>
              </li>
              <li>
                <a className="hover:text-slate-600" href="/my-portfolio/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700"
          >
            {!open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

        </div>

        {/* ⭐ MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 backdrop-blur-2xl border border-white/30 rounded-xl p-4 animate-slideDown">
            <ul className="flex flex-row justify-center items-center space-x-3 font-bold uppercase">
              <li>
                <a href="/my-portfolio/about"
                  className="bg-slate-700 text-white px-4 py-2 rounded-full text-xs hover:bg-slate-600 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/my-portfolio/projects"
                  className="bg-slate-700 text-white px-4 py-2 rounded-full text-xs hover:bg-slate-600 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="/my-portfolio/certificates"
                  className="bg-slate-700 text-white px-4 py-2 rounded-full text-xs hover:bg-slate-600 transition">
                  Certificates
                </a>
              </li>

              <li>
                <a href="/my-portfolio/contact"
                  className="bg-slate-700 text-white px-4 py-2 rounded-full text-xs hover:bg-slate-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

      </nav>
    </>
  );
};

export default Navbar;