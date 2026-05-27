import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover-anshi",
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
  back: "book-back-anshi",
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


        {/* Page labels overlay — shown when book is open */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 20 }}
        >
          {/* Left page label: Photography */}
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

          {/* Right page label: Graphic Design */}
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
