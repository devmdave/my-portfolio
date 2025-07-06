import React from "react";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <>
    <section className="bg-slate-100 flex flex-col">
      <Navbar></Navbar>

      <h2 className="text-3xl mb-10 text-center font-bold text-slate-700 mb-6 uppercase tracking-wider text-center">
        About Me
      </h2>
      <div className=" mx-auto bg-white shadow-lg rounded-2xl max-md:w-[80vw] w-[50vw] p-8">
        <p className="text-lg text-slate-600 mb-4 text-center">
          Hi, I'm <span className="font-bold text-slate-800">Madhav Dave</span>.
          My journey into tech began with a curiosity for how things work and a
          passion for building solutions that make life easier. Over the years,
          I've honed my skills in web development, working with technologies
          like React, Next.js, and Tailwind CSS. I love tackling new challenges,
          learning continuously, and collaborating with creative minds.
        </p>
        <p className="text-base text-slate-500 mb-6 text-center">
          When I'm not coding, you’ll find me exploring new music, reading tech
          blogs, or experimenting with automation and AI tools. My goal is to
          create impactful digital experiences and help others grow along the
          way.
        </p>

      </div>
      <div className="mx-auto shadow-xl rounded-2xl max-md:w-[80vw] mb-30 w-[50vw] mt-10">
          <div className="bg-white rounded-xl p-6 mb-4">
          <h3 className="text-2xl font-bold text-slate-700 mb-4 text-left">🎓 Education</h3>

            <div className="text-lg font-semibold text-slate-800 text-left">
              Bachelor of Technology in Electronics and Communication (Currently Pursuing)
            </div>
            <div className="text-slate-600 text-left">
              XYZ University, 2025 - 2029
            </div>
            <ul className="mt-3 text-slate-500 text-left list-disc list-inside">
              <li>CGPA: Currently Pursuing</li>
              <li>Relevant Coursework: Data Structures, Algorithms, Web Development, AI</li>
              <li>Clubs: Coding Club, Tech Society</li>
            </ul>
          </div>
        </div>
    </section>
    </>
  );
};

export default About;
