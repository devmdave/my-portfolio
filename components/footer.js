import React from "react";
import "../styles/globals.css";

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="w-10 h-10 flex hover:scale-[1.2] items-center justify-center rounded-xl border border-slate-500/30 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-100 transition-all duration-300 bg-white/5 backdrop-blur-sm"
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-xs sticky z-50 shadow-2xl/30 border-t border-slate-400/40 px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* TOP ROW: Logo & Tagline */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 mb-8">
            <div className="flex flex-col items-center md:items-center space-y-2">
                <a href="#" className="group">
                    <h1 className="nautigal mt-[5vh] text-6xl text-slate-700 group-hover:text-[#D5C455] transition-all duration-500 leading-none">
                        &lt;m.dev/&gt;
                    </h1>
                </a>
                <p className="nautigal-bold text-xl text-slate-700 tracking-wider">
                    Craft. Code. Innovate.
                </p>
            </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* BOTTOM ROW: Socials & Copyright */}
        <div className="flex flex-col items-center space-y-6">
            
            {/* Social Icons */}
            <div className="flex space-x-6">
                <SocialIcon href="https://github.com/devmdave" label="GitHub">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </SocialIcon>

                <SocialIcon href="https://www.linkedin.com/in/madhav-dave-52b552379/" label="LinkedIn">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </SocialIcon>
            </div>

            {/* Copyright */}
            <p className="text-[10px] md:text-xs text-slate-700 font-medium uppercase tracking-widest text-center">
                &copy; {currentYear} All rights reserved 
            </p>
            {/* Crafted with heart */}
            <p className="text-xl nautigal-bold text-slate-700 flex items-center gap-2">
                Crafted with 
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-4 h-4 text-red-500 animate-pulse"
                >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg> by Madhav Dave
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;