export function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-grid">
        <div className="experience-block js-reveal">
          <p className="section-label">What comes next</p>
          <h2 className="font-(family-name:--font-display)">
            The rest of the site can expand from this visual system.
          </h2>
          <p>
            This first pass is intentionally limited to the front page and opening motion so the
            structure stays clean before adding project galleries, case studies, and deeper story
            sections.
          </p>
        </div>

        <div className="experience-list js-reveal">
          <div>
            <span>01</span>
            <p>Intro animation with staged text reveals and a blurred backdrop.</p>
          </div>
          <div> 
            <span>02</span>
            <p>A high-contrast hero that introduces the portfolio direction.</p>
          </div>
          <div>
            <span>03</span>
            <p>A pinned scroll sequence that can be extended into future sections.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
