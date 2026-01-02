import React from 'react';

// Data Tech Stack dengan Icon SVG (Vector)
const techStack = [
  { 
    name: "React", 
    color: "text-cyan-400",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 21.36c-5.17 0-9.36-4.19-9.36-9.36S6.83 2.64 12 2.64s9.36 4.19 9.36 9.36-4.19 9.36-9.36 9.36zm0-16.72c-4.06 0-7.36 3.3-7.36 7.36s3.3 7.36 7.36 7.36 7.36-3.3 7.36-7.36-3.3-7.36-7.36-7.36zm0 2.5c2.68 0 4.86 2.18 4.86 4.86S14.68 16.86 12 16.86s-4.86-2.18-4.86-4.86 2.18-4.86 4.86-4.86z"/><circle cx="12" cy="12" r="2"/></svg>
  },
  { 
    name: "Tailwind", 
    color: "text-sky-400",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
  },
  { 
    name: "JavaScript", 
    color: "text-yellow-400",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3 3h18v18H3V3zm13.64 13.1c.54 0 .93-.2 1.15-.6l1.37.8c-.5.85-1.4 1.4-2.5 1.4-1.77 0-2.8-1.18-2.8-3s1.08-3.07 2.85-3.07c.86 0 1.65.37 2.2 1.07l-1.2.9c-.3-.43-.7-.66-1.1-.66-.9 0-1.4.67-1.4 1.76 0 1.1.5 1.7 1.43 1.7zm-6.28 0c.56 0 .9-.22 1.07-.6l1.4.8c-.5.87-1.4 1.4-2.6 1.4-1.5 0-2.24-.87-2.24-2.43V9.6h1.75v5.52c0 .76.28 1.06.87 1.06z"/></svg>
  },
  { 
    name: "Node.js", 
    color: "text-green-500",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-10 5 8-4-8 4 8-4zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  },
  { 
    name: "Python", 
    color: "text-blue-400",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-2.95H8.26l-.94.1-.75.2-.62.26-.52.3-.41.31-.32.3-.25.29-.19.26-.14.23-.09.19-.07.16-.04.13-.02.1v3.42h4.5v2.85h-9V8.65h2.25v-.7l.02-.27.05-.26.09-.25.13-.23.16-.21.2-.19.24-.16.27-.13.31-.1.34-.06.36-.03h5.85l.48-.03.45-.07.41-.12.37-.16.32-.21.28-.24.23-.28.18-.31.13-.33.09-.34.05-.34.02-.34V.18z"/></svg>
  },
  { 
    name: "Mikrotik", 
    color: "text-gray-300",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><path d="M6 14v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"></path><line x1="12" y1="14" x2="12" y2="6"></line><line x1="12" y1="2" x2="12" y2="2"></line></svg>
  },
  { 
    name: "Cisco", 
    color: "text-cyan-600",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M5 18v-3a6 6 0 0 1 5-5h4a6 6 0 0 1 5 5v3"></path><circle cx="5" cy="18" r="3"></circle><circle cx="19" cy="18" r="3"></circle></svg>
  },
  { 
    name: "Linux", 
    color: "text-yellow-200",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.5 5.5c2.3 2.3 2 5.3 1.4 7.2-.6 2-2.5 3-4.5 4.5 1.5.5 3 2.5 3 4.5 0 1.5-3 2.5-6 2.5s-6-1-6-2.5c0-2 1.5-4 3-4.5-2-1.5-3.9-2.5-4.5-4.5C3.3 10.8 3 7.8 5.3 5.5c2.5-2.5 6.3-2.9 8.2-.4.8-1 2.3-.9 4 .4z"/></svg>
  },
  { 
    name: "Docker", 
    color: "text-blue-500",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M4.8 11.2h2.4v2.4H4.8v-2.4zm2.8 0h2.4v2.4H7.6v-2.4zm-5.6 2.8h2.4v2.4H2v-2.4zm2.8 0h2.4v2.4H4.8v-2.4zm2.8 0h2.4v2.4H7.6v-2.4zm2.8 0h2.4v2.4h-2.4v-2.4zm2.8-2.8h2.4v2.4h-2.4v-2.4zm2.8-2.8h2.4v2.4h-2.4V8.4zm0-2.8h2.4v2.4h-2.4V5.6zM22 15c0 3.866-3.134 7-7 7H5c-1.124 0-2.185-.265-3.134-.735L2.4 20.8A6.96 6.96 0 0 1 2 19.34V16.8h19.2V15c.012 0 .025.006.037.006.253 0 .502-.016.746-.046A6.983 6.983 0 0 0 22 15z"/></svg>
  },
];

const TechStack = () => {
  return (
    // Hapus bg-[#0a0a0a] dan border-y agar menyatu dengan background utama
    <section className="py-24 relative overflow-hidden">
      
      {/* 1. Background Decorations (Biar samar & sesuai tema) */}
      {/* Grid Pattern Halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
      {/* Central Glow subtle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Judul Kecil (Badge Style) */}
      <div className="text-center mb-10 relative z-10">
         <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Technologies & Tools</span>
         </span>
      </div>

      {/* Style CSS untuk animasi scroll */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Container Marquee dengan Masking Gradient Kiri-Kanan */}
      <div 
        className="flex w-full overflow-hidden select-none relative z-10"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        {/* Wrapper Gerak */}
        <div className="flex animate-scroll min-w-full gap-6">
          
          {/* Loop array data 2x (Original + Duplicate) */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-green-500/30 hover:bg-white/10 transition-all duration-300 group cursor-default whitespace-nowrap backdrop-blur-sm"
            >
              {/* Icon Container */}
              <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`}>
                {tech.icon}
              </div>
              
              {/* Text */}
              <span className="text-base font-bold text-gray-400 group-hover:text-white transition-colors font-mono">
                {tech.name}
              </span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default TechStack;