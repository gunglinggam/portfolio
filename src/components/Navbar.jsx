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

  // Data Menu dengan Icon SVG (Bukan Emoji lagi biar keren)
  const navLinks = [
    { name: "Beranda", href: "#beranda", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    )},
    { name: "Tentang", href: "#about", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )},
    { name: "Proyek", href: "#proyek", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
    )},
    // Ganti "Pengalaman" jadi Kontak atau sesuai kebutuhan
    { name: "Kontak", href: "#kontak", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    )},
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          
          {/* 1. LOGO (Disamakan Style dengan Footer) */}
          <a href="#" className="group flex items-center gap-2 text-xl font-bold text-white tracking-tighter hover:text-green-400 transition-colors duration-300">
             <span className="text-green-500 group-hover:-translate-x-1 transition-transform">&lt;</span>
             Gunglinggam
             <span className="text-green-500 group-hover:translate-x-1 transition-transform">/&gt;</span>
          </a>

          {/* 2. MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group flex items-center gap-2"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#kontak" 
              className="px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-green-500 hover:border-green-500 hover:text-black hover:scale-105 transition-all duration-300 text-sm font-bold shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center gap-2"
            >
              Let's Talk
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
          </div>

          {/* 3. TOMBOL HAMBURGER */}
          <button 
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group focus:outline-none z-[60]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5 bg-green-500' : ''}`}></div>
            <div className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 my-1 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5 bg-green-500' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* 4. MOBILE MENU - SIDE DRAWER */}
      
      {/* Overlay Gelap */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-[#0a0a0a] border-l border-white/10 z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Background Grid Pattern (Biar techy) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>

        {/* Header Sidebar */}
        <div className="p-8 border-b border-white/5 relative z-10">
           <h2 className="text-2xl font-bold text-white mb-1">Menu</h2>
           <p className="text-xs text-gray-500 font-mono">Select Destination_</p>
        </div>

        {/* List Menu */}
        <div className="flex-1 overflow-y-auto py-6 px-4 relative z-10">
          <div className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all active:scale-95"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-green-400 group-hover:bg-green-500/10 transition-colors">
                  {link.icon}
                </div>
                {/* Teks */}
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-lg">
                  {link.name}
                </span>
                
                {/* Arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-auto text-gray-600 group-hover:text-green-500 transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Sidebar */}
        <div className="p-6 border-t border-white/5 bg-black/40 backdrop-blur relative z-10">
          <a 
            href="#kontak"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-4 bg-green-600 text-black font-bold rounded-xl hover:bg-green-500 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;