import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-6 relative" id="kontak">
      {/* Container Utama */}
      <div className="max-w-6xl mx-auto relative group">
        
        {/* 1. Efek Glow di Belakang Container (Ambient Light) */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

        {/* 2. Kartu Utama */}
        <div className="relative bg-[#0a0a0a] rounded-[2rem] p-8 md:p-16 text-center border border-white/10 overflow-hidden">
            
            {/* Background Grid Pattern (Teknis banget!) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Dekorasi Lingkaran Hijau Halus */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]"></div>

            {/* Konten (Z-Index biar di atas background) */}
            <div className="relative z-10 flex flex-col items-center">
                
                {/* Badge Kecil */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 mb-6 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-green-400 text-xs font-bold tracking-widest uppercase">Open for Work</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Let's Build Something <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Legendary.</span>
                </h2>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Tertarik mengembangkan infrastruktur jaringan atau aplikasi web modern? 
                    Mari berdiskusi untuk mengubah ide Anda menjadi solusi digital yang nyata.
                </p>

                {/* Tombol-tombol Keren */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    
                    {/* Tombol Email / WA */}
                    <a 
                        href="mailto:gunglinggam99@gmail.com" 
                        className="group relative px-8 py-4 bg-green-500 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            Mulai Diskusi
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </span>
                    </a>

                    {/* Tombol Download CV */}
                    <a 
                        href="/cv-gunglinggam.pdf" // Ganti dengan path CV kamu
                        target="_blank"
                        className="group px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all flex items-center justify-center gap-2"
                    >
                        <span>Download CV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;