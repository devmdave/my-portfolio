import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-white p-6">
      <div className="text-center">
        <a
          href="/my-portfolio"
          className="flex items-center justify-center mt-5 mb-5 text-2xl font-semibold text-gray-900"
        >
          <h1 className="nautigal-bold duration-1000 ease-in-out transition-all text-center text-6xl text-slate-700 hover:text-[#D5C455]">
            &lt;m.dev/&gt;
          </h1>
        </a>

        <span className="block text-sm text-center text-gray-500">
          © 2025 . All Rights Reserved.
          
        </span>
        <span className="block nautigal-bold text-2xl text-center text-black">
          Crafted by Madhav Dave<span className="text-rose-500 poppins-thin"> &#9829;</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
