import React, { useEffect, useState } from 'react';

const CodeBlock = () => {
  const [text, setText] = useState('');
  
  const fullText = `const profile = {
  name: "Gung Linggam",
  role: "Network & Dev",
  skills: {
    core: ["Mikrotik", "Cisco"],
    code: ["ReactJS", "NodeJS"],
    tools: ["Git", "Linux"]
  },
  hardWorker: true,
  run: () => {
    console.log("Ready! 🚀");
  }
};`;

  useEffect(() => {
    let i = 0;
    setText('');
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 30);

    return () => clearInterval(typing);
  }, []);

  const highlightCode = (code) => {
    return code
      .replace(/const|let|var|function|return/g, '<span class="text-purple-400 font-bold">$&</span>') 
      .replace(/([a-zA-Z0-9_]+)(?=:)/g, '<span class="text-blue-300">$1</span>')
      .replace(/"(.*?)"/g, '<span class="text-emerald-400">"$1"</span>')
      .replace(/true|false/g, '<span class="text-orange-400 font-semibold italic">$&</span>') 
      .replace(/\[|\]|\{|\}|\(|\)/g, '<span class="text-yellow-500">$&</span>') 
      .replace(/console|log/g, '<span class="text-cyan-300">$&</span>') 
      .replace(/\/\/.*/g, '<span class="text-gray-500 italic">$&</span>'); 
  };

  return (
    <div className="relative w-full max-w-[90vw] md:max-w-lg mx-auto md:mx-0">
      
      {/* Container Utama (GLASS SANGAT TRANSPARAN) */}
      {/* bg-black/40 agar grid belakang terlihat, backdrop-blur-sm biar tulisan tetap terbaca */}
      <div className="relative rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden font-mono group transform transition-transform duration-500 hover:scale-[1.01]">
        
        {/* Header Window */}
        <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-[10px] font-sans tracking-wide bg-black/20 px-3 py-1 rounded-md border border-white/5">
              <span className="text-blue-400">⚛</span> profile.js
          </div>
          <div className="w-10"></div> 
        </div>
        
        {/* Code Area */}
        <div className="flex bg-transparent min-h-[280px] md:min-h-[300px] p-2">
           {/* Line Numbers */}
           <div className="py-2 pr-2 text-right text-gray-600 select-none w-10 flex-shrink-0 text-[11px] md:text-sm leading-relaxed border-r border-white/5 font-mono">
              {fullText.split('\n').map((_, i) => (
                  <div key={i} className="h-[1.5em]">{i + 1}</div>
              ))}
           </div>

           {/* Code Content */}
           <div className="p-2 md:pl-4 overflow-x-auto w-full scrollbar-hide">
             <pre>
               <code className="block text-gray-300 leading-relaxed font-mono text-[11px] md:text-sm whitespace-pre">
                 {text.split('\n').map((line, idx) => (
                   <div key={idx} className="h-[1.5em]">
                     <span dangerouslySetInnerHTML={{ __html: highlightCode(line) }} />
                   </div>
                 ))}
                 <span className="inline-block w-2 h-4 bg-green-500 animate-pulse align-middle ml-0.5"></span>
               </code>
             </pre>
           </div>
        </div>

        {/* Footer Status Bar */}
        <div className="bg-black/20 border-t border-white/5 px-4 py-1.5 flex justify-between items-center text-[10px] text-gray-500 font-sans">
            <div className="flex gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 
                  master
                </span>
            </div>
            <div className="flex gap-3">
                <span>UTF-8</span>
                <span className="text-blue-400">JavaScript</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default CodeBlock;