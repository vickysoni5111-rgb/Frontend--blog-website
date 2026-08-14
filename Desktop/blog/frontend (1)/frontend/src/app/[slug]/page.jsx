import { notFound } from "next/navigation";
import { getPostBySlug, getTopNews, imageUrl, addHeadingIds } from "@/lib/api";
import CommentSection from "@/components/CommentSection";
import BreakingNewsSidebar from "@/components/BreakingNewsSidebar";

export async function generateMetadata({ params }) {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      alternates: post.seo?.canonicalUrl ? { canonical: post.seo.canonicalUrl } : undefined,
      openGraph: {
        title: post.seo?.og?.title || post.title,
        description: post.seo?.og?.description || post.excerpt,
        images: post.seo?.og?.image ? [imageUrl(post.seo.og.image)] : [],
      },
    };
  } catch (e) {
    return { title: "Post not found" };
  }
}

export default async function PostPage({ params }) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch (e) {
    notFound();
  }

  const breaking = await getTopNews().catch(() => []);
  // Right-corner widget should not repeat the post the reader is already on
  const sidebarPosts = breaking.filter((p) => p.slug !== params.slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 gap-10">
        <article className="md:col-span-2">
          {post.category && (
            <span className="inline-block bg-crimson text-white text-xs font-display uppercase px-3 py-1 rounded mb-3">
              {post.category}
            </span>
          )}
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-3">{post.title}</h1>
          <div className="text-sm text-muted mb-6">
            {new Date(post.publishDate).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readingTime} min read · {post.views} views
          </div>

          {post.featuredImage && (
            <img
              src={imageUrl(post.featuredImage)}
              alt={post.featuredImageAlt || post.title}
              className="w-full rounded-md mb-8"
            />
          )}

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: addHeadingIds(post.content) }} />

          {post.faq && post.faq.length > 0 && (
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h2 className="font-display text-xl font-bold mb-4">FAQs</h2>
              <div className="space-y-4">
                {post.faq.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-semibold">{f.question}</h3>
                    <p className="text-sm text-gray-700 mt-1">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="bg-surface text-xs px-3 py-1 rounded-full text-muted">
                  #{t}
                </span>
              ))}
            </div>
          )}

          <CommentSection postId={post._id} />
        </article>

        {/* Right-corner Breaking News widget, as requested */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <BreakingNewsSidebar posts={sidebarPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}