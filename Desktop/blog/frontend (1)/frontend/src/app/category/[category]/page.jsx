import { getPostsByCategory, CATEGORIES } from "@/lib/api";
import PostCard from "@/components/PostCard";

export async function generateMetadata({ params }) {
  const cat = CATEGORIES.find((c) => c.id === params.category);
  return { title: cat ? `${cat.title} News` : "Category" };
}

export default async function CategoryPage({ params }) {
  const cat = CATEGORIES.find((c) => c.id === params.category);
  const posts = await getPostsByCategory(params.category).catch(() => []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl font-bold uppercase tracking-wide border-b-2 border-crimson pb-2 mb-8 inline-block">
        {cat ? cat.title : params.category}
      </h1>
      {posts.length === 0 ? (
        <p className="text-muted">Is category me abhi koi post nahi hai.</p>
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
