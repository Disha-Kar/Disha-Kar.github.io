import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  '/Carousel/image.png',
  '/Carousel/image1.png',
  '/Carousel/image2.png',
  '/Carousel/image3.png',
  '/Carousel/image copy.png',
  '/Carousel/image copy 2.png',
  '/Carousel/92bef0223680695.67fd66e01aa79.jpg',
  '/Carousel/arch2.jpg',
];

const SpiralItem = ({ src, idx, total, isMobile, scrollYProgress }) => {
  const loops = 1.0;
  const radius = isMobile ? 250 : 550;
  const ySpread = isMobile ? 400 : 800;

  // Fixed angular and vertical positions on the spiral
  const angle = (idx / (total - 1)) * Math.PI * 2 * loops;
  const yFixed = ((idx / (total - 1)) - 0.5) * ySpread;

  const xFixed = Math.sin(angle) * radius;
  const zFixed = Math.cos(angle) * radius;
  const rotationYFixed = angle * (180 / Math.PI);

  // Stagger timings for appearance
  const stagger = 0.05;
  const animLen = 0.15;

  const inStart = idx * stagger;
  const inEnd = inStart + animLen;

  // Exit timings
  const outStart = 0.6 + idx * 0.035;
  const outEnd = outStart + animLen;

  // Opacity fading
  const opacity = useTransform(
    scrollYProgress,
    [inStart, inEnd, outStart, outEnd],
    [0, 1, 1, 0]
  );

  // Scale fading
  const scale = useTransform(
    scrollYProgress,
    [inStart, inEnd, outStart, outEnd],
    [0.5, 1, 1, 0.5]
  );

  // Optional: small entry slide from below to make it feel like it's driving in
  const ySlide = useTransform(
    scrollYProgress,
    [inStart, inEnd, outStart, outEnd],
    [yFixed + 200, yFixed, yFixed, yFixed - 200]
  );

  // RotateX for a slight flip effect
  const rotateX = useTransform(
    scrollYProgress,
    [inStart, inEnd, outStart, outEnd],
    [-20, 0, 0, 20]
  );

  return (
    <motion.div
      className="absolute w-40 md:w-64 lg:w-80 aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 bg-black/50"
      style={{
        transformStyle: 'preserve-3d',
        x: xFixed,
        y: ySlide,
        z: zFixed,
        rotateY: rotationYFixed,
        rotateX,
        opacity,
        scale
      }}
    >
      <img src={src} alt={`Gallery item ${idx + 1}`} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const SpiralGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Global Container Rotation: 1 loop (360 degrees) starting from 90deg (right side)
  const rotateYContainer = useTransform(scrollYProgress, [0, 1], [90, -270]);

  // Move the container up so the camera sweeps down the spiral.
  const ySpread = isMobile ? 400 : 800;
  const offset = isMobile ? 100 : 150; // Offset pushes the spawn point slightly below center
  const yContainer = useTransform(scrollYProgress, [0, 1], [ySpread * 0.5 + offset, -ySpread * 0.5 + offset]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [150, 40, -40, -150]);

  return (
    <section ref={containerRef} className="relative h-[800vh] w-full bg-[#0a0a0c]">
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >

        {/* Center Text */}
        <motion.div
          className="absolute text-center w-full px-4 pointer-events-none flex flex-col items-center justify-center"
          style={{ z: 0, y: textY, opacity: textOpacity, textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
        >
          <h2 className="text-white text-[8vw] md:text-[4vw] lg:text-[3.2vw] font-sans font-bold leading-[1.2] tracking-tight">
            Every photograph is a chance <br />
            to <span className="font-serif italic font-normal text-white/70">capture stories, perspectives</span> and <br />
            moments.
          </h2>
        </motion.div>

        {/* 3D Image Gallery */}
        <motion.div
          className="absolute w-full h-full flex items-center justify-center pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            rotateY: rotateYContainer,
            y: yContainer,
          }}
        >
          {images.map((src, idx) => (
            <SpiralItem
              key={idx}
              src={src}
              idx={idx}
              total={images.length}
              isMobile={isMobile}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>

        {/* Fading overlays for depth */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#0a0a0c_100%)] z-20" />
      </div>
    </section>
  );
};

export default SpiralGallery;
