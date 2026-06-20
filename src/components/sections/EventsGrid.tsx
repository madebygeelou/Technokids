import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";
import { events } from "@/data/events";
import type { Event } from "@/types";

export default function EventsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.querySelectorAll(".event-card"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section className="bg-surface px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">
          Upcoming
        </p>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {events.map((event: Event) => {
            const date = new Date(event.date);
            const formattedDate = date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });

            return (
              <Link
                key={event.id}
                to={`/events/${event.slug}`}
                className="event-card group block"
              >
                <div className="aspect-[3/4] bg-overlay overflow-hidden">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl text-warm uppercase mt-4">
                  {event.title}
                </h3>
                <p className="font-mono text-xs text-muted uppercase tracking-widest mt-1">
                  {formattedDate} · {event.city}
                </p>
              </Link>
            );
          })}
        </div>

        <Link
          to="/archive"
          className="inline-block mt-12 font-mono text-xs uppercase tracking-widest text-warm border-b border-warm/30 hover:border-accent hover:text-accent transition-colors duration-300"
        >
          View All Events →
        </Link>
      </div>
    </section>
  );
}
