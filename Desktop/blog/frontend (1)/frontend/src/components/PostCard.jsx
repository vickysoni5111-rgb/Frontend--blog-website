import Link from "next/link";
import { imageUrl } from "@/lib/api";

export default function PostCard({ post }) {
  const postDate = post.publishDate || post.createdAt;

  return (
    <Link href={`/${post.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-md bg-surface aspect-[4/3]">
        {post.featuredImage ? (
          <img
            src={imageUrl(post.featuredImage)}
            alt={post.featuredImageAlt || post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted text-sm">
            No image
          </div>
        )}

        {post.category && (
          <span className="corner-tag absolute top-0 left-0 bg-crimson text-white text-[11px] font-display uppercase px-3 py-1">
            {post.category}
          </span>
        )}
      </div>

      {/* TITLE */}
      <h3 className="font-display text-base font-semibold mt-3 leading-snug group-hover:text-crimson">
        {post.title}
      </h3>

      {/* EXCERPT */}
      {post.excerpt && (
        <p className="text-sm text-muted mt-1 line-clamp-2">
          {post.excerpt}
        </p>
      )}

      {/* DATE + TIME */}
      {postDate && (
        <div className="text-xs text-muted mt-2">
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
    </Link>
  );
}