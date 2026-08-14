import Link from "next/link";

export default function BreakingNewsBar({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="bg-crimson text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex items-center">
        <span className="font-display text-xs uppercase tracking-wide bg-black/20 px-3 py-1.5 flex-shrink-0">
          Breaking
        </span>
        <div className="whitespace-nowrap overflow-hidden flex-1">
          <div className="inline-block animate-marquee py-1.5 text-sm">
            {posts.map((p) => (
              <Link key={p._id} href={`/${p.slug}`} className="mx-6 hover:underline">
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
