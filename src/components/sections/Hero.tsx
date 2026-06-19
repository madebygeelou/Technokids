import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, staggerFadeUp } from "@/lib/gsap";
import { ASSETS } from "@/lib/assets";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    ).fromTo(
      [subRef.current, ctaRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
      "-=0.4",
    );
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-void overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={ASSETS.hero.poster}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      >
        <source src={ASSETS.hero.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-void" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1
          ref={headlineRef}
          className="font-display text-warm uppercase leading-none"
          style={{ fontSize: "clamp(48px, 12vw, 140px)" }}
        >
          Unfiltered.
          <br />
          <span className="text-accent">Underground.</span>
        </h1>

        <p
          ref={subRef}
          className="font-mono text-warm/80 text-xs md:text-sm uppercase tracking-widest mt-6"
        >
          Techno · Community · Las Vegas
        </p>

        <Link
          ref={ctaRef}
          to="/archive"
          className="mt-10 border border-accent text-accent font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-accent hover:text-void transition-colors duration-300"
        >
          Next Event →
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-10 bg-warm/30" />
      </div>
    </section>
  );
}
