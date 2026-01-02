import React, { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);
  const [status, setStatus] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    // Simulasi Loading dengan interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Jika sudah 100%, berhenti dan trigger finish
        if (prev >= 100) {
          clearInterval(interval);
          setFade(true);
          setTimeout(onFinish, 500); // Tunggu animasi fade out
          return 100;
        }

        // Logic ganti teks berdasarkan progress
        const newProgress = prev + 1; // Kecepatan loading
        
        if (newProgress === 20) setStatus("LOADING KERNEL MODULES...");
        if (newProgress === 40) setStatus("VERIFYING SECURITY PROTOCOLS...");
        if (newProgress === 60) setStatus("CONNECTING TO SERVER...");
        if (newProgress === 80) setStatus("RENDERING INTERFACE...");
        if (newProgress === 95) setStatus("ACCESS GRANTED.");

        return newProgress;
      });
    }, 20); // 20ms x 100 = 2000ms (2 detik total durasi)

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Background Grid Effect (Optional aesthetic) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      {/* Container Utama */}
      <div className="relative flex flex-col items-center justify-center scale-75 md:scale-100">
        
        {/* Lingkaran Luar (Lambat) */}
        <div className="absolute w-40 h-40 border border-green-500/20 rounded-full animate-[spin_3s_linear_infinite]"></div>
        <div className="absolute w-40 h-40 border-t border-green-500/80 rounded-full animate-[spin_3s_linear_infinite]"></div>

        {/* Lingkaran Dalam (Cepat & Berlawanan Arah) */}
        <div className="absolute w-32 h-32 border border-green-500/20 rounded-full"></div>
        <div className="absolute w-32 h-32 border-b-2 border-l-2 border-green-400 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>

        {/* Logo Tengah */}
        <div className="relative z-10 flex flex-col items-center">
           <div className="text-3xl font-bold text-white tracking-tighter drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
             gL<span className="text-green-500">.dev</span>
           </div>
           {/* Angka Persentase */}
           <div className="text-xs font-mono text-green-400 mt-1">
             {progress}%
           </div>
        </div>

      </div>

      {/* Area Bawah: Status Text & Progress Bar */}
      <div className="absolute bottom-16 md:bottom-24 w-64 flex flex-col gap-2">
        
        {/* Teks Status Berubah-ubah */}
        <div className="flex justify-between text-[10px] md:text-xs font-mono text-green-500/80 uppercase tracking-wider">
          <span>{status}</span>
          <span className="animate-pulse">_</span>
        </div>

        {/* Bar Progress */}
        <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden border border-gray-800">
          <div 
            className="h-full bg-green-500 shadow-[0_0_10px_#22c55e] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Info Tambahan Kecil */}
        <div className="flex justify-between text-[8px] text-gray-600 font-mono">
          <span>MEM: 1024MB OK</span>
          <span>V.1.0.0</span>
        </div>

      </div>
    </div>
  );
};

export default Preloader;