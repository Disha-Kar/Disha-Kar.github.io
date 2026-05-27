import { usePortfolioAnimations } from '../hooks/usePortfolioAnimations'
import { ExperienceSection } from './ExperienceSection'
import { HeroSection } from './HeroSection'
import { IntroSequence } from './IntroSequence'
import { SiteFooter } from './SiteFooter'
import { StorySequence } from './StorySequence'

export function PortfolioPage() {
  const { rootRef, introVisible, introStep, prefersReducedMotion } = usePortfolioAnimations()

  return (
    <main ref={rootRef} className="portfolio-shell text-white">
      <IntroSequence
        introVisible={introVisible}
        introStep={introStep}
      />
      <HeroSection prefersReducedMotion={prefersReducedMotion} />
      <StorySequence />
      <ExperienceSection />
      <SiteFooter />
    </main>
  )
}
