import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".word"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  const line1 = ["WE. ", "BUILD. ", "ROOMS. "];
  const line2 = ["WHERE. ", "EVERYONE. "];
  const line3 = ["BELONGS."];

  return (
    <section
      ref={ref}
      className="relative bg-void min-h-[50vh] flex flex-col items-center justify-center px-6 py-16 text-center texture-grid"
    >
      <h2
        className="font-display text-warm uppercase leading-tight"
        style={{ fontSize: "clamp(36px, 7vw, 80px)" }}
      >
        <span className="block">
          {line1.map((w, i) => (
            <span key={i} className="word inline-block mr-4">
              {w}
            </span>
          ))}
        </span>
        <span className="block">
          {line2.map((w, i) => (
            <span key={i} className="word inline-block mr-4">
              {w}
            </span>
          ))}
        </span>
        <span className="block text-accent">
          {line3.map((w, i) => (
            <span key={i} className="word inline-block">
              {w}
            </span>
          ))}
        </span>
      </h2>
      <p className="word font-mono text-xs uppercase tracking-widest text-muted mt-8">
        Est. 2019 · Las Vegas
      </p>
    </section>
  );
}
