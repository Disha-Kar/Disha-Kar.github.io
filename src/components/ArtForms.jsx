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
  const ITEM_STARTS = [0.38, 0.52, 0.66, 0.80];
  const startVisible = ITEM_STARTS[index];
  const endVisible = index === 3 ? 0.95 : ITEM_STARTS[index + 1];

  const ITEM_LENGTH = endVisible - startVisible;
  // We want a slower, smoother crossfade between images
  const fadeDuration = ITEM_LENGTH * 0.8;
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
  const ITEM_STARTS = [0.38, 0.52, 0.66, 0.80];
  const startVisible = ITEM_STARTS[index];
  const endVisible = index === 3 ? 0.95 : ITEM_STARTS[index + 1];

  const ITEM_LENGTH = endVisible - startVisible;
  const fadeDuration = ITEM_LENGTH * 0.6; // Slightly slower text fade
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
  // Dynamically adjust scroll distance based on device screen size.
  // Using vh instead of % so the scroll speed remains constant even if the container height changes (like adding WhyMe to the top!)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const targetY = isMobile ? "-100vh" : "-130vh";

  // Move the text container up as we scroll from 0.25 to 1.0
  const textY = useTransform(scrollYProgress, [0.25, 1], ["0vh", targetY]);

  // Make the image scroll away only AFTER the final art form (Photography) is fully shown
  const imageY = useTransform(scrollYProgress, [0.85, 1], ["0vh", "-120vh"]);

  return (
    <div className="w-full h-full flex flex-col pt-4 md:pt-12 lg:px-12 overflow-hidden">
      <div className="w-full h-full relative">
        {/* Right Column: Sticky Image (Absolute to stay fixed while text scrolls) */}
        <motion.div
          style={{ y: imageY, willChange: "transform" }}
          className="absolute right-0 top-0 w-1/2 lg:w-5/12 flex justify-end items-start h-full z-10 pointer-events-none pt-[30vh] lg:pt-[35vh]"
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

        {/* Scrolling Content Wrapper */}
        <motion.div
          style={{ y: textY, willChange: "transform" }}
          className="w-full flex flex-col justify-start relative z-20"
        >
          {/* Why Me Section moved to the top */}
          <div className="w-full pt-[5vh] pb-[10vh] lg:pb-[15vh]">
            <WhyMe />
          </div>

          {/* Left Column: List of Art Forms */}
          <div className="w-1/2 lg:w-7/12 flex flex-col justify-start gap-12 md:gap-16 lg:gap-24 pt-[5vh]">
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
        </motion.div>
      </div>
    </div>
  );
}
