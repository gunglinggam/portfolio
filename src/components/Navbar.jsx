import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kunci scroll body saat menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Beranda", href: "#beranda", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg> },
    { name: "Tentang", href: "#about", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> },
    { name: "Layanan", href: "#layanan", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg> },
    { name: "Gear", href: "#gear", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center relative z-50">
          
          {/* 1. LOGO (DIKEMBALIKAN KE VERSI AWAL: TEXT ONLY) */}
          <a href="#" className="group flex items-center gap-2 text-xl font-bold text-white tracking-tighter hover:text-green-400 transition-colors duration-300">
             <span className="text-green-500 group-hover:-translate-x-1 transition-transform">&lt;</span>
             Gunglinggam
             <span className="text-green-500 group-hover:translate-x-1 transition-transform">/&gt;</span>
          </a>

          {/* 2. MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group overflow-hidden rounded-lg"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover Effect */}
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="h-6 w-[1px] bg-white/10 mx-4"></div>

            <a 
              href="#kontak" 
              className="px-5 py-2.5 bg-green-600 text-black rounded-lg hover:bg-green-500 hover:scale-105 transition-all duration-300 text-sm font-bold shadow-[0_0_15px_rgba(34,197,94,0.4)] flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>

          {/* 3. TOMBOL HAMBURGER */}
          <button 
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group focus:outline-none z-[60] bg-white/5 rounded-lg border border-white/10 active:scale-95 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5 bg-green-500' : ''}`}></div>
            <div className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 my-1 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5 bg-green-500' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* 4. MOBILE MENU DRAWER */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-[#0c0c0c] border-l border-white/10 z-50 shadow-2xl transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] pointer-events-none"></div>

        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/5 relative z-10 flex items-center justify-between mt-2">
           <div>
              <p className="text-[10px] text-green-500 font-mono tracking-widest uppercase mb-1">Navigation</p>
              <h2 className="text-xl font-bold text-white">Menu</h2>
           </div>
           
           <button 
             onClick={() => setIsOpen(false)}
             className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-500 flex items-center justify-center transition-colors text-gray-400 border border-white/5"
           >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
        </div>

        {/* List Menu (Tanpa Footer) */}
        <div className="flex-1 overflow-y-auto py-6 px-4 relative z-10">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-4 p-4 rounded-xl border border-transparent transition-all duration-300 ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                } hover:bg-white/5 hover:border-green-500/20 active:scale-95`}
                style={{ transitionDelay: `${100 + (idx * 50)}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#151515] border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-green-400 group-hover:border-green-500/50 transition-colors shadow-lg">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-200 font-medium group-hover:text-white text-base">
                    {link.name}
                    </span>
                    <span className="text-[10px] text-gray-600 font-mono group-hover:text-green-500/60 transition-colors">
                        Go to section_
                    </span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-auto text-gray-700 group-hover:text-green-500 transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            ))}

            <a 
                href="#kontak"
                onClick={() => setIsOpen(false)}
                className={`mt-4 flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.5)] transition-all duration-500 active:scale-95 ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: '300ms' }}
            >
                Start a Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;