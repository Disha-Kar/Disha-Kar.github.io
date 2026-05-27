import { motion } from 'framer-motion'

export function HeroSection({ prefersReducedMotion }) {
  return (
    <section className="hero-wrap js-hero">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="hero-noise" />
      </div>

      <header className="site-nav">
        <div>
          <p className="site-brand">Anshi Jangid</p>
          <p className="site-brand-sub">Graphic Designer · Photographer</p>
        </div>
        <nav className="site-links" aria-label="Primary">
          <a href="#sequence">Sequence</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="js-reveal section-label">Story-led portfolio</p>
          <h2 className="js-reveal hero-heading font-(family-name:--font-display)">
            A cinematic front page for visual identity, photography, and commercial imagery.
          </h2>
          <p className="js-reveal hero-text">
            Built as a scrollable sequence with a polished intro, deep contrast, and motion that
            feels editorial instead of template-like.
          </p>

          <div className="js-reveal hero-actions">
            <a className="cta-primary" href="#sequence">
              Start the sequence
            </a>
            <a className="cta-secondary" href="#experience">
              Explore the portfolio structure
            </a>
          </div>

          <div className="js-reveal hero-meta">
            <div>
              <span>Focus</span>
              <strong>Branding, photography, campaigns</strong>
            </div>
            <div>
              <span>Style</span>
              <strong>Clean, high-definition, story-based</strong>
            </div>
          </div>
        </div>

        <motion.aside
          className="hero-card"
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: prefersReducedMotion ? 0 : 0.25 }}
        >
          <div className="hero-card-frame">
            <div className="hero-card-glow" aria-hidden="true" />
            <p className="hero-card-label">2026 portfolio introduction</p>
            <h3>Designing work that feels like a scene, not a slide.</h3>
            <p>
              The opening section is set up to flow into a scrollable narrative where each shot
              and campaign can land with space and rhythm.
            </p>

            <div className="hero-card-stats">
              <div>
                <strong>01</strong>
                <span>Intro sequence</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Hero section</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Scroll story</span>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
