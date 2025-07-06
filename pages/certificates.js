import certificates from '../data/certificates.json';
import Navbar from '../components/navbar';

export default function Certificates() {
  return (
    <>
    <section className="bg-slate-100 h-auto flex flex-col mb-30">
      <Navbar></Navbar>
      <h2 className="text-center text-3xl font-bold text-slate-700 mb-10 uppercase tracking-wider">Certificates</h2>
      <div className="flex mx-auto max-md:w-[80vw] h-auto flex-col gap-8 w-full max-w-2xl">
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
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}