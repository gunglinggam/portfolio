import React from 'react';
import CodeBlock from './CodeBlock';

const stats = [
  { label: "Experience", value: "3+", suffix: "Years" },
  { label: "Projects", value: "20+", suffix: "Completed" },
  { label: "Status", value: "Intern", suffix: "@ IDC Ind" },
];

const About = () => {
  return (
    // UBAH DISINI: bg-transparent (Tanpa warna, tanpa grid tambahan)
    <section className="py-24 px-6 relative bg-transparent" id="about">
      
      {/* Saya sisakan sedikit "Glow" hijau/biru tipis di belakang biar teksnya pop-up dari grid.
          Kalau mau benar-benar polos, hapus div 'absolute' di bawah ini. */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* KOLOM KIRI: Code Snippet */}
        <div className="order-2 lg:order-1 w-full flex justify-center lg:justify-end relative group">
           <div className="relative transform transition-all duration-700 hover:scale-[1.01] hover:-rotate-1">
             {/* Glow belakang codeblock dikurangi opacity-nya */}
             <div className="absolute -inset-2 bg-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
             
             <CodeBlock />

             {/* Dekorasi Floating (Opsional) */}
             <div className="absolute -bottom-4 -right-4 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-lg animate-bounce hidden md:block">
                 <span className="text-xl">⚡</span>
             </div>
           </div>
        </div>

        {/* KOLOM KANAN: Text Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 mx-auto lg:mx-0 backdrop-blur-sm">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span className="text-[10px] md:text-xs font-mono text-green-400 tracking-widest uppercase font-bold">Available for Hire</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            More Than Just <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Lines of Code.</span>
          </h2>
          
          <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-light">
            <p>
              Halo! Saya adalah <span className="text-white font-medium">Network Engineer & Web Developer</span>.
            </p>
            <p>
              Saat ini saya aktif sebagai intern di <span className="text-green-400 font-medium">IDC Indonesia</span>, mengelola trafik Data Center sambil terus mengembangkan skill pemrograman saya.
            </p>
            <p className="italic text-gray-500 border-l-2 border-green-500/20 pl-4">
              "Hybrid Skillset: Memahami data dari kabel fisik hingga tampilan layar."
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 border-y border-white/10 py-6 mb-8 bg-transparent">
             {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left group cursor-default">
                   <h4 className="text-2xl md:text-4xl font-bold text-white font-mono group-hover:text-green-400 transition-colors duration-300">{stat.value}</h4>
                   <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1 font-semibold">{stat.label}</p>
                   <p className="text-[10px] text-green-500/60 group-hover:text-green-500 transition-colors">{stat.suffix}</p>
                </div>
             ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <a href="#kontak" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
               Hubungi Saya
             </a>
             <a href="https://github.com/gunglinggam" target="_blank" rel="noreferrer" className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-green-500/50 transition-all flex items-center justify-center gap-2">
               <span>Github</span>
             </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;