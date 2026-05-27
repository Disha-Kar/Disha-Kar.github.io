import { AnimatePresence, motion } from 'framer-motion'
import { introSteps } from '../content/portfolioContent'

const lineVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
}

export function IntroSequence({ introVisible, introStep }) {
  const activeStep = introSteps[Math.min(introStep, introSteps.length - 1)]

  return (
    <AnimatePresence mode="wait">
      {introVisible ? (
        <motion.section
          key="intro"
          className="intro-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="intro-glow" aria-hidden="true" />
          <div className="intro-grid" aria-hidden="true" />

          <div className="intro-copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={introStep}
                className="intro-line-wrap"
                variants={lineVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {introStep <= 1 ? (
                  <h1 className="intro-title">{activeStep.title}</h1>
                ) : null}

                {introStep >= 2 ? (
                  <div className="intro-divider-stack" aria-label="Graphic Designer and Photographer">
                    <h1 className="intro-title">{activeStep.title}</h1>

                    <motion.span
                      className="intro-divider"
                      aria-hidden="true"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <h1 className="intro-title intro-title-secondary">{activeStep.subtitle}</h1>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  )
}
