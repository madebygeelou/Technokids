import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function FeaturedEvent() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".reveal"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface px-6 py-16 md:px-12 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 glow-red-bottom" />
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-12 gap-6 md:gap-10 items-center">
        <div className="reveal md:col-span-6 aspect-[4/5] bg-overlay overflow-hidden border border-accent/30 shadow-[0_0_60px_-10px_rgba(225,15,31,0.4)]">
          {/*
            === MEDIA SLOT: REDEMPTION FLYER ===
            Drop file at: /public/assets/events/redemption-oddfellows.jpg
            Once dropped in, uncomment the <img> tag below and remove this placeholder div.
          */}
          <img
            src="/assets/events/redemption-oddfellows.jpg"
            alt="Redemption at Oddfellows"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:col-span-6 flex flex-col items-start">
          <p className="reveal font-mono text-xs uppercase tracking-widest text-accent mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Next Up
          </p>
          <h2 className="reveal font-display text-5xl md:text-7xl text-warm uppercase leading-none">
            Redemption
          </h2>
          <div className="reveal flex flex-col gap-1 mt-5 font-mono text-sm text-warm/70 uppercase tracking-wide">
            <span>Thursday, June 25, 2026</span>
            <span>Doors 9:00 PM · Oddfellows · Las Vegas</span>
            <span className="text-accent">21+</span>
          </div>
          {/* TICKET LINK: same Posh URL as Hero */}
          <a
            href="https://posh.vip/g/nite-kids-"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-8 bg-accent text-void font-mono text-xs uppercase tracking-widest px-9 py-4 hover:bg-fire transition-colors duration-300"
          >
            Get Tickets →
          </a>
        </div>
      </div>
    </section>
  );
}
