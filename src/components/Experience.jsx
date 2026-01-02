import React from 'react';
import SpotlightCard from './SpotlightCard';

const experiences = [
  {
    id: 1,
    role: "Network Engineer Intern",
    company: "IDC Indonesia",
    period: "Nov 2024 - Sekarang", // Sesuaikan tahunnya
    description: "Melakukan monitoring trafik Data Center Tier-3. Bertanggung jawab atas troubleshooting jaringan dasar, konfigurasi router Mikrotik untuk klien, dan memastikan uptime server tetap stabil.",
    tags: ["Network Monitoring", "Mikrotik", "Troubleshooting", "Cisco Packet Tracer"],
    active: true, // Sedang aktif
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 - Sekarang",
    description: "Mengerjakan proyek pembuatan website untuk UMKM dan tugas sekolah. Membangun antarmuka modern menggunakan React.js dan Tailwind CSS dengan fokus pada performa dan responsivitas.",
    tags: ["React.js", "Tailwind CSS", "UI/UX Design"],
    active: false,
  },
  {
    id: 3,
    role: "Siswa Rekayasa Perangkat Lunak",
    company: "SMK Negeri 8 Jakarta",
    period: "2022 - 2025",
    description: "Mempelajari dasar-dasar algoritma pemrograman, basis data, dan jaringan komputer. Aktif dalam kegiatan praktik kejuruan dan eksplorasi teknologi web terbaru.",
    tags: ["HTML/CSS", "JavaScript", "Database", "Linux Admin"],
    active: false,
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden" id="pengalaman">
      
      {/* Background Glow Hiasan */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full"></div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">&</span> Milestones
        </h2>
        <p className="text-gray-400">Jejak langkah pendidikan dan pengalaman profesional saya.</p>
      </div>

      <div className="relative z-10">
        {/* GARIS TENGAH (Timeline Line) */}
        {/* Desktop: Tengah, Mobile: Kiri */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* TITIK (Node) */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 mt-6 md:mt-0 flex items-center justify-center z-10 md:-translate-y-1/2 md:top-1/2 md:-translate-x-1/2">
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${exp.active ? 'bg-green-500 border-green-300 shadow-[0_0_20px_rgba(34,197,94,0.8)]' : 'bg-[#0a0a0a] border-gray-600 group-hover:border-green-500'}`}></div>
                {exp.active && <div className="absolute w-8 h-8 bg-green-500/30 rounded-full animate-ping"></div>}
              </div>

              {/* Spacer Kosong (Untuk Layout Zig-Zag) */}
              <div className="hidden md:block w-1/2"></div>

              {/* KONTEN KARTU */}
              <div className="w-full md:w-1/2 pl-20 md:pl-0 group">
                {/* Logic Padding: Kalau index genap (Kanan), padding left desktop ada. Kalau ganjil (Kiri), padding right desktop ada. */}
                <div className={`md:px-8 transition-transform duration-500 hover:-translate-y-2`}>
                    
                    <SpotlightCard className="h-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 p-6 rounded-2xl relative overflow-hidden group-hover:border-green-500/30 transition-colors">
                        
                        {/* Header Kartu */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{exp.role}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm font-mono text-gray-400">@ {exp.company}</span>
                                    {exp.active && (
                                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                    )}
                                </div>
                            </div>
                            <span className="text-xs font-mono py-1 px-3 rounded-full border border-white/10 bg-white/5 text-green-400">
                                {exp.period}
                            </span>
                        </div>

                        {/* Deskripsi */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {exp.description}
                        </p>

                        {/* Tags / Skillset */}
                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag, idx) => (
                                <span key={idx} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5 group-hover:border-green-500/20 group-hover:text-green-400 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </SpotlightCard>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;