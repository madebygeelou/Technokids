import { ASSETS } from "@/lib/assets";

export default function MediaReel() {
  return (
    <section className="bg-void py-20 overflow-hidden">
      <p className="font-mono text-xs uppercase tracking-widest text-accent px-6 md:px-12 mb-6">
        Inside Technokids
      </p>
      <div className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide">
        {ASSETS.recap.reel.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] md:w-[340px] aspect-[3/4] bg-overlay overflow-hidden"
          >
            <img
              src={src}
              alt={`Recap ${i + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x800/141414/E10F1F?text=ADD+RECAP+PHOTO";
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
