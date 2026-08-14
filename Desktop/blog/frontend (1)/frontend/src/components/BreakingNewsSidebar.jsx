import Link from "next/link";

// Dark "Breaking News" widget for the right column of pages (matches the
// homepage feel but stays compact enough for a sidebar).
export default function BreakingNewsSidebar({ posts, title = "Breaking News" }) {
  if (!posts || posts.length === 0) return null;

  return (
    <aside className="bg-ink text-white rounded-md overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <span className="w-1.5 h-5 bg-gradient-to-b from-crimson to-gold rounded-full"></span>
        <h2 className="font-display text-sm uppercase tracking-widest font-bold">{title}</h2>
      </div>
      <ul>
        {posts.map((p, i) => (
          <li key={p._id} className={i !== posts.length - 1 ? "border-b border-white/10" : ""}>
            <Link href={`/${p.slug}`} className="block px-4 py-3 text-sm leading-snug hover:text-crimson">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
