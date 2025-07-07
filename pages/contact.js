import React, { useState } from "react";
import Navbar from "../components/navbar";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section className="flex flex-col">
        <Navbar />

        <div className="mb-30 mx-auto animate-fadeInUp max-md:h-auto max-md:w-[80vw] bg-white shadow-2xl rounded-2xl max-w-lg w-full p-10 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-slate-700 mb-2 uppercase tracking-wider text-center">
            Contact Me
          </h2>
          <p className="poppins-regular text-slate-600 mb-8 text-center">
            Let's connect! Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open.
          </p>
          <div className="w-full mb-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-slate-700 font-semibold">
                Email:{" "}
                <a
                  href="mailto:davemadhav2007@gmail.com"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                >
                  davemadhav2007@gmail.com
                </a>
              </div>
              <div className="text-left text-slate-700 font-semibold">
                Phone:{" "}
                <a
                  href="tel:+917984253060"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                >
                  +91 7984253060
                </a>
              </div>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://github.com/devmdave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 transition-transform duration-300"
                  aria-label="GitHub"
                >
                  <svg width="28" height="28" fill="#334155" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 transition-transform duration-300"
                  aria-label="LinkedIn"
                >
                  <svg width="28" height="28" fill="#334155" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full mt-4 flex flex-col space-y-4 animate-fadeInUp"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border border-slate-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-slate-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-slate-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 resize-none transition-all"
              required
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-500 to-slate-700 text-white font-bold shadow-lg hover:from-slate-600 hover:to-gray-700 transition-all duration-300"
            >
              Send Message
            </button>
            {submitted && (
              <div className="text-green-600 text-center font-semibold animate-fadeInUp">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
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
