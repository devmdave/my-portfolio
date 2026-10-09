import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=The+Nautigal:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/my-portfolio/icon.png" />
      </Head>

      <body>
        <Sidebar></Sidebar>
        <Main />
        <NextScript />
        <Footer></Footer>
      </body>
    </Html>
  );
}
