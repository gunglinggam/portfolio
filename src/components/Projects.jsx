import React from 'react';
import SpotlightCard from './SpotlightCard';

import img1 from '../assets/images/koperasi.png';
import img2 from '../assets/images/project2.jpg'; // Sesuaikan nama file kamu
import img3 from '../assets/images/pkk.png';

const projectData = [
  {
    id: 1,
    title: "Sistem Informasi Koperasi",
    category: "Fullstack Web App",
    description: "Platform manajemen koperasi sekolah komprehensif. Mengelola stok barang real-time, pencatatan transaksi kasir, dan rekapitulasi laporan keuangan otomatis.",
    techs: ["Laravel / PHP", "MySQL", "Bootstrap", "ChartJS"],
    // Gambar Dashboard / Transaksi
    image: img1, 
    link: "https://koperasi.smkn8jkt.online",
    featured: true, // Kartu besar
  },
  {
    id: 2,
    title: "Personal Portfolio V2",
    category: "Frontend Showcase",
    description: "Website portofolio interaktif dengan tema 'Dark Terminal'. Dibangun untuk performa tinggi dan estetika visual modern.",
    techs: ["React.js", "Tailwind CSS", "Framer Motion"],
    // Gambar Coding / Code Editor
    image: img2,
    link: "#",
    featured: false,
  },
  {
    id: 3,
    title: "E-Kantin Market PKK",
    category: "E-Commerce",
    description: "Marketplace lokal untuk siswa berwirausaha. Memfasilitasi pemesanan makanan kantin secara digital untuk mengurangi antrean.",
    techs: ["CodeIgniter", "Midtrans API", "jQuery"],
    // Gambar Makanan / Market
    image: img3,
    link: "https://pkk.smkn8jakarta.online",
    featured: false,
  },
];

const ProjectCard = ({ project }) => {
  // Logic class untuk grid layout (Featured = 2 kolom)
  const gridClasses = project.featured 
    ? "md:col-span-2 md:row-span-2 min-h-[400px]" 
    : "md:col-span-1 min-h-[300px]";

  return (
    <SpotlightCard className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] ${gridClasses}`}>
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
         <div 
            className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            style={{ backgroundImage: `url(${project.image})` }}
         ></div>
         {/* Overlay Gelap */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"></div>
      </div>

      {/* 2. Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        
        {/* Badge Category (Slide Down Effect) */}
        <div className="absolute top-6 right-6 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
           <span className="bg-black/80 backdrop-blur border border-green-500/30 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {project.category}
           </span>
        </div>

        {/* Title & Desc */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
           <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
             {project.title}
           </h3>
           <p className="text-gray-400 text-sm md:text-base line-clamp-2 md:line-clamp-3 mb-4 group-hover:text-gray-200 transition-colors">
             {project.description}
           </p>
        </div>

        {/* Tech Stack & Link (Hidden by default, Show on Hover) */}
        <div className="flex flex-col gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
            
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-green-300 bg-green-900/30 border border-green-500/20 px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Link Button */}
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-mono text-sm hover:text-green-400 transition-colors w-fit group/link">
                <span className="text-green-500">&gt;_</span> View Project
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
        </div>

      </div>
    </SpotlightCard>
  );
};

const Projects = () => {
  return (
    <section className="py-24 px-6 relative" id="proyek">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 <span className="text-xs font-mono text-green-400 tracking-widest uppercase">DEPLOYED</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Works</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Implementasi nyata dari pemecahan masalah menggunakan teknologi web modern dan arsitektur database yang efisien.
            </p>
          </div>
          
          <a href="https://github.com/gunglinggam" target="_blank" rel="noreferrer" className="group px-6 py-3 bg-white/5 border border-white/10 hover:border-green-500/50 rounded-xl text-sm hover:bg-white/10 transition-all text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C3.62.65 2.42 1 2.42 1a5.07 5.07 0 0 0-.58 3.77A5.44 5.44 0 0 0 1.5 8.3c0 5.5 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>github.com/gunglinggam</span>
            <span className="text-green-500 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projectData.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;