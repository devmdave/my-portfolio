import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";



export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&family=Righteous&family=Roboto:ital,wght@0,100..900;1,100..900&family=Signika:wght@300..700&family=The+Nautigal:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <body>
        <Sidebar></Sidebar>
        <Main />
        <NextScript />
      </body>
      <Footer></Footer>
    </Html>
  );
}
