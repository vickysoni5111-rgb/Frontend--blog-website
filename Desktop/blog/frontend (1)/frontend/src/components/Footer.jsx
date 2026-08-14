
import Link from "next/link";
import { CATEGORIES } from "@/lib/api";

const socialLinks = [
  {
    name: "X",
   
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
   
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.4 3.6Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
 
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.31-1.06-.35-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.04-1.17.21-1.8.35-2.23.19-.48.41-.96.77-1.38.36-.42.7-.68 1.18-.9.36-.16.9-.36 1.9-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.73.07-1 .04-1.54.21-1.9.35-.48.19-.82.41-1.18.77-.36.36-.58.7-.77 1.18-.14.36-.31.9-.35 1.9-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04 1 .21 1.54.35 1.9.19.48.41.82.77 1.18.36.36.7.58 1.18.77.36.14.9.31 1.9.35 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c1-.04 1.54-.21 1.9-.35.48-.19.82-.41 1.18-.77.36-.36.58-.7.77-1.18.14-.36.31-.9.35-1.9.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-1-.21-1.54-.35-1.9a3.16 3.16 0 0 0-.77-1.18 3.16 3.16 0 0 0-1.18-.77c-.36-.14-.9-.31-1.9-.35-1.23-.06-1.58-.07-4.73-.07Zm0 4.14a4.08 4.08 0 1 1 0 8.16 4.08 4.08 0 0 1 0-8.16Zm0 1.62a2.46 2.46 0 1 0 0 4.92 2.46 2.46 0 0 0 0-4.92Zm5.19-1.8a.95.95 0 1 1-1.9 0 .95.95 0 0 1 1.9 0Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
   
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Television", href: "/category/bollywood" },
  { label: "OTT", href: "/category/webseries-ott" },
  { label: "Hollywood", href: "/category/hollywood" },
  { label: "Bollywood", href: "/category/bollywood" },
  { label: "Sports", href: "/category/sports" },
  { label: "Trending", href: "/top-news" },
  { label: "Web Stories", href: "/" },
  { label: "Gallery", href: "/gallery" },
];



export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="font-display text-2xl font-bold mb-3">
              Filmy<span className="text-crimson">Charcha</span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-5">
              Latest entertainment, sports aur OTT news — sab ek jagah, ek
              dependable news source ki tarah.
            </p>

            <h5 className="text-sm font-semibold text-gray-300 mb-3">
              Follow Us
            </h5>

            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-gray-300 hover:bg-crimson hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wide mb-4 text-gray-300 border-b border-white/10 pb-2">
              Quick Links
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-400">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="hover:text-crimson transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

       
          {/* Categories */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wide mb-4 text-gray-300">
              Categories
            </h4>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.id}
                  href={`/category/${c.id}`}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300 hover:bg-crimson hover:text-white transition-colors duration-200"
                >
                  {c.title}
                </Link>
              ))}
            </div>

            <h4 className="font-display text-sm uppercase tracking-wide mt-6 mb-3 text-gray-300">
              Contact Us
            </h4>

            <Link
              href="/contact"
              className="text-xs inline-block px-3 py-1.5 rounded-full bg-white/5 text-gray-300 hover:bg-crimson hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 text-center text-xs text-gray-500 px-4 py-5">
        © {new Date().getFullYear()} FilmyCharcha. All rights reserved.
      </div>
    </footer>
  );
}
