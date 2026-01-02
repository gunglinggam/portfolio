import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: "Welcome to Hafidz OS v1.0.0", type: "system" },
    { text: "Type 'help' to see available commands.", type: "system" },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Auto scroll ke bawah setiap ada output baru
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  // Fokus ke input saat terminal dibuka
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = "";
      let type = "response"; // Default type

      // Logika Jawaban Terminal
      switch (cmd) {
        case 'help':
          response = "Available commands: bio, skills, contact, coffee, clear, exit"; // Tambahkan 'coffee'
          break;
        case 'bio':
          response = "Hafidz Humaidi. SMK Grade 12. Currently interning at IDC Indonesia. Loves Coffee & Code.";
          break;
        case 'skills':
          response = "Frontend: React, Tailwind. Network: Cisco, Mikrotik. Tools: Git, VS Code.";
          break;
        case 'contact':
          response = "Email: hafidzhpb2005@gmail.com | WA: +62812345678";
          break;
        
        // --- PERINTAH BARU UNTUK DONASI ---
        case 'coffee':
        case 'saweria':
          response = "Thanks for considering! Opening Saweria page...";
          // Ganti link ini dengan link Saweria/BMAC kamu
          window.open("https://saweria.co/gunglinggam", "_blank"); 
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'exit':
          setIsOpen(false);
          setInput('');
          return;
        case '':
          response = "";
          break;
        default:
          response = `Command not found: ${cmd}. Type 'help' for assistance.`;
          type = "error"; // Biar warnanya beda (merah misalnya)
      }

      setHistory([...history, { text: `> ${input}`, type: "user" }, { text: response, type: type }]);
      setInput('');
    }
  };

  return (
    <>
      {/* Tombol Pemicu (Floating Button Kiri Bawah) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        // PERUBAHAN DISINI (Styling & Posisi):
        // bottom-12 : Naik dikit biar sejajar sama WA & Donate
        // w-10 h-10 : Ukuran Mobile (kecil rapi)
        // md:w-12   : Ukuran Desktop (lebih gede dikit)
        className="fixed bottom-12 left-4 md:left-8 z-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black/80 backdrop-blur-md border border-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300 group"
        title="Open Terminal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-green-500 group-hover:text-green-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5h16a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H4A1.5 1.5 0 002.5 6v12a1.5 1.5 0 001.5 1.5z" />
        </svg>
      </button>

      {/* Jendela Terminal (TIDAK ADA YANG DIUBAH) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#0c0c0c] border border-green-500/30 rounded-lg shadow-2xl overflow-hidden font-mono text-sm">
            
            {/* Header Terminal */}
            <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-green-500/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400" onClick={() => setIsOpen(false)}></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-500 text-[10px] md:text-xs">hafidz@server:~</div>
            </div>

            {/* Body Terminal */}
            <div className="p-4 h-[50vh] md:h-80 overflow-y-auto custom-scrollbar" onClick={() => inputRef.current?.focus()}>
              {history.map((line, index) => (
                <div key={index} className={`mb-1 break-words ${line.type === 'user' ? 'text-white' : line.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                  {line.text}
                </div>
              ))}
              
              {/* Input Area */}
              <div className="flex items-center text-white">
                <span className="text-green-500 mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                <input 
                  ref={inputRef}
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="bg-transparent border-none outline-none flex-1 text-white font-mono min-w-[10px]"
                  autoFocus
                  spellCheck="false"
                />
              </div>
              <div ref={bottomRef}></div>
            </div>
            
            <div className="bg-[#1a1a1a] px-4 py-1 text-[10px] text-gray-500 flex justify-between">
              <span>BASH</span>
              <span>UTF-8</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Terminal;