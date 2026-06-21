import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { journalPosts } from "../content/journal";

export default function Journal() {
  const posts = journalPosts;
  const [selectedCategory, setSelectedCategory] = useState<string>("TOUT");

  const categories = useMemo(() => {
    const cats = posts
      .map((p: any) => p.category || "ARTINOVA")
      .filter(Boolean);

    return ["TOUT", ...Array.from(new Set(cats))];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "TOUT") return posts;
    return posts.filter(
      (p: any) => (p.category || "ARTINOVA") === selectedCategory
    );
  }, [posts, selectedCategory]);

  return (
    <div className="max-w-4xl mx-auto pt-16 pb-0">

      {/* HEADER */}
      <div className="mb-16">
        <div className="text-xs tracking-widest uppercase text-[var(--text-muted)] mb-6">
          Journal
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold leading-[1.1] text-[var(--text)]">
          Tous les écrits
        </h1>

        <p className="mt-4 text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
          Essais, réflexions et construction en public
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat: string) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs px-3 py-1 border transition-colors uppercase tracking-widest
              ${selectedCategory === cat
                ? "bg-[var(--text)] text-[var(--bg)] border-[var(--text)]"
                : "text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--accent)] hover:border-[var(--accent)]"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* TABLE HEADER */}
      <div className="hidden md:grid grid-cols-[40px_minmax(0,1.6fr)_minmax(0,1fr)_140px_80px] items-start text-xs uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border)] pb-3">
        <div>#</div>
        <div>Titre</div>
        <div>Catégorie</div>
        <div>Date</div>
        <div className="text-right">Lecture</div>
      </div>

      {/* ROWS */}
      <div className="divide-y divide-[var(--border)]">
        {filteredPosts.map((post: any, index: number) => (
          <Row
            key={post.id}
            slug={post.slug}
            index={(index + 1).toString().padStart(2, "0")}
            title={post.title}
            excerpt={post.excerpt || post.content?.split("\n")[0] || ""}
            category={post.category || "ARTINOVA"}
            date={new Date(post.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric"
            })}
            read={post.readingTime ? `${post.readingTime} min` : "5 min"}
          />
        ))}
      </div>

      <Footer />
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

        {excerpt && (
          <div className="text-xs text-[var(--text-muted)] leading-relaxed mt-2 break-words whitespace-normal">
            {excerpt}
          </div>
        )}
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