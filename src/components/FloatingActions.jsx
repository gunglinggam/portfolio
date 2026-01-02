import React, { useState, useEffect } from 'react';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // POSISI KANAN
    // Mobile: bottom-12 right-4
    // Desktop: right-8
    <div className="fixed bottom-12 right-4 md:right-8 z-50 flex items-center gap-3">
      
      {/* 1. Back to Top (Sebelah Kiri WA) */}
      <button 
        onClick={scrollToTop}
        className={`
          flex items-center justify-center 
          w-10 h-10 md:w-12 md:h-12 
          rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white 
          shadow-[0_0_10px_rgba(255,255,255,0.1)] 
          hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] 
          transition-all duration-500 ease-out
          ${isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-90 pointer-events-none'}
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

      {/* 2. WhatsApp (Paling Kanan) */}
      <a 
        href="https://wa.me/6287865199686" // GANTI NOMOR
        target="_blank" 
        rel="noreferrer"
        className="
          group relative flex items-center justify-center 
          w-10 h-10 md:w-12 md:h-12 
          bg-green-600/90 backdrop-blur-md border border-green-400/50 text-white 
          rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] 
          hover:bg-green-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] 
          transition-all duration-300
        "
        title="Chat WhatsApp"
      >
        {/* Tooltip Desktop Only */}
        <span className="hidden md:block absolute right-full mr-3 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat Saya
        </span>
        
        {/* Icon WA */}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487 2.982 1.288 2.982.858 3.527.794.545-.064 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>

        {/* Notifikasi Dot */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-black"></span>
        </span>
      </a>

    </div>
  );
};

export default FloatingActions;