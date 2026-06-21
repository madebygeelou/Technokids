import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface RecapItem {
  id: string;
  title: string;
  date: string;
  coverImage: string;
}

export default function Archive() {
  const ref = useRef<HTMLDivElement>(null);

  // No past events yet — Redemption is our first night.
  // Once an event happens, add it here:
  // { id: '1', title: 'Redemption', date: '2026-06-25', coverImage: '/assets/recap/redemption-cover.jpg' }
  const recaps: RecapItem[] = [];

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".reveal"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      },
    );
  }, []);

  return (
    <div
      ref={ref}
      className="relative min-h-screen bg-void text-warm pt-40 pb-24 px-6 md:px-12 texture-grid"
    >
      <div className="absolute inset-0 glow-red opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <p className="reveal font-mono text-xs uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Archive
        </p>
        <h1
          className="reveal font-display uppercase leading-none"
          style={{ fontSize: "clamp(40px, 8vw, 90px)" }}
        >
          What Happened
        </h1>
        <p className="reveal font-mono text-sm text-muted uppercase tracking-widest mt-4 max-w-md">
          Every night we throw, archived here after it happens.
        </p>

        {recaps.length === 0 ? (
          <div className="reveal mt-16 border border-dashed border-border/60 py-20 text-center">
            <p className="font-mono text-xs text-muted uppercase tracking-widest">
              Our first recap goes live after Redemption — June 25, 2026
            </p>
          </div>
        ) : (
          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recaps.map((recap) => (
              <div key={recap.id} className="reveal group cursor-pointer">
                <div className="aspect-[3/4] bg-overlay overflow-hidden border border-border">
                  <img
                    src={recap.coverImage}
                    alt={recap.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg uppercase mt-3">
                  {recap.title}
                </h3>
                <p className="font-mono text-[10px] text-muted uppercase tracking-widest mt-1">
                  {recap.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
