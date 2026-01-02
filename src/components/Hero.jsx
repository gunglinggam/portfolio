import React from 'react';
import profileImg from '../assets/images/project3.jpg'; // Pastikan path gambar benar

const Hero = () => {
  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden bg-[#050505]">
      
      {/* 1. BACKGROUND EFFECT (Grid & Glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 relative">
        
        {/* KOLOM KIRI: KONTEN TEKS */}
        <div className="order-2 lg:order-1 flex flex-col items-start space-y-6">
          
          {/* Badge Status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/10 border border-green-500/20 backdrop-blur-sm animate-fade-in-down">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-xs font-mono font-medium tracking-wider">
              READY TO COLLABORATE
            </span>
          </div>

          {/* Headline Utama */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-white">
                Gung Linggam
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl font-light">
              Network Engineer & <span className="text-white font-semibold">Fullstack Developer</span>
            </p>
          </div>
            
          {/* Deskripsi */}
          <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed border-l-2 border-green-500/30 pl-4">
            Siswa SMK Grade 12. Saat ini sedang menjalani 
            <span className="text-green-400 font-bold mx-1">Internship di IDC Indonesia</span>. 
            Menggabungkan pemahaman infrastruktur Data Center dengan kode yang efisien.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#proyek" className="group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 group-hover:text-green-700 transition-colors">Lihat Proyek ↗</span>
              <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out -z-0"></div>
            </a>
            <a href="#kontak" className="px-8 py-3 border border-white/10 bg-white/5 text-white rounded-full hover:bg-white/10 hover:border-green-500/50 transition-all backdrop-blur-md">
              Hubungi Saya
            </a>
          </div>

          {/* Statistik (Glass Effect) */}
          <div className="w-full grid grid-cols-3 gap-4 p-4 mt-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white">3+</h3>
              <p className="text-[10px] text-gray-400 font-mono uppercase">Years Exp</p>
            </div>
            <div className="text-center lg:text-left border-l border-white/10 pl-4">
              <h3 className="text-2xl font-bold text-white">20+</h3>
              <p className="text-[10px] text-gray-400 font-mono uppercase">Projects</p>
            </div>
            <div className="text-center lg:text-left border-l border-white/10 pl-4">
              <h3 className="text-2xl font-bold text-green-400">IDC</h3>
              <p className="text-[10px] text-gray-400 font-mono uppercase">Placement</p>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: FOTO PROFILE */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative group w-72 h-80 md:w-[400px] md:h-[500px]">
            
            {/* Outline Frame (Animasi Berputar Pelan) */}
            <div className="absolute inset-0 border-2 border-dashed border-green-500/30 rounded-2xl animate-[spin_10s_linear_infinite]"></div>
            
            {/* Glow Belakang */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-emerald-800 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Foto Utama */}
            <div className="absolute inset-2 rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
              <img 
                src={profileImg} 
                alt="Gung Linggam Profile" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay Gradient bawah foto agar teks jelas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Floating Card (Status) */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-10 bg-[#111]/90 backdrop-blur-xl border border-green-500/30 p-4 rounded-2xl shadow-xl flex items-center gap-4 transform transition-transform duration-300 hover:scale-110 z-20">
              <div className="relative">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-mono tracking-wider">STATUS</p>
                <p className="text-sm font-bold text-white">Coding & Brewing</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;