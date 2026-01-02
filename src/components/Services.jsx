import React from 'react';
import SpotlightCard from './SpotlightCard';

const services = [
  {
    id: 1,
    title: "Network Engineering",
    description: "Merancang topologi jaringan enterprise yang aman, stabil, dan scalable. Fokus pada manajemen bandwidth dan keamanan router.",
    techs: ["Mikrotik RouterOS", "Cisco Packet Tracer", "VPN Tunneling", "VLAN"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Fullstack Web Dev",
    description: "Membangun aplikasi web modern dengan performa tinggi. Dari tampilan antarmuka (Frontend) hingga logika server (Backend).",
    techs: ["React.js", "Tailwind CSS", "Node.js", "REST API"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "IT Support & SysAdmin",
    description: "Instalasi, konfigurasi, dan maintenance sistem operasi server. Troubleshooting hardware dan software untuk memastikan uptime operasional.",
    techs: ["Linux (Debian/Ubuntu)", "Windows Server", "Hardware Repair", "Virtualization"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.07 0 2.049.52 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="layanan">
      
      {/* Background Grid Pattern (Supaya konsisten sama About) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
             <span className="text-xs font-mono text-green-400 tracking-widest uppercase">WHAT I DO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Kombinasi pemahaman infrastruktur keras dan fleksibilitas perangkat lunak.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <SpotlightCard key={service.id} className="h-full bg-[#0a0a0a] rounded-3xl border border-white/10">
              <div className="p-8 h-full flex flex-col relative z-20 group">
                
                {/* Dekorasi Sudut (Corner Accents) */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-3xl"></div>

                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:border-green-500/30 group-hover:text-green-400 transition-all duration-300 shadow-lg">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Tech Stack List */}
                <div className="border-t border-white/10 pt-6">
                    <p className="text-[10px] font-mono text-gray-500 mb-3 uppercase tracking-wider">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                        {service.techs.map((tech, idx) => (
                            <span key={idx} className="text-xs font-medium text-green-400/80 bg-green-500/5 px-2 py-1 rounded border border-green-500/10">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;