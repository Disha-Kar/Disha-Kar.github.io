import React from 'react';
import { motion } from 'framer-motion';

const TOP_IMAGES = [
  { src: '/Top 5/92bef0223680695.67fd66e01aa79.jpg', title: 'PORTRAIT ONE', subtitle: 'Creative Director' },
  { src: '/Top 5/arch.webp', title: 'PORTRAIT TWO', subtitle: 'Lead Designer' },
  { src: '/Top 5/arch2.jpg', title: 'PORTRAIT THREE', subtitle: 'Art Specialist' },
  { src: '/Top 5/mahal.jpg', title: 'PORTRAIT FOUR', subtitle: 'Senior Photographer' },
  { src: '/Top 5/water.webp', title: 'PORTRAIT FIVE', subtitle: 'Visual Artist' },
];

export default function TopChosenOnes() {
  return (
    <section className="relative w-full bg-[#0a0a0c] min-h-screen">
      {/* STICKY BACKGROUND TEXT */}
      <div className="sticky top-0 w-full h-[100dvh] flex flex-col items-center justify-center z-0 pointer-events-none">
        <motion.h2 
          animate={{ rotate: [-4, 2, -4] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="text-[#f8c210] font-script text-5xl md:text-7xl lg:text-7xl mb-1 lg:mb-2 z-10 relative left-[-2%] origin-center"
        >
          Top 5
        </motion.h2>
        <h1 className="text-white/30 font-black font-display text-5xl md:text-7xl lg:text-[8vw] uppercase tracking-tighter leading-none text-center">
          Chosen Ones
        </h1>
      </div>

      {/* FOREGROUND SCROLLING IMAGES */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col px-[5vw] pb-[10vh] -mt-[25vh]">
        {/* We use -mt-[25vh] to pull the images UP over the 100dvh sticky placeholder space. 
            This ensures the first card starts near the bottom of the screen instead of being pushed 130vh down! */}

        {TOP_IMAGES.map((img, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`mb-[10vh] md:mb-[15vh] w-[70%] max-w-[260px] md:max-w-[300px] flex flex-col ${isEven ? 'self-start' : 'self-end'} relative z-10`}
            >
              <div className="w-full aspect-[4/5] relative overflow-hidden rounded-sm bg-[#111] shadow-2xl">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-5 md:p-6 pt-24">
                  <h3 className="text-white font-display font-black text-xl md:text-2xl uppercase tracking-tighter">{img.title}</h3>
                  <p className="text-white/80 font-script text-lg mt-1">{img.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
