import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Article() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const res = await fetch(
          `https://borislink.mystagingwebsite.com/wp-json/wp/v2/journal?slug=${slug}&_fields=id,title,content,date`
        );

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setPost(data[0]);
        }
      } catch (e) {
        console.error("Error loading post", e);
      }
    }

    loadPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-[var(--text-muted)]">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">

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
        className="article-content mt-10"
        dangerouslySetInnerHTML={{
          __html: post.content?.rendered
        }}
      />
      <Footer />
    </div>
  );
}