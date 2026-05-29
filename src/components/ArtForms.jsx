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
  const ITEM_STARTS = [0, 0.32, 0.54, 0.76];
  const startVisible = ITEM_STARTS[index];
  const endVisible = index === 3 ? 0.95 : ITEM_STARTS[index + 1];

  const ITEM_LENGTH = endVisible - startVisible;
  const fadeDuration = Math.min(0.18, ITEM_LENGTH * 0.8);
  const fadeStart = Math.max(0, startVisible - fadeDuration);
  const fadeEnd = Math.min(1, endVisible + fadeDuration);

  const opacity = useTransform(
    scrollYProgress,
    [fadeStart, startVisible, endVisible, fadeEnd],
    [0, 1, 1, 0]
  );

  return (
    <motion.img
      src={form.image}
      alt={form.title}
      style={{ opacity }}
      className="absolute inset-0 w-full h-full object-cover origin-center"
    />
  );
}

function ArtFormText({ scrollYProgress, index, form }) {
  const ITEM_STARTS = [0.38, 0.52, 0.66, 0.80];
  const startVisible = ITEM_STARTS[index];
  const endVisible = index === 3 ? 0.95 : ITEM_STARTS[index + 1];

  const ITEM_LENGTH = endVisible - startVisible;
  const fadeDuration = Math.min(0.16, ITEM_LENGTH * 0.6); // Slightly slower text fade
  const fadeStart = Math.max(0, startVisible - fadeDuration);
  const fadeEnd = Math.min(1, endVisible + fadeDuration);

  const titleColor = useTransform(
    scrollYProgress,
    [fadeStart, startVisible, endVisible, fadeEnd],
    ["rgba(255,255,255,0.2)", "rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,0.2)"]
  );

  const numColor = useTransform(
    scrollYProgress,
    [fadeStart, startVisible, endVisible, fadeEnd],
    ["rgba(255,255,255,0.2)", "#f8c210", "#f8c210", "rgba(255,255,255,0.2)"]
  );

  // Scale text up when this form is active, back to normal when not
  const textScale = useTransform(
    scrollYProgress,
    [fadeStart, startVisible, endVisible, fadeEnd],
    [1, 1.15, 1.15, 1]
  );

  return (
    <div className="flex items-start gap-3 md:gap-6">
      <motion.span
        style={{ color: numColor }}
        className="text-[10px] sm:text-xs md:text-sm lg:text-xs font-sans mt-1 md:mt-2 lg:mt-1 shrink-0"
      >
        ({form.id})
      </motion.span>
      <motion.h2
        style={{ color: titleColor, scale: textScale }}
        className="text-2xl sm:text-3xl md:text-6xl lg:text-3xl xl:text-4xl font-black font-display tracking-tighter uppercase leading-[0.85] origin-left"
      >
        {form.title}
      </motion.h2>
    </div>
  );
}

export default function ArtForms({ scrollYProgress }) {
  return (
    <div className="w-full h-full flex flex-col pt-2 md:pt-12 lg:px-12 overflow-hidden">
      <div className="w-full h-full relative">
        {/* Scrolling Content Wrapper */}
        <div className="w-full flex flex-col justify-start relative z-20">
          {/* Why Me Section moved to the top */}
          <div className="w-full pt-[2vh] pb-[4vh] md:pt-[5vh] md:pb-[10vh] lg:pt-[2vh] lg:pb-[4vh]">
            <WhyMe />
          </div>

          {/* Art Forms layout: left text, right image card */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-6">
            <div className="w-full lg:w-6/12 flex flex-col justify-start gap-4 md:gap-16 lg:gap-4 pt-2 md:pt-[5vh] lg:pt-0 px-4 md:px-0">
              <motion.div
                className="text-[#f8c210] font-script text-2xl sm:text-3xl md:text-4xl lg:text-3xl mb-2 md:mb-8 lg:mb-2 origin-left shrink-0"
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

            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end items-center pt-4 lg:pt-0">
              <div className="relative w-full max-w-[180px] sm:max-w-[200px] md:max-w-[180px] lg:max-w-[180px] xl:max-w-[220px] aspect-[4/3] lg:aspect-[3/4] overflow-hidden border border-white/10 rounded-2xl shadow-2xl pointer-events-none">
                {ART_FORMS.map((form, index) => (
                  <ArtFormImage
                    key={form.id}
                    scrollYProgress={scrollYProgress}
                    index={index}
                    form={form}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
