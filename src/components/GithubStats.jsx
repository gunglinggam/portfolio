import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubStats = () => {
  // Tema warna Hijau Neon (Cyberpunk)
  const theme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative" id="github">
      
      {/* Background Decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Syncing...</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
           Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Consistency</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Bukan sekadar kode, tapi dedikasi harian. Ini adalah visualisasi dari aktivitas coding dan kontribusi open source saya.
        </p>
      </div>

      {/* Terminal Card Container */}
      <div className="relative group z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        
        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            
            {/* 1. Terminal Header */}
            <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-gray-500 text-xs font-mono">
                    git-contribution-graph
                </div>
                <div className="w-8"></div>
            </div>

            {/* 2. Calendar Content */}
            <div className="p-6 md:p-10 flex justify-center overflow-x-auto scrollbar-hide">
                <GitHubCalendar 
                    username="gunglinggam" // Pastikan username ini benar
                    blockSize={13} 
                    blockMargin={4}
                    fontSize={12}
                    theme={theme}
                    colorScheme='dark'
                    style={{ color: '#9ca3af' }} // Text color gray-400
                    labels={{
                        totalCount: '{{count}} contributions in the last year',
                    }}
                />
            </div>

            {/* 3. Terminal Footer / Status Bar */}
            <div className="bg-[#1a1a1a] border-t border-white/5 px-4 py-2 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-mono text-gray-500 gap-2">
                <div className="flex gap-4">
                    <span>STATUS: <span className="text-green-400">ONLINE</span></span>
                    <span>BRANCH: <span className="text-blue-400">MAIN</span></span>
                </div>
                <a 
                    href="https://github.com/gunglinggam" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                >
                    VIEW FULL PROFILE 
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;