import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-void/80 backdrop-blur-sm">
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-widest text-warm hover:text-accent transition-colors"
      >
        TECHNOKIDS
      </Link>
      <nav className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-warm">
        <Link to="/archive" className="hover:text-accent transition-colors">
          Archive
        </Link>
        <Link to="/editorial" className="hover:text-accent transition-colors">
          Editorial
        </Link>
      </nav>
      <button className="md:hidden text-warm font-mono text-xs uppercase">
        Menu
      </button>
    </header>
  );
}
