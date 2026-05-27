import React from 'react';
import { motion } from 'framer-motion';

export default function WhyMe() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 lg:gap-6">
      <motion.h2 
        className="text-[#f8c210] font-script text-3xl md:text-4xl lg:text-5xl origin-left"
        initial={{ opacity: 0, x: -20, rotate: -2 }}
        whileInView={{ opacity: 1, x: 0, rotate: -2 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Why Me
      </motion.h2>
      <motion.p 
        className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-sans leading-relaxed tracking-wide antialiased"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        Your imagination, brought to life. Surreal visuals, creative storytelling, and photography-editing fusion that expresses ideas beyond words.
      </motion.p>
    </div>
  );
}
