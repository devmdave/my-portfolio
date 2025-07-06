import React from "react";
import Navbar from "../components/navbar";
import projects from "../data/projects.json"; // Assuming you have a projects.json file in data folder

export default function Projects() {
  return (
    <>
      <section className="bg-slate-100 flex mb-30 flex-col">
        <Navbar />

        <h2 className="text-center text-3xl font-bold text-slate-700 mb-10 uppercase tracking-wider animate-fadeInUp">
          Projects
        </h2>
        <div className=" max-md:w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-4 flex-1">{project.desc}</p>
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
                  className="mt-auto inline-block px-6 py-2 rounded-full bg-gradient-to-r from-gray-500 to-slate-700 text-white font-bold shadow hover:from-slate-600 hover:to-gray-700 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </>
  );
}
