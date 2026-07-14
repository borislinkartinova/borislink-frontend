import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto pt-16 pb-0 px-6">

      {/* HEADER */}
      <div className="mb-16">
        <div className="text-xs tracking-widest uppercase text-[var(--text-muted)] mb-6">
          À propos
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold leading-[1.1] text-[var(--text)]">
          Qui je suis et pourquoi j’écris ici.
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 space-y-12">

          {/* BACKGROUND */}
          <section>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Contexte
            </p>

            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
              <p>
                Je suis Boris Link. Avant de lancer Artinova, j’ai passé six ans dans les univers SaaS et B2B, d’abord en opérations puis en vente.
              </p>

              <p>
                Je souhaite construire quelque chose de personnel, avec une vision claire du problème que je veux résoudre et suffisamment de ressources pour essayer sérieusement.
              </p>

              <p>
                Ce site documente cette construction.
              </p>
            </div>
          </section>

          {/* WHY I WRITE */}
          <section>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Pourquoi j’écris
            </p>

            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
              <p>
                J’écris ici parce que l’écriture force la précision. Une idée non écrite est souvent une intuition, pas une pensée claire.
              </p>

              <p>
                Une grande partie du contenu sur les fondateurs est optimisée pour la viralité. J’essaie de faire l’inverse : des observations concrètes, issues de situations réelles.
              </p>
            </div>
          </section>

          {/* VALUES */}
          <section>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Valeurs
            </p>

            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">

              <p><strong className="text-[var(--text)]">Long terme</strong> : Je veux construire ce journal pour qu’il soit encore utile dans dix ans. J’écris en conséquence.</p>

              <p><strong className="text-[var(--text)]">Clarté</strong> : Je n’essaie pas de convaincre, mais de comprendre.</p>

              <p><strong className="text-[var(--text)]">Discipline</strong> : La constance à faible énergie vaut plus que la performance ponctuelle.</p>

              <p><strong className="text-[var(--text)]">Systèmes</strong> : Tout ce que je construis doit fonctionner même quand je suis fatigué ou distrait.</p>

              <p><strong className="text-[var(--text)]">Indépendance de pensée</strong> : Prendre des décisions selon ce qui est bon pour le projet sur le long terme, pas selon les tendances du moment.</p>

            </div>
          </section>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="md:col-span-4 md:col-start-9">
          
          {/* sticky wrapper (keeps BOTH blocks fixed while scrolling) */}
          <div className="sticky top-24 space-y-6">

            {/* QUICK FACTS */}
            <div className="border border-[var(--border)] p-5 bg-[var(--surface)]">
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
                Quick Facts
              </p>

              <div className="space-y-3 text-xs">
                {[
                  ["Localisation", "Dijon, France"],
                  ["Projet", "Artinova"],
                  ["Écriture depuis", "2026"],
                  ["Ancien rôle", "SDR SaaS"],
                  ["Parcours", "Ops → Sales → Entrepreneur"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <span className="text-[var(--text-muted)]">{k}</span>
                    <span className="text-[var(--text)] text-right">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="border border-[var(--border)] p-5">
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
                Newsletter
              </p>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                Une note hebdomadaire sur la construction d’Artinova, le SaaS, la vente et les systèmes.
              </p>

              <button className="w-full text-xs font-medium bg-[var(--text)] text-[var(--bg)] py-2 hover:bg-[var(--accent)] transition-colors">
                S’abonner
              </button>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}