import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageCharCount, setMessageCharCount] = useState(0);
  
  // STATE NOTIFIKASI
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  });

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 4000);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    showNotification('success', `${type} disalin!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ganti dengan ID kamu sendiri
    const SERVICE_ID = "service_wv6kprj";
    const TEMPLATE_ID = "template_imgq4ql";
    const PUBLIC_KEY = "Ndv1VL3sNaAJW29rA";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          showNotification('success', 'Pesan terkirim aman!');
          setIsSubmitting(false);
          setMessageCharCount(0);
          e.target.reset();
      }, (error) => {
          showNotification('error', 'Koneksi terputus.');
          setIsSubmitting(false);
      });
  };

  return (
    // PENGATURAN SECTION UTAMA:
    // py-12 px-4 (Mobile) vs py-24 px-6 (Desktop)
    <section id="kontak" className="py-12 px-4 md:py-24 md:px-6 max-w-6xl mx-auto relative overflow-hidden">
      
      {/* --- NOTIFIKASI POPUP (TOAST) --- */}
      <div className={`fixed top-4 left-4 right-4 md:top-24 md:left-auto md:right-10 md:w-auto z-[9999] transition-all duration-500 ease-in-out ${
        notification.show ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
      }`}>
        <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-xl shadow-2xl ${
          notification.type === 'success' 
            ? 'bg-green-900/90 border-green-500/50 text-green-100' 
            : 'bg-red-900/90 border-red-500/50 text-red-100'
        }`}>
          <div className={`p-1.5 rounded-full shrink-0 ${notification.type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
             {notification.type === 'success' ? (
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
             ) : (
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
             )}
          </div>
          <div>
            <h4 className="font-bold text-xs font-mono tracking-wider">
              {notification.type === 'success' ? 'SYSTEM: 200 OK' : 'SYSTEM: ERR'}
            </h4>
            <p className="text-[10px] md:text-xs opacity-90 font-mono">{notification.message}</p>
          </div>
        </div>
      </div>

      {/* HEADER TITLE */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Secure</span> Link
        </h2>
        <p className="text-xs md:text-base text-gray-400 max-w-xl mx-auto px-4">
          Saluran komunikasi terenkripsi siap digunakan.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6 items-start">
        
        {/* === KOLOM KIRI (INFO) === */}
        <div className="md:col-span-2 space-y-3 md:space-y-6">
            
            {/* 1. Status Card (Dibuat Compact) */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-gray-300 font-bold text-xs md:text-sm">System Status</span>
                <div className="flex items-center gap-2 bg-green-900/20 px-3 py-1 rounded-full border border-green-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 text-[10px] md:text-xs font-mono font-bold">ONLINE</span>
                </div>
            </div>

            {/* 2. Email Card (Ada Truncate biar gak overflow) */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 relative group overflow-hidden">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/5 rounded-lg text-green-400 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    {/* min-w-0 penting agar truncate bekerja di dalam flex item */}
                    <div className="flex-1 min-w-0"> 
                        <p className="text-[10px] text-gray-500 font-bold tracking-widest mb-0.5">DIRECTORY</p>
                        <a href="mailto:gunglinggam99@gmail.com" className="text-white font-mono text-sm truncate block hover:text-green-400 transition-colors">
                            gunglinggam99@gmail.com
                        </a>
                    </div>
                    <button 
                        onClick={() => handleCopy('gunglinggam99@gmail.com', 'Email')}
                        className="p-2 bg-white/5 rounded-md active:bg-green-500 active:text-black md:hover:bg-green-500 md:hover:text-black text-gray-400 transition-all shrink-0"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </button>
                </div>
            </div>

            {/* 3. Whatsapp Card */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 relative group overflow-hidden">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/5 rounded-lg text-green-400 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-gray-500 font-bold tracking-widest mb-0.5">SECURE CHAT</p>
                        <a href="https://wa.me/6287865199686" target="_blank" rel="noreferrer" className="text-white font-mono text-sm block hover:text-green-400 transition-colors">
                            +62 878 6519 9686
                        </a>
                    </div>
                    <button 
                        onClick={() => handleCopy('+6287865199686', 'Nomor WA')}
                        className="p-2 bg-white/5 rounded-md active:bg-green-500 active:text-black md:hover:bg-green-500 md:hover:text-black text-gray-400 transition-all shrink-0"
                    >
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </button>
                </div>
            </div>

            {/* 4. Social Links (Grid 3 Kolom biar rapi) */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
                {[
                    { name: 'Github', url: 'https://github.com/gunglinggam' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gunglinggam/' },
                    { name: 'Instagram', url: 'https://instagram.com/gunglinggam_' }
                ].map((social, idx) => (
                    <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="bg-[#0a0a0a] border border-white/10 py-2.5 md:py-3 rounded-lg text-center text-gray-400 active:text-white active:bg-white/5 hover:text-white hover:border-green-500/30 hover:bg-green-500/5 transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        {social.name}
                    </a>
                ))}
            </div>
        </div>

        {/* === KOLOM KANAN (FORM) === */}
        <div className="md:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 md:p-8 relative overflow-hidden shadow-2xl">
            
            {/* Form Header */}
            <div className="flex justify-between items-center mb-5 md:mb-6 border-b border-white/5 pb-3">
                 <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] font-mono text-gray-600">ENCRYPTED::TLSv1.3</div>
            </div>

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                {/* Baris Nama & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5 group">
                        <label className="text-[10px] text-green-500/80 font-mono ml-1 uppercase tracking-wider">Identitas</label>
                        <input 
                            required 
                            type="text" 
                            name="user_name"
                            // Padding input dikurangi (py-3) agar tidak terlalu tebal
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-700 font-mono text-sm" 
                            placeholder="Nama Lengkap" 
                        />
                    </div>
                    <div className="space-y-1.5 group">
                        <label className="text-[10px] text-green-500/80 font-mono ml-1 uppercase tracking-wider">Surel</label>
                        <input 
                            required 
                            type="email" 
                            name="user_email"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-700 font-mono text-sm" 
                            placeholder="email@domain.com" 
                        />
                    </div>
                </div>

                {/* Textarea Pesan */}
                <div className="space-y-1.5 group">
                    <div className="flex justify-between ml-1">
                         <label className="text-[10px] text-green-500/80 font-mono uppercase tracking-wider">Pesan Data</label>
                         <span className="text-[10px] font-mono text-gray-600">{messageCharCount}/1000</span>
                    </div>
                    
                    <textarea 
                        required 
                        rows="4" // Tinggi textarea dikurangi sedikit
                        name="message"
                        maxLength="1000"
                        onChange={(e) => setMessageCharCount(e.target.value.length)}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-700 font-mono text-sm resize-none leading-relaxed" 
                        placeholder="Tuliskan detail kebutuhan proyek..."
                    ></textarea>
                </div>

                {/* Tombol Submit */}
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 active:from-green-500 active:to-emerald-500 text-black font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)] disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
                >
                    {isSubmitting ? (
                        <>
                           <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                           </svg>
                           <span className="font-mono text-sm">SENDING...</span>
                        </>
                    ) : (
                        <>
                           <span className="font-mono text-sm tracking-wide">INITIATE TRANSMISSION</span>
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </>
                    )}
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;