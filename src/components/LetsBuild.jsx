import React from 'react';
import { motion } from 'framer-motion';

const LetsBuild = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center bg-[#0a0a0c] overflow-hidden px-6 py-24">
      
      {/* Container to handle overlap properly */}
      <div className="relative flex flex-col items-center z-10">
        
        {/* Main Text */}
        <h2 className="text-[15vw] md:text-[10vw] font-black text-white tracking-tighter leading-[0.9] text-center font-display uppercase">
          Let's build<br />something
        </h2>
        
        {/* Animated Button */}
        <motion.a
          href="mailto:jangidanshi5@gmail.com"
          initial={{ y: 80, opacity: 0, rotate: 0 }}
          whileInView={{ y: -30, opacity: 1, rotate: -8 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ 
            type: "spring", 
            stiffness: 120, 
            damping: 15,
            mass: 1
          }}
          className="relative z-20 px-10 py-5 mt-8 bg-white/5 backdrop-blur-md border border-white/10 text-[#f8c210] text-[12vw] md:text-6xl rounded-3xl shadow-2xl font-script flex items-center justify-center hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
        >
          Say hi!
        </motion.a>

      </div>
    </section>
  );
};

export default LetsBuild;
