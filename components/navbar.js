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
    <nav className="bg-transparent mb-10 text-white p-4">
      <div className="flex justify-between items-center max-md:flex-row flex-row">
        
        {/* Logo */}
        <a href="/my-portfolio">
          <h1
            className={`${nautigal.className} nautigal-bold duration-1000 ease-in-out transition-all text-center text-6xl text-slate-700 hover:text-[#D5C455] max-md:text-5xl`}
          >
            &lt;m.dev/&gt;
          </h1>
        </a>

        {/* Hamburger Icon - mobile only */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            // close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center mt-4">
        <ul className="uppercase text-xs flex space-x-8 text-slate-700 font-bold poppins-light">
          <li><a className="hover:text-slate-600" href="/my-portfolio/about">About Me</a></li>
          <li><a className="hover:text-slate-600" href="/my-portfolio/projects">Projects</a></li>
          <li><a className="hover:text-slate-600" href="/my-portfolio/certificates">Certificates</a></li>
          <li><a className="hover:text-slate-600" href="/my-portfolio/contact">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 ml-8">
          {/* GitHub */}
          <a target="_blank" href="https://github.com/devmdave">
            <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59..." />
            </svg>
          </a>

          {/* StackOverflow */}
          <a target="_blank" href="https://stackoverflow.com/users/23113631/dev-mdave">
            <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
              <path d="M12.412 14.572V10.29h1.428..." />
            </svg>
          </a>

          {/* LinkedIn */}
          <a target="_blank" href="https://www.linkedin.com/in/madhav-dave-52b552379/">
            <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0..." />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-xl p-4">
          <ul className="uppercase text-center text-slate-700 space-y-4 font-bold">
            <li><a className="hover:text-slate-600" href="/my-portfolio/about">About Me</a></li>
            <li><a className="hover:text-slate-600" href="/my-portfolio/projects">Projects</a></li>
            <li><a className="hover:text-slate-600" href="/my-portfolio/certificates">Certificates</a></li>
            <li><a className="hover:text-slate-600" href="/my-portfolio/contact">Contact</a></li>
          </ul>

          {/* Social Icons Mobile */}
          <div className="flex justify-center space-x-6 mt-6">
            <a target="_blank" href="https://github.com/devmdave">
              <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58..." />
              </svg>
            </a>

            <a target="_blank" href="https://stackoverflow.com/users/23113631/dev-mdave">
              <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
                <path d="M12.412 14.572..." />
              </svg>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/madhav-dave-52b552379/">
              <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
                <path d="M0 1.146..." />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;