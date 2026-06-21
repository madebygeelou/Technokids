export default function MediaReel() {
  /*
    === MEDIA SLOT: RECAP PHOTOS ===
    Drop files at: /public/assets/recap/recap-01.jpg, recap-02.jpg, recap-03.jpg (add more as needed)
    Once ready, replace the placeholder array below with real paths, e.g.:
    const recapImages = ['/assets/recap/recap-01.jpg', '/assets/recap/recap-02.jpg']
  */
  const recapImages: string[] = [];

  return (
    <section className="bg-void py-16 overflow-hidden">
      <p className="font-mono text-xs uppercase tracking-widest text-accent px-6 md:px-12 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        Inside Technokids
      </p>

      {recapImages.length === 0 ? (
        <div className="px-6 md:px-12">
          <div className="border border-dashed border-border/60 py-16 text-center font-mono text-xs text-muted uppercase tracking-widest">
            Recap photos go here — add to /public/assets/recap/
          </div>
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-4">
          {recapImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[340px] aspect-[3/4] bg-overlay overflow-hidden"
            >
              <img
                src={src}
                alt={`Recap ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
