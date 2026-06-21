import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

const POSTS = [
  {
    id: 1,
    slug: "pourquoi-je-lance-boris-link",
    date: "2026-06-20T16:48:03",
    title: "Pourquoi je lance Boris Link (et la construction d’Artinova en public)",
    content: `
<h2>1. Introduction</h2>
<p>Je m’appelle Boris.</p>
<p>Je suis entrepreneur français, et aujourd’hui je lance Boris Link.</p>
<p>À travers ce journal, je vais documenter publiquement mon parcours entrepreneurial et la construction d’Artinova.</p>

<h2>2. Qui je suis</h2>
<p>Je travaille dans le SaaS B2B.</p>
<p>Je fais de la vente, de la prospection et des démonstrations produit.</p>

<h2>3. Mon parcours</h2>
<p>J’ai travaillé dans plusieurs environnements : vente, SaaS, crypto et growth.</p>
<p>J’ai construit des communautés et des projets en ligne.</p>

<h2>4. Ce que j’ai compris</h2>
<p>Je ne veux pas créer un média.</p>
<p>Je veux construire un logiciel durable.</p>

<h2>5. Pourquoi Artinova</h2>
<p>Artinova est un SaaS pour les artisans du bâtiment.</p>
<p>Il vise à simplifier leur gestion et leur organisation.</p>

<h2>6. Pourquoi Boris Link</h2>
<p>C’est un journal de construction en public.</p>
<p>Je documente ce que je construis et ce que j’apprends.</p>

<h2>7. Ce que vous verrez ici</h2>
<p>Du SaaS, de la vente, de l’IA, de l’automatisation et du build in public.</p>

<h2>8. Conclusion</h2>
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

      <Link to="/journal" className="text-sm text-[var(--accent)] hover:underline">
        ← Journal
      </Link>

      <h1 className="text-4xl font-semibold mt-6 text-[var(--text)] leading-tight">
        {post.title}
      </h1>

      <div className="text-sm text-[var(--text-muted)] mt-3">
        {new Date(post.date).toLocaleDateString("en-GB")}
      </div>

      <div
        className="article-content mt-10 text-[var(--text)] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Footer />
    </div>
  );
}