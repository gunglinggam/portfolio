import React from 'react';

const DonateButton = () => {
  const donationLink = "https://saweria.co/gunglinggam"; 

  return (
    <a
      href={donationLink}
      target="_blank"
      rel="noreferrer"
      // POSISI: 
      // Mobile: bottom-12 left-16 (Sebelah persis tombol terminal yg di left-4 + spacing)
      // Desktop: left-24 (Geser lebih jauh karena ada jarak margin)
      className="fixed bottom-12 left-16 md:left-24 z-50 group"
    >
      {/* CONTAINER TOMBOL:
         - Mobile: w-10 h-10 (Bulat Saja)
         - Desktop: w-auto px-5 (Lonjong ada teks)
      */}
      <div className="
        flex items-center justify-center md:gap-3 
        w-10 h-10 md:w-auto md:px-5 md:h-12
        bg-black/60 backdrop-blur-md border border-yellow-500/30 text-yellow-400 
        rounded-full shadow-[0_0_15px_rgba(234,179,8,0.1)] 
        group-hover:bg-yellow-500/10 group-hover:border-yellow-400 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] 
        transition-all duration-300 md:hover:-translate-y-1
      ">
        
        {/* Icon Kopi (Selalu Muncul) */}
        <div className="relative flex items-center justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-5 md:h-5">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4" className="animate-pulse"></line>
              <line x1="10" y1="1" x2="10" y2="4" className="animate-pulse delay-75"></line>
              <line x1="14" y1="1" x2="14" y2="4" className="animate-pulse delay-150"></line>
           </svg>
        </div>

        {/* Teks (HIDDEN di Mobile, BLOCK di Desktop) */}
        <span className="hidden md:block font-mono font-bold text-sm tracking-wide whitespace-nowrap">
          Traktir Kopi
        </span>

      </div>
    </a>
  );
};

export default DonateButton;