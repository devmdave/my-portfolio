import Image from "next/image";
import man from "../public/images/man.png";
import qrcode from "../public/images/my-qr-nobg.png";
import Navbar from "../components/navbar";
import techstacky from "../data/techstack.json"; // Assuming you have a techstack.json file in data folder

export default function Home() {
  return (
    <section className="poppins-medium">
      <Navbar></Navbar>
      <section className="h-auto max
      -md:flex-col flex  flex-row">
        <div className="w-[50%] max-md:w-full  text-center">
          <Image
            src={man}
            alt="Hero Image"
            className="ease-in-out duration-1000 transition-all mx-auto bg-cover w-auto h-full object-cover"
          />
          {/* <div className="w-[80%] bg-[url('/./man.png')] mx-auto"></div> */}
        </div>
        <div className="w-[50%] h-auto max-md:w-[90%] max-md:mx-auto text-center">
          <div className="mx-auto h-auto text-start max-md:text-center w-[100%]">
            <h1 className="text-md poppins-medium font-medium max-md:mt-[10vh] mt-[20vh] uppercase tracking-wider text-slate-500">
              this is me
            </h1>
            <div className="max-md:mx-auto max-md:text-center max-md:w-full">
              {/* <h1 className="text-4xl mt-[3vh] poppins-medium  text-[#adb5bd]"> I am</h1> */}
              <h1 className="hover:animate-pulse max-md:text-center ease-in-out duration-400 transition-all text-4xl max-md:mt-[1vh] mt-[3vh] poppins-bold text-slate-700">
                {" "}
                Madhav Dave
              </h1>
            </div>
            <h1 className="text-xs max-md:mt-[2vh] text-slate-700 uppercase poppins-regular">
              ECE Student | Embedded Systems, Machine Learning & Computer Vision
              | Web Developer
            </h1>
            <a href="https://docs.google.com/document/d/1T9cKeQSvxSqs-6QPLrfYyjKrN1XeJgJI8gF4n3sqo0I/export?format=pdf" download><button
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
            </button></a>
            {/* <h1 className="text-sm mt-[5vh] w-[50%] text-[#47411C] poppins-regular">
                I’m a versatile developer skilled in HTML, CSS, and JavaScript. I work with modern frameworks like Next.js, Vue.js, and AngularJS. I craft web solutions that are fast, expressive, and user-centered. My experience spans Android app development and Python automation. I blend functionality with elegance to build tools that truly work
            </h1> */}
            <div className="w-[30vw] max-md:hidden max-md:w-[80vw] max-md:mt-[2vh] max-md:mx-auto mt-[8vh] mb-8">
              <div className="flex flex-col gap-4 ">
                {/* Email Box */}
                <a
                  href="mailto:davemadhav2007@gmail.com"
                  className="flex max-md:text-xs items-center gap-3 glass-card rounded-xl px-6 py-4 hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Email SVG */}
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
                {/* Location Box */}
                <div className="flex items-center gap-3 glass-card rounded-xl px-6 py-4">
                  {/* Location SVG */}
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
      <section
        className="py-16 px-4 flex flex-row max-md:flex-col items-center"
        id="about"
      >
        <div className="glass-card mx-8 rounded-2xl max-md:h-auto h-auto p-10 max-md:w-full w-[40vw] text-center">
          <h2 className="text-3xl poppins-bold font-bold text-slate-700 mb-10 uppercase tracking-wider">
            what i build
          </h2>
          <p className="text-lg poppins-regular text-slate-600 mb-4">
            Hi, I'm{" "}
            <span className="font-bold text-4xl nautigal-bold text-slate-800">
              Madhav Dave
            </span>{" "} <br />
            I engineer integrated hardware–software systems with a focus on reliable interaction between embedded devices and software components. My work includes microcontroller programming, peripheral interfacing, and firmware development, along with backend and application-level software for device communication, data processing, and system coordination. I emphasize clear interfaces, deterministic behavior, and maintainable architecture to build systems suitable for real-world deployment.
          </p>
          <p className="text-base poppins-light text-slate-500">
            I enjoy solving problems, learning new technologies, and
            collaborating on exciting projects. When I’m not coding, you’ll find
            me exploring new music, reading tech blogs, or experimenting with
            automation and AI tools.
          </p>
        </div>
        <div className="h-auto max-md:h-auto max-md:mt-[5vh] font-bold poppins-regular glass-card flex mx-8 rounded-2xl p-10 max-md:w-full w-[40vw] flex-col">
          <h2 className="text-3xl poppins-bold text-center font-bold text-slate-700 mb-10 uppercase tracking-wider">
            Tech Fluency
          </h2>
          <div className="p-4">
            <div class="flex flex-row justify-between mb-2">
              <span class="text-base font-bold uppercase text-slate-700">
                C/C++
              </span>
              <span class="text-sm font-bold text-end text-slate-700">80%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 ">
              <div class="bg-gradient-to-r from-gray-400 to-slate-900 h-2.5 w-[80%] rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <div class="flex flex-row justify-between mb-2">
              <span class="text-base font-bold uppercase text-slate-700">
                java
              </span>
              <span class="text-sm font-bold text-end text-slate-700">75%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 ">
              <div class="bg-gradient-to-r from-gray-400 to-slate-900 h-2.5 w-[75%] rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <div class="flex flex-row justify-between mb-2">
              <span class="text-base font-bold uppercase text-slate-700">
                python
              </span>
              <span class="text-sm font-bold  text-end text-slate-700">
                90%
              </span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 ">
              <div class="bg-gradient-to-r from-gray-400 to-slate-900 h-2.5 w-[90%] rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <div class="flex flex-row justify-between mb-2">
              <span class="text-base font-bold  uppercase text-slate-700">
                html
              </span>
              <span class="text-sm font-bold text-end text-slate-700">95%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 ">
              <div class="bg-gradient-to-r from-gray-400 to-slate-900 h-2.5 w-[95%] rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <div class="flex flex-row justify-between mb-2">
              <span class="text-base font-bold uppercase text-slate-700">
                css
              </span>
              <span class="text-sm  font-bold text-end text-slate-700">
                95%
              </span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 ">
              <div class="bg-gradient-to-r from-gray-400 to-slate-900 h-2.5 w-[95%] rounded-full"></div>
            </div>
          </div>
          <div className="p-4">
            <div class="flex flex-row justify-between mb-2">
              <span class="text-base font-bold uppercase text-slate-700">
                js
              </span>
              <span class="text-sm font-bold text-end text-slate-700">85%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 ">
              <div class="bg-gradient-to-r from-gray-400 to-slate-900 h-2.5 w-[85%] rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col p-4 mt-[10vh] justify-center items-center">
            <h2 className="text-3xl poppins-bold text-center font-bold text-slate-700 mb-10 uppercase tracking-wider">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {techstacky[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="glass text-slate-700 px-3 py-1 rounded-full text-xs font-semibold border border-white/60 shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="poppins-medium py-16 flex flex-col items-center"
        id="testimonials"
      >
        <h2 className="text-3xl poppins-bold font-bold text-slate-700 mb-10 uppercase tracking-wider">
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">
          {/* Testimonial 1 */}
          <div className="glass-card rounded-2xl p-8 flex-1 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Client 1"
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-slate-600 text-center mb-4">
              “Madhav is a fantastic developer! He delivered our project on time
              and exceeded our expectations. Highly recommended.”
            </p>
            <span className="font-bold text-slate-700">John Doe</span>
            <span className="text-xs text-slate-400">
              Product Manager, Acme Corp
            </span>
          </div>
          {/* Testimonial 2 */}
          <div className="glass-card rounded-2xl p-8 flex-1 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Client 2"
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-slate-600 text-center mb-4">
              “Working with Madhav was a pleasure. His attention to detail and
              creative solutions made our website stand out.”
            </p>
            <span className="font-bold text-slate-700">Jane Smith</span>
            <span className="text-xs text-slate-400">Founder, StartupX</span>
          </div>
          {/* Testimonial 3 */}
          <div className="glass-card rounded-2xl p-8 flex-1 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Client 3"
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-slate-600 text-center mb-4">
              “Professional, reliable, and innovative. I’d happily work with
              Madhav again on future projects.”
            </p>
            <span className="font-bold text-slate-700">Alex Lee</span>
            <span className="text-xs text-slate-400">CTO, TechFlow</span>
          </div>
        </div>
      </section>
      <section
        className="max-md:p-10 poppins-medium py-16 flex flex-row max-md:flex-col items-stretch justify-center gap-8"
        id="contact"
      >
        <div className="w-[50vw] max-md:w-full flex flex-col items-center text-center mx-auto">
          <form className="glass-card rounded-2xl p-8 w-full max-w-xl flex flex-col space-y-4 h-full">
            <h2 className="text-3xl text-center poppins-bold font-bold text-slate-700 mb-2 uppercase tracking-wider">
              Contact Me
            </h2>
            <p className="text-slate-600 mb-6 text-center max-w-lg mx-auto poppins-medium">
              Interested in working together or have a question? Fill out the form
              below and I’ll get back to you soon!
            </p>
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
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-500 to-slate-700 text-white font-bold shadow-lg hover:from-slate-600 hover:to-gray-700 transition-all duration-300 poppins-bold uppercase tracking-wider"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-[50vw] max-md:w-full max-md:mt-12 mx-auto flex flex-col justify-center items-center text-center">
          <div className="glass-card rounded-2xl p-8 max-w-xl w-full h-full flex flex-col items-center justify-between text-center">
            <div>
              <h3 className="text-3xl text-center poppins-bold font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Support My Work
              </h3>
              <p className="text-sm text-slate-600 poppins-regular leading-relaxed max-w-xs mx-auto">
                Enjoyed my work? You can support me with a chai. ☕
              </p>
            </div>

            <div className="p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-inner my-auto flex items-center justify-center">
              <Image
                src={qrcode}
                alt="QR Code to Support"
                width={240}
                height={240}
                className="w-52 h-52 sm:w-56 sm:h-56 md:w-60 md:h-60 object-contain rounded-lg"
              />
            </div>

            <div className="flex items-center gap-2 text-xs poppins-medium font-semibold text-slate-500 uppercase tracking-widest pt-2">
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
      </section>
      <section className="bg-transparent p-4 mx-auto justify-center items-center text-center">

      </section>
    </section>
  );
}
