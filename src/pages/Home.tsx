import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const url =
        "https://borislink.mystagingwebsite.com/wp-json/wp/v2/journal?per_page=5";

      try {
        console.log("📡 FETCH URL:", url);

        // GET request (with credentials included)
        const res = await fetch(url, {
          method: "GET",
          credentials: "include",
        });

        console.log("📊 STATUS:", res.status);
        console.log("📊 OK:", res.ok);

        const contentType = res.headers.get("content-type");
        console.log("📦 CONTENT-TYPE:", contentType);

        if (!res.ok) {
          const text = await res.text();

          if (res.status === 403) {
            console.error("🚫 403 FORBIDDEN - WordPress REST API blocked (plugin / security / Pressable firewall)", text);
          } else {
            console.error("❌ API ERROR BODY:", text);
          }

          setPosts([]);
          return;
        }

        if (contentType && !contentType.includes("application/json")) {
          const text = await res.text();
          console.error("❌ NON-JSON RESPONSE:", text);
          setPosts([]);
          return;
        }

        const data = await res.json();

        console.log("✅ DATA RECEIVED:", data);

        if (!Array.isArray(data)) {
          console.warn("⚠️ DATA IS NOT AN ARRAY:", data);
          setPosts([]);
          return;
        }

        setPosts(data);
      } catch (e) {
        console.error("🔥 FETCH FAILED (CORS / NETWORK):", e);
        setPosts([]);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto pb-0 py-16">

      {/* HEADER */}
      <div className="mb-16">

        <div className="text-xs tracking-widest uppercase text-[var(--text-muted)] mb-6">
          Journal de fondateur
        </div>

        <div className="text-xs tracking-widest uppercase text-[var(--text-muted)] mb-6">
          Fondé en 2026
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold leading-[1.1] text-[var(--text)]">
          Je construis Artinova et je documente ce que j’apprends sur le SaaS,
          la vente, l’IA, l’automatisation et les systèmes.
        </h1>

        <p className="mt-6 text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
          Un journal de ce que je construis et de ce que j’apprends, écrit pour garder de la clarté sur le long terme.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">

          <Link
            to="/journal"
            className="px-5 py-2.5 bg-[var(--text)] text-[var(--bg)] text-sm font-medium transition-colors duration-200 hover:bg-[var(--accent)] hover:text-white"
          >
            Lire le journal →
          </Link>

          <a
            href="https://borislinkartinova.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[var(--text)] text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Newsletter hebdomadaire
          </a>

          <Link
            to="/artinova"
            className="text-sm font-medium text-[var(--accent)] transition-colors duration-200 hover:underline underline-offset-4"
          >
            Artinova →
          </Link>

        </div>

      </div>

      {/* METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-12 border-y border-[var(--border)] py-8 items-start text-left">
        <Metric value="0" label="Articles publiés" />
        <Metric value="0" label="Abonnés newsletter" />
        <Metric value="0€" label="MRR Artinova" />
        <Metric value="0" label="Mois de construction" />
      </div>

      {/* RECENT WRITING */}
      <div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-[var(--text)]">
            Écrits récents
          </h2>

          <Link
            to="/journal"
            className="text-sm text-[var(--accent)] hover:underline underline-offset-4"
          >
            Tout voir →
          </Link>
        </div>

        {/* TABLE HEADER */}
        <div className="hidden md:grid grid-cols-[40px_minmax(0,1.6fr)_minmax(0,1fr)_140px_80px] items-start text-xs uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border)] pb-3">
          <div>#</div>
          <div>Titre</div>
          <div>Catégorie</div>
          <div>Date</div>
          <div className="text-right">Lecture</div>
        </div>

        <div className="divide-y divide-[var(--border)]">

          {posts.map((post: any, index: number) => (
            <Row
              key={post.id}
              slug={post.slug}
              index={(index + 1).toString().padStart(2, "0")}
              title={post.title?.rendered}
              excerpt={(post.acf?.summary || post.excerpt?.rendered || "").replace(/<[^>]*>/g, "")}
              category="JOURNAL"
              date={new Date(post.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              })}
              read={post.acf?.reading_time ? `${post.acf.reading_time} min` : "5 min"}
            />
          ))}

        </div>

      </div>

      {/* ABOUT + NEWSLETTER SECTION */}
      <div className="grid md:grid-cols-2 gap-16 mt-24 pt-10 border-t border-[var(--border)] items-start">

        <div className="text-[13.5px] leading-relaxed pr-6">
          <div className="text-xs tracking-widest uppercase text-[var(--text-muted)] mb-4">
            À propos
          </div>

          <p className="text-[var(--text-muted)] leading-relaxed mb-4">
            Je suis Boris Link, fondateur d'Artinova, une plateforme de gestion pour artisans indépendants en Europe.
          </p>

          <p className="text-[var(--text-muted)] leading-relaxed mb-4">
            Avant ça, j’ai passé six ans dans l'univers B2B & SaaS, entre sales et opérations. Mes expériences m’ont appris comment les logiciels se vendent, mais surtout comment ils se construisent vraiment.
          </p>

          <Link
            to="/about"
            className="text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
          >
            Biographie complète →
          </Link>
        </div>

        <div className="text-[13.5px] leading-relaxed">
          <div className="text-xs tracking-widest uppercase text-[var(--text-muted)] mb-4">
            Newsletter
          </div>

          <p className="text-[var(--text-muted)] mb-6">
            Une newsletter hebdomadaire d’un entrepreneur.
          </p>

          <p className="text-[var(--text-muted)] mb-6">
            Chaque semaine : un essai, une mise à jour sur Artinova, et une ressource ou lecture qui m’a marqué.
          </p>

          <p className="text-[var(--text-muted)] mb-6">
            Pas de contenu marketing. Pas de sponsors. Juste le suivi de construction en temps réel.
          </p>

          <a
            href="https://borislinkartinova.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[var(--text)] text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Newsletter hebdomadaire
          </a>

        </div>

      </div>

      <Footer />

    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Metric({ value, label }: any) {
  return (
    <div>
      <div className="text-2xl font-semibold text-[var(--text)] tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>
        {value}
      </div>
      <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-2" style={{ fontFamily: "var(--font-sans)" }}>
        {label}
      </div>
    </div>
  );
}

function Row({ index, title, excerpt, category, date, read, slug }: any) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[40px_minmax(0,1.6fr)_minmax(0,1fr)_140px_80px] items-start py-6 gap-y-2 w-full">

      <div className="text-xs text-[var(--text-muted)] font-mono uppercase">
        {index}
      </div>

      <div className="min-w-0">

        <div className="text-[12.5px] font-semibold leading-snug break-words">

          <Link
            to={`/journal/${slug}`}
            className="text-[var(--accent)] hover:underline underline-offset-4 transition-colors"
          >
            {title}
          </Link>

        </div>

        <div className="text-xs text-[var(--text-muted)] leading-relaxed mt-2 break-words whitespace-normal">
          {excerpt}
        </div>

      </div>

      <div className="hidden md:block text-xs text-[var(--text-muted)] uppercase tracking-widest">
        {category}
      </div>

      <div className="hidden md:block text-xs text-[var(--text-muted)] uppercase tracking-widest">
        {date}
      </div>

      <div className="hidden md:block text-xs text-[var(--text-muted)] uppercase tracking-widest text-right">
        {read}
      </div>

    </div>
  );
}