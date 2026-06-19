import { Link } from "react-router-dom";
import { useState } from "react";
import { ASSETS } from "@/lib/assets";

export default function Navbar() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-void/80 backdrop-blur-sm">
      <Link to="/" className="flex items-center">
        {!logoFailed ? (
          <img
            src={ASSETS.logo.static}
            alt="Technokids"
            className="h-8 w-auto"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="font-display text-xl tracking-wide text-warm uppercase">
            Technokids
          </span>
        )}
      </Link>
      <nav className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-warm">
        <Link to="/archive" className="hover:text-accent transition-colors">
          Archive
        </Link>
        <Link to="/editorial" className="hover:text-accent transition-colors">
          Editorial
        </Link>
        <Link to="/community" className="hover:text-accent transition-colors">
          Community
        </Link>
      </nav>
      <button className="md:hidden text-warm font-mono text-xs uppercase">
        Menu
      </button>
    </header>
  );
}
