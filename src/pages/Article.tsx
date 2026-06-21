import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

const POSTS = [
  {
    id: 18,
    slug: "test-article",
    date: "2026-06-20T16:48:03",
    title: "Pourquoi je lance Boris Link (et la construction d’Artinova en public)",
    content: `
      <h2>1. Introduction</h2>
      <p>Je m’appelle Boris.</p>
      <p>Je suis entrepreneur français, et aujourd’hui je lance Boris Link.</p>
      <p>Je documente la construction d’Artinova en public.</p>

      <h2>2. Vision</h2>
      <p>Je construis un SaaS pour les artisans du bâtiment.</p>
      <p>Je veux documenter tout le processus.</p>

      <h2>3. Conclusion</h2>
      <p>Bienvenue dans l’aventure.</p>
    `
  }
];

export default function Article() {
  const { slug } = useParams();

  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-16">
        <Link to="/journal" className="text-[var(--accent)] hover:underline">
          ← Retour au journal
        </Link>

        <p className="mt-6 text-[var(--text-muted)]">
          Article introuvable.
        </p>

        <Footer />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16">

      {/* BACK */}
      <Link
        to="/journal"
        className="text-sm text-[var(--accent)] hover:underline"
      >
        ← Journal
      </Link>

      {/* TITLE */}
      <h1 className="text-4xl font-semibold mt-6 text-[var(--text)] leading-tight">
        {post.title}
      </h1>

      {/* DATE */}
      <div className="text-sm text-[var(--text-muted)] mt-3">
        {new Date(post.date).toLocaleDateString("en-GB")}
      </div>

      {/* CONTENT */}
      <div
        className="article-content mt-10 text-[var(--text)] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Footer />
    </div>
  );
}