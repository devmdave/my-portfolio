import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed left-4 bottom-8 z-50 bg-gradient-to-r from-gray-500 to-slate-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  );
}