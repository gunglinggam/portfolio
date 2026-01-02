import React from 'react';

const gearCategories = [
  {
    id: "ws-01",
    title: "Workstation",
    subtitle: "Main Driver",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m-9 0V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18v-5.25m0 0a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v5.25m0 0h15" />
      </svg>
    ),
    items: [
      { name: "CPU", detail: "AMD Ryzen 5" },
      { name: "RAM", detail: "16GB Dual Ch." },
      { name: "Storage", detail: "512GB NVMe" },
      { name: "OS", detail: "Win 11 + WSL2" },
      { name: "Monitor", detail: "24\" IPS 1080p" }
    ]
  },
  {
    id: "env-02",
    title: "Dev Environment",
    subtitle: "Software Stack",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    items: [
      { name: "Editor", detail: "VS Code" },
      { name: "Font", detail: "JetBrains Mono" },
      { name: "Terminal", detail: "Zsh + P10k" },
      { name: "Browser", detail: "Chrome Dev" },
      { name: "Git GUI", detail: "GitHub Desktop" }
    ]
  },
  {
    id: "net-03",
    title: "Network Tools",
    subtitle: "Infrastructure",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    items: [
      { name: "Config", detail: "WinBox & PuTTY" },
      { name: "Analysis", detail: "Wireshark" },
      { name: "Virtual", detail: "GNS3 / EVE-NG" },
      { name: "Docker", detail: "Desktop ver." },
      { name: "VPN", detail: "OpenVPN" }
    ]
  },
];

const MyGear = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative" id="gear">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-sm">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 <span className="text-[10px] font-mono text-green-400 tracking-[0.2em] uppercase">System_Manifest.json</span>
             </div>
             
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Arsenal</span>
             </h2>
             
             <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed px-2">
                Kumpulan perangkat keras dan ekosistem perangkat lunak yang saya gunakan sehari-hari untuk <span className="text-green-400 font-medium font-mono">coding</span>, <span className="text-green-400 font-medium font-mono">sysadmin</span>, dan <span className="text-green-400 font-medium font-mono">deployment</span>.
             </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {gearCategories.map((category, index) => (
            <div key={index} className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500">
              
              {/* Card Border Gradient */}
              <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent group-hover:from-green-500/50 group-hover:to-transparent transition-colors duration-500"></div>

              {/* Inner Content */}
              <div className="relative h-full bg-[#0c0c0c] rounded-2xl p-5 md:p-8 flex flex-col">
                 
                 {/* Tech Decor: Corner Lines (Hidden on Mobile to reduce noise, visible on md) */}
                 <div className="hidden md:block absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20 group-hover:border-green-500/50 transition-colors"></div>
                 <div className="hidden md:block absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20 group-hover:border-green-500/50 transition-colors"></div>

                 {/* Header Card */}
                 <div className="flex items-center md:items-start justify-between mb-6 md:mb-8">
                    <div className="p-2 md:p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 group-hover:text-green-400 group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-all duration-300 shadow-lg">
                       {category.icon}
                    </div>
                    <span className="font-mono text-[10px] text-gray-600 border border-white/5 px-2 py-1 rounded bg-black">
                        ID: {category.id}
                    </span>
                 </div>

                 {/* Title */}
                 <div className="mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">{category.title}</h3>
                    <p className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">{category.subtitle}</p>
                 </div>

                 {/* Specs List */}
                 <div className="space-y-3 md:space-y-4 mt-auto">
                    {category.items.map((item, idx) => (
                       <div key={idx} className="group/item flex items-center justify-between text-xs md:text-sm">
                          <span className="text-gray-500 font-mono shrink-0">{item.name}</span>
                          
                          {/* Dotted Line Filler */}
                          <div className="flex-1 mx-2 md:mx-3 border-b border-dashed border-gray-800 group-hover/item:border-green-500/30 transition-colors h-[1px] self-center"></div>
                          
                          <span className="text-gray-300 font-medium text-right group-hover:text-white transition-colors shrink-0">
                              {item.detail}
                          </span>
                       </div>
                    ))}
                 </div>

                 {/* Bottom Glow Effect */}
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/0 to-transparent group-hover:via-green-500/50 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MyGear;