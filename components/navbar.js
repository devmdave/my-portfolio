"use client";
import React, { useState } from "react";
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

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

          {/* DESKTOP MENU + SOCIALS */}
          <div className="hidden md:flex items-center gap-10">
            
            {/* Main menu */}
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
            </ul>

            {/* ⭐ SOCIAL ICONS INLINE (clean & uncluttered) */}
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/devmdave"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58..." />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/madhav-dave-52b552379/"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0..." />
                </svg>
              </a>

              {/* StackOverflow */}
              <a
                href="https://stackoverflow.com/users/23113631/dev-mdave"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
                  <path d="M12.412 14.572..." />
                </svg>
              </a>
            </div>
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

        {/* MOBILE MENU (badges + social icons under) */}
        {open && (
          <div className="md:hidden mt-3 bg-white/40 backdrop-blur-xl border border-white/30 rounded-xl p-4">
            
            {/* Badge menu */}
            <ul className="flex justify-center items-center flex-wrap gap-3 text-xs font-bold uppercase">
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
            </ul>

            {/* Mobile socials inline under menu */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/devmdave" target="_blank">
                <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58..." />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/madhav-dave-52b552379/" target="_blank">
                <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0..." />
                </svg>
              </a>

              <a href="https://stackoverflow.com/users/23113631/dev-mdave" target="_blank">
                <svg className="w-6 h-6" fill="black" viewBox="0 0 16 16">
                  <path d="M12.412 14.572..." />
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;