"use client";
import React from "react";
import { The_Nautigal } from "next/font/google";

const nautigal = The_Nautigal({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer
      className="w-full h-auto flex flex-col justify-center items-center text-center px-6"
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
        backdropFilter: "blur(18px) saturate(180%)",
        WebkitBackdropFilter: "blur(18px) saturate(180%)",
        borderTop: "1.5px solid rgba(255,255,255,0.25)",
        borderBottom: "1.5px solid rgba(255,255,255,0.25)",
        boxShadow: "inset 0 12px 40px rgba(0,0,0,0.15)",
      }}
    >
      {/* BRAND LOGO */}
      <h1
        className={`${nautigal.className} text-6xl md:text-7xl text-slate-800 drop-shadow-lg`}
      >
        &lt;m.dev/&gt;
      </h1>

      {/* SUBTITLE */}
      <p className="max-w-xl mx-auto text-gray-700 text-sm mt-3">
        Crafting beautifully engineered digital experiences with clarity,
        precision and creativity.
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex space-x-6 mt-8">
        {/* GitHub */}
        <a
          href="https://github.com/devmdave"
          target="_blank"
          className="p-4 bg-white/20 rounded-full transition-all hover:scale-105 hover:bg-white/30"
          aria-label="GitHub"
        >
          <svg className="w-7 h-7" viewBox="0 0 16 16" fill="black">
            <path d="M8 0C3.58 0 0 3.58 0 8a8 
              8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94
              -.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
              -.01-.53.63-.01 1.08.58 1.23.82.72 
              1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07
              -1.78-.2-3.64-.89-3.64-3.95 
              0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
              0 0 .67-.21 2.2.82.64-.18 1.32-.27 
              2-.27s1.36.09 2 .27c1.53-1.04 
              2.2-.82 2.2-.82.44 1.1.16 1.92.08 
              2.12.51.56.82 1.27.82 2.15 
              0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
              1.48 0 1.07-.01 1.93-.01 2.2 
              0 .21.15.46.55.38A8.01 8.01 0 0 0 16 
              8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/madhav-dave-52b552379/"
          target="_blank"
          className="p-4 bg-white/20 rounded-full transition-all hover:scale-105 hover:bg-white/30"
          aria-label="LinkedIn"
        >
          <svg className="w-7 h-7" fill="#0A66C2" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 
              1.175 0h13.65C15.474 0 16 .513 
              16 1.146v13.708c0 .633-.526 
              1.146-1.175 1.146H1.175C.526 16 0 
              15.487 0 14.854V1.146zm4.943 
              12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 
              0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248H3.758C2.938 
              2.636 2.4 3.175 2.4 3.883c0 
              .694.521 1.248 1.343 
              1.248h.001zM13.458 13.394V9.359c0-2.168-1.161-3.176-2.708-3.176-1.248 
              0-1.805.689-2.118 1.176h-.03V6.169h-2.4c.03.678 
              0 7.225 0 7.225h2.4v-3.92c0-.21.016-.42.077-.57.169-.42.553-.852 
              1.197-.852.843 0 1.18.642 1.18 1.586v3.756h2.402z"/>
          </svg>
        </a>

        {/* StackOverflow */}
        <a
          href="https://stackoverflow.com/users/23113631/dev-mdave"
          target="_blank"
          className="p-4 bg-white/20 rounded-full transition-all hover:scale-105 hover:bg-white/30"
          aria-label="StackOverflow"
        >
          <svg className="w-7 h-7" fill="#F48024" viewBox="0 0 16 16">
            <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z" />
            <path d="M3.857 13.145h7.137v-1.428H3.857z" />
            <path d="M10.254 0 9.108.852l4.26 5.727 1.146-.852z" />
            <path d="M6.714 3.377 12.198 7.944l.913-1.097L7.627 2.28z" />
            <path d="M4.922 6.55l6.47 3.013.603-1.294-6.47-3.013z" />
            <path d="M3.997 9.894l6.985 1.469.294-1.398-6.985-1.468z" />
          </svg>
        </a>
      </div>

      {/* Separator */}
      <div className="border-t border-white/40 mt-10 w-2/3 mx-auto"></div>

      {/* COPYRIGHT */}
      <p className="text-xs text-gray-600 mt-3">
        © 2025 &lt;m.dev/&gt; — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;