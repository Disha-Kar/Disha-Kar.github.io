import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { introSteps } from '../content/portfolioContent'

gsap.registerPlugin(ScrollTrigger)

export function usePortfolioAnimations() {
  const rootRef = useRef(null)
  const [introVisible, setIntroVisible] = useState(true)
  const [introStep, setIntroStep] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timings = prefersReducedMotion ? [100, 240, 380] : [180, 620, 1060]
    const hideDelay = prefersReducedMotion ? 1000 : 1700

    const timers = timings.map((delay, index) =>
      window.setTimeout(() => setIntroStep(index), delay),
    )

    const hideTimer = window.setTimeout(() => {
      setIntroVisible(false)
      setIntroStep(introSteps.length - 1)
    }, hideDelay)

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      window.clearTimeout(hideTimer)
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    document.body.style.overflow = introVisible ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [introVisible])

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined
    }

    const context = gsap.context(() => {
      gsap.from('.js-reveal', {
        opacity: 0,
        y: 36,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.js-hero',
          start: 'top 75%',
        },
      })

      gsap.from('.js-story-card', {
        opacity: 0,
        y: 48,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.14,
        scrollTrigger: {
          trigger: '.js-sequence',
          start: 'top 72%',
        },
      })

      gsap.to('.js-scroll-track', {
        xPercent: -66.666,
        ease: 'none',
        scrollTrigger: {
          trigger: '.js-sequence',
          start: 'top top',
          end: '+=220%',
          scrub: 1,
          pin: true,
        },
      })
    }, rootRef)

    return () => context.revert()
  }, [prefersReducedMotion])

  return { rootRef, introVisible, introStep, prefersReducedMotion }
}
