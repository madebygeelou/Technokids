export default function Editorial() {
  return (
    <div className="relative min-h-screen bg-void text-warm pt-40 pb-24 px-6 texture-grid">
      <div className="absolute inset-0 glow-red opacity-40" />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Archive
        </p>
        <h1
          className="font-display uppercase leading-none"
          style={{ fontSize: "clamp(40px, 8vw, 90px)" }}
        >
          Editorial
        </h1>
        <p className="font-mono text-sm text-muted uppercase tracking-widest mt-6">
          Stories coming soon.
        </p>
      </div>
    </div>
  );
}
