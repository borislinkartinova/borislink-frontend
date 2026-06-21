import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { journalPosts } from "../content/journal";

export default function Article() {
  const { slug } = useParams();

  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto pt-16 pb-0">
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
    <div className="max-w-2xl mx-auto pt-16 pb-0">

      {/* BACK */}
      <Link to="/journal" className="text-sm text-[var(--accent)] hover:underline">
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
      <div className="article-content mt-10 text-[var(--text)] leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <Footer />
    </div>
  );
}