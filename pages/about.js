"use client";
import Navbar from "../components/navbar";
import man from "../public/images/man.png";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function AboutPage() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.style.opacity = "1";
          target.style.animationPlayState = "running";
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".animate-fade-in-up, .animate-scale-in"
    );
    elements.forEach((el) => {
      const htmlEl = el;
      htmlEl.style.opacity = "0"; // Ensure hidden initially
      htmlEl.style.animationPlayState = "paused";
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");

        .about-page-wrapper {
          font-family: "Inter", sans-serif;
          background-color: #ffffff;
          color: #334155; /* slate-700 */
          overflow-x: hidden;
          min-height: 100vh;
          position: relative;
        }
        /* Glassmorphism Utilities */
        .glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 2px 4px -1px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05),
            0 10px 10px -5px rgba(0, 0, 0, 0.02);
        }

        /* Animated Gradient Border */
        .gradient-border {
          position: relative;
          background: #fff;
          background-clip: padding-box;
          border: 2px solid transparent;
          border-radius: 1.5rem;
        }
        .gradient-border::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
          margin: -2px;
          border-radius: inherit;
          background: linear-gradient(to right, #60a5fa, #c084fc, #f472b6);
          animation: border-spin 3s linear infinite;
        }

        @keyframes border-spin {
          to {
            filter: hue-rotate(360deg);
          }
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-scale-in {
          opacity: 0;
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>

      <div className="relative ">
        <Navbar></Navbar>

        {/* Main Content */}

        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 relative z-10">
          {/* 2. Biography Section */}
          <section className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 animate-fade-in-up">
              <div className="glass-card rounded-3xl p-2 rotate-2 hover:rotate-0 transition duration-500">
                <Image
                  src={man}
                  alt="Hero Image"
                  className="ease-in-out duration-1000 transition-all mx-auto bg-cover w-auto h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-6 animate-fade-in-up delay-100">
              <div className="glass-card p-8 rounded-3xl">
                <h2 className="text-3xl mb-[2vh] font-bold text-slate-800 flex items-center">
                  ABOUT ME
                </h2>
                <p className="text-lg leading-relaxed text-slate-600 mb-4">
                  I am a passionate developer driven by the intersection of
                  technology and human experience. My journey began with a
                  simple curiosity about how things work, which quickly evolved
                  into a career dedicated to building intelligent systems and
                  intuitive interfaces.
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  With a background in computer science and a flair for design,
                  I strive to create software that is not only functional but
                  also delightful to use. I believe in the power of open source,
                  continuous learning, and the magic of turning lines of code
                  into impactful solutions.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Education Section */}
          <section className="animate-fade-in-up">
            <div className="mx-auto glass-card shadow-xl rounded-2xl max-md:w-[80vw] mb-30 mt-5">
              <div className="rounded-xl p-6 mb-4">
                <h3 className="text-2xl tracking-wider flex flex-row font-bold text-slate-700 mb-4 text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-8 my-auto mr-2  text-slate-700"
                  >
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                  </svg>
                  EDUCATION
                </h3>

                <div className="text-lg font-semibold text-slate-800 text-left">
                  Bachelor of Technology in Electronics and Communication
                  (Currently Pursuing)
                </div>
                <div className="text-slate-600 text-left">
                  XYZ University, 2025 - 2029
                </div>
                <ul className="mt-3 text-slate-500 text-left list-disc list-inside">
                  <li>CGPA: Currently Pursuing</li>
                  <li>
                    Relevant Coursework: Data Structures, Algorithms, Web
                    Development, AI
                  </li>
                  <li>Clubs: Coding Club, Tech Society</li>
                </ul>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/50 rounded-xl p-4 border border-white/60">
                    <h4 className="font-semibold text-slate-700 mb-1">
                      Specialization
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Artificial Intelligence & Data Science
                    </p>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4 border border-white/60">
                    <h4 className="font-semibold text-slate-700 mb-1">
                      Achievements
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Dean's List, Best Capstone Project Award
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Experience/Roles Section */}
          <section className="w-[90vw] glass-card rounded-xl backdrop-blur-sm p-8 mx-auto bg-white">
            <h2 className="text-3xl font-bold text-slate-800 mb-10 text-left animate-fade-in-up">
              WORK EXPEREINCE
            </h2>
            <div className="grid  md:grid-cols-2 gap-6">
              {/* Role 1 */}
              <div className="glass-card p-8 rounded-3xl animate-scale-in delay-100 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm text-slate-400 font-medium">
                    2023 - Present
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  Senior Developer
                </h3>
                <p className="text-purple-600 font-medium mb-4">
                  Tech Solutions Inc.
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <i className="fas fa-check text-purple-400 mt-1 mr-2"></i>{" "}
                    Leading a team of 5 developers
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-purple-400 mt-1 mr-2"></i>{" "}
                    Architecting scalable cloud solutions
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-purple-400 mt-1 mr-2"></i>{" "}
                    Reduced deployment time by 40%
                  </li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="glass-card p-8 rounded-3xl animate-scale-in delay-200 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm text-slate-400 font-medium">
                    2021 - 2023
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  Full Stack Engineer
                </h3>
                <p className="text-pink-600 font-medium mb-4">
                  Creative Agency
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <i className="fas fa-check text-pink-400 mt-1 mr-2"></i>{" "}
                    Developed 20+ client websites
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-pink-400 mt-1 mr-2"></i>{" "}
                    Integrated payment gateways & APIs
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-pink-400 mt-1 mr-2"></i>{" "}
                    Mentored junior interns
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Philosophy/Values Section */}
          <section className="animate-fade-in-up">
            <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 z-0"></div>
              <div className="relative z-10">
                <i className="fas fa-quote-left text-4xl text-slate-300 mb-6"></i>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-relaxed">
                  "I believe that technology should be invisible, intuitive, and
                  empowering. My goal is to build tools that amplify human
                  potential."
                </h2>
                <div className="flex justify-center gap-4 mt-8">
                  <span className="px-4 py-2 rounded-full bg-white shadow-sm text-slate-600 text-sm font-medium border border-slate-100">
                    Innovation
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white shadow-sm text-slate-600 text-sm font-medium border border-slate-100">
                    Simplicity
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white shadow-sm text-slate-600 text-sm font-medium border border-slate-100">
                    Impact
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
