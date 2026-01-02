import React from 'react';
import SpotlightCard from './SpotlightCard';

const services = [
  {
    id: "SVC-01",
    title: "Network Engineering",
    description: "Merancang topologi jaringan enterprise yang aman, stabil, dan scalable. Fokus pada manajemen bandwidth dan keamanan router.",
    techs: ["Mikrotik", "Cisco", "VPN Tunneling", "VLAN Config"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: "SVC-02",
    title: "Fullstack Web Dev",
    description: "Membangun aplikasi web modern dengan performa tinggi. Dari tampilan antarmuka (Frontend) hingga logika server (Backend).",
    techs: ["React.js", "Tailwind", "Node.js", "REST API"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: "SVC-03",
    title: "IT Support & SysAdmin",
    description: "Instalasi, konfigurasi, dan maintenance sistem operasi server. Troubleshooting hardware dan software untuk uptime maksimal.",
    techs: ["Linux Server", "Windows Server", "Hardware", "Virtualization"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.07 0 2.049.52 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden" id="layanan">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-[10px] font-mono text-green-400 tracking-widest uppercase">Service_Catalog</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Kombinasi pemahaman infrastruktur keras dan fleksibilitas perangkat lunak untuk solusi digital yang menyeluruh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <SpotlightCard key={service.id} className="h-full bg-[#0a0a0a] rounded-2xl border border-white/10 hover:border-green-500/30 transition-colors duration-500 group relative">
              <div className="p-6 md:p-8 h-full flex flex-col relative z-20">
                
                {/* Decorative Corners (Siku Tech) */}
                <div className="absolute top-0 right-0 p-4 opacity-50 transition-opacity group-hover:opacity-100">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-green-500/50"><path d="M0 0H15V15" stroke="currentColor" strokeWidth="1"></path></svg>
                </div>
                <div className="absolute bottom-0 left-0 p-4 opacity-50 transition-opacity group-hover:opacity-100">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-green-500/50"><path d="M0 15V0H15" stroke="currentColor" strokeWidth="1" transform="rotate(180 7.5 7.5)"></path></svg>
                </div>

                {/* Top Bar: Icon & ID */}
                <div className="flex justify-between items-start mb-8">
                    {/* Icon Box */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-green-500/20 group-hover:text-green-400 group-hover:border-green-500/50 transition-all duration-500 shadow-lg">
                        {service.icon}
                    </div>
                    {/* ID Badge */}
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-gray-600 group-hover:text-green-500/70 transition-colors">ID: {service.id}</span>
                        <div className={`w-12 h-[1px] mt-1 bg-gray-800 group-hover:bg-green-500/50 transition-colors`}></div>
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow border-l-2 border-transparent pl-0 group-hover:border-green-500/30 group-hover:pl-4 transition-all duration-300">
                  {service.description}
                </p>

                {/* Tech Stack List */}
                <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-[1px] w-4 bg-gray-700"></div>
                        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Capabilities</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {service.techs.map((tech, idx) => (
                            <span key={idx} className="text-[11px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-1 rounded group-hover:border-green-500/20 group-hover:text-green-300 transition-colors">
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