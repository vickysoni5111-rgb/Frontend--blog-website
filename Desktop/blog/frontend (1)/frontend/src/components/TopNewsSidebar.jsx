import Link from "next/link";

export default function TopNewsSidebar({ posts }) {
  return (
    <aside className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm transition-colors duration-200">
      {/* HEADER TITLE */}
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-zinc-800 pb-3 mb-4">
        <h2 className="font-display font-bold text-base sm:text-lg uppercase tracking-wide text-gray-900 dark:text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
          Top News
        </h2>
      </div>

      {(!posts || posts.length === 0) && (
        <p className="text-sm text-gray-500 dark:text-gray-400 py-4 text-center">
          Koi top news nahi hai abhi.
        </p>
      )}

      {/* LIST OF POSTS */}
      <ul className="space-y-4">
        {posts &&
          posts.slice(0, 6).map((p, i) => {
            const postDate = p.publishDate || p.createdAt;

            return (
              <li 
                key={p._id} 
                className="flex items-start gap-3.5 group pb-3.5 border-b border-gray-100 dark:border-zinc-800/60 last:border-0 last:pb-0"
              >
                {/* NUMBER BADGE */}
                <span className="font-display text-red-600 dark:text-red-500 text-lg sm:text-xl font-extrabold w-7 h-7 rounded-lg bg-red-50 dark:bg-red-950/40 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-200">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* NEWS CONTENT */}
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/${p.slug}`}
                    className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug line-clamp-2 block"
                  >
                    {p.title}
                  </Link>

                  {/* DATE + TIME */}
                  {postDate && (
                    <div className="text-[11px] text-gray-400 dark:text-gray-500 mt-1.5 flex items-center gap-1 font-medium">
                      <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {new Date(postDate).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
      </ul>
    </aside>
  );
}