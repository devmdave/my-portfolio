import certificates from '../data/certificates.json';
import Navbar from '../components/navbar';

export default function Certificates() {
  return (
    <>
    <section className="h-auto flex flex-col">
      <Navbar></Navbar>
      <div className="relative flex justify-center items-center w-full pt-32 pb-20 md:pt-40 md:pb-24 animate-fadeInUp">
        <h1 className="absolute text-[14vw] md:text-[110px] lg:text-[150px] font-black text-gray-400 uppercase tracking-normal select-none z-0" style={{ WebkitTextStroke: '4px currentColor' }}>
          CERTIFICATES
        </h1>
      </div>
      <div className="relative z-10 mb-30 flex mx-auto max-md:w-[80vw] h-auto flex-col gap-8 w-full max-w-2xl">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-64 mb-4 md:mb-0 md:mr-6">
              <iframe
                src={cert.redirect_url}
                title={cert.title}
                className="w-full h-full rounded border"
              ></iframe>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg text-slate-700 mb-2 text-center md:text-left">{cert.title}</h3>
              <p className="text-slate-500 text-center md:text-left mb-4">{cert.desc}</p>
              <a
                href={cert.download_url}
                rel="noopener noreferrer"
                download
                className="px-6 py-2 rounded-full bg-gradient-to-r from-gray-500 to-slate-700 text-white font-bold shadow hover:from-slate-600 hover:to-gray-700 transition-all duration-300"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
