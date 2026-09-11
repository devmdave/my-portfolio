import Image from "next/image";
import man from "../public/images/man.png";
import qrcode from "../public/images/my-qr-nobg.png";
import Navbar from "../components/navbar";
import techstacky from "../data/techstack.json";
import projects from "../data/projects.json";

export default function Home() {
  return (
    <section className="poppins-medium">
      <Navbar></Navbar>

      {/* 1. HERO */}
      <section className="h-auto max-md:flex-col flex flex-row border-b border-slate-300/50 p-0">
        <div className="w-[50%] max-md:w-full text-center">
          <Image
            src={man}
            alt="Hero Image"
            className="ease-in-out duration-1000 transition-all mx-auto bg-cover w-auto h-full object-cover"
          />
        </div>
        <div className="w-[50%] h-auto max-md:w-[90%] max-md:mx-auto text-center">
          <div className="mx-auto h-auto text-start max-md:text-center w-[100%]">
            <h1 className="text-md poppins-medium font-medium max-md:mt-[10vh] mt-[20vh] uppercase tracking-wider text-slate-500">
              this is me
            </h1>
            <div className="max-md:mx-auto max-md:text-center max-md:w-full">
              <h1 className="hover:animate-pulse max-md:text-center ease-in-out duration-400 transition-all text-4xl max-md:mt-[1vh] mt-[3vh] poppins-bold text-slate-700">
                {" "}
                Madhav Dave
              </h1>
            </div>
            <h1 className="text-xs max-md:mt-[2vh] mt-[2vh] text-slate-700 uppercase poppins-regular leading-relaxed">
              Software + Electronics → Real-World Systems<br/>
              ECE Student | Software Developer | Hardware–Software Integration
            </h1>
            <a href="https://docs.google.com/document/d/1T9cKeQSvxSqs-6QPLrfYyjKrN1XeJgJI8gF4n3sqo0I/export?format=pdf" download>
              <button
                className="
                  h-auto uppercase max-md:mx-auto max-md:mt-[6vh] max-md:w-full 
                  mt-8 px-8 py-3 rounded-full text-white font-bold shadow-lg 
                  transition-all duration-300
                  hover:scale-[1.25]
                  bg-gradient-to-r from-gray-500 via-slate-700 to-gray-500 
                  bg-[length:300%_300%]
                  animate-gradientFlow
                "
              >
                download cv
              </button>
            </a>
            <div className="w-full max-w-md max-md:hidden max-md:mt-[2vh] max-md:mx-auto mt-[8vh] mb-8">
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:davemadhav2007@gmail.com"
                  className="flex max-md:text-xs items-center gap-3 glass-card rounded-xl px-6 py-4 hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="text-slate-700"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                  <span className="font-semibold text-slate-700 select-all poppins-medium">
                    davemadhav2007@gmail.com
                  </span>
                </a>
                <div className="flex items-center gap-3 glass-card rounded-xl px-6 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                    className="text-slate-700"
                  >
                    <path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg>
                  <span className="font-semibold max-md:text-xs text-slate-700 poppins-medium">
                    Ahmedabad, Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK */}
      <section className="py-16 px-4 flex flex-col items-center" id="selected-work">
        <div className="glass-card rounded-2xl p-8 sm:p-10 w-full max-w-5xl mx-auto">
          <h2 className="text-3xl poppins-bold font-bold text-slate-700 mb-10 uppercase tracking-wider text-center">
            Selected Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
            {projects.slice(0, 3).map((project, idx) => (
              <div
                key={project.id}
                className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center inline-block px-6 py-2 rounded-full bg-gradient-to-r from-gray-500 to-slate-700 text-white font-bold shadow hover:from-slate-600 hover:to-gray-700 transition-all duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT I BUILD */}
      <section className="py-16 px-4 flex flex-col items-center" id="what-i-build">
        <div className="glass-card rounded-2xl p-8 sm:p-10 max-w-5xl w-full mx-auto text-center">
          <h2 className="text-3xl poppins-bold font-bold text-slate-700 mb-6 uppercase tracking-wider">
            What I Build
          </h2>
          <p className="text-lg font-medium text-slate-700 mb-8 max-w-2xl mx-auto italic poppins-medium">
            “I build software and systems that connect the digital world with the physical one.”
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto">
            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs flex flex-col hover:bg-white/70 transition-colors duration-300">
              <h3 className="text-base font-bold text-slate-800 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500 flex-shrink-0"></span>
                Web Applications
              </h3>
              <p className="text-sm text-slate-600 poppins-regular pl-4">
                Websites, web applications, dashboards, and digital platforms.
              </p>
            </div>

            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs flex flex-col hover:bg-white/70 transition-colors duration-300">
              <h3 className="text-base font-bold text-slate-800 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500 flex-shrink-0"></span>
                Software & Automation
              </h3>
              <p className="text-sm text-slate-600 poppins-regular pl-4">
                Practical software tools and automation that simplify workflows and solve real problems.
              </p>
            </div>

            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs flex flex-col hover:bg-white/70 transition-colors duration-300">
              <h3 className="text-base font-bold text-slate-800 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500 flex-shrink-0"></span>
                Embedded & Electronics
              </h3>
              <p className="text-sm text-slate-600 poppins-regular pl-4">
                Arduino, microcontrollers, electronics, and embedded systems.
              </p>
            </div>

            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs flex flex-col hover:bg-white/70 transition-colors duration-300">
              <h3 className="text-base font-bold text-slate-800 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500 flex-shrink-0"></span>
                Hardware × Software Systems
              </h3>
              <p className="text-sm text-slate-600 poppins-regular pl-4">
                Systems where physical hardware communicates with software to create complete connected solutions.
              </p>
            </div>

            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs flex flex-col hover:bg-white/70 transition-colors duration-300 md:col-span-2">
              <h3 className="text-base font-bold text-slate-800 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500 flex-shrink-0"></span>
                AI-Powered Applications
              </h3>
              <p className="text-sm text-slate-600 poppins-regular pl-4">
                Practical applications involving AI, computer vision, data processing, and intelligent automation.
              </p>
            </div>
          </div>

          <p className="pt-6 mt-8 text-sm poppins-light text-slate-500 border-t border-slate-200 text-center max-w-3xl mx-auto">
            I emphasize clear interfaces, deterministic behavior, and maintainable architecture to build systems suitable for real-world deployment.
          </p>
        </div>
      </section>

      {/* 4. EXPERIENCE & IMPACT */}
      <section className="py-16 px-4 flex flex-col items-center" id="experience">
        <div className="glass-card rounded-2xl p-8 sm:p-10 w-full max-w-5xl mx-auto">
          <h2 className="text-3xl poppins-bold font-bold text-slate-700 mb-10 uppercase tracking-wider text-center border-b border-slate-300/50 pb-4">
            Experience & Impact
          </h2>
          
          <div className="flex flex-col gap-10">
            
            {/* PROFESSIONAL EXPERIENCE */}
            <div>
              <h3 className="text-lg font-bold text-slate-500 mb-4 uppercase tracking-widest border-l-4 border-slate-500 pl-3">
                Professional Experience
              </h3>
              <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm flex flex-col hover:bg-white/70 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">Web Development Intern</h4>
                    <span className="text-sm font-semibold text-slate-600 block mt-1">Oswal Lite</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 mt-2 md:mt-0 bg-white/80 border border-slate-200 shadow-sm px-3 py-1 rounded-full whitespace-nowrap">August 9, 2026 – September 9, 2026</span>
                </div>
                <p className="text-slate-600 text-sm poppins-regular mt-2">
                  Worked on web development and website development tasks as part of the internship.
                </p>
              </div>
            </div>

            {/* ACHIEVEMENT */}
            <div>
              <h3 className="text-lg font-bold text-slate-500 mb-4 uppercase tracking-widest border-l-4 border-slate-500 pl-3">
                Achievement
              </h3>
              <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm flex flex-col hover:bg-white/70 transition-colors duration-300">
                <div className="flex flex-col mb-2">
                  <h4 className="text-xl font-bold text-slate-800">SIH Internal Hackathon 2025 — 1st Prize</h4>
                  <span className="text-sm font-semibold text-slate-600 block mt-1">Team Eagles</span>
                </div>
                <p className="text-slate-600 text-sm poppins-regular mt-2">
                  Led a team to victory and built a functional prototype under pressure, demonstrating technical execution, problem-solving, teamwork, and creativity.
                </p>
              </div>
            </div>

            {/* LEADERSHIP */}
            <div>
              <h3 className="text-lg font-bold text-slate-500 mb-4 uppercase tracking-widest border-l-4 border-slate-500 pl-3">
                Leadership
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm flex flex-col h-full hover:bg-white/70 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Hackathon Core Team</h4>
                  <span className="text-xs font-semibold text-slate-500 mb-3 block">Gandhinagar Institute of Technology</span>
                  <p className="text-slate-600 text-sm poppins-regular flex-1">
                    Organizing and managing institute-wide hackathons.
                  </p>
                </div>
                <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm flex flex-col h-full hover:bg-white/70 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">IoTZen Team</h4>
                  <span className="text-xs font-semibold text-slate-500 mb-3 block">Gandhinagar Institute of Technology</span>
                  <p className="text-slate-600 text-sm poppins-regular flex-1">
                    Developing and coordinating hardware and IoT projects.
                  </p>
                </div>
                <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm flex flex-col h-full hover:bg-white/70 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Tech Community</h4>
                  <span className="text-xs font-semibold text-slate-500 mb-3 block">Gandhinagar Institute of Technology</span>
                  <p className="text-slate-600 text-sm poppins-regular flex-1">
                    Managing technical events and software initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* TECHNICAL DEVELOPMENT */}
            <div>
              <h3 className="text-lg font-bold text-slate-500 mb-4 uppercase tracking-widest border-l-4 border-slate-500 pl-3">
                Technical Development
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm flex flex-col h-full hover:bg-white/70 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">GenAI Data Analytics Simulation</h4>
                  <span className="text-xs font-semibold text-slate-500 mb-3 block">Tata Forage</span>
                  <p className="text-slate-600 text-sm poppins-regular flex-1">
                    Completed a hands-on simulation focused on AI-powered data analytics, exploratory data analysis, and predictive modeling for business strategy.
                  </p>
                </div>
                <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm flex flex-col h-full hover:bg-white/70 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">AI/ML Specialized Training</h4>
                  <span className="text-xs font-semibold text-slate-500 mb-3 block">ISRO / be10x</span>
                  <p className="text-slate-600 text-sm poppins-regular flex-1">
                    Participated in workshops exploring practical applications of AI/ML, intelligent systems, and data modeling.
                  </p>
                </div>
                <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm flex flex-col h-full hover:bg-white/70 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Grade.IO</h4>
                  <span className="text-xs font-semibold text-slate-500 mb-3 block">Personal Project</span>
                  <p className="text-slate-600 text-sm poppins-regular flex-1">
                    AI-powered food/nutrition scanning application involving image-based nutrition extraction and validation.
                  </p>
                </div>
                <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm flex flex-col h-full hover:bg-white/70 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Hardware & Software Projects</h4>
                  <span className="text-xs font-semibold text-slate-500 mb-3 block">Personal Projects</span>
                  <p className="text-slate-600 text-sm poppins-regular flex-1">
                    Worked across electronics, Arduino, hardware, software, and web development, combining physical systems with software solutions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TECH FLUENCY */}
      <section className="py-16 px-4 flex flex-col items-center" id="tech-fluency">
        <div className="glass-card rounded-2xl p-8 sm:p-10 w-full max-w-5xl mx-auto text-center">
          <h2 className="text-3xl poppins-bold font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Tech Fluency
          </h2>
          <p className="text-sm poppins-regular italic text-slate-500 mb-10">
            “The tools change. The ability to build doesn’t.”
          </p>

          {/* Connected Engineering Stack */}
          <div className="flex flex-col gap-3 text-left max-w-4xl mx-auto">

            {/* WEB CLUSTER */}
            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs hover:bg-white/70 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="md:w-1/4 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600 bg-white/80 border border-slate-300/80 px-3 py-1 rounded-full shadow-xs">
                    WEB
                  </span>
                </div>
                <div className="md:w-3/4 flex flex-wrap gap-2">
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    JavaScript / Next.js / React <span className="text-slate-500 font-normal ml-1">· Web Apps & Dashboards</span>
                  </span>
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    HTML / CSS / Tailwind <span className="text-slate-500 font-normal ml-1">· Responsive Interfaces</span>
                  </span>
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    Node.js / Express <span className="text-slate-500 font-normal ml-1">· Server Logic & APIs</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="flex justify-center -my-1 text-slate-400">
              <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* SOFTWARE CLUSTER */}
            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs hover:bg-white/70 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="md:w-1/4 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600 bg-white/80 border border-slate-300/80 px-3 py-1 rounded-full shadow-xs">
                    SOFTWARE
                  </span>
                </div>
                <div className="md:w-3/4 flex flex-wrap gap-2">
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    Java <span className="text-slate-500 font-normal ml-1">· Core Software & Android</span>
                  </span>
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    MongoDB <span className="text-slate-500 font-normal ml-1">· Data Storage & Databases</span>
                  </span>
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    Git & GitHub <span className="text-slate-500 font-normal ml-1">· Source Control & Workflows</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="flex justify-center -my-1 text-slate-400">
              <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* AI / DATA CLUSTER */}
            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs hover:bg-white/70 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="md:w-1/4 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600 bg-white/80 border border-slate-300/80 px-3 py-1 rounded-full shadow-xs">
                    AI / DATA
                  </span>
                </div>
                <div className="md:w-3/4 flex flex-wrap gap-2">
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    Python <span className="text-slate-500 font-normal ml-1">· AI Modeling & Automation</span>
                  </span>
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    Pandas / NumPy <span className="text-slate-500 font-normal ml-1">· Data Analytics & Processing</span>
                  </span>
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    OpenAI / LangChain <span className="text-slate-500 font-normal ml-1">· GenAI Agents & Extraction</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="flex justify-center -my-1 text-slate-400">
              <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* EMBEDDED CLUSTER */}
            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs hover:bg-white/70 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="md:w-1/4 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600 bg-white/80 border border-slate-300/80 px-3 py-1 rounded-full shadow-xs">
                    EMBEDDED
                  </span>
                </div>
                <div className="md:w-3/4 flex flex-wrap gap-2">
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    C / C++ <span className="text-slate-500 font-normal ml-1">· Embedded Systems & Firmware</span>
                  </span>
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    Arduino / Microcontrollers <span className="text-slate-500 font-normal ml-1">· Sensor Interfacing & Control</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="flex justify-center -my-1 text-slate-400">
              <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* HARDWARE CLUSTER */}
            <div className="bg-white/50 rounded-xl p-5 border border-white/60 shadow-xs hover:bg-white/70 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="md:w-1/4 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600 bg-white/80 border border-slate-300/80 px-3 py-1 rounded-full shadow-xs">
                    HARDWARE
                  </span>
                </div>
                <div className="md:w-3/4 flex flex-wrap gap-2">
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    Electronics & Circuits <span className="text-slate-500 font-normal ml-1">· Hardware Prototyping</span>
                  </span>
                  <span className="bg-white/80 border border-slate-200/90 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold shadow-2xs">
                    Hardware–Software Integration <span className="text-slate-500 font-normal ml-1">· Real-World Connected Products</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (Omitted due to lack of authentic data) */}

      {/* 7 & 8. CONTACT ME & SUPPORT MY WORK */}
      <section className="py-16 px-4 flex flex-col items-center poppins-medium" id="contact">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 w-full max-w-5xl mx-auto items-stretch">
          {/* Contact Form */}
          <div className="w-full flex flex-col h-full mx-auto">
            <form className="glass-card rounded-2xl p-8 sm:p-10 w-full h-full flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-3xl text-center poppins-bold font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Contact Me
                </h2>
                <p className="text-slate-600 mb-6 text-center max-w-lg mx-auto poppins-medium">
                  Interested in working together or have a question? Fill out the form
                  below and I’ll get back to you soon!
                </p>
              </div>
              <div className="flex flex-col space-y-4 flex-1 justify-center max-w-lg w-full mx-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/60 backdrop-blur-sm border border-slate-300/80 rounded px-4 py-2 text-slate-800 placeholder-slate-400 focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-slate-400 transition duration-200 poppins-regular"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/60 backdrop-blur-sm border border-slate-300/80 rounded px-4 py-2 text-slate-800 placeholder-slate-400 focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-slate-400 transition duration-200 poppins-regular"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/60 backdrop-blur-sm border border-slate-300/80 rounded px-4 py-2 text-slate-800 placeholder-slate-400 focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-slate-400 transition duration-200 resize-none poppins-regular"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-6 py-3 max-w-md w-full mx-auto rounded-full bg-gradient-to-r from-gray-500 to-slate-700 text-white font-bold shadow-lg hover:from-slate-600 hover:to-gray-700 transition-all duration-300 poppins-bold uppercase tracking-wider"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Support My Work */}
          <div className="w-full flex flex-col h-full mx-auto">
            <div className="glass-card rounded-2xl p-8 sm:p-10 w-full h-full flex flex-col items-center justify-between text-center">
              <div>
                <h3 className="text-3xl text-center poppins-bold font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Support My Work
                </h3>
                <p className="text-sm text-slate-600 poppins-regular leading-relaxed max-w-xs mx-auto">
                  Enjoyed my work? You can support me with a chai. ☕
                </p>
              </div>

              <div className="p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-inner my-auto flex items-center justify-center mt-6 mb-6">
                <Image
                  src={qrcode}
                  alt="QR Code to Support"
                  width={240}
                  height={240}
                  className="w-52 h-52 sm:w-56 sm:h-56 md:w-60 md:h-60 object-contain rounded-lg"
                />
              </div>

              <div className="flex items-center gap-2 text-xs poppins-medium font-semibold text-slate-500 uppercase tracking-widest">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-amber-600"
                >
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 1 9.75 6.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 7.5Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 10.5Zm-1.5 3a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm1.5 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
                <span>Scan to support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-transparent p-4 mx-auto justify-center items-center text-center">
      </section>
    </section>
  );
}
