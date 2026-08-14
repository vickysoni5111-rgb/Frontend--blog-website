"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/lib/api";
import GoogleTranslate from "@/components/GoogleTranslate";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-gray-200/60 dark:border-zinc-800/80 notranslate transition-colors duration-300 shadow-sm" translate="no">
      
      {/* ================= MAIN HEADER BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 lg:gap-4">
          
          {/* LEFT: MOBILE MENU BUTTON + BRAND LOGO */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              className="md:hidden p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-zinc-900 transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <Link
              href="/"
              className="flex items-center gap-2.5 font-display font-black text-xl sm:text-2xl tracking-tight text-black dark:text-white group"
            >
              <span className="bg-gradient-to-br from-red-500 to-red-700 text-white w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold shadow-lg shadow-red-600/25 group-hover:scale-105 transition-transform">
                FC
              </span>
              <span className="tracking-wide">Filmy<span className="text-red-600 dark:text-red-500">Charcha</span></span>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION (Single-line strict alignment) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className="px-2.5 lg:px-3.5 py-2 rounded-xl text-[11px] lg:text-xs font-bold tracking-wide whitespace-nowrap text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-zinc-900 transition-all"
            >
              HOME
            </Link>

            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                href={`/category/${c.id}`}
                className="px-2.5 lg:px-3.5 py-2 rounded-xl text-[11px] lg:text-xs font-bold tracking-wide whitespace-nowrap text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-zinc-900 transition-all"
              >
                {c.title.toUpperCase()}
              </Link>
            ))}

            <Link
              href="/top-news"
              className="px-2.5 lg:px-3.5 py-2 rounded-xl text-[11px] lg:text-xs font-bold tracking-wide whitespace-nowrap text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-zinc-900 transition-all"
            >
              TOP NEWS
            </Link>

            <Link
              href="/gallery"
              className="px-2.5 lg:px-3.5 py-2 rounded-xl text-[11px] lg:text-xs font-bold tracking-wide whitespace-nowrap text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-zinc-900 transition-all"
            >
              GALLERY
            </Link>

            <Link
              href="/contact"
              className="px-2.5 lg:px-3.5 py-2 rounded-xl text-[11px] lg:text-xs font-bold tracking-wide whitespace-nowrap text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-zinc-900 transition-all"
            >
              CONTACT
            </Link>
          </nav>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Search Button */}
            <button
              type="button"
              className="p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-xl transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Notifications Button */}
            <button
              type="button"
              className="hidden xs:inline-flex p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-xl transition-colors"
              aria-label="Notifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <ThemeToggle />

            {/* LANGUAGE TRANSLATE */}
            <div className="scale-90 sm:scale-95 origin-right">
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border-b border-gray-200 dark:border-zinc-800 shadow-2xl py-4 px-4 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-zinc-900 hover:text-red-600 transition"
            onClick={() => setOpen(false)}
          >
            HOME
          </Link>

          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={`/category/${c.id}`}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-zinc-900 hover:text-red-600 transition"
              onClick={() => setOpen(false)}
            >
              {c.title.toUpperCase()}
            </Link>
          ))}

          <Link
            href="/top-news"
            className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-zinc-900 hover:text-red-600 transition"
            onClick={() => setOpen(false)}
          >
            TOP NEWS
          </Link>

          <Link
            href="/gallery"
            className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-zinc-900 hover:text-red-600 transition"
            onClick={() => setOpen(false)}
          >
            GALLERY
          </Link>

          <Link
            href="/contact"
            className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-zinc-900 hover:text-red-600 transition"
            onClick={() => setOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}