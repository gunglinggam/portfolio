import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import FloatingActions from "./components/FloatingActions";
import Preloader from "./components/Preloader";
import Terminal from "./components/Terminal";
import DonateButton from "./components/DonateButton";
import TechStatusBar from "./components/TechStatusBar";
import GithubStats from "./components/GithubStats";
import MyGear from "./components/MyGear";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Offline Mode... | Gung Linggam";
      } else {
        document.title = "System Online | I Gusti Agung Linggam";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {!loading && (
        // Ganti bg-[#0a0a0a] dengan class relative biar background di dalamnya jalan
        <div className="min-h-screen text-white font-sans selection:bg-green-500 selection:text-black overflow-x-hidden pb-12 md:pb-0 relative bg-neutral-950">
          
          {/* === BACKGROUND AREA (DIMULAI DARI SINI) === */}
          
          {/* 1. Base Grid Pattern (Kotak-kotak tipis) */}
          <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* 2. Main Ambient Light (Cahaya Hijau di Kiri Atas) */}
          <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]"></div>

          {/* 3. Secondary Ambient Light (Cahaya Biru/Teal di Kanan Bawah biar ada dimensi) */}
          <div className="fixed bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-600 opacity-10 blur-[120px]"></div>
          
          {/* === END BACKGROUND AREA === */}


          {/* Konten Utama (z-index harus > 0 biar di atas background) */}
          <div className="relative z-10">
            <ScrollProgress />
            <FloatingActions />
            <DonateButton />
            <Terminal />
            <TechStatusBar />

            <Navbar />
            
            <main>
              <div data-aos="fade-up"><Hero /></div>
              <div data-aos="fade-right"><TechStack /></div>
              <div data-aos="fade-up"><About /></div>
              <div data-aos="fade-up"><Experience /></div>
              <div data-aos="zoom-in"><Certificates /></div>
              
              <div data-aos="fade-up"><GithubStats /></div>
              <div data-aos="fade-up"><MyGear /></div>

              <div data-aos="fade-up"><Services /></div>
              <div data-aos="fade-up"><Projects /></div>
              <div data-aos="fade-up"><Testimonials /></div>
              <div data-aos="fade-up"><FAQ /></div>
              <div data-aos="flip-up"><CTA /></div>
              <div data-aos="fade-up"><Contact /></div>
            </main>

            <Footer />
          </div>

        </div>
      )}
    </>
  );
}

export default App;