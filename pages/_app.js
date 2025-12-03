import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   const handleContextMenu = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", handleContextMenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  return <Component {...pageProps} />;
}
