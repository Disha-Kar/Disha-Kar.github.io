import React, { useEffect, useState, useRef } from 'react'
import Lenis from 'lenis'
import { motion, useScroll, useTransform } from 'framer-motion'
import { transitionStateAtom } from './components/UI'
import { GlobalLoader } from './components/GlobalLoader'
import ArtForms from './components/ArtForms'
import { MarqueeText } from './components/MarqueeText'
import TopChosenOnes from './components/TopChosenOnes'
import SpiralGallery from './components/SpiralGallery'
import LetsBuild from './components/LetsBuild'
import Footer from './components/Footer'
import { useAtom } from 'jotai'
import './App.css'

function App() {
  const [appLoaded, setAppLoaded] = useState(false)
  const [transitionState] = useAtom(transitionStateAtom)

  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).format(now);

      const dateParts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        month: 'short',
        year: '2-digit'
      }).formatToParts(now);
      const month = dateParts.find(p => p.type === 'month')?.value || 'Jan';
      const year = dateParts.find(p => p.type === 'year')?.value || '26';

      setCurrentTime(timeString);
      setCurrentDate(`${month} '${year}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  // 1. Initialize Lenis Smooth Scroll on desktop (touch sync is false to preserve native mobile momentum)
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) return // Completely skip on mobile to prevent any touch lags!

    const lenis = new Lenis({
      lerp: 0.08, // Consistent speed instead of duration-based variable speed
      smoothWheel: true,
    })

    let rafId;
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  // 2. Framer Motion Scroll Orchestration (100% Native, GPU-Accelerated on all platforms)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  // Centered Hero card scaling only on desktop; keep mobile unchanged
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.35])
  const scale = isMobile ? 1 : scaleTransform

  // Background gradient stays constant, no color fade
  const bgOpacity = 0

  // Fade out hero contents to focus the next section
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.05])

  // Slide up next section to cover the viewport
  const nextY = useTransform(scrollYProgress, [0, 0.25], ["110%", "0%"])

  // Detect when scrolled down to freeze/stop the cyclic stagger loop
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [isBookVisible, setIsBookVisible] = useState(false)

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setIsScrolledDown(latest > 0.05)
      setIsBookVisible(latest > 0.7) // Book section is visible when near end of scroll
    })
  }, [scrollYProgress])

  // Removing unused state and variables

  return (
    <>
      {/* Global loader — shows "Hi!" until Three.js assets are ready */}
      <GlobalLoader onLoaded={() => setAppLoaded(true)} />

      {/* Main app — hidden until loader clears so animations fire clean */}
      <div style={{
        opacity: appLoaded ? 1 : 0,
        transition: 'opacity 0.6s ease',
        pointerEvents: appLoaded ? 'auto' : 'none',
      }}>
        {/* Outer scroll wrapper defines the scroll length (shorter on mobile for faster swipes) */}
        <div ref={containerRef} className="scroll-wrapper relative w-full h-[250vh] md:h-[400vh] bg-black select-none">

          {/* STICKY VIEWPORT: Scene stays stuck in place while user scrolls this 400vh block */}
          <div className="sticky top-0 w-full h-screen p-2 sm:p-6 flex flex-col justify-between z-10 overflow-hidden pointer-events-none">

            {/* FIRST PAGE: MAIN HERO CARD */}
            <motion.main
              style={{ scale, willChange: "transform" }}
              className="hero-card-inner relative flex-1 w-full h-full rounded-[24px] overflow-hidden border border-white/20   flex flex-col justify-between p-4 origin-center pointer-events-auto"
            >
              {/* Dual Gradient Layers */}
              <div className="absolute inset-0 bg-base-gradient pointer-events-none z-0" />
              <motion.div
                style={{ opacity: bgOpacity, willChange: "opacity" }}
                className="absolute inset-0 bg-overlay-gradient pointer-events-none hdr-bg-overlay z-0"
              />

              {/* Procedural Grain Overlay */}
              <div className="absolute inset-0 pointer-events-none hdr-noise z-10" />

              {/* Animatable Hero Contents Wrapper */}
              <motion.div
                style={{ opacity: contentOpacity, willChange: "opacity" }}
                className="absolute inset-0 flex flex-col lg:flex-row z-20 overflow-hidden lg:px-12 xl:px-20 lg:items-center"
              >
                {/* Left Column: Content */}
                <div className="w-full lg:w-[45%] flex flex-col justify-start pt-[14vh] md:justify-center lg:justify-center h-full px-6 pb-6 md:px-10 md:pb-10 lg:px-12 xl:px-16 lg:pb-16 lg:pt-[18vh] bg-black/40 lg:bg-transparent shrink-0">
                  <div className="flex flex-col">
                    {/* Big Logo Name */}
                    <h1 className="text-white font-black tracking-tighter leading-[0.85] font-display mb-6 lg:mb-8 select-none flex flex-col">
                      <div className="text-[25vw] lg:text-[7vw] xl:text-[6.5vw]">ANSHI<span className="text-[5vw] lg:text-[1.2vw] align-top relative -top-[4vw] lg:-top-[1vw]">&reg;</span></div>
                      <div className="text-[14vw] lg:text-[2.5vw] xl:text-[2.2vw] text-left mt-2 lg:mt-0 text-white/90 tracking-normal">JANGID</div>
                    </h1>

                    {/* Info row */}
                    <div className="flex justify-between items-start mb-8 lg:mb-12 font-sans text-xs md:text-sm lg:text-sm xl:text-base w-full max-w-xs lg:max-w-[280px]">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 font-bold mb-1 text-white">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#f8c210]"></div>
                          <span>Open for project</span>
                        </div>
                        <span className="text-white/50">{currentDate || "Jan '26"}</span>
                      </div>
                      <div className="flex flex-col text-right font-bold text-white">
                        <span className="mb-1">{currentTime || "4:45 PM"}</span>
                        <span className="text-white/50 font-normal">UP, IN</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mt-2 lg:mt-4">
                    {/* We Are ... */}
                    <div className="mb-6 lg:mb-6">
                      <motion.h2
                        animate={{ rotate: [-2, 4, -2] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="text-[#f8c210] font-script text-3xl lg:text-4xl xl:text-5xl origin-left mb-2 inline-block"
                      >
                        I am a,
                      </motion.h2>
                      <h3 className="text-white text-3xl lg:text-2xl xl:text-3xl font-bold leading-[1.1] font-sans tracking-tight">
                        Graphic designer &<br />Photographer.
                      </h3>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-6 lg:mt-4 pointer-events-auto">
                      <a href="https://www.instagram.com/_anshijangid_/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 rounded-full border border-white/20 text-white hover:bg-[#f8c210] hover:text-black hover:border-[#f8c210] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      </a>
                      <a href="https://www.behance.net/anshijangid?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnR8i-ptMbkNpfHQhgT41kldWGw8iTA054WxhF-hNbjTUlOZD2_-801wVsSHo_aem_o2zTp1GhRl6QdB_Mh-gLUQ" target="_blank" rel="noreferrer" aria-label="Behance" className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 rounded-full border border-white/20 text-white hover:bg-[#f8c210] hover:text-black hover:border-[#f8c210] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.918 2.525-6.325 5.62-6.325 3.3 0 5.336 2.459 5.336 5.869v.842h-7.834c.088 1.638 1.487 3 3.161 3 1.096 0 2.296-.441 2.809-1.711h2.573zm-3.21-3.714c-.161-1.353-1.11-2.286-2.277-2.286-1.164 0-2.146.907-2.316 2.286h4.593zm-14.516-7.286h-6v16h6.143c2.723 0 5.419-1.22 5.419-4.839 0-1.897-1.139-3.267-2.73-3.805 1.136-.532 2.168-1.579 2.168-3.411 0-2.671-1.99-3.945-5.002-3.945zm-1.83 6.309h-1.92v-3.715h1.936c1.674 0 2.502.501 2.502 1.833 0 1.267-.84 1.882-2.518 1.882zm1.189 6.786h-3.109v-4.306h3.141c1.883 0 2.87.697 2.87 2.137 0 1.558-1.138 2.169-2.902 2.169z" /></svg>
                      </a>
                      <a href="mailto:jangidanshi5@gmail.com" aria-label="Email" className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 rounded-full border border-white/20 text-white hover:bg-[#f8c210] hover:text-black hover:border-[#f8c210] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                      </a>
                    </div>

                    {/* Yellow Accent Bar */}
                    <div className="w-24 h-1.5 bg-[#f8c210] mt-8 mb-6 rounded-full opacity-90 shadow-[0_0_15px_rgba(248,194,16,0.4)]"></div>
                    
                    {/* MOBILE ONLY: 2-Row Infinite Marquee */}
                    <div 
                      className="flex lg:hidden flex-col gap-2.5 overflow-hidden w-full pointer-events-none"
                    >
                      {/* Row 1: Moves Left */}
                      <motion.div 
                        animate={{ x: ["0%", "-50%"] }} 
                        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                        className="flex gap-2.5 w-max"
                      >
                        {[
                          '/Carousel/image.png', '/Carousel/image1.png', '/Carousel/image2.png', 
                          '/Carousel/image3.png', '/Carousel/image copy.png', '/Carousel/image copy 2.png',
                          '/Carousel/image.png', '/Carousel/image1.png', '/Carousel/image2.png', 
                          '/Carousel/image3.png', '/Carousel/image copy.png', '/Carousel/image copy 2.png'
                        ].map((src, i) => (
                          <div key={i} className="h-14 w-20 sm:h-16 sm:w-24 rounded-lg overflow-hidden shrink-0 border border-white/10 shadow-lg">
                            <img src={src} className="w-full h-full object-cover" alt="" />
                          </div>
                        ))}
                      </motion.div>

                      {/* Row 2: Moves Right */}
                      <motion.div 
                        animate={{ x: ["-50%", "0%"] }} 
                        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                        className="flex gap-2.5 w-max"
                      >
                        {[
                          '/Carousel/image copy 3.png', '/Carousel/image copy 4.png', '/Carousel/arch2.jpg', 
                          '/Carousel/92bef0223680695.67fd66e01aa79.jpg', '/Carousel/rage.webp', '/Carousel/water.webp',
                          '/Carousel/image copy 3.png', '/Carousel/image copy 4.png', '/Carousel/arch2.jpg', 
                          '/Carousel/92bef0223680695.67fd66e01aa79.jpg', '/Carousel/rage.webp', '/Carousel/water.webp'
                        ].map((src, i) => (
                          <div key={i} className="h-14 w-20 sm:h-16 sm:w-24 rounded-lg overflow-hidden shrink-0 border border-white/10 shadow-lg">
                            <img src={src} className="w-full h-full object-cover" alt="" />
                          </div>
                        ))}
                      </motion.div>
                    </div>

                  </div>
                </div>

                {/* DESKTOP ONLY Right Column: 4-Row Infinite Image Marquee */}
                <div className="hidden lg:flex lg:w-[55%] h-full relative shrink-0 p-8 sm:p-12 lg:p-8 xl:p-12 items-center justify-center pointer-events-none">
                  <div
                    className="w-full h-full lg:h-[80vh] relative overflow-hidden rounded-2xl lg:rounded-[2.5rem] bg-[#0a0a0c] border border-white/5 flex flex-col justify-center gap-3 lg:gap-4 xl:gap-5 shadow-2xl"
                    style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
                  >
                    {/* Row 1 */}
                    <motion.div
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                      className="flex gap-3 lg:gap-4 xl:gap-5 w-max"
                    >
                      {[
                        '/Carousel/image.png', '/Carousel/image1.png', '/Carousel/image2.png',
                        '/Carousel/image.png', '/Carousel/image1.png', '/Carousel/image2.png'
                      ].map((src, i) => (
                        <div key={i} className="h-14 w-20 sm:h-16 sm:w-24 lg:h-24 lg:w-36 xl:h-28 xl:w-44 rounded-lg lg:rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-xl opacity-90 hover:opacity-100 transition-opacity">
                          <img src={src} className="w-full h-full object-cover" alt="" />
                        </div>
                      ))}
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                      animate={{ x: ["-50%", "0%"] }}
                      transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                      className="flex gap-3 lg:gap-4 xl:gap-5 w-max"
                    >
                      {[
                        '/Carousel/image3.png', '/Carousel/image copy.png', '/Carousel/image copy 2.png',
                        '/Carousel/image3.png', '/Carousel/image copy.png', '/Carousel/image copy 2.png'
                      ].map((src, i) => (
                        <div key={i} className="h-14 w-20 sm:h-16 sm:w-24 lg:h-24 lg:w-36 xl:h-28 xl:w-44 rounded-lg lg:rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-xl opacity-90 hover:opacity-100 transition-opacity">
                          <img src={src} className="w-full h-full object-cover" alt="" />
                        </div>
                      ))}
                    </motion.div>

                    {/* Row 3 */}
                    <motion.div
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                      className="flex gap-3 lg:gap-4 xl:gap-5 w-max"
                    >
                      {[
                        '/Carousel/image copy 3.png', '/Carousel/image copy 4.png', '/Carousel/arch2.jpg',
                        '/Carousel/image copy 3.png', '/Carousel/image copy 4.png', '/Carousel/arch2.jpg'
                      ].map((src, i) => (
                        <div key={i} className="h-14 w-20 sm:h-16 sm:w-24 lg:h-24 lg:w-36 xl:h-28 xl:w-44 rounded-lg lg:rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-xl opacity-90 hover:opacity-100 transition-opacity">
                          <img src={src} className="w-full h-full object-cover" alt="" />
                        </div>
                      ))}
                    </motion.div>

                    {/* Row 4 */}
                    <motion.div
                      animate={{ x: ["-50%", "0%"] }}
                      transition={{ ease: "linear", duration: 45, repeat: Infinity }}
                      className="flex gap-3 lg:gap-4 xl:gap-5 w-max"
                    >
                      {[
                        '/Carousel/92bef0223680695.67fd66e01aa79.jpg', '/Carousel/rage.webp', '/Carousel/water.webp',
                        '/Carousel/92bef0223680695.67fd66e01aa79.jpg', '/Carousel/rage.webp', '/Carousel/water.webp'
                      ].map((src, i) => (
                        <div key={i} className="h-14 w-20 sm:h-16 sm:w-24 lg:h-24 lg:w-36 xl:h-28 xl:w-44 rounded-lg lg:rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-xl opacity-90 hover:opacity-100 transition-opacity">
                          <img src={src} className="w-full h-full object-cover" alt="" />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            </motion.main>

            {/* SECOND PAGE: PORTFOLIO WORKS CARD (SLIDES UP OVER THE ENTIRE SCREEN VIEWPORT) */}
            <motion.div
              style={{ y: nextY, willChange: "transform" }}
              className="next-section-card absolute inset-0 z-30 bg-[#0a0a0c] p-6 sm:p-10 md:p-16 flex flex-col pointer-events-auto overflow-hidden"
            >
              {/* Paper grain background */}
              <div className="absolute inset-0 pointer-events-none hdr-noise opacity-30 z-0" />

              <div className="relative z-10 w-full h-full">
                <ArtForms scrollYProgress={scrollYProgress} />
              </div>
            </motion.div>

          </div>
        </div>

        {/* New Scrolling Section */}
        <TopChosenOnes />
        
        {/* Spiral 3D Gallery Section */}
        <SpiralGallery />
        
        {/* Animated Say Hi Section */}
        <LetsBuild />
        
        {/* Footer */}
        <Footer />

      </div>

      {/* Black Transition Overlay */}
      <div
        className="fixed inset-0 bg-black z-[9999]"
        style={{
          opacity: transitionState === 'black' ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
          pointerEvents: transitionState === 'black' ? 'auto' : 'none'
        }}
      />
    </>
  )
}

export default App
