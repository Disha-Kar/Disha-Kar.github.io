import React from 'react';
import { motion, useTransform } from 'framer-motion';
import WhyMe from './WhyMe';

const ART_FORMS = [
  { id: '01', title: 'Graphic Design', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
  { id: '02', title: 'Branding', image: '/images/graphic.avif' },
  { id: '03', title: 'Social Media', image: '/images/image.png' },
  { id: '04', title: 'Photography', image: '/images/photography.jpg' },
];
function ArtFormImage({ scrollYProgress, index, form }) {
  // Fine-tuned scroll triggers so the images and text highlights sync perfectly with the physical scroll
  const ITEM_STARTS = [0.25, 0.40, 0.54, 0.68];
  const startVisible = ITEM_STARTS[index];
  const endVisible = index === 3 ? 0.82 : ITEM_STARTS[index + 1];

  const ITEM_LENGTH = endVisible - startVisible;
  // We want a smooth crossfade over 1/3rd of the item length
  const fadeDuration = ITEM_LENGTH * 0.5;
  const fadeStart = startVisible - fadeDuration;
  const fadeEnd = endVisible + fadeDuration;

  const safeEndVisible = endVisible >= 1 ? 0.98 : endVisible;
  const safeFadeEnd = fadeEnd >= 1 ? 1 : fadeEnd;

  const opacity = useTransform(
    scrollYProgress,
    [fadeStart, startVisible, safeEndVisible, safeFadeEnd],
    [0, 1, 1, 0]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [fadeStart, startVisible, safeEndVisible, safeFadeEnd],
    [1.15, 1, 1, 1.15]
  );

  return (
    <motion.img 
      src={form.image} 
      alt={form.title}
      style={{ opacity, scale }}
      className="absolute inset-0 w-full h-full object-cover origin-center"
    />
  );
}

function ArtFormText({ scrollYProgress, index, form }) {
  const ITEM_STARTS = [0.25, 0.40, 0.54, 0.68];
  const startVisible = ITEM_STARTS[index];
  const endVisible = index === 3 ? 0.82 : ITEM_STARTS[index + 1];

  const ITEM_LENGTH = endVisible - startVisible;
  const fadeDuration = ITEM_LENGTH * 0.4;
  const fadeStart = startVisible - fadeDuration;
  const fadeEnd = endVisible + fadeDuration;

  const safeEndVisible = endVisible >= 1 ? 0.98 : endVisible;
  const safeFadeEnd = fadeEnd >= 1 ? 1 : fadeEnd;

  const titleColor = useTransform(
    scrollYProgress,
    [fadeStart, startVisible, safeEndVisible, safeFadeEnd],
    ["rgba(255,255,255,0.2)", "rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,0.2)"]
  );

  const numColor = useTransform(
    scrollYProgress,
    [fadeStart, startVisible, safeEndVisible, safeFadeEnd],
    ["rgba(255,255,255,0.2)", "#f8c210", "#f8c210", "rgba(255,255,255,0.2)"]
  );

  return (
    <div className="flex items-start gap-3 md:gap-6">
      <motion.span 
        style={{ color: numColor }}
        className="text-xs md:text-sm font-sans mt-2"
      >
        ({form.id})
      </motion.span>
      <motion.h2 
        style={{ color: titleColor }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tighter uppercase leading-[0.85] scale-y-[1.35] origin-left"
      >
        {form.title}
      </motion.h2>
    </div>
  );
}

export default function ArtForms({ scrollYProgress }) {
  // Move the text container up as we scroll from 0.25 to 1.0
  const textY = useTransform(scrollYProgress, [0.25, 1], ["0%", "-60%"]);
  
  // Make the image scroll away much sooner, right after photography is shown
  const imageY = useTransform(scrollYProgress, [0.72, 1], ["0vh", "-120vh"]);

  return (
    <div className="w-full h-full flex flex-col pt-4 md:pt-12 lg:px-12 overflow-hidden">
      <div className="w-full h-full relative">
        {/* Right Column: Sticky Image (Absolute to stay fixed while text scrolls) */}
        <motion.div 
          style={{ y: imageY }}
          className="absolute right-0 top-0 w-1/2 lg:w-5/12 flex justify-end items-start h-full z-10 pointer-events-none pt-[15vh] lg:pt-[25vh]"
        >
          <div className="relative w-full max-w-[160px] md:max-w-[200px] lg:max-w-[300px] aspect-[4/3] lg:aspect-[3/4] overflow-hidden border border-white/10 rounded-2xl shadow-2xl ml-auto pointer-events-auto">
            {ART_FORMS.map((form, index) => (
              <ArtFormImage 
                key={form.id} 
                scrollYProgress={scrollYProgress} 
                index={index} 
                form={form} 
              />
            ))}
          </div>
        </motion.div>

        {/* Scrolling Content Wrapper (Left Column + Why Me) */}
        <motion.div 
          style={{ y: textY }}
          className="w-full flex flex-col justify-start relative z-20"
        >
          {/* Left Column: List of Art Forms */}
          <div className="w-1/2 lg:w-7/12 flex flex-col justify-start gap-16 md:gap-24 lg:gap-40 pt-[15vh] lg:pt-[25vh]">
            {/* Title moved inside scrolling container */}
            <motion.div 
              className="text-[#f8c210] font-script text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8 origin-left shrink-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              My Art Forms
            </motion.div>
            {ART_FORMS.map((form, index) => (
              <ArtFormText 
                key={form.id} 
                scrollYProgress={scrollYProgress} 
                index={index} 
                form={form} 
              />
            ))}
          </div>

          {/* Why Me Section immediately following the list */}
          <div className="w-full mt-24 md:mt-32 pb-[10vh]">
            <WhyMe />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
