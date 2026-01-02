import React, { useEffect, useState } from 'react';

const NotFound = () => {
  const [text, setText] = useState('');
  const fullText = `> ERROR 404: PAGE NOT FOUND
> The requested URL /unknown was not found on this server.
> 
> Initiating system recovery...
> Scanning for nearby nodes...
> . . . . . . .
> FAILED.
> 
> Suggestion: Return to home base.`;

  // Efek ketik otomatis
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8 flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Efek Garis Scan TV */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[size:100%_4px] z-10"></div>
      
      {/* Glitch Effect Container */}
      <div className="relative z-20 max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-pulse glitch-text" data-text="404">404</h1>
        
        {/* Teks Terminal */}
        <pre className="whitespace-pre-wrap text-sm md:text-base mb-8 leading-relaxed">
          <code>
            {text}
            <span className="animate-pulse">_</span>
          </code>
        </pre>

        {/* Tombol Balik ke Home */}
        <a 
          href="/"
          className="inline-block px-6 py-3 border-2 border-green-500 text-green-500 font-bold text-sm uppercase tracking-wider hover:bg-green-500 hover:text-black transition-colors shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        >
          [ RETURN HOME ]
        </a>
      </div>
    </div>
  );
};

export default NotFound;