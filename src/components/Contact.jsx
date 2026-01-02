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

  // Fungsi helper notifikasi
  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 4000);
  };

  // FITUR COPY
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    showNotification('success', `${type} berhasil disalin ke clipboard!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_wv6kprj";
    const TEMPLATE_ID = "template_imgq4ql";
    const PUBLIC_KEY = "Ndv1VL3sNaAJW29rA";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          showNotification('success', 'Transmisi data berhasil! Pesan telah diamankan.');
          setIsSubmitting(false);
          setMessageCharCount(0); 
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          showNotification('error', 'Gagal melakukan transmisi. Koneksi terputus.');
          setIsSubmitting(false);
      });
  };

  return (
    <section id="kontak" className="py-24 px-6 max-w-6xl mx-auto relative">
      
      {/* --- NOTIFIKASI (TOAST) POSISI ATAS --- */}
      {/* UPDATE: top-24 (di bawah navbar), left-6 right-6 (full width di mobile) */}
      {notification.show && (
        <div className={`fixed top-24 left-6 right-6 md:left-auto md:right-10 md:w-auto z-[9999] flex items-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-md shadow-2xl transition-all duration-500 ease-in-out transform translate-y-0 opacity-100 ${
          notification.type === 'success' 
            ? 'bg-green-900/90 border-green-500 text-green-100 shadow-[0_0_30px_rgba(34,197,94,0.4)]' 
            : 'bg-red-900/90 border-red-500 text-red-100 shadow-[0_0_30px_rgba(239,68,68,0.4)]'
        }`}>
          {notification.type === 'success' ? (
            <div className="p-2 bg-green-500/20 rounded-full shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
          ) : (
            <div className="p-2 bg-red-500/20 rounded-full shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          )}
          
          <div>
            <h4 className="font-bold text-sm font-mono tracking-wider">
              {notification.type === 'success' ? 'SYSTEM: SUCCESS' : 'SYSTEM: ERROR'}
            </h4>
            <p className="text-xs opacity-90 font-mono mt-1 break-words">{notification.message}</p>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Secure</span> Connection
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Saluran komunikasi terenkripsi siap digunakan. Kirimkan pertanyaan proyek atau sekadar menyapa.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        
        {/* KOLOM KIRI */}
        <div className="md:col-span-2 space-y-6">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"></div>
                <h3 className="text-white font-bold mb-1">System Status</h3>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 text-sm font-mono">ONLINE & READY</span>
                </div>
            </div>

            {/* EMAIL */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all group relative">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-full text-green-400 group-hover:bg-green-500 group-hover:text-black transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-xs text-gray-500 font-bold tracking-wider">EMAIL DIRECTORY</p>
                        <a href="mailto:gunglinggam99@gmail.com" className="text-white font-mono text-sm md:text-base hover:text-green-400 transition-colors truncate block">
                            gunglinggam99@gmail.com
                        </a>
                    </div>
                    <button 
                        onClick={() => handleCopy('gunglinggam99@gmail.com', 'Email')}
                        className="p-2 bg-white/5 rounded-lg hover:bg-green-500 hover:text-black text-gray-400 transition-all shrink-0"
                        title="Copy Email"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </button>
                </div>
            </div>

            {/* WHATSAPP */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all group relative">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-full text-green-400 group-hover:bg-green-500 group-hover:text-black transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 font-bold tracking-wider">SECURE CHAT</p>
                        <a href="https://wa.me/6287865199686" target="_blank" rel="noreferrer" className="text-white font-mono text-sm md:text-base hover:text-green-400 transition-colors block">
                            +62 878 6519 9686
                        </a>
                    </div>
                    <button 
                        onClick={() => handleCopy('+6287865199686', 'Nomor WhatsApp')}
                        className="p-2 bg-white/5 rounded-lg hover:bg-green-500 hover:text-black text-gray-400 transition-all shrink-0"
                        title="Copy Number"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </button>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
                {[
                    { name: 'Github', url: 'https://github.com/gunglinggam' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gunglinggam/' },
                    { name: 'Instagram', url: 'https://instagram.com/gunglinggam_' }
                ].map((social, idx) => (
                    <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#0a0a0a] border border-white/10 py-3 rounded-xl text-center text-gray-400 hover:text-white hover:border-green-500/30 hover:bg-green-500/5 transition-all text-sm font-bold">
                        {social.name}
                    </a>
                ))}
            </div>
        </div>

        {/* KOLOM KANAN: FORM TRANSMISI */}
        <div className="md:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
            
            <div className="flex justify-between items-center mb-6">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-gray-600">ENCRYPTED::TLSv1.3</div>
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                        <label className="text-xs text-green-400 font-mono ml-1 group-focus-within:text-green-300 transition-colors">IDENTITAS PENGIRIM</label>
                        <input 
                            required 
                            type="text" 
                            name="user_name"
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-600 font-mono text-sm" 
                            placeholder="Nama Lengkap / Organisasi" 
                        />
                    </div>
                    <div className="space-y-2 group">
                        <label className="text-xs text-green-400 font-mono ml-1 group-focus-within:text-green-300 transition-colors">ALAMAT SUREL</label>
                        <input 
                            required 
                            type="email" 
                            name="user_email"
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-600 font-mono text-sm" 
                            placeholder="email@domain.com" 
                        />
                    </div>
                </div>

                <div className="space-y-2 group">
                    <div className="flex justify-between">
                         <label className="text-xs text-green-400 font-mono ml-1 group-focus-within:text-green-300 transition-colors">DATA PESAN</label>
                         <span className="text-[10px] font-mono text-gray-500">{messageCharCount}/1000 CHARS</span>
                    </div>
                    
                    <textarea 
                        required 
                        rows="5" 
                        name="message"
                        maxLength="1000"
                        onChange={(e) => setMessageCharCount(e.target.value.length)}
                        className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-600 font-mono text-sm resize-none" 
                        placeholder="Tuliskan detail kebutuhan proyek atau pesan anda di sini..."
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                    {isSubmitting ? (
                        <>
                           <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                           </svg>
                           <span className="font-mono">MENGIRIM DATA...</span>
                        </>
                    ) : (
                        <>
                           <span className="font-mono group-hover:tracking-widest transition-all">INISIASI TRANSMISI</span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
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