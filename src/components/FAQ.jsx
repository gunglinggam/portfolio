import React, { useState } from 'react';

const faqs = [
  {
    id: "01",
    question: "Apa fokus keahlianmu saat ini?",
    answer: "Saya memiliki hybrid skill unik: Pemahaman infrastruktur jaringan (Network Engineer) berkat pengalaman magang di IDC Indonesia, digabungkan dengan kemampuan Modern Web Development (React, Tailwind, Vite)."
  },
  {
    id: "02",
    question: "Apakah menerima jasa pembuatan website / setting jaringan?",
    answer: "Ya! Saya terbuka untuk proyek freelance seperti pembuatan Website Koperasi, Company Profile, Landing Page, hingga konfigurasi Mikrotik/Cisco dasar, dengan prioritas di luar jam magang/sekolah."
  },
  {
    id: "03",
    question: "Berapa range harga jasa yang ditawarkan?",
    answer: "Sebagai siswa SMK, saya menawarkan 'Student Price' yang sangat kompetitif namun dengan kualitas kode profesional dan modern. Cocok untuk UMKM atau organisasi sekolah yang butuh digitalisasi hemat biaya."
  },
  {
    id: "04",
    question: "Apakah bisa maintenance website yang sudah ada?",
    answer: "Bisa. Saya terbiasa melakukan debugging, perbaikan error, atau sekadar update konten pada website berbasis HTML/CSS native maupun React."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set 0 supaya pertanyaan pertama langsung terbuka

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto relative">
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Questions</span>
        </h2>
        <p className="text-gray-400">Informasi umum seputar layanan dan profil profesional saya.</p>
      </div>

      <div className="space-y-4 relative z-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
                key={index} 
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/5 border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'}`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start sm:items-center gap-6 p-6 text-left focus:outline-none"
              >
                {/* Nomor Urut Digital Style */}
                <span className={`text-xl font-mono font-bold hidden sm:block ${isOpen ? 'text-green-400' : 'text-gray-600'}`}>
                    /{faq.id}
                </span>

                <div className="flex-1">
                    <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                        {faq.question}
                    </span>
                </div>

                {/* Icon Plus/Minus */}
                <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'bg-green-500 text-black border-green-500 rotate-45' : 'bg-transparent text-gray-400 border-white/20'}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </button>
              
              {/* Jawaban dengan Animasi */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                    <div className="px-6 sm:pl-20 sm:pr-10">
                        <p className="text-gray-400 leading-relaxed border-l-2 border-green-500/30 pl-4">
                            {faq.answer}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;