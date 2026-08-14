import { getGallery, imageUrl } from "@/lib/api";

export const metadata = { title: "Gallery" };

export default async function GalleryPage() {
  const items = await getGallery().catch(() => []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl font-bold uppercase tracking-wide border-b-2 border-crimson pb-2 mb-8 inline-block">
        Gallery
      </h1>
      {items.length === 0 ? (
        <p className="text-muted">Abhi koi image nahi hai.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((p) => (
            <div key={p._id} className="block rounded-md overflow-hidden aspect-square bg-surface">
              <img
                src={imageUrl(p.featuredImage)}
                alt={p.featuredImageAlt || p.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
