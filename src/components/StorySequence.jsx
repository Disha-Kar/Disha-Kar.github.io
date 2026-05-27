import { storyCards } from '../content/portfolioContent'

export function StorySequence() {
  return (
    <section id="sequence" className="sequence-section js-sequence">
      <div className="sequence-header">
        <p className="section-label js-reveal">Home page structure</p>
        <h2 className="js-reveal font-(family-name:--font-display)">
          A sequence built to hold attention as the page scrolls.
        </h2>
      </div>

      <div className="sequence-viewport">
        <div className="js-scroll-track sequence-track">
          {storyCards.map((card) => (
            <article key={card.number} className="story-card js-story-card">
              <div className={`story-card-sheen bg-linear-to-br ${card.accent}`} aria-hidden="true" />
              <span className="story-number">{card.number}</span>
              <h3 className="story-title">{card.title}</h3>
              <p className="story-copy">{card.description}</p>
              <div className="story-footer">
                <span>Scroll phase</span>
                <span>Editorial motion</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
