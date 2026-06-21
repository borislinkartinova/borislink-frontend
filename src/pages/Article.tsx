import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Article() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(
          `https://borislink.mystagingwebsite.com/wp-json/wp/v2/journal?slug=${slug}`
        );

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setPost(data[0]);
        } else {
          console.error("Post not found for slug:", slug);
          setError(true);
        }
      } catch (e) {
        console.error("Error loading post", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-[var(--text-muted)]">
        Loading...
      </div>
    );
  }

  if (error || !post) {
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
        {post.title?.rendered}
      </h1>

      {/* DATE */}
      <div className="text-sm text-[var(--text-muted)] mt-3">
        {new Date(post.date).toLocaleDateString("en-GB")}
      </div>

      {/* CONTENT */}
      <div
        className="article-content mt-10 text-[var(--text)] leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: post.content?.rendered || ""
        }}
      />

      <Footer />

    </div>
  );
}