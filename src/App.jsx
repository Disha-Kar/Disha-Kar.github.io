import { useEffect, useState, Suspense } from 'react'
import Lenis from 'lenis'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import { Experience } from './components/Experience'
import { UI } from './components/UI'
import { GlobalLoader } from './components/GlobalLoader'
import { MarqueeText } from './components/MarqueeText'
import './App.css'

function App() {
  const [phase, setPhase] = useState('in')
  const [appLoaded, setAppLoaded] = useState(false)

  // 1. Initialize Lenis Smooth Scroll on desktop (touch sync is false to preserve native mobile momentum)
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) return // Completely skip on mobile to prevent any touch lags!

    const lenis = new Lenis({
      duration: 0.8, // Faster, highly responsive scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // 2. Framer Motion Scroll Orchestration (100% Native, GPU-Accelerated on all platforms)
  const { scrollYProgress } = useScroll()

  // Centered Hero card scaling
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.78])

  // Background gradient blend opacity
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Fade out hero contents to focus the next section
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.05])

  // Slide up next section to cover the viewport
  const nextY = useTransform(scrollYProgress, [0, 1], ["105%", "0%"])

  // Detect when scrolled down to freeze/stop the cyclic stagger loop
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [isBookVisible, setIsBookVisible] = useState(false)

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setIsScrolledDown(latest > 0.05)
      setIsBookVisible(latest > 0.7) // Book section is visible when near end of scroll
    })
  }, [scrollYProgress])

  // Stagger animation phase toggle for the hero text
  useEffect(() => {
    if (isScrolledDown) {
      setPhase('in') // Stop animation and lock text in fully visible state when scrolled down
      return
    }

    let timeoutId;
    const cycle = () => {
      setPhase('in');
      timeoutId = setTimeout(() => {
        setPhase('out');
        timeoutId = setTimeout(() => {
          cycle();
        }, 900);
      }, 3000);
    };
    cycle();
    return () => clearTimeout(timeoutId);
  }, [isScrolledDown])

  const firstName = "Anshi".split("")
  const lastName = "Jangid".split("")

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
      {/* Outer scroll wrapper defines the scroll length (200vh = scrollable) */}
      <div className="scroll-wrapper relative w-full h-[200vh] bg-black select-none">

      {/* FIXED VIEWPORT: Scene stays stuck in place while user scrolls */}
      <div className="fixed inset-0 w-full h-screen p-2 sm:p-6 flex flex-col justify-between z-10 overflow-hidden pointer-events-none">

        {/* FIRST PAGE: MAIN HERO CARD */}
        <motion.main
          style={{ scale, willChange: "transform" }}
          className="hero-card-inner relative flex-1 w-full h-full rounded-[24px] overflow-hidden border border-white/5 flex flex-col justify-between p-4 origin-center pointer-events-auto"
        >
          {/* Dual Gradient Layers */}
          <div className="absolute inset-0 bg-base-gradient pointer-events-none z-0" />
          <motion.div
            style={{ opacity: bgOpacity }}
            className="absolute inset-0 bg-overlay-gradient pointer-events-none hdr-bg-overlay z-0"
          />

          {/* Procedural Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none hdr-noise z-10" />

          {/* Animatable Hero Contents Wrapper */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="absolute inset-0 flex flex-col justify-between p-4 z-20"
          >
            {/* Header */}
            <header className="hero-header flex items-center justify-end w-full p-2">
              <a href="mailto:hello@anshijangid.com" className="text-white hover:opacity-70 transition-opacity duration-300 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </header>

            {/* Center Content */}
            <div className="hero-main-title my-auto py-12 flex flex-col items-center text-center max-w-3xl mx-auto select-none">
              <h1 className="text-white text-7xl sm:text-7xl md:text-8xl font-light tracking-tighter leading-[0.75] font-display mb-6">
                {/* First Name: Anshi */}
                <span className="inline-block">
                  {firstName.map((char, index) => {
                    const delay = phase === 'in' ? index * 0.06 : index * 0.04

                    return (
                      <motion.span
                        key={`first-${index}`}
                        className="inline-block origin-center"
                        style={{ willChange: "transform, opacity, filter" }}
                        initial={{ opacity: 0, filter: 'blur(12px)', y: -15, scale: 0.95 }}
                        animate={{
                          opacity: phase === 'in' ? 1 : 0,
                          filter: phase === 'in' ? 'blur(0px)' : 'blur(12px)',
                          y: phase === 'in' ? 0 : -15,
                          scale: phase === 'in' ? 1 : 0.95,
                        }}
                        transition={{
                          duration: phase === 'in' ? 0.6 : 0.4,
                          delay: delay,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      >
                        {char}
                      </motion.span>
                    )
                  })}
                </span>
                <br />
                {/* Last Name: Jangid */}
                <span className="font-serif italic text-blue-400 font-normal inline-block">
                  {lastName.map((char, index) => {
                    const globalIndex = firstName.length + index
                    const delay = phase === 'in' ? globalIndex * 0.06 : globalIndex * 0.04

                    return (
                      <motion.span
                        key={`last-${index}`}
                        className="inline-block origin-center"
                        style={{ willChange: "transform, opacity, filter" }}
                        initial={{ opacity: 0, filter: 'blur(12px)', y: -15, scale: 0.95 }}
                        animate={{
                          opacity: phase === 'in' ? 1 : 0,
                          filter: phase === 'in' ? 'blur(0px)' : 'blur(12px)',
                          y: phase === 'in' ? 0 : -15,
                          scale: phase === 'in' ? 1 : 0.95,
                        }}
                        transition={{
                          duration: phase === 'in' ? 0.6 : 0.4,
                          delay: delay,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      >
                        {char}
                      </motion.span>
                    )
                  })}
                </span>
              </h1>

              {/* White Glowing Subtitle */}
              <p className="text-white/70 text-[9px] sm:text-[10px] font-light tracking-[0.3em] font-sans uppercase subtext-glow mt-24">
                Graphic Designer | Photographer
              </p>
            </div>


          </motion.div>
        </motion.main>

        {/* SECOND PAGE: PORTFOLIO WORKS CARD (SLIDES UP OVER THE ENTIRE SCREEN VIEWPORT) */}
        <motion.div
          style={{ y: nextY, willChange: "transform" }}
          className="next-section-card absolute inset-0 z-30 bg-black p-6 sm:p-10 md:p-16 flex flex-col justify-center items-center pointer-events-auto"
        >
          {/* Paper grain background */}
          <div className="absolute inset-0 pointer-events-none hdr-noise opacity-30 z-0" />

          {/* 3D Animated Book Slider Container */}
          <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-between" style={{ pointerEvents: 'none' }}>
            <div style={{ pointerEvents: 'auto' }}>
              <UI isBookVisible={isBookVisible} />
            </div>
            {/* Canvas wrapper: pointer-events-none on mobile so touch scrolls the page, not the 3D scene */}
            <div className="flex-1 w-full h-full relative" style={{ touchAction: 'pan-y', pointerEvents: 'none' }}>
              <Canvas
                shadows
                camera={{
                  position: [-0.5, 1, window.innerWidth > 800 ? 4 : 8],
                  fov: 45,
                }}
                style={{ pointerEvents: 'none', touchAction: 'none' }}
                eventSource={null}
              >
                <group position-y={0}>
                  <Suspense fallback={null}>
                    <Experience />
                  </Suspense>
                </group>
              </Canvas>
              <Loader />
            </div>
          </div>

          {/* Infinite marquee text strip at bottom */}
          <div className="absolute left-0 right-0 pointer-events-none" style={{ zIndex: 40, bottom: window.innerWidth < 768 ? '18%' : 0 }}>
            <MarqueeText />
          </div>
        </motion.div>

      </div>
    </div>
      </div>
    </>
  )
}

export default App
