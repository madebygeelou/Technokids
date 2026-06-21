import { useEffect, useRef, useState } from "react";

const recapImages = [
  "/assets/recap/tkrecappic1.jpg",
  "/assets/recap/tkrecappic2.jpg",
  "/assets/recap/tkrecappic3.jpg",
  "/assets/recap/tkrecappic4.jpg",
  "/assets/recap/tkrecappic5.jpg",
  "/assets/recap/tkrecappic6.jpg",
  "/assets/recap/tkrecappic7.jpg",
  // Add more paths here as you add more photos
];

export default function MediaReel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isInteracting = useRef(false);

  // Auto-advance every 4 seconds, paused while user is dragging/touching
  useEffect(() => {
    if (recapImages.length === 0) return;
    const interval = setInterval(() => {
      if (!isInteracting.current) {
        setActiveIndex((prev) => (prev + 1) % recapImages.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to active index whenever it changes
  useEffect(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[activeIndex] as HTMLElement;
    if (card) {
      trackRef.current.scrollTo({
        left: card.offsetLeft - 24,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleScroll = () => {
    isInteracting.current = true;
    window.clearTimeout((handleScroll as any)._t);
    (handleScroll as any)._t = window.setTimeout(() => {
      isInteracting.current = false;
    }, 3000);
  };

  return (
    <section className="bg-void py-16 overflow-hidden">
      <p className="font-mono text-xs uppercase tracking-widest text-accent px-6 md:px-12 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        Inside TECHNOKIDS
      </p>

      {recapImages.length === 0 ? (
        <div className="px-6 md:px-12">
          <div className="border border-dashed border-border/60 py-16 text-center font-mono text-xs text-muted uppercase tracking-widest">
            Recap photos go here — add to /public/assets/recap/
          </div>
        </div>
      ) : (
        <>
          <div
            ref={trackRef}
            onScroll={handleScroll}
            onTouchStart={handleScroll}
            className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {recapImages.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-[340px] aspect-[3/4] bg-overlay overflow-hidden snap-start"
              >
                <img
                  src={src}
                  alt={`Recap ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-2 justify-center mt-6">
            {recapImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === activeIndex ? "bg-accent" : "bg-border"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
