export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-border overflow-hidden">
      <div className="absolute inset-0 glow-red-bottom opacity-50" />

      {/* Pre-footer CTA */}
      <div className="relative px-6 py-16 md:px-12 md:py-20 text-center border-b border-border">
        <h2
          className="font-display text-warm uppercase leading-none"
          style={{ fontSize: "clamp(32px, 6vw, 64px)" }}
        >
          Stay In The Loop
        </h2>
        <p className="font-mono text-xs text-muted uppercase tracking-widest mt-4">
          One email per event. No spam, ever.
        </p>

        {/*
          NEWSLETTER FORM
          For now this is a simple mailto-style form with no backend.
          Replace action/onSubmit with a real provider (Mailchimp, Buttondown, etc.) when ready.
        */}
        <form
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-md mx-auto mt-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="email@address.com"
            className="bg-surface border border-border text-warm font-mono text-sm px-4 py-3 flex-1 focus:border-accent outline-none transition-colors"
          />
          <button
            type="submit"
            className="bg-accent text-void font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-fire transition-colors duration-300 whitespace-nowrap"
          >
            Subscribe →
          </button>
        </form>
      </div>

      {/* Main footer grid */}
      <div className="relative px-6 py-12 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-2xl text-warm uppercase">
            TECHNOKIDS
          </p>
          <p className="font-mono text-xs text-muted mt-2">
            Unfiltered. Underground. Community.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-1">
            Explore
          </p>
          <a
            href="/archive"
            className="font-mono text-xs text-warm/80 uppercase hover:text-accent transition-colors"
          >
            Archive
          </a>
          <a
            href="/editorial"
            className="font-mono text-xs text-warm/80 uppercase hover:text-accent transition-colors"
          >
            Editorial
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-1">
            Connect
          </p>
          {/* SOCIAL LINKS: replace href="#" with real profile URLs */}
          <a
            href="https://www.instagram.com/technokidslv/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-warm/80 uppercase hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@nitekidslv_"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-warm/80 uppercase hover:text-accent transition-colors"
          >
            TikTok
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-1">
            Contact
          </p>
          {/* CONTACT EMAIL: replace with real address */}
          <a
            href="mailto:nitekidslv@gmail.com"
            className="font-mono text-xs text-warm/80 uppercase hover:text-accent transition-colors"
          >
            nitekidslv@gmail.com
          </a>
        </div>
      </div>

      <div className="relative px-6 py-6 md:px-12 border-t border-border flex flex-col sm:flex-row justify-between gap-2">
        <p className="font-mono text-[10px] text-muted uppercase tracking-widest">
          © 2026 TECHNOKIDS
        </p>
        <p className="font-mono text-[10px] text-muted uppercase tracking-widest">
          Built by glouuup
        </p>
      </div>
    </footer>
  );
}
