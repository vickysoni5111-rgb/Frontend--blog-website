import { getTopNews } from "@/lib/api";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Top News" };

export default async function TopNewsPage() {
  const posts = await getTopNews().catch(() => []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl font-bold uppercase tracking-wide border-b-2 border-crimson pb-2 mb-8 inline-block">
        Top News
      </h1>
      {posts.length === 0 ? (
        <p className="text-muted">Abhi koi post top news me mark nahi hai.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <PostCard key={p._id} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
