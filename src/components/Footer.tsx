export default function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-[var(--border)]">

      {/* TOP SECTION (STRICT 3-COLUMN GRID) */}
      <div className="grid grid-cols-3 gap-16 items-start">

        {/* BRAND */}
        <div className="space-y-4">
          <div className="font-semibold text-[var(--text)]">
            BORIS LINK
          </div>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
            Entrepreneur. Construction d’Artinova.<br />
            Je documente ce que j’apprends.
          </p>
        </div>

        {/* PAGES */}
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
            Pages
          </div>

          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {["Journal", "Artinova", "À propos", "Newsletter"].map((item) => (
              <li
                key={item}
                className="hover:text-[var(--text)] transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ELSEWHERE */}
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
            Me suivre
          </div>

          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {["YouTube", "LinkedIn", "Instagram", "X / Twitter", "Facebook", "Tik Tok"].map((item) => (
              <li
                key={item}
                className="hover:text-[var(--text)] transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-8 pt-4 border-t border-[var(--border)] flex justify-between text-xs text-[var(--text-muted)]">
        <div>© 2026 Boris Link. Tous droits réservés.</div>
        <div>Construit en public. Mis à jour chaque semaine.</div>
      </div>

    </footer>
  );
}