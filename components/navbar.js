import React from "react";
import { The_Nautigal } from "next/font/google";

const nautigal = The_Nautigal({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="bg-transparent  mb-10 flex max-md:flex-col flex-row text-white p-4">
      <div className="w-[60%] max-md:w-[100%] ">
        <div className="w-[100%] max-md:w-[100%] max-md:mx-auto">
          <a href="/my-portfolio">
            <h1 className="nautigal-bold duration-1000 ease-in-out transition-all max-md:text-8xl max-md:mx-auto text-center text-6xl text-slate-700 hover:text-[#D5C455]">
              &lt;m.dev/&gt;
            </h1>
          </a>
        </div>
      </div>

      <div className="w-[100%] max-md:w-full mt-[4vh] max-md:mt-[4vh] max-md:rounded-full max-md:bg-white mb-10 poppins-light uppercase max-md:flex-col flex justify-center items-center">
        <ul className="justify-center items-center max-md:p-4 max-sm:space-x-4 max-md:w-full text-center max-md:text-md text-xs flex text-slate-700 my-auto space-x-4 max-md:space-x-8">
          <li>
            <a
              className="ease-in-out duration-400 transition-all font-bold hover:text-slate-600"
              href="/my-portfolio/about"
            >
              About ME
            </a>
          </li>
          <li>
            <a
              className="ease-in-out duration-400 transition-all font-bold hover:text-slate-600"
              href="/my-portfolio/projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="ease-in-out duration-400 transition-all font-bold hover:text-slate-600"
              href="/my-portfolio/certificates"
            >
              Certificates
            </a>
          </li>
          <li>
            <a
              className="ease-in-out duration-400 transition-all font-bold hover:text-slate-600"
              href="/my-portfolio/contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex max-md:hidden max-md:mt-[4vh] flex-row max-md:space-x-12 space-x-4 mx-8">
          <a target="_blank" href="https://github.com/devmdave">
            <svg
              className="max-md:size-8"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://stackoverflow.com/users/23113631/dev-mdave"
          >
            <svg
              className="max-md:size-8"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              class="bi bi-stack-overflow"
              viewBox="0 0 16 16"
            >
              <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z" />
              <path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0 9.108.852l4.26 5.727 1.146-.852zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468z" />
            </svg>
          </a>

          <a target="_blank" href="">
            <svg
              className="max-md:size-8"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
