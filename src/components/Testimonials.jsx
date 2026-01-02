import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      
      {/* Container Utama */}
      <div className="max-w-4xl mx-auto relative group">
        
        {/* Efek Glow di Belakang (Blur) */}
        <div className="absolute inset-0 bg-green-500/5 blur-[80px] rounded-full pointer-events-none"></div>

        {/* Card Kotak */}
        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl">
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

          {/* Dekorasi Sudut (Corner Brackets) */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-green-500/30 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-green-500/30 rounded-br-2xl"></div>

          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 opacity-60">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] md:text-xs font-mono text-green-400 tracking-widest uppercase">
               // SYSTEM_LOG: INSPIRATION_PACKET
             </span>
          </div>

          {/* Icon Kutip Besar (SVG) */}
          <div className="absolute top-6 right-8 text-white/5 transform scale-150 rotate-12 pointer-events-none select-none">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
          </div>

          {/* Konten Utama */}
          <div className="relative z-10 text-center">
            <h2 className="text-xl md:text-3xl font-medium text-white leading-relaxed font-mono">
              "
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold">
                Technology
              </span> 
              {' '}is best when it brings people together."
            </h2>
            
            <div className="mt-8 flex flex-col items-center">
               <div className="h-[1px] w-12 bg-green-500/50 mb-4"></div>
               <p className="text-white font-bold text-sm tracking-wide">
                 MATT MULLENWEG
               </p>
               <p className="text-green-500/60 text-[10px] uppercase tracking-widest mt-1 font-mono">
                 Co-Founder of WordPress
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;