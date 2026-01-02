import React from 'react';
import SpotlightCard from './SpotlightCard';

const experiences = [
  {
    id: 1,
    role: "Network Engineer Intern",
    company: "IDC Indonesia",
    period: "Nov 2024 - Sekarang",
    description: "Monitoring trafik Data Center Tier-3. Troubleshooting jaringan, konfigurasi Mikrotik, dan menjaga uptime server.",
    tags: ["Network Monitoring", "Mikrotik", "Cisco Packet Tracer"],
    active: true,
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 - Sekarang",
    description: "Membangun website modern untuk UMKM dan proyek sekolah menggunakan ekosistem React & Tailwind.",
    tags: ["React.js", "Tailwind CSS", "UI/UX"],
    active: false,
  },
  {
    id: 3,
    role: "Siswa Rekayasa Perangkat Lunak",
    company: "SMK Negeri 8 Jakarta",
    period: "2023 - 2025",
    description: "Fokus pembelajaran pada algoritma, database relasional, dan administrasi sistem operasi Linux.",
    tags: ["HTML/CSS", "MySQL", "Linux Admin"],
    active: false,
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden" id="pengalaman">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Path</span>
        </h2>
        <div className="h-1 w-20 bg-green-500 mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* GARIS TIMELINE TENGAH (The Laser Beam) */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-green-500/50 to-transparent md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row items-center w-full group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* 1. THE NODE (Titik Tengah) */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                {/* Outer Ring */}
                <div className="w-8 h-8 rounded-full border border-green-500/30 bg-[#0a0a0a] flex items-center justify-center group-hover:scale-110 group-hover:border-green-400 transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                   {/* Inner Dot */}
                   <div className={`w-2 h-2 rounded-full transition-all duration-500 ${exp.active ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]' : 'bg-gray-500 group-hover:bg-green-500'}`}></div>
                </div>
              </div>

              {/* [DELETED] THE CONNECTOR (Garis Horizontal sudah dihapus) */}

              {/* Spacer untuk Zig-Zag */}
              <div className="w-full md:w-1/2"></div>

              {/* 3. CARD CONTENT */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 md:px-12`}>
                 <SpotlightCard className="relative bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-500 group-hover:-translate-y-1">
                    
                    {/* Tech Decor: Sudut Siku */}
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" className="text-green-500/40"><path d="M0 0H20V20" strokeWidth="1"></path></svg>
                    </div>

                    {/* Badge Tahun (Floating) */}
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className={`text-xs font-mono py-1 px-3 rounded border ${exp.active ? 'border-green-500/30 bg-green-500/10 text-green-400' : 'border-white/10 bg-white/5 text-gray-400'}`}>
                           {exp.period}
                        </span>
                        {exp.active && <span className="flex w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>}
                    </div>

                    {/* Judul & Perusahaan */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                        {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-green-600/80 mb-4 flex items-center gap-2">
                        <span className="text-green-500">@</span> {exp.company}
                    </p>

                    {/* Deskripsi */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-white/5 pl-4 group-hover:border-green-500/20 transition-colors">
                        {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, idx) => (
                            <span key={idx} className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-1 rounded transition-colors group-hover:border-green-500/20 group-hover:text-green-300">
                                #{tag}
                            </span>
                        ))}
                    </div>

                 </SpotlightCard>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;