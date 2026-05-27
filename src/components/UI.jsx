import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

const pictures = [
  "../images/woman-taking-photo-with-camera-vibrant-landscape_964851-203020.jpg",
  "../images/graphic.avif",
  "DSC00680.jpg",
  "DSC00933.jpg",
  "DSC00966.jpg",
  "DSC00983.jpg",
  "DSC01011.jpg",
  "DSC01040.jpg",
  "DSC01064.jpg",
  "DSC01071.jpg",
  "DSC01103.jpg",
  "DSC01145.jpg",
  "DSC01420.jpg",
  "DSC01461.jpg",
  "DSC01489.jpg",
  "DSC02031.jpg",
  "DSC02064.jpg",
  "DSC02069.jpg",
];

export const pageAtom = atom(0);
export const transitionStateAtom = atom('idle'); // 'idle' | 'zooming' | 'black'
export const pages = [
  {
    front: "book-cover-anshi.jpg",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back-anshi.jpg",
});

export const UI = ({ isBookVisible }) => {
  const [page, setPage] = useAtom(pageAtom);
  const [labelsVisible, setLabelsVisible] = useState(false);

  // Play page flip sound when page changes
  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play().catch(() => { }); // Suppress autoplay errors
  }, [page]);

  // Auto-open the book after 1 second when book section becomes visible
  useEffect(() => {
    if (!isBookVisible) {
      // Reset when scrolled away
      setPage(0);
      setLabelsVisible(false);
      return;
    }

    // Book is now visible — wait 1s then open to page 1
    const openTimer = setTimeout(() => {
      setPage(1);
    }, 500);

    const labelTimer = setTimeout(() => {
      setLabelsVisible(true);
    }, 500); // Labels appear after the page has mostly turned

    return () => {
      clearTimeout(openTimer);
      clearTimeout(labelTimer);
    };
  }, [isBookVisible]);

  const isOpen = page >= 1;

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        {/* Top label */}
        <div
          className="w-full flex justify-center mt-12 sm:mt-16"
          style={{
            opacity: labelsVisible && isOpen ? 1 : 0,
            transition: "opacity 0.8s ease 0.4s", // slightly delayed so it appears smoothly
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "12px",
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              textShadow: "0 0 12px rgba(255,255,255,0.9), 0 0 24px rgba(255,255,255,0.5)",
            }}
          >
            Pick Your Craft
          </span>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 20 }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: window.innerWidth < 768
                ? `translate(-230%, -50%) rotate(-90deg)`
                : `translate(-160%, -50%) rotate(-90deg)`,
              opacity: labelsVisible && isOpen ? 1 : 0,
              transition: "opacity 0.8s ease",
              transformOrigin: "center center",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(10px, 1.8vw, 22px)",
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                fontWeight: 300,
                textShadow: "0 2px 20px rgba(0,0,0,0.6)",
                whiteSpace: "nowrap",
              }}
            >
              Photography
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              ...(window.innerWidth < 768
                ? { right: "-8%", left: "auto" }
                : { left: "50%" }),
              top: "50%",
              transform: window.innerWidth < 768
                ? `translateY(-50%) rotate(90deg)`
                : `translate(50%, -50%) rotate(90deg)`,
              opacity: labelsVisible && isOpen ? 1 : 0,
              transition: "opacity 0.8s ease",
              transformOrigin: "center center",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(10px, 1.8vw, 22px)",
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                fontWeight: 300,
                textShadow: "0 2px 20px rgba(0,0,0,0.6)",
                whiteSpace: "nowrap",
              }}
            >
              Graphic Design
            </span>
          </div>
        </div>
      </main>
    </>
  );
};
