import { Link } from "react-router-dom";

export default function JournalCard({ title, excerpt, date, id }: any) {
  return (
    <Link to={`/article/${id}`}>
      <div className="border-b border-[var(--border)] py-6">

        <div className="text-xs text-[var(--text-muted)] font-mono">
          {new Date(date).toDateString()}
        </div>

        <h2 className="text-xl font-semibold mt-2">
          {title}
        </h2>

        <p className="mt-2 text-[var(--text-muted)]">
          {excerpt}
        </p>

      </div>
    </Link>
  );
}