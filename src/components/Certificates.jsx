import React from 'react';

import img1 from '../assets/images/robot.jpeg';
import img2 from '../assets/images/sertifikat.jpeg';
import img3 from '../assets/images/lks.jpeg';

const certificates = [
  {
    id: 1,
    title: "Robothon Certified Participant",
    issuer: "Robothon ID",
    date: "2024",
    category: "Robotics",
    credentialId: "ID: 8X-992-MTC",
    image: img1,
    link: "#"
  },
  {
    id: 2,
    title: "Sertifikasi Internasional Microsoft SC-900",
    issuer: "Microsoft",
    date: "2023",
    category: "IT Certification",
    credentialId: "ID: DC-FE-2023",
    image: img2,
    link: "https://www.instagram.com/p/C_z-yEpy5rR/?img_index=7&igsh=MTN1MmV0ZXlvdWMybQ=="
  },
  {
    id: 3,
    title: "Juara 2&3 LKS Cyber Security SMK DKI Jakarta",
    issuer: "Dinas Pendidikan DKI Jakarta",
    date: "2023-2024",
    category: "Cyber Security",
    credentialId: "ID: LKS-DKI-25",
    image: img3,
    link: "#"
  },
];

const Certificates = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto relative" id="sertifikat">
      
      {/* Background Decoration */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Licensed <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">& verified.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            Dokumentasi validasi kompetensi teknis dan prestasi yang telah saya raih selama masa pendidikan dan magang.
          </p>
        </div>
        
        <a href="#" className="hidden md:flex group items-center gap-2 text-green-400 font-mono text-sm border border-green-500/30 px-4 py-2 rounded-lg hover:bg-green-500/10 transition-all">
          <span>ARSIP LENGKAP</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>

      {/* Grid Sertifikat */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {certificates.map((cert) => (
          <div key={cert.id} className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:-translate-y-2">
            
            {/* Image Container dengan Efek Scanline */}
            <div className="h-56 overflow-hidden relative">
              
              {/* FIX: Overlay Gelap
                 Mobile: bg-transparent (Bening)
                 Desktop: bg-black/20 (Gelap dikit) -> hover jadi Bening
              */}
              <div className="absolute inset-0 bg-transparent md:bg-black/20 md:group-hover:bg-transparent transition-all z-10"></div>
              
              {/* Efek Garis Scan Hijau saat Hover (Tetap ada di desktop) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-20 pointer-events-none"></div>
              
              {/* FIX: Image Grayscale
                 Mobile: grayscale-0 (Berwarna)
                 Desktop: grayscale (Hitam Putih) -> hover jadi Berwarna
              */}
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover 
                           grayscale-0 md:grayscale md:group-hover:grayscale-0 
                           group-hover:scale-110 transition-all duration-700" 
              />
              
              {/* Badge Kategori */}
              <div className="absolute top-4 left-4 z-20">
                 <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-black/80 backdrop-blur-md text-green-400 border border-green-500/30 rounded-full shadow-lg">
                    {cert.category}
                 </span>
              </div>
            </div>
            
            {/* Content Info */}
            <div className="p-6 relative">
              {/* Garis Dekorasi */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-white/5"></div>

              <div className="flex justify-between items-start mb-3">
                 <p className="text-xs text-green-400 font-mono flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-green-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    {cert.issuer}
                 </p>
                 <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
              </div>

              {/* Judul: Di mobile warnanya dibikin agak terang dikit defaultnya */}
              <h3 className="text-lg font-bold text-gray-100 md:text-white leading-snug mb-4 group-hover:text-green-400 transition-colors">
                {cert.title}
              </h3>

              {/* Footer Kartu: ID & Link */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                 <code className="text-[10px] text-gray-500 md:text-gray-600 font-mono bg-white/5 px-2 py-1 rounded">
                    {cert.credentialId}
                 </code>
                 
                 <a href={cert.link} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 text-white active:bg-green-500 active:text-black md:hover:bg-green-500 md:hover:text-black transition-all transform md:hover:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                 </a>
              </div>
            </div>

          </div>
        ))}
      </div>
      
      {/* Tombol Arsip Lengkap (Mobile Only - ditaruh dibawah biar gampang dijangkau) */}
      <div className="mt-8 flex justify-center md:hidden">
        <a href="#" className="group flex items-center gap-2 text-green-400 font-mono text-sm border border-green-500/30 px-6 py-3 rounded-lg active:bg-green-500/10 transition-all w-full justify-center">
            <span>LIHAT ARSIP LENGKAP</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>

    </section>
  );
};

export default Certificates;