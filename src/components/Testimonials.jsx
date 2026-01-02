import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 px-6 mx-auto max-w-4xl text-center">
      <div className="relative p-10 border-y border-white/10">
        {/* Dekorasi Kutip Besar */}
        <span className="absolute top-0 left-0 text-6xl text-green-500/20 font-serif">“</span>
        
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-relaxed font-mono">
          <span className="text-green-500">Technology</span> is best when it brings people together.
        </h2>
        
        <p className="mt-6 text-gray-500 uppercase tracking-widest text-sm">— Matt Mullenweg</p>
        
        <span className="absolute bottom-0 right-0 text-6xl text-green-500/20 font-serif leading-none">”</span>
      </div>
    </section>
  );
};

export default Testimonials;