import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-4 md:px-6 relative" id="kontak">
      
      {/* Container Utama */}
      <div className="max-w-5xl mx-auto relative group">
        
        {/* 1. Ambient Glow (Bernapas/Pulsing) */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-500 animate-pulse"></div>

        {/* 2. Kartu Utama */}
        <div className="relative bg-[#080808] rounded-[2rem] p-8 md:p-16 text-center border border-white/10 overflow-hidden shadow-2xl">
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            {/* Efek Spotlight Atas */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Konten (Z-Index biar di atas background) */}
            <div className="relative z-10 flex flex-col items-center">
                
                {/* Terminal Header Tiny */}
                <p className="font-mono text-[10px] text-green-500/60 mb-4 tracking-widest uppercase">
                    &gt;_ INITIATE_PROTOCOL: COLLABORATION
                </p>

                {/* Badge Status */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-green-950/30 border border-green-500/20 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 text-xs font-bold tracking-widest uppercase font-mono">
                        System Online & Ready
                    </span>
                </div>

                {/* Headline Besar */}
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Let's Build Something <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                        Legendary.
                    </span>
                </h2>

                {/* Subtext */}
                <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Tertarik mengembangkan infrastruktur jaringan yang aman atau aplikasi web modern? 
                    Ubah ide kompleks Anda menjadi <span className="text-gray-200 font-medium">solusi digital nyata</span> bersama saya.
                </p>

                {/* Tombol Action */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                    
                    {/* Tombol Email / WA (Primary) */}
                    <a 
                        href="mailto:gunglinggam99@gmail.com" 
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto text-center"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent z-10 w-full h-full"></div>
                        
                        <span className="relative z-20 flex items-center justify-center gap-2 text-sm md:text-base">
                            Mulai Diskusi
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </span>
                    </a>

                    {/* Tombol Download CV (Secondary) */}
                    <a 
                        href="/cv-gunglinggam.pdf" 
                        target="_blank"
                        className="group px-8 py-4 bg-transparent text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 hover:border-green-500/50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center text-sm md:text-base"
                    >
                        <span>Download CV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform text-gray-400 group-hover:text-green-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </a>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;