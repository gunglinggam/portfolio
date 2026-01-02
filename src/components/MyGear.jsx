import React from 'react';

const gearCategories = [
  {
    title: "Workstation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m-9 0V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18v-5.25m0 0a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v5.25m0 0h15" />
      </svg>
    ),
    items: [
      { name: "CPU", detail: "AMD Ryzen 5 / Intel Core i5" },
      { name: "RAM", detail: "16GB Dual Channel" },
      { name: "Storage", detail: "512GB NVMe M.2 SSD" },
      { name: "OS", detail: "Windows 11 + WSL2 (Ubuntu)" },
      { name: "Display", detail: "24\" IPS 1080p Monitor" }
    ]
  },
  {
    title: "Dev Environment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    items: [
      { name: "Editor", detail: "VS Code (Dracula Theme)" },
      { name: "Font", detail: "Fira Code / JetBrains Mono" },
      { name: "Terminal", detail: "Zsh + Oh My Zsh + Powerlevel10k" },
      { name: "Browser", detail: "Chrome Dev & Brave" },
      { name: "Version", detail: "Git & GitHub Desktop" }
    ]
  },
  {
    title: "Network Tools",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    items: [
      { name: "Config", detail: "WinBox (Mikrotik) & PuTTY" },
      { name: "Analysis", detail: "Wireshark & PingPlotter" },
      { name: "Virtual", detail: "GNS3 / EVE-NG / Packet Tracer" },
      { name: "Container", detail: "Docker Desktop" },
      { name: "VPN", detail: "OpenVPN & WireGuard" }
    ]
  },
];

const MyGear = () => {
  return (
    <section className="py-24 px-6 relative" id="gear">
      
      {/* Background Tech Accent */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M12 2v20M2 12h20"/></svg>
                 <span className="text-xs font-mono text-green-400 tracking-widest uppercase">INVENTORY</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Arsenal</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-lg">
                Perangkat keras dan lunak yang saya gunakan untuk menunjang produktivitas coding dan manajemen jaringan.
              </p>
           </div>
           
           {/* Decorative Spec Status */}
           <div className="hidden md:block text-right">
              <p className="text-xs font-mono text-gray-500">SYSTEM STATUS</p>
              <p className="text-green-400 font-bold font-mono text-xl">OPTIMIZED</p>
           </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gearCategories.map((category, index) => (
            <div key={index} className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-1 overflow-hidden hover:border-green-500/50 transition-colors duration-300">
              
              {/* Inner Card */}
              <div className="bg-[#111] rounded-xl h-full p-6 relative z-10">
                 
                 {/* Card Header */}
                 <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-green-400 group-hover:bg-green-500/10 group-hover:border-green-500/30 transition-all">
                       {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                       {category.title}
                    </h3>
                 </div>

                 {/* Specs List (Table Style) */}
                 <div className="space-y-4 font-mono text-sm">
                    {category.items.map((item, idx) => (
                       <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center pb-3 border-b border-white/5 last:border-0 last:pb-0 gap-1 sm:gap-0">
                          <span className="text-gray-500 uppercase text-[10px] tracking-wider">{item.name}</span>
                          <span className="text-gray-300 group-hover:text-white transition-colors text-right">{item.detail}</span>
                       </div>
                    ))}
                 </div>

              </div>
              
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Quote / Footer */}
        <div className="mt-12 text-center">
          <code className="text-gray-600 text-sm">
             /* "Tools yang tepat tidak membuatmu ahli, tapi memudahkanmu menjadi ahli." */
          </code>
        </div>

      </div>
    </section>
  );
};

export default MyGear;