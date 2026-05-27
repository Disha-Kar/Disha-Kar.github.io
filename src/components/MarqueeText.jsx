export const MarqueeText = () => {
  // Repeat enough times so it tiles seamlessly across any screen width
  const phrase = "It is all about Creativity";
  const separator = "✦";

  // One "track" = phrase repeated 6 times so the seamless loop works on wide screens
  const track = Array.from({ length: 6 }).map((_, i) => (
    <span key={i} className="marquee-item">
      {/* Alternate between filled and outlined style */}
      {i % 2 === 0 ? (
        <span className="marquee-filled">{phrase}</span>
      ) : (
        <span className="marquee-outline">{phrase}</span>
      )}
      <span className="marquee-sep">{separator}</span>
    </span>
  ));

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {track}
        {/* Duplicate for seamless loop */}
        {track}
      </div>

      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          /* Fade edges */
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marqueeScroll 24s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .marquee-item {
          display: flex;
          align-items: center;
          white-space: nowrap;
          padding: 0 0.4em;
        }

        .marquee-filled {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 8vw, 110px);
          font-weight: 700;
          font-style: italic;
          color: rgba(255, 255, 255, 0.92);
          letter-spacing: -0.02em;
          line-height: 1;
          text-transform: uppercase;
          padding: 0 0.25em;
        }

        .marquee-outline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 8vw, 110px);
          font-weight: 700;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.45);
          letter-spacing: -0.02em;
          line-height: 1;
          text-transform: uppercase;
          padding: 0 0.25em;
        }

        .marquee-sep {
          font-size: clamp(16px, 2.5vw, 32px);
          color: rgba(200, 160, 255, 0.7);
          margin: 0 0.3em;
          display: inline-block;
          animation: sepPulse 2s ease-in-out infinite;
        }

        @keyframes sepPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
};
