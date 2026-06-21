import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

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
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-void overflow-hidden texture-grid">
      <div className="absolute inset-0 glow-red" />

      {/*
        === MEDIA SLOT: HERO BACKGROUND VIDEO ===
        Drop file at: /public/assets/video/hero-loop.mp4
        Specs: H.264 mp4, max 1080p, 8-15sec loop, no audio, under 5MB
        Once dropped in, uncomment the <source> line below.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/assets/video/hero-loop.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-void" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Las Vegas Underground
        </p>

        <div
          ref={headlineRef as any}
          className="flex items-center justify-center"
        >
          <img
            src="/assets/logo/logo.png"
            alt="Technokids"
            className="logo-spin-once"
            style={{ width: "clamp(160px, 28vw, 340px)", height: "auto" }}
          />
        </div>

        <p
          ref={subRef}
          className="font-mono text-warm/80 text-xs md:text-sm uppercase tracking-widest mt-5"
        >
          Unfiltered · Underground · Community
        </p>

        {/* TICKET LINK: pulls from Redemption event — update href if event changes */}
        <a
          ref={ctaRef}
          href="https://posh.vip/g/nite-kids-"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 bg-accent text-void font-mono text-xs uppercase tracking-widest px-9 py-4 hover:bg-fire transition-colors duration-300"
        >
          Get Tickets →
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-10 bg-warm/30" />
      </div>
    </section>
  );
}
