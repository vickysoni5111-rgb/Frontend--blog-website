
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function handleResponse(res) {
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || "Something went wrong");
  }
  return res.json();
}

// ---- Posts ----
export async function getLatestPosts() {
  const res = await fetch(`${API_URL}/posts/public`, { cache: "no-store" });
  return handleResponse(res);
}

export async function getPostBySlug(slug) {
  const res = await fetch(`${API_URL}/posts/slug/${slug}`, { cache: "no-store" });
  return handleResponse(res);
}

export async function getPostsByCategory(category) {
  const res = await fetch(`${API_URL}/posts/category/${category}`, { cache: "no-store" });
  return handleResponse(res);
}

export async function getTopNews() {
  const res = await fetch(`${API_URL}/posts/topnews`, { cache: "no-store" });
  return handleResponse(res);
}

export async function getGallery() {
  const res = await fetch(`${API_URL}/posts/gallery`, { cache: "no-store" });
  return handleResponse(res);
}

// ---- Comments ----
export async function getComments(postId) {
  const res = await fetch(`${API_URL}/comments?post=${postId}`, { cache: "no-store" });
  return handleResponse(res);
}

export async function postComment({ post, name, email, message }) {
  const res = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ post, name, email, message }),
  });
  return handleResponse(res);
}

// ---- Web Stories ----
export async function getWebStories() {
  const res = await fetch(`${API_URL}/webstories`, { cache: "no-store" });
  return handleResponse(res);
}

export async function getWebStoryBySlug(slug) {
  const res = await fetch(`${API_URL}/webstories/${slug}`, { cache: "no-store" });
  return handleResponse(res);
}

// ---- Helpers ----
export function imageUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const base = API_URL.replace("/api", "");
  return `${base}${path}`;
}

// Mirrors the backend's TOC id-generation logic so #anchor links in the
// Table of Contents actually land on the right heading inside post.content.
export function addHeadingIds(html) {
  if (!html) return html;
  return html.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, text) => {
    if (/\sid=/.test(attrs)) return match;
    const clean = text.replace(/<[^>]+>/g, "").trim();
    const id = clean
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
  });
}

export const CATEGORIES = [
  { id: "sports", title: "Sports" },
  { id: "hollywood", title: "Hollywood" },
  { id: "bollywood", title: "Bollywood" },
  { id: "webseries-ott", title: "Webseries OTT" },
];