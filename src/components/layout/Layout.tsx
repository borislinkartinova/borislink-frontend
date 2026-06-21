import type { ReactNode } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const NavItem = ({ to, label, onClick }: any) => {
    const active = location.pathname === to;

    return (
      <Link
        to={to}
        onClick={onClick}
        className={`
          text-sm font-medium transition-colors duration-200

          text-[var(--text-muted)]
          hover:text-[var(--text)]

          ${active ? "text-[var(--text)] font-semibold" : ""}
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]">

        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* BRAND */}
          <Link
            to="/"
            className="
              font-semibold text-[var(--text)]
              hover:text-[var(--accent)]
              transition-colors duration-200
            "
          >
            Boris Link
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 items-center">
            <NavItem to="/journal" label="Journal" />
            <a
              href="https://artinova.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors duration-200 text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              Artinova
            </a>
            <NavItem to="/about" label="À propos" />
            <a
              href="https://borislinkartinova.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors duration-200 text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              Newsletter
            </a>
          </nav>

          {/* HAMBURGER BUTTON */}
          <button
            className="md:hidden text-[var(--text)] text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">

            {/* IMPORTANT: no gap between items */}
            <div className="flex flex-col">

              <div className="border-b border-[var(--border)] px-6 py-3">
                <NavItem to="/journal" label="Journal" onClick={() => setOpen(false)} />
              </div>

              <div className="border-b border-[var(--border)] px-6 py-3">
                <a
                  href="https://artinova.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium transition-colors duration-200 text-[var(--text-muted)] hover:text-[var(--text)]"
                >
                  Artinova
                </a>
              </div>

              <div className="border-b border-[var(--border)] px-6 py-3">
                <NavItem to="/about" label="À propos" onClick={() => setOpen(false)} />
              </div>

              <div className="px-6 py-3">
                <a
                  href="https://borislinkartinova.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium transition-colors duration-200 text-[var(--text-muted)] hover:text-[var(--text)]"
                >
                  Newsletter
                </a>
              </div>

            </div>
          </div>
        )}

      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {children}
      </main>

    </div>
  );
}