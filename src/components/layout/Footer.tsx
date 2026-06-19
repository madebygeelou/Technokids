export default function Footer() {
  return (
    <footer className="bg-void border-t border-border px-6 py-12 md:px-12">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-display text-2xl text-warm uppercase">
            Technokids
          </p>
          <p className="font-mono text-xs text-muted mt-2">
            Unfiltered. Underground. Community.
          </p>
        </div>
        <div className="font-mono text-xs text-muted uppercase tracking-widest">
          © 2026 Technokids · Built by glouuup
        </div>
      </div>
    </footer>
  );
}
