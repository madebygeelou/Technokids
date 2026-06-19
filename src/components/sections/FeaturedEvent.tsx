import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";
import { events } from "@/data/events";

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
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  const event = events[0];
  if (!event) return null;

  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <section ref={sectionRef} className="bg-void px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="reveal md:col-span-7 aspect-[3/4] bg-surface overflow-hidden">
          <img
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:col-span-5 flex flex-col items-start">
          <p className="reveal font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Next Up
          </p>
          <h2 className="reveal font-display text-4xl md:text-5xl text-warm uppercase leading-tight">
            {event.title}
          </h2>
          <p className="reveal font-mono text-sm text-muted uppercase tracking-wide mt-4">
            {formattedDate} · {event.venue} · {event.city}
          </p>
          <p className="reveal text-warm/80 text-base leading-relaxed mt-6">
            {event.description}
          </p>
          <Link
            to={`/events/${event.slug}`}
            className="reveal mt-8 border border-accent text-accent font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-accent hover:text-void transition-colors duration-300"
          >
            Get Tickets →
          </Link>
        </div>
      </div>
    </section>
  );
}
