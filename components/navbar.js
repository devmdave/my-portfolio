"use client";
import React, { useState } from "react";
import { The_Nautigal } from "next/font/google";

const nautigal = The_Nautigal({
  weight: ["400"],
  subsets: ["latin"],
});

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="hover:scale-[1.2] w-10 h-10 flex items-center justify-center rounded-xl border border-slate-500/30 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-100 transition-all duration-300 bg-white/5 backdrop-blur-sm"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      className="fill-current w-5 h-5"
    >
      {children}
    </svg>
  </a>
);



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      {/* ⭐ Smaller Navbar */}
      <nav className="backdrop-blur-xs mb-[10vh] sticky top-0 z-50 shadow-md border-b border-white/20 px-4 py-2">
        
        <div className="flex flex-row max-md:justify-between max-md:items-center md:justify-center md:items-center">
          
          {/* LEFT — LOGO (smaller now) */}
          <div className="ml-1 w-[30vw]">
            <a href="/my-portfolio">
              <h1
                className={`${nautigal.className} text-4xl text-slate-700 hover:text-[#D5C455] transition-all duration-500 leading-none`}
              >
                &lt;m.dev/&gt;
              </h1>
            </a>
          </div>

          {/* RIGHT — DESKTOP MENU */}
          <div className="hidden w-[70vw] md:flex justify-center">

            {/* Added margin-right + smaller spacing */}

            {/* Slightly smaller buttons */}
            <ul className="flex flex-row justify-center items-center space-x-2 font-bold uppercase">
              <li>
                <a href="/my-portfolio/about"
                  className="bg-slate-700 text-white px-3 py-1.5 rounded-full text-xs hover:bg-slate-600 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/my-portfolio/projects"
                  className="bg-slate-700 text-white px-3 py-1.5 rounded-full text-xs hover:bg-slate-600 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="/my-portfolio/certificates"
                  className="bg-slate-700 text-white px-3 py-1.5 rounded-full text-xs hover:bg-slate-600 transition">
                  Certificates
                </a>
              </li>

              <li>
                <a href="/my-portfolio/contact"
                  className="bg-slate-700 text-white px-3 py-1.5 rounded-full text-xs hover:bg-slate-600 transition">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="w-[35vw] flex flex-row  justify-between items-center text-center">
                <div className="flex   mx-auto space-x-4 flex-row ">
                  <SocialIcon href="https://github.com/devmdave" label="GitHub">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </SocialIcon>

                  <SocialIcon href="https://www.linkedin.com/in/madhav-dave-52b552379/" label="LinkedIn">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </SocialIcon>

                  {/* <SocialIcon href="#" label="Twitter">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      
                  </SocialIcon> */}
                </div>
            </ul>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700"
          >
            {!open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

        </div>

        {/* ⭐ MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-3 backdrop-blur-2xl border border-white/30 rounded-xl p-3 animate-slideDown">

            {/* Slightly smaller buttons */}
            <ul className="flex flex-row justify-center items-center space-x-2 font-bold uppercase">
              <li>
                <a href="/my-portfolio/about"
                  className="bg-slate-700 text-white px-3 py-1.5 rounded-full text-xs hover:bg-slate-600 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/my-portfolio/projects"
                  className="bg-slate-700 text-white px-3 py-1.5 rounded-full text-xs hover:bg-slate-600 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="/my-portfolio/certificates"
                  className="bg-slate-700 text-white px-3 py-1.5 rounded-full text-xs hover:bg-slate-600 transition">
                  Certificates
                </a>
              </li>

              <li>
                <a href="/my-portfolio/contact"
                  className="bg-slate-700 text-white px-3 py-1.5 rounded-full text-xs hover:bg-slate-600 transition">
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