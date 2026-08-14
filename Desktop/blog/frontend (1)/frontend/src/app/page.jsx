
import Link from "next/link";
import { getLatestPosts, getTopNews, getWebStories, imageUrl, CATEGORIES } from "@/lib/api";
import PostCard from "@/components/PostCard";
import TopNewsSidebar from "@/components/TopNewsSidebar";
import WebStoriesSection from "@/components/WebStoriesSection";

const CATEGORY_ORDER = ["bollywood", "webseries-ott", "hollywood", "sports"];

export default async function HomePage() {
  const [posts, topNews, webStories] = await Promise.all([
    getLatestPosts().catch(() => []),
    getTopNews().catch(() => []),
    getWebStories().catch(() => []),
  ]);

  const [hero, ...rest] = posts;

  const orderedCategories = CATEGORY_ORDER
    .map((id) => CATEGORIES.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="md:col-span-2">
          {hero ? (
            <Link href={`/${hero.slug}`} className="group block">
              <div className="relative rounded-md overflow-hidden aspect-[16/9] bg-black">
                {hero.featuredImage ? (
                  <img
                    src={imageUrl(hero.featuredImage)}
                    alt={hero.featuredImageAlt || hero.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted">No image</div>
                )}
                {hero.category && (
                  <span className="corner-tag absolute top-0 left-0 bg-crimson text-white text-xs font-display uppercase px-4 py-1.5">
                    {hero.category}
                  </span>
                )}
              </div>
              <h1 className="font-display text-2xl md:text-3xl font-bold mt-4 leading-tight group-hover:text-crimson">
                {hero.title}
              </h1>
              {hero.excerpt && <p className="text-muted mt-2">{hero.excerpt}</p>}
            </Link>
          ) : (
            <div className="bg-surface rounded-md p-10 text-center text-muted">
              Abhi koi post published nahi hai. Admin dashboard se ek post publish karo.
            </div>
          )}
        </div>
        <TopNewsSidebar posts={topNews} />
      </section>

      <WebStoriesSection stories={webStories} />

      {orderedCategories.map((cat) => {
        const catPosts = rest.filter((p) => p.category === cat.id);
        if (catPosts.length === 0) return null;

        return (
          <section key={cat.id} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide border-b-2 border-crimson pb-2 inline-block">
                {cat.title}
              </h2>
             
            </div>
            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
              {catPosts.map((p) => (
                <div key={p._id} className="w-[260px] flex-shrink-0">
                  <PostCard post={p} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}