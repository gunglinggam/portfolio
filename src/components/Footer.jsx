import React from 'react';

const Footer = () => {
  return (
    // 'pb-28' memberikan ruang yang cukup untuk Floating Buttons & Bottom Bar kamu
    // tanpa membuat jarak kosong yang terlalu berlebihan.
    <footer className="bg-black pt-16 pb-28 relative overflow-hidden border-t border-white/10">
      
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* 2. Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      
      {/* Glow Effect */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* COLUMN 1: Brand & Desc */}
          <div className="col-span-1 md:col-span-2 pr-0 md:pr-12">
            <a href="#" className="inline-flex items-center gap-2 text-2xl font-bold text-white tracking-tighter hover:text-green-400 transition-colors duration-300 mb-6">
              <span className="text-green-500">&lt;</span>
              Gunglinggam
              <span className="text-green-500">/&gt;</span>
            </a>
            <p className="text-gray-400 leading-relaxed text-sm">
              Membangun jembatan antara infrastruktur jaringan yang kompleks dan pengalaman web yang intuitif. Fokus pada performa, keamanan, dan skalabilitas.
            </p>
          </div>

          {/* COLUMN 2: Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-sm"></span>
                SITEMAP
            </h4>
            <ul className="space-y-3 font-mono text-sm text-gray-400">
              {['Beranda', 'About', 'Layanan', 'Proyek', 'Kontak'].map((item, idx) => (
                  <li key={idx}>
                    <a href={`#${item.toLowerCase()}`} className="group flex items-center gap-2 hover:text-green-400 transition-colors cursor-pointer">
                        <span className="text-transparent group-hover:text-green-500 transition-colors">&gt;</span>
                        {item}
                    </a>
                  </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Socials */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-sm"></span>
                CONNECT
            </h4>
            <div className="flex gap-3">
              {[
                { icon: "instagram", link: "https://instagram.com/gunglinggam_" },
                { icon: "linkedin", link: "https://linkedin.com/in/gunglinggam" },
                { icon: "github", link: "https://github.com/gunglinggam" }
              ].map((social, idx) => (
                <a 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-black hover:border-green-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300"
                >
                    {/* Icons */}
                    {social.icon === 'instagram' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                    {social.icon === 'linkedin' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                    {social.icon === 'github' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Standard Copyright (Menggantikan Terminal Line) */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
           <div className="text-gray-600">
             &copy; {new Date().getFullYear()} Gunglinggam. All rights reserved.
           </div>
           <div className="flex items-center gap-2 text-gray-500">
             <span>Dibuat dengan</span>
             <span className="animate-pulse text-green-500">❤</span>
             <span>dan Kode</span>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;