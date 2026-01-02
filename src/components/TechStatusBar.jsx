import React, { useState, useEffect } from 'react';

const TechStatusBar = () => {
  const [time, setTime] = useState(new Date());
  const [ping, setPing] = useState(24);

  // Update Jam
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulator Ping (Biar kelihatan live)
  useEffect(() => {
    const pingTimer = setInterval(() => {
      setPing(Math.floor(Math.random() * (45 - 15 + 1) + 15));
    }, 3000);
    return () => clearInterval(pingTimer);
  }, []);

  return (
    <footer className="fixed bottom-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 px-4 h-8 z-[100] flex justify-between items-center select-none overflow-hidden">
      
      {/* --- KIRI: Status & Ping --- */}
      <div className="flex items-center gap-4 text-[10px] md:text-xs font-mono">
        
        {/* Status Online */}
        <div className="flex items-center gap-2 group cursor-help">
           <div className="relative flex items-center justify-center">
             <span className="w-2 h-2 rounded-full bg-green-500 absolute animate-ping opacity-75"></span>
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 relative z-10"></span>
           </div>
           <span className="text-green-500 font-bold tracking-wider group-hover:text-green-400 transition-colors">
             ONLINE
           </span>
        </div>

        {/* Separator */}
        <div className="w-[1px] h-3 bg-white/10"></div>

        {/* Latency / Ping */}
        <div className="flex items-center gap-1.5 text-gray-400">
           {/* Icon Sinyal */}
           <svg viewBox="0 0 24 24" fill="currentColor" className={`w-3 h-3 ${ping > 100 ? 'text-red-500' : 'text-gray-500'}`}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" opacity={ping > 100 ? 1 : 0} /> 
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
           </svg>
           <span className={`${ping > 100 ? 'text-red-400' : 'text-gray-400'} tabular-nums`}>
             {ping}ms
           </span>
        </div>
      </div>

      {/* --- TENGAH: Lokasi (Hidden di HP) --- */}
      <div className="hidden md:flex items-center gap-2 text-[10px] text-gray-500 font-mono hover:text-white transition-colors cursor-crosshair">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
             <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <span>JAKARTA, ID</span>
      </div>

      {/* --- KANAN: Git Info & Jam --- */}
      <div className="flex items-center gap-4 text-[10px] md:text-xs font-mono">
         
         {/* Git Branch Style (Biar kayak VS Code) */}
         <div className="hidden sm:flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
               <line x1="6" y1="3" x2="6" y2="15"></line>
               <circle cx="18" cy="6" r="3"></circle>
               <circle cx="6" cy="18" r="3"></circle>
               <path d="M18 9a9 9 0 0 1-9 9"></path>
            </svg>
            <span>main</span>
         </div>

         <div className="w-[1px] h-3 bg-white/10 hidden sm:block"></div>

         {/* Jam */}
         <div className="text-gray-300 tabular-nums tracking-wide hover:text-white transition-colors">
            {time.toLocaleTimeString('en-US', { hour12: false })} <span className="text-gray-600">WIB</span>
         </div>
      </div>
    </footer>
  );
};

export default TechStatusBar;